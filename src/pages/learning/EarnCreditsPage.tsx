import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coins, Video, MessageSquare, Star, TrendingUp, Users, CheckCircle, Lock, ExternalLink } from 'lucide-react';
import { GlassCard } from '../../components/GlassCard';
import { ThemedButton } from '../../components/ui/themed-button';
import { CHART_COLORS } from '../../config/theme';

interface EarnCreditsPageProps {
  isDark: boolean;
  isAuthenticated?: boolean;
}

type OpportunityTab = 'all' | 'video' | 'social' | 'reviews' | 'community';

export function EarnCreditsPage({ isDark, isAuthenticated = false }: EarnCreditsPageProps) {
  const [activeTab, setActiveTab] = useState<OpportunityTab>('all');

  const opportunities = [
    {
      id: 'youtube-review',
      title: 'YouTube Video Review',
      credits: 100,
      category: 'video' as const,
      icon: '📺',
      color: '#FF0000',
      description: 'Create a detailed video review (minimum 5 minutes) showcasing your experience with Verafy. Must mention "Verafy Review" in title and include screenshots/examples.',
      requirements: [
        'Minimum 5 minutes video length',
        'Include "Verafy Review" in title',
        'Show screenshots and examples',
        '+2 more requirements'
      ],
      bonuses: [
        '+50 at 5,000 views',
        '+100 at 10,000 views'
      ],
      tags: ['#verafy_official'],
    },
    {
      id: 'youtube-shorts',
      title: 'YouTube Shorts',
      credits: 30,
      category: 'video' as const,
      icon: '🎬',
      color: '#FF0000',
      description: 'Create a YouTube Shorts video (max. 60 seconds) with your tip or insights. Must include screenshots and examples of using the platform.',
      requirements: [
        'Maximum 60 seconds video',
        'Include "Verafy" in caption',
        'Show platform screenshots/examples',
        '+2 more requirements'
      ],
      bonuses: [
        '+50 at 5,000 views',
        '+100 at 10,000 views'
      ],
      tags: ['#verafy_official'],
    },
    {
      id: 'instagram-reel',
      title: 'Instagram Reel',
      credits: 30,
      category: 'social' as const,
      icon: '📷',
      color: '#E1306C',
      description: 'Create an Instagram Reel (max. 60 seconds) showcasing Verafy features. Must include "Verafy" in caption and include screenshots/examples.',
      requirements: [
        'Maximum 60 seconds reel',
        'Mention "Verafy" in caption',
        'Include screenshots/examples',
        '+2 more requirements'
      ],
      bonuses: [
        '+50 at 5,000 views',
        '+100 at 10,000 views'
      ],
      tags: ['#verafy_official'],
    },
    {
      id: 'tiktok-video',
      title: 'TikTok Video',
      credits: 30,
      category: 'social' as const,
      icon: '🎵',
      color: '#00F2EA',
      description: 'Post a TikTok video (max. 60 seconds) about your experience with Verafy. Must include "Verafy" in the caption and show platform screenshots/examples.',
      requirements: [
        'Maximum 60 seconds video',
        'Include "Verafy" in caption',
        'Show platform screenshots',
        '+2 more requirements'
      ],
      bonuses: [
        '+50 at 5,000 views',
        '+100 at 10,000 views'
      ],
      tags: ['#verafy_to'],
    },
    {
      id: 'twitter-thread',
      title: 'Twitter/X Thread',
      credits: 15,
      category: 'social' as const,
      icon: '🐦',
      color: '#1DA1F2',
      description: 'Create a detailed Twitter/X thread (min. 8 tweets) showcasing Verafy features and your experience. Must include screenshots.',
      requirements: [
        'Minimum 8 tweets in thread',
        'Include screenshots',
        'Share your personal experience',
        '+1 more requirement'
      ],
      bonuses: [],
      tags: ['#verafy_to'],
    },
    {
      id: 'linkedin-post',
      title: 'LinkedIn Post',
      credits: 10,
      category: 'social' as const,
      icon: '💼',
      color: '#0077B5',
      description: 'Write a professional LinkedIn post about how Verafy helps your investment workflow or tax planning. Include specific examples and screenshots.',
      requirements: [
        'Professional tone',
        'Include specific examples',
        'Add screenshots of the platform',
        '+1 more requirement'
      ],
      bonuses: [],
      tags: ['#verafy'],
    },
    {
      id: 'feature-review',
      title: 'Feature Request Review',
      credits: 50,
      category: 'reviews' as const,
      icon: '⭐',
      color: CHART_COLORS.warning,
      description: 'Submit a feature request including use cases, reasoning for request, and specific implementation suggestions. Approved features earn rewards.',
      requirements: [
        'Clear feature description',
        'Explain the use case',
        'Provide implementation ideas',
        '+1 more requirement'
      ],
      bonuses: [
        '+100 if feature is implemented'
      ],
      tags: [],
    },
    {
      id: 'bug-report',
      title: 'Bug Report Verified',
      credits: 25,
      category: 'reviews' as const,
      icon: '🐛',
      color: CHART_COLORS.danger,
      description: 'Report bugs including detailed steps to reproduce, bug severity classification, and screenshots. Only verified reports earn credits.',
      requirements: [
        'Include screen recording',
        'Document steps to reproduce',
        'Bug must be verified by team',
        '+1 more requirement'
      ],
      bonuses: [
        '+75 for critical bugs'
      ],
      tags: [],
    },
    {
      id: 'community-help',
      title: 'Community Helper',
      credits: 5,
      category: 'community' as const,
      icon: '💬',
      color: CHART_COLORS.success,
      description: 'Answer community questions in the forum. Earn credits for helpful answers that receive upvotes from original poster or moderators.',
      requirements: [
        'Provide detailed answer',
        'Must be marked as helpful',
        'Original poster upvote required',
      ],
      bonuses: [
        '+10 for "Best Answer" badge'
      ],
      tags: [],
    },
    {
      id: 'community-guide',
      title: 'Write Community Guide',
      credits: 150,
      category: 'community' as const,
      icon: '📖',
      color: CHART_COLORS.info,
      description: 'Create a comprehensive guide for the community on using Verafy features, investment strategies, or tax optimization. Must be at least 1,000 words with screenshots.',
      requirements: [
        'Minimum 1,000 words',
        'Include screenshots',
        'Cover specific use cases',
        'Must be approved by moderators'
      ],
      bonuses: [
        '+50 for 100+ views',
        '+100 for 500+ views'
      ],
      tags: [],
    },
  ];

  const tabs = [
    { id: 'all', label: 'All Opportunities', icon: Coins },
    { id: 'video', label: 'Video Content', icon: Video },
    { id: 'social', label: 'Social Media', icon: Users },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'community', label: 'Community', icon: MessageSquare },
  ] as const;

  const filteredOpportunities = opportunities.filter(
    (opp) => activeTab === 'all' || opp.category === activeTab
  );

  const howItWorks = [
    { step: 1, title: 'Choose a Task', desc: 'Select from video, social, review, or community tasks' },
    { step: 2, title: 'Create Content', desc: 'Follow the requirements and create quality content' },
    { step: 3, title: 'Submit for Review', desc: 'Submit your content URL for verification' },
    { step: 4, title: 'Earn Credits', desc: 'Get approved and earn Verafy Cash rewards' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Coins className="w-8 h-8" style={{ color: CHART_COLORS.warning }} />
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Earn Verafy Credits
          </h1>
        </div>
        <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Create content, help the community, and earn rewards
        </p>
      </div>

      {/* How It Works */}
      <GlassCard isDark={isDark} className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            🎯 How It Works
          </h2>
        </div>
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

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? isDark
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'bg-cyan-100 text-cyan-600'
                  : isDark
                  ? 'text-slate-400 hover:bg-slate-800'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities.map((opportunity, index) => (
          <motion.div
            key={opportunity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <GlassCard isDark={isDark} className="h-full flex flex-col">
              {/* Icon & Title */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{opportunity.icon}</div>
                  <div>
                    <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {opportunity.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="text-2xl font-bold"
                        style={{ color: CHART_COLORS.warning }}
                      >
                        {opportunity.credits}
                      </span>
                      <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Verafy Cash
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {opportunity.description}
              </p>

              {/* Tags */}
              {opportunity.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {opportunity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{
                        background: isDark ? 'rgba(34, 211, 238, 0.1)' : 'rgba(34, 211, 238, 0.1)',
                        color: CHART_COLORS.primary,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Requirements */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4" style={{ color: CHART_COLORS.primary }} />
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Requirements
                  </span>
                </div>
                <ul className="space-y-1">
                  {opportunity.requirements.map((req, i) => (
                    <li key={i} className={`text-xs flex items-start gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonuses */}
              {opportunity.bonuses.length > 0 && (
                <div className="mb-4 p-3 rounded-lg" style={{ background: isDark ? 'rgba(34, 211, 238, 0.05)' : 'rgba(34, 211, 238, 0.05)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4" style={{ color: CHART_COLORS.warning }} />
                    <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      View Bonuses
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {opportunity.bonuses.map((bonus, i) => (
                      <li key={i} className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {bonus}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-auto">
                <ThemedButton variant="primary" className="w-full">
                  Submit for Review
                  <ExternalLink className="w-4 h-4 ml-2" />
                </ThemedButton>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Footer Notice */}
      <div className={`mt-8 p-4 rounded-lg border ${isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          <strong>Note:</strong> All submissions are reviewed within 48 hours. Credits are awarded once content is verified. 
          Verafy AI provides software tools for portfolio tracking and analysis. We are not a licensed financial services provider. 
          Information presented should not be relied upon as financial, legal, or tax advice.
        </p>
      </div>
    </div>
  );
}