import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Globe,
  Building2,
  Calculator,
  TrendingDown,
  AlertTriangle,
  Info,
  CheckCircle,
  DollarSign,
  Percent,
  FileText,
  Download,
  ChevronRight,
} from 'lucide-react';

interface MultiJurisdictionTaxPageProps {
  isDark: boolean;
}

export function MultiJurisdictionTaxPage({ isDark }: MultiJurisdictionTaxPageProps) {
  const [residenceCountry, setResidenceCountry] = useState<string>('malaysia');

  // Portfolio holdings with stock domicile countries
  const holdings = [
    {
      ticker: 'DOC',
      name: 'Physicians Realty Trust',
      quantity: 500,
      costBasis: 90000.00,
      currentValue: 15062.80,
      unrealizedGL: -74937.20,
      dividendYTD: 0,
      stockDomicile: 'us',
      stockCountry: 'United States',
      flag: '🇺🇸',
    },
    {
      ticker: 'SXL',
      name: 'Sunlands Technology',
      quantity: 182,
      costBasis: 14070.00,
      currentValue: 6433.56,
      unrealizedGL: -7636.44,
      dividendYTD: 0,
      stockDomicile: 'us',
      stockCountry: 'United States',
      flag: '🇺🇸',
    },
    {
      ticker: 'VOO',
      name: 'Vanguard S&P 500 ETF',
      quantity: 15,
      costBasis: 6525.00,
      currentValue: 7515.00,
      unrealizedGL: 990.00,
      dividendYTD: 185.20,
      stockDomicile: 'us',
      stockCountry: 'United States',
      flag: '🇺🇸',
    },
    {
      ticker: 'VTI',
      name: 'Vanguard Total Stock Market ETF',
      quantity: 8,
      costBasis: 1840.00,
      currentValue: 2096.00,
      unrealizedGL: 256.00,
      dividendYTD: 63.30,
      stockDomicile: 'us',
      stockCountry: 'United States',
      flag: '🇺🇸',
    },
    {
      ticker: 'AAPL',
      name: 'Apple Inc.',
      quantity: 25,
      costBasis: 4350.00,
      currentValue: 4736.25,
      unrealizedGL: 386.25,
      dividendYTD: 0,
      stockDomicile: 'us',
      stockCountry: 'United States',
      flag: '🇺🇸',
    },
    {
      ticker: 'PLTR',
      name: 'Palantir Technologies',
      quantity: 10,
      costBasis: 715.00,
      currentValue: 645.14,
      unrealizedGL: -69.86,
      dividendYTD: 0,
      stockDomicile: 'us',
      stockCountry: 'United States',
      flag: '🇺🇸',
    },
  ];

  // Tax treaty information
  const taxTreaties = {
    malaysia: {
      us: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      au: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      ca: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      uk: { dividendWithholding: 10, capitalGainsTax: 0, hasTreaty: true },
      eu: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
    },
    singapore: {
      us: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      au: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      ca: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      uk: { dividendWithholding: 10, capitalGainsTax: 0, hasTreaty: true },
      eu: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
    },
    hongkong: {
      us: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      au: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      ca: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      uk: { dividendWithholding: 10, capitalGainsTax: 0, hasTreaty: true },
      eu: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
    },
    india: {
      us: { dividendWithholding: 25, capitalGainsTax: 0, hasTreaty: true },
      au: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      ca: { dividendWithholding: 25, capitalGainsTax: 0, hasTreaty: true },
      uk: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      eu: { dividendWithholding: 20, capitalGainsTax: 0, hasTreaty: false },
    },
    us: {
      us: { dividendWithholding: 0, capitalGainsTax: 15, hasTreaty: false },
      au: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      ca: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      uk: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
      eu: { dividendWithholding: 15, capitalGainsTax: 0, hasTreaty: true },
    },
  };

  // Country configurations
  const residenceCountries = [
    {
      id: 'malaysia',
      name: 'Malaysia',
      flag: '🇲🇾',
      taxesCapitalGains: false,
      domesticDividendTax: 0,
      description: 'No capital gains tax on securities. Dividends tax-exempt.',
    },
    {
      id: 'singapore',
      name: 'Singapore',
      flag: '🇸🇬',
      taxesCapitalGains: false,
      domesticDividendTax: 0,
      description: 'No capital gains tax. Dividends tax-exempt for individuals.',
    },
    {
      id: 'hongkong',
      name: 'Hong Kong',
      flag: '🇭🇰',
      taxesCapitalGains: false,
      domesticDividendTax: 0,
      description: 'No capital gains tax. No dividend tax.',
    },
    {
      id: 'india',
      name: 'India',
      flag: '🇮🇳',
      taxesCapitalGains: true,
      domesticDividendTax: 10,
      stcgRate: 15,
      ltcgRate: 10,
      ltcgExemption: 100000,
      description: 'STCG: 15%, LTCG: 10% (above ₹1L exempt). Plus foreign asset reporting.',
    },
    {
      id: 'us',
      name: 'United States',
      flag: '🇺🇸',
      taxesCapitalGains: true,
      domesticDividendTax: 15,
      stcgRate: 24,
      ltcgRate: 15,
      description: 'STCG at ordinary income rates. LTCG: 15% or 20%.',
    },
  ];

  const currentResidence = residenceCountries.find(c => c.id === residenceCountry);

  // Calculate taxes by jurisdiction
  const calculateTaxesByJurisdiction = () => {
    const jurisdictionTaxes: any = {};
    let totalDividendWithholding = 0;
    let totalCapitalGainsTaxOwed = 0;
    let totalHomeCountryTax = 0;

    holdings.forEach(holding => {
      const stockCountry = holding.stockDomicile;
      const treaty = (taxTreaties as any)[residenceCountry]?.[stockCountry];
      
      if (!jurisdictionTaxes[stockCountry]) {
        jurisdictionTaxes[stockCountry] = {
          country: holding.stockCountry,
          flag: holding.flag,
          totalDividends: 0,
          dividendWithholding: 0,
          capitalGains: 0,
          capitalGainsTax: 0,
          withholdingRate: treaty?.dividendWithholding || 30,
          hasTreaty: treaty?.hasTreaty || false,
        };
      }

      // Dividend withholding tax (always applied at source)
      const dividendWithholding = holding.dividendYTD * (jurisdictionTaxes[stockCountry].withholdingRate / 100);
      jurisdictionTaxes[stockCountry].totalDividends += holding.dividendYTD;
      jurisdictionTaxes[stockCountry].dividendWithholding += dividendWithholding;
      totalDividendWithholding += dividendWithholding;

      // Capital gains (if stock domicile country taxes it)
      if (treaty?.capitalGainsTax && holding.unrealizedGL > 0) {
        const cgTax = holding.unrealizedGL * (treaty.capitalGainsTax / 100);
        jurisdictionTaxes[stockCountry].capitalGains += holding.unrealizedGL;
        jurisdictionTaxes[stockCountry].capitalGainsTax += cgTax;
        totalCapitalGainsTaxOwed += cgTax;
      }
    });

    // Calculate home country tax obligations
    if (currentResidence?.taxesCapitalGains) {
      const totalRealizedGains = -576.22; // From your data
      const totalUnrealizedGains = holdings.reduce((sum, h) => sum + (h.unrealizedGL > 0 ? h.unrealizedGL : 0), 0);
      
      if (residenceCountry === 'india') {
        // India's specific rules
        const stcg = 0; // Short term already realized as loss
        const ltcg = Math.max(0, totalRealizedGains); // Long term gains
        const ltcgTaxable = Math.max(0, ltcg - (currentResidence.ltcgExemption || 0));
        totalHomeCountryTax = ltcgTaxable * ((currentResidence.ltcgRate || 0) / 100);
      } else if (residenceCountry === 'us') {
        // US rules - you've already paid via withholding
        totalHomeCountryTax = 0; // Already included in jurisdiction taxes
      }
    }

    return {
      byJurisdiction: Object.values(jurisdictionTaxes),
      totalDividendWithholding,
      totalCapitalGainsTaxOwed,
      totalHomeCountryTax,
      grandTotal: totalDividendWithholding + totalCapitalGainsTaxOwed + totalHomeCountryTax,
    };
  };

  const taxCalculation = calculateTaxesByJurisdiction();

  // Withholding tax by country
  const withholdingRates = [
    { country: 'United States', flag: '🇺🇸', standard: 30, treaty: 15, rebate: 50 },
    { country: 'Australia', flag: '🇦🇺', standard: 30, treaty: 15, rebate: 50 },
    { country: 'Canada', flag: '🇨🇦', standard: 25, treaty: 15, rebate: 40 },
    { country: 'United Kingdom', flag: '🇬🇧', standard: 20, treaty: 10, rebate: 50 },
    { country: 'Germany', flag: '🇩🇪', standard: 26.375, treaty: 15, rebate: 43 },
    { country: 'France', flag: '🇫🇷', standard: 30, treaty: 15, rebate: 50 },
    { country: 'Japan', flag: '🇯🇵', standard: 20.42, treaty: 15, rebate: 27 },
    { country: 'Switzerland', flag: '🇨🇭', standard: 35, treaty: 15, rebate: 57 },
  ];

  const stats = [
    {
      label: 'Home Country Tax',
      value: currentResidence?.taxesCapitalGains ? `$${taxCalculation.totalHomeCountryTax.toFixed(0)}` : '$0',
      subtext: currentResidence?.taxesCapitalGains ? currentResidence.name : 'Tax-exempt',
      icon: Building2,
      color: currentResidence?.taxesCapitalGains ? '#ef4444' : '#10b981',
    },
    {
      label: 'Foreign Withholding',
      value: `$${taxCalculation.totalDividendWithholding.toFixed(0)}`,
      subtext: 'Deducted at source',
      icon: Globe,
      color: '#f59e0b',
    },
    {
      label: 'Total Tax Obligation',
      value: `$${taxCalculation.grandTotal.toFixed(0)}`,
      subtext: 'All jurisdictions',
      icon: Calculator,
      color: '#22d3ee',
    },
    {
      label: 'Net After-Tax',
      value: `$${(248.50 - taxCalculation.totalDividendWithholding).toFixed(0)}`,
      subtext: 'From dividends',
      icon: DollarSign,
      color: '#a855f7',
    },
  ];

  const chartData = (taxCalculation.byJurisdiction as any[]).map(j => ({
    name: j.country,
    withholding: j.dividendWithholding,
    capitalGains: j.capitalGainsTax,
  }));

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div
              className="p-3 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
              }}
            >
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Multi-Jurisdiction Tax Calculator
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Calculate taxes across multiple countries based on stock domicile and residence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Residence Country Selector */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Building2 className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
          <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Your Tax Residence
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {residenceCountries.map((country) => (
            <button
              key={country.id}
              onClick={() => setResidenceCountry(country.id)}
              className={`p-4 rounded-xl border text-left transition-all hover:scale-[1.02] ${
                residenceCountry === country.id
                  ? isDark
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-cyan-500 bg-cyan-50'
                  : isDark
                  ? 'border-slate-700 hover:border-slate-600'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{country.flag}</span>
                <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {country.name}
                </h3>
              </div>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {country.description}
              </p>
              {residenceCountry === country.id && (
                <div className="flex items-center gap-1 text-xs text-cyan-500 mt-2">
                  <CheckCircle className="w-3 h-3" />
                  Selected
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Alert for tax-exempt countries */}
      {!currentResidence?.taxesCapitalGains && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 p-5 rounded-xl border ${
            isDark ? 'bg-green-500/10 border-green-500/30' : 'bg-green-50 border-green-200'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-green-500/20">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex-1">
              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {currentResidence?.name} Does Not Tax Capital Gains
              </h3>
              <p className={`text-sm ${isDark ? 'text-green-300' : 'text-green-900'}`}>
                Good news! You won't pay capital gains tax to {currentResidence?.name} on your stock profits. However, you'll still pay <strong>withholding taxes</strong> on dividends to the countries where your stocks are domiciled (deducted automatically by brokers).
              </p>
            </div>
          </div>
        </motion.div>
      )}

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

      {/* Tax Breakdown by Jurisdiction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Tax Obligations by Stock Domicile Country
        </h2>
        <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Breakdown of taxes you owe to each country where your stocks are registered
        </p>

        <div className="space-y-4">
          {(taxCalculation.byJurisdiction as any[]).map((jurisdiction, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl border ${
                isDark ? 'border-slate-700' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{jurisdiction.flag}</span>
                  <div>
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {jurisdiction.country}
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {jurisdiction.hasTreaty ? `✓ Tax treaty with ${currentResidence?.name}` : 'No tax treaty'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-500">
                    ${(jurisdiction.dividendWithholding + jurisdiction.capitalGainsTax).toFixed(2)}
                  </p>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Total tax owed
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Dividends Received
                  </p>
                  <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    ${jurisdiction.totalDividends.toFixed(2)}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Withholding Tax ({jurisdiction.withholdingRate}%)
                  </p>
                  <p className="text-lg font-bold text-orange-500">
                    ${jurisdiction.dividendWithholding.toFixed(2)}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Net After Withholding
                  </p>
                  <p className={`text-lg font-bold text-green-500`}>
                    ${(jurisdiction.totalDividends - jurisdiction.dividendWithholding).toFixed(2)}
                  </p>
                </div>
              </div>

              {jurisdiction.hasTreaty && (
                <div className={`mt-3 p-3 rounded-lg ${isDark ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                  <p className={`text-xs ${isDark ? 'text-blue-300' : 'text-blue-900'}`}>
                    💡 <strong>Tax Treaty Benefit:</strong> Reduced withholding rate from 30% to {jurisdiction.withholdingRate}% 
                    = ${((jurisdiction.totalDividends * 0.30) - jurisdiction.dividendWithholding).toFixed(2)} saved
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Withholding Tax Reference Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Global Dividend Withholding Tax Reference
        </h2>
        <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Standard withholding rates vs treaty rates with {currentResidence?.name}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <th className={`text-left py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Stock Domicile Country
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Standard Rate
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Treaty Rate
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Savings
                </th>
                <th className={`text-center py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {withholdingRates.map((rate, index) => (
                <tr
                  key={index}
                  className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
                >
                  <td className={`py-3 px-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{rate.flag}</span>
                      <span className="font-semibold">{rate.country}</span>
                    </div>
                  </td>
                  <td className={`py-3 px-4 text-right ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {rate.standard}%
                  </td>
                  <td className={`py-3 px-4 text-right font-bold text-green-500`}>
                    {rate.treaty}%
                  </td>
                  <td className={`py-3 px-4 text-right font-bold text-cyan-500`}>
                    {rate.rebate}%
                  </td>
                  <td className={`py-3 px-4 text-center`}>
                    <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-500">
                      Treaty Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={`mt-4 p-4 rounded-lg ${isDark ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
          <div className="flex items-start gap-2">
            <Info className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <div>
              <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-blue-300' : 'text-blue-900'}`}>
                How Withholding Tax Works:
              </p>
              <ul className={`text-sm space-y-1 ${isDark ? 'text-blue-300' : 'text-blue-900'}`}>
                <li>• <strong>Automatic Deduction:</strong> Tax is deducted by your broker before you receive dividends</li>
                <li>• <strong>Treaty Benefits:</strong> Lower rates apply automatically if tax treaty exists</li>
                <li>• <strong>No Additional Action:</strong> You don't file separately in the stock domicile country</li>
                <li>• <strong>Tax Credits:</strong> Some countries allow foreign tax credit claims on your home tax return</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Key Takeaways for {currentResidence?.name} Tax Residents
        </h2>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg border ${isDark ? 'border-green-500/30 bg-green-500/5' : 'border-green-200 bg-green-50'}`}>
            <h3 className="font-bold text-green-500 mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Capital Gains
            </h3>
            <p className={`text-sm ${isDark ? 'text-green-300' : 'text-green-900'}`}>
              {currentResidence?.taxesCapitalGains 
                ? `You pay ${currentResidence.name} tax on capital gains. STCG: ${currentResidence.stcgRate}%, LTCG: ${currentResidence.ltcgRate}%`
                : `✓ Tax-free in ${currentResidence?.name}! No reporting or payment required on stock profits.`
              }
            </p>
          </div>

          <div className={`p-4 rounded-lg border ${isDark ? 'border-orange-500/30 bg-orange-500/5' : 'border-orange-200 bg-orange-50'}`}>
            <h3 className="font-bold text-orange-500 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Dividend Withholding
            </h3>
            <p className={`text-sm ${isDark ? 'text-orange-300' : 'text-orange-900'}`}>
              You pay ${taxCalculation.totalDividendWithholding.toFixed(2)} in withholding taxes to foreign governments (automatically deducted). 
              This is unavoidable even though {currentResidence?.name} doesn't tax dividends.
            </p>
          </div>

          <div className={`p-4 rounded-lg border ${isDark ? 'border-blue-500/30 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
            <h3 className="font-bold text-blue-500 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Reporting Requirements
            </h3>
            <p className={`text-sm ${isDark ? 'text-blue-300' : 'text-blue-900'}`}>
              {residenceCountry === 'malaysia' && '✓ No reporting required in Malaysia for foreign investments'}
              {residenceCountry === 'singapore' && '✓ No reporting required in Singapore for foreign investments'}
              {residenceCountry === 'hongkong' && '✓ No reporting required in Hong Kong for foreign investments'}
              {residenceCountry === 'india' && '⚠️ Must report foreign assets in Schedule FA (ITR). All foreign holdings above $10,000 must be disclosed'}
              {residenceCountry === 'us' && '⚠️ Must report foreign accounts if total exceeds $10,000 (FBAR + FATCA)'}
            </p>
          </div>

          <div className={`p-4 rounded-lg border ${isDark ? 'border-purple-500/30 bg-purple-500/5' : 'border-purple-200 bg-purple-50'}`}>
            <h3 className="font-bold text-purple-500 mb-2 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Optimization Strategy
            </h3>
            <p className={`text-sm ${isDark ? 'text-purple-300' : 'text-purple-900'}`}>
              {!currentResidence?.taxesCapitalGains 
                ? `Focus on growth stocks over dividend stocks to minimize withholding tax drag. Consider US ETFs with low dividend yields.`
                : `Consider tax-loss harvesting to offset gains. Hold investments >1 year for lower LTCG rates.`
              }
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}