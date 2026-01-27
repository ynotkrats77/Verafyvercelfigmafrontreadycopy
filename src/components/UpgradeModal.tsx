import { motion, AnimatePresence } from 'motion/react';
import { X, Zap, Check, TrendingUp, Sparkles, Lock } from 'lucide-react';
import { TIER_PRICING, TIER_COLORS, UserTierConfig } from '../config/userTier';

interface UpgradeModalProps {
  isDark: boolean;
  isOpen?: boolean;
  onClose: () => void;
  requiredTier: 'standard' | 'pro' | 'tax-pack';
  featureName: string;
  userTierConfig: UserTierConfig;
}

export function UpgradeModal({ 
  isDark, 
  isOpen = false, 
  onClose, 
  requiredTier, 
  featureName,
  userTierConfig 
}: UpgradeModalProps) {
  const tierInfo = {
    standard: {
      name: 'Standard Plan',
      color: '#3b82f6',
      icon: TrendingUp,
      features: [
        'AI Daily Feed with personalized insights',
        'Winners vs Losers tracking',
        'Cash Flow & Behavioral Patterns',
        'Sector Allocation analysis',
        'Risk-Adjusted Performance metrics',
        'Market Opportunity Scanner',
        'Advanced Watchlists & Screeners',
        'AI Stock Picker recommendations'
      ],
      fomo: '2,847 investors upgraded this week'
    },
    pro: {
      name: 'AI Pro Plan',
      color: '#a855f7',
      icon: Sparkles,
      features: [
        'Everything in Standard Plan',
        'AI Strategy Insights & Optimization',
        'Future Scenarios modeling',
        'Peer Comparison benchmarking',
        'Strategic Planning tools',
        'Priority customer support',
        'Advanced AI recommendations',
        'Unlimited portfolio analysis'
      ],
      fomo: '1,234 professionals chose Pro this month'
    },
    'tax-pack': {
      name: 'Tax Pack Add-On',
      color: '#f97316',
      icon: Zap,
      features: [
        'Comprehensive Tax Center',
        'Tax Planning & Strategy tools',
        'Capital Gains & Loss Harvesting',
        'Tax Reports & Documents',
        'Wash Sale detection',
        'Multi-year tax projections',
        'Form 1099 preview',
        'Tax software integration'
      ],
      fomo: '892 users added Tax Pack for tax season'
    }
  };

  const info = tierInfo[requiredTier];
  const pricing = TIER_PRICING[requiredTier];
  const Icon = info.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="pointer-events-auto max-w-2xl w-full rounded-2xl border-2 overflow-hidden"
              style={{
                background: isDark ? '#0f172a' : '#ffffff',
                borderColor: info.color,
                boxShadow: `0 0 60px ${info.color}40`
              }}
            >
              {/* Header */}
              <div 
                className="relative p-8 text-white overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)`
                }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
                  <Icon className="w-full h-full" />
                </div>
                
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Upgrade Required</h2>
                      <p className="text-white/80 text-sm">Unlock {featureName}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg mb-4">
                    This feature is available on the <strong>{info.name}</strong>
                  </p>

                  <div className="flex items-center gap-2 text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-flex">
                    <TrendingUp className="w-4 h-4" />
                    <span>{info.fomo}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Pricing */}
                <div className={`mb-6 p-6 rounded-xl border ${
                  isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Starting at
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          ${pricing.monthly}
                        </span>
                        <span className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          /month
                        </span>
                      </div>
                      <p className={`text-sm mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                        or ${pricing.annual}/year (save ${pricing.monthly * 12 - pricing.annual})
                      </p>
                    </div>
                    <div 
                      className="px-4 py-2 rounded-lg text-sm font-semibold"
                      style={{ 
                        background: `${info.color}20`,
                        color: info.color 
                      }}
                    >
                      {pricing.label}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    What's Included:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {info.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <div 
                          className="p-1 rounded-full flex-shrink-0 mt-0.5"
                          style={{ background: `${info.color}20` }}
                        >
                          <Check className="w-3 h-3" style={{ color: info.color }} />
                        </div>
                        <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Current Plan Notice */}
                {userTierConfig.currentTier !== 'starter' && (
                  <div className={`mb-6 p-4 rounded-lg border ${
                    isDark ? 'bg-cyan-900/20 border-cyan-500/30' : 'bg-cyan-50 border-cyan-200'
                  }`}>
                    <p className={`text-sm ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
                      💡 You're currently on the <strong>{userTierConfig.currentTier}</strong> plan. 
                      Upgrading will give you immediate access to all {info.name} features.
                    </p>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button
                    className="flex-1 px-6 py-4 rounded-xl font-bold text-white text-lg transition-all hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)`
                    }}
                  >
                    Upgrade to {info.name}
                  </button>
                  <button
                    onClick={onClose}
                    className={`px-6 py-4 rounded-xl border font-semibold transition-colors ${
                      isDark
                        ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                        : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Maybe Later
                  </button>
                </div>

                {/* Trust Signals */}
                <div className="mt-6 pt-6 border-t flex items-center justify-center gap-8"
                  style={{
                    borderColor: isDark ? '#334155' : '#e2e8f0'
                  }}
                >
                  <div className="text-center">
                    <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      15,000+
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Active Users
                    </p>
                  </div>
                  <div className="text-center">
                    <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      4.9★
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      User Rating
                    </p>
                  </div>
                  <div className="text-center">
                    <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      30-Day
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Money Back
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}