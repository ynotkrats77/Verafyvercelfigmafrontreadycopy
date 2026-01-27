import { motion } from 'framer-motion';
import {
  Search,
  Star,
  TrendingUp,
  TrendingDown,
  Plus,
  Edit2,
  Trash2,
  Bell,
  BellOff,
  Eye,
  MoreVertical,
  DollarSign,
  Percent,
  Activity,
  BarChart3,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface WatchlistsPageProps {
  isDark: boolean;
}

export function WatchlistsPage({ isDark }: WatchlistsPageProps) {
  const watchlists = [
    {
      id: '1',
      name: 'Tech Giants',
      itemCount: 8,
      color: '#3b82f6',
      avgChange24h: 2.3,
      topPerformer: { ticker: 'NVDA', change: 5.4 },
      alerts: 3,
      lastUpdated: '5 min ago',
    },
    {
      id: '2',
      name: 'Growth Stocks',
      itemCount: 12,
      color: '#10b981',
      avgChange24h: -1.2,
      topPerformer: { ticker: 'SNOW', change: 3.8 },
      alerts: 1,
      lastUpdated: '12 min ago',
    },
    {
      id: '3',
      name: 'Dividend Plays',
      itemCount: 6,
      color: '#f59e0b',
      avgChange24h: 0.5,
      topPerformer: { ticker: 'JNJ', change: 1.2 },
      alerts: 0,
      lastUpdated: '1 hour ago',
    },
    {
      id: '4',
      name: 'AI & Robotics',
      itemCount: 10,
      color: '#a855f7',
      avgChange24h: 3.7,
      topPerformer: { ticker: 'PLTR', change: 6.2 },
      alerts: 5,
      lastUpdated: '2 min ago',
    },
  ];

  const stocks = [
    {
      ticker: 'NVDA',
      name: 'NVIDIA Corporation',
      price: 495.20,
      change: 5.42,
      changeAmount: 25.45,
      volume: '48.2M',
      marketCap: '1.22T',
      pe: 58.3,
      alert: { type: 'price', message: 'Above $490 target', triggered: true },
      chart: [
        { time: '9:30', value: 470 },
        { time: '10:00', value: 475 },
        { time: '11:00', value: 472 },
        { time: '12:00', value: 480 },
        { time: '13:00', value: 485 },
        { time: '14:00', value: 490 },
        { time: '15:00', value: 493 },
        { time: '16:00', value: 495 },
      ],
      watchlist: 'Tech Giants',
      analyst: { rating: 'Strong Buy', target: 550, consensus: 18 },
    },
    {
      ticker: 'AMD',
      name: 'Advanced Micro Devices',
      price: 142.30,
      change: 2.85,
      changeAmount: 3.95,
      volume: '52.8M',
      marketCap: '230.5B',
      pe: 42.1,
      alert: null,
      chart: [
        { time: '9:30', value: 138 },
        { time: '10:00', value: 139 },
        { time: '11:00', value: 140 },
        { time: '12:00', value: 140.5 },
        { time: '13:00', value: 141 },
        { time: '14:00', value: 141.5 },
        { time: '15:00', value: 142 },
        { time: '16:00', value: 142.3 },
      ],
      watchlist: 'Tech Giants',
      analyst: { rating: 'Buy', target: 175, consensus: 15 },
    },
    {
      ticker: 'TSLA',
      name: 'Tesla Inc.',
      price: 238.45,
      change: -1.85,
      changeAmount: -4.50,
      volume: '125.4M',
      marketCap: '756.8B',
      pe: 62.4,
      alert: { type: 'volume', message: 'Volume spike detected', triggered: true },
      chart: [
        { time: '9:30', value: 243 },
        { time: '10:00', value: 241 },
        { time: '11:00', value: 240 },
        { time: '12:00', value: 239 },
        { time: '13:00', value: 238.5 },
        { time: '14:00', value: 238 },
        { time: '15:00', value: 238.2 },
        { time: '16:00', value: 238.45 },
      ],
      watchlist: 'Tech Giants',
      analyst: { rating: 'Hold', target: 250, consensus: 12 },
    },
    {
      ticker: 'AAPL',
      name: 'Apple Inc.',
      price: 189.45,
      change: 1.25,
      changeAmount: 2.34,
      volume: '58.2M',
      marketCap: '2.95T',
      pe: 31.2,
      alert: null,
      chart: [
        { time: '9:30', value: 187 },
        { time: '10:00', value: 187.5 },
        { time: '11:00', value: 188 },
        { time: '12:00', value: 188.5 },
        { time: '13:00', value: 189 },
        { time: '14:00', value: 189.2 },
        { time: '15:00', value: 189.3 },
        { time: '16:00', value: 189.45 },
      ],
      watchlist: 'Tech Giants',
      analyst: { rating: 'Buy', target: 210, consensus: 20 },
    },
    {
      ticker: 'MSFT',
      name: 'Microsoft Corporation',
      price: 367.80,
      change: 0.95,
      changeAmount: 3.46,
      volume: '32.1M',
      marketCap: '2.73T',
      pe: 35.8,
      alert: null,
      chart: [
        { time: '9:30', value: 365 },
        { time: '10:00', value: 366 },
        { time: '11:00', value: 366.5 },
        { time: '12:00', value: 367 },
        { time: '13:00', value: 367.2 },
        { time: '14:00', value: 367.5 },
        { time: '15:00', value: 367.7 },
        { time: '16:00', value: 367.8 },
      ],
      watchlist: 'Tech Giants',
      analyst: { rating: 'Strong Buy', target: 410, consensus: 22 },
    },
    {
      ticker: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 142.85,
      change: 1.68,
      changeAmount: 2.36,
      volume: '28.5M',
      marketCap: '1.78T',
      pe: 28.4,
      alert: null,
      chart: [
        { time: '9:30', value: 140.5 },
        { time: '10:00', value: 141 },
        { time: '11:00', value: 141.5 },
        { time: '12:00', value: 142 },
        { time: '13:00', value: 142.3 },
        { time: '14:00', value: 142.5 },
        { time: '15:00', value: 142.7 },
        { time: '16:00', value: 142.85 },
      ],
      watchlist: 'Tech Giants',
      analyst: { rating: 'Buy', target: 165, consensus: 18 },
    },
    {
      ticker: 'META',
      name: 'Meta Platforms Inc.',
      price: 485.25,
      change: 3.12,
      changeAmount: 14.68,
      volume: '18.2M',
      marketCap: '1.24T',
      pe: 30.1,
      alert: { type: 'price', message: 'New 52-week high', triggered: true },
      chart: [
        { time: '9:30', value: 471 },
        { time: '10:00', value: 475 },
        { time: '11:00', value: 478 },
        { time: '12:00', value: 480 },
        { time: '13:00', value: 482 },
        { time: '14:00', value: 483 },
        { time: '15:00', value: 484 },
        { time: '16:00', value: 485.25 },
      ],
      watchlist: 'Tech Giants',
      analyst: { rating: 'Strong Buy', target: 550, consensus: 16 },
    },
    {
      ticker: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 156.75,
      change: 2.15,
      changeAmount: 3.30,
      volume: '45.8M',
      marketCap: '1.62T',
      pe: 52.3,
      alert: null,
      chart: [
        { time: '9:30', value: 153.5 },
        { time: '10:00', value: 154 },
        { time: '11:00', value: 154.5 },
        { time: '12:00', value: 155 },
        { time: '13:00', value: 155.5 },
        { time: '14:00', value: 156 },
        { time: '15:00', value: 156.5 },
        { time: '16:00', value: 156.75 },
      ],
      watchlist: 'Tech Giants',
      analyst: { rating: 'Buy', target: 180, consensus: 19 },
    },
  ];

  const stats = [
    {
      label: 'Total Watchlists',
      value: '4',
      subtext: '38 stocks tracked',
      icon: Star,
      color: '#22d3ee',
    },
    {
      label: 'Active Alerts',
      value: '9',
      subtext: '3 triggered today',
      icon: Bell,
      color: '#f59e0b',
    },
    {
      label: 'Avg Performance',
      value: '+1.9%',
      subtext: '24h change',
      icon: TrendingUp,
      color: '#10b981',
    },
    {
      label: 'Top Gainer',
      value: 'PLTR',
      subtext: '+6.2% today',
      icon: Target,
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
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              }}
            >
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Watchlists
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Track and monitor your favorite stocks with real-time alerts
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
            Create Watchlist
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

      {/* Watchlist Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {watchlists.map((list, index) => (
          <motion.div
            key={list.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`p-5 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] ${
              isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: list.color }}
                />
                <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {list.name}
                </h3>
              </div>
              <button className={`p-1 rounded hover:bg-slate-700 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Stocks
                </span>
                <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {list.itemCount}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  24h Avg
                </span>
                <span
                  className={`text-sm font-semibold flex items-center gap-1 ${
                    list.avgChange24h >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {list.avgChange24h >= 0 ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {Math.abs(list.avgChange24h).toFixed(2)}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Top Performer
                </span>
                <span className="text-sm font-semibold text-green-500">
                  {list.topPerformer.ticker} +{list.topPerformer.change}%
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t"
              style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}
            >
              <div className="flex items-center gap-1">
                <Bell className="w-4 h-4" style={{ color: list.color }} />
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {list.alerts} alerts
                </span>
              </div>
              <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {list.lastUpdated}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Active Watchlist - Tech Giants */}
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
              className="w-4 h-4 rounded-full"
              style={{ background: '#3b82f6' }}
            />
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Tech Giants Watchlist
            </h2>
            <span className={`text-sm px-2 py-1 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
              8 stocks
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              <Bell className="w-4 h-4" />
              Manage Alerts
            </button>
            <button
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              <Plus className="w-4 h-4" />
              Add Stock
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {stocks.map((stock, index) => (
            <motion.div
              key={stock.ticker}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-xl border transition-all hover:scale-[1.01] ${
                isDark ? 'border-slate-700 hover:bg-slate-700/50' : 'border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Stock Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div>
                      <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {stock.ticker}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {stock.name}
                      </p>
                    </div>
                    {stock.alert && stock.alert.triggered && (
                      <div className="flex items-center gap-1 px-2 py-1 rounded text-xs bg-amber-500/20 text-amber-500">
                        <Bell className="w-3 h-3" />
                        {stock.alert.message}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                        Volume
                      </p>
                      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {stock.volume}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        P/E Ratio
                      </p>
                      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {stock.pe}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Analyst Target
                      </p>
                      <p className={`text-sm font-semibold text-cyan-500`}>
                        ${stock.analyst.target}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="w-32 h-16 flex-shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={stock.chart}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={stock.change >= 0 ? '#10b981' : '#ef4444'}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <button
                    className={`p-2 rounded-lg transition-colors ${
                      isDark ? 'hover:bg-slate-600' : 'hover:bg-slate-100'
                    }`}
                    title="View Details"
                  >
                    <Eye className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                  </button>
                  <button
                    className={`p-2 rounded-lg transition-colors ${
                      isDark ? 'hover:bg-slate-600' : 'hover:bg-slate-100'
                    }`}
                    title="Set Alert"
                  >
                    <Bell className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                  </button>
                  <button
                    className={`p-2 rounded-lg transition-colors ${
                      isDark ? 'hover:bg-slate-600' : 'hover:bg-slate-100'
                    }`}
                    title="Remove"
                  >
                    <Trash2 className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
