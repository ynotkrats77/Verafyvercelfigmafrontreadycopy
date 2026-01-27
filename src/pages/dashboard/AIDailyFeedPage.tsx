import { motion } from 'motion/react';
import {
  TrendingUp,
  TrendingDown,
  Sparkles,
  Clock,
  DollarSign,
  AlertTriangle,
  ChevronRight,
  Star,
  Newspaper,
  Zap,
  TrendingUp as Growth,
  Calendar,
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AIDailyFeedPageProps {
  isDark: boolean;
}

export function AIDailyFeedPage({ isDark }: AIDailyFeedPageProps) {
  const insightData = [
    { time: '9:30', value: 29600, market: 4520 },
    { time: '10:00', value: 29850, market: 4535 },
    { time: '11:00', value: 29700, market: 4528 },
    { time: '12:00', value: 30100, market: 4542 },
    { time: '13:00', value: 30350, market: 4558 },
    { time: '14:00', value: 30200, market: 4551 },
    { time: '15:00', value: 30450, market: 4565 },
    { time: '16:00', value: 30600, market: 4572 },
  ];

  const aiInsights = [
    {
      id: '1',
      type: 'opportunity',
      priority: 'high',
      icon: Zap,
      title: 'Tech Sector Rebound Detected',
      description: 'AI analysis shows tech stocks in your watchlist are oversold with strong reversal signals. NVDA and AMD showing 73% probability of 5%+ gain in next 2 weeks.',
      action: 'View Opportunities',
      confidence: 73,
      timeframe: '2 weeks',
      impact: '+$1,250 potential',
    },
    {
      id: '2',
      type: 'alert',
      priority: 'urgent',
      icon: AlertTriangle,
      title: 'Concentration Risk Increasing',
      description: 'DOC now represents 83% of portfolio value. Market volatility models suggest 15% downside risk could result in $3,746 loss.',
      action: 'Review Position',
      confidence: 89,
      timeframe: 'Immediate',
      impact: '-$3,746 at risk',
    },
    {
      id: '3',
      type: 'performance',
      priority: 'medium',
      icon: TrendingUp,
      title: 'Portfolio Outperforming Peers',
      description: 'Your portfolio is in the 68th percentile vs similar investors this month. Strong stock picking in healthcare sector (+12.4%).',
      action: 'View Analysis',
      confidence: 68,
      timeframe: 'Month to date',
      impact: '+2.4% vs peers',
    },
    {
      id: '4',
      type: 'news',
      priority: 'low',
      icon: Newspaper,
      title: 'Earnings Season Impact',
      description: '3 of your holdings report earnings this week. Historical analysis shows 62% probability of positive surprises based on analyst revisions.',
      action: 'View Calendar',
      confidence: 62,
      timeframe: 'This week',
      impact: 'Potential volatility',
    },
  ];

  const marketNews = [
    {
      ticker: 'DOC',
      title: 'Healthpeak Properties announces quarterly dividend',
      sentiment: 'positive',
      time: '2 hours ago',
      impact: 'High',
    },
    {
      ticker: 'SXL',
      title: 'Sunlands Technology reports Q4 earnings beat',
      sentiment: 'positive',
      time: '4 hours ago',
      impact: 'Medium',
    },
    {
      ticker: 'MARKET',
      title: 'Fed signals potential rate cut in Q2',
      sentiment: 'neutral',
      time: '5 hours ago',
      impact: 'High',
    },
    {
      ticker: 'NVDA',
      title: 'Nvidia faces supply constraints for new AI chips',
      sentiment: 'negative',
      time: '6 hours ago',
      impact: 'Medium',
    },
  ];

  const upcomingEvents = [
    {
      date: 'Jan 15',
      ticker: 'DOC',
      event: 'Ex-Dividend Date',
      amount: '$0.42/share',
      estimated: '$126.00',
    },
    {
      date: 'Jan 18',
      ticker: 'SXL',
      event: 'Earnings Report',
      amount: 'After Market',
      estimated: 'EPS: $0.23',
    },
    {
      date: 'Jan 22',
      ticker: 'AAPL',
      event: 'Earnings Report',
      amount: 'After Market',
      estimated: 'EPS: $2.10',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return '#ef4444';
      case 'high':
        return '#f97316';
      case 'medium':
        return '#3b82f6';
      default:
        return '#6b7280';
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return '#10b981';
      case 'negative':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="p-3 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
            }}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              AI Daily Feed
            </h1>
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Personalized insights powered by artificial intelligence • Last updated 2 min ago
            </p>
          </div>
        </div>
      </div>

      {/* Today's Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Today's Market Summary
            </h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Monday, January 12, 2026
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/20">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm font-semibold text-green-500">Market Up</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Portfolio Value
            </p>
            <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              $30,600
            </p>
            <p className="text-sm text-green-500">+$1,000 (+3.38%)</p>
          </div>
          <div>
            <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              S&P 500
            </p>
            <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              4,572
            </p>
            <p className="text-sm text-green-500">+52 (+1.15%)</p>
          </div>
          <div>
            <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Top Gainer
            </p>
            <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              DOC
            </p>
            <p className="text-sm text-green-500">+4.2%</p>
          </div>
          <div>
            <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              AI Confidence
            </p>
            <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              78%
            </p>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              High confidence
            </p>
          </div>
        </div>

        {/* Intraday Chart */}
        <div className="h-48" style={{ minHeight: '192px' }}>
          <ResponsiveContainer width="100%" height={192}>
            <AreaChart data={insightData}>
              <defs>
                <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
              <XAxis
                dataKey="time"
                stroke={isDark ? '#64748b' : '#94a3b8'}
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke={isDark ? '#64748b' : '#94a3b8'}
                style={{ fontSize: '12px' }}
                domain={[29000, 31000]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                  borderRadius: '8px',
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#22d3ee"
                strokeWidth={2}
                fill="url(#portfolioGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* AI Insights Grid */}
      <div className="mb-6">
        <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          AI-Generated Insights
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {aiInsights.map((insight, index) => {
            const Icon = insight.icon;
            const priorityColor = getPriorityColor(insight.priority);
            
            return (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-5 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] ${
                  isDark ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{
                        background: `${priorityColor}20`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: priorityColor }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {insight.title}
                        </h3>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {insight.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-2 py-1 rounded text-xs font-semibold"
                    style={{
                      background: `${priorityColor}20`,
                      color: priorityColor,
                    }}
                  >
                    {insight.confidence}%
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t"
                  style={{
                    borderColor: isDark ? '#334155' : '#e2e8f0',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className={`w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                      <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {insight.timeframe}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign className={`w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                      <span className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {insight.impact}
                      </span>
                    </div>
                  </div>
                  <button
                    className="flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color: priorityColor }}
                  >
                    {insight.action}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market News */}
        <div
          className={`p-5 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Relevant News
            </h2>
            <button
              className={`text-sm font-semibold ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'}`}
            >
              View All
            </button>
          </div>

          <div className="space-y-3">
            {marketNews.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  isDark
                    ? 'border-slate-700 hover:bg-slate-700/50'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-bold"
                      style={{
                        background: isDark ? '#1e293b' : '#f1f5f9',
                        color: isDark ? '#cbd5e1' : '#475569',
                      }}
                    >
                      {news.ticker}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: getSentimentColor(news.sentiment) }}
                    />
                  </div>
                  <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {news.time}
                  </span>
                </div>
                <h3 className={`text-sm font-medium mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {news.title}
                </h3>
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Impact: {news.impact}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div
          className={`p-5 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Upcoming Events
            </h2>
            <button
              className={`text-sm font-semibold ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'}`}
            >
              Full Calendar
            </button>
          </div>

          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-lg border ${
                  isDark ? 'border-slate-700' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                      <Calendar className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                    </div>
                    <div>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {event.event}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {event.ticker} • {event.date}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {event.amount}
                  </span>
                  <span className={`text-sm font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    {event.estimated}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}