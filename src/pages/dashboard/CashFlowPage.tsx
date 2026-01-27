import { motion } from 'motion/react';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  PieChart,
  BarChart3,
  Info,
} from 'lucide-react';

interface CashFlowPageProps {
  isDark: boolean;
}

interface CashFlowData {
  month: string;
  contributions: number;
  withdrawals: number;
  dividends: number;
  net: number;
}

export function CashFlowPage({ isDark }: CashFlowPageProps) {
  const cashFlowData: CashFlowData[] = [
    { month: 'Jan', contributions: 5000, withdrawals: 0, dividends: 240, net: 5240 },
    { month: 'Feb', contributions: 5000, withdrawals: 1000, dividends: 220, net: 4220 },
    { month: 'Mar', contributions: 5000, withdrawals: 0, dividends: 280, net: 5280 },
    { month: 'Apr', contributions: 7500, withdrawals: 0, dividends: 310, net: 7810 },
    { month: 'May', contributions: 5000, withdrawals: 2000, dividends: 290, net: 3290 },
    { month: 'Jun', contributions: 5000, withdrawals: 0, dividends: 330, net: 5330 },
  ];

  const summary = {
    totalContributions: cashFlowData.reduce((sum, d) => sum + d.contributions, 0),
    totalWithdrawals: cashFlowData.reduce((sum, d) => sum + d.withdrawals, 0),
    totalDividends: cashFlowData.reduce((sum, d) => sum + d.dividends, 0),
    netCashFlow: cashFlowData.reduce((sum, d) => sum + d.net, 0),
    avgMonthlyDividend: cashFlowData.reduce((sum, d) => sum + d.dividends, 0) / cashFlowData.length,
  };

  const maxValue = Math.max(...cashFlowData.map(d => Math.max(d.contributions, d.withdrawals, d.dividends)));

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-3 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            }}
          >
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Cash Flow & Behavioral Patterns
            </h1>
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Track contributions, withdrawals, and income patterns
            </p>
            <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold" style={{
              background: 'rgba(59, 130, 246, 0.1)',
              color: '#3b82f6',
            }}>
              Standard
            </span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Total Contributions
            </span>
            <ArrowUpRight className="w-5 h-5 text-green-500" />
          </div>
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            ${summary.totalContributions.toLocaleString()}
          </p>
          <p className={`text-sm mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            Last 6 months
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Total Withdrawals
            </span>
            <ArrowDownRight className="w-5 h-5 text-red-500" />
          </div>
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            ${summary.totalWithdrawals.toLocaleString()}
          </p>
          <p className={`text-sm mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            Last 6 months
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Dividend Income
            </span>
            <DollarSign className="w-5 h-5 text-cyan-500" />
          </div>
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            ${summary.totalDividends.toLocaleString()}
          </p>
          <p className={`text-sm mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            Avg ${summary.avgMonthlyDividend.toFixed(0)}/month
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Net Cash Flow
            </span>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className={`text-2xl font-bold text-green-500`}>
            +${summary.netCashFlow.toLocaleString()}
          </p>
          <p className={`text-sm mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            Positive flow
          </p>
        </motion.div>
      </div>

      {/* Cash Flow Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`p-6 rounded-xl border mb-6 ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Monthly Cash Flow Breakdown
          </h2>
        </div>

        {/* Chart */}
        <div className="space-y-6">
          {cashFlowData.map((data, index) => (
            <div key={data.month}>
              <div className="flex items-center justify-between mb-2">
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {data.month}
                </span>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Net: ${data.net.toLocaleString()}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {/* Contributions */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Contributions</span>
                    <span className="text-green-500 font-semibold">${data.contributions.toLocaleString()}</span>
                  </div>
                  <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                    <div
                      className="h-full rounded-full bg-green-500 transition-all duration-500"
                      style={{ width: `${(data.contributions / maxValue) * 100}%` }}
                    />
                  </div>
                </div>
                {/* Withdrawals */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Withdrawals</span>
                    <span className="text-red-500 font-semibold">${data.withdrawals.toLocaleString()}</span>
                  </div>
                  <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                    <div
                      className="h-full rounded-full bg-red-500 transition-all duration-500"
                      style={{ width: `${(data.withdrawals / maxValue) * 100}%` }}
                    />
                  </div>
                </div>
                {/* Dividends */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Dividends</span>
                    <span className="text-cyan-500 font-semibold">${data.dividends.toLocaleString()}</span>
                  </div>
                  <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                    <div
                      className="h-full rounded-full bg-cyan-500 transition-all duration-500"
                      style={{ width: `${(data.dividends / maxValue) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Behavioral Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30' : 'bg-cyan-50 border-cyan-200'
        }`}
      >
        <div className="flex items-start gap-3">
          <Info className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Behavioral Insights
            </h3>
            <ul className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold mt-1">•</span>
                <span>You're maintaining consistent monthly contributions averaging $5,417</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold mt-1">•</span>
                <span>Dividend income is stable, providing passive income stream</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold mt-1">•</span>
                <span>Low withdrawal rate indicates good capital preservation behavior</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
