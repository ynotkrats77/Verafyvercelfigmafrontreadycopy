import { motion } from 'motion/react';
import {
  Sparkles,
  TrendingUp,
  TrendingDown,
  Target,
  DollarSign,
  Percent,
  Star,
  Award,
  Shield,
  Zap,
  Brain,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Activity,
  BarChart3,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  RefreshCw,
  BookOpen,
  TrendingUp as Growth,
} from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface StockPickersPageProps {
  isDark: boolean;
}

export function StockPickersPage({ isDark }: StockPickersPageProps) {
  const aiPicks = [
    {
      id: '1',
      ticker: 'NVDA',
      name: 'NVIDIA Corporation',
      currentPrice: 495.20,
      targetPrice: 625.00,
      potentialReturn: 26.21,
      confidence: 94,
      timeframe: '6-9 months',
      risk: 'Low-Medium',
      style: 'Growth',
      aiReasoning: 'AI chip demand accelerating. Data center revenue growing 3x YoY. GPU shortage creating pricing power. Strong partnerships with cloud providers.',
      catalysts: ['Q4 earnings beat expected', 'New GPU launch', 'AI infrastructure demand', 'Cloud partnerships'],
      technicals: {
        trend: 'Strong Uptrend',
        momentum: 'Positive',
        support: '$475',
        resistance: '$510',
      },
      fundamentals: {
        revenueGrowth: 206,
        profitMargin: 53.2,
        roe: 88.4,
        debtToEquity: 0.18,
      },
      analystConsensus: {
        buy: 28,
        hold: 4,
        sell: 0,
        avgTarget: 580,
      },
      matchScore: {
        growth: 98,
        value: 45,
        momentum: 92,
        quality: 88,
        sentiment: 95,
      },
    },
    {
      id: '2',
      ticker: 'MSFT',
      name: 'Microsoft Corporation',
      currentPrice: 367.80,
      targetPrice: 450.00,
      potentialReturn: 22.35,
      confidence: 91,
      timeframe: '9-12 months',
      risk: 'Low',
      style: 'Quality Growth',
      aiReasoning: 'Cloud Azure revenue growing 30% YoY. AI Copilot adoption exceeding expectations. Office 365 user growth accelerating. Strong enterprise moat.',
      catalysts: ['Azure growth acceleration', 'AI Copilot revenue', 'Enterprise adoption', 'Gaming expansion'],
      technicals: {
        trend: 'Uptrend',
        momentum: 'Steady',
        support: '$350',
        resistance: '$380',
      },
      fundamentals: {
        revenueGrowth: 13,
        profitMargin: 42.1,
        roe: 45.2,
        debtToEquity: 0.28,
      },
      analystConsensus: {
        buy: 31,
        hold: 6,
        sell: 1,
        avgTarget: 425,
      },
      matchScore: {
        growth: 82,
        value: 68,
        momentum: 78,
        quality: 96,
        sentiment: 89,
      },
    },
    {
      id: '3',
      ticker: 'SHOP',
      name: 'Shopify Inc.',
      currentPrice: 68.90,
      targetPrice: 95.00,
      potentialReturn: 37.88,
      confidence: 78,
      timeframe: '6-12 months',
      risk: 'Medium',
      style: 'Recovery Play',
      aiReasoning: 'E-commerce stabilizing post-pandemic. Merchant growth reaccelerating. International expansion showing promise. Valuation attractive vs peers.',
      catalysts: ['Holiday season strength', 'Merchant growth', 'B2B expansion', 'International markets'],
      technicals: {
        trend: 'Basing Pattern',
        momentum: 'Building',
        support: '$65',
        resistance: '$75',
      },
      fundamentals: {
        revenueGrowth: 26,
        profitMargin: 15.3,
        roe: 12.4,
        debtToEquity: 0.08,
      },
      analystConsensus: {
        buy: 18,
        hold: 14,
        sell: 3,
        avgTarget: 85,
      },
      matchScore: {
        growth: 75,
        value: 82,
        momentum: 65,
        quality: 71,
        sentiment: 68,
      },
    },
    {
      id: '4',
      ticker: 'CRWD',
      name: 'CrowdStrike Holdings',
      currentPrice: 245.80,
      targetPrice: 320.00,
      potentialReturn: 30.18,
      confidence: 88,
      timeframe: '6-9 months',
      risk: 'Medium',
      style: 'Growth',
      aiReasoning: 'Cybersecurity demand surging. Platform adoption accelerating. Strong net retention rate (123%). Enterprise customer growth solid.',
      catalysts: ['Security breaches driving demand', 'Platform expansion', 'Enterprise wins', 'International growth'],
      technicals: {
        trend: 'Strong Uptrend',
        momentum: 'Very Positive',
        support: '$230',
        resistance: '$260',
      },
      fundamentals: {
        revenueGrowth: 52,
        profitMargin: 18.8,
        roe: 28.5,
        debtToEquity: 0.15,
      },
      analystConsensus: {
        buy: 26,
        hold: 8,
        sell: 1,
        avgTarget: 295,
      },
      matchScore: {
        growth: 94,
        value: 52,
        momentum: 88,
        quality: 84,
        sentiment: 91,
      },
    },
    {
      id: '5',
      ticker: 'DKNG',
      name: 'DraftKings Inc.',
      currentPrice: 31.25,
      targetPrice: 48.00,
      potentialReturn: 53.60,
      confidence: 72,
      timeframe: '9-15 months',
      risk: 'Medium-High',
      style: 'High Risk/Reward',
      aiReasoning: 'Sports betting legalization momentum. Seasonal strength ahead (NFL/NBA). User acquisition improving. Path to profitability clear.',
      catalysts: ['State legalization', 'NFL season', 'User growth', 'Profitability inflection'],
      technicals: {
        trend: 'Early Uptrend',
        momentum: 'Positive',
        support: '$28',
        resistance: '$35',
      },
      fundamentals: {
        revenueGrowth: 62,
        profitMargin: -12.4,
        roe: -18.2,
        debtToEquity: 0.42,
      },
      analystConsensus: {
        buy: 15,
        hold: 12,
        sell: 5,
        avgTarget: 42,
      },
      matchScore: {
        growth: 88,
        value: 72,
        momentum: 75,
        quality: 58,
        sentiment: 68,
      },
    },
  ];

  const performanceData = [
    { period: '1M', value: 4.2 },
    { period: '3M', value: 12.8 },
    { period: '6M', value: 18.5 },
    { period: '1Y', value: 28.4 },
    { period: 'YTD', value: 22.1 },
  ];

  const stats = [
    {
      label: 'AI Picks Today',
      value: '5',
      subtext: 'Based on your profile',
      icon: Brain,
      color: '#a855f7',
    },
    {
      label: 'Avg Confidence',
      value: '84.6%',
      subtext: 'High confidence range',
      icon: Star,
      color: '#22d3ee',
    },
    {
      label: 'Potential Return',
      value: '+34.0%',
      subtext: 'Weighted average',
      icon: TrendingUp,
      color: '#10b981',
    },
    {
      label: 'Win Rate',
      value: '73%',
      subtext: 'Past 12 months',
      icon: Award,
      color: '#f59e0b',
    },
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 85) return '#10b981';
    if (confidence >= 75) return '#22d3ee';
    if (confidence >= 65) return '#f59e0b';
    return '#ef4444';
  };

  const getRiskColor = (risk: string) => {
    if (risk.includes('Low')) return '#10b981';
    if (risk.includes('Medium') && !risk.includes('High')) return '#f59e0b';
    return '#ef4444';
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
                AI Stock Pickers
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                AI-powered stock recommendations personalized to your investment style
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
            Refresh Picks
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

      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            AI Picks Performance History
          </h2>
          <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Average returns across all time periods
          </span>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
              <XAxis
                dataKey="period"
                stroke={isDark ? '#64748b' : '#94a3b8'}
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke={isDark ? '#64748b' : '#94a3b8'}
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                  borderRadius: '8px',
                }}
                formatter={(value: number) => [`${value.toFixed(1)}%`, 'Return']}
              />
              <Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* AI Picks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-purple-500" />
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Today's AI Recommendations
          </h2>
          <span className={`text-sm px-2 py-1 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
            Personalized for you
          </span>
        </div>

        <div className="space-y-6">
          {aiPicks.map((pick, index) => (
            <motion.div
              key={pick.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-6 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ${
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
                        background: `${getConfidenceColor(pick.confidence)}20`,
                        color: getConfidenceColor(pick.confidence),
                      }}
                    >
                      {pick.confidence}% Confidence
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                      {pick.style}
                    </span>
                    <span
                      className="text-xs px-2 py-1 rounded font-semibold"
                      style={{
                        background: `${getRiskColor(pick.risk)}20`,
                        color: getRiskColor(pick.risk),
                      }}
                    >
                      {pick.risk} Risk
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {pick.ticker}
                    </h3>
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {pick.name}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 text-green-500 text-2xl font-bold mb-1">
                    <ArrowUpRight className="w-6 h-6" />
                    {pick.potentialReturn.toFixed(2)}%
                  </div>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Potential Return
                  </p>
                </div>
              </div>

              {/* AI Reasoning */}
              <div
                className={`p-4 rounded-lg mb-4 ${
                  isDark ? 'bg-purple-500/10 border border-purple-500/20' : 'bg-purple-50 border border-purple-200'
                }`}
              >
                <div className="flex items-start gap-2">
                  <Brain className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-purple-500 mb-1">AI Analysis</p>
                    <p className={`text-sm ${isDark ? 'text-purple-300' : 'text-purple-900'}`}>
                      {pick.aiReasoning}
                    </p>
                  </div>
                </div>
              </div>

              {/* Price Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Current Price
                  </p>
                  <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    ${pick.currentPrice.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Target Price
                  </p>
                  <p className="text-lg font-semibold text-green-500">
                    ${pick.targetPrice.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Timeframe
                  </p>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {pick.timeframe}
                  </p>
                </div>
                <div>
                  <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Analyst Avg
                  </p>
                  <p className={`text-sm font-semibold text-cyan-500`}>
                    ${pick.analystConsensus.avgTarget}
                  </p>
                </div>
              </div>

              {/* Catalysts */}
              <div className="mb-4">
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Key Catalysts
                </p>
                <div className="flex flex-wrap gap-2">
                  {pick.catalysts.map((catalyst, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 rounded text-xs flex items-center gap-1 ${
                        isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Zap className="w-3 h-3" />
                      {catalyst}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical & Fundamentals Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    isDark ? 'bg-slate-700/30' : 'bg-slate-50'
                  }`}
                >
                  <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Technical Analysis
                  </p>
                  <div className="space-y-1">
                    {Object.entries(pick.technicals).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between text-xs">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
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
                    <div className="flex items-center justify-between text-xs">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        Rev Growth:
                      </span>
                      <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {pick.fundamentals.revenueGrowth}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        Profit Margin:
                      </span>
                      <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {pick.fundamentals.profitMargin}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        ROE:
                      </span>
                      <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {pick.fundamentals.roe}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        Debt/Equity:
                      </span>
                      <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {pick.fundamentals.debtToEquity}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`p-3 rounded-lg ${
                    isDark ? 'bg-slate-700/30' : 'bg-slate-50'
                  }`}
                >
                  <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Analyst Consensus
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        Buy:
                      </span>
                      <span className="font-semibold text-green-500">
                        {pick.analystConsensus.buy}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        Hold:
                      </span>
                      <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {pick.analystConsensus.hold}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        Sell:
                      </span>
                      <span className="font-semibold text-red-500">
                        {pick.analystConsensus.sell}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Score Radar */}
              <div className="mb-4">
                <p className={`text-xs font-semibold mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Investment Style Match Score
                </p>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={Object.entries(pick.matchScore).map(([key, value]) => ({
                      metric: key.charAt(0).toUpperCase() + key.slice(1),
                      value,
                    }))}>
                      <PolarGrid stroke={isDark ? '#334155' : '#e2e8f0'} />
                      <PolarAngleAxis
                        dataKey="metric"
                        stroke={isDark ? '#64748b' : '#94a3b8'}
                        style={{ fontSize: '11px' }}
                      />
                      <PolarRadiusAxis
                        angle={90}
                        domain={[0, 100]}
                        stroke={isDark ? '#64748b' : '#94a3b8'}
                        style={{ fontSize: '10px' }}
                      />
                      <Radar
                        name="Match Score"
                        dataKey="value"
                        stroke="#22d3ee"
                        fill="#22d3ee"
                        fillOpacity={0.3}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  className="flex-1 px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                    color: '#ffffff',
                  }}
                >
                  View Full Analysis
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
                    isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  Add to Watchlist
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
