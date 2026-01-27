# 🏗️ System Architecture

**Verafy AI - Technical Architecture Documentation**

---

## 📐 Architecture Overview

Verafy AI is built with a modern, scalable architecture using React, TypeScript, and Tailwind CSS.

```
┌─────────────────────────────────────────────────────────┐
│                    USER INTERFACE                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Landing    │  │   Dashboard  │  │   Growth     │  │
│  │    Pages     │  │    System    │  │   Systems    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                  COMPONENT LAYER                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │ Reusable │  │  Themed  │  │   Form   │  │  Chart  │ │
│  │   Cards  │  │ Buttons  │  │   Items  │  │  Items  │ │
│  └──────────┘  └──────────┘  └──────────┘  └─────────┘ │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                   STATE MANAGEMENT                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ React Hooks  │  │    Context   │  │    Custom    │  │
│  │   (useState) │  │    (Theme)   │  │    Hooks     │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                    DATA LAYER                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │     API      │  │    Local     │  │   Session    │  │
│  │   Clients    │  │   Storage    │  │   Storage    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Directory Structure

```
verafy-ai/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Base UI components
│   │   │   ├── button.tsx
│   │   │   ├── themed-button.tsx
│   │   │   └── ...
│   │   ├── GlassCard.tsx    # Glassmorphism cards
│   │   ├── PageHero.tsx     # Page headers
│   │   ├── Sidebar.tsx      # Dashboard sidebar
│   │   └── ...
│   │
│   ├── pages/               # Page components
│   │   ├── dashboard/       # Dashboard pages
│   │   │   ├── ActionCenterPage.tsx
│   │   │   ├── VeraDashboardPage.tsx
│   │   │   └── ...
│   │   ├── learning/        # Learning system pages
│   │   │   ├── AcademyPage.tsx
│   │   │   ├── EarnCreditsPage.tsx
│   │   │   └── ...
│   │   ├── referral/        # Referral system pages
│   │   │   └── ReferralProgramPage.tsx
│   │   ├── profile/         # User profile pages
│   │   │   ├── SettingsPage.tsx
│   │   │   ├── SubscriptionsPage.tsx
│   │   │   └── ...
│   │   ├── community/       # Community pages
│   │   │   ├── ForumPage.tsx
│   │   │   └── BlogPage.tsx
│   │   └── ...
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useTheme.ts
│   │   ├── useAuth.ts
│   │   └── ...
│   │
│   ├── config/              # Configuration files
│   │   ├── theme.ts         # Theme colors
│   │   ├── userTier.ts      # User tier config
│   │   ├── contacts.ts      # Contact emails
│   │   └── ...
│   │
│   ├── types/               # TypeScript type definitions
│   │   ├── navigation.ts
│   │   ├── user.ts
│   │   └── ...
│   │
│   ├── utils/               # Utility functions
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── ...
│   │
│   ├── styles/              # Global styles
│   │   └── globals.css      # Tailwind + custom CSS
│   │
│   ├── App.tsx              # Root component
│   └── main.tsx             # Entry point
│
├── public/                  # Static assets
├── docs/                    # Documentation
├── .env.example             # Environment template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.js       # Tailwind config
└── vite.config.ts           # Vite config
```

---

## 🧩 Core Components

### **1. App.tsx - Root Component**

```typescript
export default function App() {
  const [mode, setMode] = useState<'web' | 'slide'>('web');
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isDark, setIsDark] = useState(true);
  const { theme, setTheme } = useTheme();

  return (
    <Layout 
      isDark={isDark} 
      currentPage={currentPage} 
      onNavigate={setCurrentPage}
      theme={theme}
      onThemeChange={setTheme}
    >
      {/* Page routing */}
      {currentPage === 'home' && <HomePage isDark={isDark} />}
      {currentPage === 'dashboard' && <DashboardPage isDark={isDark} />}
      {/* ... more routes */}
    </Layout>
  );
}
```

### **2. Layout.tsx - Main Layout**

```typescript
interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  theme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

export function Layout({ children, isDark, ... }: LayoutProps) {
  return (
    <div className={isDark ? 'dark' : 'light'}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
```

### **3. DashboardPage.tsx - Dashboard Hub**

```typescript
export function DashboardPage({ isDark }: DashboardPageProps) {
  const [currentSection, setCurrentSection] = useState('vera-dashboard');
  const [isAuthenticated] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar 
        currentSection={currentSection}
        onNavigate={setCurrentSection}
      />
      <div className="flex-1 overflow-y-auto">
        {/* Section routing */}
        {currentSection === 'academy' && <AcademyPage />}
        {currentSection === 'earn-credits' && <EarnCreditsPage />}
        {/* ... more sections */}
      </div>
    </div>
  );
}
```

---

## 🎨 Design System Architecture

### **Theme System**

```typescript
// config/theme.ts
export const CHART_COLORS = {
  primary: '#22D3EE',      // Cyan
  secondary: '#A855F7',    // Purple
  success: '#22C55E',      // Green
  warning: '#FBBF24',      // Amber
  danger: '#EF4444',       // Red
  info: '#3B82F6',         // Blue
};

export type ThemeType = 'verafy' | 'pink' | 'pride';
```

### **CSS Variables**

```css
/* styles/globals.css */
@theme {
  --color-theme-primary: #22D3EE;
  --color-theme-secondary: #A855F7;
  /* Platform colors */
  --color-youtube: #FF0000;
  --color-instagram: #E1306C;
  --color-tiktok: #00F2EA;
  --color-twitter: #1DA1F2;
  --color-linkedin: #0077B5;
}
```

---

## 🔄 Data Flow

### **1. User Authentication Flow**

```
User Login
    ↓
Authenticate API Call
    ↓
Store Auth Token (localStorage)
    ↓
Set Auth State (useState)
    ↓
Redirect to Dashboard
    ↓
Load User Data
```

### **2. Page Navigation Flow**

```
User Clicks Menu Item
    ↓
onNavigate(pageId) Called
    ↓
setCurrentPage(pageId)
    ↓
React Re-renders
    ↓
New Page Component Loads
```

### **3. Theme Change Flow**

```
User Selects Theme
    ↓
onThemeChange(theme) Called
    ↓
Update CSS Variables
    ↓
Store in localStorage
    ↓
Components Re-render
```

---

## 🗂️ State Management

### **Component State (useState)**

```typescript
// Local component state
const [isDark, setIsDark] = useState(true);
const [currentPage, setCurrentPage] = useState<PageType>('home');
const [isAuthenticated, setIsAuthenticated] = useState(false);
```

### **Custom Hooks**

```typescript
// hooks/useTheme.ts
export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>('verafy');
  
  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved as ThemeType);
  }, []);

  const updateTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, setTheme: updateTheme };
}
```

---

## 🔌 Integration Points

### **1. API Integration**

```typescript
// Future API client structure
const apiClient = {
  baseURL: process.env.VITE_API_URL,
  
  async get(endpoint: string) {
    const response = await fetch(`${this.baseURL}${endpoint}`);
    return response.json();
  },
  
  async post(endpoint: string, data: any) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
```

### **2. Analytics Integration**

```typescript
// Track page views
function trackPageView(page: string) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_path: page,
    });
  }
}
```

---

## 🎯 Three Growth Systems Architecture

### **1. Earn Verafy Cash**

```
Content Submission
    ↓
Validation & Review
    ↓
Credit Calculation
    ↓
Approval/Rejection
    ↓
Credit Distribution
    ↓
Cash Conversion (20:1)
```

### **2. Referral Program**

```
Generate Referral Link
    ↓
Friend Clicks Link
    ↓
Sign Declaration
    ↓
Friend Signs Up
    ↓
14-Day Trial Period
    ↓
Friend Upgrades to Paid
    ↓
Reward Distribution ($10 each)
```

### **3. Academy**

```
Browse Courses
    ↓
Enroll in Course
    ↓
Complete Lessons
    ↓
Track Progress
    ↓
Earn Badges
    ↓
Maintain Streak
```

---

## 🔒 Security Architecture

### **Authentication**

```typescript
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

// Protected route wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <LoginOverlay />;
  }
  
  return <>{children}</>;
}
```

### **Data Protection**

- All sensitive data encrypted at rest
- HTTPS only in production
- No sensitive data in localStorage
- Auth tokens in httpOnly cookies (backend)

---

## 📊 Performance Architecture

### **Code Splitting**

```typescript
// Lazy load pages
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const AcademyPage = lazy(() => import('./pages/learning/AcademyPage'));

// Use with Suspense
<Suspense fallback={<Loading />}>
  <DashboardPage />
</Suspense>
```

### **Asset Optimization**

- Images: WebP with PNG/JPG fallbacks
- Icons: SVG sprites for reusability
- Fonts: Subset and preload
- CSS: Purged unused styles

---

## 🧪 Testing Architecture

### **Test Structure**

```
tests/
├── unit/              # Component unit tests
│   ├── GlassCard.test.tsx
│   ├── ThemedButton.test.tsx
│   └── ...
├── integration/       # Integration tests
│   ├── navigation.test.tsx
│   ├── auth-flow.test.tsx
│   └── ...
└── e2e/              # End-to-end tests
    ├── user-journey.test.tsx
    ├── payment-flow.test.tsx
    └── ...
```

---

## 🚀 Build Architecture

### **Vite Configuration**

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['motion/react', 'lucide-react'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
```

### **Build Output**

```
dist/
├── assets/
│   ├── index-[hash].js     # Main bundle
│   ├── vendor-[hash].js    # Vendor code
│   └── styles-[hash].css   # Compiled CSS
├── images/
└── index.html              # Entry HTML
```

---

## 📱 Responsive Architecture

### **Breakpoints**

```typescript
const breakpoints = {
  mobile: '320px - 768px',
  tablet: '768px - 1024px',
  desktop: '1024px+',
};
```

### **Responsive Components**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Auto-responsive grid */}
</div>
```

---

## 🔄 Future Architecture Plans

### **Planned Improvements:**

1. **State Management:** Zustand or Redux Toolkit
2. **API Layer:** React Query for data fetching
3. **Real-time:** WebSocket integration
4. **Offline:** Service Workers + IndexedDB
5. **Native:** React Native for iOS/Android

---

## 📚 Related Documentation

- [Component API](./COMPONENT_API.md)
- [Data Flow](./DATA_FLOW.md)
- [Development Guide](./DEVELOPMENT.md)

---

**Architecture Version:** 1.0  
**Last Updated:** January 12, 2026
