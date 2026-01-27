import { motion } from 'motion/react';
import { PieChart, TrendingUp, TrendingDown, Info, BarChart3 } from 'lucide-react';
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

interface SectorAllocationPageProps {
  isDark: boolean;
}

export function SectorAllocationPage({ isDark }: SectorAllocationPageProps) {
  const sectorData = [
    { name: 'Healthcare', value: 83.2, amount: 24680, color: '#ef4444', change: -2.3 },
    { name: 'Technology', value: 8.5, amount: 2520, color: '#3b82f6', change: 12.4 },
    { name: 'Consumer', value: 5.1, amount: 1515, color: '#10b981', change: 8.2 },
    { name: 'Financial', value: 2.2, amount: 652, color: '#f97316', change: -1.5 },
    { name: 'Industrial', value: 1.0, amount: 296, color: '#a855f7', change: 3.7 },
  ];

  const benchmarkComparison = [
    { sector: 'Healthcare', portfolio: 83.2, benchmark: 12.5 },
    { sector: 'Technology', portfolio: 8.5, benchmark: 28.2 },
    { sector: 'Consumer', portfolio: 5.1, benchmark: 15.3 },
    { sector: 'Financial', portfolio: 2.2, benchmark: 18.7 },
    { sector: 'Industrial', portfolio: 1.0, benchmark: 10.8 },
    { sector: 'Energy', portfolio: 0, benchmark: 8.2 },
    { sector: 'Materials', portfolio: 0, benchmark: 6.3 },
  ];

  const sectorPerformance = [
    { sector: 'Technology', return: 12.4, weight: 8.5, holdings: 3 },
    { sector: 'Consumer', return: 8.2, weight: 5.1, holdings: 2 },
    { sector: 'Industrial', return: 3.7, weight: 1.0, holdings: 1 },
    { sector: 'Financial', return: -1.5, weight: 2.2, holdings: 1 },
    { sector: 'Healthcare', return: -2.3, weight: 83.2, holdings: 2 },
  ];

  const recommendations = [
    {
      type: 'warning',
      title: 'Severe Healthcare Overconcentration',
      description: '83.2% allocation to Healthcare is 6.6x the S&P 500 benchmark. Consider rebalancing to reduce sector-specific risk.',
      action: 'Reduce to 30-40%',
    },
    {
      type: 'opportunity',
      title: 'Technology Underweight',
      description: 'Technology sector is underweighted by 19.7% vs benchmark. Strong sector momentum suggests opportunity.',
      action: 'Increase exposure',
    },
    {
      type: 'info',
      title: 'Missing Key Sectors',
      description: 'No exposure to Energy, Materials, or Utilities sectors. Consider diversifying across all 11 GICS sectors.',
      action: 'Add positions',
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
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            }}
          >
            <PieChart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Sector Allocation
            </h1>
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Analyze your portfolio exposure across market sectors
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-5 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Total Sectors
          </p>
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            5 / 11
          </p>
          <p className="text-xs text-orange-500">Missing 6 sectors</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`p-5 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Largest Sector
          </p>
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Healthcare
          </p>
          <p className="text-xs text-red-500">83.2% (Critical)</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-5 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Best Performer
          </p>
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Tech
          </p>
          <p className="text-xs text-green-500">+12.4% return</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`p-5 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Diversification
          </p>
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Poor
          </p>
          <p className="text-xs text-red-500">High concentration risk</p>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Sector Distribution Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Current Allocation
          </h2>
          
          <div className="h-80" style={{ minHeight: '320px' }}>
            <ResponsiveContainer width="100%" height={320}>
              <RechartsPie>
                <Pie
                  data={sectorData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sectorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1e293b' : '#ffffff',
                    border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                    borderRadius: '8px',
                  }}
                />
              </RechartsPie>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 space-y-2">
            {sectorData.map((sector, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: sector.color }} />
                  <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {sector.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {sector.value}%
                  </span>
                  <span className={`text-sm ${sector.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {sector.change > 0 ? '+' : ''}{sector.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benchmark Comparison */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            vs S&P 500 Benchmark
          </h2>

          <div className="h-80" style={{ minHeight: '320px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={benchmarkComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
                <XAxis
                  dataKey="sector"
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
                  formatter={(value: number) => `${value}%`}
                />
                <Legend />
                <Bar dataKey="portfolio" fill="#22d3ee" name="Your Portfolio" radius={[8, 8, 0, 0]} />
                <Bar dataKey="benchmark" fill="#94a3b8" name="S&P 500" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Sector Performance Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Sector Performance Analysis
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Sector
                </th>
                <th className={`text-right py-3 px-4 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Allocation
                </th>
                <th className={`text-right py-3 px-4 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Holdings
                </th>
                <th className={`text-right py-3 px-4 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Return
                </th>
                <th className={`text-right py-3 px-4 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {sectorPerformance.map((sector, index) => (
                <tr
                  key={index}
                  className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'} hover:${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}
                >
                  <td className={`py-4 px-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {sector.sector}
                  </td>
                  <td className={`py-4 px-4 text-right ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {sector.weight}%
                  </td>
                  <td className={`py-4 px-4 text-right ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {sector.holdings}
                  </td>
                  <td className={`py-4 px-4 text-right font-semibold ${sector.return > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {sector.return > 0 ? '+' : ''}{sector.return}%
                  </td>
                  <td className="py-4 px-4 text-right">
                    {sector.weight > 50 ? (
                      <span className="px-2 py-1 rounded text-xs font-semibold bg-red-500/20 text-red-500">
                        Overweight
                      </span>
                    ) : sector.weight > 20 ? (
                      <span className="px-2 py-1 rounded text-xs font-semibold bg-orange-500/20 text-orange-500">
                        High
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded text-xs font-semibold bg-green-500/20 text-green-500">
                        Balanced
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Rebalancing Recommendations
        </h2>

        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border ${
                isDark ? 'border-slate-700' : 'border-slate-200'
              }`}
              style={{
                background: rec.type === 'warning'
                  ? isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)'
                  : rec.type === 'opportunity'
                  ? isDark ? 'rgba(34, 211, 238, 0.1)' : 'rgba(34, 211, 238, 0.05)'
                  : isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {rec.title}
                  </h3>
                  <p className={`text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {rec.description}
                  </p>
                </div>
                <button
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                  style={{
                    background: rec.type === 'warning'
                      ? 'rgba(239, 68, 68, 0.2)'
                      : rec.type === 'opportunity'
                      ? 'rgba(34, 211, 238, 0.2)'
                      : 'rgba(59, 130, 246, 0.2)',
                    color: rec.type === 'warning'
                      ? '#ef4444'
                      : rec.type === 'opportunity'
                      ? '#22d3ee'
                      : '#3b82f6',
                  }}
                >
                  {rec.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}