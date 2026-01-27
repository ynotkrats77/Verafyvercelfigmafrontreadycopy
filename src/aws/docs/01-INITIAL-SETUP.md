# AWS Deployment Setup Guide
## For Existing AWS Infrastructure

This guide helps you configure the deployment workflows to work with your **existing AWS environment**.

---

## 📋 Prerequisites

You already have:
- ✅ AWS S3 bucket configured
- ✅ CloudFront distribution set up
- ✅ IAM role for GitHub Actions (OIDC)
- ✅ Route53 DNS (optional)

---

## 🔑 Required GitHub Secrets

Add these secrets to your GitHub repository:

**Settings → Secrets and variables → Actions → New repository secret**

### AWS Secrets

| Secret Name | Description | Example Value | Where to Find |
|------------|-------------|---------------|---------------|
| `AWS_ROLE_ARN` | IAM role ARN for GitHub Actions | `arn:aws:iam::123456789012:role/GitHubActionsRole` | AWS IAM Console → Roles |
| `AWS_S3_BUCKET` | S3 bucket name | `verafyai-website` | AWS S3 Console |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID | `E1234567890ABC` | AWS CloudFront Console |
| `AWS_REGION` | AWS region (optional, defaults to ap-southeast-2) | `ap-southeast-2` | Your region |

### Vercel Secrets (if using dual deployment)

| Secret Name | Description | Where to Find |
|------------|-------------|---------------|
| `VERCEL_TOKEN` | Vercel authentication token | https://vercel.com/account/tokens |
| `VERCEL_ORG_ID` | Team/org ID | `.vercel/project.json` after running `vercel link` |
| `VERCEL_PROJECT_ID` | Project ID | `.vercel/project.json` after running `vercel link` |

---

## 🏗️ Your Current AWS Infrastructure

Based on your existing setup, you have:

```
┌─────────────────────────────────────┐
│  Route53 DNS (verafyai.com.au)     │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  CloudFront Distribution            │
│  - Global CDN                       │
│  - SSL/TLS certificate              │
│  - Cache behaviors                  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  S3 Bucket (Static Website)         │
│  - Website hosting enabled          │
│  - Bucket policy for CloudFront     │
│  - Origin Access Control (OAC)      │
└─────────────────────────────────────┘
```

---

## 🔧 Configuration Steps

### Step 1: Get Your AWS Values

#### A. Find S3 Bucket Name

```bash
# List your S3 buckets
aws s3 ls

# Example output:
# 2024-01-01 12:00:00 verafyai-website
```

**Set as GitHub Secret:**
- Name: `AWS_S3_BUCKET`
- Value: `verafyai-website` (your actual bucket name)

#### B. Find CloudFront Distribution ID

```bash
# List CloudFront distributions
aws cloudfront list-distributions --query 'DistributionList.Items[*].[Id,DomainName,Origins.Items[0].DomainName]' --output table

# Or via AWS Console:
# CloudFront → Distributions → copy the ID (starts with E)
```

**Set as GitHub Secret:**
- Name: `AWS_CLOUDFRONT_DISTRIBUTION_ID`
- Value: `E1234567890ABC` (your actual distribution ID)

#### C. Find IAM Role ARN

```bash
# List IAM roles
aws iam list-roles --query 'Roles[?contains(RoleName, `GitHub`)].Arn' --output table

# Or create new role (see below)
```

**Set as GitHub Secret:**
- Name: `AWS_ROLE_ARN`
- Value: `arn:aws:iam::123456789012:role/GitHubActionsRole`

---

### Step 2: Create/Verify IAM Role for GitHub Actions

Your IAM role must allow GitHub Actions to:
1. Upload to S3
2. Invalidate CloudFront cache
3. Use OIDC authentication (no access keys needed)

#### Create IAM Role (if you don't have one)

**1. Create Trust Policy**

Save as `trust-policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::YOUR_AWS_ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:YOUR_GITHUB_ORG/YOUR_REPO:*"
        }
      }
    }
  ]
}
```

**Replace:**
- `YOUR_AWS_ACCOUNT_ID` - Your 12-digit AWS account ID
- `YOUR_GITHUB_ORG/YOUR_REPO` - e.g., `octocat/my-repo`

**2. Create the Role**

```bash
# Create role
aws iam create-role \
  --role-name GitHubActionsRole \
  --assume-role-policy-document file://trust-policy.json

# Attach S3 permissions
aws iam attach-role-policy \
  --role-name GitHubActionsRole \
  --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess

# Attach CloudFront permissions
aws iam attach-role-policy \
  --role-name GitHubActionsRole \
  --policy-arn arn:aws:iam::aws:policy/CloudFrontFullAccess

# Get role ARN
aws iam get-role --role-name GitHubActionsRole --query 'Role.Arn' --output text
```

**3. Add OIDC Provider (first time only)**

```bash
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --client-id-list sts.amazonaws.com \
  --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1
```

---

### Step 3: Verify S3 Bucket Configuration

#### Check Website Hosting

```bash
aws s3api get-bucket-website --bucket YOUR_BUCKET_NAME
```

**Expected output:**
```json
{
  "IndexDocument": {
    "Suffix": "index.html"
  },
  "ErrorDocument": {
    "Key": "index.html"
  }
}
```

#### Check Bucket Policy

```bash
aws s3api get-bucket-policy --bucket YOUR_BUCKET_NAME
```

The policy should allow CloudFront to access the bucket via OAC.

---

### Step 4: Verify CloudFront Configuration

#### Check Distribution Settings

```bash
aws cloudfront get-distribution-config --id YOUR_DISTRIBUTION_ID
```

**Verify:**
- ✅ S3 bucket is configured as origin
- ✅ Origin Access Control (OAC) is attached
- ✅ Cache behaviors are set
- ✅ SSL certificate is valid
- ✅ Custom domain (if applicable) is configured

---

## 🚀 Testing the Deployment

### Test 1: Manual Workflow Trigger

1. Go to your GitHub repository
2. Click **Actions** tab
3. Select **Deploy to AWS** workflow
4. Click **Run workflow**
5. Select branch: `main`
6. Click **Run workflow**

**Expected behavior:**
- ✅ Checkout succeeds
- ✅ Build completes
- ✅ AWS credentials configure
- ✅ S3 sync succeeds
- ✅ CloudFront invalidation starts
- ✅ Deployment summary shows

### Test 2: Automatic Deployment

```bash
# Make a small change
echo "# Test" >> README.md

# Commit and push
git add README.md
git commit -m "test: verify AWS deployment"
git push origin main
```

**Expected behavior:**
- GitHub Actions triggers automatically
- AWS deployment workflow runs
- Website updates on S3
- CloudFront cache invalidates
- Changes visible on your domain

---

## 🔍 Troubleshooting

### Issue: "Access Denied" when syncing to S3

**Cause:** IAM role doesn't have S3 permissions

**Fix:**
```bash
# Add S3 full access policy
aws iam attach-role-policy \
  --role-name GitHubActionsRole \
  --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess
```

### Issue: "Invalid CloudFront distribution ID"

**Cause:** Wrong distribution ID or doesn't exist

**Fix:**
```bash
# List all distributions
aws cloudfront list-distributions

# Verify ID starts with 'E' and is uppercase
```

### Issue: "Unable to locate credentials"

**Cause:** GitHub secret `AWS_ROLE_ARN` not set or incorrect

**Fix:**
1. Go to GitHub → Settings → Secrets and variables → Actions
2. Verify `AWS_ROLE_ARN` secret exists
3. Value should be: `arn:aws:iam::ACCOUNT_ID:role/ROLE_NAME`

### Issue: "Error assuming role"

**Cause:** Trust policy doesn't allow GitHub Actions

**Fix:**
```bash
# Update trust policy to allow your repo
# See "Create IAM Role" section above
```

### Issue: CloudFront still shows old content

**Cause:** Cache hasn't been invalidated or invalidation is slow

**Fix:**
```bash
# Manual invalidation
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"

# Check invalidation status
aws cloudfront list-invalidations \
  --distribution-id YOUR_DISTRIBUTION_ID
```

**Note:** CloudFront invalidations can take 5-15 minutes.

---

## 📊 Monitoring Deployments

### GitHub Actions Dashboard

1. Go to **Actions** tab
2. Select a workflow run
3. Review each step:
   - ✅ Green = Success
   - ❌ Red = Failed
   - ⏭️ Gray = Skipped

### AWS CloudWatch

Monitor S3 and CloudFront:

```bash
# Check S3 bucket size
aws s3 ls s3://YOUR_BUCKET_NAME --recursive --human-readable --summarize

# Check CloudFront metrics (AWS Console)
# CloudFront → Reports & analytics
```

---

## 📝 Environment Variables Reference

### GitHub Workflow Uses

The workflows use these environment variables:

```yaml
env:
  AWS_REGION: ap-southeast-2        # From workflow file
  NODE_VERSION: '18'                # From workflow file
  VITE_APP_NAME: "Verafy AI"       # Build time
  VITE_DEPLOYMENT_TARGET: "aws"     # Build time
  VITE_APP_URL: "https://verafyai.com.au"  # Build time
```

### GitHub Secrets Used

```yaml
secrets:
  AWS_ROLE_ARN: ${{ secrets.AWS_ROLE_ARN }}
  AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
  AWS_CLOUDFRONT_DISTRIBUTION_ID: ${{ secrets.AWS_CLOUDFRONT_DISTRIBUTION_ID }}
```

---

## ✅ Deployment Checklist

Before first deployment:

- [ ] AWS S3 bucket exists and is configured for website hosting
- [ ] CloudFront distribution is set up with S3 as origin
- [ ] IAM role for GitHub Actions is created with OIDC
- [ ] IAM role has S3 and CloudFront permissions
- [ ] GitHub secret `AWS_ROLE_ARN` is set
- [ ] GitHub secret `AWS_S3_BUCKET` is set
- [ ] GitHub secret `AWS_CLOUDFRONT_DISTRIBUTION_ID` is set
- [ ] Workflows are in `.github/workflows/` directory
- [ ] Package.json has `npm run build` script
- [ ] Test manual deployment via GitHub Actions
- [ ] Verify website loads after deployment
- [ ] Check CloudFront invalidation completes

---

## 🔄 Sync with Existing Setup

Your existing AWS setup should have these characteristics. The workflows are configured to match:

### S3 Configuration
- **Bucket policy:** Allows CloudFront OAC access
- **Website hosting:** Enabled with index.html
- **Error document:** index.html (for SPA routing)
- **Public access:** Blocked (access via CloudFront only)

### CloudFront Configuration
- **Origin:** S3 bucket
- **Origin Access:** OAC (Origin Access Control)
- **Cache behaviors:** Static assets cached long, HTML short
- **SSL:** Certificate attached
- **Custom domain:** verafyai.com.au (if configured)

### Workflow Configuration
- **Region:** `ap-southeast-2` (Sydney)
- **Caching:** 1 year for assets, no-cache for HTML
- **Invalidation:** `/*` after every deployment
- **Build:** Vite outputs to `dist/`

---

## 📞 Support

If you encounter issues:

1. **Check GitHub Actions logs** - Most detailed error information
2. **Check AWS CloudWatch** - S3 and CloudFront metrics
3. **Verify secrets** - Go to Settings → Secrets and variables → Actions
4. **Test AWS CLI** - Run commands locally to verify access

**Common Commands:**

```bash
# Test AWS credentials
aws sts get-caller-identity

# Test S3 access
aws s3 ls s3://YOUR_BUCKET_NAME/

# Test CloudFront access
aws cloudfront get-distribution --id YOUR_DISTRIBUTION_ID

# Manual sync (for testing)
aws s3 sync dist/ s3://YOUR_BUCKET_NAME/ --delete
```

---

**Last Updated:** January 11, 2026  
**AWS Region:** ap-southeast-2 (Sydney)  
**Compatible With:** Your existing AWS infrastructure
