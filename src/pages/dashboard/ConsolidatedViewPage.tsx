import { motion } from 'motion/react';
import {
  Activity,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from 'lucide-react';

interface ConsolidatedViewPageProps {
  isDark: boolean;
}

interface HoldingSummary {
  ticker: string;
  name: string;
  totalShares: number;
  avgCost: number;
  currentPrice: number;
  totalValue: number;
  totalGain: number;
  gainPercent: number;
  portfolios: string[];
}

export function ConsolidatedViewPage({ isDark }: ConsolidatedViewPageProps) {
  const holdings: HoldingSummary[] = [
    {
      ticker: 'DOC',
      name: 'Healthia Ltd',
      totalShares: 24687,
      avgCost: 4.56,
      currentPrice: 1.00,
      totalValue: 24687,
      totalGain: -87519.72,
      gainPercent: -77.99,
      portfolios: ['Domestic Holdings'],
    },
    {
      ticker: 'SXL',
      name: 'Southern Cross Media',
      totalShares: 13905,
      avgCost: 1.00,
      currentPrice: 0.46,
      totalValue: 6433.8,
      totalGain: -7471.2,
      gainPercent: -53.73,
      portfolios: ['Domestic Holdings'],
    },
    {
      ticker: 'AAPL',
      name: 'Apple Inc',
      totalShares: 50,
      avgCost: 145.20,
      currentPrice: 182.50,
      totalValue: 9125,
      totalGain: 1865,
      gainPercent: 25.68,
      portfolios: ['International Shares'],
    },
  ];

  const portfolioSummary = {
    totalValue: 110318.52,
    totalGain: -81125.92,
    gainPercent: -42.37,
    totalHoldings: 23,
    totalPortfolios: 2,
    topGainer: { ticker: 'AAPL', gain: 25.68 },
    topLoser: { ticker: 'DOC', gain: -77.99 },
  };

  const allocationBySector = [
    { sector: 'Healthcare', value: 24687, percent: 22.38 },
    { sector: 'Media', value: 6433.8, percent: 5.83 },
    { sector: 'Technology', value: 47280, percent: 42.85 },
    { sector: 'Finance', value: 18912, percent: 17.14 },
    { sector: 'Other', value: 13005.72, percent: 11.80 },
  ];

  const sectorColors = [
    '#22D3EE',
    '#3b82f6',
    '#a855f7',
    '#f97316',
    '#64748b',
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-3 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #22D3EE, #0ea5e9)',
            }}
          >
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Consolidated View
            </h1>
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              All portfolios combined in one comprehensive view
            </p>
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
              Total Value
            </span>
            <DollarSign className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
          </div>
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            ${portfolioSummary.totalValue.toLocaleString('en-AU', { minimumFractionDigits: 2 })}
          </p>
          <p className={`text-sm mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            Across {portfolioSummary.totalPortfolios} portfolios
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
              Total Gain/Loss
            </span>
            {portfolioSummary.totalGain < 0 ? (
              <TrendingDown className="w-5 h-5 text-red-500" />
            ) : (
              <TrendingUp className="w-5 h-5 text-green-500" />
            )}
          </div>
          <p className={`text-2xl font-bold ${portfolioSummary.totalGain < 0 ? 'text-red-500' : 'text-green-500'}`}>
            ${Math.abs(portfolioSummary.totalGain).toLocaleString('en-AU', { minimumFractionDigits: 2 })}
          </p>
          <p className={`text-sm mt-1 ${portfolioSummary.totalGain < 0 ? 'text-red-500/70' : 'text-green-500/70'}`}>
            {portfolioSummary.gainPercent.toFixed(2)}% {portfolioSummary.totalGain < 0 ? 'loss' : 'gain'}
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
              Top Gainer
            </span>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {portfolioSummary.topGainer.ticker}
          </p>
          <p className="text-sm mt-1 text-green-500">
            +{portfolioSummary.topGainer.gain.toFixed(2)}%
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
              Top Loser
            </span>
            <XCircle className="w-5 h-5 text-red-500" />
          </div>
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {portfolioSummary.topLoser.ticker}
          </p>
          <p className="text-sm mt-1 text-red-500">
            {portfolioSummary.topLoser.gain.toFixed(2)}%
          </p>
        </motion.div>
      </div>

      {/* Sector Allocation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`p-6 rounded-xl border mb-6 ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-6">
          <PieChart className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Sector Allocation
          </h2>
        </div>
        <div className="space-y-4">
          {allocationBySector.map((sector, index) => (
            <div key={sector.sector}>
              <div className="flex items-center justify-between mb-2">
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {sector.sector}
                </span>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  ${sector.value.toLocaleString('en-AU')} ({sector.percent.toFixed(2)}%)
                </span>
              </div>
              <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${sector.percent}%`,
                    background: sectorColors[index],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* All Holdings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            All Holdings
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <th className={`text-left py-3 px-4 font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Ticker
                </th>
                <th className={`text-left py-3 px-4 font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Name
                </th>
                <th className={`text-right py-3 px-4 font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Shares
                </th>
                <th className={`text-right py-3 px-4 font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Avg Cost
                </th>
                <th className={`text-right py-3 px-4 font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Current
                </th>
                <th className={`text-right py-3 px-4 font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Value
                </th>
                <th className={`text-right py-3 px-4 font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Gain/Loss
                </th>
                <th className={`text-left py-3 px-4 font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Portfolios
                </th>
              </tr>
            </thead>
            <tbody>
              {holdings.map(holding => (
                <tr
                  key={holding.ticker}
                  className={`border-b ${isDark ? 'border-slate-700/50' : 'border-slate-100'} hover:${
                    isDark ? 'bg-slate-800/50' : 'bg-slate-50'
                  } transition-colors`}
                >
                  <td className={`py-4 px-4 font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    {holding.ticker}
                  </td>
                  <td className={`py-4 px-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {holding.name}
                  </td>
                  <td className={`py-4 px-4 text-right ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {holding.totalShares.toLocaleString()}
                  </td>
                  <td className={`py-4 px-4 text-right ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    ${holding.avgCost.toFixed(2)}
                  </td>
                  <td className={`py-4 px-4 text-right ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    ${holding.currentPrice.toFixed(2)}
                  </td>
                  <td className={`py-4 px-4 text-right font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    ${holding.totalValue.toLocaleString('en-AU', { minimumFractionDigits: 2 })}
                  </td>
                  <td className={`py-4 px-4 text-right font-semibold ${
                    holding.totalGain < 0 ? 'text-red-500' : 'text-green-500'
                  }`}>
                    <div className="flex items-center justify-end gap-2">
                      {holding.totalGain < 0 ? (
                        <TrendingDown className="w-4 h-4" />
                      ) : (
                        <TrendingUp className="w-4 h-4" />
                      )}
                      <span>
                        ${Math.abs(holding.totalGain).toLocaleString('en-AU', { minimumFractionDigits: 2 })}
                        <span className="text-xs ml-1">({holding.gainPercent.toFixed(2)}%)</span>
                      </span>
                    </div>
                  </td>
                  <td className={`py-4 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm`}>
                    {holding.portfolios.join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
