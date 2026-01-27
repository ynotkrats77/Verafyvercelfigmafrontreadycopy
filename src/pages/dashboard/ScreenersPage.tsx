import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Percent,
  BarChart3,
  Activity,
  Target,
  Star,
  Plus,
  Save,
  Play,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Award,
  Shield,
  Sparkles,
  ChevronRight,
  SlidersHorizontal,
} from 'lucide-react';

interface ScreenersPageProps {
  isDark: boolean;
}

export function ScreenersPage({ isDark }: ScreenersPageProps) {
  const preBuiltScreeners = [
    {
      id: '1',
      name: 'High Growth Tech',
      description: 'Fast-growing technology companies with strong revenue growth',
      icon: Zap,
      color: '#3b82f6',
      criteria: ['Revenue Growth > 30%', 'Tech Sector', 'Market Cap > $1B'],
      results: 24,
      avgReturn: 18.5,
      popular: true,
    },
    {
      id: '2',
      name: 'Value Investing',
      description: 'Undervalued stocks with strong fundamentals',
      icon: DollarSign,
      color: '#10b981',
      criteria: ['P/E < 15', 'P/B < 2', 'Dividend Yield > 2%'],
      results: 47,
      avgReturn: 12.3,
      popular: true,
    },
    {
      id: '3',
      name: 'Dividend Champions',
      description: 'Reliable dividend payers with consistent payouts',
      icon: Award,
      color: '#f59e0b',
      criteria: ['Dividend Yield > 3%', '10+ Years Dividends', 'Payout Ratio < 70%'],
      results: 32,
      avgReturn: 8.7,
      popular: false,
    },
    {
      id: '4',
      name: 'Small Cap Momentum',
      description: 'Small cap stocks with strong price momentum',
      icon: TrendingUp,
      color: '#a855f7',
      criteria: ['Market Cap < $2B', '3M Return > 20%', 'RSI < 70'],
      results: 18,
      avgReturn: 25.4,
      popular: false,
    },
    {
      id: '5',
      name: 'Quality Leaders',
      description: 'High-quality companies with strong balance sheets',
      icon: Shield,
      color: '#22d3ee',
      criteria: ['ROE > 15%', 'Debt/Equity < 0.5', 'Current Ratio > 1.5'],
      results: 38,
      avgReturn: 15.2,
      popular: true,
    },
    {
      id: '6',
      name: 'Breakout Stocks',
      description: 'Stocks breaking out of consolidation patterns',
      icon: Activity,
      color: '#ec4899',
      criteria: ['52W High Breakout', 'Volume > 2x Avg', 'RSI 50-70'],
      results: 12,
      avgReturn: 22.8,
      popular: false,
    },
  ];

  const screenResults = [
    {
      ticker: 'SNOW',
      name: 'Snowflake Inc.',
      price: 185.60,
      change: 3.45,
      marketCap: '58.2B',
      revenueGrowth: 48,
      pe: 0,
      pb: 12.4,
      score: 92,
      sector: 'Technology',
      matched: ['Revenue Growth > 30%', 'Tech Sector', 'Market Cap > $1B'],
    },
    {
      ticker: 'DDOG',
      name: 'Datadog Inc.',
      price: 112.35,
      change: 2.85,
      marketCap: '35.8B',
      revenueGrowth: 42,
      pe: 185.2,
      pb: 18.5,
      score: 88,
      sector: 'Technology',
      matched: ['Revenue Growth > 30%', 'Tech Sector', 'Market Cap > $1B'],
    },
    {
      ticker: 'CRWD',
      name: 'CrowdStrike Holdings',
      price: 245.80,
      change: 4.12,
      marketCap: '58.5B',
      revenueGrowth: 52,
      pe: 0,
      pb: 28.3,
      score: 95,
      sector: 'Technology',
      matched: ['Revenue Growth > 30%', 'Tech Sector', 'Market Cap > $1B'],
    },
    {
      ticker: 'NET',
      name: 'Cloudflare Inc.',
      price: 88.45,
      change: 1.95,
      marketCap: '29.2B',
      revenueGrowth: 38,
      pe: 0,
      pb: 22.1,
      score: 85,
      sector: 'Technology',
      matched: ['Revenue Growth > 30%', 'Tech Sector', 'Market Cap > $1B'],
    },
    {
      ticker: 'MDB',
      name: 'MongoDB Inc.',
      price: 385.20,
      change: 2.68,
      marketCap: '26.8B',
      revenueGrowth: 44,
      pe: 0,
      pb: 15.7,
      score: 90,
      sector: 'Technology',
      matched: ['Revenue Growth > 30%', 'Tech Sector', 'Market Cap > $1B'],
    },
    {
      ticker: 'ZS',
      name: 'Zscaler Inc.',
      price: 195.70,
      change: 3.22,
      marketCap: '28.4B',
      revenueGrowth: 41,
      pe: 0,
      pb: 19.2,
      score: 87,
      sector: 'Technology',
      matched: ['Revenue Growth > 30%', 'Tech Sector', 'Market Cap > $1B'],
    },
  ];

  const stats = [
    {
      label: 'Active Screeners',
      value: '3',
      subtext: '2 custom, 1 preset',
      icon: Filter,
      color: '#22d3ee',
    },
    {
      label: 'Results Today',
      value: '127',
      subtext: 'Across all screeners',
      icon: Target,
      color: '#10b981',
    },
    {
      label: 'Avg Score',
      value: '84.2',
      subtext: 'Quality threshold',
      icon: Star,
      color: '#f59e0b',
    },
    {
      label: 'New Matches',
      value: '8',
      subtext: 'Since yesterday',
      icon: Sparkles,
      color: '#a855f7',
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#10b981';
    if (score >= 80) return '#22d3ee';
    if (score >= 70) return '#f59e0b';
    return '#94a3b8';
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
                background: 'linear-gradient(135deg, #10b981, #059669)',
              }}
            >
              <Search className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Stock Screeners
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Find stocks that match your investment criteria
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
            <Plus className="w-5 h-5" />
            Create Custom Screener
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

      {/* Pre-Built Screeners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Pre-Built Screeners
          </h2>
          <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Choose a template to get started
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {preBuiltScreeners.map((screener, index) => {
            const Icon = screener.icon;
            return (
              <motion.div
                key={screener.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-5 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] ${
                  isDark ? 'border-slate-700 hover:bg-slate-700/50' : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="p-2.5 rounded-lg"
                    style={{
                      background: `${screener.color}20`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: screener.color }} />
                  </div>
                  {screener.popular && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-500">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {screener.name}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {screener.description}
                </p>

                <div className="space-y-2 mb-4">
                  {screener.criteria.map((criterion, idx) => (
                    <div
                      key={idx}
                      className={`text-xs px-2 py-1 rounded ${
                        isDark ? 'bg-slate-700/50 text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {criterion}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t"
                  style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}
                >
                  <div>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Results
                    </p>
                    <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {screener.results} stocks
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Avg Return
                    </p>
                    <p className="text-sm font-bold text-green-500">
                      +{screener.avgReturn}%
                    </p>
                  </div>
                </div>

                <button
                  className="w-full mt-4 px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: `${screener.color}15`,
                    color: screener.color,
                  }}
                >
                  <Play className="w-4 h-4" />
                  Run Screener
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Active Screener Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-lg"
              style={{
                background: '#3b82f620',
              }}
            >
              <Zap className="w-5 h-5" style={{ color: '#3b82f6' }} />
            </div>
            <div>
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                High Growth Tech Results
              </h2>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                24 stocks match your criteria • Updated 2 min ago
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Adjust Filters
            </button>
            <button
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              <Save className="w-4 h-4" />
              Save
            </button>
            <button
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {screenResults.map((stock, index) => (
            <motion.div
              key={stock.ticker}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ${
                isDark ? 'border-slate-700 hover:bg-slate-700/50' : 'border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div>
                      <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {stock.ticker}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {stock.name}
                      </p>
                    </div>
                    <div
                      className="px-3 py-1 rounded-full text-sm font-bold"
                      style={{
                        background: `${getScoreColor(stock.score)}20`,
                        color: getScoreColor(stock.score),
                      }}
                    >
                      {stock.score} Score
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-3">
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Price
                      </p>
                      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        ${stock.price.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Change
                      </p>
                      <p
                        className={`text-sm font-semibold flex items-center gap-1 ${
                          stock.change >= 0 ? 'text-green-500' : 'text-red-500'
                        }`}
                      >
                        {stock.change >= 0 ? (
                          <ArrowUpRight className="w-3 h-3" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3" />
                        )}
                        {Math.abs(stock.change).toFixed(2)}%
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Market Cap
                      </p>
                      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {stock.marketCap}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Revenue Growth
                      </p>
                      <p className="text-sm font-semibold text-green-500">
                        +{stock.revenueGrowth}%
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Sector
                      </p>
                      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {stock.sector}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {stock.matched.map((criterion, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-xs bg-green-500/20 text-green-500 flex items-center gap-1"
                      >
                        <Star className="w-3 h-3" />
                        {criterion}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="ml-4 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                    color: '#ffffff',
                  }}
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t" style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}>
          <div className="flex items-center justify-between">
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Showing 6 of 24 results
            </p>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              Load More Results
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
