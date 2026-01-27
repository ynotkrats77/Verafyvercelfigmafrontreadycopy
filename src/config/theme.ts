// Global Theme Configuration
// Centralized theme settings for consistency across the application

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
  
  // Chart Colors
  charts: {
    primary: '#22d3ee',
    secondary: '#a855f7',
    tertiary: '#f97316',
    success: '#10b981',
    danger: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
};

// Chart Colors Configuration (for Recharts, Chart.js, etc.)
export const CHART_COLORS = {
  // Primary data series
  primary: COLORS.cyan.light,
  primaryDark: COLORS.cyan.DEFAULT,
  
  // Secondary data series
  secondary: COLORS.purple.DEFAULT,
  secondaryLight: COLORS.purple.light,
  
  // Tertiary data series
  tertiary: COLORS.orange,
  
  // Status colors
  success: COLORS.green,
  danger: COLORS.red,
  warning: COLORS.orange,
  info: COLORS.blue,
  
  // Gradient fills for area charts
  gradients: {
    primary: 'url(#primaryGradient)',
    secondary: 'url(#secondaryGradient)',
    success: 'url(#successGradient)',
    danger: 'url(#dangerGradient)',
  },
  
  // Grid and axis colors
  grid: {
    light: '#e2e8f0',
    dark: '#334155',
  },
  
  axis: {
    light: '#64748b',
    dark: '#94a3b8',
  },
  
  // Tooltip backgrounds
  tooltip: {
    light: 'rgba(255, 255, 255, 0.95)',
    dark: 'rgba(15, 23, 42, 0.95)',
  },
};

// SVG Gradient Definitions (use in chart components)
export const CHART_GRADIENT_DEFS = {
  primary: {
    id: 'primaryGradient',
    stops: [
      { offset: '5%', color: COLORS.cyan.light, opacity: 0.3 },
      { offset: '95%', color: COLORS.cyan.light, opacity: 0 },
    ],
  },
  secondary: {
    id: 'secondaryGradient',
    stops: [
      { offset: '5%', color: COLORS.purple.DEFAULT, opacity: 0.3 },
      { offset: '95%', color: COLORS.purple.DEFAULT, opacity: 0 },
    ],
  },
  success: {
    id: 'successGradient',
    stops: [
      { offset: '5%', color: COLORS.green, opacity: 0.3 },
      { offset: '95%', color: COLORS.green, opacity: 0 },
    ],
  },
  danger: {
    id: 'dangerGradient',
    stops: [
      { offset: '5%', color: COLORS.red, opacity: 0.3 },
      { offset: '95%', color: COLORS.red, opacity: 0 },
    ],
  },
};

export const GRADIENTS = {
  cyan: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
  purple: 'linear-gradient(135deg, #a855f7, #9333ea)',
  orange: 'linear-gradient(135deg, #f97316, #ea580c)',
  blue: 'linear-gradient(135deg, #3b82f6, #2563eb)',
  green: 'linear-gradient(135deg, #10b981, #059669)',
  red: 'linear-gradient(135deg, #ef4444, #dc2626)',
};

export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  glow: {
    cyan: '0 0 40px rgba(34, 211, 238, 0.3)',
    purple: '0 0 40px rgba(168, 85, 247, 0.3)',
    orange: '0 0 40px rgba(249, 115, 22, 0.3)',
  },
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const SPACING = {
  page: {
    mobile: '1rem',
    desktop: '1.5rem',
  },
  section: {
    mobile: '1.5rem',
    desktop: '2rem',
  },
};

export const TYPOGRAPHY = {
  heading: {
    h1: 'text-3xl font-bold',
    h2: 'text-2xl font-bold',
    h3: 'text-xl font-bold',
    h4: 'text-lg font-bold',
  },
};

export const ANIMATIONS = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  ease: {
    default: 'easeInOut',
    in: 'easeIn',
    out: 'easeOut',
  },
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

export function getCardStyles(isDark: boolean) {
  return {
    background: isDark ? COLORS.dark.surface : COLORS.light.bg,
    border: `1px solid ${isDark ? COLORS.dark.border : COLORS.light.border}`,
  };
}

export function getHoverCardStyles(isDark: boolean) {
  return {
    ...getCardStyles(isDark),
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      transform: 'scale(1.01)',
      background: isDark ? '#1e293b' : '#f8fafc',
    },
  };
}