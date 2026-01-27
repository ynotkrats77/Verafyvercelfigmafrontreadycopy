import { motion } from 'framer-motion';
import {
  Calculator,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Percent,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Download,
  ChevronRight,
  Award,
  Target,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Info,
  RefreshCw,
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';

interface TaxCenterPageProps {
  isDark: boolean;
}

export function TaxCenterPage({ isDark }: TaxCenterPageProps) {
  const taxSummary = {
    estimatedTaxLiability: 0,
    realizedGains: -576.22,
    realizedLosses: 576.22,
    unrealizedGains: 0,
    unrealizedLosses: -82643.64,
    dividendIncome: 248.50,
    interestIncome: 12.35,
    taxableIncome: -315.37,
    harvestableValue: 82643.64,
    projectedSavings: 24793.09,
  };

  const yearToDate = {
    realizedGainLoss: -576.22,
    dividends: 248.50,
    interest: 12.35,
    totalTaxableIncome: -315.37,
    estimatedTaxOwed: 0,
    withheld: 62.13,
    refundDue: 62.13,
  };

  const taxBracket = {
    current: '24%',
    income: 85000,
    filingStatus: 'Single',
    standardDeduction: 14600,
    taxableIncome: 70400,
    federalTax: 11294,
    effectiveRate: 13.3,
  };

  const capitalGainsBreakdown = [
    { type: 'Short-Term Realized', amount: -576.22, taxRate: 24, taxImpact: 138.29 },
    { type: 'Long-Term Realized', amount: 0, taxRate: 15, taxImpact: 0 },
    { type: 'Unrealized ST Gains', amount: 0, taxRate: 24, taxImpact: 0 },
    { type: 'Unrealized LT Gains', amount: 0, taxRate: 15, taxImpact: 0 },
    { type: 'Unrealized ST Losses', amount: -7636.30, taxRate: 0, taxImpact: 0 },
    { type: 'Unrealized LT Losses', amount: -75007.34, taxRate: 0, taxImpact: 0 },
  ];

  const dividendBreakdown = [
    { source: 'DOC', qualified: 0, nonQualified: 0, total: 0 },
    { source: 'SXL', qualified: 0, nonQualified: 0, total: 0 },
    { source: 'VOO', qualified: 185.20, nonQualified: 0, total: 185.20 },
    { source: 'VTI', qualified: 63.30, nonQualified: 0, total: 63.30 },
  ];

  const monthlyTrend = [
    { month: 'Jan', realized: -120.50, dividends: 42.15 },
    { month: 'Feb', realized: -88.20, dividends: 38.50 },
    { month: 'Mar', realized: -142.80, dividends: 41.20 },
    { month: 'Apr', realized: -95.60, dividends: 39.85 },
    { month: 'May', realized: -68.40, dividends: 43.10 },
    { month: 'Jun', realized: -60.72, dividends: 43.70 },
  ];

  const harvestingOpportunities = [
    {
      ticker: 'DOC',
      unrealizedLoss: -74937.20,
      purchaseDate: '2020-03-15',
      holdingPeriod: 'Long-term',
      taxSavings: 11240.58,
      priority: 'critical',
      recommendation: 'Harvest immediately - significant loss available',
    },
    {
      ticker: 'SXL',
      unrealizedLoss: -7636.30,
      purchaseDate: '2021-08-20',
      holdingPeriod: 'Long-term',
      taxSavings: 1145.45,
      priority: 'high',
      recommendation: 'Harvest before year-end',
    },
    {
      ticker: 'PLTR',
      unrealizedLoss: -69.86,
      purchaseDate: '2024-11-18',
      holdingPeriod: 'Short-term',
      taxSavings: 16.77,
      priority: 'low',
      recommendation: 'Optional - minor tax benefit',
    },
  ];

  const taxAllocation = [
    { category: 'Federal Income Tax', amount: 11294, percentage: 13.3 },
    { category: 'FICA (SS + Medicare)', amount: 6502.50, percentage: 7.65 },
    { category: 'State Tax', amount: 4250, percentage: 5.0 },
    { category: 'Investment Income Tax', amount: 0, percentage: 0 },
  ];

  const upcomingEvents = [
    {
      date: '2026-04-15',
      event: 'Q1 Estimated Tax Payment',
      amount: 2823.50,
      status: 'upcoming',
    },
    {
      date: '2026-06-15',
      event: 'Q2 Estimated Tax Payment',
      amount: 2823.50,
      status: 'upcoming',
    },
    {
      date: '2026-09-15',
      event: 'Q3 Estimated Tax Payment',
      amount: 2823.50,
      status: 'future',
    },
    {
      date: '2026-12-31',
      event: 'Tax-Loss Harvesting Deadline',
      amount: 0,
      status: 'future',
    },
  ];

  const stats = [
    {
      label: 'Est. Tax Liability',
      value: '$0',
      subtext: 'Capital losses offset gains',
      icon: Calculator,
      color: '#10b981',
    },
    {
      label: 'Harvestable Losses',
      value: '$82,644',
      subtext: 'Available for tax optimization',
      icon: TrendingDown,
      color: '#22d3ee',
    },
    {
      label: 'Projected Savings',
      value: '$24,793',
      subtext: 'From loss harvesting',
      icon: Award,
      color: '#f59e0b',
    },
    {
      label: 'YTD Income',
      value: '-$315',
      subtext: 'Net investment income',
      icon: DollarSign,
      color: '#a855f7',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return '#ef4444';
      case 'high':
        return '#f97316';
      case 'medium':
        return '#f59e0b';
      default:
        return '#64748b';
    }
  };

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
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Tax Center
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Comprehensive tax planning and reporting hub
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              <Download className="w-4 h-4" />
              Export Report
            </button>
            <button
              className="px-4 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                color: '#ffffff',
              }}
            >
              <RefreshCw className="w-5 h-5" />
              Refresh Data
            </button>
          </div>
        </div>
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

      {/* Tax Liability Alert */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-green-500/10 border-green-500/30' : 'bg-green-50 border-green-200'
        }`}
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-green-500/20">
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <div className="flex-1">
            <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              No Capital Gains Tax Liability for 2026
            </h3>
            <p className={`text-sm mb-3 ${isDark ? 'text-green-300' : 'text-green-900'}`}>
              Your realized capital losses of $576.22 offset all gains. You have $82,643.64 in unrealized losses available for tax-loss harvesting, which could save you up to $24,793.09 in taxes.
            </p>
            <button
              className="px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all"
              style={{
                background: '#10b98120',
                color: '#10b981',
              }}
            >
              View Harvesting Opportunities
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Year to Date Summary & Tax Bracket */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* YTD Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Year-to-Date Tax Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg"
              style={{ background: isDark ? '#1e293b' : '#f8fafc' }}
            >
              <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Realized Capital Gains/Losses
              </span>
              <span className={`text-sm font-bold ${yearToDate.realizedGainLoss < 0 ? 'text-red-500' : 'text-green-500'}`}>
                ${yearToDate.realizedGainLoss.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg"
              style={{ background: isDark ? '#1e293b' : '#f8fafc' }}
            >
              <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Dividend Income
              </span>
              <span className={`text-sm font-bold text-green-500`}>
                ${yearToDate.dividends.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg"
              style={{ background: isDark ? '#1e293b' : '#f8fafc' }}
            >
              <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Interest Income
              </span>
              <span className={`text-sm font-bold text-green-500`}>
                ${yearToDate.interest.toLocaleString()}
              </span>
            </div>
            <div className="border-t pt-4" style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}>
              <div className="flex items-center justify-between p-3 rounded-lg"
                style={{ background: isDark ? '#1e293b' : '#f8fafc' }}
              >
                <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Total Taxable Investment Income
                </span>
                <span className={`text-lg font-bold ${yearToDate.totalTaxableIncome < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  ${yearToDate.totalTaxableIncome.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  Estimated Tax Owed
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ${yearToDate.estimatedTaxOwed.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  Tax Withheld
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ${yearToDate.withheld.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-green-500/10">
                <span className="text-sm font-semibold text-green-500">
                  Estimated Refund
                </span>
                <span className="text-sm font-bold text-green-500">
                  ${yearToDate.refundDue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tax Bracket Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Tax Bracket Information
          </h2>
          <div className="space-y-4">
            <div className="text-center p-4 rounded-lg"
              style={{ background: isDark ? '#1e293b' : '#f8fafc' }}
            >
              <div className="text-4xl font-bold text-orange-500 mb-1">
                {taxBracket.current}
              </div>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Marginal Tax Bracket
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg"
                style={{ background: isDark ? '#1e293b' : '#f8fafc' }}
              >
                <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  Gross Income
                </p>
                <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ${taxBracket.income.toLocaleString()}
                </p>
              </div>
              <div className="p-3 rounded-lg"
                style={{ background: isDark ? '#1e293b' : '#f8fafc' }}
              >
                <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  Filing Status
                </p>
                <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {taxBracket.filingStatus}
                </p>
              </div>
              <div className="p-3 rounded-lg"
                style={{ background: isDark ? '#1e293b' : '#f8fafc' }}
              >
                <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  Standard Deduction
                </p>
                <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ${taxBracket.standardDeduction.toLocaleString()}
                </p>
              </div>
              <div className="p-3 rounded-lg"
                style={{ background: isDark ? '#1e293b' : '#f8fafc' }}
              >
                <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  Taxable Income
                </p>
                <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ${taxBracket.taxableIncome.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="border-t pt-4" style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Federal Tax (Est.)
                </span>
                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ${taxBracket.federalTax.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Effective Tax Rate
                </span>
                <span className="text-sm font-bold text-orange-500">
                  {taxBracket.effectiveRate}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Capital Gains Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Capital Gains & Losses Breakdown
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <th className={`text-left py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Type
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Amount
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Tax Rate
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Tax Impact
                </th>
              </tr>
            </thead>
            <tbody>
              {capitalGainsBreakdown.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
                >
                  <td className={`py-3 px-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {item.type}
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${
                    item.amount < 0 ? 'text-red-500' : item.amount > 0 ? 'text-green-500' : isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    ${item.amount.toLocaleString()}
                  </td>
                  <td className={`py-3 px-4 text-right ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.taxRate}%
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${
                    item.taxImpact > 0 ? 'text-green-500' : isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    ${item.taxImpact.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Dividend Income & Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dividend Income */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Dividend Income Breakdown
          </h2>
          <div className="space-y-3">
            {dividendBreakdown.map((div, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  isDark ? 'border-slate-700' : 'border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {div.source}
                  </span>
                  <span className={`font-bold text-green-500`}>
                    ${div.total.toFixed(2)}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className={isDark ? 'text-slate-500' : 'text-slate-400'}>Qualified</p>
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      ${div.qualified.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className={isDark ? 'text-slate-500' : 'text-slate-400'}>Non-Qualified</p>
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      ${div.nonQualified.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t" style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}>
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Total Dividend Income
              </span>
              <span className="text-lg font-bold text-green-500">
                ${dividendBreakdown.reduce((sum, d) => sum + d.total, 0).toFixed(2)}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Tax Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Upcoming Tax Events
          </h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  event.status === 'upcoming'
                    ? isDark ? 'border-orange-500/30 bg-orange-500/5' : 'border-orange-200 bg-orange-50'
                    : isDark ? 'border-slate-700' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className={`w-4 h-4 ${event.status === 'upcoming' ? 'text-orange-500' : isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                      <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {event.event}
                    </h3>
                  </div>
                  {event.amount > 0 && (
                    <div className="text-right">
                      <div className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        ${event.amount.toLocaleString()}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
