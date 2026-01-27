import { motion } from 'motion/react';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Target,
  Zap,
  ChevronRight,
  Download,
  RefreshCw,
  Info,
  Award,
  Clock,
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface CapitalGainsPageProps {
  isDark: boolean;
}

export function CapitalGainsPage({ isDark }: CapitalGainsPageProps) {
  const positions = [
    {
      ticker: 'DOC',
      quantity: 500,
      purchaseDate: '2020-03-15',
      costBasis: 90000.00,
      currentValue: 15062.80,
      unrealizedGL: -74937.20,
      unrealizedPercent: -83.26,
      holdingPeriod: 'Long-term',
      taxBenefit: 11240.58,
      harvestPriority: 'critical',
      recommendation: 'Harvest immediately - $11,241 tax savings available',
    },
    {
      ticker: 'SXL',
      quantity: 182,
      purchaseDate: '2021-08-20',
      costBasis: 14070.00,
      currentValue: 6433.56,
      unrealizedGL: -7636.44,
      unrealizedPercent: -54.28,
      holdingPeriod: 'Long-term',
      taxBenefit: 1145.47,
      harvestPriority: 'high',
      recommendation: 'Strong candidate for harvesting - $1,145 tax savings',
    },
    {
      ticker: 'VOO',
      quantity: 15,
      purchaseDate: '2022-01-10',
      costBasis: 6525.00,
      currentValue: 7515.00,
      unrealizedGL: 990.00,
      unrealizedPercent: 15.17,
      holdingPeriod: 'Long-term',
      taxBenefit: 0,
      harvestPriority: null,
      recommendation: 'Hold - unrealized gain, no harvest benefit',
    },
    {
      ticker: 'VTI',
      quantity: 8,
      purchaseDate: '2022-06-15',
      costBasis: 1840.00,
      currentValue: 2096.00,
      unrealizedGL: 256.00,
      unrealizedPercent: 13.91,
      holdingPeriod: 'Long-term',
      taxBenefit: 0,
      harvestPriority: null,
      recommendation: 'Hold - unrealized gain, no harvest benefit',
    },
    {
      ticker: 'AAPL',
      quantity: 25,
      purchaseDate: '2023-03-20',
      costBasis: 4350.00,
      currentValue: 4736.25,
      unrealizedGL: 386.25,
      unrealizedPercent: 8.88,
      holdingPeriod: 'Long-term',
      taxBenefit: 0,
      harvestPriority: null,
      recommendation: 'Hold - unrealized gain, no harvest benefit',
    },
    {
      ticker: 'PLTR',
      quantity: 10,
      purchaseDate: '2024-11-18',
      costBasis: 715.00,
      currentValue: 645.14,
      unrealizedGL: -69.86,
      unrealizedPercent: -9.77,
      holdingPeriod: 'Short-term',
      taxBenefit: 16.77,
      harvestPriority: 'low',
      recommendation: 'Optional - minor tax benefit ($17)',
    },
  ];

  const realizedTransactions = [
    {
      date: '2026-01-15',
      ticker: 'TSLA',
      type: 'sale',
      quantity: 5,
      proceeds: 1185.50,
      costBasis: 1420.00,
      realizedGL: -234.50,
      holdingPeriod: 'Short-term',
      taxImpact: 56.28,
    },
    {
      date: '2026-02-20',
      ticker: 'NVDA',
      type: 'sale',
      quantity: 3,
      proceeds: 1425.00,
      costBasis: 1536.80,
      realizedGL: -111.80,
      holdingPeriod: 'Short-term',
      taxImpact: 26.83,
    },
    {
      date: '2026-03-10',
      ticker: 'MSFT',
      type: 'sale',
      quantity: 4,
      proceeds: 1456.00,
      costBasis: 1686.00,
      realizedGL: -230.00,
      holdingPeriod: 'Long-term',
      taxImpact: 34.50,
    },
  ];

  const gainsLossesSummary = {
    shortTerm: {
      realized: -346.30,
      unrealized: -69.86,
      total: -416.16,
    },
    longTerm: {
      realized: -230.00,
      unrealized: -82573.64,
      total: -82803.64,
    },
    netPosition: -83219.80,
  };

  const harvestingOpportunities = [
    {
      category: 'Immediate Harvest',
      positions: ['DOC', 'SXL'],
      totalLoss: 82573.64,
      taxSavings: 12386.05,
      description: 'High-priority positions with significant losses',
    },
    {
      category: 'Optional Harvest',
      positions: ['PLTR'],
      totalLoss: 69.86,
      taxSavings: 16.77,
      description: 'Minor positions with small tax benefit',
    },
  ];

  const offsetCalculator = {
    availableLosses: 82643.64,
    currentYearGains: 0,
    offsetAgainstOrdinaryIncome: 3000,
    carryForward: 79643.64,
    potentialOffsetValue: 24793.09,
  };

  const taxRateBreakdown = [
    { type: 'Short-term gains', rate: 24, amount: 0, tax: 0 },
    { type: 'Long-term gains', rate: 15, amount: 0, tax: 0 },
    { type: 'Ordinary income offset', rate: 24, amount: -3000, tax: -720 },
  ];

  const stats = [
    {
      label: 'Net Unrealized',
      value: '-$82,644',
      subtext: 'Total potential harvest',
      icon: TrendingDown,
      color: '#ef4444',
    },
    {
      label: 'Tax Savings Available',
      value: '$24,793',
      subtext: 'From loss harvesting',
      icon: Award,
      color: '#10b981',
    },
    {
      label: 'Realized YTD',
      value: '-$576',
      subtext: 'Capital losses',
      icon: DollarSign,
      color: '#f59e0b',
    },
    {
      label: 'Days Remaining',
      value: '188',
      subtext: 'Until Dec 31, 2026',
      icon: Clock,
      color: '#22d3ee',
    },
  ];

  const gainsLossesData = [
    { name: 'ST Realized', value: Math.abs(gainsLossesSummary.shortTerm.realized), color: '#ef4444' },
    { name: 'ST Unrealized', value: Math.abs(gainsLossesSummary.shortTerm.unrealized), color: '#f97316' },
    { name: 'LT Realized', value: Math.abs(gainsLossesSummary.longTerm.realized), color: '#f59e0b' },
    { name: 'LT Unrealized', value: Math.abs(gainsLossesSummary.longTerm.unrealized), color: '#fbbf24' },
  ];

  const getPriorityColor = (priority: string | null) => {
    if (!priority) return '#64748b';
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
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Capital Gains Summary & Tax-Loss Harvesting
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Track gains/losses and identify tax optimization opportunities
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
              Export CSV
            </button>
            <button
              className="px-4 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                color: '#ffffff',
              }}
            >
              <RefreshCw className="w-5 h-5" />
              Refresh Prices
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

      {/* Harvesting Alert */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-orange-500/10 border-orange-500/30' : 'bg-orange-50 border-orange-200'
        }`}
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-orange-500/20">
            <Zap className="w-6 h-6 text-orange-500" />
          </div>
          <div className="flex-1">
            <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              $82,644 in Tax-Loss Harvesting Opportunities Available
            </h3>
            <p className={`text-sm mb-3 ${isDark ? 'text-orange-300' : 'text-orange-900'}`}>
              You have significant unrealized losses in DOC (-$74,937) and SXL (-$7,636). Harvesting these losses before year-end could save you $24,793 in taxes over the next 5 years.
            </p>
            <div className="flex items-center gap-3">
              <button
                className="px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all"
                style={{
                  background: '#f9731620',
                  color: '#f97316',
                }}
              >
                View Harvest Plan
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-900'
                }`}
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gains/Losses Summary & Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Summary Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Gains & Losses Summary
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className={`text-sm font-semibold mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Short-Term (≤ 1 year)
              </h3>
              <div className="space-y-2 pl-4">
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Realized
                  </span>
                  <span className={`text-sm font-semibold ${gainsLossesSummary.shortTerm.realized < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    ${gainsLossesSummary.shortTerm.realized.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Unrealized
                  </span>
                  <span className={`text-sm font-semibold ${gainsLossesSummary.shortTerm.unrealized < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    ${gainsLossesSummary.shortTerm.unrealized.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}>
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Subtotal
                  </span>
                  <span className={`text-sm font-bold ${gainsLossesSummary.shortTerm.total < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    ${gainsLossesSummary.shortTerm.total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-sm font-semibold mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Long-Term (&gt; 1 year)
              </h3>
              <div className="space-y-2 pl-4">
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Realized
                  </span>
                  <span className={`text-sm font-semibold ${gainsLossesSummary.longTerm.realized < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    ${gainsLossesSummary.longTerm.realized.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Unrealized
                  </span>
                  <span className={`text-sm font-semibold ${gainsLossesSummary.longTerm.unrealized < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    ${gainsLossesSummary.longTerm.unrealized.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}>
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Subtotal
                  </span>
                  <span className={`text-sm font-bold ${gainsLossesSummary.longTerm.total < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    ${gainsLossesSummary.longTerm.total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t-2" style={{ borderColor: isDark ? '#475569' : '#cbd5e1' }}>
              <div className="flex items-center justify-between">
                <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Net Position
                </span>
                <span className={`text-xl font-bold ${gainsLossesSummary.netPosition < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  ${gainsLossesSummary.netPosition.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Loss Distribution
          </h2>
          <div className="h-64" style={{ minHeight: '256px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={gainsLossesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {gainsLossesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1e293b' : '#ffffff',
                    border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                    borderRadius: '8px',
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {gainsLossesData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Unrealized Positions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Unrealized Positions - Harvesting Candidates
        </h2>
        <div className="space-y-3">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-xl border ${
                position.harvestPriority
                  ? isDark ? 'border-orange-500/30 bg-orange-500/5' : 'border-orange-200 bg-orange-50'
                  : isDark ? 'border-slate-700' : 'border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {position.ticker}
                    </h3>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      position.holdingPeriod === 'Long-term'
                        ? 'bg-blue-500/20 text-blue-500'
                        : 'bg-purple-500/20 text-purple-500'
                    }`}>
                      {position.holdingPeriod}
                    </span>
                    {position.harvestPriority && (
                      <span
                        className="text-xs px-2 py-0.5 rounded font-semibold uppercase"
                        style={{
                          background: `${getPriorityColor(position.harvestPriority)}20`,
                          color: getPriorityColor(position.harvestPriority),
                        }}
                      >
                        {position.harvestPriority}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm mb-3 ${
                    position.harvestPriority
                      ? isDark ? 'text-orange-300' : 'text-orange-900'
                      : isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {position.recommendation}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Purchase Date
                      </p>
                      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {new Date(position.purchaseDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Cost Basis
                      </p>
                      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        ${position.costBasis.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Current Value
                      </p>
                      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        ${position.currentValue.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Unrealized G/L
                      </p>
                      <p className={`text-sm font-semibold ${position.unrealizedGL < 0 ? 'text-red-500' : 'text-green-500'}`}>
                        ${position.unrealizedGL.toLocaleString()} ({position.unrealizedPercent.toFixed(1)}%)
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Tax Benefit
                      </p>
                      <p className={`text-sm font-semibold ${position.taxBenefit > 0 ? 'text-green-500' : isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {position.taxBenefit > 0 ? `$${position.taxBenefit.toLocaleString()}` : 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Realized Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Realized Transactions (2026 YTD)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <th className={`text-left py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Date
                </th>
                <th className={`text-left py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Ticker
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Proceeds
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Cost Basis
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Gain/Loss
                </th>
                <th className={`text-left py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Term
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Tax Impact
                </th>
              </tr>
            </thead>
            <tbody>
              {realizedTransactions.map((txn, index) => (
                <tr
                  key={index}
                  className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
                >
                  <td className={`py-3 px-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {new Date(txn.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </td>
                  <td className={`py-3 px-4 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {txn.ticker}
                  </td>
                  <td className={`py-3 px-4 text-right ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    ${txn.proceeds.toLocaleString()}
                  </td>
                  <td className={`py-3 px-4 text-right ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    ${txn.costBasis.toLocaleString()}
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${
                    txn.realizedGL < 0 ? 'text-red-500' : 'text-green-500'
                  }`}>
                    ${txn.realizedGL.toLocaleString()}
                  </td>
                  <td className={`py-3 px-4 text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {txn.holdingPeriod}
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold text-green-500`}>
                    ${txn.taxImpact.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}