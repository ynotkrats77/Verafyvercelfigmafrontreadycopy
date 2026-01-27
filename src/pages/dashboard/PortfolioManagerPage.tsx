import { motion } from 'motion/react';
import {
  Briefcase,
  Plus,
  Download,
  Upload,
  AlertCircle,
  Calendar,
  TrendingUp,
  BarChart3,
  Trash2,
  Edit,
  Copy,
  FileText,
  Info,
} from 'lucide-react';
import { useState } from 'react';

interface PortfolioManagerPageProps {
  isDark: boolean;
}

interface Portfolio {
  id: string;
  name: string;
  type: 'live' | 'planned';
  createdDate: string;
  positions: number;
  trades: number;
  value?: number;
  gain?: number;
}

export function PortfolioManagerPage({ isDark }: PortfolioManagerPageProps) {
  const [activeTab, setActiveTab] = useState<'live' | 'planned'>('live');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const portfolios: Portfolio[] = [
    {
      id: '1',
      name: 'international shares',
      type: 'live',
      createdDate: '22/12/2025',
      positions: 0,
      trades: 0,
    },
    {
      id: '2',
      name: 'Domestic Holdings',
      type: 'live',
      createdDate: '15/11/2025',
      positions: 5,
      trades: 12,
      value: 29599.72,
      gain: -83119.86,
    },
  ];

  const livePortfolios = portfolios.filter(p => p.type === 'live');
  const plannedPortfolios = portfolios.filter(p => p.type === 'planned');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
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
                background: 'linear-gradient(135deg, #a855f7, #9333ea)',
              }}
            >
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Portfolio Manager
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Upload and manage your portfolio snapshots and trade confirmations. You can create up to 10 portfolios (8 remaining).
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #9333ea)',
              }}
            >
              <Plus className="w-5 h-5" />
              New Portfolio
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold transition-colors ${
                isDark
                  ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Download className="w-5 h-5" />
              Export
            </button>
          </div>
        </div>

        {/* Data Accuracy Notice */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl border-2 border-orange-500/30"
          style={{
            background: isDark ? 'rgba(249, 115, 22, 0.1)' : 'rgba(249, 115, 22, 0.05)',
          }}
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className={`font-semibold mb-1 ${isDark ? 'text-orange-400' : 'text-orange-700'}`}>
                Data Accuracy Notice
              </h3>
              <p className={`text-sm mb-2 ${isDark ? 'text-orange-300/80' : 'text-orange-600'}`}>
                For accurate performance metrics, tax calculations, and AI insights, ensure your portfolio data is current.
              </p>
              <button className="text-sm font-semibold text-orange-500 hover:text-orange-600 flex items-center gap-1">
                <Info className="w-4 h-4" />
                Learn more
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Import Holdings Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`lg:col-span-2 p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Upload className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Import Holdings
            </h2>
          </div>
          <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Upload your current holdings snapshot from CSV or Excel files
          </p>

          {/* File Upload Area */}
          <div className="mb-6">
            <label
              htmlFor="file-upload"
              className={`flex items-center justify-center gap-3 p-8 rounded-xl border-2 border-dashed cursor-pointer transition-all ${
                isDark
                  ? 'border-slate-600 hover:border-purple-500 hover:bg-slate-800/50'
                  : 'border-slate-300 hover:border-purple-500 hover:bg-purple-50'
              }`}
            >
              <input
                id="file-upload"
                type="file"
                accept=".csv,.xlsx,.xls"
                className="hidden"
                onChange={handleFileChange}
              />
              <FileText className={`w-8 h-8 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
              <div className="text-center">
                <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {selectedFile ? selectedFile.name : 'Choose File'}
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {selectedFile ? 'Click to change file' : 'no file selected'}
                </p>
              </div>
            </label>

            <div className="flex justify-end mt-4">
              <button
                disabled={!selectedFile}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-white transition-all ${
                  selectedFile
                    ? 'hover:scale-105'
                    : 'opacity-50 cursor-not-allowed'
                }`}
                style={{
                  background: selectedFile
                    ? 'linear-gradient(135deg, #a855f7, #9333ea)'
                    : '#94a3b8',
                }}
              >
                <Upload className="w-4 h-4" />
                Upload
              </button>
            </div>
          </div>

          {/* Sample Data */}
          <div className={`p-4 rounded-lg border ${
            isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50 border-slate-200'
          }`}>
            <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Don't have a file ready? Try our sample data:
            </p>
            <button
              className={`px-4 py-2 rounded-lg border font-semibold transition-colors ${
                isDark
                  ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Load Sample Portfolio
            </button>

            <div className="mt-4 pt-4 border-t"
              style={{
                borderColor: isDark ? '#334155' : '#e2e8f0',
              }}
            >
              <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Accepted CSV Headers:
              </p>
              <p className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                1) Symbol,Shares,CostBasis,CurrentPrice
              </p>
              <p className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                2) Code,Name,Qty,Avail,MM price,Avg price,MM value,Day change,Gain/Loss
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h3 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Portfolio Summary
          </h3>
          
          <div className="space-y-6">
            <div className="text-center p-4 rounded-xl"
              style={{
                background: isDark ? 'rgba(168, 85, 247, 0.1)' : 'rgba(168, 85, 247, 0.05)',
              }}
            >
              <p className={`text-5xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {livePortfolios.length}
              </p>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Live Portfolios
              </p>
            </div>

            <div className="text-center p-4 rounded-xl"
              style={{
                background: isDark ? 'rgba(100, 116, 139, 0.1)' : 'rgba(100, 116, 139, 0.05)',
              }}
            >
              <p className={`text-5xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {plannedPortfolios.length}
              </p>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Planned
              </p>
            </div>

            <div className="text-center p-4 rounded-xl"
              style={{
                background: isDark ? 'rgba(34, 211, 238, 0.1)' : 'rgba(34, 211, 238, 0.05)',
              }}
            >
              <p className={`text-5xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {portfolios.reduce((sum, p) => sum + p.positions, 0)}
              </p>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Total Positions
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab('live')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold transition-all ${
            activeTab === 'live'
              ? 'border-purple-500 bg-purple-500/10 text-purple-500'
              : isDark
              ? 'border-slate-700 text-slate-400 hover:bg-slate-800'
              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          Live ({livePortfolios.length})
        </button>
        <button
          onClick={() => setActiveTab('planned')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold transition-all ${
            activeTab === 'planned'
              ? 'border-purple-500 bg-purple-500/10 text-purple-500'
              : isDark
              ? 'border-slate-700 text-slate-400 hover:bg-slate-800'
              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Calendar className="w-4 h-4" />
          Planned ({plannedPortfolios.length})
        </button>
      </div>

      {/* Portfolio List */}
      <div className={`p-6 rounded-xl border ${
        isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {activeTab === 'live' ? 'Live Portfolios' : 'Planned Portfolios'}
            </h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {activeTab === 'live' 
                ? 'Your current holdings used for analytics and tax tracking'
                : 'Future portfolios for scenario planning'}
            </p>
          </div>
          {(activeTab === 'live' ? livePortfolios : plannedPortfolios).length > 0 && (
            <button className="text-sm font-semibold text-red-500 hover:text-red-600 flex items-center gap-1">
              <Trash2 className="w-4 h-4" />
              Clear All
            </button>
          )}
        </div>

        {/* Portfolio Cards */}
        <div className="space-y-4">
          {(activeTab === 'live' ? livePortfolios : plannedPortfolios).map((portfolio, index) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-5 rounded-xl border transition-all hover:scale-[1.01] cursor-pointer ${
                isDark ? 'border-slate-700 hover:bg-slate-700/50' : 'border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {portfolio.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs px-2 py-1 rounded"
                      style={{
                        background: isDark ? '#334155' : '#f1f5f9',
                        color: isDark ? '#94a3b8' : '#64748b',
                      }}
                    >
                      <Calendar className="w-3 h-3" />
                      {portfolio.createdDate}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Positions
                      </p>
                      <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {portfolio.positions}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Trades
                      </p>
                      <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {portfolio.trades}
                      </p>
                    </div>
                    {portfolio.value && (
                      <div>
                        <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          Total Value
                        </p>
                        <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          ${portfolio.value.toLocaleString()}
                        </p>
                      </div>
                    )}
                    {portfolio.gain && (
                      <div>
                        <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          Total Gain/Loss
                        </p>
                        <p className={`text-lg font-bold ${portfolio.gain > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          ${portfolio.gain.toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 ml-4">
                  <button
                    className={`p-2 rounded-lg transition-colors ${
                      isDark
                        ? 'hover:bg-slate-700 text-slate-400'
                        : 'hover:bg-slate-100 text-slate-600'
                    }`}
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    className={`p-2 rounded-lg transition-colors ${
                      isDark
                        ? 'hover:bg-slate-700 text-slate-400'
                        : 'hover:bg-slate-100 text-slate-600'
                    }`}
                    title="Duplicate"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    className={`p-2 rounded-lg transition-colors ${
                      isDark
                        ? 'hover:bg-red-900/30 text-red-400'
                        : 'hover:bg-red-50 text-red-600'
                    }`}
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Empty State */}
          {(activeTab === 'live' ? livePortfolios : plannedPortfolios).length === 0 && (
            <div className="text-center py-12">
              <Briefcase className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-slate-700' : 'text-slate-300'}`} />
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                No {activeTab} portfolios yet
              </h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Create your first portfolio to get started
              </p>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white mx-auto transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #9333ea)',
                }}
              >
                <Plus className="w-5 h-5" />
                Create Portfolio
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Import Trade Confirmations Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`mt-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <FileText className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Import Trade Confirmations
          </h2>
        </div>
        <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Upload trade confirmation PDFs or CSV files to automatically populate your transaction history
        </p>
        <button
          className={`px-4 py-2 rounded-lg border font-semibold transition-colors ${
            isDark
              ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
              : 'border-slate-300 text-slate-700 hover:bg-slate-100'
          }`}
        >
          Coming Soon
        </button>
      </motion.div>
    </div>
  );
}