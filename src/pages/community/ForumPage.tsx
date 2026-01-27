import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, TrendingUp, Users, Clock, Pin, Lock, Award, ChevronRight, Search, Plus, Filter, ThumbsUp, MessageCircle } from 'lucide-react';
import { GlassCard } from '../../components/GlassCard';
import { ThemedButton } from '../../components/ui/themed-button';
import { CHART_COLORS } from '../../config/theme';

interface ForumPageProps {
  isDark: boolean;
}

type ForumCategory = 'all' | 'general' | 'investing' | 'tax' | 'strategies' | 'support';

export function ForumPage({ isDark }: ForumPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<ForumCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Discussions', count: 142, icon: MessageSquare },
    { id: 'general', label: 'General', count: 45, icon: Users },
    { id: 'investing', label: 'Investing Strategies', count: 38, icon: TrendingUp },
    { id: 'tax', label: 'Tax Optimization', count: 29, icon: Award },
    { id: 'strategies', label: 'Portfolio Strategies', count: 22, icon: TrendingUp },
    { id: 'support', label: 'Product Support', count: 8, icon: MessageCircle },
  ] as const;

  const forumStats = [
    { label: 'Active Members', value: '1,247', icon: Users },
    { label: 'Total Discussions', value: '142', icon: MessageSquare },
    { label: 'This Week', value: '28', icon: TrendingUp },
  ];

  const pinnedThreads = [
    {
      id: 'pinned-1',
      title: 'Welcome to Verafy Community Forum - Read the Rules',
      author: 'Verafy Team',
      authorTier: 'Admin',
      category: 'General',
      replies: 45,
      views: 1283,
      lastActive: '2 hours ago',
      isPinned: true,
      isLocked: false,
    },
    {
      id: 'pinned-2',
      title: 'Feature Requests & Roadmap Discussion - Q1 2026',
      author: 'Product Team',
      authorTier: 'Pro',
      category: 'Product Support',
      replies: 89,
      views: 2104,
      lastActive: '1 day ago',
      isPinned: true,
      isLocked: false,
    },
  ];

  const threads = [
    {
      id: 1,
      title: 'Best strategy for tax-loss harvesting in 2026?',
      author: 'Michael_Investor',
      authorTier: 'Pro',
      category: 'Tax Optimization',
      excerpt: 'I\'m looking to optimize my tax position before EOFY. What are your strategies for tax-loss harvesting?',
      replies: 23,
      views: 456,
      likes: 18,
      lastActive: '15 minutes ago',
      lastReplyBy: 'Sarah_Tax_Pro',
      isPinned: false,
      isLocked: false,
      hasAcceptedAnswer: true,
      tags: ['Tax', 'Strategy', 'EOFY'],
    },
    {
      id: 2,
      title: 'Sector allocation for defensive portfolio?',
      author: 'Emma_Conservative',
      authorTier: 'Standard',
      category: 'Portfolio Strategies',
      excerpt: 'Approaching retirement and want to shift to a more defensive allocation. What sectors should I focus on?',
      replies: 17,
      views: 289,
      likes: 12,
      lastActive: '1 hour ago',
      lastReplyBy: 'David_Advisor',
      isPinned: false,
      isLocked: false,
      hasAcceptedAnswer: false,
      tags: ['Defensive', 'Sectors', 'Retirement'],
    },
    {
      id: 3,
      title: 'How to use the new AI Portfolio Optimizer?',
      author: 'John_NewUser',
      authorTier: 'Starter',
      category: 'Product Support',
      excerpt: 'Just upgraded to Pro and trying to figure out how the AI Portfolio Optimizer works. Any tips?',
      replies: 31,
      views: 672,
      likes: 24,
      lastActive: '2 hours ago',
      lastReplyBy: 'Verafy_Support',
      isPinned: false,
      isLocked: false,
      hasAcceptedAnswer: true,
      tags: ['AI', 'Tutorial', 'Pro Feature'],
    },
    {
      id: 4,
      title: 'Dividend vs Growth: What\'s your approach?',
      author: 'Lisa_DividendFan',
      authorTier: 'Pro',
      category: 'Investing Strategies',
      excerpt: 'Interested in hearing different perspectives on dividend investing vs growth investing for long-term wealth.',
      replies: 42,
      views: 891,
      likes: 35,
      lastActive: '3 hours ago',
      lastReplyBy: 'Tom_Growth',
      isPinned: false,
      isLocked: false,
      hasAcceptedAnswer: false,
      tags: ['Dividends', 'Growth', 'Strategy'],
    },
    {
      id: 5,
      title: 'International diversification recommendations?',
      author: 'Alex_Global',
      authorTier: 'Standard',
      category: 'Investing Strategies',
      excerpt: 'Currently 100% ASX. Looking to add international exposure. What percentage do you recommend?',
      replies: 28,
      views: 534,
      likes: 19,
      lastActive: '5 hours ago',
      lastReplyBy: 'Sophie_International',
      isPinned: false,
      isLocked: false,
      hasAcceptedAnswer: true,
      tags: ['International', 'Diversification', 'ASX'],
    },
    {
      id: 6,
      title: 'Capital gains tax question - 50% discount timing',
      author: 'Peter_Tax',
      authorTier: 'Pro',
      category: 'Tax Optimization',
      excerpt: 'If I bought shares on March 15, 2025, when exactly am I eligible for the 50% CGT discount?',
      replies: 14,
      views: 312,
      likes: 9,
      lastActive: '8 hours ago',
      lastReplyBy: 'Jennifer_Accountant',
      isPinned: false,
      isLocked: false,
      hasAcceptedAnswer: true,
      tags: ['CGT', 'Tax', 'Australia'],
    },
    {
      id: 7,
      title: 'Beginner question: ETF vs Individual stocks?',
      author: 'Chris_Newbie',
      authorTier: 'Starter',
      category: 'General',
      excerpt: 'Just starting out with $10k. Should I invest in ETFs or pick individual stocks?',
      replies: 37,
      views: 728,
      likes: 29,
      lastActive: '12 hours ago',
      lastReplyBy: 'Mark_Mentor',
      isPinned: false,
      isLocked: false,
      hasAcceptedAnswer: true,
      tags: ['Beginner', 'ETF', 'Stocks'],
    },
    {
      id: 8,
      title: 'Rebalancing frequency - monthly vs quarterly?',
      author: 'Rachel_Active',
      authorTier: 'Pro',
      category: 'Portfolio Strategies',
      excerpt: 'How often do you rebalance your portfolio? I\'m torn between monthly and quarterly approaches.',
      replies: 19,
      views: 401,
      likes: 15,
      lastActive: '1 day ago',
      lastReplyBy: 'Kevin_Passive',
      isPinned: false,
      isLocked: false,
      hasAcceptedAnswer: false,
      tags: ['Rebalancing', 'Strategy', 'Frequency'],
    },
  ];

  const filteredThreads = threads.filter((thread) => {
    const matchesCategory = selectedCategory === 'all' || thread.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          thread.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTierBadgeColor = (tier: string) => {
    switch (tier) {
      case 'Admin':
        return { bg: 'rgba(239, 68, 68, 0.2)', color: '#f87171' };
      case 'Pro':
        return { bg: 'rgba(168, 85, 247, 0.2)', color: '#c084fc' };
      case 'Standard':
        return { bg: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' };
      case 'Starter':
        return { bg: 'rgba(34, 211, 238, 0.2)', color: '#22d3ee' };
      default:
        return { bg: 'rgba(100, 116, 139, 0.2)', color: '#94a3b8' };
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-8 h-8" style={{ color: CHART_COLORS.primary }} />
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Community Forum
              </h1>
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(34, 211, 238, 0.2)', color: CHART_COLORS.primary }}
              >
                MEMBERS ONLY
              </span>
            </div>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Connect with fellow investors and share strategies
            </p>
          </div>
          <ThemedButton variant="primary" className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            New Discussion
          </ThemedButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {forumStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <GlassCard key={stat.label} isDark={isDark} animate={false} className="text-center">
                <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: CHART_COLORS.primary }} />
                <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {stat.value}
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {stat.label}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Search & Categories */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
          <button
            className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white hover:border-cyan-500'
                : 'bg-white border-slate-300 text-slate-900 hover:border-cyan-500'
            }`}
          >
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? isDark
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'bg-cyan-100 text-cyan-600'
                    : isDark
                    ? 'text-slate-400 hover:bg-slate-800'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === cat.id
                    ? isDark ? 'bg-cyan-500/30' : 'bg-cyan-200'
                    : isDark ? 'bg-slate-800' : 'bg-slate-200'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pinned Threads */}
      <div className="mb-6">
        <h2 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          📌 Pinned Discussions
        </h2>
        <div className="space-y-3">
          {pinnedThreads.map((thread) => (
            <GlassCard key={thread.id} isDark={isDark} className="hover:scale-[1.01] transition-transform cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ background: 'rgba(251, 191, 36, 0.1)' }}>
                  <Pin className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {thread.title}
                    </h3>
                    {thread.isLocked && <Lock className="w-4 h-4 text-slate-400" />}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>by</span>
                      <span
                        className="font-semibold px-2 py-0.5 rounded"
                        style={getTierBadgeColor(thread.authorTier)}
                      >
                        {thread.author}
                      </span>
                    </div>
                    <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {thread.replies} replies
                    </span>
                    <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {thread.views} views
                    </span>
                    <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {thread.lastActive}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Regular Threads */}
      <div className="space-y-3">
        {filteredThreads.map((thread, index) => (
          <motion.div
            key={thread.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
          >
            <GlassCard isDark={isDark} className="hover:scale-[1.01] transition-transform cursor-pointer">
              <div className="flex items-start gap-4">
                {/* Avatar Placeholder */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${CHART_COLORS.primary}, ${CHART_COLORS.secondary})` }}
                >
                  {thread.author[0]}
                </div>

                {/* Thread Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {thread.title}
                        </h3>
                        {thread.hasAcceptedAnswer && (
                          <div className="p-1 rounded" style={{ background: 'rgba(34, 197, 94, 0.1)' }}>
                            <Award className="w-4 h-4 text-emerald-400" />
                          </div>
                        )}
                      </div>
                      <p className={`text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {thread.excerpt}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-2">
                        {thread.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2 py-1 rounded ${
                              isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span
                      className="px-2 py-1 rounded text-xs font-semibold whitespace-nowrap"
                      style={{ background: 'rgba(34, 211, 238, 0.1)', color: CHART_COLORS.primary }}
                    >
                      {thread.category}
                    </span>
                  </div>

                  {/* Thread Meta */}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-medium px-2 py-0.5 rounded text-xs"
                        style={getTierBadgeColor(thread.authorTier)}
                      >
                        {thread.author}
                      </span>
                    </div>
                    <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" style={{ color: CHART_COLORS.success }} />
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{thread.likes}</span>
                    </div>
                    <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" style={{ color: CHART_COLORS.primary }} />
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{thread.replies}</span>
                    </div>
                    <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {thread.views} views
                    </span>
                    <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                    <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Last reply by <span className="font-medium">{thread.lastReplyBy}</span> {thread.lastActive}
                    </span>
                  </div>
                </div>

                <ChevronRight className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <ThemedButton variant="outline">
          Load More Discussions
        </ThemedButton>
      </div>
    </div>
  );
}
