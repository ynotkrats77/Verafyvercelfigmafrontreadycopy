# 🏗️ Verafy AI Architecture Diagram

Visual guide to your deployment architecture.

---

## 📊 Complete Deployment Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                    FIGMA MAKE REPOSITORY                         │
│                    (Source of Truth)                             │
│                                                                  │
│  📁 Source Code:                                                 │
│    ├── /components/                                              │
│    ├── /pages/                                                   │
│    ├── /styles/                                                  │
│    ├── /hooks/                                                   │
│    └── /utils/                                                   │
│                                                                  │
│  🛠️ You Edit Here:                                               │
│    - Make changes to components                                  │
│    - Update styles                                               │
│    - Add new features                                            │
│    - Commit and push to 'main'                                   │
└────────────────────────┬─────────────────────────────────────────┘
                         │
                         │ git push origin main
                         │
                         ▼
┌──────────────────────────────────────────────────────────────────┐
│              GITHUB ACTIONS WORKFLOW                             │
│              (.github/workflows/sync-to-deployment-repos.yml)    │
│                                                                  │
│  Step 1: Build Application                                       │
│    └─→ npm run build                                             │
│    └─→ Creates /dist/ folder with production files              │
│                                                                  │
│  Step 2: Sync to Vercel Repo                                     │
│    └─→ Checkout Vercel repo                                      │
│    └─→ Copy /dist/* to Vercel repo                              │
│    └─→ Commit: "🚀 Deploy from Figma Make"                      │
│    └─→ Push to Vercel repo main branch                          │
│                                                                  │
│  Step 3: Sync to AWS Repo (Optional)                             │
│    └─→ Checkout AWS repo                                         │
│    └─→ Copy /dist/* to AWS repo                                 │
│    └─→ Commit: "🚀 Deploy from Figma Make"                      │
│    └─→ Push to AWS repo main branch                             │
└──────────────┬─────────────────────────────┬────────────────────┘
               │                             │
               │ Pushes built files          │ Pushes built files
               │                             │
               ▼                             ▼
┌──────────────────────────┐    ┌──────────────────────────┐
│   VERCEL REPOSITORY      │    │   AWS REPOSITORY         │
│   (verafyai-app)         │    │   (verafyai-aws)         │
│                          │    │                          │
│  📦 Contains:            │    │  📦 Contains:            │
│    - Built HTML          │    │    - Built HTML          │
│    - Compiled JS         │    │    - Compiled JS         │
│    - Optimized CSS       │    │    - Optimized CSS       │
│    - Static assets       │    │    - Static assets       │
│                          │    │                          │
│  🔗 Connected to:        │    │  🔗 Connected to:        │
│    - Vercel Platform     │    │    - AWS CodePipeline    │
│    - Auto-deploy enabled │    │    - Auto-deploy enabled │
└────────────┬─────────────┘    └────────────┬─────────────┘
             │                               │
             │ Triggers deployment           │ Triggers deployment
             │                               │
             ▼                               ▼
┌──────────────────────────┐    ┌──────────────────────────┐
│   VERCEL PLATFORM        │    │   AWS INFRASTRUCTURE     │
│                          │    │                          │
│  🚀 Deployment:          │    │  🚀 Deployment:          │
│    - Edge network        │    │    - S3 Bucket           │
│    - Global CDN          │    │    - CloudFront CDN      │
│    - Automatic SSL       │    │    - Route 53            │
│    - Instant rollback    │    │    - ACM Certificate     │
│                          │    │                          │
│  ⚙️ Features:            │    │  ⚙️ Features:            │
│    - Preview deployments │    │    - Custom domain       │
│    - Analytics           │    │    - Cache invalidation  │
│    - Performance metrics │    │    - Access logs         │
└────────────┬─────────────┘    └────────────┬─────────────┘
             │                               │
             │ Serves traffic                │ Serves traffic
             │                               │
             ▼                               ▼
┌──────────────────────────┐    ┌──────────────────────────┐
│   🌐 LIVE WEBSITE        │    │   🌐 LIVE WEBSITE        │
│   (Vercel)               │    │   (AWS)                  │
│                          │    │                          │
│   verafyai-app           │    │   verafyai.com.au        │
│   .vercel.app            │    │                          │
└──────────────────────────┘    └──────────────────────────┘
```

---

## 🔄 Detailed Workflow Steps

### 1️⃣ Developer Makes Changes

```
YOU (Developer)
  │
  ├─→ Edit files in Figma Make repo
  ├─→ git add .
  ├─→ git commit -m "feat: new feature"
  └─→ git push origin main
```

### 2️⃣ GitHub Actions Builds

```
GitHub Actions
  │
  ├─→ Checkout code from Figma Make repo
  ├─→ npm ci (install dependencies)
  ├─→ npm run build (create production build)
  └─→ Upload /dist/ as artifact
```

### 3️⃣ Sync to Vercel Repo

```
GitHub Actions (sync-to-vercel job)
  │
  ├─→ Download build artifact
  ├─→ Checkout verafyai-app repo
  ├─→ Clear old files (keep .git)
  ├─→ Copy new files from /dist/
  ├─→ git commit -m "🚀 Deploy..."
  └─→ git push (triggers Vercel)
```

### 4️⃣ Sync to AWS Repo

```
GitHub Actions (sync-to-aws job)
  │
  ├─→ Download build artifact
  ├─→ Checkout aws repo
  ├─→ Clear old files (keep .git)
  ├─→ Copy new files from /dist/
  ├─→ git commit -m "🚀 Deploy..."
  └─→ git push (triggers AWS)
```

### 5️⃣ Platform Deployments

```
Vercel Platform                 AWS Platform
     │                               │
     ├─→ Detects push                ├─→ Detects push
     ├─→ Builds (if needed)          ├─→ Syncs to S3
     ├─→ Deploys to edge             ├─→ Invalidates cache
     └─→ Live in ~30s                └─→ Live in ~3min
```

---

## 📁 Repository Contents Comparison

### Figma Make Repo (Source)

```
verafy-ai/
├── .github/workflows/          # GitHub Actions workflows
├── components/                 # React components
├── pages/                      # Page components
├── styles/                     # CSS and styling
├── public/                     # Static assets
├── src/                        # Additional source code
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Build configuration
└── ... (all source files)
```

**Size**: ~50-100 MB with node_modules

### Vercel Repo (After Sync)

```
verafyai-app/
├── index.html                  # Entry point
├── assets/
│   ├── index-abc123.js        # Compiled JavaScript
│   ├── index-xyz789.css       # Compiled CSS
│   └── ... (fonts, images)
├── DEPLOYMENT_INFO.txt         # Deployment metadata
└── .git/                       # Git history
```

**Size**: ~2-5 MB (production build only)

### AWS Repo (After Sync)

Same structure as Vercel repo - only built files!

---

## 🔐 Required GitHub Secrets

Set these in **Figma Make repo** Settings → Secrets:

```
┌────────────────────────────────────────────────┐
│  FIGMA MAKE REPO SECRETS                       │
├────────────────────────────────────────────────┤
│                                                │
│  VERCEL_REPO_TOKEN                             │
│  └─→ GitHub PAT with 'repo' scope              │
│                                                │
│  VERCEL_REPO_FULL_NAME                         │
│  └─→ "your-username/verafyai-app"              │
│                                                │
│  AWS_REPO_TOKEN (optional)                     │
│  └─→ GitHub PAT with 'repo' scope              │
│                                                │
│  AWS_REPO_FULL_NAME (optional)                 │
│  └─→ "your-username/verafyai-aws"              │
│                                                │
└────────────────────────────────────────────────┘
```

---

## ⏱️ Deployment Timeline

```
Time    Figma Make         GitHub Actions      Vercel          AWS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
0:00    git push ─────────→ Triggered
0:10                        Building...
0:45                        Build complete
1:00                        Syncing to repos ──→ Receives push
1:00                        ────────────────────→ Receives push
1:05                                             Deploying...
1:05                                                            Syncing...
1:30                                             ✅ LIVE
3:00                                                            ✅ LIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total time: ~3-5 minutes for both platforms
```

---

## 🎯 Key Benefits

```
┌─────────────────────────────────────────────────────────┐
│  SINGLE SOURCE OF TRUTH                                 │
│  ✓ Edit only in Figma Make repo                         │
│  ✓ No manual syncing between repos                      │
│  ✓ Git history in one place                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PARALLEL DEPLOYMENTS                                   │
│  ✓ Vercel and AWS deploy simultaneously                 │
│  ✓ Faster than sequential deployments                   │
│  ✓ Build once, deploy twice                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  CLEAN SEPARATION                                       │
│  ✓ Source code separate from deployment                 │
│  ✓ Each repo focused on its purpose                     │
│  ✓ Deployment repos stay minimal                        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  EASY ROLLBACK                                          │
│  ✓ Revert commit in Figma Make repo                     │
│  ✓ Re-trigger workflow                                  │
│  ✓ Both platforms roll back automatically               │
└─────────────────────────────────────────────────────────┘
```

---

## 📞 Support

For detailed setup instructions, see:
- **Quick Start**: [QUICK_START.md](../QUICK_START.md)
- **Setup Checklist**: [SETUP_CHECKLIST.md](../SETUP_CHECKLIST.md)
- **Detailed Guide**: [AUTO_DEPLOY_SETUP.md](./AUTO_DEPLOY_SETUP.md)

---

**Last Updated**: January 11, 2026  
**Maintained by**: Axient AI Pty Ltd
