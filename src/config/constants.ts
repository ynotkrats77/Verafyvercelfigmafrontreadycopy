// Global Constants
// Centralized constants to eliminate magic numbers and improve maintainability

/**
 * OPACITY VALUES
 * Standard opacity values used throughout the application
 */
export const OPACITY = {
  none: 0,
  subtle: 0.05,
  light: 0.1,
  low: 0.2,
  medium: 0.3,
  mediumHigh: 0.5,
  high: 0.7,
  veryHigh: 0.8,
  almostFull: 0.9,
  full: 1,
} as const;

/**
 * BLUR VALUES
 * Backdrop blur values for glassmorphism effects
 */
export const BLUR = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
} as const;

/**
 * BORDER RADIUS
 * Consistent border radius values
 */
export const BORDER_RADIUS = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  full: 9999,
} as const;

/**
 * Z-INDEX LAYERS
 * Stacking order for layered elements
 */
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  notification: 80,
} as const;

/**
 * TIMING VALUES
 * Animation and transition durations (in milliseconds)
 */
export const TIMING = {
  instant: 0,
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 700,
  slowest: 1000,
} as const;

/**
 * BREAKPOINTS
 * Responsive design breakpoints (in pixels)
 */
export const BREAKPOINTS = {
  mobile: {
    min: 320,
    max: 767,
  },
  tablet: {
    min: 768,
    max: 1023,
  },
  desktop: {
    min: 1024,
    max: 1279,
  },
  wide: {
    min: 1280,
    max: 1535,
  },
  ultraWide: {
    min: 1536,
  },
} as const;

/**
 * SPACING SCALE
 * Consistent spacing values based on 4px base
 */
export const SPACING = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
} as const;

/**
 * FONT SIZES
 * Typography scale
 */
export const FONT_SIZE = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
} as const;

/**
 * GROWTH SYSTEMS CONSTANTS
 * Constants related to the three growth systems
 */
export const GROWTH_SYSTEMS = {
  // Earn Verafy Cash
  earnCredits: {
    conversionRate: 20, // 20 credits = $1
    opportunities: {
      youtubeReview: 100,
      shorts: 30,
      instagramReel: 30,
      tiktokVideo: 30,
      twitterThread: 15,
      linkedinPost: 10,
      featureRequest: 50,
      bugReport: 25,
      communityHelper: 5,
      communityGuide: 150,
    },
    bonuses: {
      views: {
        tier1: { views: 5000, credits: 50 },
        tier2: { views: 10000, credits: 100 },
        tier3: { views: 50000, credits: 200 },
      },
      quality: 50,
      implementation: 100,
      criticalBug: 75,
      bestAnswer: 10,
    },
  },
  
  // Referral Program
  referrals: {
    rewardPerReferral: 10, // $10 per successful referral
    coolOffPeriod: 14, // 14 days trial period
    maxLeaderboardDisplay: 10,
  },
  
  // Academy
  academy: {
    totalCourses: 12,
    levels: {
      beginner: 3,
      intermediate: 4,
      advanced: 5,
    },
    streakThresholds: {
      bronze: 7,
      silver: 30,
      gold: 100,
    },
  },
} as const;

/**
 * PRICING CONSTANTS
 * Subscription pricing and tiers
 */
export const PRICING = {
  foundingDiscount: 0.5, // 50% off
  
  plans: {
    starter: {
      regular: 10,
      founding: 5,
    },
    standard: {
      regular: 20,
      founding: 10,
    },
    pro: {
      regular: 40,
      founding: 20,
    },
  },
  
  taxPack: {
    starter: 30,
    standard: 20,
    pro: 0, // Included free
    maxCost: 50, // Capped at $50 over 7 years
    freeAfterYears: 7,
  },
  
  billing: {
    trial: {
      days: 14,
      autoBill: true,
    },
  },
} as const;

/**
 * PLATFORM COLORS
 * Social media platform brand colors
 */
export const PLATFORM_COLORS = {
  youtube: '#FF0000',
  instagram: '#E1306C',
  tiktok: '#00F2EA',
  twitter: '#1DA1F2',
  linkedin: '#0077B5',
  facebook: '#1877F2',
  reddit: '#FF4500',
  discord: '#5865F2',
} as const;

/**
 * USER TIER BADGES
 * Badge labels for different user tiers
 */
export const TIER_BADGES = {
  legacy: 'Legacy',
  starter: 'Starter',
  standard: 'Standard',
  aiPro: 'AI Pro',
  addOn: 'Add-On',
  apis: 'APIS',
} as const;

/**
 * NOTIFICATION TYPES
 * Standard notification categories
 */
export const NOTIFICATION_TYPES = {
  priceMovement: 'price_movement',
  taxDeadlines: 'tax_deadlines',
  portfolioInsights: 'portfolio_insights',
  billing: 'billing',
  systemUpdates: 'system_updates',
  marketing: 'marketing',
} as const;

/**
 * API ENDPOINTS
 * Backend API endpoint paths (when integrated)
 */
export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    register: '/auth/register',
    verify: '/auth/verify',
    refresh: '/auth/refresh',
  },
  
  portfolio: {
    get: '/portfolio',
    add: '/portfolio/holdings',
    update: '/portfolio/holdings/:id',
    delete: '/portfolio/holdings/:id',
  },
  
  earnCredits: {
    submit: '/earn-credits/submit',
    status: '/earn-credits/status',
    history: '/earn-credits/history',
  },
  
  referrals: {
    generate: '/referrals/generate',
    track: '/referrals/track',
    leaderboard: '/referrals/leaderboard',
  },
  
  academy: {
    courses: '/academy/courses',
    enroll: '/academy/enroll/:courseId',
    progress: '/academy/progress',
    badges: '/academy/badges',
  },
} as const;

/**
 * LOCAL STORAGE KEYS
 * Standardized keys for local storage
 */
export const STORAGE_KEYS = {
  theme: 'verafy_theme',
  authToken: 'verafy_auth_token',
  userPreferences: 'verafy_user_preferences',
  dashboardLayout: 'verafy_dashboard_layout',
  recentSearches: 'verafy_recent_searches',
  onboardingCompleted: 'verafy_onboarding_completed',
} as const;

/**
 * VALIDATION RULES
 * Input validation constants
 */
export const VALIDATION = {
  password: {
    minLength: 8,
    maxLength: 128,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
  },
  
  email: {
    maxLength: 255,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  
  referralCode: {
    length: 8,
    pattern: /^[A-Z0-9]{8}$/,
  },
  
  portfolio: {
    maxHoldings: 1000,
    minQuantity: 0.000001,
    maxQuantity: 999999999,
  },
} as const;

/**
 * ERROR MESSAGES
 * Standardized error messages
 */
export const ERROR_MESSAGES = {
  auth: {
    invalidCredentials: 'Invalid email or password',
    sessionExpired: 'Your session has expired. Please log in again.',
    unauthorized: 'You are not authorized to access this resource.',
  },
  
  validation: {
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    passwordTooShort: `Password must be at least ${VALIDATION.password.minLength} characters`,
    passwordWeak: 'Password must include uppercase, lowercase, numbers, and special characters',
  },
  
  network: {
    offline: 'You appear to be offline. Please check your connection.',
    timeout: 'Request timed out. Please try again.',
    serverError: 'Server error. Please try again later.',
  },
} as const;

/**
 * SUCCESS MESSAGES
 * Standardized success messages
 */
export const SUCCESS_MESSAGES = {
  auth: {
    loginSuccess: 'Welcome back!',
    logoutSuccess: 'Successfully logged out',
    registerSuccess: 'Account created successfully!',
  },
  
  portfolio: {
    addedHolding: 'Holding added successfully',
    updatedHolding: 'Holding updated successfully',
    deletedHolding: 'Holding deleted successfully',
  },
  
  earnCredits: {
    submitted: 'Submission received! We\'ll review it within 3-5 business days.',
    approved: 'Congratulations! Your submission has been approved.',
  },
  
  referrals: {
    linkCopied: 'Referral link copied to clipboard!',
    inviteSent: 'Invitation sent successfully!',
  },
} as const;

/**
 * LIMITS
 * Rate limits and restrictions
 */
export const LIMITS = {
  api: {
    requestsPerMinute: 60,
    requestsPerHour: 1000,
  },
  
  earnCredits: {
    submissionsPerDay: 10,
    pendingReviewMax: 20,
  },
  
  referrals: {
    invitesPerDay: 50,
    maxActiveReferrals: 1000,
  },
  
  search: {
    minQueryLength: 2,
    maxQueryLength: 100,
    resultsPerPage: 20,
  },
} as const;

/**
 * FEATURE FLAGS
 * Toggle features on/off
 */
export const FEATURES = {
  enableAnalytics: true,
  enableErrorTracking: true,
  enableReferralProgram: true,
  enableEarnCredits: true,
  enableAcademy: true,
  enableCommunityForum: true,
  enableLiveChat: false, // Coming soon
  enableMobileApp: false, // Coming soon
  enableAPIAccess: false, // Coming soon
} as const;

/**
 * TYPE EXPORTS
 * Export types for TypeScript
 */
export type OpacityValue = typeof OPACITY[keyof typeof OPACITY];
export type BlurValue = typeof BLUR[keyof typeof BLUR];
export type BorderRadiusValue = typeof BORDER_RADIUS[keyof typeof BORDER_RADIUS];
export type ZIndexValue = typeof Z_INDEX[keyof typeof Z_INDEX];
export type TimingValue = typeof TIMING[keyof typeof TIMING];
export type SpacingValue = typeof SPACING[keyof typeof SPACING];
export type FontSizeValue = typeof FONT_SIZE[keyof typeof FONT_SIZE];
export type PlatformColor = typeof PLATFORM_COLORS[keyof typeof PLATFORM_COLORS];
export type TierBadge = typeof TIER_BADGES[keyof typeof TIER_BADGES];
export type NotificationType = typeof NOTIFICATION_TYPES[keyof typeof NOTIFICATION_TYPES];
export type StorageKey = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS];
