import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AlertTriangle, Shield, TrendingUp, Info } from 'lucide-react';

interface ConcentrationRiskPageProps {
  isDark: boolean;
}

export function ConcentrationRiskPage({ isDark }: ConcentrationRiskPageProps) {
  const holdingsConcentration = [
    { name: 'AAPL', percentage: 23, value: 58750, risk: 'high' },
    { name: 'MSFT', percentage: 18, value: 45900, risk: 'high' },
    { name: 'GOOGL', percentage: 13, value: 33150, risk: 'medium' },
    { name: 'NVDA', percentage: 11, value: 28050, risk: 'medium' },
    { name: 'AMZN', percentage: 9, value: 22950, risk: 'medium' },
    { name: 'Others', percentage: 26, value: 66200, risk: 'low' },
  ];

  const sectorConcentration = [
    { sector: 'Technology', percentage: 45, risk: 'high', color: '#22D3EE' },
    { sector: 'Healthcare', percentage: 20, risk: 'medium', color: '#A855F7' },
    { sector: 'Finance', percentage: 18, risk: 'medium', color: '#3B82F6' },
    { sector: 'Consumer', percentage: 10, risk: 'low', color: '#F59E0B' },
    { sector: 'Energy', percentage: 7, risk: 'low', color: '#10B981' },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-amber-400';
      case 'low': return 'text-emerald-400';
      default: return 'text-slate-400';
    }
  };

  const getRiskBg = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-500/10';
      case 'medium': return 'bg-amber-500/10';
      case 'low': return 'bg-emerald-500/10';
      default: return 'bg-slate-500/10';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Concentration Risk Analysis
        </h1>
        <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Monitor portfolio concentration to reduce single-asset exposure
        </p>
      </div>

      {/* Risk Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-500/30' 
              : 'bg-gradient-to-br from-red-50 to-red-100 border-red-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm ${isDark ? 'text-red-300' : 'text-red-600'}`}>Overall Risk</span>
            <AlertTriangle className={`w-5 h-5 ${isDark ? 'text-red-400' : 'text-red-500'}`} />
          </div>
          <p className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>High</p>
          <p className={`text-sm ${isDark ? 'text-red-300' : 'text-red-600'}`}>
            Top 3 = 54% of portfolio
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-gradient-to-br from-amber-900/20 to-amber-800/20 border-amber-500/30' 
              : 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm ${isDark ? 'text-amber-300' : 'text-amber-600'}`}>Sector Risk</span>
            <AlertTriangle className={`w-5 h-5 ${isDark ? 'text-amber-400' : 'text-amber-500'}`} />
          </div>
          <p className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Medium</p>
          <p className={`text-sm ${isDark ? 'text-amber-300' : 'text-amber-600'}`}>
            Tech = 45% concentrated
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 border-emerald-500/30' 
              : 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`}>Diversification</span>
            <Shield className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} />
          </div>
          <p className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Fair</p>
          <p className={`text-sm ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`}>
            55 holdings across 5 sectors
          </p>
        </motion.div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Holdings Concentration */}
        <div className={`p-6 rounded-xl border backdrop-blur-sm ${
          isDark 
            ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
            : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Top Holdings Concentration
          </h3>
          <div style={{ minHeight: '300px', height: '300px' }}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={holdingsConcentration}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#E2E8F0'} />
                <XAxis dataKey="name" stroke={isDark ? '#94A3B8' : '#64748B'} />
                <YAxis stroke={isDark ? '#94A3B8' : '#64748B'} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDark ? '#1E293B' : '#FFFFFF', 
                    border: `1px solid ${isDark ? '#334155' : '#E2E8F0'}`,
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="percentage" fill="#22D3EE" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sector Concentration */}
        <div className={`p-6 rounded-xl border backdrop-blur-sm ${
          isDark 
            ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
            : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Sector Concentration
          </h3>
          <div style={{ minHeight: '300px', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sectorConcentration}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ sector, percentage }) => `${sector} ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="percentage"
                >
                  {sectorConcentration.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Holdings Detail Table */}
      <div className={`p-6 rounded-xl border backdrop-blur-sm ${
        isDark 
          ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
          : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Holdings Risk Breakdown
        </h3>
        <div className="space-y-3">
          {holdingsConcentration.map((holding, index) => (
            <motion.div
              key={holding.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-lg border ${
                isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {holding.name}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold uppercase ${
                    getRiskBg(holding.risk)
                  } ${getRiskColor(holding.risk)}`}>
                    {holding.risk} risk
                  </span>
                </div>
                <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {holding.percentage}%
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${holding.percentage}%` }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`h-full ${
                      holding.risk === 'high' ? 'bg-red-500' :
                      holding.risk === 'medium' ? 'bg-amber-500' :
                      'bg-emerald-500'
                    }`}
                  />
                </div>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  ${holding.value.toLocaleString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className={`p-6 rounded-xl border backdrop-blur-sm ${
        isDark 
          ? 'bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border-cyan-500/20' 
          : 'bg-gradient-to-br from-cyan-50 to-purple-50 border-cyan-200'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Info className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-500'}`} />
          <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Risk Reduction Recommendations
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border ${
            isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Reduce Top 3 Concentration
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Consider trimming AAPL, MSFT, and GOOGL to below 15% each. Reinvest in underrepresented sectors.
                </p>
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-lg border ${
            isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Diversify Sector Exposure
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Technology is 45% of portfolio. Add exposure to industrials, materials, or international markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}