// Global Theme Configuration for React Native
// Ported from web configuration for consistency

export const COLORS = {
  // Primary Brand Colors
  cyan: {
    light: '#22d3ee',
    DEFAULT: '#06b6d4',
    dark: '#0891b2',
  },
  
  // Tier Colors
  purple: {
    light: '#a855f7',
    DEFAULT: '#9333ea',
    dark: '#7e22ce',
  },
  
  // Status Colors
  success: '#10b981',
  warning: '#f97316',
  error: '#ef4444',
  info: '#3b82f6',
  green: '#10b981',
  orange: '#f97316',
  red: '#ef4444',
  blue: '#3b82f6',
  
  // Neutral Colors (Dark Mode)
  dark: {
    bg: '#0f172a',
    surface: '#1e293b',
    border: '#334155',
    text: {
      primary: '#ffffff',
      secondary: '#cbd5e1',
      tertiary: '#64748b',
    },
  },
  
  // Neutral Colors (Light Mode)
  light: {
    bg: '#ffffff',
    surface: '#f8fafc',
    border: '#e2e8f0',
    text: {
      primary: '#0f172a',
      secondary: '#475569',
      tertiary: '#94a3b8',
    },
  },
  
  // Tier-specific colors
  tiers: {
    starter: '#64748b',
    standard: '#3b82f6',
    pro: '#a855f7',
    taxPack: '#f97316',
  },
};

// Gradient configurations for Expo Linear Gradient
export const GRADIENTS = {
  cyan: ['#22d3ee', '#06b6d4'],
  purple: ['#a855f7', '#9333ea'],
  orange: ['#f97316', '#ea580c'],
  blue: ['#3b82f6', '#2563eb'],
  green: ['#10b981', '#059669'],
  red: ['#ef4444', '#dc2626'],
};

export const SPACING = {
  mobile: 16,
  desktop: 24,
  section: 24,
};

export const TYPOGRAPHY = {
  h1: { fontSize: 24, fontWeight: 'bold' },
  h2: { fontSize: 20, fontWeight: 'bold' },
  h3: { fontSize: 18, fontWeight: 'bold' },
  body: { fontSize: 16 },
  caption: { fontSize: 14 },
};

// Helper functions
export function getTextColor(isDark: boolean, variant: 'primary' | 'secondary' | 'tertiary' = 'primary') {
  return isDark ? COLORS.dark.text[variant] : COLORS.light.text[variant];
}

export function getBgColor(isDark: boolean, variant: 'bg' | 'surface' = 'bg') {
  return isDark ? COLORS.dark[variant] : COLORS.light[variant];
}

export function getBorderColor(isDark: boolean) {
  return isDark ? COLORS.dark.border : COLORS.light.border;
}
