# 🧩 Component API Documentation

**Verafy AI - Complete Component Reference**

---

## 📚 Table of Contents

1. [Reusable Components](#reusable-components)
2. [UI Components](#ui-components)
3. [Page Components](#page-components)
4. [Layout Components](#layout-components)
5. [Props Reference](#props-reference)

---

## 🎨 Reusable Components

### **GlassCard**

Glassmorphism card component with backdrop blur and gradient borders.

**Import:**
```typescript
import { GlassCard } from '../components/GlassCard';
```

**Props:**
```typescript
interface GlassCardProps {
  children: React.ReactNode;
  isDark: boolean;
  className?: string;
  animate?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}
```

**Usage:**
```tsx
<GlassCard isDark={isDark} animate={true} padding="lg">
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</GlassCard>
```

**Variants:**
- Default: Semi-transparent with blur
- Animated: Hover animation enabled
- Custom padding: sm (16px), md (24px), lg (32px)

---

### **ThemedButton**

Themed button component with multiple variants and sizes.

**Import:**
```typescript
import { ThemedButton } from '../components/ui/themed-button';
```

**Props:**
```typescript
interface ThemedButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
```

**Usage:**
```tsx
<ThemedButton 
  variant="primary" 
  size="md" 
  onClick={handleClick}
>
  Click Me
</ThemedButton>
```

**Variants:**
- `primary`: Solid background with theme color
- `outline`: Transparent with border
- `ghost`: Minimal styling, no border

**Sizes:**
- `sm`: 32px height, small padding
- `md`: 40px height, medium padding
- `lg`: 48px height, large padding

---

### **PageHero**

Hero section for page headers with title, description, and optional CTA.

**Import:**
```typescript
import { PageHero } from '../components/PageHero';
```

**Props:**
```typescript
interface PageHeroProps {
  title: string;
  description: string;
  isDark: boolean;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  badge?: {
    text: string;
    color: string;
  };
}
```

**Usage:**
```tsx
<PageHero
  title="Earn Verafy Cash"
  description="Create content, earn rewards"
  isDark={isDark}
  showCTA={true}
  ctaText="Get Started"
  badge={{ text: 'NEW', color: '#22D3EE' }}
/>
```

---

### **ContactCTA**

Call-to-action section for contact/support.

**Import:**
```typescript
import { ContactCTA } from '../components/ContactCTA';
```

**Props:**
```typescript
interface ContactCTAProps {
  isDark: boolean;
  title?: string;
  description?: string;
  showEmail?: boolean;
  showChat?: boolean;
}
```

**Usage:**
```tsx
<ContactCTA
  isDark={isDark}
  title="Need Help?"
  description="Our team is here to assist you"
  showEmail={true}
  showChat={true}
/>
```

---

### **TrialCTAButton**

Trial signup button with asterisk for terms.

**Import:**
```typescript
import { TrialCTAButton } from '../components/TrialCTAButton';
```

**Props:**
```typescript
interface TrialCTAButtonProps {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showAsterisk?: boolean;
}
```

**Usage:**
```tsx
<TrialCTAButton
  variant="primary"
  size="lg"
  showAsterisk={true}
/>
```

**Note:** Always shows asterisk for "14-day trial then auto-bill" disclaimer.

---

## 🎛️ UI Components

### **Button**

Base button component (from shadcn/ui).

**Import:**
```typescript
import { Button } from '../components/ui/button';
```

**Props:**
```typescript
interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  asChild?: boolean;
}
```

**Usage:**
```tsx
<Button variant="outline" size="sm" onClick={handleClick}>
  Click Me
</Button>
```

---

## 📄 Page Components

### **DashboardPage**

Main dashboard container with sidebar and routing.

**Import:**
```typescript
import { DashboardPage } from './pages/DashboardPage';
```

**Props:**
```typescript
interface DashboardPageProps {
  isDark: boolean;
}
```

**Usage:**
```tsx
<DashboardPage isDark={isDark} />
```

**Features:**
- Sidebar navigation
- Section routing
- Mobile sidebar toggle
- Upgrade modal integration

---

### **EarnCreditsPage**

Earn Verafy Cash opportunities page.

**Import:**
```typescript
import { EarnCreditsPage } from './pages/learning/EarnCreditsPage';
```

**Props:**
```typescript
interface EarnCreditsPageProps {
  isDark: boolean;
  isAuthenticated?: boolean;
}
```

**Usage:**
```tsx
<EarnCreditsPage 
  isDark={isDark} 
  isAuthenticated={true} 
/>
```

**Features:**
- 10 earning opportunities
- Tab filtering (All, Video, Social, Reviews, Community)
- Submit for Review buttons
- Stats cards
- Bonus tracking

---

### **ReferralProgramPage**

Referral program with leaderboard and tracking.

**Import:**
```typescript
import { ReferralProgramPage } from './pages/referral/ReferralProgramPage';
```

**Props:**
```typescript
interface ReferralProgramPageProps {
  isDark: boolean;
  isAuthenticated?: boolean;
}
```

**Usage:**
```tsx
<ReferralProgramPage 
  isDark={isDark} 
  isAuthenticated={true} 
/>
```

**Features:**
- Referral link sharing
- Top Referrers Leaderboard
- My Referrals tracking
- Login overlay for unauthenticated users

---

### **AcademyPage**

Learning courses catalog.

**Import:**
```typescript
import { AcademyPage } from './pages/learning/AcademyPage';
```

**Props:**
```typescript
interface AcademyPageProps {
  isDark: boolean;
}
```

**Usage:**
```tsx
<AcademyPage isDark={isDark} />
```

**Features:**
- 12 courses organized by level
- Learning paths
- Progress tracking
- Course badges

---

### **SubscriptionsPage**

Billing and subscription management.

**Import:**
```typescript
import { SubscriptionsPage } from './pages/profile/SubscriptionsPage';
```

**Props:**
```typescript
interface SubscriptionsPageProps {
  isDark: boolean;
}
```

**Usage:**
```tsx
<SubscriptionsPage isDark={isDark} />
```

**Features:**
- Growth programs summary
- Current plan display
- Billing history
- Email notifications
- Payment methods

---

## 🏗️ Layout Components

### **DashboardSidebar**

Navigation sidebar for dashboard.

**Import:**
```typescript
import { DashboardSidebar } from '../components/Sidebar';
```

**Props:**
```typescript
interface SidebarProps {
  isDark: boolean;
  currentSection?: string;
  onNavigate?: (section: string) => void;
  isMobileOpen?: boolean;
  onMobileToggle?: () => void;
  onLockedFeatureClick?: (badge: string, name: string) => void;
}
```

**Usage:**
```tsx
<DashboardSidebar
  isDark={isDark}
  currentSection="academy"
  onNavigate={handleNavigate}
  isMobileOpen={isMobileOpen}
  onMobileToggle={toggleMobile}
  onLockedFeatureClick={handleLocked}
/>
```

**Menu Structure:**
- Action Center
- Dashboard (3 items)
- Portfolio (4 items)
- Insights (7 items)
- Research (3 items)
- Strategic Planning (4 items - AI Pro)
- Tax Pack (4 items - Add-On)
- Learning (4 items)
- Community (2 items)
- Referrals (1 item)
- Profile (5 items)

---

### **Layout**

Main application layout wrapper.

**Import:**
```typescript
import { Layout } from '../components/Layout';
```

**Props:**
```typescript
interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  onToggleDark: () => void;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  theme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}
```

**Usage:**
```tsx
<Layout
  isDark={isDark}
  onToggleDark={() => setIsDark(!isDark)}
  currentPage={currentPage}
  onNavigate={setCurrentPage}
  theme={theme}
  onThemeChange={setTheme}
>
  {children}
</Layout>
```

---

## 📊 Props Reference

### **Common Props**

**isDark**
- Type: `boolean`
- Description: Dark mode flag
- Used by: Almost all components

**className**
- Type: `string`
- Description: Additional CSS classes
- Optional: Yes
- Used by: All styled components

**children**
- Type: `React.ReactNode`
- Description: Child elements
- Used by: Container components

---

### **Theme Props**

**theme**
- Type: `'verafy' | 'pink' | 'pride'`
- Description: Active theme
- Default: `'verafy'`

**onThemeChange**
- Type: `(theme: ThemeType) => void`
- Description: Theme change handler

---

### **Navigation Props**

**currentPage**
- Type: `PageType`
- Description: Currently active page
- Values: See `types/navigation.ts`

**onNavigate**
- Type: `(page: PageType) => void`
- Description: Page navigation handler

**currentSection**
- Type: `string`
- Description: Dashboard section ID

---

### **Auth Props**

**isAuthenticated**
- Type: `boolean`
- Description: User authentication status
- Default: `false`

---

## 🎨 Styling Props

### **Size Variants**

```typescript
type Size = 'sm' | 'md' | 'lg';

// Pixel mappings:
// sm: 32-36px height
// md: 40-44px height
// lg: 48-52px height
```

### **Button Variants**

```typescript
type ButtonVariant = 'primary' | 'outline' | 'ghost';

// Styles:
// primary: Solid background
// outline: Border only
// ghost: Minimal styling
```

### **Padding Variants**

```typescript
type Padding = 'sm' | 'md' | 'lg';

// Pixel mappings:
// sm: 16px (p-4)
// md: 24px (p-6)
// lg: 32px (p-8)
```

---

## 🔧 Custom Hooks API

### **useTheme**

```typescript
import { useTheme } from '../hooks/useTheme';

const { theme, setTheme } = useTheme();

// Returns:
// - theme: Current theme ('verafy' | 'pink' | 'pride')
// - setTheme: Function to update theme
```

---

## 📦 Type Definitions

### **PageType**

```typescript
export type PageType = 
  | 'home' 
  | 'pricing' 
  | 'dashboard'
  | 'academy'
  | 'earn-credits'
  | 'referral-program'
  | 'subscriptions'
  // ... 30+ more types
```

### **ThemeType**

```typescript
export type ThemeType = 'verafy' | 'pink' | 'pride';
```

### **UserTier**

```typescript
export type UserTier = 'starter' | 'standard' | 'pro' | 'tax-pack';
```

---

## 🎯 Usage Examples

### **Building a Page**

```tsx
import { GlassCard } from '../components/GlassCard';
import { ThemedButton } from '../components/ui/themed-button';
import { PageHero } from '../components/PageHero';

export function MyPage({ isDark }: { isDark: boolean }) {
  return (
    <div className="p-6">
      <PageHero
        title="My Page"
        description="Page description"
        isDark={isDark}
      />
      
      <GlassCard isDark={isDark} padding="lg">
        <h2>Section Title</h2>
        <p>Section content</p>
        <ThemedButton variant="primary">
          Click Me
        </ThemedButton>
      </GlassCard>
    </div>
  );
}
```

### **Building a Dashboard Section**

```tsx
import { GlassCard } from '../../components/GlassCard';
import { CHART_COLORS } from '../../config/theme';

export function MySectionPage({ isDark }: { isDark: boolean }) {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className={`text-3xl font-bold mb-4 ${
        isDark ? 'text-white' : 'text-slate-900'
      }`}>
        Section Title
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard isDark={isDark}>
          {/* Card content */}
        </GlassCard>
      </div>
    </div>
  );
}
```

---

## 🔍 Finding Components

### **By Category:**

**Reusable UI:**
- `/components/GlassCard.tsx`
- `/components/ui/themed-button.tsx`
- `/components/PageHero.tsx`

**Pages:**
- `/pages/DashboardPage.tsx`
- `/pages/learning/*.tsx`
- `/pages/referral/*.tsx`

**Layout:**
- `/components/Layout.tsx`
- `/components/Sidebar.tsx`
- `/components/Navigation.tsx`

---

## 📚 Related Documentation

- [Architecture](./ARCHITECTURE.md)
- [Development Guide](./DEVELOPMENT.md)
- [Theming System](./THEMING.md)

---

**API Version:** 1.0  
**Last Updated:** January 12, 2026
