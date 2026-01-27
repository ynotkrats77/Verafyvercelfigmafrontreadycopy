import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Globe,
  Building2,
  Calculator,
  FileText,
  Download,
  AlertTriangle,
  Info,
  CheckCircle,
  DollarSign,
  Clock,
  ChevronRight,
  ExternalLink,
  Upload,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  BookOpen,
  Video,
  HelpCircle,
} from 'lucide-react';
import { getUserCountryConfig, CURRENT_USER_COUNTRY } from '../../config/userCountry';

interface ForeignTaxFilingPageProps {
  isDark: boolean;
}

export function ForeignTaxFilingPage({ isDark }: ForeignTaxFilingPageProps) {
  const [selectedStockCountry, setSelectedStockCountry] = useState<string>('us');
  const userCountry = getUserCountryConfig(CURRENT_USER_COUNTRY);

  // Portfolio holdings by stock domicile
  const holdingsByCountry = {
    us: {
      flag: '🇺🇸',
      country: 'United States',
      totalValue: 36488.75,
      dividends: 248.50,
      withholdingPaid: 37.28,
      holdings: ['DOC', 'SXL', 'VOO', 'VTI', 'AAPL', 'PLTR'],
      count: 6,
    },
    au: {
      flag: '🇦🇺',
      country: 'Australia',
      totalValue: 12500.00,
      dividends: 450.00,
      withholdingPaid: 67.50,
      holdings: ['BHP', 'CBA'],
      count: 2,
    },
    ca: {
      flag: '🇨🇦',
      country: 'Canada',
      totalValue: 8200.00,
      dividends: 180.00,
      withholdingPaid: 27.00,
      holdings: ['TD', 'ENB'],
      count: 2,
    },
    uk: {
      flag: '🇬🇧',
      country: 'United Kingdom',
      totalValue: 5600.00,
      dividends: 120.00,
      withholdingPaid: 12.00,
      holdings: ['BP', 'HSBC'],
      count: 2,
    },
  };

  // Filing requirements by country
  const filingRequirements = {
    us: {
      required: false,
      forms: [
        {
          name: 'Form 1042-S',
          description: 'Foreign Person\'s U.S. Source Income Subject to Withholding',
          who: 'Issued by your broker automatically',
          when: 'By March 15',
          action: 'No filing needed - for records only',
          downloadable: true,
        },
        {
          name: 'Form W-8BEN',
          description: 'Certificate of Foreign Status (Treaty Benefits)',
          who: 'You submit to broker once',
          when: 'When opening account or every 3 years',
          action: 'Ensures 15% withholding instead of 30%',
          downloadable: true,
        },
      ],
      withholdingRate: 15,
      treatyRate: true,
      autoWithholding: true,
      filingDeadline: 'N/A - No filing required',
      authority: 'Internal Revenue Service (IRS)',
      website: 'https://www.irs.gov',
      keyPoints: [
        '✓ Tax is automatically withheld at 15% (with W-8BEN)',
        '✓ No need to file U.S. tax return as non-resident',
        '✓ Broker sends you 1042-S form for your records',
        '✓ Keep W-8BEN current with your broker',
        '⚠️ Without W-8BEN, you pay 30% withholding',
      ],
    },
    au: {
      required: false,
      forms: [
        {
          name: 'Australian Withholding Declaration',
          description: 'Declaration for reduced withholding on dividends',
          who: 'Submit to broker/registry',
          when: 'When purchasing Australian shares',
          action: 'Reduces withholding from 30% to 15%',
          downloadable: true,
        },
      ],
      withholdingRate: 15,
      treatyRate: true,
      autoWithholding: true,
      filingDeadline: 'N/A - No filing required',
      authority: 'Australian Taxation Office (ATO)',
      website: 'https://www.ato.gov.au',
      keyPoints: [
        '✓ Tax is automatically withheld at 15% (with treaty)',
        '✓ No need to file Australian tax return',
        '✓ Franking credits not available to non-residents',
        '✓ Keep withholding declaration current',
      ],
    },
    ca: {
      required: false,
      forms: [
        {
          name: 'Form NR301',
          description: 'Declaration of Eligibility for Benefits under a Tax Treaty',
          who: 'Submit to broker',
          when: 'When opening account',
          action: 'Reduces withholding from 25% to 15%',
          downloadable: true,
        },
        {
          name: 'Form NR4',
          description: 'Statement of Amounts Paid to Non-Residents',
          who: 'Issued by broker automatically',
          when: 'By February 28',
          action: 'For your records',
          downloadable: true,
        },
      ],
      withholdingRate: 15,
      treatyRate: true,
      autoWithholding: true,
      filingDeadline: 'N/A - No filing required',
      authority: 'Canada Revenue Agency (CRA)',
      website: 'https://www.canada.ca/en/revenue-agency',
      keyPoints: [
        '✓ Tax is automatically withheld at 15% (with NR301)',
        '✓ No need to file Canadian tax return',
        '✓ Broker provides NR4 slip for records',
        '✓ Keep Form NR301 current with broker',
      ],
    },
    uk: {
      required: false,
      forms: [
        {
          name: 'Certificate of Residence',
          description: 'Proof of tax residency for treaty benefits',
          who: 'Obtain from your home country tax authority',
          when: 'As needed for claims',
          action: 'May reduce or eliminate withholding',
          downloadable: false,
        },
      ],
      withholdingRate: 10,
      treatyRate: true,
      autoWithholding: true,
      filingDeadline: 'N/A - No filing required',
      authority: 'HM Revenue & Customs (HMRC)',
      website: 'https://www.gov.uk/government/organisations/hm-revenue-customs',
      keyPoints: [
        '✓ Lower withholding rate: 10% (with treaty)',
        '✓ No need to file UK tax return',
        '✓ Some UK companies may require Certificate of Residence',
        '✓ Dividends from UK companies may have no withholding',
      ],
    },
  };

  const currentFiling = filingRequirements[selectedStockCountry as keyof typeof filingRequirements];
  const currentHoldings = holdingsByCountry[selectedStockCountry as keyof typeof holdingsByCountry];

  // Step-by-step guides
  const guides = {
    us: [
      {
        step: 1,
        title: 'Submit Form W-8BEN to Your Broker',
        description: 'This ensures you pay 15% instead of 30% withholding tax',
        details: [
          'Contact your broker (Interactive Brokers, Charles Schwab, etc.)',
          'Complete Form W-8BEN with your personal details',
          'Claim treaty benefits under Article 10 (Dividends)',
          'Form is valid for 3 years from signing date',
        ],
        timeRequired: '15 minutes',
        frequency: 'Every 3 years',
        icon: FileText,
      },
      {
        step: 2,
        title: 'Receive Form 1042-S Annually',
        description: 'Your broker will send this by March 15 each year',
        details: [
          'Shows total U.S. income received',
          'Shows withholding tax deducted',
          'Keep for your home country records',
          'No action required - informational only',
        ],
        timeRequired: 'N/A',
        frequency: 'Annual (automatic)',
        icon: Mail,
      },
      {
        step: 3,
        title: 'Keep Records for Home Country',
        description: 'Store documents in case your home country requires them',
        details: [
          'Keep all 1042-S forms',
          'Keep broker statements showing withholding',
          'May be needed for foreign tax credit claims (if applicable)',
          `${userCountry.name} doesn't tax this income, but keep records`,
        ],
        timeRequired: '5 minutes/year',
        frequency: 'Ongoing',
        icon: BookOpen,
      },
    ],
    au: [
      {
        step: 1,
        title: 'Submit Withholding Declaration',
        description: 'Reduce withholding from 30% to 15%',
        details: [
          'Contact your broker or the share registry',
          'Complete withholding declaration form',
          'Provide tax residency details',
          'Update if residency changes',
        ],
        timeRequired: '15 minutes',
        frequency: 'Once, then as needed',
        icon: FileText,
      },
      {
        step: 2,
        title: 'Understand Franking Credits',
        description: 'Non-residents cannot claim franking credits',
        details: [
          'Franking credits are for Australian tax residents only',
          'You receive the unfranked dividend amount',
          'Withholding tax applies to unfranked dividends',
          'Focus on fully franked dividends to minimize withholding',
        ],
        timeRequired: 'N/A',
        frequency: 'Ongoing',
        icon: Info,
      },
    ],
    ca: [
      {
        step: 1,
        title: 'Submit Form NR301',
        description: 'Claim treaty benefits to reduce withholding',
        details: [
          'Complete Form NR301 with your details',
          'Submit to your broker',
          'Certify your residency status',
          'Reduces withholding from 25% to 15%',
        ],
        timeRequired: '15 minutes',
        frequency: 'Once',
        icon: FileText,
      },
      {
        step: 2,
        title: 'Receive Form NR4',
        description: 'Annual statement from your broker',
        details: [
          'Shows Canadian income paid to you',
          'Shows withholding tax deducted',
          'Provided by February 28 each year',
          'Keep for records',
        ],
        timeRequired: 'N/A',
        frequency: 'Annual (automatic)',
        icon: Mail,
      },
    ],
    uk: [
      {
        step: 1,
        title: 'Understand UK Dividend Withholding',
        description: 'UK has unique dividend tax rules',
        details: [
          'Many UK companies pay dividends with no withholding',
          'Some companies may withhold 10% under treaty',
          'Certificate of Residence may be required',
          'Obtain from your home country tax authority if needed',
        ],
        timeRequired: 'Varies',
        frequency: 'As needed',
        icon: FileText,
      },
    ],
  };

  const currentGuides = guides[selectedStockCountry as keyof typeof guides] || [];

  // Resources by country
  const resources = {
    us: [
      {
        title: 'IRS Publication 519',
        description: 'U.S. Tax Guide for Aliens',
        url: 'https://www.irs.gov/pub/irs-pdf/p519.pdf',
        type: 'PDF Guide',
      },
      {
        title: 'Form W-8BEN Instructions',
        description: 'How to complete the form correctly',
        url: 'https://www.irs.gov/instructions/iw8ben',
        type: 'Instructions',
      },
      {
        title: 'Tax Treaty Tables',
        description: 'Withholding rates by country',
        url: 'https://www.irs.gov/individuals/international-taxpayers/tax-treaty-tables',
        type: 'Reference',
      },
    ],
    au: [
      {
        title: 'ATO Non-Resident Guide',
        description: 'Tax guidance for non-residents',
        url: 'https://www.ato.gov.au/individuals/international-tax-for-individuals',
        type: 'Guide',
      },
      {
        title: 'Franking Credits Explained',
        description: 'Understanding Australian dividend taxation',
        url: 'https://www.ato.gov.au/individuals/income-and-deductions/income-you-must-declare/dividends',
        type: 'Article',
      },
    ],
    ca: [
      {
        title: 'CRA Non-Resident Guide',
        description: 'Tax information for non-residents',
        url: 'https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents',
        type: 'Guide',
      },
      {
        title: 'Form NR301 Download',
        description: 'Declaration of eligibility for treaty benefits',
        url: 'https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/nr301',
        type: 'Form',
      },
    ],
    uk: [
      {
        title: 'HMRC Non-Resident Guide',
        description: 'Tax guidance for non-UK residents',
        url: 'https://www.gov.uk/tax-foreign-income/non-resident',
        type: 'Guide',
      },
      {
        title: 'UK Dividend Tax Rules',
        description: 'Understanding UK dividend taxation',
        url: 'https://www.gov.uk/tax-on-dividends',
        type: 'Article',
      },
    ],
  };

  const currentResources = resources[selectedStockCountry as keyof typeof resources] || [];

  const stats = [
    {
      label: 'Countries with Holdings',
      value: Object.keys(holdingsByCountry).length.toString(),
      subtext: 'Stock domicile countries',
      icon: Globe,
      color: '#22d3ee',
    },
    {
      label: 'Total Dividends (YTD)',
      value: '$998',
      subtext: 'Across all countries',
      icon: DollarSign,
      color: '#10b981',
    },
    {
      label: 'Total Withholding Paid',
      value: '$144',
      subtext: 'Automatic deductions',
      icon: Calculator,
      color: '#f59e0b',
    },
    {
      label: 'Net After Tax',
      value: '$854',
      subtext: 'Tax-free in ' + userCountry.name,
      icon: CheckCircle,
      color: '#a855f7',
    },
  ];

  const handleDownloadForm = (formName: string) => {
    alert(`Downloading ${formName}...\n\nIn production, this would download the actual form or open the official government link.`);
  };

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="p-3 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
              }}
            >
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Foreign Tax Filing Assistant
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Manage withholding taxes and filing requirements for stocks held abroad
              </p>
            </div>
          </div>
        </div>

        {/* User Country Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-5 rounded-xl border ${
            isDark ? 'bg-green-500/10 border-green-500/30' : 'bg-green-50 border-green-200'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-green-500/20">
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">{userCountry.flag}</span>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  You're a {userCountry.name} Tax Resident
                </h3>
              </div>
              <p className={`text-sm mb-3 ${isDark ? 'text-green-300' : 'text-green-900'}`}>
                {userCountry.description}
              </p>
              <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-white'}`}>
                <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  What This Means:
                </p>
                <ul className={`text-sm space-y-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <li>✓ No capital gains tax in {userCountry.name}</li>
                  <li>✓ No dividend tax in {userCountry.name}</li>
                  <li>⚠️ But you still pay <strong>withholding taxes</strong> to countries where stocks are domiciled</li>
                  <li>📋 This page helps you manage those foreign withholding obligations</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-5 rounded-xl border ${
                isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background: `${stat.color}20`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
              </div>
              <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {stat.label}
              </p>
              <p className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {stat.value}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                {stat.subtext}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Country Selector */}
      <div className="mb-6">
        <h2 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Select Stock Domicile Country
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(holdingsByCountry).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setSelectedStockCountry(key)}
              className={`p-4 rounded-xl border text-left transition-all hover:scale-[1.02] ${
                selectedStockCountry === key
                  ? isDark
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-cyan-500 bg-cyan-50'
                  : isDark
                  ? 'border-slate-700 hover:border-slate-600'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{data.flag}</span>
                <div>
                  <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {data.country}
                  </h3>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {data.count} holdings
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className={`p-2 rounded ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Dividends</p>
                  <p className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    ${data.dividends.toFixed(0)}
                  </p>
                </div>
                <div className={`p-2 rounded ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Withheld</p>
                  <p className="font-bold text-orange-500">
                    ${data.withholdingPaid.toFixed(0)}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Filing Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-cyan-500" />
          <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Filing Requirements for {currentHoldings.country}
          </h2>
        </div>

        <div className={`p-4 rounded-lg mb-4 ${
          currentFiling.required
            ? isDark ? 'bg-orange-500/10 border border-orange-500/30' : 'bg-orange-50 border border-orange-200'
            : isDark ? 'bg-green-500/10 border border-green-500/30' : 'bg-green-50 border border-green-200'
        }`}>
          <div className="flex items-start gap-3">
            {currentFiling.required ? (
              <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            ) : (
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className={`font-bold mb-1 ${
                currentFiling.required
                  ? 'text-orange-500'
                  : 'text-green-500'
              }`}>
                {currentFiling.required ? 'Tax Return Filing Required' : 'No Tax Return Filing Required'}
              </p>
              <p className={`text-sm ${
                currentFiling.required
                  ? isDark ? 'text-orange-300' : 'text-orange-900'
                  : isDark ? 'text-green-300' : 'text-green-900'
              }`}>
                {currentFiling.required
                  ? `You must file a tax return with ${currentFiling.authority} by ${currentFiling.filingDeadline}`
                  : `As a non-resident, you don't need to file a tax return with ${currentFiling.authority}. Tax is automatically withheld.`
                }
              </p>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="mb-6">
          <h3 className={`font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Key Points:
          </h3>
          <div className="space-y-2">
            {currentFiling.keyPoints.map((point, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}
              >
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Required Forms */}
        <h3 className={`font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Required Forms & Documents:
        </h3>
        <div className="space-y-4">
          {currentFiling.forms.map((form, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl border ${
                isDark ? 'border-slate-700' : 'border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {form.name}
                  </h4>
                  <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {form.description}
                  </p>
                </div>
                {form.downloadable && (
                  <button
                    onClick={() => handleDownloadForm(form.name)}
                    className="px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all hover:scale-[1.05]"
                    style={{
                      background: '#22d3ee20',
                      color: '#22d3ee',
                    }}
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Who Submits
                  </p>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {form.who}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    When
                  </p>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {form.when}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Action Required
                  </p>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {form.action}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Step-by-Step Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-cyan-500" />
          <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Step-by-Step Filing Guide
          </h2>
        </div>

        <div className="space-y-4">
          {currentGuides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <div
                key={index}
                className={`p-5 rounded-xl border ${
                  isDark ? 'border-slate-700' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{
                      background: '#22d3ee20',
                    }}
                  >
                    <Icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="px-2 py-1 rounded text-xs font-bold"
                            style={{
                              background: '#22d3ee',
                              color: '#ffffff',
                            }}
                          >
                            Step {guide.step}
                          </span>
                          <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {guide.title}
                          </h3>
                        </div>
                        <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {guide.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {guide.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2 text-sm ${
                            isDark ? 'text-slate-300' : 'text-slate-700'
                          }`}
                        >
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-cyan-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                          {guide.timeRequired}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                          {guide.frequency}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <ExternalLink className="w-5 h-5 text-cyan-500" />
          <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Official Resources & Links
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentResources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${
                isDark
                  ? 'border-slate-700 hover:border-cyan-500'
                  : 'border-slate-200 hover:border-cyan-500'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {resource.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-cyan-500 flex-shrink-0" />
              </div>
              <p className={`text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {resource.description}
              </p>
              <span
                className="px-2 py-1 rounded text-xs font-semibold"
                style={{
                  background: '#22d3ee20',
                  color: '#22d3ee',
                }}
              >
                {resource.type}
              </span>
            </a>
          ))}
        </div>

        <div className={`mt-6 p-4 rounded-lg ${isDark ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
          <div className="flex items-start gap-2">
            <Info className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <div>
              <p className={`text-sm ${isDark ? 'text-blue-300' : 'text-blue-900'}`}>
                <strong>Need Help?</strong> While these resources are official and comprehensive, consider consulting with a cross-border tax professional familiar with {userCountry.name} and {currentHoldings.country} tax law for complex situations.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}