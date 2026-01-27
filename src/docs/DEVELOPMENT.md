# 💻 Development Guide

**Verafy AI - Developer Documentation**

---

## 📋 Table of Contents

1. [Development Setup](#development-setup)
2. [Project Structure](#project-structure)
3. [Coding Standards](#coding-standards)
4. [Component Development](#component-development)
5. [State Management](#state-management)
6. [Styling Guidelines](#styling-guidelines)
7. [Testing](#testing)
8. [Git Workflow](#git-workflow)

---

## 🚀 Development Setup

### **Prerequisites**

- Node.js v20.0.0+
- npm v9.0.0+
- Git
- VS Code (recommended)

### **Initial Setup**

```bash
# Clone repository
git clone https://github.com/verafy/verafy-ai.git
cd verafy-ai

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev
```

**Server runs at:** `http://localhost:5173`

---

### **VS Code Setup**

**Required Extensions:**
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin

**Recommended Extensions:**
- Error Lens
- GitLens
- Auto Rename Tag
- Import Cost

**Settings (.vscode/settings.json):**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^\"'`]*)(?:'|\"|`)"]
  ]
}
```

---

## 📁 Project Structure

```
verafy-ai/
├── src/
│   ├── components/           # Reusable components
│   │   ├── ui/              # Base UI components
│   │   ├── GlassCard.tsx
│   │   ├── PageHero.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── pages/               # Page components
│   │   ├── dashboard/       # Dashboard pages
│   │   ├── learning/        # Learning pages
│   │   ├── referral/        # Referral pages
│   │   ├── profile/         # Profile pages
│   │   ├── community/       # Community pages
│   │   └── DashboardPage.tsx
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useTheme.ts
│   │   └── useAuth.ts
│   │
│   ├── config/              # Configuration
│   │   ├── theme.ts         # Theme colors
│   │   ├── userTier.ts      # User tiers
│   │   └── contacts.ts      # Contact info
│   │
│   ├── types/               # TypeScript types
│   │   ├── navigation.ts
│   │   └── user.ts
│   │
│   ├── utils/               # Utility functions
│   │   ├── formatters.ts
│   │   └── validators.ts
│   │
│   ├── styles/              # Global styles
│   │   └── globals.css
│   │
│   ├── App.tsx              # Root component
│   └── main.tsx             # Entry point
│
├── public/                  # Static assets
├── docs/                    # Documentation
├── .env.example             # Environment template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 📝 Coding Standards

### **TypeScript**

**Always use TypeScript:**
```typescript
// ✅ Good
interface Props {
  isDark: boolean;
  title: string;
}

export function MyComponent({ isDark, title }: Props) {
  // ...
}

// ❌ Bad
export function MyComponent({ isDark, title }) {
  // No type annotations
}
```

**Use type inference where possible:**
```typescript
// ✅ Good
const [count, setCount] = useState(0); // Type inferred as number

// ❌ Bad (unnecessary)
const [count, setCount] = useState<number>(0);
```

**Define interfaces for props:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
```

---

### **Naming Conventions**

**Components:** PascalCase
```typescript
// ✅ Good
GlassCard.tsx
ThemedButton.tsx
PageHero.tsx

// ❌ Bad
glassCard.tsx
themed-button.tsx
pageHero.tsx
```

**Files:** kebab-case or PascalCase (match component)
```
// ✅ Good
GlassCard.tsx
useTheme.ts
theme.ts

// ❌ Bad
glass_card.tsx
UseTheme.ts
Theme.ts
```

**Variables/Functions:** camelCase
```typescript
// ✅ Good
const isDark = true;
const handleClick = () => {};

// ❌ Bad
const IsDark = true;
const HandleClick = () => {};
```

**Constants:** UPPER_SNAKE_CASE
```typescript
// ✅ Good
const API_URL = 'https://api.verafy.ai';
const MAX_RETRIES = 3;

// ❌ Bad
const apiUrl = 'https://api.verafy.ai';
const maxRetries = 3;
```

---

### **Code Organization**

**Group related code:**
```typescript
// ✅ Good
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { DollarSign, TrendingUp } from 'lucide-react';

import { GlassCard } from '../components/GlassCard';
import { ThemedButton } from '../components/ui/themed-button';
import { CHART_COLORS } from '../config/theme';

// ❌ Bad (mixed imports)
import { GlassCard } from '../components/GlassCard';
import { useState } from 'react';
import { CHART_COLORS } from '../config/theme';
import { motion } from 'motion/react';
```

**Order of imports:**
1. React imports
2. Third-party libraries
3. Components
4. Utils/Config
5. Types
6. Styles

---

### **Component Structure**

```typescript
// 1. Imports
import { useState } from 'react';
import { GlassCard } from '../components/GlassCard';

// 2. Types/Interfaces
interface MyComponentProps {
  isDark: boolean;
  title: string;
}

// 3. Constants (if needed)
const MAX_ITEMS = 10;

// 4. Component
export function MyComponent({ isDark, title }: MyComponentProps) {
  // 4a. Hooks
  const [count, setCount] = useState(0);
  
  // 4b. Event handlers
  const handleClick = () => {
    setCount(count + 1);
  };
  
  // 4c. Derived values
  const displayText = `${title}: ${count}`;
  
  // 4d. Effects (if needed)
  useEffect(() => {
    // Side effects
  }, [count]);
  
  // 4e. Render
  return (
    <GlassCard isDark={isDark}>
      <h2>{displayText}</h2>
      <button onClick={handleClick}>Increment</button>
    </GlassCard>
  );
}
```

---

## 🎨 Component Development

### **Creating a New Component**

**1. Create file in appropriate directory:**
```
components/MyComponent.tsx
```

**2. Define props interface:**
```typescript
interface MyComponentProps {
  isDark: boolean;
  title: string;
  onAction?: () => void;
}
```

**3. Implement component:**
```typescript
export function MyComponent({ isDark, title, onAction }: MyComponentProps) {
  return (
    <div className={isDark ? 'bg-slate-900' : 'bg-white'}>
      <h2>{title}</h2>
      {onAction && <button onClick={onAction}>Action</button>}
    </div>
  );
}
```

**4. Export from index (if needed):**
```typescript
// components/index.ts
export { MyComponent } from './MyComponent';
```

---

### **Reusable Component Guidelines**

**Keep components focused:**
```typescript
// ✅ Good - Single responsibility
function UserAvatar({ src, alt }: AvatarProps) {
  return <img src={src} alt={alt} className="rounded-full" />;
}

function UserName({ name }: NameProps) {
  return <span className="font-semibold">{name}</span>;
}

// ❌ Bad - Too many responsibilities
function UserProfile({ user, onEdit, onDelete, showStats }: Props) {
  // Too complex
}
```

**Accept necessary props only:**
```typescript
// ✅ Good
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
}

// ❌ Bad (too specific)
interface ButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  hoverBgColor: string;
  // Too many props!
}
```

**Use composition:**
```typescript
// ✅ Good
<GlassCard isDark={isDark}>
  <h2>Title</h2>
  <p>Content</p>
  <ThemedButton>Click Me</ThemedButton>
</GlassCard>

// ❌ Bad
<GlassCard 
  isDark={isDark}
  title="Title"
  content="Content"
  buttonText="Click Me"
  onButtonClick={() => {}}
/>
```

---

## 🎯 State Management

### **Local State (useState)**

Use for component-specific state:
```typescript
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### **Lifting State Up**

Share state between components:
```typescript
function ParentComponent() {
  const [isDark, setIsDark] = useState(true);
  
  return (
    <>
      <Header isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} />
    </>
  );
}
```

---

### **Custom Hooks**

Extract reusable logic:
```typescript
// hooks/useLocalStorage.ts
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue] as const;
}

// Usage
function MyComponent() {
  const [theme, setTheme] = useLocalStorage('theme', 'verafy');
  
  return <div>Current theme: {theme}</div>;
}
```

---

## 🎨 Styling Guidelines

### **Tailwind CSS**

**Use Tailwind utility classes:**
```tsx
// ✅ Good
<div className="p-6 bg-slate-900 rounded-lg">
  <h2 className="text-2xl font-bold text-white">Title</h2>
</div>

// ❌ Bad (inline styles)
<div style={{ padding: '24px', background: '#0f172a' }}>
  <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Title</h2>
</div>
```

**Responsive design:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Auto-responsive grid */}
</div>
```

**Dark mode:**
```tsx
<div className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
  Content
</div>
```

---

### **CSS Variables**

**Use theme variables:**
```css
/* styles/globals.css */
@theme {
  --color-theme-primary: #22D3EE;
  --color-theme-secondary: #A855F7;
}
```

```tsx
// Usage
<div style={{ color: 'var(--color-theme-primary)' }}>
  Themed text
</div>
```

---

### **Component-Specific Styles**

**Use Tailwind when possible:**
```tsx
// ✅ Good
<button className="px-4 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-600">
  Click Me
</button>

// ❌ Avoid CSS modules unless necessary
```

---

## 🧪 Testing

### **Unit Tests**

```typescript
// MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders title correctly', () => {
    render(<MyComponent isDark={true} title="Test Title" />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
  
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<MyComponent onClick={handleClick} />);
    
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

---

### **Integration Tests**

```typescript
// navigation.test.tsx
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('Navigation', () => {
  it('navigates between pages', () => {
    render(<App />);
    
    // Click pricing link
    screen.getByText('Pricing').click();
    
    // Verify pricing page loaded
    expect(screen.getByText('Choose Your Plan')).toBeInTheDocument();
  });
});
```

---

### **Running Tests**

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- MyComponent.test.tsx

# Generate coverage report
npm run test:coverage
```

---

## 🔄 Git Workflow

### **Branch Naming**

```bash
# Feature branches
feature/add-referral-system
feature/improve-dashboard

# Bug fixes
fix/portfolio-calculation-error
fix/mobile-sidebar-toggle

# Hotfixes
hotfix/critical-security-patch
```

---

### **Commit Messages**

**Format:** `type(scope): description`

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructure
- `test`: Tests
- `chore`: Maintenance

**Examples:**
```bash
feat(referrals): add leaderboard component
fix(dashboard): correct portfolio value calculation
docs(api): update component prop documentation
style(buttons): improve hover states
refactor(sidebar): extract menu items to config
test(earn-credits): add submission flow tests
chore(deps): update dependencies
```

---

### **Pull Request Process**

1. **Create feature branch**
```bash
git checkout -b feature/my-feature
```

2. **Make changes and commit**
```bash
git add .
git commit -m "feat(scope): description"
```

3. **Push to remote**
```bash
git push origin feature/my-feature
```

4. **Create PR on GitHub**
- Fill out PR template
- Request reviewers
- Link related issues

5. **Address review comments**
```bash
git add .
git commit -m "refactor: address review comments"
git push
```

6. **Merge after approval**
- Squash and merge (preferred)
- Delete branch after merge

---

## 🐛 Debugging

### **React DevTools**

Install browser extension:
- Chrome: React Developer Tools
- Firefox: React Developer Tools

**Usage:**
- Inspect component tree
- View props and state
- Profile performance

---

### **Console Debugging**

```typescript
// During development only
if (import.meta.env.DEV) {
  console.log('Debug info:', data);
}

// Remove before production
```

---

### **TypeScript Errors**

```bash
# Check types
npm run type-check

# Common fixes
# 1. Restart TypeScript server in VS Code
# 2. Delete node_modules and reinstall
# 3. Check tsconfig.json
```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🤝 Contributing

### **Code Review Checklist**

- [ ] Code follows style guide
- [ ] All tests passing
- [ ] TypeScript types correct
- [ ] No console.log statements
- [ ] Responsive design working
- [ ] Dark/light mode working
- [ ] Performance optimized
- [ ] Documentation updated

---

### **Getting Help**

- **Slack:** #development
- **Email:** dev@verafy.ai
- **Documentation:** /docs

---

**Development Guide Version:** 1.0  
**Last Updated:** January 12, 2026

**Happy coding!** 🚀
