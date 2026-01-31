import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Gift,
  Coins,
  Users,
  DollarSign,
  Video,
  MessageSquare,
  Star,
  CheckCircle,
  Lock,
  ExternalLink,
  TrendingUp,
  Award,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { ThemedButton } from '../components/ui/themed-button';
import { CHART_COLORS } from '../config/theme';
import { SectionDivider } from '../components/SectionDivider';

interface RewardsPageProps {
  isDark: boolean;
}

type RewardTab = 'overview' | 'earn-credits' | 'referrals';

export function RewardsPage({ isDark }: RewardsPageProps) {
  const [activeTab, setActiveTab] = useState<RewardTab>('overview');

  // Mock auth state - in production, this would come from AuthContext
  const isAuthenticated = false;

  const rewardCategories = [
    {
      id: 'referrals',
      title: 'Refer Friends',
      description: 'Earn $10 for each friend who upgrades to a paid plan',
      icon: Users,
      reward: '$10',
      color: CHART_COLORS.primary,
    },
    {
      id: 'video',
      title: 'Create Videos',
      description: 'Share your Verafy experience on YouTube, TikTok, or Instagram',
      icon: Video,
      reward: 'Up to $100',
      color: '#FF0000',
    },
    {
      id: 'community',
      title: 'Help the Community',
      description: 'Answer questions, write guides, and help fellow investors',
      icon: MessageSquare,
      reward: 'Up to $150',
      color: CHART_COLORS.success,
    },
    {
      id: 'reviews',
      title: 'Submit Reviews',
      description: 'Report bugs, suggest features, and improve Verafy',
      icon: Star,
      reward: 'Up to $100',
      color: CHART_COLORS.warning,
    },
  ];

  const howItWorks = [
    { step: 1, title: 'Choose a Task', desc: 'Pick from referrals, content creation, or community tasks' },
    { step: 2, title: 'Complete & Submit', desc: 'Follow the requirements and submit for review' },
    { step: 3, title: 'Get Verified', desc: 'Our team reviews submissions within 48 hours' },
    { step: 4, title: 'Earn Rewards', desc: 'Credits applied directly to your subscription' },
  ];

  const topEarners = [
    { rank: 1, name: 'Sarah M.', earned: '$450', badge: 'Gold' },
    { rank: 2, name: 'Michael K.', earned: '$320', badge: 'Silver' },
    { rank: 3, name: 'Emma L.', earned: '$280', badge: 'Bronze' },
  ];

  const earnOpportunities = [
    {
      title: 'YouTube Video Review',
      credits: '$100',
      category: 'Video',
      icon: '📺',
      description: 'Create a detailed review (min. 5 min) showcasing Verafy features',
    },
    {
      title: 'YouTube Shorts / TikTok / Reel',
      credits: '$30',
      category: 'Video',
      icon: '🎬',
      description: 'Create a short video (max 60 sec) with tips or insights',
    },
    {
      title: 'Twitter/X Thread',
      credits: '$15',
      category: 'Social',
      icon: '🐦',
      description: 'Create a detailed thread (min. 8 tweets) with screenshots',
    },
    {
      title: 'Feature Request',
      credits: '$50',
      category: 'Feedback',
      icon: '⭐',
      description: 'Submit detailed feature requests with use cases (+$100 if implemented)',
    },
    {
      title: 'Bug Report',
      credits: '$25',
      category: 'Feedback',
      icon: '🐛',
      description: 'Report verified bugs with reproduction steps (+$75 for critical)',
    },
    {
      title: 'Write Community Guide',
      credits: '$150',
      category: 'Community',
      icon: '📖',
      description: 'Create comprehensive guides (min. 1,000 words) with screenshots',
    },
  ];

  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: Gift },
    { id: 'earn-credits' as const, label: 'Earn Credits', icon: Coins },
    { id: 'referrals' as const, label: 'Refer Friends', icon: Users },
  ];

  return (
    <div className="min-h-screen" style={{ background: isDark ? '#020617' : '#f8fafc' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse at top, rgba(34, 211, 238, 0.15) 0%, transparent 60%)'
              : 'radial-gradient(ellipse at top, rgba(34, 211, 238, 0.1) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.2)' }}
            >
              <Sparkles className="w-4 h-4" style={{ color: CHART_COLORS.primary }} />
              <span className="text-sm font-medium" style={{ color: CHART_COLORS.primary }}>
                Earn While You Invest
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Verafy <span style={{ color: CHART_COLORS.primary }}>Rewards Program</span>
            </h1>
            <p className={`text-xl max-w-2xl mx-auto mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Earn credits to offset your subscription. Share, create content, and help the community -
              there's no cap on what you can earn.
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>$10</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Per Referral</p>
              </div>
              <div className="text-center">
                <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>$150</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Max per Guide</p>
              </div>
              <div className="text-center">
                <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>No Cap</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>On Earnings</p>
              </div>
            </div>

            {!isAuthenticated && (
              <div className="flex flex-wrap justify-center gap-4">
                <ThemedButton variant="primary" className="px-8">
                  Sign Up to Start Earning
                  <ChevronRight className="w-4 h-4 ml-2" />
                </ThemedButton>
                <ThemedButton variant="outline">
                  Sign In
                </ThemedButton>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-2 justify-center mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-white'
                    : isDark
                    ? 'text-slate-400 hover:bg-slate-800'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
                style={activeTab === tab.id ? { background: CHART_COLORS.primary } : {}}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12 pb-20">
            {/* How It Works */}
            <GlassCard isDark={isDark}>
              <h2 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {howItWorks.map((item) => (
                  <div key={item.step} className="text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl"
                      style={{ background: CHART_COLORS.primary }}
                    >
                      {item.step}
                    </div>
                    <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Reward Categories */}
            <div>
              <h2 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Ways to Earn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {rewardCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <GlassCard isDark={isDark} className="h-full text-center">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                          style={{ background: `${category.color}20` }}
                        >
                          <Icon className="w-8 h-8" style={{ color: category.color }} />
                        </div>
                        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {category.title}
                        </h3>
                        <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {category.description}
                        </p>
                        <div
                          className="inline-block px-4 py-2 rounded-full font-bold"
                          style={{ background: `${category.color}20`, color: category.color }}
                        >
                          {category.reward}
                        </div>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Top Earners */}
            <GlassCard isDark={isDark}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Top Earners This Month
                </h2>
                <Award className="w-8 h-8" style={{ color: CHART_COLORS.warning }} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topEarners.map((earner) => (
                  <div
                    key={earner.rank}
                    className={`p-6 rounded-xl text-center ${
                      isDark ? 'bg-slate-800/50' : 'bg-slate-50'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-white ${
                        earner.rank === 1
                          ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                          : earner.rank === 2
                          ? 'bg-gradient-to-br from-slate-300 to-slate-400'
                          : 'bg-gradient-to-br from-orange-600 to-orange-700'
                      }`}
                    >
                      {earner.rank}
                    </div>
                    <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {earner.name}
                    </p>
                    <p className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {earner.earned}
                    </p>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: earner.rank === 1 ? 'rgba(234, 179, 8, 0.2)' : earner.rank === 2 ? 'rgba(148, 163, 184, 0.2)' : 'rgba(249, 115, 22, 0.2)',
                        color: earner.rank === 1 ? '#eab308' : earner.rank === 2 ? '#94a3b8' : '#f97316',
                      }}
                    >
                      {earner.badge}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* CTA */}
            {!isAuthenticated && (
              <div className="text-center">
                <GlassCard isDark={isDark} className="inline-block px-12 py-8">
                  <Gift className="w-12 h-12 mx-auto mb-4" style={{ color: CHART_COLORS.primary }} />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Ready to Start Earning?
                  </h3>
                  <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Create a free account to track your earnings and start referring friends.
                  </p>
                  <ThemedButton variant="primary">
                    Create Free Account
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </ThemedButton>
                </GlassCard>
              </div>
            )}
          </div>
        )}

        {/* Earn Credits Tab */}
        {activeTab === 'earn-credits' && (
          <div className="space-y-8 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {earnOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GlassCard isDark={isDark} className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{opportunity.icon}</div>
                        <div>
                          <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {opportunity.title}
                          </h3>
                          <span
                            className="px-2 py-0.5 rounded text-xs font-medium"
                            style={{ background: 'rgba(34, 211, 238, 0.1)', color: CHART_COLORS.primary }}
                          >
                            {opportunity.category}
                          </span>
                        </div>
                      </div>
                      <span
                        className="text-xl font-bold"
                        style={{ color: CHART_COLORS.success }}
                      >
                        {opportunity.credits}
                      </span>
                    </div>
                    <p className={`text-sm mb-4 flex-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {opportunity.description}
                    </p>
                    <ThemedButton variant="outline" className="w-full">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </ThemedButton>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Auth CTA */}
            {!isAuthenticated && (
              <div className="text-center pt-8">
                <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                  <Lock className="w-5 h-5" style={{ color: CHART_COLORS.primary }} />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    Sign in to submit content and track your earnings
                  </span>
                  <ThemedButton variant="primary" className="ml-4">
                    Sign In
                  </ThemedButton>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Referrals Tab */}
        {activeTab === 'referrals' && (
          <div className="space-y-8 pb-20">
            {/* How Referrals Work */}
            <GlassCard isDark={isDark}>
              <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                How Referrals Work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: 'Share Your Link', desc: 'Get your unique referral link after signing up', icon: Users, color: CHART_COLORS.primary },
                  { step: 2, title: 'Friend Joins', desc: 'They get a personalized invitation to try Verafy', icon: CheckCircle, color: CHART_COLORS.info },
                  { step: 3, title: '14-Day Trial', desc: 'Your friend enjoys full access during their trial', icon: TrendingUp, color: CHART_COLORS.warning },
                  { step: 4, title: 'Both Earn $10', desc: 'When they upgrade, you both get $10 credit', icon: DollarSign, color: CHART_COLORS.success },
                ].map((item) => {
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
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className={`mt-6 p-4 rounded-lg border ${
                isDark ? 'bg-amber-900/20 border-amber-500/30' : 'bg-amber-50 border-amber-200'
              }`}>
                <p className={`text-sm ${isDark ? 'text-amber-200' : 'text-amber-800'}`}>
                  <strong>Note:</strong> Freemium sign-ups don't qualify. You must personally know the person you're referring.
                  Anti-gaming rules apply.
                </p>
              </div>
            </GlassCard>

            {/* Referral Link Section - Auth Gated */}
            <GlassCard isDark={isDark}>
              {isAuthenticated ? (
                <div>
                  <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Your Referral Link
                  </h2>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value="https://verafy.ai/join/YOUR_CODE"
                      readOnly
                      className={`flex-1 px-4 py-3 rounded-lg border ${
                        isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                    <ThemedButton variant="outline">Copy</ThemedButton>
                    <ThemedButton variant="primary">Share</ThemedButton>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Lock className="w-12 h-12 mx-auto mb-4" style={{ color: CHART_COLORS.primary }} />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Get Your Referral Link
                  </h3>
                  <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Sign in or create an account to get your unique referral link and start earning.
                  </p>
                  <div className="flex justify-center gap-4">
                    <ThemedButton variant="primary">
                      Create Free Account
                    </ThemedButton>
                    <ThemedButton variant="outline">
                      Sign In
                    </ThemedButton>
                  </div>
                </div>
              )}
            </GlassCard>

            {/* Why Refer Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'No Cap', desc: 'Refer as many friends as you want - there\'s no limit on earnings', icon: TrendingUp },
                { title: 'Mutual Benefit', desc: 'Both you and your friend get $10 credit when they upgrade', icon: Gift },
                { title: 'Easy Tracking', desc: 'Monitor your referrals and earnings in real-time on your dashboard', icon: Award },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard isDark={isDark} className="text-center h-full">
                      <Icon className="w-10 h-10 mx-auto mb-4" style={{ color: CHART_COLORS.primary }} />
                      <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {benefit.title}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {benefit.desc}
                      </p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Footer Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className={`p-4 rounded-lg border ${isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <strong>Disclaimer:</strong> All rewards are credited to your Verafy account and can be used to offset subscription costs.
            Rewards cannot be withdrawn as cash. Submissions are reviewed within 48 hours.
            Verafy reserves the right to modify the rewards program at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
