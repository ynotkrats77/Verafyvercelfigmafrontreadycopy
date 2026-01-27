/**
 * User Country Configuration
 * Determines which tax features are available based on user's country of residence
 */

export type UserCountry = 
  | 'malaysia'
  | 'singapore'
  | 'hongkong'
  | 'uae'
  | 'bahrain'
  | 'cayman'
  | 'bermuda'
  | 'monaco'
  | 'india'
  | 'us'
  | 'australia'
  | 'canada'
  | 'uk'
  | 'other';

export interface CountryConfig {
  id: UserCountry;
  name: string;
  flag: string;
  region: 'Asia' | 'Middle East' | 'Caribbean' | 'Europe' | 'Americas' | 'Oceania';
  taxesCapitalGains: boolean;
  taxesDividends: boolean;
  needsForeignWithholdingGuidance: boolean;
  needsDomesticTaxPack: boolean;
  description: string;
}

export const COUNTRY_CONFIGS: Record<UserCountry, CountryConfig> = {
  malaysia: {
    id: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    region: 'Asia',
    taxesCapitalGains: false,
    taxesDividends: false,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: false,
    description: 'No capital gains tax on securities. Dividends tax-exempt. Focus on foreign withholding tax management.',
  },
  singapore: {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    region: 'Asia',
    taxesCapitalGains: false,
    taxesDividends: false,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: false,
    description: 'No capital gains tax. Dividends tax-exempt for individuals. Manage foreign withholding taxes.',
  },
  hongkong: {
    id: 'hongkong',
    name: 'Hong Kong',
    flag: '🇭🇰',
    region: 'Asia',
    taxesCapitalGains: false,
    taxesDividends: false,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: false,
    description: 'No capital gains tax. No dividend tax. Simple tax regime, focus on foreign obligations.',
  },
  uae: {
    id: 'uae',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    region: 'Middle East',
    taxesCapitalGains: false,
    taxesDividends: false,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: false,
    description: 'No personal income tax, capital gains tax, or dividend tax. Focus on foreign withholding.',
  },
  bahrain: {
    id: 'bahrain',
    name: 'Bahrain',
    flag: '🇧🇭',
    region: 'Middle East',
    taxesCapitalGains: false,
    taxesDividends: false,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: false,
    description: 'No personal income tax. Focus on managing foreign withholding taxes.',
  },
  cayman: {
    id: 'cayman',
    name: 'Cayman Islands',
    flag: '🇰🇾',
    region: 'Caribbean',
    taxesCapitalGains: false,
    taxesDividends: false,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: false,
    description: 'No direct taxation. Focus on foreign withholding tax management.',
  },
  bermuda: {
    id: 'bermuda',
    name: 'Bermuda',
    flag: '🇧🇲',
    region: 'Caribbean',
    taxesCapitalGains: false,
    taxesDividends: false,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: false,
    description: 'No income tax, capital gains tax, or dividend tax. Manage foreign obligations.',
  },
  monaco: {
    id: 'monaco',
    name: 'Monaco',
    flag: '🇲🇨',
    region: 'Europe',
    taxesCapitalGains: false,
    taxesDividends: false,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: false,
    description: 'No capital gains or income tax for residents. Focus on foreign withholding.',
  },
  india: {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    region: 'Asia',
    taxesCapitalGains: true,
    taxesDividends: true,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: true,
    description: 'Full taxation on capital gains and dividends. Requires comprehensive tax planning.',
  },
  us: {
    id: 'us',
    name: 'United States',
    flag: '🇺🇸',
    region: 'Americas',
    taxesCapitalGains: true,
    taxesDividends: true,
    needsForeignWithholdingGuidance: false,
    needsDomesticTaxPack: true,
    description: 'Full taxation on worldwide income. Comprehensive tax pack required.',
  },
  australia: {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    region: 'Oceania',
    taxesCapitalGains: true,
    taxesDividends: true,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: true,
    description: 'Taxes capital gains with 50% CGT discount. Comprehensive tax pack required.',
  },
  canada: {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    region: 'Americas',
    taxesCapitalGains: true,
    taxesDividends: true,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: true,
    description: '50% of capital gains taxable. Comprehensive tax pack required.',
  },
  uk: {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    region: 'Europe',
    taxesCapitalGains: true,
    taxesDividends: true,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: true,
    description: 'Capital gains tax with annual exemption. Comprehensive tax pack required.',
  },
  other: {
    id: 'other',
    name: 'Other',
    flag: '🌍',
    region: 'Americas',
    taxesCapitalGains: true,
    taxesDividends: true,
    needsForeignWithholdingGuidance: true,
    needsDomesticTaxPack: true,
    description: 'Please consult with a tax professional for your specific country.',
  },
};

// Set user's country - In production, this would come from user profile
export const CURRENT_USER_COUNTRY: UserCountry = 'malaysia';

export function getUserCountryConfig(country: UserCountry = CURRENT_USER_COUNTRY): CountryConfig {
  return COUNTRY_CONFIGS[country];
}

export function needsForeignFilingAssistance(country: UserCountry = CURRENT_USER_COUNTRY): boolean {
  return COUNTRY_CONFIGS[country].needsForeignWithholdingGuidance;
}

export function needsDomesticTaxPack(country: UserCountry = CURRENT_USER_COUNTRY): boolean {
  return COUNTRY_CONFIGS[country].needsDomesticTaxPack;
}

export function getTaxExemptCountries(): CountryConfig[] {
  return Object.values(COUNTRY_CONFIGS).filter(c => !c.taxesCapitalGains && !c.taxesDividends);
}
