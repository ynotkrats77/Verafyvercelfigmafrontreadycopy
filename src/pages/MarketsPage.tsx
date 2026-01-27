import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

interface MarketsPageProps {
  isDark: boolean;
}

export function MarketsPage({ isDark }: MarketsPageProps) {
  const markets = [
    {
      name: 'ASX 200',
      value: '7,842.50',
      change: '+1.2%',
      isPositive: true,
    },
    {
      name: 'S&P 500',
      value: '4,567.80',
      change: '+0.8%',
      isPositive: true,
    },
    {
      name: 'NASDAQ',
      value: '14,123.45',
      change: '-0.3%',
      isPositive: false,
    },
    {
      name: 'FTSE 100',
      value: '7,654.20',
      change: '+0.5%',
      isPositive: true,
    },
  ];

  const sectors = [
    { name: 'Technology', performance: '+2.4%', isPositive: true },
    { name: 'Healthcare', performance: '+1.8%', isPositive: true },
    { name: 'Financials', performance: '-0.5%', isPositive: false },
    { name: 'Energy', performance: '+3.2%', isPositive: true },
    { name: 'Consumer', performance: '+0.9%', isPositive: true },
    { name: 'Industrials', performance: '+1.1%', isPositive: true },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Market
            <span
              className="block mt-2 bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent"
            >
              Intelligence
            </span>
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto mb-8 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Real-time market data and insights powered by AI. Stay ahead with
            comprehensive market intelligence.
          </p>
        </motion.div>
      </section>

      {/* Market Overview */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-3xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Global Markets
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((market, index) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-6 rounded-2xl border-2 backdrop-blur-sm transition-all ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800 hover:border-theme-primary/50'
                  : 'bg-white/50 border-slate-200 hover:border-theme-primary/50'
              }`}
              style={{
                boxShadow: isDark
                  ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                  : '0 4px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3
                  className={`text-lg font-semibold ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {market.name}
                </h3>
                {market.isPositive ? (
                  <TrendingUp className="h-5 w-5 text-green-500" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-500" />
                )}
              </div>

              <div
                className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {market.value}
              </div>

              <div
                className={`text-lg font-semibold ${
                  market.isPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {market.change}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sector Performance */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-3xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Sector Performance
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
              className={`p-6 rounded-xl border-2 backdrop-blur-sm ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800'
                  : 'bg-white/50 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {sector.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Today
                  </p>
                </div>
                <div className="text-right">
                  <div
                    className={`text-xl font-bold ${
                      sector.isPositive ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {sector.performance}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Market Insights */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`p-12 rounded-3xl border-2 backdrop-blur-sm ${
            isDark
              ? 'bg-slate-900/50 border-slate-800'
              : 'bg-white/50 border-slate-200'
          }`}
          style={{
            boxShadow: isDark
              ? '0 8px 32px rgba(34, 211, 238, 0.15)'
              : '0 8px 32px rgba(34, 211, 238, 0.1)',
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                boxShadow: '0 4px 12px var(--theme-glow)',
              }}
            >
              <Activity className="h-7 w-7 text-white" />
            </div>
            <h2
              className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              AI Market Insights
            </h2>
          </div>

          <p
            className={`text-lg mb-6 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Get personalized market insights based on your portfolio composition and
            investment goals. Our AI analyzes thousands of data points to provide
            actionable recommendations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, label: 'Market Opportunities', value: '12' },
              { icon: Activity, label: 'Risk Alerts', value: '3' },
              { icon: TrendingUp, label: 'Growth Signals', value: '8' },
            ].map((insight, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700'
                    : 'bg-white border-slate-200'
                }`}
              >
                <insight.icon
                  className="h-6 w-6 mb-2"
                  style={{ color: 'var(--theme-primary)' }}
                />
                <div
                  className={`text-2xl font-bold mb-1 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {insight.value}
                </div>
                <div
                  className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {insight.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}