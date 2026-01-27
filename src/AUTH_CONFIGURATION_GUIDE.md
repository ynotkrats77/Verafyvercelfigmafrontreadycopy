# 🔐 Authentication & Authorization Configuration Guide

**Date:** January 12, 2026  
**Status:** Development Mode - Auth Bypass Active  
**File:** `/config/authSettings.ts`

---

## 🎯 **Overview**

All dashboard sections and post-signin pages in Verafy AI are protected under authentication settings. This guide explains the global configuration system and how to implement authentication when ready.

---

## ⚙️ **Global Settings**

### **Configuration File:**
```
/config/authSettings.ts
```

### **Key Constants:**

#### **1. TEMP_BYPASS_AUTH**
```typescript
export const TEMP_BYPASS_AUTH = true;
```

**Current:** `true` (Development mode)  
**Production:** Set to `false` to enforce authentication

**What it does:**
- When `true`: Allows temporary access to all dashboard sections without login
- When `false`: Requires authentication to access protected routes

---

## 🚪 **Temporary Access**

### **How to Access Dashboard (Development Only):**

#### **Method 1: Footer Link** ⭐ RECOMMENDED
1. Scroll to the bottom of any page
2. Look for the amber "DEVELOPMENT MODE" section
3. Click **"🔓 Access Dashboard (Temporary Dev Link)"**

#### **Method 2: Floating Action Button**
- Click the **User icon** button in the bottom-right floating buttons

#### **Method 3: Direct URL**
- Navigate via Sign In page → Currently bypasses auth

**Note:** This temporary access will be hidden when `TEMP_BYPASS_AUTH = false`

---

## 🔒 **Protected Routes**

### **Dashboard Main Page:**
```typescript
requiresAuth: true
```
- Access: `/dashboard`
- Requires: User login

### **Protected Sidebar Sections:**

#### **Free Access (All Authenticated Users):**
```
✅ Action Center
✅ Vera Dashboard
✅ Classic Dashboard
✅ Vera Chat
✅ Portfolio Manager
✅ Compare Portfolios
✅ Consolidated View
✅ Portfolio Health
✅ Concentration Risk
✅ Academy
✅ Courses
✅ Achievements
✅ Earn Credits
```

#### **Standard Plan Required:**
```
🔵 AI Daily Feed
🔵 Winners vs Losers
🔵 Cash Flow & Wealth Behavioral Patterns
🔵 Sector Allocation
🔵 Risk-Adjusted Performance
🔵 Market Opportunity
🔵 Watchlists
🔵 Screeners
🔵 Stock Pickers
```

#### **AI Pro Plan Required:**
```
🟣 AI Strategy Insights Portfolio Optimization
🟣 Future Scenarios
🟣 Peer Comparison
🟣 Strategic Planner
```

#### **Tax Pack Add-On Required:**
```
🟠 Tax Center
🟠 Tax Planner
🟠 Capital Gains Summary Tax-Loss Harvesting
🟠 Tax Reports
```

---

## 📝 **Badge System**

### **Feature Tier Badges:**

| Badge | Color | Meaning |
|-------|-------|---------|
| **Legacy** | Gray (#64748b) | Deprecated/older features |
| **Standard** | Blue (#3b82f6) | Requires Standard plan or higher |
| **AI Pro** | Purple (#a855f7) | Requires Pro plan |
| **Add-On** | Orange (#f97316) | Requires additional purchase |

### **Plan Hierarchy:**
```
Starter → Standard → Pro
   ↓         ↓         ↓
  Free    Standard   All Features
          Features   + AI Pro
```

**Note:** Higher tier plans include all lower tier features.

---

## 🔧 **Implementation Phases**

### **PHASE 1: Development (Current)**
**Status:** ✅ Complete

- [x] `TEMP_BYPASS_AUTH = true`
- [x] Temporary access link visible in footer
- [x] All sections accessible for testing
- [x] Auth configuration documented
- [x] Protected routes defined
- [x] Plan requirements specified

**Access:**
- Anyone can access dashboard via temporary link
- No authentication required
- Full access to all features

---

### **PHASE 2: Production (Future)**
**Status:** ⏳ Pending

#### **Required Changes:**

1. **Disable Bypass Mode**
   ```typescript
   // In /config/authSettings.ts
   export const TEMP_BYPASS_AUTH = false;
   ```

2. **Implement Authentication Provider**
   ```typescript
   // Create /contexts/AuthContext.tsx
   import { createContext, useContext, useState, useEffect } from 'react';
   import { AuthState, UNAUTHENTICATED_STATE } from '../config/authSettings';
   
   const AuthContext = createContext<AuthState>(UNAUTHENTICATED_STATE);
   
   export function AuthProvider({ children }) {
     const [authState, setAuthState] = useState<AuthState>(UNAUTHENTICATED_STATE);
     
     // TODO: Implement Supabase authentication
     // - Sign in/sign up
     // - Session management
     // - Token refresh
     // - User profile fetching
     
     return (
       <AuthContext.Provider value={authState}>
         {children}
       </AuthContext.Provider>
     );
   }
   
   export const useAuth = () => useContext(AuthContext);
   ```

3. **Wrap App with Auth Provider**
   ```typescript
   // In App.tsx
   import { AuthProvider } from './contexts/AuthContext';
   
   function App() {
     return (
       <AuthProvider>
         <Layout>
           {/* App content */}
         </Layout>
       </AuthProvider>
     );
   }
   ```

4. **Add Route Guards**
   ```typescript
   // Create /components/ProtectedRoute.tsx
   import { useAuth } from '../contexts/AuthContext';
   import { requiresAuth } from '../config/authSettings';
   import { Navigate } from 'react-router-dom';
   
   export function ProtectedRoute({ page, children }) {
     const { isAuthenticated } = useAuth();
     
     if (requiresAuth(page) && !isAuthenticated) {
       return <Navigate to="signin" />;
     }
     
     return children;
   }
   ```

5. **Implement Feature Gating**
   ```typescript
   // In Sidebar.tsx or dashboard components
   import { useAuth } from '../contexts/AuthContext';
   import { hasRequiredPlan, getUpgradeMessage } from '../config/authSettings';
   
   function DashboardSection({ section }) {
     const { user } = useAuth();
     const canAccess = hasRequiredPlan(section, user?.plan);
     
     if (!canAccess) {
       return (
         <LockedFeatureCard
           message={getUpgradeMessage(section)}
           onUpgrade={() => navigate('pricing')}
         />
       );
     }
     
     return <FeatureContent />;
   }
   ```

6. **Hide Temporary Access**
   ```typescript
   // Footer.tsx - Already implemented!
   {TEMP_BYPASS_AUTH && (
     <div>Temporary Access Link</div>
   )}
   // This will automatically hide when TEMP_BYPASS_AUTH = false
   ```

---

## 🔐 **Authentication State Interface**

### **User Object:**
```typescript
interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    email: string;
    name?: string;
    plan: 'starter' | 'standard' | 'pro';
    addOns: string[];
    isAdmin?: boolean;
  } | null;
}
```

### **Example Authenticated State:**
```typescript
{
  isAuthenticated: true,
  user: {
    id: "user-123",
    email: "user@example.com",
    name: "John Doe",
    plan: "standard",
    addOns: ["tax-pack"],
    isAdmin: false
  }
}
```

---

## 🛡️ **Helper Functions**

### **Check Authentication:**
```typescript
import { requiresAuth } from '../config/authSettings';

if (requiresAuth('dashboard')) {
  // Redirect to sign in
}
```

### **Check Plan Access:**
```typescript
import { hasRequiredPlan } from '../config/authSettings';

const canAccess = hasRequiredPlan('ai-strategy', userPlan);
```

### **Check Add-On Access:**
```typescript
import { hasRequiredAddOns } from '../config/authSettings';

const hasTaxPack = hasRequiredAddOns('tax-center', userAddOns);
```

### **Get Upgrade Message:**
```typescript
import { getUpgradeMessage } from '../config/authSettings';

const message = getUpgradeMessage('ai-strategy');
// Returns: "Upgrade to AI Pro to unlock this feature"
```

---

## 📋 **Session Configuration**

```typescript
export const SESSION_CONFIG = {
  sessionTimeout: 30 * 24 * 60 * 60 * 1000,        // 30 days
  refreshBeforeExpiry: 7 * 24 * 60 * 60 * 1000,    // 7 days
  rememberMeDuration: 90 * 24 * 60 * 60 * 1000,    // 90 days
  idleTimeout: 2 * 60 * 60 * 1000,                 // 2 hours
};
```

---

## 🚀 **Redirect Routes**

```typescript
// After successful sign in
REDIRECT_AFTER_SIGNIN: 'dashboard'

// After sign out
REDIRECT_AFTER_SIGNOUT: 'home'

// When unauthorized access attempted
REDIRECT_UNAUTHORIZED: 'signin'
```

---

## 📊 **Access Control Summary**

### **Public Pages (No Auth Required):**
```
home, pricing, features, enterprise, markets, demo, about, 
docs, contact, terms, privacy, refunds, security, compliance, 
disclaimers, faq, glossary, etc.
```

### **Auth Pages (Redirect if already logged in):**
```
signin, signup
```

### **Protected Pages (Auth Required):**
```
dashboard + all sidebar sections
```

---

## ✅ **Current Status**

### **What's Working:**
- ✅ Dashboard fully functional
- ✅ Sidebar navigation with 35+ menu items
- ✅ Badge system for feature tiers
- ✅ Temporary access link for development
- ✅ Auth configuration documented
- ✅ Protected routes defined
- ✅ Helper functions created

### **What's Pending:**
- ⏳ Authentication provider implementation
- ⏳ Sign in/sign up flow with Supabase
- ⏳ Route guards
- ⏳ Feature gating based on plan
- ⏳ Upgrade modals for locked features
- ⏳ Session management
- ⏳ Token refresh logic

---

## 🎯 **Quick Start Checklist**

### **For Development:**
- [x] Access dashboard via footer temporary link
- [x] Test all sidebar sections
- [x] Verify all badges display correctly
- [x] Check dark/light mode compatibility

### **For Production:**
1. [ ] Set `TEMP_BYPASS_AUTH = false`
2. [ ] Implement AuthContext
3. [ ] Add Supabase authentication
4. [ ] Add route guards to protected pages
5. [ ] Implement plan-based feature gating
6. [ ] Add upgrade modals
7. [ ] Test authentication flow
8. [ ] Test plan restrictions
9. [ ] Test session expiry
10. [ ] Hide temporary access links

---

## 🔗 **Related Files**

```
/config/authSettings.ts          - Main configuration
/components/Sidebar.tsx          - Dashboard navigation
/pages/DashboardPage.tsx         - Main dashboard
/components/Footer.tsx           - Temporary access link
/types/navigation.ts             - Page type definitions
```

---

## 💡 **Best Practices**

### **Security:**
- Never expose API keys in frontend code
- Use environment variables for sensitive data
- Implement proper CORS policies
- Use HTTPS in production
- Validate sessions server-side

### **User Experience:**
- Show clear upgrade paths for locked features
- Provide trial periods for premium features
- Allow feature discovery without hard paywalls
- Implement graceful degradation

### **Development:**
- Keep TEMP_BYPASS_AUTH documented
- Remove temporary links before production
- Test both authenticated and unauthenticated states
- Implement proper error handling

---

## 📞 **Support**

**Questions about authentication setup?**
- Check `/config/authSettings.ts` for all configuration
- Review this guide for implementation steps
- Test with `TEMP_BYPASS_AUTH = true` during development

**Production deployment:**
- Set `TEMP_BYPASS_AUTH = false`
- Implement Supabase authentication
- Test all protected routes
- Verify plan-based access control

---

**Status:** ✅ Development Configuration Complete  
**Next Step:** Click the temporary access link in the footer to explore the dashboard!
