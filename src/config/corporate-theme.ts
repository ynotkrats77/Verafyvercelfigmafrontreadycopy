// Corporate Theme Colors for Reference Documents
// These colors are FIXED to Verafy corporate branding (cyan/navy)
// They do NOT change with user theme selection (Pink/Pride)
// Use these for: Legal pages, Trust Centre, Disclaimers, Policies

export const CORPORATE_COLORS = {
  // Primary brand colors (always cyan)
  primary: '#22D3EE',
  primaryDark: '#06B6D4',
  primaryLight: '#67E8F9',
  
  // Secondary brand colors (navy/slate)
  secondary: '#1e293b',
  secondaryDark: '#0f172a',
  secondaryLight: '#334155',
  
  // Accent colors for different categories
  accents: {
    cyan: '#22D3EE',
    blue: '#3b82f6',
    purple: '#a855f7',
    pink: '#ec4899',
    orange: '#f97316',
    green: '#10b981',
    yellow: '#f59e0b',
    red: '#ef4444',
  },
  
  // Background colors
  backgrounds: {
    dark: 'rgba(15, 23, 42, 0.6)',
    light: 'rgba(255, 255, 255, 0.8)',
  },
  
  // Text colors
  text: {
    dark: {
      primary: '#ffffff',
      secondary: '#94a3b8',
      muted: '#64748b',
    },
    light: {
      primary: '#0f172a',
      secondary: '#475569',
      muted: '#64748b',
    }
  }
};

// Category color mapping (for disclaimer categories, etc.)
export const CATEGORY_COLORS = {
  'ASIC RG 244 Compliance': CORPORATE_COLORS.accents.cyan,
  'Tax Calculations': CORPORATE_COLORS.accents.green,
  'Investment Content': CORPORATE_COLORS.accents.blue,
  'AI & Technology': CORPORATE_COLORS.accents.purple,
  'Data & Information': CORPORATE_COLORS.accents.orange,
  'Security': CORPORATE_COLORS.accents.red,
  'Legal': CORPORATE_COLORS.accents.yellow,
  'Default': CORPORATE_COLORS.primary,
};

// Get category color helper
export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] || CATEGORY_COLORS.Default;
}

// CSS custom properties for corporate theme (inject into style tag)
export const CORPORATE_CSS_VARS = `
  --corporate-primary: ${CORPORATE_COLORS.primary};
  --corporate-primary-dark: ${CORPORATE_COLORS.primaryDark};
  --corporate-primary-light: ${CORPORATE_COLORS.primaryLight};
  --corporate-secondary: ${CORPORATE_COLORS.secondary};
  --corporate-secondary-dark: ${CORPORATE_COLORS.secondaryDark};
  --corporate-secondary-light: ${CORPORATE_COLORS.secondaryLight};
`;

// For inline styles in reference documents
export function corporateGradientStyle() {
  return {
    background: `linear-gradient(to right, ${CORPORATE_COLORS.primary}, ${CORPORATE_COLORS.accents.blue})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };
}

// For border styles
export function corporateBorderStyle(isDark: boolean, isActive: boolean = false) {
  if (isActive) {
    return {
      borderColor: CORPORATE_COLORS.primary,
      boxShadow: `0 8px 32px ${CORPORATE_COLORS.primary}40`,
    };
  }
  return {
    borderColor: isDark ? `${CORPORATE_COLORS.primary}40` : `${CORPORATE_COLORS.primaryDark}30`,
  };
}

// For icon containers
export function corporateIconStyle(color: string) {
  return {
    background: `${color}20`,
    border: `2px solid ${color}40`,
  };
}

export default CORPORATE_COLORS;
