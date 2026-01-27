import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Clock, Star, TrendingUp, ChevronRight, Play, CheckCircle } from 'lucide-react';
import { GlassCard } from '../../components/GlassCard';
import { ThemedButton } from '../../components/ui/themed-button';
import { CHART_COLORS } from '../../config/theme';

interface AcademyPageProps {
  isDark: boolean;
}

export function AcademyPage({ isDark }: AcademyPageProps) {
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const learningPath = {
    beginner: {
      level: 'Beginner',
      courses: 3,
      progress: 0,
      color: CHART_COLORS.success,
      status: 'Start your journey',
    },
    intermediate: {
      level: 'Intermediate',
      courses: 4,
      progress: 0,
      color: CHART_COLORS.info,
      status: 'Complete all Beginner courses',
    },
    advanced: {
      level: 'Advanced',
      courses: 5,
      progress: 0,
      color: CHART_COLORS.secondary,
      status: 'Sophisticated Strategies',
    },
  };

  const recommendedCourses = [
    {
      id: 1,
      title: 'Investment Basics 101',
      level: 'Beginner',
      duration: '30 min',
      description: 'Start your journey with foundational investment concepts',
      progress: 0,
      image: '💰',
    },
    {
      id: 2,
      title: 'Understanding Tax Efficiency',
      level: 'Intermediate',
      duration: '45 min',
      description: 'Learn strategies to minimize tax and maximize returns',
      progress: 0,
      image: '📊',
    },
    {
      id: 3,
      title: 'Portfolio Diversification',
      level: 'Intermediate',
      duration: '40 min',
      description: 'Master the art of spreading risk across assets',
      progress: 0,
      image: '🎯',
    },
  ];

  const allCourses = [
    {
      category: 'Beginner',
      courses: [
        { title: 'Investment Basics 101', duration: '30 min', enrolled: 309, rating: 4.8 },
        { title: 'Understanding Stocks & Bonds', duration: '25 min', enrolled: 245, rating: 4.7 },
        { title: 'Building Your First Portfolio', duration: '35 min', enrolled: 198, rating: 4.9 },
      ],
    },
    {
      category: 'Intermediate',
      courses: [
        { title: 'Portfolio Diversification', duration: '40 min', enrolled: 156, rating: 4.8 },
        { title: 'Understanding Tax Efficiency', duration: '45 min', enrolled: 132, rating: 4.6 },
        { title: 'Risk Management Strategies', duration: '50 min', enrolled: 108, rating: 4.7 },
        { title: 'Technical Analysis Fundamentals', duration: '60 min', enrolled: 89, rating: 4.9 },
      ],
    },
    {
      category: 'Advanced',
      courses: [
        { title: 'Options Trading Mastery', duration: '90 min', enrolled: 67, rating: 4.9 },
        { title: 'Advanced Portfolio Theory', duration: '75 min', enrolled: 54, rating: 4.8 },
        { title: 'Quantitative Analysis', duration: '80 min', enrolled: 42, rating: 4.7 },
        { title: 'Alternative Investments', duration: '70 min', enrolled: 38, rating: 4.6 },
        { title: 'Behavioral Finance', duration: '65 min', enrolled: 31, rating: 4.9 },
      ],
    },
  ];

  const stats = {
    totalCourses: 8,
    modulesCompleted: 0,
    achievements: 0,
    coursesComplete: 0,
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <GraduationCap className="w-8 h-8" style={{ color: CHART_COLORS.primary }} />
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Verafy AI Academy
          </h1>
        </div>
        <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Build your investment knowledge with structured courses and earn rewards
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <GlassCard isDark={isDark} animate={false} className="text-center">
          <BookOpen className="w-8 h-8 mx-auto mb-2" style={{ color: CHART_COLORS.primary }} />
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stats.totalCourses}</p>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Courses</p>
        </GlassCard>

        <GlassCard isDark={isDark} animate={false} className="text-center">
          <CheckCircle className="w-8 h-8 mx-auto mb-2" style={{ color: CHART_COLORS.success }} />
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stats.modulesCompleted}/0</p>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Modules Completed</p>
        </GlassCard>

        <GlassCard isDark={isDark} animate={false} className="text-center">
          <Award className="w-8 h-8 mx-auto mb-2" style={{ color: CHART_COLORS.warning }} />
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stats.achievements}/0</p>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Achievements</p>
        </GlassCard>

        <GlassCard isDark={isDark} animate={false} className="text-center">
          <TrendingUp className="w-8 h-8 mx-auto mb-2" style={{ color: CHART_COLORS.secondary }} />
          <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stats.coursesComplete}</p>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Courses Complete</p>
        </GlassCard>
      </div>

      {/* Learning Path */}
      <GlassCard isDark={isDark} className="mb-8">
        <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Your Learning Journey
        </h2>
        <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Progress through structured courses to build your investment knowledge
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(learningPath).map(([key, path]) => (
            <motion.div
              key={key}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-xl border-2 ${
                isDark
                  ? 'bg-slate-900/50 border-slate-700 hover:border-cyan-500/50'
                  : 'bg-white border-slate-200 hover:border-cyan-400'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white"
                  style={{ background: path.color }}
                >
                  {key === 'beginner' ? '○' : key === 'intermediate' ? '◐' : '●'}
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {path.level}
                </h3>
              </div>
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {path.status}
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Progress: {path.progress}/3</span>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>0%</span>
                </div>
                <div className={`w-full h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${path.progress}%`,
                      background: path.color,
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {path.courses} Foundation Courses
                </span>
                <ChevronRight className="w-5 h-5" style={{ color: path.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* Recommended Courses */}
      <div className="mb-8">
        <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Recommended for You
        </h2>
        <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Courses based on your progress and portfolio
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedCourses.map((course) => (
            <GlassCard key={course.id} isDark={isDark} className="flex flex-col">
              <div className="text-5xl mb-4">{course.image}</div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2 py-1 rounded text-xs font-semibold"
                  style={{
                    background: 'rgba(34, 211, 238, 0.1)',
                    color: CHART_COLORS.primary,
                  }}
                >
                  {course.level}
                </span>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {course.duration}
                </span>
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {course.title}
              </h3>
              <p className={`text-sm mb-4 flex-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {course.description}
              </p>
              <ThemedButton variant="primary" className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Start Course
              </ThemedButton>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* All Courses */}
      <GlassCard isDark={isDark}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Investment Courses
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedLevel('all')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                selectedLevel === 'all'
                  ? isDark
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'bg-cyan-100 text-cyan-600'
                  : isDark
                  ? 'text-slate-400 hover:bg-slate-800'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              All
            </button>
            {['beginner', 'intermediate', 'advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level as any)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all capitalize ${
                  selectedLevel === level
                    ? isDark
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'bg-cyan-100 text-cyan-600'
                    : isDark
                    ? 'text-slate-400 hover:bg-slate-800'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {allCourses
            .filter(
              (category) =>
                selectedLevel === 'all' || category.category.toLowerCase() === selectedLevel
            )
            .map((category) => (
              <div key={category.category}>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.courses.map((course) => (
                    <motion.div
                      key={course.title}
                      whileHover={{ x: 4 }}
                      className={`p-4 rounded-lg border flex items-center justify-between ${
                        isDark
                          ? 'bg-slate-900/50 border-slate-700 hover:border-cyan-500/50'
                          : 'bg-white border-slate-200 hover:border-cyan-400'
                      }`}
                    >
                      <div className="flex-1">
                        <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {course.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" style={{ color: CHART_COLORS.primary }} />
                            <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                              {course.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" style={{ color: CHART_COLORS.warning }} />
                            <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                              {course.rating}
                            </span>
                          </div>
                          <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>
                            {course.enrolled} enrolled
                          </span>
                        </div>
                      </div>
                      <ThemedButton variant="outline" size="sm">
                        Start
                      </ThemedButton>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </GlassCard>
    </div>
  );
}
