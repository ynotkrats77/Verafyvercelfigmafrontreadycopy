# 🌐 Verafy AI Deployment URLs

## Repository Architecture

### 📂 Three Separate Repositories

1. **Figma Make Repo** (This One - Source of Truth)
   - All source code, components, design system
   - You edit files here
   - Pushes trigger auto-deployment to both platforms

2. **Vercel Repo** (`verafyai-app`)
   - Receives built files from Figma Make repo
   - Connected to Vercel for auto-deployment
   - Lives at: `https://github.com/YOUR_USERNAME/verafyai-app`

3. **AWS Repo** (Optional)
   - Receives built files from Figma Make repo
   - Connected to AWS for auto-deployment
   - Lives at: `https://github.com/YOUR_USERNAME/verafyai-aws`

---

## Current Active Deployments

### ✅ Vercel (Primary)
- **Production**: https://verafyai-app.vercel.app/
- **Preview/Staging**: Auto-generated preview URLs for each PR
- **Dashboard**: https://vercel.com/dashboard
- **Project**: verafyai-app
- **Auto-deploys from**: Vercel GitHub repo (when Figma Make pushes to it)

### 🔜 AWS (Planned)
- **Production**: https://verafyai.com.au (when configured)
- **Region**: ap-southeast-2 (Sydney)
- **CloudFront**: TBD
- **S3 Bucket**: TBD
- **Auto-deploys from**: AWS GitHub repo (when Figma Make pushes to it)

---

## Deployment Commands

### Quick Deploy to Vercel

```bash
# Using npm script (recommended)
npm run deploy:vercel

# Direct Vercel CLI
vercel              # Preview deployment
vercel --prod       # Production deployment
```

### Quick Deploy to AWS

```bash
# Using npm script (when configured)
npm run deploy:aws

# Direct script
bash aws/scripts/deploy-aws.sh
```

### Deploy to Both

```bash
npm run deploy:both
```

---

## Environment Variables

### Vercel Configuration (`/vercel.json`)
```json
{
  "env": {
    "VITE_APP_NAME": "Verafy AI",
    "VITE_DEPLOYMENT_TARGET": "vercel",
    "VITE_APP_URL": "https://verafyai-app.vercel.app"
  }
}
```

### AWS Configuration
```bash
VITE_APP_NAME="Verafy AI"
VITE_DEPLOYMENT_TARGET="aws"
VITE_APP_URL="https://verafyai.com.au"
```

---

## GitHub Actions Workflows

All workflows are located in `/workflows/` directory:

### 1. `deploy-vercel.yml`
- **Triggers**: Push to `main` or `staging`, Pull Requests
- **Environment**: Vercel
- **URL**: https://verafyai-app.vercel.app

### 2. `deploy-aws.yml`
- **Triggers**: Push to `main` or `production`, Manual
- **Environment**: AWS S3 + CloudFront
- **URL**: https://verafyai.com.au (when configured)

### 3. `deploy-both.yml`
- **Triggers**: Push to `main`, Manual with target selection
- **Deploys to**: Both Vercel AND AWS simultaneously

---

## Vercel CLI Setup

### First Time Setup

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel@latest
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Link Project** (if not already linked)
   ```bash
   vercel link
   ```
   - Select your Vercel scope/team
   - Link to existing project: `verafyai-app`

4. **Deploy!**
   ```bash
   vercel --prod
   ```

---

## Contact Emails

These remain consistent across all deployments:

- **General Support**: support@verafyai.com.au
- **Security Issues**: security@verafyai.com.au
- **Privacy Concerns**: privacy@verafyai.com.au
- **Complaints**: complaints@verafyai.com.au
- **Enterprise Sales**: enterprise@verafyai.com.au

---

## Next Steps

1. ✅ Vercel configured and ready
2. 🔜 Configure AWS credentials in GitHub Secrets
3. 🔜 Set up custom domain mapping
4. 🔜 Configure AWS CloudFront distribution
5. 🔜 Test dual deployment sync

---

**Last Updated**: January 11, 2026  
**Maintained by**: Axient AI Pty Ltd