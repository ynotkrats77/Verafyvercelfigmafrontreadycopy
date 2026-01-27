import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Gift, DollarSign, TrendingUp, Mail, CheckCircle, Award, Lock, Copy, Share2 } from 'lucide-react';
import { GlassCard } from '../../components/GlassCard';
import { ThemedButton } from '../../components/ui/themed-button';
import { CHART_COLORS } from '../../config/theme';

interface ReferralProgramPageProps {
  isDark: boolean;
  isAuthenticated?: boolean;
}

export function ReferralProgramPage({ isDark, isAuthenticated = false }: ReferralProgramPageProps) {
  const [referralCode, setReferralCode] = useState('AMIT2026');
  const [showCopied, setShowCopied] = useState(false);

  const copyReferralLink = () => {
    navigator.clipboard.writeText(`https://verafy.ai/join/${referralCode}`);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const userStats = {
    totalEarned: isAuthenticated ? 40 : 0,
    pendingRewards: isAuthenticated ? 20 : 0,
    totalReferrals: isAuthenticated ? 7 : 0,
    activeReferrals: isAuthenticated ? 4 : 0,
  };

  const howItWorks = [
    {
      step: 1,
      title: 'Sign Declaration',
      description: 'Confirm you personally know the person you\'re inviting',
      icon: CheckCircle,
      color: CHART_COLORS.primary,
    },
    {
      step: 2,
      title: 'Friend Receives Email',
      description: 'Your friend gets a personalized invitation to join Verafy',
      icon: Mail,
      color: CHART_COLORS.info,
    },
    {
      step: 3,
      title: '14-Day Cool-Off',
      description: 'Friend tries Verafy free for 14 days with full access',
      icon: TrendingUp,
      color: CHART_COLORS.warning,
    },
    {
      step: 4,
      title: 'Earn $10 Reward',
      description: 'When they upgrade to a paid plan, you both earn $10',
      icon: DollarSign,
      color: CHART_COLORS.success,
    },
  ];

  const topReferrers = isAuthenticated ? [
    { rank: 1, name: 'Sarah M.', referrals: 23, earned: '$230' },
    { rank: 2, name: 'Michael K.', referrals: 19, earned: '$190' },
    { rank: 3, name: 'Emma L.', referrals: 15, earned: '$150' },
    { rank: 4, name: 'You (Amit V.)', referrals: 7, earned: '$70', highlight: true },
    { rank: 5, name: 'David P.', referrals: 12, earned: '$120' },
  ] : [
    { rank: 1, name: 'Sarah M.', referrals: 23, earned: '$230' },
    { rank: 2, name: 'Michael K.', referrals: 19, earned: '$190' },
    { rank: 3, name: 'Emma L.', referrals: 15, earned: '$150' },
    { rank: 4, name: 'David P.', referrals: 12, earned: '$120' },
    { rank: 5, name: 'Jessica T.', referrals: 10, earned: '$100' },
  ];

  const myReferrals = [
    { name: 'John Smith', email: 'john.s@email.com', status: 'Active Paid', earned: '$10', date: 'Jan 5, 2026' },
    { name: 'Lisa Chen', email: 'lisa.c@email.com', status: 'Active Paid', earned: '$10', date: 'Jan 3, 2026' },
    { name: 'Mark Davis', email: 'mark.d@email.com', status: 'Active Paid', earned: '$10', date: 'Dec 28, 2025' },
    { name: 'Amy Wilson', email: 'amy.w@email.com', status: 'Active Paid', earned: '$10', date: 'Dec 20, 2025' },
    { name: 'Tom Brown', email: 'tom.b@email.com', status: 'Pending', earned: '$10', date: 'Jan 10, 2026', pending: true },
    { name: 'Rachel Green', email: 'rachel.g@email.com', status: 'Trial', earned: '$0', date: 'Jan 12, 2026', trial: true },
    { name: 'Chris Lee', email: 'chris.l@email.com', status: 'Trial', earned: '$0', date: 'Jan 11, 2026', trial: true },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Login Required Overlay */}
      {!isAuthenticated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-4"
          >
            <GlassCard isDark={isDark} className="text-center p-8">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: 'rgba(34, 211, 238, 0.2)' }}
              >
                <Lock className="w-8 h-8" style={{ color: CHART_COLORS.primary }} />
              </div>
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Login Required
              </h2>
              <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Sign in to access your referral dashboard and start earning rewards
              </p>
              <ThemedButton variant="primary" className="w-full mb-3">
                Sign In
              </ThemedButton>
              <ThemedButton variant="outline" className="w-full">
                Create Account
              </ThemedButton>
            </GlassCard>
          </motion.div>
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-8 h-8" style={{ color: CHART_COLORS.primary }} />
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Referral Program
          </h1>
          <div className="px-3 py-1 rounded-full" style={{ background: 'rgba(34, 211, 238, 0.2)' }}>
            <span className="text-xs font-semibold" style={{ color: CHART_COLORS.primary }}>
              EARN $10 PER FRIEND
            </span>
          </div>
        </div>
        <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Invite friends and earn rewards when they upgrade to paid plans
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border ${
            isDark
              ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700'
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
          }`}
        >
          <DollarSign className="w-6 h-6 mb-2" style={{ color: CHART_COLORS.success }} />
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            ${userStats.totalEarned}
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Total Earned</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border ${
            isDark
              ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700'
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
          }`}
        >
          <TrendingUp className="w-6 h-6 mb-2" style={{ color: CHART_COLORS.warning }} />
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            ${userStats.pendingRewards}
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Pending Rewards</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border ${
            isDark
              ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700'
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
          }`}
        >
          <Users className="w-6 h-6 mb-2" style={{ color: CHART_COLORS.primary }} />
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {userStats.totalReferrals}
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Total Referrals</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border ${
            isDark
              ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700'
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
          }`}
        >
          <Award className="w-6 h-6 mb-2" style={{ color: CHART_COLORS.secondary }} />
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {userStats.activeReferrals}
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Active Paid</p>
        </motion.div>
      </div>

      {/* Share Referral Link */}
      <GlassCard isDark={isDark} className="mb-8">
        <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Share Your Referral Link
        </h2>
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={`https://verafy.ai/join/${referralCode}`}
              readOnly
              className={`w-full px-4 py-3 rounded-lg border ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-white'
                  : 'bg-white border-slate-300 text-slate-900'
              }`}
            />
          </div>
          <ThemedButton
            variant="outline"
            onClick={copyReferralLink}
            className="flex items-center gap-2"
          >
            <Copy className="w-4 h-4" />
            {showCopied ? 'Copied!' : 'Copy'}
          </ThemedButton>
          <ThemedButton variant="primary" className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </ThemedButton>
        </div>
      </GlassCard>

      {/* How It Works */}
      <GlassCard isDark={isDark} className="mb-8">
        <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {howItWorks.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${item.color}20` }}
                >
                  <Icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold"
                  style={{ background: item.color }}
                >
                  {item.step}
                </div>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Important Note */}
        <div className={`mt-6 p-4 rounded-lg border ${
          isDark ? 'bg-amber-900/20 border-amber-500/30' : 'bg-amber-50 border-amber-200'
        }`}>
          <p className={`text-sm ${isDark ? 'text-amber-200' : 'text-amber-800'}`}>
            <strong>Important:</strong> Freemium sign-ups don't qualify for rewards. Anti-gaming rules apply. 
            You must personally know the person you're inviting.
          </p>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Referrers Leaderboard */}
        <GlassCard isDark={isDark}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            🏆 Top Referrers
          </h2>
          <div className="space-y-2">
            {topReferrers.map((referrer) => (
              <motion.div
                key={referrer.rank}
                whileHover={{ x: 4 }}
                className={`p-4 rounded-lg border flex items-center gap-4 ${
                  referrer.highlight
                    ? isDark
                      ? 'bg-cyan-500/10 border-cyan-500/30'
                      : 'bg-cyan-50 border-cyan-200'
                    : isDark
                    ? 'bg-slate-900/50 border-slate-700'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    referrer.rank <= 3 ? 'text-white' : isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                  style={{
                    background:
                      referrer.rank === 1
                        ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                        : referrer.rank === 2
                        ? 'linear-gradient(135deg, #C0C0C0, #A8A8A8)'
                        : referrer.rank === 3
                        ? 'linear-gradient(135deg, #CD7F32, #B8860B)'
                        : isDark
                        ? '#334155'
                        : '#e2e8f0',
                  }}
                >
                  {referrer.rank}
                </div>
                <div className="flex-1">
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {referrer.name}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {referrer.referrals} referrals
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {referrer.earned}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        {/* My Referrals */}
        <GlassCard isDark={isDark}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            My Referrals
          </h2>
          {isAuthenticated ? (
            <div className="space-y-2">
              {myReferrals.map((referral, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {referral.name}
                    </p>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        referral.pending
                          ? 'bg-amber-500/20 text-amber-400'
                          : referral.trial
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-emerald-500/20 text-emerald-400'
                      }`}
                    >
                      {referral.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {referral.email}
                    </span>
                    <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {referral.earned}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {referral.date}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Lock className="w-12 h-12 mx-auto mb-3" style={{ color: CHART_COLORS.primary }} />
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Sign in to view your referrals
              </p>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
