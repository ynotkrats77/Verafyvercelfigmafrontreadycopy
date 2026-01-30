/**
 * Constants and Configuration
 * Centralized values to avoid magic numbers and improve maintainability
 */

import type { PageType } from '../types/navigation';

// Re-export PageType for backwards compatibility
export type { PageType };

// Breakpoints (px)
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
} as const;

// Spacing scale (Tailwind-compatible)
export const SPACING = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
} as const;

// Border widths
export const BORDER_WIDTH = {
  thin: '1px',
  normal: '2px',
  refined: '1.6px',
  thick: '3px',
} as const;

// Icon sizes
export const ICON_SIZES = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-10 w-10',
} as const;

// Z-index layers
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  modal: 30,
  popover: 40,
  navigation: 50,
  toast: 60,
} as const;

// Animation durations (ms)
export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 1000,
} as const;

// Animation spring configs
export const SPRING_CONFIG = {
  gentle: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  },
  bouncy: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  },
  stiff: {
    type: 'spring',
    stiffness: 400,
    damping: 30,
  },
} as const;

// Container max widths
export const CONTAINER_WIDTH = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
} as const;

// Border radius
export const BORDER_RADIUS = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  full: 'rounded-full',
} as const;

// Shadow classes
export const SHADOW = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  theme: 'shadow-theme-glow',
  themeStrong: 'shadow-theme-glow-strong',
} as const;

// Gradient definitions (for inline styles)
export const GRADIENTS = {
  primary: 'linear-gradient(to right, var(--theme-primary), var(--theme-secondary))',
  primaryVertical: 'linear-gradient(to bottom, var(--theme-primary), var(--theme-secondary))',
  primaryDiagonal: 'linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))',
  darkBackground: 'linear-gradient(to bottom, rgb(2, 6, 23), rgb(15, 23, 42), rgb(2, 6, 23))',
  lightBackground: 'linear-gradient(to bottom, rgb(248, 250, 252), rgb(255, 255, 255), rgb(241, 245, 249))',
} as const;

// Common transition classes
export const TRANSITION = {
  all: 'transition-all duration-300',
  colors: 'transition-colors duration-300',
  transform: 'transition-transform duration-300',
  opacity: 'transition-opacity duration-300',
} as const;

// Hover scale values
export const HOVER_SCALE = {
  subtle: 1.02,
  normal: 1.05,
  large: 1.1,
} as const;

// Parked pages - exist but not shown in navigation
// These are for design/testing purposes and can be accessed directly
export const PARKED_PAGES: PageType[] = [
  'chat',
  'disclaimers',
];

// Helper to check if a page is parked
export const isPageParked = (page: PageType): boolean => {
  return PARKED_PAGES.includes(page);
};

// Active navigation links (filters out parked pages)
export const NAV_LINKS: Array<{ label: string; page: PageType }> = [
  { label: 'Home', page: 'home' },
  { label: 'Features', page: 'features' },
  { label: 'Pricing', page: 'pricing' },
  { label: 'Enterprise', page: 'enterprise' },
  { label: 'Markets', page: 'markets' },
  { label: 'Demo', page: 'demo' },
  { label: 'About', page: 'about' },
].filter(link => !isPageParked(link.page));

// Footer sections configuration
export const FOOTER_SECTIONS = {
  product: {
    title: 'Product',
    links: [
      { label: 'Features', page: 'features' as PageType },
      { label: 'Pricing', page: 'pricing' as PageType },
      { label: 'How Vera Works', page: 'veraai' as PageType },
      { label: 'Market Data', page: 'market-data' as PageType },
      { label: 'Enterprise', page: 'enterprise' as PageType },
    ],
  },
  plans: {
    title: 'Plans',
    links: [
      { label: 'Starter', page: 'starter-plan' as PageType },
      { label: 'Standard', page: 'standard-plan' as PageType },
      { label: 'Pro', page: 'pro-plan' as PageType },
      { label: 'Tax Reporting Pack', page: 'tax-pack' as PageType },
      { label: 'Compare Plans', page: 'compare-plans' as PageType },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Documentation', page: 'docs' as PageType },
      { label: 'Help Centre', page: 'help-centre' as PageType },
      { label: 'Blog', page: 'blog' as PageType },
      { label: 'Financial Glossary', page: 'glossary' as PageType },
      { label: 'Release Notes', page: 'release-notes' as PageType },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', page: 'about' as PageType },
      { label: 'Contact Us', page: 'contact' as PageType },
      { label: 'FAQ', page: 'faq' as PageType },
    ],
  },
  legal: {
    title: 'Trust Centre',
    links: [
      { label: 'System Status', page: 'system-status' as PageType },
      { label: 'Security', page: 'security' as PageType },
      { label: 'Compliance Framework', page: 'compliance' as PageType },
      { label: 'Privacy Policy', page: 'privacy' as PageType },
      { label: 'Terms of Service', page: 'terms' as PageType },
      { label: 'Refunds', page: 'refunds' as PageType },
      { label: 'Disclaimers', page: 'disclaimers' as PageType },
    ],
  },
  investors: {
    title: 'Investors',
    links: [
      { label: 'Pitch Deck', page: 'investor-pitch' as PageType },
      { label: 'Video Presentation', page: 'investor-video' as PageType },
    ],
  },
} as const;

// Company information
export const COMPANY_INFO = {
  name: 'Verafy AI',
  legalName: 'Axient AI Pty Ltd',
  tradingName: 'VerafyAI Pty Ltd',
  fullLegalName: 'Axient AI Pty Ltd trading as VerafyAI Pty Ltd',
  abn: '21 688 793 151',
  abnFormatted: 'ABN 21 688 793 151',
  email: 'support@verafyai.com.au',
  address: 'Petersham, NSW 2049, Australia',
  location: 'Petersham, NSW 2049, Australia',
  copyright: `© ${new Date().getFullYear()} Axient AI Pty Ltd trading as VerafyAI Pty Ltd. ABN 21 688 793 151`,
  copyrightShort: `© ${new Date().getFullYear()} VerafyAI Pty Ltd`,
  disclaimer: 'Verafy AI provides general portfolio tracking and informational insights. We do not provide financial, legal, or tax advice. Consider seeking professional advice before making investment decisions.',
  disclaimerLink: 'Read full disclaimer',
} as const;

// Social media links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/verafyai',
  linkedin: 'https://www.linkedin.com/company/verafyai',
  github: 'https://github.com/verafyai',
} as const;

// Theme color schemes
export const THEME_NAMES = ['verafy', 'pink', 'pride'] as const;
export type ThemeName = typeof THEME_NAMES[number];