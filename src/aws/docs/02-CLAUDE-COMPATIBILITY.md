# Integration with Existing AWS Infrastructure

## Overview

The deployment workflows have been configured to work with your **existing AWS environment**. No changes to your AWS infrastructure are required - the workflows integrate seamlessly with what you already have.

---

## ✅ What's Been Configured

### 1. GitHub Actions Workflows

**Location:** `/.github/workflows/`

| Workflow File | Purpose | Trigger |
|--------------|---------|----|
| `deploy-aws.yml` | Deploy to your existing AWS S3 + CloudFront | Push to `main` or manual |
| `deploy-vercel.yml` | Deploy to Vercel | Push to `main`/`staging` or PR |
| `deploy-both.yml` | Deploy to both platforms | Push to `main` or manual |

**Key Features:**
- ✅ Uses AWS OIDC (no access keys in GitHub)
- ✅ Syncs to your existing S3 bucket
- ✅ Invalidates your existing CloudFront distribution
- ✅ Respects your existing cache policies

### 2. Workflow Configuration

The AWS workflow is configured to match typical AWS setups:

```yaml
# Region
AWS_REGION: ap-southeast-2  # Sydney

# Authentication
Uses OIDC via aws-actions/configure-aws-credentials@v4

# Deployment Steps
1. Build project (npm run build → dist/)
2. Sync to S3 (excluding index.html first)
3. Upload index.html with no-cache
4. Invalidate CloudFront cache
```

---

## 🔗 Integration Points

### Your Existing S3 Bucket

**What the workflow expects:**
- Bucket name provided via GitHub secret `AWS_S3_BUCKET`
- Website hosting enabled (index.html as index document)
- Bucket policy allows CloudFront OAC access
- Error document: index.html (for SPA routing)

**What the workflow does:**
- Syncs `dist/` folder to bucket root
- Sets cache headers: 1 year for assets, no-cache for HTML
- Uses `--delete` flag to remove old files

**S3 sync command used:**
```bash
aws s3 sync dist/ s3://YOUR_BUCKET/ \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "index.html" \
  --exclude "*.json"

aws s3 cp dist/index.html s3://YOUR_BUCKET/index.html \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html"
```

### Your Existing CloudFront Distribution

**What the workflow expects:**
- Distribution ID provided via GitHub secret `AWS_CLOUDFRONT_DISTRIBUTION_ID`
- S3 bucket configured as origin
- OAC (Origin Access Control) attached
- SSL certificate configured

**What the workflow does:**
- Creates cache invalidation for all paths (`/*`)
- Waits for S3 sync to complete before invalidating
- Invalidation ensures fresh content is served

**CloudFront invalidation command used:**
```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

### Your Existing IAM Role

**What the workflow expects:**
- IAM role ARN provided via GitHub secret `AWS_ROLE_ARN`
- Role configured for GitHub OIDC authentication
- Permissions for S3 and CloudFront

**Required IAM permissions:**
- `s3:PutObject` - Upload files
- `s3:DeleteObject` - Remove old files
- `s3:ListBucket` - Sync comparison
- `cloudfront:CreateInvalidation` - Cache invalidation
- `cloudfront:GetInvalidation` - Check status

**Trust policy must allow:**
- Federated: `token.actions.githubusercontent.com`
- Condition: Your GitHub repo

---

## 🔒 Security Model

### OIDC Authentication (No Access Keys!)

The workflow uses **OpenID Connect (OIDC)** to authenticate with AWS:

```
GitHub Actions → OIDC Token → AWS STS → Temporary Credentials
```

**Benefits:**
- ✅ No static AWS access keys
- ✅ Short-lived credentials (1 hour)
- ✅ Scoped to specific repo and branch
- ✅ Audit trail in CloudTrail

**How it works:**
1. GitHub Actions requests OIDC token
2. AWS verifies token against trust policy
3. AWS STS assumes role and returns temporary credentials
4. Workflow uses temporary credentials for deployment
5. Credentials expire after job completes

---

## 📋 Required GitHub Secrets

These secrets tell the workflow where your AWS resources are:

| Secret Name | What It Is | Example | How to Find |
|------------|-----------|---------|-------------|
| `AWS_ROLE_ARN` | IAM role that GitHub can assume | `arn:aws:iam::123456789012:role/GitHubActionsRole` | AWS IAM Console → Roles → Select role → Copy ARN |
| `AWS_S3_BUCKET` | Your S3 bucket name | `verafyai-website` | AWS S3 Console → Copy bucket name |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | Your CloudFront distribution ID | `E1234567890ABC` | AWS CloudFront Console → Copy ID |

**To add secrets:**
1. Go to GitHub repository
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add each secret above

---

## 🔄 Deployment Flow

### Automatic Deployment (Recommended)

```
Developer pushes to main
         ↓
GitHub Actions triggered
         ↓
Workflow assumes IAM role via OIDC
         ↓
npm ci && npm run build
         ↓
Sync dist/ to YOUR S3 bucket
         ↓
Invalidate YOUR CloudFront distribution
         ↓
Website updated (5-15 min for CDN propagation)
```

### Manual Deployment

1. Go to GitHub → Actions
2. Select "Deploy to AWS"
3. Click "Run workflow"
4. Choose branch: `main`
5. Click "Run workflow"

---

## 🎯 What Hasn't Changed

Your existing AWS infrastructure remains **completely unchanged**:

- ✅ Same S3 bucket
- ✅ Same CloudFront distribution
- ✅ Same domain (verafyai.com.au)
- ✅ Same SSL certificate
- ✅ Same cache policies
- ✅ Same IAM roles and permissions
- ✅ Same Route53 DNS records

**The workflows simply automate what you would do manually:**
- Upload files to S3 (instead of AWS Console)
- Invalidate CloudFront (instead of manual invalidation)

---

## 📊 Comparison: Before vs After

### Before (Manual Deployment)

```bash
# 1. Build locally
npm run build

# 2. Upload to S3
aws s3 sync dist/ s3://verafyai-website/ --delete

# 3. Invalidate CloudFront
aws cloudfront create-invalidation \
  --distribution-id E1234567890ABC \
  --paths "/*"

# 4. Wait 10-15 minutes
# 5. Check website
```

**Time:** 2-3 minutes + waiting  
**Risk:** Manual errors, forgotten steps  
**Audit:** No automatic log

### After (Automated Deployment)

```bash
# Just push to GitHub
git push origin main
```

**Time:** 30 seconds (automated)  
**Risk:** None - consistent every time  
**Audit:** Full GitHub Actions log

---

## 🧪 Testing the Integration

### Test 1: Verify Secrets

```bash
# In GitHub Actions, run this workflow step:
- name: Test AWS access
  run: |
    aws sts get-caller-identity
    aws s3 ls s3://${{ secrets.AWS_S3_BUCKET }}/
    aws cloudfront get-distribution --id ${{ secrets.AWS_CLOUDFRONT_DISTRIBUTION_ID }}
```

**Expected:** All commands succeed

### Test 2: Deploy Small Change

```bash
# Make trivial change
echo "<!-- Test -->" >> README.md

# Commit and push
git add README.md
git commit -m "test: verify AWS integration"
git push origin main
```

**Expected:** 
- GitHub Actions runs
- Files sync to S3
- CloudFront invalidation created
- Website updates

### Test 3: Verify on Website

```bash
# Check deployment
curl -I https://verafyai.com.au

# Should show:
# HTTP/2 200
# x-cache: Miss from cloudfront (first request after invalidation)
```

---

## 🔍 Monitoring

### GitHub Actions

**View deployment logs:**
1. Go to repository → Actions tab
2. Select workflow run
3. Click on "Deploy to AWS" job
4. Expand steps to see detailed logs

**What to look for:**
- ✅ "Configure AWS credentials" - Shows role assumed
- ✅ "Sync files to S3" - Shows files uploaded
- ✅ "Invalidate CloudFront cache" - Shows invalidation ID
- ✅ "Deployment summary" - Shows success/failure

### AWS CloudWatch

**Monitor S3:**
- S3 Console → Your bucket → Metrics
- Shows: Requests, Bytes downloaded, Errors

**Monitor CloudFront:**
- CloudFront Console → Your distribution → Monitoring
- Shows: Requests, Data transfer, Error rate

**CloudTrail (Audit):**
- CloudTrail Console → Event history
- Filter: Event name = "PutObject", "CreateInvalidation"
- Shows: Who deployed, when, from where (GitHub Actions)

---

## ⚠️ Important Notes

### CloudFront Invalidation Timing

**Invalidations are not instant:**
- Creation: 1-2 seconds
- Propagation: 5-15 minutes (usually 5-7)
- Global: Can take up to 15 minutes

**What this means:**
- Deployment "succeeds" immediately
- Website may show old content for 5-15 minutes
- No errors - this is normal behavior

**How to verify:**
```bash
# Check invalidation status
aws cloudfront get-invalidation \
  --distribution-id YOUR_ID \
  --id INVALIDATION_ID

# Status will be:
# "InProgress" → Still propagating
# "Completed" → Done (all edge locations updated)
```

### S3 Sync `--delete` Flag

**The workflow uses `--delete`:**
```bash
aws s3 sync dist/ s3://bucket/ --delete
```

**This means:**
- Files in S3 not in `dist/` are **deleted**
- Keeps S3 in sync with your build
- Removes old/renamed files automatically

**Be aware:**
- Don't manually upload files to S3
- All content should be in your Git repo
- Build process creates complete site in `dist/`

### Cache Headers

**The workflow sets these cache headers:**

| File Type | Cache-Control | Rationale |
|-----------|--------------|-----------|
| `*.js`, `*.css`, assets | `public, max-age=31536000, immutable` | 1 year - files have hash in name |
| `index.html` | `no-cache, no-store, must-revalidate` | Always fetch latest |
| `*.json` | `no-cache, no-store, must-revalidate` | Always fetch latest |

**This optimizes:**
- Performance: Assets cached 1 year at CDN edge
- Freshness: HTML always fetched (to get new asset URLs)
- User experience: Fast loads, always latest version

---

## 🚨 Troubleshooting

### Deployment fails with "Access Denied"

**Cause:** IAM role doesn't have S3 permissions

**Check:**
```bash
# Verify role permissions
aws iam get-role-policy --role-name GitHubActionsRole --policy-name YourPolicy

# Or list attached policies
aws iam list-attached-role-policies --role-name GitHubActionsRole
```

**Fix:** Attach S3 full access policy (see AWS_SETUP_GUIDE.md)

### CloudFront shows old content

**Cause:** Cache hasn't invalidated yet, or browser cache

**Check:**
```bash
# List recent invalidations
aws cloudfront list-invalidations --distribution-id YOUR_ID

# Check specific invalidation
aws cloudfront get-invalidation --distribution-id YOUR_ID --id INVALIDATION_ID
```

**Fix:**
- Wait 5-15 minutes for propagation
- Hard refresh browser (Ctrl+Shift+R)
- Test in incognito/private mode

### "Unable to locate credentials"

**Cause:** GitHub secret `AWS_ROLE_ARN` not set

**Fix:**
1. Go to repository Settings → Secrets and variables → Actions
2. Add secret `AWS_ROLE_ARN` with your role ARN
3. Re-run workflow

---

## 📞 Next Steps

1. **Add GitHub Secrets** (see AWS_SETUP_GUIDE.md)
   - AWS_ROLE_ARN
   - AWS_S3_BUCKET
   - AWS_CLOUDFRONT_DISTRIBUTION_ID

2. **Test deployment:**
   ```bash
   git commit --allow-empty -m "test: AWS integration"
   git push origin main
   ```

3. **Monitor in GitHub Actions:**
   - Watch workflow execute
   - Check each step succeeds
   - Note CloudFront invalidation ID

4. **Verify on website:**
   - Wait 5-10 minutes
   - Visit https://verafyai.com.au
   - Confirm changes are live

5. **Set up Vercel (optional):**
   - See DUAL_DEPLOYMENT_GUIDE.md
   - Run both AWS and Vercel deployments

---

## ✅ Checklist

- [ ] Workflows moved to `/.github/workflows/`
- [ ] GitHub secret `AWS_ROLE_ARN` added
- [ ] GitHub secret `AWS_S3_BUCKET` added
- [ ] GitHub secret `AWS_CLOUDFRONT_DISTRIBUTION_ID` added
- [ ] IAM role has S3 and CloudFront permissions
- [ ] IAM role trust policy allows GitHub OIDC
- [ ] Test deployment triggered
- [ ] Deployment succeeds in GitHub Actions
- [ ] CloudFront invalidation completes
- [ ] Website shows updated content

---

**Status:** ✅ Ready to deploy  
**Integration:** Complete - works with existing AWS infrastructure  
**No changes required:** Your AWS setup remains unchanged

See **AWS_SETUP_GUIDE.md** for detailed setup instructions.
