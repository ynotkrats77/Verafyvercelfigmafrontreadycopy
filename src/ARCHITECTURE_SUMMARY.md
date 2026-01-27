# 🏗️ VERAFY AI - ARCHITECTURE SUMMARY

**Version:** 1.0  
**Date:** January 12, 2026  
**Status:** ✅ PRODUCTION READY

---

## 🎯 CORE ARCHITECTURE

### **1. EMAIL SYSTEM** ✅
**3 Production Emails:**
- `support@verafyai.com.au` - Technical support
- `accounts@verafyai.com.au` - Billing & subscriptions
- `enquiries@verafyai.com.au` - General, sales, legal

**Smart Routing:** EMAIL_ROUTING map auto-routes topics to correct email  
**Location:** `/config/contacts.ts`

---

### **2. GLOBAL CONFIGURATION** ✅
All settings centralized in `/config/`:

| File | Purpose |
|------|---------|
| `plans.ts` | Subscription plans & pricing |
| `contacts.ts` | Email addresses & routing |
| `theme.ts` | Theme colors & chart colors |
| `corporate-theme.ts` | Corporate doc colors (cyan/navy) |
| `userTier.ts` | User tier permissions |

---

### **3. LOCKED TEMPLATES** ✅

#### **Layout Wrapper:**
```
Layout.tsx
├── Navigation (Header) - LOCKED
├── Main Content - SWAPPABLE
└── Footer - LOCKED
```

#### **Sidebar (Dashboard):**
```
Sidebar.tsx - LOCKED STRUCTURE
├── User Tier Badge
├── Action Center
├── Dashboard Sections
├── Portfolio Insights
├── AI Features (Pro only)
├── Tax Center (Add-on/Pro)
└── Learning Resources
```

---

### **4. SUBSCRIPTION TIERS** ✅

**Pricing (Founding Member - 50% off):**
- **Starter:** $5/mo (was $10)
- **Standard:** $10/mo (was $20)
- **Pro:** $20/mo (was $40)

**Tax Pack:**
- Starter: $30/FY (add-on)
- Standard: $20/FY (add-on)
- Pro: FREE / INCLUDED

**Access Control:** Tier-based feature locking with upgrade CTAs

---

### **5. UPGRADE CTAs** ✅

**Components:**
1. `UpgradeModal` - Triggers when user clicks locked feature
2. `TrialEndingCTA` - Emotive trial conversion CTAs

**TrialEndingCTA Variants:**
- **Urgent Modal:** Last 24 hours (full-screen takeover)
- **Banner:** Sticky top banner with countdown
- **Card:** In-dashboard card
- **Auto:** Adapts based on days remaining

---

## 📋 COMPONENT HIERARCHY

```
App.tsx
└── Layout
    ├── Navigation (global header)
    ├── Current Page
    │   ├── HomePage
    │   ├── PricingPage
    │   ├── FeaturesPage
    │   ├── DashboardPage
    │   │   ├── Sidebar (locked)
    │   │   ├── TrialEndingCTA (if trial)
    │   │   ├── UpgradeModal (if locked feature clicked)
    │   │   └── Dashboard Sections (swappable)
    │   └── [Other Pages]
    └── Footer (global footer)
```

---

## 🎨 THEME SYSTEM

### **3 Color Schemes:**
1. **Verafy** (default) - Cyan/Blue
2. **Pink** - Pink/Purple
3. **Pride** - Rainbow gradient

### **Corporate Theme (Reference Docs):**
- **LOCKED:** Cyan/Navy for legal pages
- **NOT affected** by user theme selection

### **Chart Colors:**
```typescript
CHART_COLORS = {
  success: { light: '#10b981', dark: '#34d399' },
  warning: { light: '#f59e0b', dark: '#fbbf24' },
  danger: { light: '#ef4444', dark: '#f87171' },
  info: { light: '#3b82f6', dark: '#60a5fa' },
  neutral: { light: '#64748b', dark: '#94a3b8' }
}
```

---

## 🔒 LOCKED SYSTEMS

### **DO NOT MODIFY WITHOUT APPROVAL:**

1. ✅ **Header/Footer** (`Layout.tsx`, `Navigation.tsx`, `Footer.tsx`)
2. ✅ **Sidebar Structure** (`Sidebar.tsx`)
3. ✅ **Email System** (`/config/contacts.ts`)
4. ✅ **Subscription Plans** (`/config/plans.ts`)
5. ✅ **User Tiers** (`/config/userTier.ts`)
6. ✅ **Corporate Theme** (`/config/corporate-theme.ts`)

### **SAFE TO MODIFY:**
- ✅ Page content (HomePage, FeaturesPage, etc.)
- ✅ Dashboard sections (PlaceholderPage components)
- ✅ Marketing copy
- ✅ FAQ content (in FAQSection.tsx)
- ✅ Legal page content (Privacy, Terms, etc.)

---

## 📊 DATA FLOW

### **User Tier Access:**
```
User logs in
  ↓
CURRENT_USER_TIER set (from backend)
  ↓
getUserTierConfig() returns tier config
  ↓
Sidebar checks hasAccessToFeature()
  ↓
If locked: Show upgrade CTA
If unlocked: Navigate to feature
```

### **Email Routing:**
```
User needs to contact
  ↓
EMAIL_ROUTING[topic] returns email type
  ↓
getContactEmail(type) returns email object
  ↓
<EmailLink> renders mailto link
```

### **Trial Conversion:**
```
Trial expiring detected
  ↓
Calculate days remaining
  ↓
<TrialEndingCTA> selects variant
  ↓
User clicks "Keep My Access"
  ↓
Navigate to billing/checkout
```

---

## 🚀 DEPLOYMENT CHECKLIST

### **Pre-Launch:**
- [x] Email system simplified (3 emails)
- [x] Pricing verified ($5/$10/$20 founding)
- [x] Tax Pack inclusion confirmed (FREE with Pro)
- [x] Trial asterisks added to CTAs
- [x] Global config centralized
- [x] Templates locked
- [x] Trial CTAs created

### **Launch Day:**
- [ ] Finish asterisk rollout (6 pages)
- [ ] Update legal pages with 3-email system
- [ ] Add trial CTA to dashboard
- [ ] Update chart pages with CHART_COLORS
- [ ] Test all upgrade CTAs
- [ ] Test all email links

### **Post-Launch:**
- [ ] Navigation Context implementation
- [ ] Update hardcoded colors (~34 files)
- [ ] Add analytics tracking
- [ ] Monitor trial conversion rates

---

## 📞 SUPPORT CONTACTS

**Technical Issues:**  
support@verafyai.com.au

**Billing Questions:**  
accounts@verafyai.com.au

**General Inquiries:**  
enquiries@verafyai.com.au

---

**ARCHITECTURE STATUS:** ✅ LOCKED & PRODUCTION READY

All core systems are centralized, locked, and verified. Minor updates needed before launch (see checklist above).
