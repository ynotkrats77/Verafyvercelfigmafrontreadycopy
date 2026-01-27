import { motion } from 'framer-motion';
import {
  Target,
  TrendingUp,
  DollarSign,
  Calendar,
  Home,
  GraduationCap,
  Plane,
  Heart,
  Zap,
  Award,
  CheckCircle,
  AlertCircle,
  Clock,
  ChevronRight,
  Plus,
  Edit2,
  BarChart3,
  Activity,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, Cell } from 'recharts';

interface StrategicPlannerPageProps {
  isDark: boolean;
}

export function StrategicPlannerPage({ isDark }: StrategicPlannerPageProps) {
  const financialGoals = [
    {
      id: '1',
      name: 'Emergency Fund',
      icon: Heart,
      color: '#ef4444',
      priority: 'critical',
      targetAmount: 25000,
      currentAmount: 2400,
      progress: 9.6,
      deadline: '2026-12-31',
      monthsRemaining: 11,
      monthlyRequired: 2055,
      currentMonthly: 200,
      onTrack: false,
      status: 'Behind',
      recommendation: 'Increase monthly contribution to $2,055 to meet 6-month expense target by year end',
    },
    {
      id: '2',
      name: 'Home Down Payment',
      icon: Home,
      color: '#3b82f6',
      priority: 'high',
      targetAmount: 100000,
      currentAmount: 29600,
      progress: 29.6,
      deadline: '2028-06-30',
      monthsRemaining: 29,
      monthlyRequired: 2428,
      currentMonthly: 1200,
      onTrack: false,
      status: 'Behind',
      recommendation: 'Increase savings rate by $1,228/month or extend timeline by 14 months',
    },
    {
      id: '3',
      name: 'Retirement Fund',
      icon: Award,
      color: '#10b981',
      priority: 'medium',
      targetAmount: 2000000,
      currentAmount: 29600,
      progress: 1.5,
      deadline: '2055-01-01',
      monthsRemaining: 348,
      monthlyRequired: 1150,
      currentMonthly: 500,
      onTrack: true,
      status: 'On Track',
      recommendation: 'On pace for $2.1M by age 65 with 7% average returns. Consider increasing to reach $2.5M',
    },
    {
      id: '4',
      name: 'Child Education Fund',
      icon: GraduationCap,
      color: '#f59e0b',
      priority: 'medium',
      targetAmount: 200000,
      currentAmount: 8500,
      progress: 4.3,
      deadline: '2038-09-01',
      monthsRemaining: 152,
      monthlyRequired: 1260,
      currentMonthly: 300,
      onTrack: false,
      status: 'Behind',
      recommendation: 'Start 529 plan and increase contributions to $1,260/month for full college funding',
    },
    {
      id: '5',
      name: 'Dream Vacation',
      icon: Plane,
      color: '#a855f7',
      priority: 'low',
      targetAmount: 15000,
      currentAmount: 3200,
      progress: 21.3,
      deadline: '2027-07-01',
      monthsRemaining: 17,
      monthlyRequired: 694,
      currentMonthly: 250,
      onTrack: false,
      status: 'Adjustable',
      recommendation: 'On track for $7,450. Consider modest vacation or extend timeline 8 months',
    },
  ];

  const milestones = [
    { year: 2026, event: 'Emergency Fund Complete', amount: 25000, status: 'upcoming' },
    { year: 2027, event: 'Vacation Fund Target', amount: 15000, status: 'upcoming' },
    { year: 2028, event: 'Home Down Payment', amount: 100000, status: 'upcoming' },
    { year: 2035, event: 'Half-way to Retirement', amount: 1000000, status: 'future' },
    { year: 2038, event: 'Education Fund Complete', amount: 200000, status: 'future' },
    { year: 2055, event: 'Retirement Goal', amount: 2000000, status: 'future' },
  ];

  const projectedWealth = [
    { year: '2026', conservative: 45000, moderate: 52000, aggressive: 58000 },
    { year: '2028', conservative: 95000, moderate: 118000, aggressive: 142000 },
    { year: '2030', conservative: 165000, moderate: 215000, aggressive: 272000 },
    { year: '2035', conservative: 385000, moderate: 548000, aggressive: 715000 },
    { year: '2040', conservative: 685000, moderate: 1085000, aggressive: 1542000 },
    { year: '2045', conservative: 1125000, moderate: 1952000, aggressive: 3105000 },
    { year: '2050', conservative: 1785000, moderate: 3425000, aggressive: 6012000 },
    { year: '2055', conservative: 2685000, moderate: 5842000, aggressive: 11250000 },
  ];

  const monthlyBudget = [
    { category: 'Income', amount: 6500, type: 'income' },
    { category: 'Housing', amount: -1800, type: 'expense' },
    { category: 'Food & Dining', amount: -650, type: 'expense' },
    { category: 'Transportation', amount: -450, type: 'expense' },
    { category: 'Utilities', amount: -280, type: 'expense' },
    { category: 'Entertainment', amount: -320, type: 'expense' },
    { category: 'Healthcare', amount: -210, type: 'expense' },
    { category: 'Other', amount: -340, type: 'expense' },
    { category: 'Available for Goals', amount: 2450, type: 'available' },
    { category: 'Current Savings', amount: -2450, type: 'savings' },
    { category: 'Required Savings', amount: -5587, type: 'required' },
    { category: 'Shortfall', amount: -3137, type: 'shortfall' },
  ];

  const recommendations = [
    {
      priority: 'critical',
      title: 'Build Emergency Fund First',
      description: 'Focus on reaching $25,000 emergency fund before aggressive investing. This protects against forced liquidation during market downturns.',
      impact: 'Risk Reduction',
      timeframe: '11 months',
      action: 'Allocate $2,055/month to high-yield savings',
      expected: 'Full 6-month emergency coverage',
    },
    {
      priority: 'high',
      title: 'Optimize Current Portfolio',
      description: 'Reduce DOC concentration and harvest tax losses before pursuing new goals. This frees up $82,643 in tax benefits.',
      impact: '$24,793 tax savings',
      timeframe: 'Immediate',
      action: 'Execute tax-loss harvest and rebalancing',
      expected: 'Improved risk profile + tax benefits',
    },
    {
      priority: 'high',
      title: 'Increase Income or Reduce Expenses',
      description: 'Current income falls short of goal requirements by $3,137/month. Consider side income, promotion, or expense cuts.',
      impact: 'Goal Achievement',
      timeframe: '3-6 months',
      action: 'Identify $3,000+ monthly income boost',
      expected: 'Meet all goal timelines',
    },
    {
      priority: 'medium',
      title: 'Automate Goal Contributions',
      description: 'Set up automatic transfers to separate accounts for each goal. This ensures consistent progress and prevents spending.',
      impact: 'Consistency',
      timeframe: '1 week',
      action: 'Create dedicated savings accounts',
      expected: '95% goal adherence rate',
    },
  ];

  const stats = [
    {
      label: 'Total Goals',
      value: '5',
      subtext: '3 behind schedule',
      icon: Target,
      color: '#22d3ee',
    },
    {
      label: 'Target Wealth',
      value: '$2.34M',
      subtext: 'Combined goals',
      icon: DollarSign,
      color: '#10b981',
    },
    {
      label: 'Monthly Gap',
      value: '$3,137',
      subtext: 'Income shortfall',
      icon: AlertCircle,
      color: '#ef4444',
    },
    {
      label: 'Years to FI',
      value: '29',
      subtext: 'Financial independence',
      icon: Calendar,
      color: '#a855f7',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return '#ef4444';
      case 'high':
        return '#f97316';
      case 'medium':
        return '#f59e0b';
      default:
        return '#64748b';
    }
  };

  const getStatusColor = (status: string) => {
    if (status === 'On Track') return '#10b981';
    if (status === 'Behind') return '#ef4444';
    return '#f59e0b';
  };

  return (
    <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div
              className="p-3 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
              }}
            >
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Strategic Financial Planner
              </h1>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Long-term goal planning and wealth projection with AI-powered recommendations
              </p>
            </div>
          </div>
          <button
            className="px-4 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
              color: '#ffffff',
            }}
          >
            <Plus className="w-5 h-5" />
            Add New Goal
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-5 rounded-xl border ${
                isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background: `${stat.color}20`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
              </div>
              <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {stat.label}
              </p>
              <p className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {stat.value}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                {stat.subtext}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Wealth Projection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <h2 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Long-Term Wealth Projection
        </h2>
        <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Three scenarios based on different return assumptions and contribution levels
        </p>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={projectedWealth}>
              <defs>
                <linearGradient id="conservativeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#64748b" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#64748b" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="moderateGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="aggressiveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
              <XAxis
                dataKey="year"
                stroke={isDark ? '#64748b' : '#94a3b8'}
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke={isDark ? '#64748b' : '#94a3b8'}
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                  borderRadius: '8px',
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
              />
              <Area
                type="monotone"
                dataKey="conservative"
                stroke="#64748b"
                strokeWidth={2}
                fill="url(#conservativeGrad)"
                name="Conservative (4% return)"
              />
              <Area
                type="monotone"
                dataKey="moderate"
                stroke="#22d3ee"
                strokeWidth={2}
                fill="url(#moderateGrad)"
                name="Moderate (7% return)"
              />
              <Area
                type="monotone"
                dataKey="aggressive"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#aggressiveGrad)"
                name="Aggressive (10% return)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-500" />
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Conservative 4%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-500" />
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Moderate 7%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Aggressive 10%
            </span>
          </div>
        </div>
      </motion.div>

      {/* Financial Goals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-6 rounded-xl border ${
          isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Financial Goals
          </h2>
          <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Click any goal to view details and adjust
          </span>
        </div>

        <div className="space-y-4">
          {financialGoals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-5 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ${
                  isDark ? 'border-slate-700 hover:bg-slate-700/50' : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{
                      background: `${goal.color}20`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: goal.color }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {goal.name}
                          </h3>
                          <span
                            className="text-xs px-2 py-0.5 rounded font-semibold uppercase"
                            style={{
                              background: `${getPriorityColor(goal.priority)}20`,
                              color: getPriorityColor(goal.priority),
                            }}
                          >
                            {goal.priority}
                          </span>
                          <span
                            className="text-xs px-2 py-0.5 rounded font-semibold"
                            style={{
                              background: `${getStatusColor(goal.status)}20`,
                              color: getStatusColor(goal.status),
                            }}
                          >
                            {goal.status}
                          </span>
                        </div>
                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {goal.monthsRemaining} months remaining
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          ${goal.currentAmount.toLocaleString()}
                        </div>
                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          of ${goal.targetAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          Progress
                        </span>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: goal.color }}
                        >
                          {goal.progress.toFixed(1)}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${goal.progress}%`,
                            background: goal.color,
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          Current Monthly
                        </p>
                        <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          ${goal.currentMonthly.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          Required Monthly
                        </p>
                        <p className={`text-sm font-semibold ${goal.onTrack ? 'text-green-500' : 'text-red-500'}`}>
                          ${goal.monthlyRequired.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          Target Date
                        </p>
                        <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {new Date(goal.deadline).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </p>
                      </div>
                    </div>

                    {/* AI Recommendation */}
                    <div
                      className={`p-3 rounded-lg ${
                        isDark ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-cyan-50 border border-cyan-200'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <p className={`text-sm ${isDark ? 'text-cyan-300' : 'text-cyan-900'}`}>
                          <span className="font-semibold">AI Recommendation:</span> {goal.recommendation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* AI Recommendations & Budget Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              AI Recommendations
            </h2>
          </div>

          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  isDark ? 'border-slate-700' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start gap-2 mb-2">
                  <span
                    className="text-xs px-2 py-0.5 rounded font-semibold uppercase"
                    style={{
                      background: `${getPriorityColor(rec.priority)}20`,
                      color: getPriorityColor(rec.priority),
                    }}
                  >
                    {rec.priority}
                  </span>
                  <h3 className={`flex-1 font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {rec.title}
                  </h3>
                </div>
                <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {rec.description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                  <div>
                    <p className={isDark ? 'text-slate-500' : 'text-slate-400'}>Impact</p>
                    <p className={`font-semibold text-green-500`}>{rec.impact}</p>
                  </div>
                  <div>
                    <p className={isDark ? 'text-slate-500' : 'text-slate-400'}>Timeframe</p>
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {rec.timeframe}
                    </p>
                  </div>
                </div>
                <button
                  className="w-full px-3 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: `${getPriorityColor(rec.priority)}15`,
                    color: getPriorityColor(rec.priority),
                  }}
                >
                  {rec.action}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Budget Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <h2 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Monthly Budget Analysis
          </h2>

          <div className="space-y-2">
            {monthlyBudget.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  item.type === 'income'
                    ? isDark
                      ? 'bg-green-500/10'
                      : 'bg-green-50'
                    : item.type === 'shortfall'
                    ? isDark
                      ? 'bg-red-500/10'
                      : 'bg-red-50'
                    : item.type === 'available'
                    ? isDark
                      ? 'bg-cyan-500/10'
                      : 'bg-cyan-50'
                    : isDark
                    ? 'bg-slate-700/30'
                    : 'bg-slate-50'
                }`}
              >
                <span
                  className={`text-sm ${
                    item.type === 'income'
                      ? 'font-bold text-green-500'
                      : item.type === 'shortfall' || item.type === 'required'
                      ? 'font-semibold text-red-500'
                      : item.type === 'available'
                      ? 'font-semibold text-cyan-500'
                      : isDark
                      ? 'text-slate-300'
                      : 'text-slate-700'
                  }`}
                >
                  {item.category}
                </span>
                <span
                  className={`text-sm font-bold ${
                    item.amount > 0
                      ? 'text-green-500'
                      : item.type === 'shortfall'
                      ? 'text-red-500'
                      : isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  {item.amount > 0 ? '+' : ''}${Math.abs(item.amount).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t" style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}>
            <div
              className={`p-4 rounded-lg ${
                isDark ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-50 border border-red-200'
              }`}
            >
              <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-red-400' : 'text-red-700'}`}>
                ⚠️ Budget Gap Alert
              </p>
              <p className={`text-sm ${isDark ? 'text-red-300' : 'text-red-600'}`}>
                You need an additional $3,137/month to meet all goal timelines. Consider increasing income or adjusting goal deadlines.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
