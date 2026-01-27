import { motion } from 'framer-motion';
import {
  Users,
  TrendingUp,
  TrendingDown,
  Award,
  Target,
  DollarSign,
  Percent,
  BarChart3,
  Shield,
  Zap,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Eye,
  Filter,
  RefreshCw,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, ZAxis } from 'recharts';

interface PeerComparisonPageProps {
  isDark: boolean;
}

export function PeerComparisonPage({ isDark }: PeerComparisonPageProps) {
  const yourPerformance = {
    returns1Y: -73.7,
    sharpeRatio: -1.73,
    volatility: 42.5,
    maxDrawdown: -83.2,
    diversification: 2.1,
    turnover: 8.5,
    expenseRatio: 0.45,
    portfolioSize: 29600,
  };

  const peerGroups = [
    {
      name: 'Similar Portfolio Size',
      description: '$20K-$50K portfolios',
      members: 1247,
      avgReturns: 12.8,
      percentile: 12,
    },
    {
      name: 'Aggressive Growth',
      description: 'High risk tolerance',
      members: 892,
      avgReturns: 18.4,
      percentile: 8,
    },
    {
      name: 'Moderate Risk',
      description: 'Balanced approach',
      members: 2134,
      avgReturns: 10.2,
      percentile: 15,
    },
  ];

  const performanceMetrics = [
    { metric: '1Y Return', you: -73.7, peer: 12.8, top10: 28.4, percentile: 12 },
    { metric: 'Sharpe Ratio', you: -1.73, peer: 0.68, top10: 1.24, percentile: 8 },
    { metric: 'Volatility', you: 42.5, peer: 18.2, top10: 15.4, percentile: 95 },
    { metric: 'Max Drawdown', you: -83.2, peer: -22.4, top10: -15.2, percentile: 98 },
    { metric: 'Diversification', you: 2.1, peer: 18.5, top10: 32.4, percentile: 5 },
  ];

  const radarData = [
    { metric: 'Returns', you: 12, peer: 75, top: 95, full: 100 },
    { metric: 'Risk Mgmt', you: 15, peer: 70, top: 92, full: 100 },
    { metric: 'Diversification', you: 8, peer: 68, top: 88, full: 100 },
    { metric: 'Consistency', you: 25, peer: 72, top: 90, full: 100 },
    { metric: 'Tax Efficiency', you: 45, peer: 65, top: 85, full: 100 },
  ];

  const topPerformers = [
    {
      rank: 1,
      returns: 42.3,
      strategy: 'Tech Growth',
      allocation: '85% Stocks, 10% Crypto, 5% Cash',
      holdings: 12,
      sharpe: 1.52,
      insight: 'Concentrated in AI/semiconductor stocks, high conviction bets',
    },
    {
      rank: 2,
      returns: 38.7,
      strategy: 'Momentum Trading',
      allocation: '90% Stocks, 10% Options',
      holdings: 8,
      sharpe: 1.38,
      insight: 'Active trading, quick position changes, trend following',
    },
    {
      rank: 3,
      returns: 34.2,
      strategy: 'Quality Growth',
      allocation: '70% Stocks, 20% Bonds, 10% Real Estate',
      holdings: 24,
      sharpe: 1.28,
      insight: 'Blue-chip focus, low turnover, dividend reinvestment',
    },
  ];

  const commonMistakes = [
    {
      mistake: 'Extreme Concentration Risk',
      occurrence: 'You: 83% in one stock | Peer Avg: 12% max position',
      impact: 'High',
      recommendation: 'Reduce largest position to <15% of portfolio',
    },
    {
      mistake: 'Lack of Diversification',
      occurrence: 'You: 2 sectors | Peer Avg: 8 sectors',
      impact: 'Critical',
      recommendation: 'Add exposure to 6-8 different sectors',
    },
    {
      mistake: 'No Defensive Holdings',
      occurrence: 'You: 0% bonds/cash | Peer Avg: 25% defensive',
      impact: 'High',
      recommendation: 'Allocate 20-30% to bonds/dividend stocks',
    },
    {
      mistake: 'Ignoring Stop Losses',
      occurrence: 'You: -80% on DOC | Top Performers: -15% max loss',
      impact: 'Critical',
      recommendation: 'Set stop losses at -15 to -20% on all positions',
    },
  ];

  const bestPractices = [
    {
      practice: 'Regular Rebalancing',
      adoption: 'Top 25%: Quarterly',
      yourStatus: 'Never',
      benefit: '+3.2% annual return',
    },
    {
      practice: 'Tax-Loss Harvesting',
      adoption: 'Top 25%: Active',
      yourStatus: 'Unused',
      benefit: '$24,793 tax savings available',
    },
    {
      practice: 'Position Sizing',
      adoption: 'Top 25%: Max 10% per stock',
      yourStatus: '83% in one stock',
      benefit: '-57% volatility reduction',
    },
    {
      practice: 'Sector Rotation',
      adoption: 'Top 25%: Quarterly review',
      yourStatus: 'Static allocation',
      benefit: '+4.8% annual return',
    },
  ];

  const scatterData = [
    { return: 12.8, risk: 18.2, label: 'Peer Avg', size: 100 },
    { return: -73.7, risk: 42.5, label: 'You', size: 150 },
    { return: 28.4, risk: 15.4, label: 'Top 10%', size: 80 },
    { return: 18.4, risk: 22.1, label: 'Aggressive', size: 60 },
    { return: 10.2, risk: 12.8, label: 'Moderate', size: 60 },
  ];

  const stats = [
    {
      label: 'Overall Rank',
      value: '12th',
      subtext: 'Percentile',
      icon: Award,
      color: '#ef4444',
    },
    {
      label: 'Peer Group',
      value: '1,247',
      subtext: 'Similar investors',
      icon: Users,
      color: '#22d3ee',
    },
    {
      label: 'Gap to Average',
      value: '-86.5%',
      subtext: 'Below peer returns',
      icon: TrendingDown,
      color: '#f59e0b',
    },
    {
      label: 'Improvement Area',
      value: 'Critical',
      subtext: 'Diversification needed',
      icon: Shield,
      color: '#a855f7',
    },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div
              className="p-3 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
              }}
            >
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Peer Comparison
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Compare your portfolio performance against similar investors anonymously
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              <Filter className="w-4 h-4" />
              Change Peer Group
            </button>
            <button
              className="px-4 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                color: '#ffffff',
              }}
            >
              <RefreshCw className="w-5 h-5" />
              Update Comparison
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

      {/* Risk-Return Scatter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Risk vs Return Positioning
        </h2>
        <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Your position compared to peers on the risk-return spectrum
        </p>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
              <XAxis
                type="number"
                dataKey="risk"
                name="Risk (Volatility)"
                stroke={isDark ? '#64748b' : '#94a3b8'}
                style={{ fontSize: '12px' }}
                label={{ value: 'Risk (Volatility %)', position: 'bottom', offset: 0 }}
                domain={[0, 50]}
              />
              <YAxis
                type="number"
                dataKey="return"
                name="Return"
                stroke={isDark ? '#64748b' : '#94a3b8'}
                style={{ fontSize: '12px' }}
                label={{ value: 'Returns (%)', angle: -90, position: 'left' }}
                domain={[-80, 40]}
              />
              <ZAxis type="number" dataKey="size" range={[100, 400]} />
              <Tooltip
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                  borderRadius: '8px',
                }}
                formatter={(value: number, name: string) => {
                  if (name === 'Risk (Volatility)') return [`${value.toFixed(1)}%`, 'Risk'];
                  if (name === 'Return') return [`${value.toFixed(1)}%`, 'Return'];
                  return value;
                }}
              />
              <Scatter name="You" data={scatterData.filter(d => d.label === 'You')} fill="#ef4444" />
              <Scatter name="Peer Avg" data={scatterData.filter(d => d.label === 'Peer Avg')} fill="#22d3ee" />
              <Scatter name="Top 10%" data={scatterData.filter(d => d.label === 'Top 10%')} fill="#10b981" />
              <Scatter name="Others" data={scatterData.filter(d => d.label !== 'You' && d.label !== 'Peer Avg' && d.label !== 'Top 10%')} fill="#94a3b8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Performance Metrics & Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Performance Metrics Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Performance Metrics vs Peers
          </h2>
          <div className="space-y-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {metric.metric}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${
                      metric.percentile <= 25
                        ? 'bg-red-500/20 text-red-500'
                        : metric.percentile <= 50
                        ? 'bg-orange-500/20 text-orange-500'
                        : metric.percentile <= 75
                        ? 'bg-yellow-500/20 text-yellow-500'
                        : 'bg-green-500/20 text-green-500'
                    }`}
                  >
                    {metric.percentile}th percentile
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>You</span>
                      <span className={`font-semibold ${metric.you < 0 || metric.you < metric.peer ? 'text-red-500' : 'text-green-500'}`}>
                        {metric.you.toFixed(1)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>Peer Avg</span>
                      <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {metric.peer.toFixed(1)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>Top 10%</span>
                      <span className="font-semibold text-cyan-500">
                        {metric.top10.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
                {index < performanceMetrics.length - 1 && (
                  <div className="mt-3 border-b" style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Multi-Dimensional Comparison
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
                  name="You"
                  dataKey="you"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Peer Avg"
                  dataKey="peer"
                  stroke="#22d3ee"
                  fill="#22d3ee"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Top 10%"
                  dataKey="top"
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
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>You</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Peer Average</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Top 10%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top Performers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Top Performers in Your Peer Group
        </h2>
        <div className="space-y-4">
          {topPerformers.map((performer, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border ${
                isDark ? 'border-slate-700' : 'border-slate-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: index === 0 ? '#fbbf24' : index === 1 ? '#94a3b8' : '#cd7f32',
                  }}
                >
                  <span className="text-xl font-bold text-white">#{performer.rank}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {performer.strategy}
                    </h3>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-500">
                        +{performer.returns.toFixed(1)}%
                      </div>
                      <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        1Y Return
                      </p>
                    </div>
                  </div>
                  <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {performer.insight}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Allocation
                      </p>
                      <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {performer.allocation}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Holdings
                      </p>
                      <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {performer.holdings}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Sharpe Ratio
                      </p>
                      <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {performer.sharpe}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Common Mistakes & Best Practices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Common Mistakes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Common Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            {commonMistakes.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  isDark ? 'border-red-500/30 bg-red-500/5' : 'border-red-200 bg-red-50'
                }`}
              >
                <div className="flex items-start gap-2 mb-2">
                  <div className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    item.impact === 'Critical' ? 'bg-red-500/20 text-red-500' : 'bg-orange-500/20 text-orange-500'
                  }`}>
                    {item.impact}
                  </div>
                  <h3 className={`flex-1 font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.mistake}
                  </h3>
                </div>
                <p className={`text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.occurrence}
                </p>
                <p className={`text-sm text-cyan-500`}>
                  ✓ {item.recommendation}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Best Practices from Top Performers
          </h2>
          <div className="space-y-4">
            {bestPractices.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  isDark ? 'border-green-500/30 bg-green-500/5' : 'border-green-200 bg-green-50'
                }`}
              >
                <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {item.practice}
                </h3>
                <div className="grid grid-cols-2 gap-2 mb-2 text-sm">
                  <div>
                    <p className={isDark ? 'text-slate-500' : 'text-slate-400'}>
                      Top 25%:
                    </p>
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.adoption}
                    </p>
                  </div>
                  <div>
                    <p className={isDark ? 'text-slate-500' : 'text-slate-400'}>
                      Your Status:
                    </p>
                    <p className="font-semibold text-red-500">
                      {item.yourStatus}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-green-500">
                  💡 Benefit: {item.benefit}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
