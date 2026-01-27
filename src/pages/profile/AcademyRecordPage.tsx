import { motion } from 'motion/react';
import { BookOpen, Award, Trophy, CheckCircle2, Clock, TrendingUp, Target, Zap } from 'lucide-react';
import { GlassCard } from '../../components/GlassCard';
import { CHART_COLORS } from '../../config/theme';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface AcademyRecordPageProps {
  isDark: boolean;
}

export function AcademyRecordPage({ isDark }: AcademyRecordPageProps) {
  const learningStats = {
    coursesCompleted: 8,
    totalCourses: 24,
    hoursLearned: 42,
    currentStreak: 14,
    badges: 12,
    rank: 'Intermediate',
  };

  const completedCourses = [
    { title: 'Investment Basics 101', completion: 100, date: 'Jan 2026', duration: '2 hours', badge: 'Beginner' },
    { title: 'Portfolio Diversification', completion: 100, date: 'Jan 2026', duration: '3 hours', badge: 'Intermediate' },
    { title: 'Understanding Tax Efficiency', completion: 100, date: 'Dec 2025', duration: '4 hours', badge: 'Intermediate' },
    { title: 'Risk Management Fundamentals', completion: 100, date: 'Dec 2025', duration: '2.5 hours', badge: 'Beginner' },
    { title: 'Technical Analysis Basics', completion: 100, date: 'Nov 2025', duration: '5 hours', badge: 'Intermediate' },
    { title: 'Market Psychology', completion: 100, date: 'Nov 2025', duration: '3 hours', badge: 'Intermediate' },
    { title: 'Dividend Investing Strategies', completion: 100, date: 'Oct 2025', duration: '4 hours', badge: 'Advanced' },
    { title: 'ETF Mastery', completion: 100, date: 'Oct 2025', duration: '3.5 hours', badge: 'Intermediate' },
  ];

  const inProgressCourses = [
    { title: 'Advanced Portfolio Theory', completion: 65, timeLeft: '2 hours', nextLesson: 'Modern Portfolio Theory' },
    { title: 'Options Trading Fundamentals', completion: 40, timeLeft: '4 hours', nextLesson: 'Put & Call Basics' },
    { title: 'Real Estate Investment Trusts', completion: 25, timeLeft: '5 hours', nextLesson: 'REIT Valuation' },
  ];

  const learningProgress = [
    { month: 'Aug', hours: 8 },
    { month: 'Sep', hours: 12 },
    { month: 'Oct', hours: 15 },
    { month: 'Nov', hours: 10 },
    { month: 'Dec', hours: 18 },
    { month: 'Jan', hours: 22 },
  ];

  const categoryProgress = [
    { name: 'Fundamentals', value: 35, color: CHART_COLORS.primary },
    { name: 'Technical', value: 25, color: CHART_COLORS.secondary },
    { name: 'Strategy', value: 20, color: CHART_COLORS.info },
    { name: 'Advanced', value: 20, color: CHART_COLORS.warning },
  ];

  const achievements = [
    { name: 'First Steps', desc: 'Complete your first course', icon: Award, unlocked: true },
    { name: 'Quick Learner', desc: 'Complete 3 courses in one month', icon: Zap, unlocked: true },
    { name: 'Consistent', desc: '14-day learning streak', icon: Target, unlocked: true },
    { name: 'Diversified', desc: 'Complete courses in 3 categories', icon: TrendingUp, unlocked: true },
    { name: 'Master', desc: 'Complete all courses in a category', icon: Trophy, unlocked: false },
    { name: 'Scholar', desc: 'Earn 20 course badges', icon: BookOpen, unlocked: false },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Academy Record
          </h1>
          <div className="px-3 py-1 rounded-full" style={{ background: 'rgba(34, 211, 238, 0.2)' }}>
            <span className="text-xs font-semibold" style={{ color: CHART_COLORS.primary }}>
              {learningStats.rank.toUpperCase()}
            </span>
          </div>
        </div>
        <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
          Track your learning journey and achievements
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
          <BookOpen className="w-6 h-6 mb-2" style={{ color: CHART_COLORS.primary }} />
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {learningStats.coursesCompleted}/{learningStats.totalCourses}
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Courses</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border ${
            isDark
              ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700'
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
          }`}
        >
          <Clock className="w-6 h-6 mb-2" style={{ color: CHART_COLORS.success }} />
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {learningStats.hoursLearned}
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Hours Learned</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-6 rounded-xl border ${
            isDark
              ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700'
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
          }`}
        >
          <Zap className="w-6 h-6 mb-2" style={{ color: CHART_COLORS.warning }} />
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {learningStats.currentStreak}
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Day Streak</p>
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
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {learningStats.badges}
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Badges Earned</p>
        </motion.div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Learning Progress Chart */}
        <GlassCard isDark={isDark}>
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Learning Progress (6M)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={learningProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#E2E8F0'} />
              <XAxis dataKey="month" stroke={isDark ? '#94A3B8' : '#64748B'} />
              <YAxis stroke={isDark ? '#94A3B8' : '#64748B'} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
                  border: `1px solid ${isDark ? '#334155' : '#E2E8F0'}`,
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="hours" fill={CHART_COLORS.primary} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Category Distribution */}
        <GlassCard isDark={isDark}>
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Learning by Category
          </h3>
          <div className="flex items-center gap-8">
            <ResponsiveContainer width="50%" height={200}>
              <PieChart>
                <Pie
                  data={categoryProgress}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryProgress.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2">
              {categoryProgress.map((cat) => (
                <div key={cat.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                    <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{cat.name}</span>
                  </div>
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {cat.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* In Progress Courses */}
        <GlassCard isDark={isDark}>
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            In Progress
          </h3>
          <div className="space-y-3">
            {inProgressCourses.map((course) => (
              <div
                key={course.title}
                className={`p-4 rounded-lg border ${
                  isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'
                }`}
              >
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {course.title}
                </h4>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Progress</span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{course.completion}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${course.completion}%`,
                        background: `linear-gradient(90deg, ${CHART_COLORS.primary}, ${CHART_COLORS.secondary})`,
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Next: {course.nextLesson}</span>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{course.timeLeft} left</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Achievements */}
        <GlassCard isDark={isDark}>
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Achievements
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.name}
                  className={`p-4 rounded-lg border text-center ${
                    achievement.unlocked
                      ? isDark
                        ? 'bg-cyan-500/10 border-cyan-500/30'
                        : 'bg-cyan-50 border-cyan-200'
                      : isDark
                      ? 'bg-slate-900/30 border-slate-800 opacity-50'
                      : 'bg-slate-50 border-slate-200 opacity-50'
                  }`}
                >
                  <Icon
                    className="w-8 h-8 mx-auto mb-2"
                    style={{ color: achievement.unlocked ? CHART_COLORS.primary : '#64748b' }}
                  />
                  <h4 className={`font-semibold text-sm mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {achievement.name}
                  </h4>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {achievement.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>

      {/* Completed Courses */}
      <GlassCard isDark={isDark} className="mt-8">
        <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Completed Courses ({completedCourses.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {completedCourses.map((course) => (
            <div
              key={course.title}
              className={`p-4 rounded-lg border ${
                isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className={`font-semibold flex-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {course.title}
                </h4>
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 ml-2" style={{ color: CHART_COLORS.success }} />
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{course.date}</span>
                <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{course.duration}</span>
                <span
                  className="px-2 py-0.5 rounded text-xs font-semibold ml-auto"
                  style={{
                    background: 'rgba(34, 211, 238, 0.1)',
                    color: CHART_COLORS.primary,
                  }}
                >
                  {course.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
