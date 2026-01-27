import { motion } from 'framer-motion';
import {
  Sparkles,
  Brain,
  TrendingUp,
  TrendingDown,
  Target,
  DollarSign,
  Percent,
  RefreshCw,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Zap,
  BarChart3,
  PieChart,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Shield,
  Award,
  Clock,
  Lightbulb,
} from 'lucide-react';
import { PieChart as RechartPie, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface AIStrategyPageProps {
  isDark: boolean;
}

export function AIStrategyPage({ isDark }: AIStrategyPageProps) {
  const portfolioScore = {
    overall: 68,
    diversification: 42,
    riskAdjusted: 75,
    taxEfficiency: 58,
    costEfficiency: 82,
    alignment: 71,
  };

  const currentAllocation = [
    { name: 'DOC', value: 83.2, color: '#ef4444' },
    { name: 'SXL', value: 12.8, color: '#f97316' },
    { name: 'Others', value: 4.0, color: '#22d3ee' },
  ];

  const recommendedAllocation = [
    { name: 'Large Cap Growth', value: 35, color: '#3b82f6' },
    { name: 'Large Cap Value', value: 20, color: '#10b981' },
    { name: 'Mid Cap', value: 15, color: '#f59e0b' },
    { name: 'Small Cap', value: 10, color: '#a855f7' },
    { name: 'International', value: 10, color: '#22d3ee' },
    { name: 'Bonds', value: 7, color: '#64748b' },
    { name: 'Alternatives', value: 3, color: '#ec4899' },
  ];

  const optimizationActions = [
    {
      id: '1',
      priority: 'critical',
      action: 'Reduce DOC Concentration',
      impact: 'Risk Reduction',
      description: 'DOC represents 83% of your portfolio, creating extreme concentration risk. Recommended to reduce to max 15% allocation.',
      currentValue: '83.2%',
      targetValue: '12-15%',
      steps: [
        'Sell $17,500 of DOC over next 30 days',
        'Use proceeds to diversify into 5-7 positions',
        'Consider tax-loss harvesting on underwater positions',
      ],
      projectedImprovement: '+18 Portfolio Score',
      confidence: 95,
    },
    {
      id: '2',
      priority: 'high',
      action: 'Add Defensive Holdings',
      impact: 'Volatility Reduction',
      description: 'Portfolio lacks defensive positions. Adding bonds and dividend stocks would reduce volatility by 25% while maintaining 80% of upside potential.',
      currentValue: '0%',
      targetValue: '20-25%',
      steps: [
        'Allocate $4,000 to bond ETFs (AGG, BND)',
        'Add $3,000 to dividend aristocrats (JNJ, PG, KO)',
        'Consider utility sector exposure (XLU)',
      ],
      projectedImprovement: '+12 Portfolio Score',
      confidence: 88,
    },
    {
      id: '3',
      priority: 'medium',
      action: 'Rebalance Sector Exposure',
      impact: 'Diversification',
      description: 'Heavy concentration in healthcare (DOC) and education tech (SXL). Recommend diversifying across 8-10 sectors for optimal risk-adjusted returns.',
      currentValue: '2 sectors',
      targetValue: '8-10 sectors',
      steps: [
        'Add technology exposure (AAPL, MSFT)',
        'Include financial sector (JPM, V)',
        'Add consumer staples for stability',
      ],
      projectedImprovement: '+8 Portfolio Score',
      confidence: 82,
    },
    {
      id: '4',
      priority: 'medium',
      action: 'Optimize Tax Efficiency',
      impact: 'Tax Savings',
      description: 'Harvest $82,643 in tax losses from DOC and SXL. Can offset gains and reduce taxable income by up to $3,000 annually.',
      currentValue: '$0 harvested',
      targetValue: '$82,643',
      steps: [
        'Harvest losses on DOC (-$74,937)',
        'Harvest losses on SXL (-$7,636)',
        'Wait 31 days before repurchasing (wash sale rule)',
      ],
      projectedImprovement: '$24,793 tax savings',
      confidence: 92,
    },
    {
      id: '5',
      priority: 'low',
      action: 'Reduce Portfolio Costs',
      impact: 'Cost Savings',
      description: 'Switch to low-cost index ETFs where possible. Annual expense ratio reduction from 0.45% to 0.08% saves $110/year on current portfolio.',
      currentValue: '0.45% ER',
      targetValue: '0.08% ER',
      steps: [
        'Compare current holdings to equivalent ETFs',
        'Consider VTI, VOO for broad market exposure',
        'Use Fidelity/Vanguard zero-fee funds',
      ],
      projectedImprovement: '$110/year savings',
      confidence: 75,
    },
  ];

  const projectedPerformance = [
    { period: 'Current', return: -73.7, risk: 42.5 },
    { period: 'Optimized', return: 12.8, risk: 18.2 },
    { period: 'Benchmark', return: 10.5, risk: 15.8 },
  ];

  const performanceMetrics = [
    { metric: 'Return', current: -73.7, optimized: 12.8, benchmark: 10.5 },
    { metric: 'Risk (Vol)', current: 42.5, optimized: 18.2, benchmark: 15.8 },
    { metric: 'Sharpe Ratio', current: -1.73, optimized: 0.70, benchmark: 0.66 },
    { metric: 'Max Drawdown', current: -83.2, optimized: -22.4, benchmark: -18.5 },
  ];

  const radarData = [
    { metric: 'Diversification', current: 42, optimized: 88, full: 100 },
    { metric: 'Risk-Adjusted', current: 75, optimized: 92, full: 100 },
    { metric: 'Tax Efficiency', current: 58, optimized: 85, full: 100 },
    { metric: 'Cost Efficiency', current: 82, optimized: 95, full: 100 },
    { metric: 'Goal Alignment', current: 71, optimized: 89, full: 100 },
  ];

  const stats = [
    {
      label: 'Portfolio Score',
      value: '68/100',
      subtext: 'Below optimal',
      icon: Target,
      color: '#f59e0b',
      change: '+32 potential',
    },
    {
      label: 'Optimization Potential',
      value: '+86.5%',
      subtext: 'Expected improvement',
      icon: TrendingUp,
      color: '#10b981',
      change: 'vs current -73.7%',
    },
    {
      label: 'Risk Reduction',
      value: '-57%',
      subtext: 'Volatility decrease',
      icon: Shield,
      color: '#22d3ee',
      change: '42.5% → 18.2%',
    },
    {
      label: 'Confidence',
      value: '89%',
      subtext: 'AI model confidence',
      icon: Brain,
      color: '#a855f7',
      change: 'High certainty',
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
                background: 'linear-gradient(135deg, #a855f7, #9333ea)',
              }}
            >
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                AI Strategy Insights & Portfolio Optimization
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                AI-powered analysis and actionable recommendations to optimize your portfolio
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
            Refresh Analysis
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
              <p className="text-xs text-cyan-500 mt-2">
                {stat.change}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Portfolio Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Current vs Optimized Allocation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Current vs Recommended Allocation
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className={`text-sm font-semibold mb-3 text-center ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Current (High Risk)
              </p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartPie>
                    <Pie
                      data={currentAllocation}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {currentAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </RechartPie>
                </ResponsiveContainer>
              </div>
              <div className="space-y-1">
                {currentAllocation.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{item.name}</span>
                    </div>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.value.toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className={`text-sm font-semibold mb-3 text-center ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Recommended (Optimized)
              </p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartPie>
                    <Pie
                      data={recommendedAllocation}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {recommendedAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </RechartPie>
                </ResponsiveContainer>
              </div>
              <div className="space-y-1">
                {recommendedAllocation.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{item.name}</span>
                    </div>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Score Radar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Portfolio Health Dimensions
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke={isDark ? '#334155' : '#e2e8f0'} />
                <PolarAngleAxis
                  dataKey="metric"
                  stroke={isDark ? '#64748b' : '#94a3b8'}
                  style={{ fontSize: '12px' }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  stroke={isDark ? '#64748b' : '#94a3b8'}
                  style={{ fontSize: '10px' }}
                />
                <Radar
                  name="Current"
                  dataKey="current"
                  stroke="#f59e0b"
                  fill="#f59e0b"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Optimized"
                  dataKey="optimized"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.3}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1e293b' : '#ffffff',
                    border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                    borderRadius: '8px',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Current Portfolio
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Optimized Portfolio
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Performance Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Expected Performance Improvement
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <th className={`text-left py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Metric
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Current Portfolio
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Optimized Portfolio
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Market Benchmark
                </th>
                <th className={`text-right py-3 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Improvement
                </th>
              </tr>
            </thead>
            <tbody>
              {performanceMetrics.map((metric, index) => (
                <tr
                  key={index}
                  className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
                >
                  <td className={`py-3 px-4 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {metric.metric}
                  </td>
                  <td className={`py-3 px-4 text-right ${metric.current < 0 ? 'text-red-500' : isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {metric.current.toFixed(1)}%
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${metric.optimized > metric.benchmark ? 'text-green-500' : 'text-cyan-500'}`}>
                    {metric.optimized.toFixed(1)}%
                  </td>
                  <td className={`py-3 px-4 text-right ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {metric.benchmark.toFixed(1)}%
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${metric.optimized > metric.current ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.optimized > metric.current ? '+' : ''}
                    {(metric.optimized - metric.current).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Optimization Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-5 h-5 text-purple-500" />
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            AI-Recommended Actions
          </h2>
          <span className={`text-sm px-2 py-1 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
            {optimizationActions.length} recommendations
          </span>
        </div>

        <div className="space-y-4">
          {optimizationActions.map((action, index) => (
            <motion.div
              key={action.id}
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
                    <div
                      className="px-3 py-1 rounded-full text-xs font-bold uppercase"
                      style={{
                        background: `${getPriorityColor(action.priority)}20`,
                        color: getPriorityColor(action.priority),
                      }}
                    >
                      {action.priority} Priority
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                      {action.impact}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-500">
                      {action.confidence}% Confidence
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {action.action}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {action.description}
                  </p>
                </div>
                <div className="text-right ml-4">
                  <div className="text-xl font-bold text-green-500 mb-1">
                    {action.projectedImprovement}
                  </div>
                  <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Expected Impact
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 p-3 rounded-lg"
                style={{
                  background: isDark ? '#1e293b' : '#f8fafc',
                }}
              >
                <div>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Current
                  </p>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {action.currentValue}
                  </p>
                </div>
                <div>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Target
                  </p>
                  <p className="text-sm font-semibold text-green-500">
                    {action.targetValue}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Implementation Steps:
                </p>
                <div className="space-y-2">
                  {action.steps.map((step, idx) => (
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

              <button
                className="w-full px-4 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                  color: '#ffffff',
                }}
              >
                Implement This Action
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
