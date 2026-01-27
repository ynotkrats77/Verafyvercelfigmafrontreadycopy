import { motion } from 'framer-motion';
import { Clock, Zap, Heart, TrendingUp, Shield, AlertTriangle } from 'lucide-react';
import { ThemedButton } from './ui/themed-button';
import { useState, useEffect } from 'react';

interface TrialEndingCTAProps {
  isDark: boolean;
  daysRemaining: number;
  currentTier: 'starter' | 'standard' | 'pro';
  onUpgrade?: () => void;
  onDismiss?: () => void;
  variant?: 'banner' | 'modal' | 'card' | 'urgent';
}

export function TrialEndingCTA({
  isDark,
  daysRemaining,
  currentTier,
  onUpgrade,
  onDismiss,
  variant = 'banner'
}: TrialEndingCTAProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(daysRemaining));
  const isUrgent = daysRemaining <= 3;
  const isCritical = daysRemaining <= 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(daysRemaining));
    }, 1000);
    return () => clearInterval(timer);
  }, [daysRemaining]);

  function calculateTimeLeft(days: number) {
    const now = new Date();
    const end = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
    const diff = end.getTime() - now.getTime();

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  // URGENT MODAL VARIANT (Last 24 hours)
  if (variant === 'urgent' || (variant === 'modal' && isCritical)) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          className={`relative max-w-2xl w-full rounded-3xl overflow-hidden ${
            isDark
              ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
              : 'bg-gradient-to-br from-white via-slate-50 to-white'
          } shadow-2xl`}
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl border-4 border-red-500/50 animate-pulse" />
          
          {/* Urgent Header */}
          <div className="relative bg-gradient-to-r from-red-600 via-orange-500 to-red-600 p-8 text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <AlertTriangle className="w-16 h-16 text-white" />
            </motion.div>
            
            <h2 className="text-3xl font-bold text-white mb-2">
              Your Trial Ends in {timeLeft.hours}h {timeLeft.minutes}m
            </h2>
            <p className="text-white/90 text-lg">
              Don't lose access to the insights that could save your portfolio
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className={`mb-8 p-6 rounded-2xl ${
              isDark ? 'bg-red-500/10 border border-red-500/30' : 'bg-red-50 border border-red-200'
            }`}>
              <p className={`text-center text-lg font-semibold mb-4 ${
                isDark ? 'text-red-400' : 'text-red-700'
              }`}>
                In the last 14 days, Vera helped you:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <StatItem
                  icon={TrendingUp}
                  value="+12.3%"
                  label="Portfolio Growth"
                  isDark={isDark}
                  color="green"
                />
                <StatItem
                  icon={Shield}
                  value="3"
                  label="Risks Avoided"
                  isDark={isDark}
                  color="blue"
                />
                <StatItem
                  icon={Zap}
                  value="$4,280"
                  label="Potential Saved"
                  isDark={isDark}
                  color="purple"
                />
                <StatItem
                  icon={Heart}
                  value="47"
                  label="Insights Delivered"
                  isDark={isDark}
                  color="pink"
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <p className={`text-xl mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <span className="font-bold">Imagine losing all of this tomorrow.</span>
              </p>
              <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Your portfolio doesn't stop moving. Neither should your insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ThemedButton
                onClick={onUpgrade}
                size="lg"
                className="flex-1 text-lg py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                <Zap className="w-5 h-5 mr-2" />
                Keep My {currentTier === 'pro' ? 'Pro' : 'Standard'} Access - $
                {currentTier === 'pro' ? '20' : '10'}/mo
              </ThemedButton>
              
              {onDismiss && (
                <button
                  onClick={onDismiss}
                  className={`px-6 py-3 text-sm ${
                    isDark ? 'text-slate-500 hover:text-slate-400' : 'text-slate-400 hover:text-slate-500'
                  } transition-colors`}
                >
                  I'll risk it
                </button>
              )}
            </div>

            <p className={`text-center text-xs mt-6 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              🔒 Lock in 50% founding member discount forever • Cancel anytime
            </p>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // BANNER VARIANT (Top of dashboard)
  if (variant === 'banner') {
    return (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`relative overflow-hidden ${
          isUrgent
            ? 'bg-gradient-to-r from-red-600 via-orange-500 to-red-600'
            : 'bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600'
        } p-4 sm:p-6 text-white shadow-lg`}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <motion.div
              animate={isUrgent ? { scale: [1, 1.2, 1] } : { rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {isUrgent ? (
                <AlertTriangle className="w-8 h-8 text-white" />
              ) : (
                <Clock className="w-8 h-8 text-white" />
              )}
            </motion.div>

            <div>
              <h3 className="font-bold text-lg sm:text-xl mb-1">
                {isUrgent ? (
                  <>⚠️ URGENT: Only {daysRemaining} day{daysRemaining !== 1 ? 's' : ''} left in your trial!</>
                ) : (
                  <>Your trial ends in {daysRemaining} days</>
                )}
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                {isUrgent ? (
                  <>Don't lose the insights keeping your portfolio on track</>
                ) : (
                  <>Continue getting AI-powered insights for just ${currentTier === 'pro' ? '20' : '10'}/month</>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isUrgent && (
              <div className="hidden sm:block text-right mr-2">
                <div className="text-2xl font-mono font-bold">
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs text-white/80">Time remaining</div>
              </div>
            )}

            <ThemedButton
              onClick={onUpgrade}
              variant="outline"
              className="bg-white text-slate-900 hover:bg-slate-100 border-0 font-semibold whitespace-nowrap"
            >
              <Zap className="w-4 h-4 mr-2" />
              Keep My Access
            </ThemedButton>

            {onDismiss && !isUrgent && (
              <button
                onClick={onDismiss}
                className="text-white/70 hover:text-white transition-colors p-2"
                title="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // CARD VARIANT (In-dashboard card)
  if (variant === 'card') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`relative overflow-hidden rounded-2xl ${
          isDark
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
            : 'bg-gradient-to-br from-white via-slate-50 to-white'
        } border-2 ${
          isUrgent ? 'border-red-500/50' : 'border-cyan-500/30'
        } p-6 shadow-xl`}
      >
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl ${
          isUrgent ? 'bg-red-500/20' : 'bg-cyan-500/20'
        }`} />

        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl ${
                isUrgent
                  ? 'bg-red-500/20 text-red-400'
                  : 'bg-cyan-500/20 text-cyan-400'
              }`}>
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Trial Ending Soon
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {daysRemaining} day{daysRemaining !== 1 ? 's' : ''} remaining
                </p>
              </div>
            </div>

            {isUrgent && (
              <div className={`text-right ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                <div className="text-2xl font-mono font-bold">
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs">Hours left</div>
              </div>
            )}
          </div>

          <p className={`text-sm mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {isUrgent ? (
              <>
                <strong>Your portfolio doesn't take breaks.</strong> In the last 14 days, Vera helped you
                avoid 3 major risks and identified $4,280 in potential savings. Keep this protection active.
              </>
            ) : (
              <>
                You've experienced the power of AI-driven portfolio intelligence. Continue your journey
                for just ${currentTier === 'pro' ? '20' : '10'}/month with our founding member discount.
              </>
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <ThemedButton
              onClick={onUpgrade}
              size="lg"
              className="flex-1"
            >
              <Zap className="w-4 h-4 mr-2" />
              Continue for ${currentTier === 'pro' ? '20' : '10'}/mo
            </ThemedButton>
            
            {onDismiss && (
              <button
                onClick={onDismiss}
                className={`px-4 py-2 text-sm ${
                  isDark ? 'text-slate-500 hover:text-slate-400' : 'text-slate-400 hover:text-slate-500'
                } transition-colors`}
              >
                Remind me later
              </button>
            )}
          </div>

          <p className={`text-center text-xs mt-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            🔒 50% founding member discount • Cancel anytime
          </p>
        </div>
      </motion.div>
    );
  }

  return null;
}

// Helper Component for Stats
function StatItem({
  icon: Icon,
  value,
  label,
  isDark,
  color
}: {
  icon: any;
  value: string;
  label: string;
  isDark: boolean;
  color: 'green' | 'blue' | 'purple' | 'pink';
}) {
  const colors = {
    green: isDark ? 'text-green-400 bg-green-500/10' : 'text-green-600 bg-green-50',
    blue: isDark ? 'text-blue-400 bg-blue-500/10' : 'text-blue-600 bg-blue-50',
    purple: isDark ? 'text-purple-400 bg-purple-500/10' : 'text-purple-600 bg-purple-50',
    pink: isDark ? 'text-pink-400 bg-pink-500/10' : 'text-pink-600 bg-pink-50'
  };

  return (
    <div className={`p-4 rounded-xl ${colors[color]}`}>
      <Icon className="w-5 h-5 mb-2" />
      <div className="font-bold text-xl mb-1">{value}</div>
      <div className="text-xs opacity-80">{label}</div>
    </div>
  );
}
