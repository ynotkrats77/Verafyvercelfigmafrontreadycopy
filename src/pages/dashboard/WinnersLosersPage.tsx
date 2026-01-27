import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Award,
  AlertCircle,
  DollarSign,
  Percent,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface WinnersLosersPageProps {
  isDark: boolean;
}

export function WinnersLosersPage({ isDark }: WinnersLosersPageProps) {
  const winners = [
    {
      ticker: 'AAPL',
      name: 'Apple Inc.',
      purchasePrice: 145.20,
      currentPrice: 189.45,
      shares: 50,
      totalGain: 2212.50,
      percentGain: 30.47,
      daysHeld: 487,
      contribution: 18.2,
    },
    {
      ticker: 'MSFT',
      name: 'Microsoft Corporation',
      purchasePrice: 285.00,
      currentPrice: 367.80,
      shares: 25,
      totalGain: 2070.00,
      percentGain: 29.05,
      daysHeld: 512,
      contribution: 17.0,
    },
    {
      ticker: 'NVDA',
      name: 'NVIDIA Corporation',
      purchasePrice: 210.50,
      currentPrice: 295.30,
      shares: 30,
      totalGain: 2544.00,
      percentGain: 40.28,
      daysHeld: 365,
      contribution: 20.9,
    },
    {
      ticker: 'GOOGL',
      name: 'Alphabet Inc.',
      purchasePrice: 105.20,
      currentPrice: 142.85,
      shares: 40,
      totalGain: 1506.00,
      percentGain: 35.80,
      daysHeld: 423,
      contribution: 12.4,
    },
    {
      ticker: 'AMZN',
      name: 'Amazon.com Inc.',
      purchasePrice: 125.00,
      currentPrice: 156.75,
      shares: 35,
      totalGain: 1111.25,
      percentGain: 25.40,
      daysHeld: 398,
      contribution: 9.1,
    },
  ];

  const losers = [
    {
      ticker: 'DOC',
      name: 'Healthpeak Properties',
      purchasePrice: 28.50,
      currentPrice: 5.70,
      shares: 3300,
      totalLoss: -75240.00,
      percentLoss: -80.00,
      daysHeld: 892,
      contribution: -618.5,
    },
    {
      ticker: 'SXL',
      name: 'Sunlands Technology',
      purchasePrice: 12.30,
      currentPrice: 5.66,
      shares: 1150,
      totalLoss: -7636.00,
      percentLoss: -54.00,
      daysHeld: 645,
      contribution: -62.8,
    },
    {
      ticker: 'PLTR',
      name: 'Palantir Technologies',
      purchasePrice: 25.80,
      currentPrice: 18.90,
      shares: 200,
      totalLoss: -1380.00,
      percentLoss: -26.74,
      daysHeld: 234,
      contribution: -11.3,
    },
    {
      ticker: 'COIN',
      name: 'Coinbase Global',
      purchasePrice: 165.00,
      currentPrice: 128.40,
      shares: 40,
      totalLoss: -1464.00,
      percentLoss: -22.18,
      daysHeld: 189,
      contribution: -12.0,
    },
  ];

  const performanceData = [
    { name: 'NVDA', value: 40.28 },
    { name: 'GOOGL', value: 35.80 },
    { name: 'AAPL', value: 30.47 },
    { name: 'MSFT', value: 29.05 },
    { name: 'AMZN', value: 25.40 },
    { name: 'PLTR', value: -26.74 },
    { name: 'COIN', value: -22.18 },
    { name: 'SXL', value: -54.00 },
    { name: 'DOC', value: -80.00 },
  ];

  const stats = [
    {
      label: 'Top Winner',
      value: 'NVDA',
      subtext: '+40.28% ($2,544)',
      icon: Award,
      color: '#10b981',
    },
    {
      label: 'Biggest Loser',
      value: 'DOC',
      subtext: '-80.00% (-$75,240)',
      icon: AlertCircle,
      color: '#ef4444',
    },
    {
      label: 'Winners',
      value: '5 of 9',
      subtext: '55.6% win rate',
      icon: TrendingUp,
      color: '#22d3ee',
    },
    {
      label: 'Net Performance',
      value: '-$79,328',
      subtext: 'Total unrealized P&L',
      icon: DollarSign,
      color: '#f97316',
    },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="p-3 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
            }}
          >
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Winners vs Losers
            </h1>
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Track your best and worst performing investments
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
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Performance Comparison
        </h2>
        <div className="h-80" style={{ minHeight: '320px' }}>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={performanceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
              <XAxis
                type="number"
                stroke={isDark ? '#64748b' : '#94a3b8'}
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `${value}%`}
              />
              <YAxis
                type="category"
                dataKey="name"
                stroke={isDark ? '#64748b' : '#94a3b8'}
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                  borderRadius: '8px',
                }}
                formatter={(value: number) => [`${value.toFixed(2)}%`, 'Return']}
              />
              <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                {performanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.value > 0 ? '#10b981' : '#ef4444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Winners and Losers Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Winners */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Top Winners
              </h2>
            </div>
            <span className="text-sm font-semibold text-green-500">
              5 positions
            </span>
          </div>

          <div className="space-y-3">
            {winners.map((stock, index) => (
              <motion.div
                key={stock.ticker}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-lg border cursor-pointer transition-all hover:scale-[1.02] ${
                  isDark ? 'border-slate-700 hover:bg-slate-700/50' : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {stock.ticker}
                      </span>
                      {index === 0 && (
                        <Award className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {stock.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-green-500 font-semibold mb-1">
                      <ArrowUpRight className="w-4 h-4" />
                      <span>{stock.percentGain.toFixed(2)}%</span>
                    </div>
                    <p className="text-sm text-green-500">
                      +${stock.totalGain.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t"
                  style={{
                    borderColor: isDark ? '#334155' : '#e2e8f0',
                  }}
                >
                  <div>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Shares
                    </p>
                    <p className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {stock.shares}
                    </p>
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Current
                    </p>
                    <p className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      ${stock.currentPrice}
                    </p>
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Days Held
                    </p>
                    <p className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {stock.daysHeld}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Losers */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-red-500" />
              <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Biggest Losers
              </h2>
            </div>
            <span className="text-sm font-semibold text-red-500">
              4 positions
            </span>
          </div>

          <div className="space-y-3">
            {losers.map((stock, index) => (
              <motion.div
                key={stock.ticker}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-lg border cursor-pointer transition-all hover:scale-[1.02] ${
                  isDark ? 'border-slate-700 hover:bg-slate-700/50' : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {stock.ticker}
                      </span>
                      {index === 0 && (
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {stock.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-red-500 font-semibold mb-1">
                      <ArrowDownRight className="w-4 h-4" />
                      <span>{stock.percentLoss.toFixed(2)}%</span>
                    </div>
                    <p className="text-sm text-red-500">
                      ${stock.totalLoss.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t"
                  style={{
                    borderColor: isDark ? '#334155' : '#e2e8f0',
                  }}
                >
                  <div>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Shares
                    </p>
                    <p className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {stock.shares}
                    </p>
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Current
                    </p>
                    <p className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      ${stock.currentPrice}
                    </p>
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Days Held
                    </p>
                    <p className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {stock.daysHeld}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}