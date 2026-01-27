// Central Source of Truth for All Plans
// Update this file to modify plan details across the entire application

export interface PlanFeature {
  text: string;
  included: boolean;
  tier?: 'starter' | 'standard' | 'pro' | 'tax-pack';
}

export interface Plan {
  id: 'starter' | 'standard' | 'pro' | 'tax-pack';
  name: string;
  subtitle: string;
  price: {
    monthly: number;
    annual: number;
  };
  savings?: string;
  badge?: string;
  color: string;
  gradient: string;
  description: string;
  cta: string;
  features: string[];
  fullFeatures?: PlanFeature[];
  recommended?: boolean;
  popular?: boolean;
}

// Master Plan Definitions
export const PLANS: Record<string, Plan> = {
  starter: {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Perfect for beginners',
    price: {
      monthly: 5,
      annual: 55, // $5/month × 11 months (1 month free when annual)
    },
    badge: 'Founding Member',
    color: '#64748b',
    gradient: 'linear-gradient(135deg, #64748b, #475569)',
    description: 'Get started with essential portfolio tracking and AI insights from Vera',
    cta: 'Get Started Free*',
    features: [
      'Portfolio tracking (up to 20 holdings)',
      'Basic AI insights from Vera',
      'Concentration risk analysis',
      'Market news & updates',
      'Mobile & web access',
      'Email support',
      'Verafy Academy access (beginner courses)',
      'Community forum access',
      'Tax Reporting Pack (add-on $30/year)*',
    ],
  },

  standard: {
    id: 'standard',
    name: 'Standard',
    subtitle: 'Advanced Analytics',
    price: {
      monthly: 10,
      annual: 110, // $10/month × 11 months (1 month free when annual)
    },
    savings: 'Save 50% as founding member',
    badge: 'Most Popular',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    description: 'Everything in Starter, plus advanced analytics and unlimited holdings',
    cta: 'Start Free Trial*',
    recommended: true,
    popular: true,
    features: [
      'Everything in Starter, plus:',
      'Unlimited portfolio holdings',
      'Advanced AI insights',
      'Winners vs Losers analysis',
      'AI Daily Feed',
      'Sector allocation charts',
      'Risk-adjusted performance metrics',
      'Watchlists & screeners',
      'AI Stock Pickers',
      'Priority email support',
      'Verafy Academy (all courses except SMSF)',
      'Portfolio comparison tools',
      'Export portfolio reports',
      'Tax Reporting Pack (add-on $20/year)*',
    ],
  },

  pro: {
    id: 'pro',
    name: 'Pro',
    subtitle: 'AI-Powered Intelligence',
    price: {
      monthly: 20,
      annual: 220, // $20/month × 11 months (1 month free when annual)
    },
    savings: 'Save 50% as founding member',
    badge: 'Best Value',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7, #9333ea)',
    description: 'Everything in Standard, plus AI-powered strategic planning and free Tax Pack',
    cta: 'Start Free Trial*',
    popular: false,
    features: [
      'Everything in Standard, plus:',
      'AI Strategy Insights & Portfolio Optimization',
      'Future scenario modeling',
      'Peer comparison analysis',
      'Strategic portfolio planner',
      'Tax Reporting Pack (INCLUDED) ⭐',
      'Tax Center & Tax Planner',
      'Capital gains summary',
      'Tax-loss harvesting optimizer',
      'Tax reports & documentation',
      'Advanced API access (coming soon)',
      'Priority support (24-hour response)',
      'Verafy Academy (all courses including SMSF)',
      'Dedicated account manager (coming soon)',
    ],
  },

  'tax-pack': {
    id: 'tax-pack',
    name: 'Tax Pack',
    subtitle: 'Comprehensive tax optimization for Australian investors',
    price: {
      monthly: 0, // Not sold monthly
      annual: 30, // Base price for Starter ($30/year), Standard gets for $20/year, Pro gets free
    },
    savings: 'Included FREE with Pro plan',
    badge: 'Add-On',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
    description: 'Optimize your tax strategy and keep more of what you earn',
    cta: 'Add to Plan',
    features: [
      'Tax Center Dashboard',
      'Tax Planning Calculator',
      'Capital Gains Summary',
      'Tax-Loss Harvesting Optimizer',
      'Dividend Imputation Tracker',
      'EOFY Tax Reports',
      'Built for Australian tax law',
      'Updated annually',
      'FREE with Pro plan',
      'Add-on: $30/year (Starter), $20/year (Standard)',
    ],
  },
};

// Helper Functions
export function getPlan(planId: string): Plan | undefined {
  return PLANS[planId];
}

export function getAllPlans(): Plan[] {
  return Object.values(PLANS);
}

export function getPlansByTier(tiers: string[]): Plan[] {
  return tiers.map(tier => PLANS[tier]).filter(Boolean);
}

export function getUpgradePath(currentPlan: string): Plan[] {
  const order = ['starter', 'standard', 'pro'];
  const currentIndex = order.indexOf(currentPlan);
  
  if (currentIndex === -1) return [];
  
  return order
    .slice(currentIndex + 1)
    .map(id => PLANS[id])
    .filter(Boolean);
}

export function getMonthlyPrice(planId: string): number {
  return PLANS[planId]?.price.monthly || 0;
}

export function getAnnualPrice(planId: string): number {
  return PLANS[planId]?.price.annual || 0;
}

export function getSavingsAmount(planId: string): number {
  const plan = PLANS[planId];
  if (!plan) return 0;
  
  const monthlyTotal = plan.price.monthly * 12;
  const annualTotal = plan.price.annual;
  
  return monthlyTotal - annualTotal;
}

// Comparison Table Data
export interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    starter: boolean | string;
    standard: boolean | string;
    pro: boolean | string;
    taxPack: boolean | string;
  }[];
}

export const PLAN_COMPARISON: ComparisonFeature[] = [
  {
    category: 'Portfolio Management',
    features: [
      { name: 'Number of Portfolios', starter: '2', standard: 'Unlimited', pro: 'Unlimited', taxPack: '-' },
      { name: 'Manual Data Entry', starter: true, standard: true, pro: true, taxPack: false },
      { name: 'CSV/Excel Import', starter: false, standard: true, pro: true, taxPack: false },
      { name: 'Real-time Sync', starter: false, standard: false, pro: true, taxPack: false },
      { name: 'API Access', starter: false, standard: false, pro: true, taxPack: false },
    ],
  },
  {
    category: 'Analytics & Insights',
    features: [
      { name: 'Basic Performance Metrics', starter: true, standard: true, pro: true, taxPack: false },
      { name: 'Winners vs Losers', starter: true, standard: true, pro: true, taxPack: false },
      { name: 'AI Daily Feed', starter: false, standard: true, pro: true, taxPack: false },
      { name: 'Sector Allocation', starter: false, standard: true, pro: true, taxPack: false },
      { name: 'Risk-Adjusted Performance', starter: false, standard: true, pro: true, taxPack: false },
      { name: 'Portfolio Health Score', starter: false, standard: true, pro: true, taxPack: false },
      { name: 'Predictive Analytics', starter: false, standard: false, pro: true, taxPack: false },
      { name: 'AI Trade Recommendations', starter: false, standard: false, pro: true, taxPack: false },
    ],
  },
  {
    category: 'Risk Management',
    features: [
      { name: 'Basic Concentration Alerts', starter: true, standard: true, pro: true, taxPack: false },
      { name: 'Advanced Risk Modeling', starter: false, standard: false, pro: true, taxPack: false },
      { name: 'Multi-Factor Analysis', starter: false, standard: false, pro: true, taxPack: false },
      { name: 'Strategic Rebalancing', starter: false, standard: false, pro: true, taxPack: false },
    ],
  },
  {
    category: 'Tax Optimization',
    features: [
      { name: 'Tax-Loss Harvesting', starter: false, standard: false, pro: true, taxPack: true },
      { name: 'Capital Gains Optimizer', starter: false, standard: false, pro: true, taxPack: true },
      { name: 'CGT Calculation', starter: false, standard: false, pro: true, taxPack: true },
      { name: 'Pre-filled Tax Reports', starter: false, standard: false, pro: true, taxPack: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email Support', starter: true, standard: 'Priority', pro: 'Priority', taxPack: 'Priority' },
      { name: 'Chat Support', starter: false, standard: false, pro: true, taxPack: false },
      { name: 'Phone Support', starter: false, standard: false, pro: true, taxPack: false },
      { name: 'Dedicated Account Manager', starter: false, standard: false, pro: true, taxPack: false },
    ],
  },
  {
    category: 'Reporting',
    features: [
      { name: 'Monthly Portfolio Reports', starter: true, standard: true, pro: true, taxPack: false },
      { name: 'Custom Report Builder', starter: false, standard: true, pro: true, taxPack: false },
      { name: 'Tax Reports', starter: false, standard: false, pro: false, taxPack: true },
      { name: 'PDF Export', starter: false, standard: true, pro: true, taxPack: true },
    ],
  },
];