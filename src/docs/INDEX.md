# 📚 Verafy AI Documentation Index

Complete guide to all documentation files in this repository.

---

## 🚀 Getting Started (New Users)

**Start here if this is your first time:**

1. **[START_HERE.md](../START_HERE.md)** 
   - Main entry point
   - Quick overview of the setup
   - Links to all other docs

2. **[SETUP_CHECKLIST.md](../SETUP_CHECKLIST.md)** ⭐ RECOMMENDED
   - Step-by-step checkbox guide
   - 5-minute setup
   - Fill-in-the-blanks for your configuration

3. **[QUICK_START.md](../QUICK_START.md)**
   - Narrative setup guide
   - Explains the "why" behind each step
   - Includes troubleshooting

---

## 🏗️ Architecture & Setup (Understanding the System)

4. **[ARCHITECTURE_DIAGRAM.md](./ARCHITECTURE_DIAGRAM.md)**
   - Visual flow diagrams
   - Repository structure comparison
   - Deployment timeline
   - How everything connects

5. **[AUTO_DEPLOY_SETUP.md](./AUTO_DEPLOY_SETUP.md)**
   - Comprehensive setup guide
   - Detailed explanations
   - Advanced configuration options
   - Troubleshooting section

6. **[DEPLOYMENT_SUMMARY.md](./DEPLOYMENT_SUMMARY.md)**
   - Current deployment status
   - Configuration overview
   - Success indicators
   - Monitoring & debugging

---

## 📋 Reference Documents (Daily Use)

7. **[DEPLOYMENT_URLS.md](../DEPLOYMENT_URLS.md)**
   - All deployment URLs
   - Quick command reference
   - Environment variables
   - Contact information

8. **[README.md](../README.md)**
   - Project overview
   - Technology stack
   - Feature list
   - Development workflow

---

## 📖 General Guides (Additional Reading)

9. **[DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md)**
   - General deployment information
   - Platform-specific guides
   - Best practices

10. **[DUAL_DEPLOYMENT_GUIDE.md](../DUAL_DEPLOYMENT_GUIDE.md)** (if exists)
    - AWS + Vercel setup together
    - Comparison of platforms
    - When to use which

11. **[BRAND_GUIDELINES.md](../BRAND_GUIDELINES.md)**
    - Design system documentation
    - Theme colors and usage
    - Component library
    - Logo usage guidelines

12. **[DESIGN_RECOMMENDATIONS.md](../DESIGN_RECOMMENDATIONS.md)** (if exists)
    - UI/UX best practices
    - Responsive design guidelines
    - Accessibility standards

---

## 🎨 Design System (For Designers/Developers)

### Brand & Styling

- **[BRAND_GUIDELINES.md](../BRAND_GUIDELINES.md)**
  - 3 color themes (Verafy, Pink, Pride)
  - Typography system
  - Logo assets
  - Brand voice

### Component Documentation

- **[/components/README.md](../components/README.md)** (if exists)
  - React component library
  - Usage examples
  - Props documentation

---

## 🔧 Technical Documentation (For Developers)

### Deployment Scripts

- **[/aws/scripts/README.md](../aws/scripts/README.md)** (if exists)
  - AWS deployment scripts
  - Configuration options
  - AWS infrastructure setup

- **[/vercel/scripts/README.md](../vercel/scripts/README.md)** (if exists)
  - Vercel deployment scripts
  - Vercel CLI usage
  - Environment setup

### Workflow Files

- **[/workflows/deploy-vercel.yml](../workflows/deploy-vercel.yml)**
  - Vercel deployment workflow
  - GitHub Actions configuration
  - Environment variables

- **[/workflows/deploy-aws.yml](../workflows/deploy-aws.yml)**
  - AWS deployment workflow
  - S3 sync configuration
  - CloudFront invalidation

- **[/workflows/sync-to-deployment-repos.yml](../workflows/sync-to-deployment-repos.yml)**
  - Auto-sync workflow
  - Build and push logic
  - Parallel deployment

---

## 📊 Quick Reference Tables

### By User Type

| I am a... | Start with... | Then read... |
|-----------|---------------|--------------|
| **First-time user** | [START_HERE.md](../START_HERE.md) | [SETUP_CHECKLIST.md](../SETUP_CHECKLIST.md) |
| **Developer** | [README.md](../README.md) | [ARCHITECTURE_DIAGRAM.md](./ARCHITECTURE_DIAGRAM.md) |
| **Designer** | [BRAND_GUIDELINES.md](../BRAND_GUIDELINES.md) | [DESIGN_RECOMMENDATIONS.md](../DESIGN_RECOMMENDATIONS.md) |
| **DevOps Engineer** | [AUTO_DEPLOY_SETUP.md](./AUTO_DEPLOY_SETUP.md) | [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) |

### By Task

| I want to... | Read this... |
|--------------|--------------|
| **Set up auto-deployment** | [SETUP_CHECKLIST.md](../SETUP_CHECKLIST.md) |
| **Deploy manually** | [DEPLOYMENT_URLS.md](../DEPLOYMENT_URLS.md) |
| **Understand the architecture** | [ARCHITECTURE_DIAGRAM.md](./ARCHITECTURE_DIAGRAM.md) |
| **Find deployment URLs** | [DEPLOYMENT_URLS.md](../DEPLOYMENT_URLS.md) |
| **Troubleshoot issues** | [QUICK_START.md](../QUICK_START.md#-troubleshooting) |
| **Learn about the design system** | [BRAND_GUIDELINES.md](../BRAND_GUIDELINES.md) |
| **Configure AWS** | [AUTO_DEPLOY_SETUP.md](./AUTO_DEPLOY_SETUP.md) |
| **Configure Vercel** | [QUICK_START.md](../QUICK_START.md) |

### By Topic

| Topic | Documents |
|-------|-----------|
| **Setup** | [START_HERE](../START_HERE.md), [SETUP_CHECKLIST](../SETUP_CHECKLIST.md), [QUICK_START](../QUICK_START.md) |
| **Architecture** | [ARCHITECTURE_DIAGRAM](./ARCHITECTURE_DIAGRAM.md), [DEPLOYMENT_SUMMARY](./DEPLOYMENT_SUMMARY.md) |
| **Deployment** | [DEPLOYMENT_URLS](../DEPLOYMENT_URLS.md), [AUTO_DEPLOY_SETUP](./AUTO_DEPLOY_SETUP.md), [DEPLOYMENT_GUIDE](../DEPLOYMENT_GUIDE.md) |
| **Design** | [BRAND_GUIDELINES](../BRAND_GUIDELINES.md), [DESIGN_RECOMMENDATIONS](../DESIGN_RECOMMENDATIONS.md) |
| **Reference** | [README](../README.md), [DEPLOYMENT_URLS](../DEPLOYMENT_URLS.md) |

---

## 🗂️ Document Locations

### Root Directory (`/`)

```
/
├── START_HERE.md              ⭐ Main entry point
├── SETUP_CHECKLIST.md         ⭐ Setup guide
├── QUICK_START.md             ⭐ Quick setup
├── README.md                  📖 Project overview
├── DEPLOYMENT_URLS.md         📋 URL reference
├── DEPLOYMENT_GUIDE.md        📖 General deployment
├── DUAL_DEPLOYMENT_GUIDE.md   📖 Dual deployment
├── BRAND_GUIDELINES.md        🎨 Design system
└── DESIGN_RECOMMENDATIONS.md  🎨 Design guide
```

### Docs Directory (`/docs/`)

```
/docs/
├── INDEX.md                   📚 This file
├── AUTO_DEPLOY_SETUP.md       🔧 Detailed setup
├── DEPLOYMENT_SUMMARY.md      📊 Deployment status
└── ARCHITECTURE_DIAGRAM.md    🏗️ Visual diagrams
```

### Workflow Directory (`/workflows/`)

```
/workflows/
├── deploy-vercel.yml          ⚙️ Vercel workflow
├── deploy-aws.yml             ⚙️ AWS workflow
├── deploy-both.yml            ⚙️ Dual workflow
└── sync-to-deployment-repos.yml ⚙️ Auto-sync workflow
```

### Scripts Directories

```
/aws/scripts/
└── deploy-aws.sh              🔧 AWS deployment script

/vercel/scripts/
└── deploy-vercel.sh           🔧 Vercel deployment script
```

---

## 🔄 Documentation Update Frequency

| Document | Update Frequency | Last Updated |
|----------|------------------|--------------|
| START_HERE.md | When setup changes | Jan 11, 2026 |
| SETUP_CHECKLIST.md | When setup changes | Jan 11, 2026 |
| DEPLOYMENT_URLS.md | When URLs change | Jan 11, 2026 |
| README.md | When features added | Jan 11, 2026 |
| ARCHITECTURE_DIAGRAM.md | When flow changes | Jan 11, 2026 |
| BRAND_GUIDELINES.md | When design updates | As needed |
| Others | As needed | Various |

---

## 📝 Documentation Standards

All documentation in this repository follows these standards:

### File Naming
- Use `UPPERCASE.md` for important guides (e.g., `README.md`)
- Use descriptive names (e.g., `AUTO_DEPLOY_SETUP.md` not `setup.md`)
- Keep names concise but clear

### Structure
- Always include a header explaining the document's purpose
- Use emoji for visual scanning (🚀 ✅ 📋 etc.)
- Include a "Last Updated" date
- Link to related documents

### Formatting
- Use code blocks for commands
- Use tables for comparisons
- Use checklists for step-by-step guides
- Include visual diagrams where helpful

---

## 🆘 Can't Find What You Need?

1. **Check this INDEX** - You're here now!
2. **Search the repo** - Use GitHub's search feature
3. **Check README.md** - General project info
4. **Contact support** - support@verafyai.com.au

---

## 🎯 Recommended Reading Order

### For First-Time Setup

1. [START_HERE.md](../START_HERE.md) - Overview
2. [SETUP_CHECKLIST.md](../SETUP_CHECKLIST.md) - Setup
3. [QUICK_START.md](../QUICK_START.md) - Quick guide
4. [DEPLOYMENT_URLS.md](../DEPLOYMENT_URLS.md) - Reference

### For Understanding the System

1. [README.md](../README.md) - Project overview
2. [ARCHITECTURE_DIAGRAM.md](./ARCHITECTURE_DIAGRAM.md) - How it works
3. [AUTO_DEPLOY_SETUP.md](./AUTO_DEPLOY_SETUP.md) - Deep dive
4. [DEPLOYMENT_SUMMARY.md](./DEPLOYMENT_SUMMARY.md) - Current state

### For Daily Development

1. [DEPLOYMENT_URLS.md](../DEPLOYMENT_URLS.md) - Quick reference
2. [README.md](../README.md) - Feature list
3. [BRAND_GUIDELINES.md](../BRAND_GUIDELINES.md) - Design system
4. GitHub Actions tab - Monitor deployments

---

## 📞 Support

- **Documentation Issues**: Create a GitHub issue
- **Setup Help**: See [QUICK_START.md](../QUICK_START.md) troubleshooting
- **General Support**: support@verafyai.com.au

---

**Last Updated**: January 11, 2026  
**Maintained by**: Axient AI Pty Ltd  
**Documentation Version**: 1.0.0
