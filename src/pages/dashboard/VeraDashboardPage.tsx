import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Percent, Activity, Sparkles, AlertCircle } from 'lucide-react';
import { CHART_COLORS } from '../../config/theme';

interface VeraDashboardPageProps {
  isDark: boolean;
}

export function VeraDashboardPage({ isDark }: VeraDashboardPageProps) {
  // Portfolio Performance Data
  const performanceData = [
    { date: 'Jan', portfolio: 220000, market: 215000 },
    { date: 'Feb', portfolio: 228000, market: 218000 },
    { date: 'Mar', portfolio: 235000, market: 225000 },
    { date: 'Apr', portfolio: 232000, market: 228000 },
    { date: 'May', portfolio: 242000, market: 235000 },
    { date: 'Jun', portfolio: 255000, market: 242000 },
  ];

  // Sector Allocation - OPTIMIZED: Using CHART_COLORS
  const sectorData = [
    { name: 'Technology', value: 35, color: CHART_COLORS.primary },
    { name: 'Healthcare', value: 20, color: CHART_COLORS.secondary },
    { name: 'Finance', value: 18, color: CHART_COLORS.info },
    { name: 'Consumer', value: 15, color: CHART_COLORS.warning },
    { name: 'Energy', value: 12, color: CHART_COLORS.success },
  ];

  // Top Holdings
  const holdings = [
    { symbol: 'AAPL', name: 'Apple Inc.', value: 58500, change: 2.4, weight: 23 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', value: 45200, change: 1.8, weight: 18 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', value: 32800, change: -0.5, weight: 13 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', value: 28400, change: 4.2, weight: 11 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', value: 22100, change: 1.2, weight: 9 },
  ];

  // AI Insights
  const insights = [
    {
      title: 'Strong Momentum Detected',
      description: 'Your tech holdings are outperforming the sector by 8.3% this quarter. NVDA is the primary driver.',
      confidence: 94,
      type: 'positive'
    },
    {
      title: 'Concentration Alert',
      description: 'Top 3 holdings represent 54% of portfolio. Consider diversification to reduce single-stock risk.',
      confidence: 88,
      type: 'warning'
    },
    {
      title: 'Dividend Opportunity',
      description: 'Switching GOOGL allocation to dividend-paying alternatives could generate $2,400 annual income.',
      confidence: 76,
      type: 'info'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header with AI Badge */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Vera Dashboard
            </h1>
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold text-white">AI-Powered</span>
            </div>
          </div>
          <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Your intelligent portfolio overview with real-time AI insights
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Total Value</span>
            <DollarSign className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-500'}`} />
          </div>
          <p className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>$255,000</p>
          <div className="flex items-center gap-1 text-emerald-400">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">+18.2% YTD</span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Total Gain</span>
            <TrendingUp className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} />
          </div>
          <p className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>$39,200</p>
          <div className="flex items-center gap-1 text-emerald-400">
            <Percent className="w-4 h-4" />
            <span className="text-sm font-semibold">+18.2%</span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Today's Change</span>
            <Activity className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-500'}`} />
          </div>
          <p className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>+$2,450</p>
          <div className="flex items-center gap-1 text-emerald-400">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">+0.96%</span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Cash Available</span>
            <DollarSign className={`w-5 h-5 ${isDark ? 'text-amber-400' : 'text-amber-500'}`} />
          </div>
          <p className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>$12,800</p>
          <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>5% of portfolio</span>
        </motion.div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Performance Chart */}
        <div className={`p-6 rounded-xl border backdrop-blur-sm ${
          isDark 
            ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
            : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Portfolio Performance (6M)
          </h3>
          <div style={{ minHeight: '300px', height: '300px' }}>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22D3EE" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="marketGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#94A3B8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#E2E8F0'} />
                <XAxis dataKey="date" stroke={isDark ? '#94A3B8' : '#64748B'} />
                <YAxis stroke={isDark ? '#94A3B8' : '#64748B'} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDark ? '#1E293B' : '#FFFFFF', 
                    border: `1px solid ${isDark ? '#334155' : '#E2E8F0'}`,
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="portfolio" 
                  stroke="#22D3EE" 
                  fillOpacity={1} 
                  fill="url(#portfolioGradient)" 
                  strokeWidth={2}
                  name="Your Portfolio"
                />
                <Area 
                  type="monotone" 
                  dataKey="market" 
                  stroke="#94A3B8" 
                  fillOpacity={1} 
                  fill="url(#marketGradient)" 
                  strokeWidth={2}
                  name="Market (S&P 500)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sector Allocation Chart */}
        <div className={`p-6 rounded-xl border backdrop-blur-sm ${
          isDark 
            ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
            : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Sector Allocation
          </h3>
          <div className="flex items-center gap-8">
            <div style={{ width: '50%', minHeight: '250px', height: '250px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-3">
              {sectorData.map((sector) => (
                <div key={sector.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: sector.color }}
                    />
                    <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {sector.name}
                    </span>
                  </div>
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {sector.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Holdings */}
      <div className={`p-6 rounded-xl border backdrop-blur-sm ${
        isDark 
          ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
          : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Top Holdings
        </h3>
        <div className="space-y-3">
          {holdings.map((holding) => (
            <div 
              key={holding.symbol}
              className={`p-4 rounded-lg border ${
                isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {holding.symbol}
                    </span>
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {holding.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      ${holding.value.toLocaleString()}
                    </span>
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {holding.weight}% of portfolio
                    </span>
                  </div>
                </div>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
                  holding.change >= 0 
                    ? 'bg-emerald-500/10 text-emerald-400' 
                    : 'bg-red-500/10 text-red-400'
                }`}>
                  {holding.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span className="font-semibold">
                    {holding.change >= 0 ? '+' : ''}{holding.change}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className={`p-6 rounded-xl border backdrop-blur-sm ${
        isDark 
          ? 'bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border-purple-500/20' 
          : 'bg-gradient-to-br from-purple-50 to-cyan-50 border-purple-200'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-500'}`} />
          <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            AI Insights
          </h3>
        </div>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg border ${
                isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  insight.type === 'positive' ? 'bg-emerald-500/10' :
                  insight.type === 'warning' ? 'bg-amber-500/10' :
                  'bg-cyan-500/10'
                }`}>
                  <AlertCircle className={`w-5 h-5 ${
                    insight.type === 'positive' ? 'text-emerald-400' :
                    insight.type === 'warning' ? 'text-amber-400' :
                    'text-cyan-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {insight.title}
                    </h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      isDark ? 'bg-slate-800 text-cyan-400' : 'bg-slate-100 text-cyan-600'
                    }`}>
                      {insight.confidence}% confidence
                    </span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {insight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}