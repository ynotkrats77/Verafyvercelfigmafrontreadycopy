# 🚀 Installation Guide

**Verafy AI - Complete Setup Instructions**

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher (or yarn/pnpm)
- **Git:** Latest version
- **Code Editor:** VS Code recommended

---

## ⚡ Quick Install

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/verafy/verafy-ai.git
cd verafy-ai
```

### **Step 2: Install Dependencies**

```bash
npm install
```

### **Step 3: Start Development Server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🛠️ Detailed Installation

### **1. System Requirements**

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| Node.js | v18.0.0 | v20.0.0+ |
| RAM | 4GB | 8GB+ |
| Disk Space | 500MB | 2GB+ |
| OS | Windows 10, macOS 10.15, Linux | Latest versions |

### **2. Install Node.js**

**Option A: Official Installer**
- Download from [nodejs.org](https://nodejs.org)
- Install LTS version
- Verify: `node --version`

**Option B: Using nvm (Recommended)**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js
nvm install 20
nvm use 20
```

### **3. Clone Repository**

```bash
# HTTPS
git clone https://github.com/verafy/verafy-ai.git

# OR SSH
git clone git@github.com:verafy/verafy-ai.git

# Navigate to directory
cd verafy-ai
```

### **4. Install Dependencies**

```bash
# Using npm
npm install

# OR using yarn
yarn install

# OR using pnpm
pnpm install
```

### **5. Environment Setup**

Create `.env` file in root directory:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Application
VITE_APP_NAME=Verafy AI
VITE_APP_URL=http://localhost:5173

# API
VITE_API_URL=https://api.verafy.ai
VITE_API_KEY=your_api_key_here

# Features
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_TRACKING=true

# Theme
VITE_DEFAULT_THEME=verafy
```

### **6. Start Development Server**

```bash
npm run dev
```

**Available at:** `http://localhost:5173`

---

## 📦 Package Manager Options

### **npm (Default)**
```bash
npm install
npm run dev
npm run build
```

### **yarn**
```bash
yarn install
yarn dev
yarn build
```

### **pnpm (Fastest)**
```bash
pnpm install
pnpm dev
pnpm build
```

---

## 🔧 Configuration

### **TypeScript Configuration**

The project uses TypeScript 5.0+. Configuration in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### **Tailwind CSS Configuration**

Using Tailwind v4 with CSS variables. Configuration in `styles/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-theme-primary: #22D3EE;
  --color-theme-secondary: #A855F7;
  /* ... more theme colors */
}
```

---

## 🚀 Build for Production

### **Build Command**

```bash
npm run build
```

**Output:** `dist/` directory

### **Preview Production Build**

```bash
npm run preview
```

**Available at:** `http://localhost:4173`

### **Build Optimization**

The build is optimized with:
- Tree shaking
- Code splitting
- Minification
- Compression
- Asset optimization

---

## 🧪 Testing

### **Run Tests**

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

### **Linting**

```bash
# Run ESLint
npm run lint

# Fix auto-fixable issues
npm run lint:fix
```

### **Type Checking**

```bash
# Check TypeScript types
npm run type-check
```

---

## 📱 Development Tools

### **Recommended VS Code Extensions**

Create `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "mikestead.dotenv"
  ]
}
```

### **VS Code Settings**

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^\"'`]*)(?:'|\"|`)"]
  ]
}
```

---

## 🐳 Docker Installation

### **Using Docker**

```bash
# Build image
docker build -t verafy-ai .

# Run container
docker run -p 3000:3000 verafy-ai
```

### **Docker Compose**

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    volumes:
      - ./dist:/app/dist
```

Run with:
```bash
docker-compose up
```

---

## 🔍 Troubleshooting

### **Common Issues**

**1. Port Already in Use**
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

**2. Node Version Mismatch**
```bash
# Check current version
node --version

# Switch to correct version
nvm use 20
```

**3. Dependency Conflicts**
```bash
# Clear cache
npm cache clean --force

# Remove node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

**4. Build Errors**
```bash
# Clear build cache
rm -rf dist

# Rebuild
npm run build
```

---

## 📊 Verify Installation

Run the following checks:

```bash
# 1. Check Node.js version
node --version
# Expected: v18.0.0 or higher

# 2. Check npm version
npm --version
# Expected: v9.0.0 or higher

# 3. Check TypeScript
npx tsc --version
# Expected: v5.0.0 or higher

# 4. Run linter
npm run lint
# Expected: No errors

# 5. Run type check
npm run type-check
# Expected: No errors

# 6. Start dev server
npm run dev
# Expected: Server running on http://localhost:5173
```

---

## 🎯 Next Steps

After installation:

1. ✅ Read [Quick Start Guide](./QUICK_START.md)
2. ✅ Review [Architecture](./ARCHITECTURE.md)
3. ✅ Explore [Component API](./COMPONENT_API.md)
4. ✅ Check [Development Guide](./DEVELOPMENT.md)

---

## 📞 Getting Help

**Issues during installation?**

- Check [Troubleshooting Guide](./TROUBLESHOOTING.md)
- Search [GitHub Issues](https://github.com/verafy/verafy-ai/issues)
- Contact support@verafy.ai

---

## 🔄 Updating

### **Update Dependencies**

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update package-name
```

### **Update Verafy AI**

```bash
# Pull latest changes
git pull origin main

# Install new dependencies
npm install

# Restart dev server
npm run dev
```

---

**Installation Complete!** 🎉

You're ready to start developing with Verafy AI!
