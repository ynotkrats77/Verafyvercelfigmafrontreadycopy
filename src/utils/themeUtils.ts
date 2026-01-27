/**
 * Theme Utilities
 * Helper functions for working with themes and styles
 */

import { GRADIENTS } from './constants';

/**
 * Get common theme-aware class names
 */
export const getThemeClasses = (isDark: boolean) => ({
  background: isDark
    ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
    : 'bg-gradient-to-b from-slate-50 via-white to-slate-100',
  
  card: isDark
    ? 'bg-slate-900/50 border-slate-800'
    : 'bg-white/50 border-slate-200',
  
  text: {
    primary: isDark ? 'text-white' : 'text-slate-900',
    secondary: isDark ? 'text-slate-300' : 'text-slate-600',
    muted: isDark ? 'text-slate-400' : 'text-slate-500',
  },
  
  border: isDark ? 'border-slate-800' : 'border-slate-200',
  
  hover: {
    background: isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100',
    border: 'hover:border-theme-primary',
  },
  
  input: isDark
    ? 'bg-slate-800 border-slate-700 text-white'
    : 'bg-white border-slate-200 text-slate-900',
});

/**
 * Get glassmorphism card classes
 */
export const getGlassCardClasses = (isDark: boolean) => {
  const base = 'backdrop-blur-sm border-2 rounded-2xl transition-all';
  const colors = isDark
    ? 'bg-slate-900/50 border-slate-800 hover:border-theme-primary/50'
    : 'bg-white/50 border-slate-200 hover:border-theme-primary/50';
  return `${base} ${colors}`;
};

/**
 * Get button variant classes
 */
export const getButtonClasses = (variant: 'primary' | 'outline' | 'ghost', isDark: boolean) => {
  const base = 'transition-all duration-300';
  
  switch (variant) {
    case 'primary':
      return `${base} text-white font-semibold shadow-lg hover:scale-105`;
    
    case 'outline':
      return isDark
        ? `${base} bg-transparent border-2 border-theme-primary/30 text-white hover:bg-theme-primary/10 hover:border-theme-primary`
        : `${base} bg-white border-2 border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-theme-primary`;
    
    case 'ghost':
      return isDark
        ? `${base} hover:bg-slate-800 text-slate-300`
        : `${base} hover:bg-slate-100 text-slate-600`;
    
    default:
      return base;
  }
};

/**
 * Get inline gradient style for primary buttons
 */
export const getPrimaryGradientStyle = () => ({
  background: GRADIENTS.primary,
  boxShadow: '0 4px 14px var(--theme-glow)',
});

/**
 * Get inline gradient style for icons/badges
 */
export const getIconGradientStyle = () => ({
  background: GRADIENTS.primaryDiagonal,
  boxShadow: '0 4px 12px var(--theme-glow)',
});

/**
 * Get glow effect style
 */
export const getGlowStyle = (intensity: 'subtle' | 'normal' | 'strong' = 'normal') => {
  const glowMap = {
    subtle: '0 4px 20px rgba(34, 211, 238, 0.15)',
    normal: '0 8px 32px rgba(34, 211, 238, 0.2)',
    strong: '0 8px 32px rgba(34, 211, 238, 0.3)',
  };
  
  return { boxShadow: glowMap[intensity] };
};

/**
 * Get card shadow based on theme
 */
export const getCardShadow = (isDark: boolean, intensity: 'light' | 'medium' | 'heavy' = 'medium') => {
  if (isDark) {
    const shadowMap = {
      light: '0 4px 20px rgba(0, 0, 0, 0.2)',
      medium: '0 4px 20px rgba(0, 0, 0, 0.3)',
      heavy: '0 8px 32px rgba(0, 0, 0, 0.4)',
    };
    return { boxShadow: shadowMap[intensity] };
  }
  
  const shadowMap = {
    light: '0 4px 20px rgba(0, 0, 0, 0.03)',
    medium: '0 4px 20px rgba(0, 0, 0, 0.05)',
    heavy: '0 8px 32px rgba(0, 0, 0, 0.08)',
  };
  return { boxShadow: shadowMap[intensity] };
};

/**
 * Combine class names (simple utility)
 */
export const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Get responsive container classes
 */
export const getContainerClasses = (size: 'sm' | 'md' | 'lg' | 'xl' = 'xl') => {
  const sizeMap = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
  };
  return `${sizeMap[size]} mx-auto px-4 sm:px-6 lg:px-8`;
};

/**
 * Get safe area padding for fixed elements
 * Useful for mobile devices with notches
 */
export const getSafeAreaPadding = () => ({
  paddingTop: 'env(safe-area-inset-top, 0)',
  paddingRight: 'env(safe-area-inset-right, 0)',
  paddingBottom: 'env(safe-area-inset-bottom, 0)',
  paddingLeft: 'env(safe-area-inset-left, 0)',
});

/**
 * Get icon size classes
 */
export const getIconSize = (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md') => {
  const sizeMap = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8',
    '2xl': 'h-10 w-10',
  };
  return sizeMap[size];
};

/**
 * Get navigation link classes
 */
export const getNavLinkClasses = (isDark: boolean, isActive?: boolean) => {
  const base = 'text-sm font-medium transition-colors hover:text-theme-primary cursor-pointer';
  const color = isDark ? 'text-slate-300' : 'text-slate-600';
  const active = isActive ? 'text-theme-primary' : '';
  return `${base} ${color} ${active}`;
};

/**
 * Get mobile menu classes
 */
export const getMobileMenuClasses = (isDark: boolean) => {
  return isDark
    ? 'fixed inset-0 z-40 md:hidden bg-slate-900'
    : 'fixed inset-0 z-40 md:hidden bg-white';
};

/**
 * Scroll to top utility
 */
export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({ top: 0, behavior });
};

/**
 * Check if an element is in viewport
 */
export const isInViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};