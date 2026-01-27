# Verafy AI - Sync Strategy
## Keeping AWS and Vercel Deployments in Perfect Sync

This document explains the synchronization strategy for maintaining identical deployments across AWS and Vercel platforms from a single GitHub repository.

---

## 🎯 Core Principle: Single Source of Truth

**One Repository → Two Platforms → Always in Sync**

```
┌─────────────────────────────────────────────┐
│          GitHub Repository (main)           │
│         Single Source of Truth              │
└──────────────────┬──────────────────────────┘
                   │
        Every push to main triggers
                   │
    ┌──────────────┴──────────────┐
    │                             │
    ▼                             ▼
┌─────────────┐           ┌─────────────┐
│     AWS     │           │   Vercel    │
│  (Build A)  │           │  (Build B)  │
└─────────────┘           └─────────────┘
    │                             │
    └──────────────┬──────────────┘
                   │
            SAME BUILD ARTIFACTS
            SAME GIT COMMIT SHA
            IDENTICAL CONTENT
```

---

## ✅ Why This Works Perfectly

### 1. **Identical Build Process**

Both platforms build from the **exact same code**:

```yaml
# Same build command
npm run build

# Same output directory
dist/

# Same git commit SHA
$GITHUB_SHA
```

### 2. **Deterministic Builds**

Vite produces deterministic builds, meaning:
- Same input → Same output
- No randomization in file names
- Consistent asset hashing
- Reproducible bundles

### 3. **Atomic Deployments**

Both deployments happen from a single GitHub Actions run:

```yaml
jobs:
  build:
    - Build once
    - Upload artifacts
  
  deploy-aws:
    - Use build artifacts
  
  deploy-vercel:
    - Use build artifacts
```

---

## 🔄 Sync Mechanisms

### Automatic Sync (Default)

**Trigger:** Any push to `main` branch

```bash
git push origin main
```

**What happens:**

1. **GitHub Actions starts** (within 5 seconds)
2. **Code checkout** - Pulls exact commit SHA
3. **Single build** - Runs `npm run build` once
4. **Parallel deployment:**
   - AWS workflow uploads to S3
   - Vercel workflow uploads to Vercel Edge
5. **Both complete** - Typically within 2-3 minutes
6. **Deployment summary** - Posted to GitHub Actions

### Manual Sync (Local)

**Deploy to both platforms locally:**

```bash
./scripts/deploy-both.sh
```

**What happens:**

1. Builds locally once
2. Deploys to AWS sequentially
3. Deploys to Vercel sequentially
4. Reports success/failure for each

---

## 🎨 Content Synchronization

### Static Assets

All static assets are **identical** on both platforms:

| Asset Type | AWS Location | Vercel Location | Sync Method |
|------------|-------------|-----------------|-------------|
| HTML | S3 bucket | Vercel CDN | Git commit |
| CSS | S3 bucket | Vercel CDN | Git commit |
| JS | S3 bucket | Vercel CDN | Git commit |
| Images | S3 bucket | Vercel CDN | Git commit |
| Fonts | S3 bucket | Vercel CDN | Git commit |

### Dynamic Content

If you add dynamic features (API, CMS, database):

**Option 1: Shared Backend (Recommended)**

```
AWS Frontend ────┐
                 ├──→ Supabase / API
Vercel Frontend ─┘
```

Both platforms connect to the same backend.

**Option 2: Platform-Specific APIs**

```typescript
const API_URL = import.meta.env.VITE_DEPLOYMENT_TARGET === 'aws'
  ? 'https://api.verafyai.com.au'
  : 'https://api-dev.verafyai.com.au';
```

Use environment variables to point to different backends.

---

## 🔧 Configuration Sync

### Environment Variables

**Shared Variables (Same on Both):**
```bash
VITE_APP_NAME=Verafy AI
VITE_ENABLE_PRESENTATION_MODE=true
```

**Platform-Specific Variables:**
```bash
# AWS
VITE_DEPLOYMENT_TARGET=aws
VITE_APP_URL=https://verafyai.com.au

# Vercel
VITE_DEPLOYMENT_TARGET=vercel
VITE_APP_URL=https://dev.verafyai.com.au
```

Set these in:
- GitHub Secrets (for CI/CD)
- `.env.aws` (for local AWS deployment)
- `.env.vercel` (for local Vercel deployment)

### Security Headers

Both platforms use **identical security headers**:

```javascript
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" }
        // ... more headers
      ]
    }
  ]
}
```

```bash
# AWS deployment script
aws s3 sync dist/ s3://bucket/ \
  --metadata-directive REPLACE \
  --metadata '{"X-Frame-Options": "DENY"}'
```

---

## 🚦 Deployment States

### State 1: Perfect Sync ✅

```
AWS:    Commit abc123 ✓
Vercel: Commit abc123 ✓
Status: IN SYNC
```

Both platforms serve identical content from the same git commit.

### State 2: Deployment in Progress ⏳

```
AWS:    Commit abc123 ✓ → Deploying def456
Vercel: Commit abc123 ✓ → Deploying def456
Status: DEPLOYING
```

Both platforms are updating simultaneously.

### State 3: Partial Deployment ⚠️

```
AWS:    Commit abc123 ✓
Vercel: Commit def456 ✓
Status: OUT OF SYNC
```

This should **never happen** with automated deployments, but could occur with manual deployments.

**Fix:**
```bash
# Re-trigger deployment
git commit --allow-empty -m "Force sync"
git push origin main
```

---

## 🔍 Monitoring Sync Status

### 1. GitHub Actions Dashboard

View deployment status in real-time:

```
✅ Deploy to AWS    (2m 34s)
✅ Deploy to Vercel (1m 52s)
```

### 2. Deployment Summary

GitHub Actions posts a summary table:

```markdown
| Platform | Status  | Commit  | URL |
|----------|---------|---------|-----|
| AWS      | ✅ Success | abc123 | verafyai.com.au |
| Vercel   | ✅ Success | abc123 | dev.verafyai.com.au |
```

### 3. Manual Verification

**Check git commit SHA:**

```bash
# Check AWS build info
curl https://verafyai.com.au/build-info.json

# Check Vercel build info
curl https://dev.verafyai.com.au/build-info.json

# Both should return same commit SHA
```

**Optional:** Add build info to your HTML:

```html
<!-- Auto-generated by Vite -->
<meta name="git-commit" content="abc123def456">
<meta name="build-date" content="2026-01-11T10:30:00Z">
```

---

## 🛠️ Maintaining Sync

### Best Practices

#### ✅ DO

- **Always deploy via GitHub Actions** for production
- **Use feature branches** for development
- **Test locally** before pushing to main
- **Create PRs** for review (auto-deploys preview on Vercel)
- **Monitor GitHub Actions** for deployment failures
- **Use semantic commit messages** for tracking

#### ❌ DON'T

- **Don't deploy manually** to production (unless emergency)
- **Don't push directly to main** without testing
- **Don't modify files** directly in S3 or Vercel
- **Don't have different code** in different branches
- **Don't skip CI/CD** for "quick fixes"

### Workflow Example

```bash
# 1. Create feature branch
git checkout -b feature/new-pricing-tier

# 2. Make changes in Figma Make
# ... develop ...

# 3. Test locally
npm run dev

# 4. Build and preview
npm run build
npm run preview

# 5. Commit changes
git add .
git commit -m "feat: add enterprise pricing tier"

# 6. Push to feature branch
git push origin feature/new-pricing-tier

# 7. Create PR on GitHub
# → Vercel creates preview deployment
# → Review preview URL

# 8. Merge PR to main
# → GitHub Actions deploys to BOTH platforms
# → Deployments complete in ~3 minutes
# → Both platforms now in sync with new feature
```

---

## 🔄 Handling Edge Cases

### Scenario 1: AWS Deployment Fails, Vercel Succeeds

**Detection:**
```
✅ Deploy to Vercel
❌ Deploy to AWS (S3 access denied)
```

**Impact:**
- Vercel has new code
- AWS has old code
- Users see different versions

**Fix:**
```bash
# 1. Fix AWS credentials/permissions
# 2. Re-run failed deployment
gh workflow run deploy-aws.yml

# 3. Verify sync
# Both should now show same commit
```

### Scenario 2: Both Deployments Fail

**Detection:**
```
❌ Deploy to AWS (Build failed)
❌ Deploy to Vercel (Build failed)
```

**Impact:**
- Build is broken
- Both platforms serve old version
- Sync maintained (both on old commit)

**Fix:**
```bash
# 1. Fix build error locally
npm run build

# 2. Commit fix
git commit -m "fix: resolve build error"

# 3. Push to main
git push origin main

# 4. Both redeploy successfully
```

### Scenario 3: Manual Deployment Conflict

**Detection:**
```
AWS:    Commit abc123 (manual)
Vercel: Commit def456 (automated)
```

**Impact:**
- Platforms out of sync
- Different content served

**Fix:**
```bash
# 1. Decide on desired commit (usually latest)
git log --oneline

# 2. Force sync deployment
git commit --allow-empty -m "Sync deployments to $(git rev-parse HEAD)"
git push origin main

# 3. Both platforms redeploy to same commit
```

---

## 📊 Sync Metrics

### Target Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Sync Success Rate | > 99% | Successful dual deployments / total |
| Time to Sync | < 3 min | From git push to both deployed |
| Deployment Failures | < 1% | Failed deployments / total |
| Manual Interventions | < 1/week | Manual sync fixes needed |

### Monitoring

**GitHub Actions provides:**
- Deployment success rate
- Average deployment time
- Failure logs and alerts

**CloudWatch / Vercel Analytics provide:**
- Request counts
- Error rates
- Performance metrics

---

## 🚨 Emergency Procedures

### Rollback Both Platforms

```bash
# 1. Find last good commit
git log --oneline

# 2. Revert to good commit
git revert HEAD --no-edit

# 3. Push (triggers deployment to both)
git push origin main

# Both platforms rollback within 3 minutes
```

### Rollback Single Platform

**AWS only:**
```bash
# Deploy specific commit to AWS
git checkout abc123
./scripts/deploy-aws.sh
git checkout main
```

**Vercel only:**
```bash
# Use Vercel dashboard:
# 1. Go to Deployments
# 2. Find previous deployment
# 3. Click "Promote to Production"
```

### Disable Sync Temporarily

**Stop auto-deployments:**

1. Go to GitHub Settings → Branches
2. Add protection rule to `main`
3. Require manual approval for workflows

**Resume auto-deployments:**

Remove branch protection rule.

---

## 🎓 Training Your Team

### For Developers

**Key points:**
1. Always work in feature branches
2. Create PRs for review (gets Vercel preview)
3. Merge to main only when ready for production
4. Monitor GitHub Actions for deployment status
5. Never manually edit production files

### For DevOps

**Key points:**
1. Monitor GitHub Actions workflows
2. Set up alerts for deployment failures
3. Review CloudFront/Vercel logs regularly
4. Keep infrastructure code in sync (Terraform)
5. Document any manual interventions

---

## 📝 Checklist: Verifying Sync

After every deployment, verify:

- [ ] GitHub Actions shows ✅ for both deployments
- [ ] AWS deployment logs show success
- [ ] Vercel deployment logs show success
- [ ] CloudFront cache invalidated
- [ ] Both URLs serve identical content
- [ ] Same git commit SHA deployed to both
- [ ] No console errors on either platform
- [ ] All themes work on both platforms
- [ ] Mobile responsive on both platforms
- [ ] Performance metrics similar

---

## 🔮 Future Enhancements

### Planned Improvements

1. **Automated Sync Verification**
   - Post-deployment smoke tests
   - Content comparison between platforms
   - Automated rollback on failure

2. **Deployment Orchestration**
   - Blue-green deployments
   - Canary releases (10% → 50% → 100%)
   - Feature flags for gradual rollout

3. **Monitoring Dashboard**
   - Real-time sync status
   - Deployment history
   - Performance comparison

---

## 📞 Support

If you encounter sync issues:

1. **Check GitHub Actions logs**
2. **Review deployment error messages**
3. **Verify environment variables**
4. **Test deployment locally**
5. **Contact support:** support@verafyai.com.au

---

**Remember:** The best sync strategy is **automation**. Let GitHub Actions handle deployments, and they'll always stay in sync! 🚀
