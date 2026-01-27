# 🚀 Deployment Guide

**Verafy AI - Production Deployment Documentation**

---

## 📋 Pre-Deployment Checklist

### **Code Quality**
- [ ] All TypeScript errors resolved
- [ ] All ESLint warnings fixed
- [ ] Unit tests passing
- [ ] E2E tests passing
- [ ] Code reviewed and approved
- [ ] No console.log statements in production code

### **Configuration**
- [ ] Environment variables configured
- [ ] API endpoints verified
- [ ] Analytics tracking set up
- [ ] Error tracking configured (Sentry)
- [ ] CDN configured (if applicable)

### **Security**
- [ ] No hardcoded credentials
- [ ] API keys in environment variables
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] CORS settings verified

### **Performance**
- [ ] Images optimized
- [ ] Code splitting implemented
- [ ] Lazy loading configured
- [ ] Bundle size < 500KB (gzipped)
- [ ] Lighthouse score > 90

### **Content**
- [ ] All copy reviewed
- [ ] Legal pages updated
- [ ] Contact information verified
- [ ] Social media links working

---

## 🌐 Deployment Platforms

### **Option 1: Vercel (Recommended)**

**Advantages:**
- Zero-config deployment
- Automatic HTTPS
- Edge network
- Built-in analytics
- Preview deployments

**Steps:**

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
# Production deployment
vercel --prod

# OR via npm script
npm run deploy
```

4. **Configure Domain**
- Go to Vercel dashboard
- Settings → Domains
- Add custom domain (verafy.ai)
- Update DNS settings

**Environment Variables:**
```bash
# In Vercel dashboard
Settings → Environment Variables

VITE_API_URL=https://api.verafy.ai
VITE_ANALYTICS_ID=your_analytics_id
VITE_SENTRY_DSN=your_sentry_dsn
```

---

### **Option 2: Netlify**

**Advantages:**
- Simple CI/CD
- Form handling
- Serverless functions
- Split testing

**Steps:**

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**
```bash
netlify login
```

3. **Deploy**
```bash
# Build first
npm run build

# Deploy to production
netlify deploy --prod

# OR link to GitHub for auto-deploy
netlify init
```

4. **Configure**
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  VITE_API_URL = "https://api.verafy.ai"
```

---

### **Option 3: AWS Amplify**

**Advantages:**
- AWS ecosystem integration
- Scalable infrastructure
- CI/CD pipeline
- Monitoring included

**Steps:**

1. **Install Amplify CLI**
```bash
npm install -g @aws-amplify/cli
```

2. **Configure Amplify**
```bash
amplify configure
```

3. **Initialize**
```bash
amplify init
```

4. **Deploy**
```bash
amplify publish
```

---

### **Option 4: Custom Server (VPS/Dedicated)**

**Requirements:**
- Node.js server
- Nginx/Apache
- SSL certificate
- Domain name

**Steps:**

1. **Build Application**
```bash
npm run build
```

2. **Copy to Server**
```bash
scp -r dist/* user@server:/var/www/verafy
```

3. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name verafy.ai;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name verafy.ai;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    root /var/www/verafy;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

4. **Restart Nginx**
```bash
sudo systemctl restart nginx
```

---

## 🔒 Environment Variables

### **Required Variables**

```env
# Application
VITE_APP_NAME=Verafy AI
VITE_APP_URL=https://verafy.ai

# API
VITE_API_URL=https://api.verafy.ai
VITE_API_KEY=your_api_key_here

# Analytics
VITE_GA_ID=G-XXXXXXXXXX
VITE_MIXPANEL_TOKEN=your_token_here

# Error Tracking
VITE_SENTRY_DSN=https://xxx@sentry.io/xxx

# Features
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_TRACKING=true
VITE_ENABLE_REFERRALS=true

# Stripe (if using)
VITE_STRIPE_PUBLIC_KEY=pk_live_xxx
```

### **Optional Variables**

```env
# Development
VITE_DEV_MODE=false
VITE_DEBUG=false

# Social
VITE_TWITTER_URL=https://twitter.com/verafy
VITE_LINKEDIN_URL=https://linkedin.com/company/verafy

# Support
VITE_SUPPORT_EMAIL=support@verafy.ai
VITE_SALES_EMAIL=sales@verafy.ai
```

---

## 🏗️ Build Optimization

### **Build Command**

```bash
npm run build
```

### **Build Configuration**

**vite.config.ts:**
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['motion/react', 'lucide-react'],
          'chart-vendor': ['recharts'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
```

---

## 📊 Performance Optimization

### **Image Optimization**

1. **Use WebP Format**
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

2. **Lazy Loading**
```tsx
<img loading="lazy" src="image.jpg" alt="Description" />
```

3. **Responsive Images**
```html
<img 
  srcset="small.jpg 320w, medium.jpg 768w, large.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  src="medium.jpg"
  alt="Description"
/>
```

---

### **Code Splitting**

```tsx
// Lazy load pages
import { lazy, Suspense } from 'react';

const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const AcademyPage = lazy(() => import('./pages/learning/AcademyPage'));

// Use with Suspense
<Suspense fallback={<Loading />}>
  <DashboardPage />
</Suspense>
```

---

### **Bundle Analysis**

```bash
# Analyze bundle size
npm run build
npx vite-bundle-visualizer
```

**Target Sizes:**
- Main bundle: < 300KB (gzipped)
- Vendor bundle: < 200KB (gzipped)
- Total: < 500KB (gzipped)

---

## 🔍 Monitoring & Analytics

### **Google Analytics**

```typescript
// utils/analytics.ts
export function initGA(measurementId: string) {
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', measurementId);
}

export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}
```

---

### **Error Tracking (Sentry)**

```typescript
// main.tsx
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  tracesSampleRate: 1.0,
});
```

---

### **Performance Monitoring**

```typescript
// Track Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_label: metric.id,
    });
  }
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

---

## 🔐 Security Hardening

### **Security Headers**

**For Nginx:**
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' https:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline';" always;
```

**For Vercel (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

### **HTTPS Enforcement**

Always enforce HTTPS in production.

**Vercel:** Automatic  
**Netlify:** Automatic  
**Custom Server:** Configure SSL certificate

---

## 🧪 Testing Before Deployment

### **1. Lighthouse Audit**

```bash
npm install -g lighthouse

# Run audit
lighthouse https://localhost:4173 --view
```

**Target Scores:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

---

### **2. Cross-Browser Testing**

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

---

### **3. Responsive Testing**

Test breakpoints:
- Mobile: 320px, 375px, 425px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1440px, 1920px

---

## 📝 Deployment Checklist

### **Pre-Deploy**
- [ ] Run `npm run build` successfully
- [ ] Test build locally (`npm run preview`)
- [ ] Run Lighthouse audit
- [ ] Check all environment variables
- [ ] Review error tracking setup
- [ ] Verify analytics tracking

### **Deploy**
- [ ] Deploy to staging first
- [ ] Test staging thoroughly
- [ ] Deploy to production
- [ ] Verify production deployment
- [ ] Test critical user flows

### **Post-Deploy**
- [ ] Monitor error rates
- [ ] Check analytics data
- [ ] Test from different locations
- [ ] Verify CDN caching
- [ ] Monitor performance metrics

---

## 🔄 CI/CD Pipeline

### **GitHub Actions Example**

`.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
          VITE_API_KEY: ${{ secrets.VITE_API_KEY }}
          
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🆘 Rollback Procedure

### **Vercel**
1. Go to Vercel dashboard
2. Select deployment
3. Click "Rollback"

### **Netlify**
1. Go to Netlify dashboard
2. Deploys → Select previous deploy
3. Click "Publish deploy"

### **Custom Server**
```bash
# Keep previous build
mv dist dist.backup
cp -r dist.previous dist
sudo systemctl restart nginx
```

---

## 📊 Post-Deployment Monitoring

### **What to Monitor**

1. **Error Rates**
   - Check Sentry dashboard
   - Review error logs
   - Fix critical errors within 4 hours

2. **Performance**
   - Page load times
   - Time to Interactive (TTI)
   - Core Web Vitals

3. **User Behavior**
   - Sign-up conversion rate
   - Feature usage
   - User retention

4. **Server Health**
   - Uptime (target: 99.9%)
   - Response times
   - Resource usage

---

## 📞 Support

**Deployment Issues?**
- Email: devops@verafy.ai
- Slack: #deployments
- On-call: +61 XXX XXX XXX

---

**Deployment Guide Version:** 1.0  
**Last Updated:** January 12, 2026

**Ready to deploy!** 🚀
