import { motion } from 'framer-motion';
import {
  Activity,
  TrendingUp,
  TrendingDown,
  Shield,
  Target,
  AlertTriangle,
  Info,
  Award,
  BarChart3,
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  BarChart,
  Bar,
} from 'recharts';

interface RiskAdjustedPerformancePageProps {
  isDark: boolean;
}

export function RiskAdjustedPerformancePage({ isDark }: RiskAdjustedPerformancePageProps) {
  // Key Risk Metrics
  const riskMetrics = {
    sharpeRatio: 0.42,
    sortinoRatio: 0.58,
    alpha: -2.3,
    beta: 1.15,
    volatility: 28.4,
    maxDrawdown: -42.7,
    informationRatio: -0.18,
    trackingError: 8.2,
  };

  // Risk-Return Data for Scatter Plot
  const riskReturnData = [
    { name: 'Your Portfolio', risk: 28.4, return: -12.5, size: 110000 },
    { name: 'S&P 500', risk: 18.2, return: 18.5, size: 150000 },
    { name: 'Nasdaq', risk: 22.5, return: 24.2, size: 140000 },
    { name: 'Bonds', risk: 6.5, return: 4.2, size: 80000 },
  ];

  // Rolling Sharpe Ratio
  const rollingSharpeData = [
    { month: 'Jan', sharpe: 0.85, benchmark: 1.12 },
    { month: 'Feb', sharpe: 0.72, benchmark: 1.08 },
    { month: 'Mar', sharpe: 0.58, benchmark: 1.15 },
    { month: 'Apr', sharpe: 0.45, benchmark: 1.20 },
    { month: 'May', sharpe: 0.38, benchmark: 1.18 },
    { month: 'Jun', sharpe: 0.42, benchmark: 1.22 },
  ];

  // Drawdown History
  const drawdownData = [
    { date: 'Jan', drawdown: 0 },
    { date: 'Feb', drawdown: -5.2 },
    { date: 'Mar', drawdown: -12.8 },
    { date: 'Apr', drawdown: -28.4 },
    { date: 'May', drawdown: -42.7 },
    { date: 'Jun', drawdown: -38.2 },
  ];

  // Risk Breakdown by Asset
  const assetRiskContribution = [
    { ticker: 'DOC', contribution: 72.5, volatility: 45.2, allocation: 83 },
    { ticker: 'SXL', contribution: 15.3, volatility: 38.1, allocation: 8 },
    { ticker: 'AAPL', contribution: 8.2, volatility: 22.4, allocation: 5 },
    { ticker: 'Others', contribution: 4.0, volatility: 18.5, allocation: 4 },
  ];

  const getMetricColor = (value: number, metric: string) => {
    switch (metric) {
      case 'sharpe':
      case 'sortino':
        return value > 1 ? '#22c55e' : value > 0.5 ? '#f97316' : '#ef4444';
      case 'alpha':
        return value > 0 ? '#22c55e' : '#ef4444';
      case 'beta':
        return value < 1.1 ? '#22c55e' : value < 1.3 ? '#f97316' : '#ef4444';
      case 'volatility':
        return value < 15 ? '#22c55e' : value < 25 ? '#f97316' : '#ef4444';
      case 'drawdown':
        return value > -15 ? '#22c55e' : value > -30 ? '#f97316' : '#ef4444';
      default:
        return '#94a3b8';
    }
  };

  const getMetricStatus = (value: number, metric: string) => {
    switch (metric) {
      case 'sharpe':
        return value > 1 ? 'Excellent' : value > 0.5 ? 'Fair' : 'Poor';
      case 'alpha':
        return value > 0 ? 'Outperforming' : 'Underperforming';
      case 'beta':
        return value < 1.1 ? 'Low Risk' : value < 1.3 ? 'Moderate' : 'High Risk';
      case 'volatility':
        return value < 15 ? 'Low' : value < 25 ? 'Moderate' : 'High';
      case 'drawdown':
        return value > -15 ? 'Manageable' : value > -30 ? 'Significant' : 'Severe';
      default:
        return 'N/A';
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="p-3 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              }}
            >
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Risk-Adjusted Performance
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Evaluate returns relative to risk taken - beyond simple gains
              </p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold" style={{
                background: 'rgba(59, 130, 246, 0.1)',
                color: '#3b82f6',
              }}>
                Standard
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Sharpe Ratio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Sharpe Ratio
            </span>
            <Award className="w-5 h-5" style={{ color: getMetricColor(riskMetrics.sharpeRatio, 'sharpe') }} />
          </div>
          <p className={`text-3xl font-bold mb-1`} style={{ color: getMetricColor(riskMetrics.sharpeRatio, 'sharpe') }}>
            {riskMetrics.sharpeRatio.toFixed(2)}
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            {getMetricStatus(riskMetrics.sharpeRatio, 'sharpe')}
          </p>
          <p className={`text-xs mt-2 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            Return per unit of risk
          </p>
        </motion.div>

        {/* Sortino Ratio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Sortino Ratio
            </span>
            <Target className="w-5 h-5" style={{ color: getMetricColor(riskMetrics.sortinoRatio, 'sharpe') }} />
          </div>
          <p className={`text-3xl font-bold mb-1`} style={{ color: getMetricColor(riskMetrics.sortinoRatio, 'sharpe') }}>
            {riskMetrics.sortinoRatio.toFixed(2)}
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            {getMetricStatus(riskMetrics.sortinoRatio, 'sharpe')}
          </p>
          <p className={`text-xs mt-2 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            Downside risk focus
          </p>
        </motion.div>

        {/* Alpha */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Alpha (α)
            </span>
            {riskMetrics.alpha < 0 ? (
              <TrendingDown className="w-5 h-5 text-red-500" />
            ) : (
              <TrendingUp className="w-5 h-5 text-green-500" />
            )}
          </div>
          <p className={`text-3xl font-bold mb-1`} style={{ color: getMetricColor(riskMetrics.alpha, 'alpha') }}>
            {riskMetrics.alpha > 0 ? '+' : ''}{riskMetrics.alpha.toFixed(1)}%
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            {getMetricStatus(riskMetrics.alpha, 'alpha')}
          </p>
          <p className={`text-xs mt-2 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            vs S&P 500 benchmark
          </p>
        </motion.div>

        {/* Beta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Beta (β)
            </span>
            <Shield className="w-5 h-5" style={{ color: getMetricColor(riskMetrics.beta, 'beta') }} />
          </div>
          <p className={`text-3xl font-bold mb-1`} style={{ color: getMetricColor(riskMetrics.beta, 'beta') }}>
            {riskMetrics.beta.toFixed(2)}
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            {getMetricStatus(riskMetrics.beta, 'beta')}
          </p>
          <p className={`text-xs mt-2 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            Market correlation
          </p>
        </motion.div>

        {/* Volatility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Volatility (σ)
            </span>
            <Activity className="w-5 h-5" style={{ color: getMetricColor(riskMetrics.volatility, 'volatility') }} />
          </div>
          <p className={`text-3xl font-bold mb-1`} style={{ color: getMetricColor(riskMetrics.volatility, 'volatility') }}>
            {riskMetrics.volatility.toFixed(1)}%
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            {getMetricStatus(riskMetrics.volatility, 'volatility')}
          </p>
          <p className={`text-xs mt-2 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            Annualized std dev
          </p>
        </motion.div>

        {/* Max Drawdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Max Drawdown
            </span>
            <AlertTriangle className="w-5 h-5" style={{ color: getMetricColor(riskMetrics.maxDrawdown, 'drawdown') }} />
          </div>
          <p className={`text-3xl font-bold mb-1`} style={{ color: getMetricColor(riskMetrics.maxDrawdown, 'drawdown') }}>
            {riskMetrics.maxDrawdown.toFixed(1)}%
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            {getMetricStatus(riskMetrics.maxDrawdown, 'drawdown')}
          </p>
          <p className={`text-xs mt-2 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            Peak to trough
          </p>
        </motion.div>

        {/* Information Ratio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Information Ratio
            </span>
            <BarChart3 className="w-5 h-5" style={{ color: getMetricColor(riskMetrics.informationRatio, 'sharpe') }} />
          </div>
          <p className={`text-3xl font-bold mb-1`} style={{ color: getMetricColor(riskMetrics.informationRatio, 'sharpe') }}>
            {riskMetrics.informationRatio.toFixed(2)}
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            Below benchmark
          </p>
          <p className={`text-xs mt-2 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            Active return quality
          </p>
        </motion.div>

        {/* Tracking Error */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Tracking Error
            </span>
            <Info className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
          </div>
          <p className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {riskMetrics.trackingError.toFixed(1)}%
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            Moderate deviation
          </p>
          <p className={`text-xs mt-2 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            vs benchmark
          </p>
        </motion.div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Risk-Return Scatter */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Risk vs Return Analysis
          </h2>
          <div style={{ minHeight: '320px', height: '320px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
                <XAxis
                  type="number"
                  dataKey="risk"
                  name="Risk (Volatility)"
                  unit="%"
                  stroke={isDark ? '#64748b' : '#94a3b8'}
                  label={{ value: 'Risk (Volatility %)', position: 'bottom', fill: isDark ? '#94a3b8' : '#64748b' }}
                />
                <YAxis
                  type="number"
                  dataKey="return"
                  name="Return"
                  unit="%"
                  stroke={isDark ? '#64748b' : '#94a3b8'}
                  label={{ value: 'Return %', angle: -90, position: 'left', fill: isDark ? '#94a3b8' : '#64748b' }}
                />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: isDark ? '#1e293b' : '#ffffff',
                    border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                    borderRadius: '8px',
                  }}
                />
                <ReferenceLine y={0} stroke="#64748b" strokeDasharray="3 3" />
                <Scatter name="Assets" data={riskReturnData} fill="#22d3ee">
                  {riskReturnData.map((entry, index) => (
                    <circle
                      key={index}
                      r={entry.name === 'Your Portfolio' ? 12 : 8}
                      fill={entry.name === 'Your Portfolio' ? '#ef4444' : '#22d3ee'}
                      opacity={0.8}
                    />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {riskReturnData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: item.name === 'Your Portfolio' ? '#ef4444' : '#22d3ee' }}
                />
                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Rolling Sharpe Ratio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            6-Month Rolling Sharpe Ratio
          </h2>
          <div style={{ minHeight: '320px', height: '320px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={rollingSharpeData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
                <XAxis
                  dataKey="month"
                  stroke={isDark ? '#64748b' : '#94a3b8'}
                />
                <YAxis stroke={isDark ? '#64748b' : '#94a3b8'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1e293b' : '#ffffff',
                    border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <ReferenceLine y={1} stroke="#64748b" strokeDasharray="3 3" label="Target" />
                <Line
                  type="monotone"
                  dataKey="sharpe"
                  stroke="#ef4444"
                  strokeWidth={3}
                  name="Your Portfolio"
                  dot={{ fill: '#ef4444', r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="benchmark"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  name="S&P 500"
                  dot={{ fill: '#22d3ee', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Drawdown Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`p-6 rounded-xl border mb-6 ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Drawdown History
        </h2>
        <div style={{ minHeight: '280px', height: '280px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={drawdownData}>
              <defs>
                <linearGradient id="drawdownGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
              <XAxis dataKey="date" stroke={isDark ? '#64748b' : '#94a3b8'} />
              <YAxis
                stroke={isDark ? '#64748b' : '#94a3b8'}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                  borderRadius: '8px',
                }}
                formatter={(value: number) => `${value.toFixed(1)}%`}
              />
              <ReferenceLine y={0} stroke="#64748b" strokeDasharray="3 3" />
              <Area
                type="monotone"
                dataKey="drawdown"
                stroke="#ef4444"
                strokeWidth={2}
                fill="url(#drawdownGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Risk Contribution by Holding */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className={`p-6 rounded-xl border mb-6 ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Risk Contribution by Holding
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Ticker
                </th>
                <th className={`text-right py-3 px-4 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Allocation
                </th>
                <th className={`text-right py-3 px-4 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Volatility
                </th>
                <th className={`text-right py-3 px-4 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Risk Contribution
                </th>
                <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Visual
                </th>
              </tr>
            </thead>
            <tbody>
              {assetRiskContribution.map((asset, index) => (
                <tr
                  key={index}
                  className={`border-b ${isDark ? 'border-slate-700/50' : 'border-slate-100'}`}
                >
                  <td className={`py-4 px-4 font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    {asset.ticker}
                  </td>
                  <td className={`py-4 px-4 text-right ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {asset.allocation}%
                  </td>
                  <td className={`py-4 px-4 text-right ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {asset.volatility.toFixed(1)}%
                  </td>
                  <td className={`py-4 px-4 text-right font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {asset.contribution.toFixed(1)}%
                  </td>
                  <td className="py-4 px-4">
                    <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${asset.contribution}%`,
                          background: asset.contribution > 50 ? '#ef4444' : asset.contribution > 20 ? '#f97316' : '#22d3ee',
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Key Insights & Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30' : 'bg-red-50 border-red-200'
        }`}
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Risk-Adjusted Performance Analysis
            </h3>
            <div className={`space-y-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">•</span>
                <div>
                  <strong>Poor Risk-Adjusted Returns:</strong> Your Sharpe ratio of 0.42 indicates you're getting very low returns relative to the risk you're taking. The benchmark achieves 1.22 with lower volatility.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">•</span>
                <div>
                  <strong>Negative Alpha:</strong> Your portfolio is underperforming the market by -2.3% after adjusting for risk. This suggests poor stock selection or timing.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">•</span>
                <div>
                  <strong>High Volatility:</strong> At 28.4% volatility vs market's 18.2%, your portfolio is 56% more volatile. DOC contributes 72.5% of total portfolio risk despite recent poor performance.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">•</span>
                <div>
                  <strong>Severe Drawdown:</strong> The -42.7% maximum drawdown is extreme and indicates insufficient risk management. Recovery from this level requires +74% gain just to break even.
                </div>
              </div>
            </div>
            <div className={`mt-4 p-4 rounded-lg ${isDark ? 'bg-slate-900/50' : 'bg-white/50'}`}>
              <p className={`font-semibold mb-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                Recommended Actions:
              </p>
              <ol className={`space-y-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>1. Reduce DOC position to lower portfolio volatility and risk concentration</li>
                <li>2. Consider adding defensive assets (bonds, dividend aristocrats) to improve Sharpe ratio</li>
                <li>3. Implement stop-loss strategies to prevent further drawdowns</li>
                <li>4. Diversify across uncorrelated assets to reduce beta and tracking error</li>
              </ol>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
