import { motion } from 'motion/react';
import {
  Calculator,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  ChevronRight,
  Calendar,
  Award,
  Zap,
  RefreshCw,
  Info,
  Sparkles,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';

interface TaxPlannerPageProps {
  isDark: boolean;
}

export function TaxPlannerPage({ isDark }: TaxPlannerPageProps) {
  const taxProjection = [
    { year: 2026, income: 85000, taxLiability: 11294, effectiveRate: 13.3, savings: 0 },
    { year: 2027, income: 89250, taxLiability: 12045, effectiveRate: 13.5, savings: 0 },
    { year: 2028, income: 93713, taxLiability: 12848, effectiveRate: 13.7, savings: 0 },
    { year: 2029, income: 98398, taxLiability: 13706, effectiveRate: 13.9, savings: 0 },
    { year: 2030, income: 103318, taxLiability: 14622, effectiveRate: 14.2, savings: 0 },
  ];

  const optimizedProjection = [
    { year: 2026, standard: 11294, optimized: 0, savings: 11294 },
    { year: 2027, standard: 12045, optimized: 8432, savings: 3613 },
    { year: 2028, standard: 12848, optimized: 9185, savings: 3663 },
    { year: 2029, standard: 13706, optimized: 10012, savings: 3694 },
    { year: 2030, standard: 14622, optimized: 10925, savings: 3697 },
  ];

  const harvestingStrategy = {
    currentYear: {
      harvestableAmount: 82643.64,
      taxRate: 0.24,
      immediateSavings: 0,
      carryForward: 82643.64,
      usableThisYear: 3000,
      taxBenefit: 720,
    },
    multiYear: [
      { year: 2026, lossUsed: 3000, gainOffset: 0, taxSavings: 720 },
      { year: 2027, lossUsed: 3000, gainOffset: 12000, taxSavings: 3600 },
      { year: 2028, lossUsed: 3000, gainOffset: 14500, taxSavings: 4200 },
      { year: 2029, lossUsed: 3000, gainOffset: 16800, taxSavings: 4752 },
      { year: 2030, lossUsed: 3000, gainOffset: 18500, taxSavings: 5130 },
    ],
  };

  const washSaleRisks = [
    {
      ticker: 'DOC',
      lastSaleDate: null,
      washSaleWindow: false,
      recommendation: 'Clear to harvest - no wash sale risk',
      status: 'safe',
    },
    {
      ticker: 'SXL',
      lastSaleDate: null,
      washSaleWindow: false,
      recommendation: 'Clear to harvest - no wash sale risk',
      status: 'safe',
    },
    {
      ticker: 'PLTR',
      lastSaleDate: '2024-12-15',
      washSaleWindow: true,
      recommendation: 'Wait until Jan 15, 2025 to avoid wash sale',
      status: 'warning',
    },
  ];

  const taxOptimizationStrategies = [
    {
      id: '1',
      strategy: 'Max Out Tax-Loss Harvesting',
      impact: 'High',
      priority: 'critical',
      description: 'Harvest $82,643 in losses from DOC and SXL immediately. Use $3,000 against ordinary income this year, carry forward remainder.',
      implementation: [
        'Sell DOC position to realize $74,937 loss',
        'Sell SXL position to realize $7,636 loss',
        'Wait 31 days before repurchasing (wash sale rule)',
        'Use $3,000 to offset ordinary income',
        'Carry forward $79,643 for future years',
      ],
      expectedSavings: '24,793',
      timeframe: 'Implement before Dec 31, 2026',
      confidence: 98,
    },
    {
      id: '2',
      strategy: 'Contribute to Tax-Advantaged Accounts',
      impact: 'High',
      priority: 'high',
      description: 'Max out 401(k), IRA, and HSA contributions to reduce taxable income by $28,750 annually.',
      implementation: [
        'Contribute $23,000 to 401(k) (2026 limit)',
        'Contribute $7,000 to Traditional IRA',
        'Contribute $4,150 to HSA (family)',
        'Consider backdoor Roth if income allows',
      ],
      expectedSavings: '6,900',
      timeframe: 'Throughout 2026',
      confidence: 95,
    },
    {
      id: '3',
      strategy: 'Optimize Asset Location',
      impact: 'Medium',
      priority: 'medium',
      description: 'Place high-dividend stocks in tax-advantaged accounts, growth stocks in taxable accounts for long-term capital gains treatment.',
      implementation: [
        'Move dividend-paying stocks to IRA/401(k)',
        'Keep growth stocks in taxable account',
        'Place bonds in tax-deferred accounts',
        'Consider municipal bonds for taxable accounts',
      ],
      expectedSavings: '1,850',
      timeframe: 'Ongoing optimization',
      confidence: 82,
    },
    {
      id: '4',
      strategy: 'Strategic Charitable Giving',
      impact: 'Medium',
      priority: 'medium',
      description: 'Donate appreciated securities directly to charity to avoid capital gains and get deduction.',
      implementation: [
        'Identify appreciated positions for donation',
        'Donate securities directly (avoid selling first)',
        'Consider Donor Advised Fund for flexibility',
        'Document all donations properly',
      ],
      expectedSavings: '2,400',
      timeframe: 'Before Dec 31 annually',
      confidence: 88,
    },
    {
      id: '5',
      strategy: 'Qualified Small Business Stock (QSBS)',
      impact: 'Low',
      priority: 'low',
      description: 'If holding QSBS for 5+ years, up to $10M in gains can be excluded from federal tax.',
      implementation: [
        'Identify any QSBS holdings',
        'Verify 5-year holding period',
        'Confirm company qualifications',
        'Plan exit strategy for tax efficiency',
      ],
      expectedSavings: '500',
      timeframe: 'Long-term planning',
      confidence: 65,
    },
  ];

  const bracketAnalysis = [
    { bracket: '10%', income: '0-11,600', current: 1160, optimized: 1160, filled: 100 },
    { bracket: '12%', income: '11,601-47,150', current: 4266, optimized: 4266, filled: 100 },
    { bracket: '22%', income: '47,151-100,525', current: 5868, optimized: 1006, filled: 45 },
    { bracket: '24%', income: '100,526-191,950', current: 0, optimized: 0, filled: 0 },
    { bracket: '32%', income: '191,951-243,725', current: 0, optimized: 0, filled: 0 },
  ];

  const stats = [
    {
      label: '5-Year Tax Savings',
      value: '$25,961',
      subtext: 'With optimization',
      icon: Award,
      color: '#10b981',
    },
    {
      label: 'Loss Carryforward',
      value: '$79,644',
      subtext: 'After 2026 usage',
      icon: TrendingDown,
      color: '#22d3ee',
    },
    {
      label: 'Effective Tax Rate',
      value: '13.3%',
      subtext: 'Current (24% marginal)',
      icon: Percent,
      color: '#f59e0b',
    },
    {
      label: 'Optimization Score',
      value: '42/100',
      subtext: 'Room for improvement',
      icon: Target,
      color: '#ef4444',
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
                Tax Planner
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Strategic tax planning tools and multi-year projections
              </p>
            </div>
          </div>
          <button
            className="px-4 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
              color: '#ffffff',
            }}
          >
            <RefreshCw className="w-5 h-5" />
            Recalculate
          </button>
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

      {/* 5-Year Tax Projection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          5-Year Tax Liability Projection (With vs Without Optimization)
        </h2>
        <div className="h-80 mb-4" style={{ minHeight: '320px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={optimizedProjection}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
              <XAxis
                dataKey="year"
                stroke={isDark ? '#64748b' : '#94a3b8'}
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke={isDark ? '#64748b' : '#94a3b8'}
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                  borderRadius: '8px',
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
              />
              <Bar dataKey="standard" fill="#ef4444" name="Without Optimization" radius={[4, 4, 0, 0]} />
              <Bar dataKey="optimized" fill="#10b981" name="With Optimization" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {optimizedProjection.map((year) => (
            <div
              key={year.year}
              className="p-3 rounded-lg text-center"
              style={{ background: isDark ? '#1e293b' : '#f8fafc' }}
            >
              <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {year.year}
              </p>
              <p className="text-sm font-bold text-green-500">
                ${year.savings.toLocaleString()}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                saved
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tax-Loss Harvesting Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-cyan-500" />
          <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Multi-Year Tax-Loss Harvesting Strategy
          </h2>
        </div>

        <div
          className={`p-5 rounded-xl mb-6 ${
            isDark ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-cyan-50 border border-cyan-200'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <p className={`text-sm mb-2 ${isDark ? 'text-cyan-300' : 'text-cyan-900'}`}>
                Total Harvestable Losses
              </p>
              <p className="text-2xl font-bold text-cyan-500">
                ${harvestingStrategy.currentYear.harvestableAmount.toLocaleString()}
              </p>
            </div>
            <div>
              <p className={`text-sm mb-2 ${isDark ? 'text-cyan-300' : 'text-cyan-900'}`}>
                Usable in 2026
              </p>
              <p className="text-2xl font-bold text-cyan-500">
                ${harvestingStrategy.currentYear.usableThisYear.toLocaleString()}
              </p>
            </div>
            <div>
              <p className={`text-sm mb-2 ${isDark ? 'text-cyan-300' : 'text-cyan-900'}`}>
                Carry Forward to 2027+
              </p>
              <p className="text-2xl font-bold text-cyan-500">
                ${harvestingStrategy.currentYear.carryForward.toLocaleString()}
              </p>
            </div>
          </div>
          <p className={`text-sm ${isDark ? 'text-cyan-300' : 'text-cyan-900'}`}>
            <strong>Strategy:</strong> You can use $3,000 per year to offset ordinary income. The remaining $79,643 
            will carry forward indefinitely to offset future capital gains, potentially saving you $24,793 over the next 5 years.
          </p>
        </div>

        <h3 className={`text-sm font-bold mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Year-by-Year Tax Savings Projection
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <th className={`text-left py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Year
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Loss Used
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Gains Offset
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Tax Savings
                </th>
              </tr>
            </thead>
            <tbody>
              {harvestingStrategy.multiYear.map((year, index) => (
                <tr
                  key={index}
                  className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
                >
                  <td className={`py-3 px-4 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {year.year}
                  </td>
                  <td className={`py-3 px-4 text-right ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    ${year.lossUsed.toLocaleString()}
                  </td>
                  <td className={`py-3 px-4 text-right ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    ${year.gainOffset.toLocaleString()}
                  </td>
                  <td className={`py-3 px-4 text-right font-bold text-green-500`}>
                    ${year.taxSavings.toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className={`border-t-2 ${isDark ? 'border-slate-600' : 'border-slate-300'}`}>
                <td className={`py-3 px-4 font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Total
                </td>
                <td className={`py-3 px-4 text-right font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ${harvestingStrategy.multiYear.reduce((sum, y) => sum + y.lossUsed, 0).toLocaleString()}
                </td>
                <td className={`py-3 px-4 text-right font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ${harvestingStrategy.multiYear.reduce((sum, y) => sum + y.gainOffset, 0).toLocaleString()}
                </td>
                <td className={`py-3 px-4 text-right font-bold text-green-500 text-lg`}>
                  ${harvestingStrategy.multiYear.reduce((sum, y) => sum + y.taxSavings, 0).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Wash Sale Detection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Wash Sale Detection
          </h2>
        </div>
        <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Wash sale rule: Can't claim a loss if you buy the same security within 30 days before or after the sale
        </p>
        <div className="space-y-3">
          {washSaleRisks.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                item.status === 'warning'
                  ? isDark ? 'border-orange-500/30 bg-orange-500/5' : 'border-orange-200 bg-orange-50'
                  : isDark ? 'border-green-500/30 bg-green-500/5' : 'border-green-200 bg-green-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.ticker}
                    </span>
                    {item.status === 'safe' ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                    )}
                  </div>
                  <p className={`text-sm ${
                    item.status === 'warning'
                      ? isDark ? 'text-orange-300' : 'text-orange-900'
                      : isDark ? 'text-green-300' : 'text-green-900'
                  }`}>
                    {item.recommendation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tax Optimization Strategies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            AI-Recommended Tax Optimization Strategies
          </h2>
        </div>

        <div className="space-y-4">
          {taxOptimizationStrategies.map((strategy, index) => (
            <motion.div
              key={strategy.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-5 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ${
                isDark ? 'border-slate-700 hover:bg-slate-700/50' : 'border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs px-2 py-0.5 rounded font-semibold uppercase"
                      style={{
                        background: `${getPriorityColor(strategy.priority)}20`,
                        color: getPriorityColor(strategy.priority),
                      }}
                    >
                      {strategy.priority}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                      {strategy.impact} Impact
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-500">
                      {strategy.confidence}% Confidence
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {strategy.strategy}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {strategy.description}
                  </p>
                </div>
                <div className="text-right ml-4">
                  <div className="text-2xl font-bold text-green-500 mb-1">
                    ${strategy.expectedSavings}
                  </div>
                  <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Expected Savings
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Implementation Steps:
                </p>
                <div className="space-y-2">
                  {strategy.implementation.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                          <span className="text-xs font-bold text-cyan-500">{idx + 1}</span>
                        </div>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}>
                <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {strategy.timeframe}
                </span>
                <button
                  className="px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all hover:scale-[1.02]"
                  style={{
                    background: `${getPriorityColor(strategy.priority)}15`,
                    color: getPriorityColor(strategy.priority),
                  }}
                >
                  Implement Strategy
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Add missing icon
import { Percent } from 'lucide-react';