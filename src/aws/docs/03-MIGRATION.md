# Migration Checklist
## Syncing Figma Make to Your Existing GitHub Repo

This checklist helps you move the dual deployment configuration from Figma Make to your existing GitHub repository with AWS infrastructure.

---

## 📋 Overview

You have:
- ✅ Existing GitHub repository with AWS setup
- ✅ Figma Make version with dual deployment code

You need to:
- 🔄 Copy deployment files from Figma Make to GitHub repo
- 🔄 Add GitHub secrets
- 🔄 Test deployment

---

## 📦 Files to Copy

### 1. GitHub Actions Workflows (CRITICAL)

**Copy these files:**

```
FROM Figma Make:  /.github/workflows/
TO GitHub repo:   /.github/workflows/

Files:
- deploy-aws.yml
- deploy-vercel.yml  
- deploy-both.yml
```

**Action:**
```bash
# In your GitHub repo
mkdir -p .github/workflows

# Copy from Figma Make
cp /path/to/figma-make/.github/workflows/*.yml .github/workflows/

# Or manually download and create in GitHub web interface
```

---

### 2. Deployment Scripts (OPTIONAL)

**Copy these files:**

```
FROM Figma Make:  /scripts/
TO GitHub repo:   /scripts/

Files:
- deploy-aws.sh
- deploy-vercel.sh
- deploy-both.sh
- setup.sh
```

**Action:**
```bash
# In your GitHub repo
mkdir -p scripts
cp /path/to/figma-make/scripts/*.sh scripts/
chmod +x scripts/*.sh
```

**Use case:** Local manual deployments

---

### 3. Documentation (RECOMMENDED)

**Copy these files:**

```
FROM Figma Make:
TO GitHub repo:

Core Documentation:
- EXISTING_AWS_INTEGRATION.md  ← How it works with your AWS
- AWS_SETUP_GUIDE.md           ← Configuration steps
- SETUP_COMPLETE.md            ← Quick reference
- MIGRATION_CHECKLIST.md       ← This file

Optional Documentation:
- DUAL_DEPLOYMENT_GUIDE.md     ← Full dual setup guide
- SYNC_STRATEGY.md             ← How sync works
- ARCHITECTURE_DIAGRAM.md      ← Visual diagrams
- QUICK_START.md               ← Quick reference
- INDEX.md                     ← Documentation index
```

**Action:**
```bash
# Copy core docs
cp /path/to/figma-make/EXISTING_AWS_INTEGRATION.md .
cp /path/to/figma-make/AWS_SETUP_GUIDE.md .
cp /path/to/figma-make/SETUP_COMPLETE.md .

# Optional: Copy all docs
cp /path/to/figma-make/*.md .
```

---

### 4. Configuration Files (REVIEW)

**Check these files:**

```
FROM Figma Make:  /vercel.json
TO GitHub repo:   /vercel.json
```

**Action:**
- Review if you plan to use Vercel
- Vercel configuration for caching, headers, redirects

**DO NOT COPY if you only want AWS deployment.**

---

### 5. Package.json Updates (MERGE)

**Add these scripts to your `package.json`:**

```json
{
  "scripts": {
    "deploy:aws": "bash scripts/deploy-aws.sh",
    "deploy:vercel": "bash scripts/deploy-vercel.sh",
    "deploy:both": "bash scripts/deploy-both.sh"
  }
}
```

**Action:**
```bash
# Manually edit your package.json
# Add the three scripts above to the "scripts" section
```

---

## 🔑 GitHub Secrets to Add

**Required for AWS deployment:**

Go to: **GitHub repo → Settings → Secrets and variables → Actions**

| Secret Name | Value | How to Find |
|------------|-------|-------------|
| `AWS_ROLE_ARN` | `arn:aws:iam::123456:role/YourRole` | AWS IAM Console → Roles → Copy ARN |
| `AWS_S3_BUCKET` | Your S3 bucket name | AWS S3 Console → Bucket name |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | `E1234567890ABC` | AWS CloudFront Console → Distribution ID |

**Optional for Vercel deployment:**

| Secret Name | Value | How to Find |
|------------|-------|-------------|
| `VERCEL_TOKEN` | Your auth token | https://vercel.com/account/tokens |
| `VERCEL_ORG_ID` | `team_xxxxx` | Run `vercel link`, check `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | `prj_xxxxx` | Run `vercel link`, check `.vercel/project.json` |

---

## ✅ Step-by-Step Migration

### Step 1: Backup Your Existing Repo

```bash
# Create a backup branch
git checkout -b backup-before-deployment-setup
git push origin backup-before-deployment-setup

# Return to main
git checkout main
```

### Step 2: Copy Workflow Files

**Option A: Via Git (if both are Git repos)**

```bash
# In your GitHub repo
mkdir -p .github/workflows

# Copy workflows
cp /path/to/figma-make-export/.github/workflows/*.yml .github/workflows/

# Verify files exist
ls -la .github/workflows/
```

**Option B: Via GitHub Web Interface**

1. Go to your GitHub repo
2. Click "Add file" → "Create new file"
3. Name: `.github/workflows/deploy-aws.yml`
4. Copy content from Figma Make version
5. Repeat for `deploy-vercel.yml` and `deploy-both.yml`

### Step 3: Add GitHub Secrets

1. Go to your GitHub repo
2. Click **Settings**
3. Click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add all required secrets (see table above)

### Step 4: Copy Documentation

```bash
# Copy core documentation
cp /path/to/figma-make/EXISTING_AWS_INTEGRATION.md .
cp /path/to/figma-make/AWS_SETUP_GUIDE.md .
cp /path/to/figma-make/SETUP_COMPLETE.md .

# Update INDEX.md or README.md with links to new docs
```

### Step 5: Update package.json

```bash
# Edit package.json manually
# Add deployment scripts:

{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy:aws": "bash scripts/deploy-aws.sh",
    "deploy:vercel": "bash scripts/deploy-vercel.sh",
    "deploy:both": "bash scripts/deploy-both.sh"
  }
}
```

### Step 6: Commit Changes

```bash
# Stage new files
git add .github/workflows/
git add scripts/
git add *.md
git add package.json

# Commit
git commit -m "feat: add dual deployment workflows for AWS and Vercel"

# Push
git push origin main
```

### Step 7: Test Deployment

```bash
# Option A: Automatic (push triggers deployment)
git commit --allow-empty -m "test: verify AWS deployment"
git push origin main

# Option B: Manual trigger
# Go to GitHub → Actions → Deploy to AWS → Run workflow
```

### Step 8: Verify

1. **Check GitHub Actions:**
   - Go to Actions tab
   - Watch "Deploy to AWS" workflow
   - All steps should be green ✅

2. **Check S3:**
   - Go to AWS S3 Console
   - Open your bucket
   - Verify files uploaded

3. **Check CloudFront:**
   - Go to AWS CloudFront Console
   - Check Invalidations tab
   - Should see new invalidation

4. **Check Website:**
   - Visit https://verafyai.com.au
   - Wait 5-10 minutes
   - Verify changes are live

---

## 🔍 Comparing: Figma Make vs Your Repo

### What's the Same

| Feature | Figma Make | Your Repo |
|---------|-----------|-----------|
| AWS S3 bucket | ✅ | ✅ (existing) |
| CloudFront | ✅ | ✅ (existing) |
| Build process | ✅ | ✅ (existing) |
| Domain | ✅ | ✅ (existing) |

### What's Different

| Feature | Figma Make | Your Repo | Action |
|---------|-----------|-----------|--------|
| GitHub Actions | ✅ Complete | ❌ Need to add | Copy `.github/workflows/` |
| Deployment scripts | ✅ Complete | ❌ Need to add | Copy `scripts/` |
| Documentation | ✅ Complete | ❌ Need to add | Copy `.md` files |
| GitHub Secrets | ✅ Documented | ❌ Need to add | Add in Settings |

---

## ⚠️ Important Notes

### Don't Overwrite These Files

**Keep your existing versions:**
- `App.tsx` (unless you want Figma Make version)
- `package.json` dependencies (merge scripts only)
- `.gitignore` (merge if needed)
- `vite.config.ts` (keep yours)
- `tsconfig.json` (keep yours)
- Any custom components

**Only copy deployment-related files:**
- `.github/workflows/` - GitHub Actions
- `scripts/` - Deployment scripts
- `*.md` documentation - Deployment guides

### AWS Infrastructure

**Do NOT run Terraform** if you already have AWS infrastructure:
- Skip `terraform/` directory
- Your existing S3, CloudFront, Route53 setup is fine
- Workflows use YOUR existing infrastructure

### Vercel (Optional)

**Only set up Vercel if you want dual deployment:**
- Skip Vercel secrets if AWS-only
- Skip `vercel.json` if AWS-only
- Remove Vercel workflows if not needed

---

## 🧪 Testing Checklist

After migration, verify:

- [ ] `.github/workflows/` files copied correctly
- [ ] GitHub secrets added (AWS_ROLE_ARN, AWS_S3_BUCKET, AWS_CLOUDFRONT_DISTRIBUTION_ID)
- [ ] package.json has deployment scripts
- [ ] Documentation files copied
- [ ] IAM role trust policy allows GitHub OIDC
- [ ] Push to main triggers GitHub Actions
- [ ] Workflow runs successfully
- [ ] Files upload to S3
- [ ] CloudFront invalidation created
- [ ] Website shows new content

---

## 🔄 Keeping in Sync (Going Forward)

### Option 1: Single Repo (Recommended)

Use only your GitHub repo:
1. Copy deployment files once (this migration)
2. Develop in Figma Make
3. Export and commit to GitHub repo
4. GitHub deploys automatically

### Option 2: Two Repos (Advanced)

If you want to keep both:
1. **Figma Make** - Design and prototype
2. **GitHub** - Production code and deployment

**Sync process:**
```bash
# In Figma Make
# Make changes...

# Export to GitHub repo
cp -r /figma-make/components/* /github-repo/components/
cp -r /figma-make/pages/* /github-repo/pages/

# Commit in GitHub repo
cd /github-repo
git add .
git commit -m "sync: update from Figma Make"
git push origin main
```

---

## 📞 Help & Support

### If Deployment Fails

1. **Check GitHub Actions logs** - Click on failed step
2. **Check AWS IAM permissions** - Role needs S3 + CloudFront access
3. **Check GitHub secrets** - Verify all secrets are set correctly
4. **Check trust policy** - IAM role must allow GitHub OIDC

### If Content Doesn't Update

1. **Wait 5-15 minutes** - CloudFront invalidation takes time
2. **Check CloudFront invalidations** - Verify invalidation completed
3. **Hard refresh browser** - Ctrl+Shift+R or Cmd+Shift+R
4. **Test in incognito mode** - Eliminate browser cache

### Resources

- **[AWS_SETUP_GUIDE.md](./AWS_SETUP_GUIDE.md)** - Detailed AWS setup
- **[EXISTING_AWS_INTEGRATION.md](./EXISTING_AWS_INTEGRATION.md)** - How it works
- **[SETUP_COMPLETE.md](./SETUP_COMPLETE.md)** - Quick reference

---

## ✅ Migration Complete!

Once you've completed this checklist:

✅ Workflows copied to `.github/workflows/`  
✅ GitHub secrets added  
✅ Documentation copied  
✅ First deployment tested  
✅ Website updated successfully  

**You're done!** Your GitHub repo now has automated dual deployment. 🎉

---

**Next:** Push to `main` branch, and watch automatic deployment! 🚀
