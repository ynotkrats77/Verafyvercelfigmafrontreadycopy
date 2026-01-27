import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, TrendingUp, Clock, User, Tag, ChevronRight, Search, Filter, Calendar } from 'lucide-react';
import { GlassCard } from '../../components/GlassCard';
import { ThemedButton } from '../../components/ui/themed-button';
import { CHART_COLORS } from '../../config/theme';

interface BlogPageProps {
  isDark: boolean;
}

type BlogCategory = 'all' | 'investing' | 'tax' | 'strategy' | 'features' | 'news';

export function BlogPage({ isDark }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Posts', count: 24 },
    { id: 'investing', label: 'Investing 101', count: 8 },
    { id: 'tax', label: 'Tax Strategies', count: 6 },
    { id: 'strategy', label: 'Portfolio Strategy', count: 5 },
    { id: 'features', label: 'Product Updates', count: 3 },
    { id: 'news', label: 'Market News', count: 2 },
  ] as const;

  const featuredPost = {
    title: 'Maximizing Tax Efficiency in Your Portfolio for 2026',
    excerpt: 'Learn advanced strategies to minimize your tax burden while optimizing portfolio returns. Includes real-world examples and case studies.',
    author: 'Dr. Sarah Chen',
    authorRole: 'Tax Strategist',
    date: 'January 10, 2026',
    readTime: '8 min read',
    category: 'Tax Strategies',
    image: '📊',
    tier: 'Pro',
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Tax-Loss Harvesting in 2026',
      excerpt: 'A complete guide to implementing tax-loss harvesting strategies to reduce your taxable income.',
      author: 'Emily Roberts',
      date: 'January 8, 2026',
      readTime: '6 min',
      category: 'Tax Strategies',
      image: '💰',
      tier: 'Standard',
      tags: ['Tax', 'Strategy', 'Advanced'],
    },
    {
      id: 2,
      title: 'Diversification: Beyond the Basics',
      excerpt: 'Advanced diversification strategies including factor investing, geographic exposure, and alternative assets.',
      author: 'Michael Thompson',
      date: 'January 6, 2026',
      readTime: '10 min',
      category: 'Portfolio Strategy',
      image: '🎯',
      tier: 'Pro',
      tags: ['Diversification', 'Strategy', 'Risk'],
    },
    {
      id: 3,
      title: 'Getting Started with Verafy: A Beginner\'s Guide',
      excerpt: 'New to Verafy? This comprehensive guide will walk you through setting up your first portfolio.',
      author: 'Verafy Team',
      date: 'January 5, 2026',
      readTime: '5 min',
      category: 'Product Updates',
      image: '🚀',
      tier: 'Free',
      tags: ['Tutorial', 'Beginner'],
    },
    {
      id: 4,
      title: 'Sector Rotation Strategy for 2026',
      excerpt: 'How to use sector rotation to capitalize on economic cycles and market trends.',
      author: 'David Park',
      date: 'January 3, 2026',
      readTime: '7 min',
      category: 'Portfolio Strategy',
      image: '📈',
      tier: 'Standard',
      tags: ['Strategy', 'Sectors', 'Timing'],
    },
    {
      id: 5,
      title: 'Understanding Capital Gains Tax in Australia',
      excerpt: 'Everything you need to know about CGT, including the 50% discount rule and record keeping.',
      author: 'Dr. Sarah Chen',
      date: 'December 28, 2025',
      readTime: '12 min',
      category: 'Tax Strategies',
      image: '🏦',
      tier: 'Standard',
      tags: ['Tax', 'CGT', 'Australia'],
    },
    {
      id: 6,
      title: 'Dividend Investing for Passive Income',
      excerpt: 'Build a reliable income stream through dividend-paying stocks and franking credits.',
      author: 'Emily Roberts',
      date: 'December 25, 2025',
      readTime: '8 min',
      category: 'Investing 101',
      image: '💵',
      tier: 'Free',
      tags: ['Dividends', 'Income', 'Beginner'],
    },
    {
      id: 7,
      title: 'Market Volatility: How to Stay Calm',
      excerpt: 'Psychological strategies to avoid panic selling during market downturns.',
      author: 'Michael Thompson',
      date: 'December 22, 2025',
      readTime: '6 min',
      category: 'Investing 101',
      image: '🧘',
      tier: 'Free',
      tags: ['Psychology', 'Risk', 'Beginner'],
    },
    {
      id: 8,
      title: 'New Feature: AI Portfolio Optimization',
      excerpt: 'Introducing Vera AI\'s new portfolio optimization engine that uses machine learning.',
      author: 'Verafy Team',
      date: 'December 20, 2025',
      readTime: '4 min',
      category: 'Product Updates',
      image: '🤖',
      tier: 'Pro',
      tags: ['AI', 'Features', 'Pro'],
    },
    {
      id: 9,
      title: 'Options Trading: An Introduction',
      excerpt: 'Learn the basics of options trading including calls, puts, and risk management.',
      author: 'David Park',
      date: 'December 18, 2025',
      readTime: '15 min',
      category: 'Investing 101',
      image: '📉',
      tier: 'Pro',
      tags: ['Options', 'Advanced', 'Trading'],
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTierBadgeColor = (tier: string) => {
    switch (tier) {
      case 'Pro':
        return { bg: 'rgba(168, 85, 247, 0.2)', color: '#c084fc' };
      case 'Standard':
        return { bg: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' };
      default:
        return { bg: 'rgba(34, 211, 238, 0.2)', color: '#22d3ee' };
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-8 h-8" style={{ color: CHART_COLORS.primary }} />
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Verafy Blog
          </h1>
        </div>
        <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Investment insights, tax strategies, and product updates
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
          <input
            type="text"
            placeholder="Search articles..."
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

      {/* Categories */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((cat) => (
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
            {cat.label}
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              selectedCategory === cat.id
                ? isDark ? 'bg-cyan-500/30' : 'bg-cyan-200'
                : isDark ? 'bg-slate-800' : 'bg-slate-200'
            }`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Featured Post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <GlassCard isDark={isDark} className="relative overflow-hidden">
          <div className="absolute top-4 right-4 z-10">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={getTierBadgeColor(featuredPost.tier)}
            >
              {featuredPost.tier} Only
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span
                  className="px-3 py-1 rounded-lg text-xs font-semibold"
                  style={{ background: 'rgba(34, 211, 238, 0.1)', color: CHART_COLORS.primary }}
                >
                  Featured
                </span>
              </div>
              <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {featuredPost.title}
              </h2>
              <p className={`text-lg mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" style={{ color: CHART_COLORS.primary }} />
                  <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {featuredPost.author}
                  </span>
                </div>
                <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: CHART_COLORS.primary }} />
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
              <ThemedButton variant="primary">
                Read Article
                <ChevronRight className="w-4 h-4 ml-2" />
              </ThemedButton>
            </div>
            <div className="flex items-center justify-center text-9xl">
              {featuredPost.image}
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Blog Posts Grid */}
      <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <GlassCard isDark={isDark} className="h-full flex flex-col hover:scale-[1.02] transition-transform cursor-pointer">
              {/* Tier Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-2 py-1 rounded text-xs font-semibold"
                  style={getTierBadgeColor(post.tier)}
                >
                  {post.tier}
                </span>
                <span
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{ background: 'rgba(34, 211, 238, 0.1)', color: CHART_COLORS.primary }}
                >
                  {post.category}
                </span>
              </div>

              {/* Icon */}
              <div className="text-6xl mb-4">{post.image}</div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className={`text-sm mb-4 flex-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
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

              {/* Meta */}
              <div className="flex items-center justify-between text-sm pt-4 border-t"
                style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" style={{ color: CHART_COLORS.primary }} />
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: CHART_COLORS.primary }} />
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{post.readTime}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-12 text-center">
        <ThemedButton variant="outline">
          Load More Articles
        </ThemedButton>
      </div>
    </div>
  );
}
