# AWS Deployment Hub

## 🎯 Purpose
Everything the AWS team needs to deploy and maintain Verafy AI on AWS infrastructure.

## 📚 Documentation

### Initial Setup
1. [Initial AWS Setup](docs/01-INITIAL-SETUP.md) - First-time configuration
2. [Claude Compatibility](docs/02-CLAUDE-COMPATIBILITY.md) - Match existing AWS environment
3. [Migration Guide](docs/03-MIGRATION.md) - Copy to GitHub repo

### Infrastructure
4. [Infrastructure Details](docs/04-INFRASTRUCTURE.md) - S3, CloudFront, Terraform
5. [Sync Strategy](docs/05-SYNC-STRATEGY.md) - How deployments work

### Quick Reference
- [Quick Start Guide](QUICK_START.md) - Get up and running fast

## 🚀 Quick Deploy

```bash
# From repository root
.github/workflows/deploy-aws.yml  # Triggered by git push
# OR manually:
./aws/scripts/deploy-aws.sh
```

## 📦 What's Included

- **docs/** - Complete AWS documentation
- **scripts/** - Deployment automation scripts
- **terraform/** - Infrastructure as Code

## ⚠️ Important

Your AWS environment is pre-configured to match existing Claude setup.
See [Claude Compatibility](docs/02-CLAUDE-COMPATIBILITY.md) before making changes.

## 🔄 For Incremental Updates

After initial deployment, adding new pages is automatic:
1. Add page in `/pages/NewPage.tsx`
2. Update route in `/App.tsx`
3. Git commit & push to main
4. GitHub Actions auto-deploys to AWS
5. Changes live in ~5 minutes

**No manual AWS changes needed!**
