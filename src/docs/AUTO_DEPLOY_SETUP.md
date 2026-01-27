# 🚀 Auto-Sync Deployment Setup Guide

This guide will help you set up automatic syncing from your **Figma Make repo** to your **Vercel** and **AWS** deployment repos.

---

## 📋 Architecture Overview

```
┌─────────────────────────────────────────────────┐
│  FIGMA MAKE REPO (Source of Truth)             │
│  - All source code                              │
│  - React components                             │
│  - Design system                                │
│  - You edit files here                          │
└───────────────────┬─────────────────────────────┘
                    │
         Git Push to main branch
                    │
                    ▼
    ┌───────────────────────────────────┐
    │  GitHub Actions Workflow          │
    │  1. Build the app (npm run build) │
    │  2. Create dist/ folder            │
    │  3. Push to deployment repos       │
    └──────────┬─────────────────┬───────┘
               │                 │
               ▼                 ▼
    ┌──────────────────┐  ┌──────────────────┐
    │  VERCEL REPO     │  │  AWS REPO        │
    │  (verafyai-app)  │  │  (verafyai-aws)  │
    │                  │  │                  │
    │  Vercel watches  │  │  AWS watches     │
    │  this repo and   │  │  this repo and   │
    │  auto-deploys    │  │  auto-deploys    │
    └──────────────────┘  └──────────────────┘
```

---

## 🔧 Step 1: Create GitHub Personal Access Tokens

You need PATs to allow the Figma Make repo to push to your other repos.

### Create Token for Vercel Repo

1. Go to https://github.com/settings/tokens/new
2. **Note**: `Figma Make → Vercel Sync`
3. **Expiration**: Choose what you prefer (90 days or No expiration)
4. **Scopes**: Select:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
5. Click **Generate token**
6. **Copy the token** (you won't see it again!)

### Create Token for AWS Repo

1. Repeat the same process
2. **Note**: `Figma Make → AWS Sync`
3. Same scopes as above
4. **Copy this token too**

---

## 🔐 Step 2: Add Secrets to Figma Make Repo

Go to your **Figma Make repo** on GitHub:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**

Add these **4 secrets**:

### Secret 1: VERCEL_REPO_TOKEN
- **Name**: `VERCEL_REPO_TOKEN`
- **Value**: Paste the first PAT token you created
- Click **Add secret**

### Secret 2: VERCEL_REPO_FULL_NAME
- **Name**: `VERCEL_REPO_FULL_NAME`
- **Value**: `your-github-username/verafyai-app`
  - Example: `avceo/verafyai-app`
- Click **Add secret**

### Secret 3: AWS_REPO_TOKEN
- **Name**: `AWS_REPO_TOKEN`
- **Value**: Paste the second PAT token you created
- Click **Add secret**

### Secret 4: AWS_REPO_FULL_NAME
- **Name**: `AWS_REPO_FULL_NAME`
- **Value**: `your-github-username/verafyai-aws` (or whatever your AWS repo is called)
  - Example: `avceo/verafyai-aws-deployment`
- Click **Add secret**

---

## ✅ Step 3: Configure Vercel Auto-Deploy

Make sure your **Vercel repo** is connected to Vercel:

1. Go to https://vercel.com/dashboard
2. Select your `verafyai-app` project
3. Go to **Settings** → **Git**
4. Make sure it's connected to your **Vercel GitHub repo**
5. Enable **Auto-deploy on push to main branch**

Now whenever the Figma Make workflow pushes to the Vercel repo, Vercel will auto-deploy!

---

## ✅ Step 4: Configure AWS Auto-Deploy

Make sure your **AWS repo** has deployment set up:

### Option A: AWS CodePipeline (Recommended)
1. Create CodePipeline that watches your AWS repo
2. Triggers on push to main branch
3. Deploys to S3 + CloudFront

### Option B: GitHub Actions in AWS Repo
1. The AWS repo can have its own GitHub Actions
2. That deploys to S3 when files are pushed

---

## 🎯 Step 5: Test the Workflow

### Automatic Deploy (Recommended)

1. **In Figma Make repo**, make any change:
   ```bash
   git add .
   git commit -m "test: trigger auto-deploy"
   git push origin main
   ```

2. **Watch GitHub Actions**:
   - Go to your Figma Make repo → **Actions** tab
   - You'll see "Sync to Deployment Repos" running
   - It will build → push to Vercel repo → push to AWS repo

3. **Check Vercel**:
   - Go to https://vercel.com/dashboard
   - Your deployment should trigger automatically

4. **Check AWS** (if configured):
   - Your AWS deployment should also trigger

### Manual Deploy (When Needed)

You can also manually trigger:

1. Go to Figma Make repo → **Actions** tab
2. Click **Sync to Deployment Repos**
3. Click **Run workflow**
4. Choose target: `both`, `vercel`, or `aws`
5. Click **Run workflow**

---

## 📂 What Gets Synced?

From Figma Make repo:
```
dist/
├── index.html
├── assets/
│   ├── index-abc123.js
│   ├── index-xyz789.css
│   └── ... (all built assets)
└── ... (all production files)
```

**Important**: Only the **built files** (`dist/`) are synced, not source code!

---

## 🔍 Troubleshooting

### "Error: Permission denied"
- Check that your PAT tokens have the `repo` scope
- Verify the token hasn't expired

### "Repository not found"
- Check `VERCEL_REPO_FULL_NAME` format: `username/repo-name`
- Make sure the PAT token has access to that repo

### "No changes to commit"
- This is normal if nothing changed in the build
- The workflow will skip the push

### Vercel not auto-deploying
- Go to Vercel dashboard → Settings → Git
- Make sure "Auto-deploy" is enabled
- Check that the correct branch is set (usually `main`)

---

## 🎨 Workflow File Location

The workflow is located at:
```
/workflows/sync-to-deployment-repos.yml
```

**Note**: GitHub expects workflows in `/.github/workflows/`, so you'll need to move it manually:

```bash
mkdir -p .github/workflows
mv workflows/sync-to-deployment-repos.yml .github/workflows/
```

---

## 🚀 Benefits of This Setup

✅ **Single source of truth**: Edit only in Figma Make repo  
✅ **Automatic syncing**: Push once, deploys everywhere  
✅ **No manual steps**: Set it and forget it  
✅ **Version control**: All deployments tracked with git commits  
✅ **Rollback easy**: Just revert in Figma Make repo  
✅ **Separate concerns**: Each repo stays focused on its purpose  

---

## 📝 Next Steps After Setup

1. ✅ Set up GitHub secrets (Step 2)
2. ✅ Test with a small commit
3. ✅ Verify Vercel auto-deploys
4. ✅ Set up AWS auto-deploy (if needed)
5. ✅ Update your team documentation

---

## 🆘 Need Help?

If you run into issues:
1. Check the **Actions** tab for error messages
2. Verify all 4 secrets are set correctly
3. Make sure PAT tokens haven't expired
4. Check that repos exist and are accessible

---

**Last Updated**: January 11, 2026  
**Maintained by**: Axient AI Pty Ltd
