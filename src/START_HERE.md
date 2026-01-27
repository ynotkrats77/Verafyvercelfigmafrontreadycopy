# 🚀 START HERE - Verafy AI Auto-Deploy Setup

**Welcome!** This guide will help you set up automatic deployment from this repository to both Vercel and AWS.

---

## 📍 Where Are You Now?

You are in the **Figma Make Repository** - this is your **source of truth** where you edit all code.

---

## 🎯 What You Want to Achieve

```
Edit files HERE → Push to GitHub → Automatically deploys to:
  ├─→ Vercel (https://verafyai-app.vercel.app)
  └─→ AWS (https://verafyai.com.au) - optional
```

---

## ⚡ Quick Setup (5 Minutes)

### Option 1: Follow the Checklist (Recommended)

**→ Open [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)** and follow step-by-step

This is a checkbox-based guide that takes you through every step.

### Option 2: Read the Quick Start

**→ Open [QUICK_START.md](./QUICK_START.md)** for a narrative guide

This explains the "why" behind each step.

---

## 📚 All Documentation

### Setup Guides (Start Here)
1. **[SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)** - Step-by-step checklist ⭐ START HERE
2. **[QUICK_START.md](./QUICK_START.md)** - 5-minute setup guide
3. **[docs/AUTO_DEPLOY_SETUP.md](./docs/AUTO_DEPLOY_SETUP.md)** - Detailed setup instructions

### Reference Documents
4. **[docs/ARCHITECTURE_DIAGRAM.md](./docs/ARCHITECTURE_DIAGRAM.md)** - Visual flow diagrams
5. **[docs/DEPLOYMENT_SUMMARY.md](./docs/DEPLOYMENT_SUMMARY.md)** - Complete summary
6. **[DEPLOYMENT_URLS.md](./DEPLOYMENT_URLS.md)** - URLs and commands reference

### General Documentation
7. **[README.md](./README.md)** - Project overview
8. **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - General deployment info
9. **[BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md)** - Design system docs

---

## 🏗️ Your Setup

### Three Repositories

```
┌─────────────────────────┐
│ FIGMA MAKE REPO         │ ← YOU ARE HERE
│ (Source Code)           │
└───────┬─────────────────┘
        │ Pushes to both:
        │
    ┌───┴────┬────────────┐
    ▼        ▼            ▼
┌─────────┐ ┌──────────┐ ┌──────────┐
│ VERCEL  │ │   AWS    │ │ (Future) │
│  REPO   │ │   REPO   │ │   ...    │
└─────────┘ └──────────┘ └──────────┘
```

---

## ✅ What You Need Before Starting

- [ ] GitHub account
- [ ] Vercel account
- [ ] Your Vercel repo exists: `verafyai-app`
- [ ] Vercel project is connected to Vercel repo
- [ ] 5 minutes of time

**Optional:**
- [ ] AWS account (for AWS deployment)
- [ ] AWS repo exists

---

## 🎬 After Setup, Your Daily Workflow

```bash
# 1. Edit any files in this repo
vim components/MyComponent.tsx  # or use your editor

# 2. Commit and push
git add .
git commit -m "feat: your changes"
git push origin main

# 3. Wait 2-3 minutes
# → GitHub Actions builds
# → Pushes to Vercel repo → Vercel deploys
# → Pushes to AWS repo → AWS deploys

# 4. Check live sites
# https://verafyai-app.vercel.app
# https://verafyai.com.au
```

**That's it!** No manual deployment needed. 🎉

---

## 🆘 Need Help?

### I'm Ready to Set Up
→ **Go to [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)**

### I Want to Understand How It Works
→ **Go to [docs/ARCHITECTURE_DIAGRAM.md](./docs/ARCHITECTURE_DIAGRAM.md)**

### I Just Want to Deploy Manually Right Now
→ **Go to [DEPLOYMENT_URLS.md](./DEPLOYMENT_URLS.md)** for deployment commands

### I'm Having Issues
→ **Check the Troubleshooting section in [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md#-troubleshooting)**

---

## 📧 Support

- **Documentation**: All guides in this repo
- **Email**: support@verafyai.com.au
- **GitHub**: Check Issues tab

---

## 🎯 Next Steps

1. **[SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)** ← Go here now!
2. Follow the checklist (5 minutes)
3. Test your first deployment
4. Start coding! 🚀

---

**Made with ❤️ by Axient AI**  
**Last Updated**: January 11, 2026

---

## Quick Links

| Document | Purpose | When to Use |
|----------|---------|-------------|
| [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md) | Step-by-step setup | First time setup |
| [QUICK_START.md](./QUICK_START.md) | Quick overview | Want to understand flow |
| [DEPLOYMENT_URLS.md](./DEPLOYMENT_URLS.md) | Commands & URLs | Daily reference |
| [docs/AUTO_DEPLOY_SETUP.md](./docs/AUTO_DEPLOY_SETUP.md) | Detailed guide | Deep dive |
| [docs/ARCHITECTURE_DIAGRAM.md](./docs/ARCHITECTURE_DIAGRAM.md) | Visual diagrams | Understand architecture |
