import { motion } from 'motion/react';
import {
  Map,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Cloud,
  Zap,
  Target,
  DollarSign,
  Percent,
  ChevronRight,
  Play,
  BarChart3,
  Activity,
  Clock,
  Shield,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

interface FutureScenariosPageProps {
  isDark: boolean;
}

export function FutureScenariosPage({ isDark }: FutureScenariosPageProps) {
  const scenarios = [
    {
      id: '1',
      name: 'Bull Market Recovery',
      type: 'optimistic',
      probability: 35,
      icon: TrendingUp,
      color: '#10b981',
      description: 'Strong economic recovery with low inflation, Fed pivot to rate cuts, and robust earnings growth',
      timeframe: '12-18 months',
      triggers: ['Fed rate cuts begin Q2 2026', 'Inflation drops below 2.5%', 'Corporate earnings beat by 10%'],
      portfolioImpact: {
        value: 42850,
        change: 44.8,
        worstCase: 38200,
        bestCase: 48500,
      },
      sectorPerformance: [
        { sector: 'Technology', impact: '+52%', confidence: 88 },
        { sector: 'Consumer Discretionary', impact: '+38%', confidence: 82 },
        { sector: 'Financials', impact: '+28%', confidence: 75 },
        { sector: 'Healthcare', impact: '+22%', confidence: 78 },
      ],
      keyMetrics: {
        sp500: '+32%',
        volatility: '14-18%',
        interestRates: '3.5-4.0%',
        inflation: '2.0-2.5%',
      },
    },
    {
      id: '2',
      name: 'Sideways Consolidation',
      type: 'neutral',
      probability: 42,
      icon: Activity,
      color: '#f59e0b',
      description: 'Markets trade in range as economic data remains mixed. Moderate growth with sticky inflation',
      timeframe: '6-12 months',
      triggers: ['GDP growth 1.5-2.5%', 'Unemployment 4-4.5%', 'Inflation 3-4%'],
      portfolioImpact: {
        value: 32450,
        change: 9.6,
        worstCase: 28900,
        bestCase: 35200,
      },
      sectorPerformance: [
        { sector: 'Utilities', impact: '+12%', confidence: 85 },
        { sector: 'Consumer Staples', impact: '+8%', confidence: 82 },
        { sector: 'Healthcare', impact: '+6%', confidence: 80 },
        { sector: 'Technology', impact: '+4%', confidence: 68 },
      ],
      keyMetrics: {
        sp500: '+6-10%',
        volatility: '16-22%',
        interestRates: '4.5-5.0%',
        inflation: '3.0-4.0%',
      },
    },
    {
      id: '3',
      name: 'Recession & Market Correction',
      type: 'pessimistic',
      probability: 23,
      icon: TrendingDown,
      color: '#ef4444',
      description: 'Economic contraction triggered by persistent high rates, leading to earnings recession and market drawdown',
      timeframe: '3-9 months',
      triggers: ['Fed keeps rates >5.5%', 'Earnings recession begins', 'Unemployment rises to 5.5%'],
      portfolioImpact: {
        value: 18750,
        change: -36.7,
        worstCase: 14200,
        bestCase: 22400,
      },
      sectorPerformance: [
        { sector: 'Technology', impact: '-42%', confidence: 78 },
        { sector: 'Consumer Discretionary', impact: '-38%', confidence: 82 },
        { sector: 'Financials', impact: '-32%', confidence: 75 },
        { sector: 'Healthcare', impact: '-18%', confidence: 72 },
      ],
      keyMetrics: {
        sp500: '-25 to -35%',
        volatility: '28-38%',
        interestRates: '5.0-5.5%',
        inflation: '4.0-5.0%',
      },
    },
  ];

  const monteCarloResults = [
    { percentile: '10th', value: 15200, label: 'Worst Case' },
    { percentile: '25th', value: 22500, label: 'Below Average' },
    { percentile: '50th', value: 31200, label: 'Median' },
    { percentile: '75th', value: 38900, label: 'Above Average' },
    { percentile: '90th', value: 46500, label: 'Best Case' },
  ];

  const projectionData = [
    { month: 'Now', bull: 29600, neutral: 29600, bear: 29600 },
    { month: 'Mar', bull: 31200, neutral: 30100, bear: 27800 },
    { month: 'Jun', bull: 33500, neutral: 30400, bear: 25200 },
    { month: 'Sep', bull: 36200, neutral: 30900, bear: 22500 },
    { month: 'Dec', bull: 39100, neutral: 31500, bear: 20100 },
    { month: 'Mar 27', bull: 42850, neutral: 32450, bear: 18750 },
  ];

  const stressTests = [
    {
      event: 'Tech Sector Crash (-30%)',
      impact: -12.5,
      value: 25900,
      recovery: '8-12 months',
      probability: 15,
    },
    {
      event: 'Interest Rate Spike (+2%)',
      impact: -18.3,
      value: 24200,
      recovery: '12-18 months',
      probability: 22,
    },
    {
      event: 'Geopolitical Crisis',
      impact: -25.8,
      value: 21950,
      recovery: '18-24 months',
      probability: 12,
    },
    {
      event: 'Banking System Shock',
      impact: -32.4,
      value: 20000,
      recovery: '24-36 months',
      probability: 8,
    },
  ];

  const stats = [
    {
      label: 'Most Likely Outcome',
      value: '$32,450',
      subtext: 'Sideways (42% prob)',
      icon: Activity,
      color: '#f59e0b',
    },
    {
      label: 'Expected Value',
      value: '$31,200',
      subtext: 'Probability-weighted',
      icon: Target,
      color: '#22d3ee',
    },
    {
      label: 'Upside Potential',
      value: '+44.8%',
      subtext: 'Bull scenario',
      icon: TrendingUp,
      color: '#10b981',
    },
    {
      label: 'Downside Risk',
      value: '-36.7%',
      subtext: 'Bear scenario',
      icon: Shield,
      color: '#ef4444',
    },
  ];

  const getScenarioIcon = (type: string) => {
    switch (type) {
      case 'optimistic':
        return TrendingUp;
      case 'pessimistic':
        return TrendingDown;
      default:
        return Activity;
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
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
              }}
            >
              <Map className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Future Scenarios
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Model different market scenarios and their impact on your portfolio
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
            Run New Simulation
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

      {/* Scenario Projection Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Portfolio Value Projection - Three Scenarios
        </h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={projectionData}>
              <defs>
                <linearGradient id="bullGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="neutralGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="bearGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
              <XAxis
                dataKey="month"
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
              <Area
                type="monotone"
                dataKey="bull"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#bullGradient)"
                name="Bull Market"
              />
              <Area
                type="monotone"
                dataKey="neutral"
                stroke="#f59e0b"
                strokeWidth={2}
                fill="url(#neutralGradient)"
                name="Sideways"
              />
              <Area
                type="monotone"
                dataKey="bear"
                stroke="#ef4444"
                strokeWidth={2}
                fill="url(#bearGradient)"
                name="Recession"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Bull Market (35%)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Sideways (42%)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Recession (23%)
            </span>
          </div>
        </div>
      </motion.div>

      {/* Scenario Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {scenarios.map((scenario, index) => {
          const Icon = scenario.icon;
          return (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] ${
                isDark ? 'border-slate-700 hover:bg-slate-700/50' : 'border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: `${scenario.color}20`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: scenario.color }} />
                </div>
                <div className="text-right">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: scenario.color }}
                  >
                    {scenario.probability}%
                  </div>
                  <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Probability
                  </p>
                </div>
              </div>

              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {scenario.name}
              </h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {scenario.description}
              </p>

              <div className="mb-4 p-3 rounded-lg"
                style={{
                  background: isDark ? '#1e293b' : '#f8fafc',
                }}
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    ${scenario.portfolioImpact.value.toLocaleString()}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      scenario.portfolioImpact.change >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {scenario.portfolioImpact.change >= 0 ? '+' : ''}
                    {scenario.portfolioImpact.change.toFixed(1)}%
                  </span>
                </div>
                <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  Portfolio Value ({scenario.timeframe})
                </p>
              </div>

              <div className="mb-4">
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Key Triggers:
                </p>
                <div className="space-y-1">
                  {scenario.triggers.map((trigger, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                      <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {trigger}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Top Sector Performance:
                </p>
                <div className="space-y-1">
                  {scenario.sectorPerformance.slice(0, 3).map((sector, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        {sector.sector}
                      </span>
                      <span
                        className={`font-semibold ${
                          sector.impact.startsWith('+') ? 'text-green-500' : 'text-red-500'
                        }`}
                      >
                        {sector.impact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="w-full px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
                style={{
                  background: `${scenario.color}15`,
                  color: scenario.color,
                }}
              >
                View Full Details
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Monte Carlo & Stress Tests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monte Carlo Simulation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Monte Carlo Simulation
            </h2>
          </div>
          <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            10,000 simulations run to model portfolio outcomes over 12 months
          </p>

          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monteCarloResults}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
                <XAxis
                  dataKey="percentile"
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
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                />
                <Bar dataKey="value" fill="#22d3ee" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2">
            {monteCarloResults.map((result, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2 rounded"
                style={{
                  background: isDark ? '#1e293b' : '#f8fafc',
                }}
              >
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {result.label}
                </span>
                <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ${result.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stress Tests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Stress Test Scenarios
            </h2>
          </div>
          <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            How your portfolio would perform in extreme market events
          </p>

          <div className="space-y-4">
            {stressTests.map((test, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg border ${
                  isDark ? 'border-slate-700' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className={`text-sm font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {test.event}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-500">
                        {test.probability}% probability
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-500">
                      {test.impact.toFixed(1)}%
                    </div>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Impact
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Portfolio Value
                    </p>
                    <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      ${test.value.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Recovery Time
                    </p>
                    <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {test.recovery}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
