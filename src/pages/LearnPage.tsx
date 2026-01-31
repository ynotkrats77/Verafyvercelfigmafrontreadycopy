import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Shield,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  CheckCircle,
  Play,
  Clock,
  BarChart3,
  Target,
  Brain,
  Heart,
  Lightbulb,
  Globe,
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { ThemedButton } from '../components/ui/themed-button';
import { CHART_COLORS } from '../config/theme';

interface LearnPageProps {
  isDark: boolean;
}

export function LearnPage({ isDark }: LearnPageProps) {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const learningPaths = [
    {
      id: 'beginner',
      title: 'Investment Foundations',
      level: 'Beginner',
      duration: '4 hours',
      modules: 8,
      description: 'Start your investing journey with the fundamentals. Learn what stocks, bonds, and ETFs are, and how markets work.',
      topics: ['What is investing?', 'Understanding risk', 'Building your first portfolio', 'The power of compounding'],
      icon: BookOpen,
      color: CHART_COLORS.success,
    },
    {
      id: 'intermediate',
      title: 'Portfolio Management',
      level: 'Intermediate',
      duration: '6 hours',
      modules: 12,
      description: 'Learn to manage and optimize your investment portfolio with diversification strategies and rebalancing techniques.',
      topics: ['Asset allocation', 'Diversification strategies', 'Risk management', 'Performance measurement'],
      icon: BarChart3,
      color: CHART_COLORS.primary,
    },
    {
      id: 'advanced',
      title: 'Strategic Investing',
      level: 'Advanced',
      duration: '8 hours',
      modules: 15,
      description: 'Master advanced concepts including technical analysis, value investing principles, and market psychology.',
      topics: ['Fundamental analysis', 'Technical indicators', 'Market cycles', 'Behavioral finance'],
      icon: Target,
      color: CHART_COLORS.secondary,
    },
    {
      id: 'tax',
      title: 'Tax-Smart Investing',
      level: 'All Levels',
      duration: '3 hours',
      modules: 6,
      description: 'Understand the tax implications of your investments and strategies to minimize your tax burden legally.',
      topics: ['Capital gains basics', 'Tax-loss harvesting', 'Superannuation', 'International tax considerations'],
      icon: Shield,
      color: CHART_COLORS.warning,
    },
  ];

  const featuredCourses = [
    {
      title: 'Understanding Market Volatility',
      description: 'Learn why markets fluctuate and how to stay calm during downturns',
      duration: '25 min',
      level: 'Beginner',
      image: 'volatility',
    },
    {
      title: 'Reading Financial Statements',
      description: 'Decode balance sheets, income statements, and cash flow reports',
      duration: '45 min',
      level: 'Intermediate',
      image: 'statements',
    },
    {
      title: 'ESG & Ethical Investing',
      description: 'Align your investments with your values without sacrificing returns',
      duration: '30 min',
      level: 'All Levels',
      image: 'esg',
    },
  ];

  const principles = [
    {
      icon: Heart,
      title: 'Education First',
      description: 'We believe everyone deserves access to quality financial education, regardless of their background or wealth.',
    },
    {
      icon: Shield,
      title: 'No Sales Pitch',
      description: 'Our courses teach principles, not products. Learn to think critically about any investment opportunity.',
    },
    {
      icon: Brain,
      title: 'Evidence-Based',
      description: 'All content is grounded in academic research and real-world data, not speculation or hype.',
    },
    {
      icon: Globe,
      title: 'Accessible to All',
      description: 'Free foundational courses ensure financial literacy is not a privilege but a right.',
    },
  ];

  const stats = [
    { value: '50,000+', label: 'Learners' },
    { value: '40+', label: 'Free Courses' },
    { value: '4.8/5', label: 'Average Rating' },
    { value: '92%', label: 'Completion Rate' },
  ];

  return (
    <div className="min-h-screen" style={{ background: isDark ? '#020617' : '#f8fafc' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse at top, rgba(34, 211, 238, 0.1) 0%, transparent 50%)'
              : 'radial-gradient(ellipse at top, rgba(34, 211, 238, 0.08) 0%, transparent 50%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* CSR Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.2)' }}
            >
              <Heart className="w-4 h-4" style={{ color: CHART_COLORS.primary }} />
              <span className="text-sm font-medium" style={{ color: CHART_COLORS.primary }}>
                Verafy Financial Literacy Initiative
              </span>
            </div>

            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Learn to Invest <span style={{ color: CHART_COLORS.primary }}>Responsibly</span>
            </h1>

            <p className={`text-xl mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Free, evidence-based financial education to help you make informed investment decisions.
              No jargon, no sales pitch - just the knowledge you need to build lasting wealth safely.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <ThemedButton variant="primary" className="px-8">
                <GraduationCap className="w-5 h-5 mr-2" />
                Start Learning Free
              </ThemedButton>
              <ThemedButton variant="outline">
                <Play className="w-5 h-5 mr-2" />
                Watch Introduction
              </ThemedButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {stat.value}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Principles */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Our Educational Philosophy
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            We're committed to ethical financial education as part of our corporate social responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard isDark={isDark} className="h-full text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(34, 211, 238, 0.1)' }}
                  >
                    <Icon className="w-7 h-7" style={{ color: CHART_COLORS.primary }} />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {principle.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {principle.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Learning Paths */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Structured Learning Paths
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Progress from beginner to advanced with our carefully curated curriculum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningPaths.map((path, index) => {
            const Icon = path.icon;
            const isSelected = selectedPath === path.id;
            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedPath(isSelected ? null : path.id)}
                className="cursor-pointer"
              >
                <GlassCard
                  isDark={isDark}
                  className={`h-full transition-all ${isSelected ? 'ring-2' : ''}`}
                  style={isSelected ? { borderColor: path.color } : {}}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${path.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: path.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="px-2 py-0.5 rounded text-xs font-semibold"
                          style={{ background: `${path.color}20`, color: path.color }}
                        >
                          {path.level}
                        </span>
                        <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          <Clock className="w-3 h-3 inline mr-1" />
                          {path.duration}
                        </span>
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {path.title}
                      </h3>
                      <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {path.description}
                      </p>

                      {/* Topics */}
                      <div className="space-y-2">
                        {path.topics.map((topic) => (
                          <div key={topic} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: path.color }} />
                            <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t" style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}>
                        <div className="flex items-center justify-between">
                          <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {path.modules} modules
                          </span>
                          <ThemedButton variant="outline" className="text-sm">
                            Start Path
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </ThemedButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Featured Courses */}
      <div className={`py-16 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Featured Free Courses
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Start with these popular courses - no account required
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <GlassCard isDark={isDark} className="h-full">
                  {/* Thumbnail placeholder */}
                  <div
                    className="h-40 rounded-lg mb-4 flex items-center justify-center"
                    style={{
                      background: isDark
                        ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(6, 182, 212, 0.05))'
                        : 'linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(6, 182, 212, 0.1))',
                    }}
                  >
                    <Play className="w-12 h-12" style={{ color: CHART_COLORS.primary }} />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-semibold"
                      style={{ background: 'rgba(34, 211, 238, 0.1)', color: CHART_COLORS.primary }}
                    >
                      {course.level}
                    </span>
                    <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      <Clock className="w-3 h-3 inline mr-1" />
                      {course.duration}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {course.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {course.description}
                  </p>

                  <ThemedButton variant="outline" className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Free
                  </ThemedButton>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <ThemedButton variant="primary">
              Browse All Free Courses
              <ChevronRight className="w-4 h-4 ml-2" />
            </ThemedButton>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <GlassCard isDark={isDark} className="text-center py-12 px-8">
          <GraduationCap className="w-16 h-16 mx-auto mb-6" style={{ color: CHART_COLORS.primary }} />
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Start Your Learning Journey Today
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Join thousands of Australians building their financial knowledge.
            Create a free account to track your progress and earn certificates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ThemedButton variant="primary" className="px-8">
              Create Free Account
            </ThemedButton>
            <ThemedButton variant="outline">
              Continue as Guest
            </ThemedButton>
          </div>
        </GlassCard>
      </div>

      {/* Footer Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className={`p-4 rounded-lg border ${isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <strong>Educational Disclaimer:</strong> The content provided in Verafy Academy is for educational purposes only
            and does not constitute financial, investment, tax, or legal advice. The information is general in nature and
            may not be suitable for your specific circumstances. Before making any investment decisions, consider seeking
            advice from a licensed financial adviser. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </div>
  );
}
