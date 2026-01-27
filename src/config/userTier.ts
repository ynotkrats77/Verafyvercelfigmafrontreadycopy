// User Tier Configuration
// This would normally come from authentication/backend

export type UserTier = 'trial' | 'starter' | 'standard' | 'pro' | 'tax-pack';

export interface UserTierConfig {
  currentTier: UserTier;
  hasStarter: boolean;
  hasStandard: boolean;
  hasPro: boolean;
  hasTaxPack: boolean;
  displayName: string;
  isTrial?: boolean; // Trial users have temporary access to all features
}

// Simulated current user - change this to test different tiers
export const CURRENT_USER_TIER: UserTier = 'pro'; // Change to 'trial', 'starter', 'standard', 'pro'

export function getUserTierConfig(tier: UserTier): UserTierConfig {
  switch (tier) {
    case 'trial':
      return {
        currentTier: 'trial',
        hasStarter: true,
        hasStandard: true,
        hasPro: true,
        hasTaxPack: true,
        displayName: 'Trial Period',
        isTrial: true
      };
    case 'starter':
      return {
        currentTier: 'starter',
        hasStarter: true,
        hasStandard: false,
        hasPro: false,
        hasTaxPack: false,
        displayName: 'Starter Plan'
      };
    case 'standard':
      return {
        currentTier: 'standard',
        hasStarter: true,
        hasStandard: true,
        hasPro: false,
        hasTaxPack: false,
        displayName: 'Standard Plan'
      };
    case 'pro':
      return {
        currentTier: 'pro',
        hasStarter: true,
        hasStandard: true,
        hasPro: true,
        hasTaxPack: true, // Pro users get everything including Tax Pack
        displayName: 'AI Pro Plan'
      };
    case 'tax-pack':
      return {
        currentTier: 'tax-pack',
        hasStarter: true,
        hasStandard: true,
        hasPro: false,
        hasTaxPack: true,
        displayName: 'Standard + Tax Pack'
      };
    default:
      return getUserTierConfig('starter');
  }
}

export function hasAccessToFeature(userTier: UserTierConfig, featureBadge?: string): boolean {
  if (!featureBadge) return true; // Free features
  
  switch (featureBadge) {
    case 'Legacy':
      return true; // Legacy features available to all
    case 'Standard':
      return userTier.hasStandard || userTier.hasPro;
    case 'AI Pro':
      return userTier.hasPro;
    case 'Add-On':
    case 'Tax Pack':
      return userTier.hasTaxPack || userTier.hasPro;
    default:
      return true;
  }
}

export function getRequiredTierForFeature(featureBadge?: string): UserTier | null {
  if (!featureBadge) return null;
  
  switch (featureBadge) {
    case 'Standard':
      return 'standard';
    case 'AI Pro':
      return 'pro';
    case 'Add-On':
    case 'Tax Pack':
      return 'tax-pack';
    default:
      return null;
  }
}

export const TIER_PRICING = {
  starter: { monthly: 0, annual: 0, label: 'Free Forever' },
  standard: { monthly: 29, annual: 290, label: 'Most Popular' },
  pro: { monthly: 79, annual: 790, label: 'Best Value' },
  'tax-pack': { monthly: 15, annual: 150, label: 'Add-On' }
};

export const TIER_COLORS = {
  starter: '#64748b',
  standard: '#3b82f6',
  pro: '#a855f7',
  'tax-pack': '#f97316'
};