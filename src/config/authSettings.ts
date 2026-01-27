/**
 * AUTHENTICATION & AUTHORIZATION SETTINGS
 * 
 * Global configuration for protected routes and authentication requirements.
 * This file defines which pages/sections require authentication and what
 * permissions are needed.
 */

import type { PageType } from '../types/navigation';

export interface AuthRequirement {
  requiresAuth: boolean;
  requiredPlan?: 'starter' | 'standard' | 'pro';
  requiredAddOns?: string[];
  isBeta?: boolean;
}

export interface ProtectedRoute {
  page: PageType | string;
  authRequirement: AuthRequirement;
  redirectTo?: PageType;
}

/**
 * TEMPORARY ACCESS MODE
 * 
 * Set to TRUE during development to bypass authentication checks.
 * Set to FALSE in production to enforce authentication.
 */
export const TEMP_BYPASS_AUTH = true;

/**
 * PROTECTED PAGES - Public Marketing Pages (No Auth Required)
 */
export const PUBLIC_PAGES: PageType[] = [
  'home',
  'pricing',
  'features',
  'enterprise',
  'markets',
  'demo',
  'about',
  'docs',
  'contact',
  'careers',
  'terms',
  'privacy',
  'refunds',
  'security',
  'compliance',
  'disclaimers',
  'veraai',
  'market-data',
  'tax-pack',
  'starter-plan',
  'standard-plan',
  'pro-plan',
  'compare-plans',
  'help-centre',
  'glossary',
  'release-notes',
  'trust-centre',
  'system-status',
  'disclaimer',
  'chat',
  'faq',
];

/**
 * AUTH PAGES - Sign In/Sign Up (Redirect if already authenticated)
 */
export const AUTH_PAGES: PageType[] = [
  'signin',
  'signup',
];

/**
 * PROTECTED DASHBOARD SECTIONS
 * 
 * All dashboard sidebar menu items require authentication.
 * Access is controlled based on user's subscription plan and add-ons.
 */
export const PROTECTED_DASHBOARD_SECTIONS: Record<string, AuthRequirement> = {
  // === GENERAL ACCESS (ALL PLANS) ===
  'action-center': {
    requiresAuth: true,
  },
  'vera-dashboard': {
    requiresAuth: true,
  },
  'classic-dashboard': {
    requiresAuth: true,
  },
  'vera-chat': {
    requiresAuth: true,
  },
  
  // === PORTFOLIO MANAGEMENT (ALL PLANS) ===
  'portfolio-manager': {
    requiresAuth: true,
  },
  'compare-portfolios': {
    requiresAuth: true,
  },
  'consolidated-view': {
    requiresAuth: true,
  },
  'portfolio-health': {
    requiresAuth: true,
  },
  
  // === INSIGHTS - DAILY ESSENTIALS (ALL PLANS) ===
  'concentration-risk': {
    requiresAuth: true,
  },
  
  // === INSIGHTS - STANDARD PLAN FEATURES ===
  'ai-daily-feed': {
    requiresAuth: true,
    requiredPlan: 'standard',
  },
  'winners-losers': {
    requiresAuth: true,
    requiredPlan: 'standard',
  },
  'cash-flow': {
    requiresAuth: true,
    requiredPlan: 'standard',
  },
  'sector-allocation': {
    requiresAuth: true,
    requiredPlan: 'standard',
  },
  'risk-performance': {
    requiresAuth: true,
    requiredPlan: 'standard',
  },
  'market-opportunity': {
    requiresAuth: true,
    requiredPlan: 'standard',
  },
  
  // === RESEARCH - STANDARD PLAN FEATURES ===
  'watchlists': {
    requiresAuth: true,
    requiredPlan: 'standard',
  },
  'screeners': {
    requiresAuth: true,
    requiredPlan: 'standard',
  },
  'stock-pickers': {
    requiresAuth: true,
    requiredPlan: 'standard',
  },
  
  // === STRATEGIC PLANNING - AI PRO PLAN ONLY ===
  'ai-strategy': {
    requiresAuth: true,
    requiredPlan: 'pro',
  },
  'future-scenarios': {
    requiresAuth: true,
    requiredPlan: 'pro',
  },
  'peer-comparison': {
    requiresAuth: true,
    requiredPlan: 'pro',
  },
  'strategic-planner': {
    requiresAuth: true,
    requiredPlan: 'pro',
  },
  
  // === TAX PACK - ADD-ON REQUIRED ===
  'tax-center': {
    requiresAuth: true,
    requiredAddOns: ['tax-pack'],
  },
  'tax-planner': {
    requiresAuth: true,
    requiredAddOns: ['tax-pack'],
  },
  'capital-gains': {
    requiresAuth: true,
    requiredAddOns: ['tax-pack'],
  },
  'tax-reports': {
    requiresAuth: true,
    requiredAddOns: ['tax-pack'],
  },
  
  // === LEARNING - ALL PLANS ===
  'academy': {
    requiresAuth: true,
  },
  'courses': {
    requiresAuth: true,
  },
  'achievements': {
    requiresAuth: true,
  },
  'earn-credits': {
    requiresAuth: true,
  },
};

/**
 * MAIN DASHBOARD PAGE
 */
export const DASHBOARD_PAGE_AUTH: AuthRequirement = {
  requiresAuth: true,
};

/**
 * HELPER FUNCTIONS
 */

/**
 * Check if a page requires authentication
 */
export function requiresAuth(page: PageType | string): boolean {
  if (TEMP_BYPASS_AUTH) {
    return false; // Bypass during development
  }
  
  if (page === 'dashboard') {
    return DASHBOARD_PAGE_AUTH.requiresAuth;
  }
  
  if (PROTECTED_DASHBOARD_SECTIONS[page]) {
    return PROTECTED_DASHBOARD_SECTIONS[page].requiresAuth;
  }
  
  return !PUBLIC_PAGES.includes(page as PageType);
}

/**
 * Check if user has required plan for a section
 */
export function hasRequiredPlan(
  section: string,
  userPlan: 'starter' | 'standard' | 'pro'
): boolean {
  const requirement = PROTECTED_DASHBOARD_SECTIONS[section];
  
  if (!requirement || !requirement.requiredPlan) {
    return true; // No specific plan required
  }
  
  const planHierarchy = ['starter', 'standard', 'pro'];
  const userPlanIndex = planHierarchy.indexOf(userPlan);
  const requiredPlanIndex = planHierarchy.indexOf(requirement.requiredPlan);
  
  return userPlanIndex >= requiredPlanIndex;
}

/**
 * Check if user has required add-ons for a section
 */
export function hasRequiredAddOns(
  section: string,
  userAddOns: string[]
): boolean {
  const requirement = PROTECTED_DASHBOARD_SECTIONS[section];
  
  if (!requirement || !requirement.requiredAddOns) {
    return true; // No add-ons required
  }
  
  return requirement.requiredAddOns.every(addon => userAddOns.includes(addon));
}

/**
 * Get upgrade message for locked features
 */
export function getUpgradeMessage(section: string): string {
  const requirement = PROTECTED_DASHBOARD_SECTIONS[section];
  
  if (!requirement) return '';
  
  if (requirement.requiredPlan === 'pro') {
    return 'Upgrade to AI Pro to unlock this feature';
  }
  
  if (requirement.requiredPlan === 'standard') {
    return 'Upgrade to Standard or Pro to unlock this feature';
  }
  
  if (requirement.requiredAddOns?.includes('tax-pack')) {
    return 'Add the Tax Pack to unlock this feature';
  }
  
  return 'Upgrade your plan to unlock this feature';
}

/**
 * AUTHENTICATION STATE INTERFACE
 * 
 * This will be managed by your authentication provider (e.g., Supabase)
 */
export interface AuthState {
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

/**
 * DEFAULT UNAUTHENTICATED STATE
 */
export const UNAUTHENTICATED_STATE: AuthState = {
  isAuthenticated: false,
  user: null,
};

/**
 * DEMO/TEST AUTHENTICATED STATE
 * 
 * Use this for development/testing when TEMP_BYPASS_AUTH is true
 */
export const DEMO_AUTHENTICATED_STATE: AuthState = {
  isAuthenticated: true,
  user: {
    id: 'demo-user-123',
    email: "support@verafyai.com", // Using production email
    name: 'Demo User',
    plan: 'pro', // Full access for demo
    addOns: ['tax-pack'], // Has all add-ons
    isAdmin: false,
  },
};

/**
 * REDIRECT ROUTES
 */
export const REDIRECT_AFTER_SIGNIN: PageType = 'dashboard';
export const REDIRECT_AFTER_SIGNOUT: PageType = 'home';
export const REDIRECT_UNAUTHORIZED: PageType = 'signin';

/**
 * SESSION CONFIGURATION
 */
export const SESSION_CONFIG = {
  // Session timeout in milliseconds (30 days)
  sessionTimeout: 30 * 24 * 60 * 60 * 1000,
  
  // Refresh token before expiry (7 days before)
  refreshBeforeExpiry: 7 * 24 * 60 * 60 * 1000,
  
  // Remember me duration (90 days)
  rememberMeDuration: 90 * 24 * 60 * 60 * 1000,
  
  // Idle timeout (2 hours of inactivity)
  idleTimeout: 2 * 60 * 60 * 1000,
};

/**
 * IMPLEMENTATION NOTES
 * 
 * PHASE 1 (Current - Development):
 * - TEMP_BYPASS_AUTH = true
 * - Temporary access link visible in footer
 * - All sections accessible for testing
 * 
 * PHASE 2 (Production - With Supabase):
 * - TEMP_BYPASS_AUTH = false
 * - Implement AuthContext/AuthProvider
 * - Add route guards using requiresAuth()
 * - Add plan-based feature gating using hasRequiredPlan()
 * - Add add-on checks using hasRequiredAddOns()
 * - Hide temporary access links
 * - Implement proper session management
 * 
 * INTEGRATION POINTS:
 * 1. Wrap App.tsx with AuthProvider
 * 2. Add useAuth() hook in protected components
 * 3. Add <ProtectedRoute> wrapper component
 * 4. Implement upgrade modals for locked features
 * 5. Add billing integration for plan management
 */

// Mock Authentication Configuration
// This file simulates auth behavior for demo purposes

// import { CONTACT_EMAILS } from './contacts';

export interface User {
  id: string;
  email: string;
  name: string;
  plan: 'starter' | 'standard' | 'pro';
}