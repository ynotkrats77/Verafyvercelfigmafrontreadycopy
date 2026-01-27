import { motion } from 'framer-motion';
import {
  Zap,
  TrendingUp,
  TrendingDown,
  Target,
  DollarSign,
  Percent,
  ChevronRight,
  Star,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  Activity,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Search,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface MarketOpportunityPageProps {
  isDark: boolean;
}

export function MarketOpportunityPage({ isDark }: MarketOpportunityPageProps) {
  const opportunities = [
    {
      id: '1',
      ticker: 'TSLA',
      name: 'Tesla Inc.',
      type: 'Oversold Recovery',
      score: 92,
      currentPrice: 238.45,
      targetPrice: 295.00,
      potentialGain: 23.71,
      confidence: 'High',
      timeframe: '2-3 months',
      catalysts: ['Q4 delivery numbers', 'FSD Beta expansion', 'Energy segment growth'],
      technicalSignals: {
        rsi: 28.5,
        macd: 'Bullish crossover',
        volume: '+45% above avg',
        trend: 'Oversold bounce',
      },
      fundamentals: {
        peRatio: 58.3,
        revenue: '+37% YoY',
        margins: '18.2%',
        cashFlow: 'Strong',
      },
      aiInsight: 'Price dropped 15% on temporary production concerns, creating entry opportunity. Strong Q4 delivery outlook.',
      risk: 'Medium',
    },
    {
      id: '2',
      ticker: 'AMD',
      name: 'Advanced Micro Devices',
      type: 'Sector Rotation',
      score: 88,
      currentPrice: 142.30,
      targetPrice: 178.50,
      potentialGain: 25.44,
      confidence: 'High',
      timeframe: '1-2 months',
      catalysts: ['Data center growth', 'AI chip demand', 'Market share gains'],
      technicalSignals: {
        rsi: 45.2,
        macd: 'Neutral',
        volume: 'Above average',
        trend: 'Consolidation breakout',
      },
      fundamentals: {
        peRatio: 42.1,
        revenue: '+54% YoY',
        margins: '22.8%',
        cashFlow: 'Improving',
      },
      aiInsight: 'AI chip demand accelerating. Strong positioning vs competitors. Institutional accumulation detected.',
      risk: 'Low-Medium',
    },
    {
      id: '3',
      ticker: 'SNOW',
      name: 'Snowflake Inc.',
      type: 'Growth at Discount',
      score: 85,
      currentPrice: 185.60,
      targetPrice: 240.00,
      potentialGain: 29.31,
      confidence: 'Medium-High',
      timeframe: '3-4 months',
      catalysts: ['Enterprise adoption', 'Cloud migration trend', 'Product innovation'],
      technicalSignals: {
        rsi: 52.8,
        macd: 'Building momentum',
        volume: 'Steady',
        trend: 'Uptrend formation',
      },
      fundamentals: {
        peRatio: 0,
        revenue: '+48% YoY',
        margins: 'Expanding',
        cashFlow: 'Neutral',
      },
      aiInsight: 'Trading below growth peers despite similar fundamentals. Enterprise pipeline expanding rapidly.',
      risk: 'Medium',
    },
    {
      id: '4',
      ticker: 'DKNG',
      name: 'DraftKings Inc.',
      type: 'Regulatory Tailwind',
      score: 81,
      currentPrice: 31.25,
      targetPrice: 42.00,
      potentialGain: 34.40,
      confidence: 'Medium',
      timeframe: '4-6 months',
      catalysts: ['State legalization', 'Seasonal strength', 'Market consolidation'],
      technicalSignals: {
        rsi: 58.3,
        macd: 'Positive',
        volume: 'Increasing',
        trend: 'Early uptrend',
      },
      fundamentals: {
        peRatio: 0,
        revenue: '+62% YoY',
        margins: 'Improving',
        cashFlow: 'Path to profitability',
      },
      aiInsight: 'New state regulations favorable. Seasonal strength ahead. User growth accelerating.',
      risk: 'Medium-High',
    },
    {
      id: '5',
      ticker: 'SHOP',
      name: 'Shopify Inc.',
      type: 'E-commerce Recovery',
      score: 79,
      currentPrice: 68.90,
      targetPrice: 88.00,
      potentialGain: 27.72,
      confidence: 'Medium',
      timeframe: '3-5 months',
      catalysts: ['Holiday season', 'SMB recovery', 'International expansion'],
      technicalSignals: {
        rsi: 48.5,
        macd: 'Neutral to bullish',
        volume: 'Average',
        trend: 'Basing pattern',
      },
      fundamentals: {
        peRatio: 0,
        revenue: '+26% YoY',
        margins: '15.3%',
        cashFlow: 'Positive',
      },
      aiInsight: 'E-commerce normalizing post-pandemic. Strong merchant retention and international growth.',
      risk: 'Medium',
    },
    {
      id: '6',
      ticker: 'SQ',
      name: 'Block Inc.',
      type: 'Undervalued Fintech',
      score: 76,
      currentPrice: 62.15,
      targetPrice: 82.00,
      potentialGain: 31.94,
      confidence: 'Medium',
      timeframe: '4-6 months',
      catalysts: ['Bitcoin adoption', 'Cash App growth', 'Afterpay integration'],
      technicalSignals: {
        rsi: 44.2,
        macd: 'Building base',
        volume: 'Below average',
        trend: 'Accumulation phase',
      },
      fundamentals: {
        peRatio: 0,
        revenue: '+24% YoY',
        margins: '12.1%',
        cashFlow: 'Improving',
      },
      aiInsight: 'Trading at multi-year low valuation. Strong ecosystem growth. Bitcoin exposure as potential catalyst.',
      risk: 'Medium-High',
    },
  ];

  const sectors = [
    { sector: 'Technology', score: 85, trend: 'up', opportunities: 12, color: '#3b82f6' },
    { sector: 'Healthcare', score: 72, trend: 'up', opportunities: 8, color: '#10b981' },
    { sector: 'Financials', score: 68, trend: 'neutral', opportunities: 6, color: '#f59e0b' },
    { sector: 'Consumer', score: 64, trend: 'down', opportunities: 4, color: '#ef4444' },
    { sector: 'Energy', score: 58, trend: 'down', opportunities: 3, color: '#8b5cf6' },
  ];

  const scoreDistribution = [
    { range: '90-100', count: 3 },
    { range: '80-89', count: 8 },
    { range: '70-79', count: 12 },
    { range: '60-69', count: 7 },
    { range: '50-59', count: 4 },
  ];

  const stats = [
    {
      label: 'Total Opportunities',
      value: '34',
      subtext: 'Across all sectors',
      icon: Target,
      color: '#22d3ee',
      change: '+6 this week',
    },
    {
      label: 'Avg Score',
      value: '76.2',
      subtext: 'High confidence range',
      icon: Star,
      color: '#f59e0b',
      change: '+2.3 pts',
    },
    {
      label: 'Potential Upside',
      value: '+28.4%',
      subtext: 'Weighted average',
      icon: TrendingUp,
      color: '#10b981',
      change: 'vs market +8.2%',
    },
    {
      label: 'High Confidence',
      value: '18',
      subtext: 'Score 80+',
      icon: CheckCircle,
      color: '#a855f7',
      change: '11 new signals',
    },
  ];

  const radarData = [
    { metric: 'Technical', value: 82 },
    { metric: 'Fundamental', value: 75 },
    { metric: 'Sentiment', value: 68 },
    { metric: 'Momentum', value: 78 },
    { metric: 'Value', value: 71 },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 85) return '#10b981';
    if (score >= 75) return '#22d3ee';
    if (score >= 65) return '#f59e0b';
    return '#94a3b8';
  };

  const getConfidenceColor = (confidence: string) => {
    if (confidence === 'High') return '#10b981';
    if (confidence === 'Medium-High') return '#22d3ee';
    if (confidence === 'Medium') return '#f59e0b';
    return '#ef4444';
  };

  const getRiskColor = (risk: string) => {
    if (risk === 'Low' || risk === 'Low-Medium') return '#10b981';
    if (risk === 'Medium') return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="p-3 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            }}
          >
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Market Opportunity Scanner
            </h1>
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              AI-powered analysis of high-potential investment opportunities
            </p>
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
              <p className="text-xs text-cyan-500 mt-2">
                {stat.change}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Filters and Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Sector Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Sector Breakdown
          </h2>
          <div className="space-y-4">
            {sectors.map((sector, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: sector.color }}
                    />
                    <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {sector.sector}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {sector.opportunities} opps
                    </span>
                    {sector.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                    {sector.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
                    {sector.trend === 'neutral' && <Activity className="w-4 h-4 text-slate-400" />}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${sector.score}%`,
                        background: sector.color,
                      }}
                    />
                  </div>
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {sector.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Score Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Opportunity Score Distribution
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scoreDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
                <XAxis
                  dataKey="range"
                  stroke={isDark ? '#64748b' : '#94a3b8'}
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke={isDark ? '#64748b' : '#94a3b8'}
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1e293b' : '#ffffff',
                    border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="count" fill="#22d3ee" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Top Opportunities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Top Opportunities
          </h2>
          <div className="flex items-center gap-2">
            <button
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-5 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ${
                isDark ? 'border-slate-700 hover:bg-slate-700/50' : 'border-slate-200 hover:bg-slate-50'
              }`}
            >
              {/* Header Row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="px-3 py-1 rounded-full text-sm font-bold"
                      style={{
                        background: `${getScoreColor(opp.score)}20`,
                        color: getScoreColor(opp.score),
                      }}
                    >
                      {opp.score} Score
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                      {opp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {opp.ticker}
                    </h3>
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {opp.name}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 text-green-500 text-xl font-bold mb-1">
                    <ArrowUpRight className="w-5 h-5" />
                    {opp.potentialGain.toFixed(2)}%
                  </div>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Target: ${opp.targetPrice.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* AI Insight */}
              <div
                className={`p-3 rounded-lg mb-4 ${
                  isDark ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-cyan-50 border border-cyan-200'
                }`}
              >
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <p className={`text-sm ${isDark ? 'text-cyan-300' : 'text-cyan-900'}`}>
                    <span className="font-semibold">AI Insight:</span> {opp.aiInsight}
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Current Price
                  </p>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    ${opp.currentPrice.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Confidence
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: getConfidenceColor(opp.confidence) }}
                  >
                    {opp.confidence}
                  </p>
                </div>
                <div>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Timeframe
                  </p>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {opp.timeframe}
                  </p>
                </div>
                <div>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Risk Level
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: getRiskColor(opp.risk) }}
                  >
                    {opp.risk}
                  </p>
                </div>
              </div>

              {/* Catalysts */}
              <div className="mb-4">
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Key Catalysts
                </p>
                <div className="flex flex-wrap gap-2">
                  {opp.catalysts.map((catalyst, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 rounded text-xs ${
                        isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {catalyst}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical & Fundamental Signals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    isDark ? 'bg-slate-700/30' : 'bg-slate-50'
                  }`}
                >
                  <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Technical Signals
                  </p>
                  <div className="space-y-1">
                    {Object.entries(opp.technicalSignals).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between text-xs">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                          {key.toUpperCase()}:
                        </span>
                        <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`p-3 rounded-lg ${
                    isDark ? 'bg-slate-700/30' : 'bg-slate-50'
                  }`}
                >
                  <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Fundamentals
                  </p>
                  <div className="space-y-1">
                    {Object.entries(opp.fundamentals).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between text-xs">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                          {key === 'peRatio' ? 'P/E' : key === 'revenue' ? 'Revenue' : key === 'margins' ? 'Margins' : 'Cash Flow'}:
                        </span>
                        <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                className="w-full mt-4 px-4 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                  color: '#ffffff',
                }}
              >
                View Detailed Analysis
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
