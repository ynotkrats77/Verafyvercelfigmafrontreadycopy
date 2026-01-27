import { motion } from 'motion/react';
import {
  Shield,
  CheckCircle,
  AlertCircle,
  XCircle,
  TrendingUp,
  Target,
  Award,
  Info,
} from 'lucide-react';

interface PortfolioHealthPageProps {
  isDark: boolean;
}

export function PortfolioHealthPage({ isDark }: PortfolioHealthPageProps) {
  const healthScore = 68;
  const healthLevel = healthScore >= 80 ? 'Excellent' : healthScore >= 60 ? 'Good' : healthScore >= 40 ? 'Fair' : 'Poor';
  const healthColor = healthScore >= 80 ? '#22c55e' : healthScore >= 60 ? '#22D3EE' : healthScore >= 40 ? '#f97316' : '#ef4444';

  const categories = [
    {
      name: 'Diversification',
      score: 45,
      status: 'warning',
      icon: Target,
      details: 'Portfolio heavily concentrated in single stock (DOC - 83%)',
      recommendation: 'Reduce concentration by rebalancing into other sectors',
    },
    {
      name: 'Risk Level',
      score: 65,
      status: 'moderate',
      icon: Shield,
      details: 'Moderate portfolio volatility detected',
      recommendation: 'Consider adding defensive stocks or bonds',
    },
    {
      name: 'Performance',
      score: 35,
      status: 'poor',
      icon: TrendingUp,
      details: 'Significant unrealized losses (-$83K)',
      recommendation: 'Review underperforming positions for potential tax-loss harvesting',
    },
    {
      name: 'Asset Allocation',
      score: 85,
      status: 'good',
      icon: Award,
      details: 'Good sector distribution across holdings',
      recommendation: 'Maintain current allocation strategy',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
      case 'moderate':
        return <AlertCircle className="w-5 h-5 text-orange-500" />;
      case 'poor':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-slate-500" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#22c55e';
    if (score >= 60) return '#22D3EE';
    if (score >= 40) return '#f97316';
    return '#ef4444';
  };

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-3 rounded-xl"
            style={{
              background: `linear-gradient(135deg, ${healthColor}, ${healthColor}dd)`,
            }}
          >
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Portfolio Health
            </h1>
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Comprehensive health assessment and improvement recommendations
            </p>
          </div>
        </div>
      </div>

      {/* Overall Health Score */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`p-8 rounded-xl border mb-6 text-center ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-6">
            {/* Background circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="none"
                stroke={isDark ? '#334155' : '#e2e8f0'}
                strokeWidth="16"
              />
              {/* Progress circle */}
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="none"
                stroke={healthColor}
                strokeWidth="16"
                strokeDasharray={`${(healthScore / 100) * 552.92} 552.92`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            {/* Score text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {healthScore}
              </span>
              <span className={`text-lg font-semibold mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                / 100
              </span>
            </div>
          </div>
          <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {healthLevel} Health
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Your portfolio shows room for improvement
          </p>
        </div>
      </motion.div>

      {/* Health Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border ${
                isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      background: isDark ? 'rgba(34, 211, 238, 0.1)' : 'rgba(34, 211, 238, 0.1)',
                    }}
                  >
                    <Icon className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {category.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {getStatusIcon(category.status)}
                      <span className={`text-sm font-semibold`} style={{ color: getScoreColor(category.score) }}>
                        {category.score}/100
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className={`h-2 rounded-full overflow-hidden mb-4 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${category.score}%`,
                    background: `linear-gradient(90deg, ${getScoreColor(category.score)}, ${getScoreColor(category.score)}dd)`,
                  }}
                />
              </div>

              {/* Details */}
              <div className={`p-4 rounded-lg mb-3 ${
                isDark ? 'bg-slate-900/50' : 'bg-slate-50'
              }`}>
                <p className={`text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Current Status
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {category.details}
                </p>
              </div>

              {/* Recommendation */}
              <div className={`p-4 rounded-lg border-l-4`} style={{ borderColor: getScoreColor(category.score) }}>
                <p className={`text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Recommendation
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {category.recommendation}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Action Items */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`mt-6 p-6 rounded-xl border ${
          isDark ? 'bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/30' : 'bg-orange-50 border-orange-200'
        }`}
      >
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Priority Actions
            </h3>
            <ul className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">1.</span>
                <span>Reduce DOC concentration from 83% to below 40% through diversification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">2.</span>
                <span>Review and consider tax-loss harvesting on DOC and SXL positions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-1">3.</span>
                <span>Add defensive positions or bonds to reduce overall portfolio volatility</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
