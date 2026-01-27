import { motion } from 'framer-motion';
import {
  GitCompare,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Info,
  Download,
  Plus,
  Minus,
} from 'lucide-react';
import { useState } from 'react';

interface ComparePortfoliosPageProps {
  isDark: boolean;
}

interface PortfolioComparison {
  id: string;
  name: string;
  value: number;
  return: number;
  returnPercent: number;
  holdings: number;
  topHolding: {
    ticker: string;
    allocation: number;
  };
  riskScore: number;
  volatility: number;
}

export function ComparePortfoliosPage({ isDark }: ComparePortfoliosPageProps) {
  const [selectedPortfolios, setSelectedPortfolios] = useState<string[]>(['1', '2']);

  const portfolios: PortfolioComparison[] = [
    {
      id: '1',
      name: 'Domestic Holdings',
      value: 29599.72,
      return: -83119.86,
      returnPercent: -73.75,
      holdings: 12,
      topHolding: { ticker: 'DOC', allocation: 83 },
      riskScore: 85,
      volatility: 42.3,
    },
    {
      id: '2',
      name: 'International Shares',
      value: 45280.0,
      return: 8420.5,
      returnPercent: 22.85,
      holdings: 18,
      topHolding: { ticker: 'AAPL', allocation: 15 },
      riskScore: 45,
      volatility: 18.2,
    },
  ];

  const selectedData = portfolios.filter(p => selectedPortfolios.includes(p.id));

  const metrics = [
    { label: 'Total Value', key: 'value', format: 'currency' },
    { label: 'Total Return', key: 'return', format: 'currency' },
    { label: 'Return %', key: 'returnPercent', format: 'percent' },
    { label: 'Holdings', key: 'holdings', format: 'number' },
    { label: 'Risk Score', key: 'riskScore', format: 'number' },
    { label: 'Volatility', key: 'volatility', format: 'percent' },
  ];

  const formatValue = (value: number, format: string) => {
    if (format === 'currency') {
      return new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD',
        minimumFractionDigits: 2,
      }).format(value);
    }
    if (format === 'percent') {
      return `${value.toFixed(2)}%`;
    }
    return value.toString();
  };

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="p-3 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              }}
            >
              <GitCompare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Compare Portfolios
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Side-by-side comparison of performance, allocation, and risk metrics
              </p>
            </div>
          </div>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold transition-colors ${
              isDark
                ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Download className="w-5 h-5" />
            Export Comparison
          </button>
        </div>
      </div>

      {/* Portfolio Selection */}
      <div className={`p-6 rounded-xl border mb-6 ${
        isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <PieChart className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Select Portfolios to Compare
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {portfolios.map(portfolio => (
            <label
              key={portfolio.id}
              className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedPortfolios.includes(portfolio.id)
                  ? isDark
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-cyan-500 bg-cyan-50'
                  : isDark
                  ? 'border-slate-700 hover:border-slate-600'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedPortfolios.includes(portfolio.id)}
                onChange={e => {
                  if (e.target.checked) {
                    setSelectedPortfolios([...selectedPortfolios, portfolio.id]);
                  } else {
                    setSelectedPortfolios(selectedPortfolios.filter(id => id !== portfolio.id));
                  }
                }}
                className="hidden"
              />
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                selectedPortfolios.includes(portfolio.id)
                  ? 'bg-cyan-500 border-cyan-500'
                  : isDark
                  ? 'border-slate-600'
                  : 'border-slate-300'
              }`}>
                {selectedPortfolios.includes(portfolio.id) && (
                  <Plus className="w-3 h-3 text-white" />
                )}
              </div>
              <div className="flex-1">
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {portfolio.name}
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {formatValue(portfolio.value, 'currency')}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      {selectedData.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Performance Comparison
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                  <th className={`text-left py-3 px-4 font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Metric
                  </th>
                  {selectedData.map(portfolio => (
                    <th
                      key={portfolio.id}
                      className={`text-right py-3 px-4 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                      {portfolio.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {metrics.map(metric => (
                  <tr
                    key={metric.key}
                    className={`border-b ${isDark ? 'border-slate-700/50' : 'border-slate-100'}`}
                  >
                    <td className={`py-4 px-4 font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {metric.label}
                    </td>
                    {selectedData.map(portfolio => {
                      const value = portfolio[metric.key as keyof PortfolioComparison] as number;
                      const isNegative = value < 0;
                      return (
                        <td
                          key={portfolio.id}
                          className={`py-4 px-4 text-right font-semibold ${
                            metric.key === 'return' || metric.key === 'returnPercent'
                              ? isNegative
                                ? 'text-red-500'
                                : 'text-green-500'
                              : isDark
                              ? 'text-white'
                              : 'text-slate-900'
                          }`}
                        >
                          <div className="flex items-center justify-end gap-2">
                            {(metric.key === 'return' || metric.key === 'returnPercent') && (
                              isNegative ? (
                                <TrendingDown className="w-4 h-4" />
                              ) : (
                                <TrendingUp className="w-4 h-4" />
                              )
                            )}
                            {formatValue(value, metric.format)}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr>
                  <td className={`py-4 px-4 font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Top Holding
                  </td>
                  {selectedData.map(portfolio => (
                    <td
                      key={portfolio.id}
                      className={`py-4 px-4 text-right font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                      {portfolio.topHolding.ticker} ({portfolio.topHolding.allocation}%)
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      ) : (
        <div className={`p-12 rounded-xl border text-center ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}>
          <Info className={`w-12 h-12 mx-auto mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
          <p className={`text-lg font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Select at least one portfolio to view comparison
          </p>
        </div>
      )}

      {/* Risk Analysis */}
      {selectedData.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`mt-6 p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Risk Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedData.map(portfolio => {
              const riskLevel = portfolio.riskScore > 70 ? 'High' : portfolio.riskScore > 40 ? 'Medium' : 'Low';
              const riskColor = portfolio.riskScore > 70 ? '#ef4444' : portfolio.riskScore > 40 ? '#f97316' : '#22c55e';
              
              return (
                <div key={portfolio.id}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {portfolio.name}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: riskColor }}>
                      {riskLevel} Risk
                    </span>
                  </div>
                  <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${portfolio.riskScore}%`,
                        background: `linear-gradient(90deg, ${riskColor}, ${riskColor}dd)`,
                      }}
                    />
                  </div>
                  <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Volatility: {portfolio.volatility}%
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
