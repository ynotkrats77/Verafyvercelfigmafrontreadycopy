import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain,
  Cpu,
  Sparkles,
  Shield,
  CheckCircle2,
  XCircle,
  ArrowDown,
  Zap,
  Calculator,
  MessageSquare,
  Filter,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Target,
  BarChart3,
  PieChart,
  Layers,
  Server
} from 'lucide-react';
import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';

interface VeraAIPageProps {
  isDark: boolean;
}

export function VeraAIPage({ isDark }: VeraAIPageProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const architectureSteps = [
    {
      id: 1,
      title: 'User Message',
      icon: MessageSquare,
      color: '#22D3EE',
      description: 'User asks a question or makes a request',
      example: '"What\'s my capital gains tax if I sell BHP?"'
    },
    {
      id: 2,
      title: 'Intent Classifier',
      icon: Brain,
      color: '#06B6D4',
      description: 'Determines message type and routing',
      details: ['Calculation request → Rules Engine', 'General question → Gemini AI', 'Hybrid query → Both systems']
    },
    {
      id: 3,
      title: 'Rules Engine',
      icon: Calculator,
      color: '#0EA5E9',
      description: 'Coded calculations (100% accurate)',
      features: ['CGT calculations', 'Portfolio metrics', 'Risk scores', 'Tax harvesting', 'Concentration alerts', 'Dividend projections']
    },
    {
      id: 4,
      title: 'Gemini AI',
      icon: Sparkles,
      color: '#3B82F6',
      description: 'Natural conversation and context',
      features: ['Context understanding', 'Empathetic responses', 'Explanations', 'Education', 'Goal discussions', 'Strategy advice']
    },
    {
      id: 5,
      title: 'Response Composer',
      icon: Layers,
      color: '#8B5CF6',
      description: 'Combines calculated data with natural language',
      example: 'Numbers from Rules Engine + Explanation from Gemini'
    },
    {
      id: 6,
      title: 'Compliance Filter',
      icon: Shield,
      color: '#A855F7',
      description: 'Disclaimer injection & advice boundary check',
      actions: ['Inject mandatory disclaimers', 'Block personal advice phrases', 'Add regulatory notices']
    },
    {
      id: 7,
      title: 'Vera Response',
      icon: CheckCircle2,
      color: '#10B981',
      description: 'Final response delivered to user',
      example: 'Accurate, compliant, and conversational'
    }
  ];

  const designPrinciples = [
    {
      principle: 'Accuracy First',
      icon: Target,
      color: '#22D3EE',
      implementation: 'All numbers come from coded calculations, never AI-generated',
      impact: '100% calculation accuracy guaranteed'
    },
    {
      principle: 'Natural Engagement',
      icon: MessageSquare,
      color: '#10B981',
      implementation: 'Gemini provides conversational warmth and context',
      impact: 'Human-like conversations with financial literacy'
    },
    {
      principle: 'Cost Efficiency',
      icon: DollarSign,
      color: '#F59E0B',
      implementation: 'Rules engine handles 60-70% of queries without API calls',
      impact: 'Lower costs, faster responses'
    },
    {
      principle: 'Compliance Built-In',
      icon: Shield,
      color: '#8B5CF6',
      implementation: 'Disclaimers automatically injected, no personal advice given',
      impact: 'ASIC RG 244 compliant by design'
    },
    {
      principle: 'Graceful Degradation',
      icon: Server,
      color: '#3B82F6',
      implementation: 'System works if Gemini unavailable (rules-only mode)',
      impact: '99.9% uptime for core calculations'
    }
  ];

  const whatVeraDoes = [
    { label: 'Calculate CGT (Capital Gains Tax) estimates', icon: Calculator },
    { label: 'Analyze portfolio performance and metrics', icon: BarChart3 },
    { label: 'Calculate risk scores and diversification', icon: PieChart },
    { label: 'Identify tax harvesting opportunities', icon: TrendingUp },
    { label: 'Detect portfolio concentration risks', icon: AlertTriangle },
    { label: 'Project dividend income', icon: DollarSign },
    { label: 'Explain financial concepts in plain language', icon: MessageSquare },
    { label: 'Provide general market information', icon: TrendingUp },
    { label: 'Answer questions about your portfolio data', icon: Brain },
    { label: 'Educate on investment fundamentals', icon: Sparkles },
    { label: 'Help set financial goals and track progress', icon: Target }
  ];

  const whatVeraDoesNot = [
    { label: 'Give personal financial advice', category: 'ASIC RG 244' },
    { label: 'Recommend specific stocks to buy or sell', category: 'ASIC RG 244' },
    { label: 'Provide investment recommendations', category: 'ASIC RG 244' },
    { label: 'Give personal tax advice', category: 'Tax Agent Services Act' },
    { label: 'Lodge tax returns or complete tax forms', category: 'Tax Agent Services Act' },
    { label: 'Make investment decisions for you', category: 'ASIC RG 244' },
    { label: 'Execute trades or manage your portfolio', category: 'AFS License Required' },
    { label: 'Access your brokerage accounts', category: 'Security & Privacy' },
    { label: 'Store payment card details', category: 'PCI-DSS' },
    { label: 'Share your data with third parties', category: 'Privacy Act' },
    { label: 'Generate exact tax figures for lodgement', category: 'Tax Agent Services Act' }
  ];

  const rulesEngineCapabilities = [
    {
      category: 'Tax Calculations',
      icon: Calculator,
      color: '#22D3EE',
      capabilities: [
        'FIFO/LIFO cost basis tracking',
        'Capital gains/loss calculations',
        'Discount CGT (50% reduction)',
        'Marginal tax rate estimation',
        'Tax loss harvesting identification',
        'Wash sale detection'
      ]
    },
    {
      category: 'Portfolio Analytics',
      icon: BarChart3,
      color: '#10B981',
      capabilities: [
        'Total portfolio value',
        'Position-level P&L',
        'Time-weighted returns',
        'Money-weighted returns',
        'Drawdown analysis',
        'Volatility metrics'
      ]
    },
    {
      category: 'Risk Management',
      icon: Shield,
      color: '#F59E0B',
      capabilities: [
        'Concentration risk (position size)',
        'Sector exposure analysis',
        'Beta calculations',
        'Correlation matrices',
        'VaR (Value at Risk)',
        'Sharpe ratio'
      ]
    },
    {
      category: 'Income Projections',
      icon: DollarSign,
      color: '#8B5CF6',
      capabilities: [
        'Dividend yield calculations',
        'Forward dividend estimates',
        'Dividend growth tracking',
        'Income timeline projections',
        'Franking credit estimates',
        'DRIP (Dividend Reinvestment) modeling'
      ]
    }
  ];

  const geminiCapabilities = [
    'Understanding complex questions in natural language',
    'Providing context-aware explanations',
    'Simplifying financial jargon into plain English',
    'Empathetic responses to user concerns',
    'Educational content about investing concepts',
    'Goal-setting conversations and planning',
    'Asking clarifying questions when needed',
    'Remembering conversation context'
  ];

  return (
    <>
      <FloatingParticles isDark={isDark} />
      <InteractiveCursor isDark={isDark} />

      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="relative pt-32 pb-16 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: isDark 
                ? 'radial-gradient(circle at 50% 0%, var(--theme-primary) 0%, transparent 50%)'
                : 'radial-gradient(circle at 50% 0%, var(--theme-primary) 0%, transparent 70%)',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span 
                  className="px-4 py-2 rounded-full text-sm font-semibold border-2"
                  style={{
                    background: isDark 
                      ? 'rgba(var(--theme-primary-rgb), 0.1)' 
                      : 'rgba(var(--theme-primary-rgb), 0.1)',
                    borderColor: 'var(--theme-primary-alpha)',
                    color: 'var(--theme-primary)',
                  }}
                >
                  1st Generation
                </span>
              </motion.div>

              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                How{' '}
                <span 
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Vera AI
                </span>{' '}
                Works
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                A hybrid AI system combining coded accuracy with natural conversation
              </p>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { label: 'Calculation Accuracy', value: '100%' },
                { label: 'Rules Engine Coverage', value: '60-70%' },
                { label: 'Response Time', value: '<2s' },
                { label: 'Uptime', value: '99.9%' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-xl backdrop-blur-xl border-2"
                  style={{
                    background: isDark 
                      ? 'rgba(15, 23, 42, 0.6)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: 'var(--theme-primary-alpha)',
                  }}
                >
                  <div 
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    {stat.value}
                  </div>
                  <div className={`text-xs md:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Architecture Flow */}
        <div className="relative py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Hybrid Design Architecture
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-center text-lg mb-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              Every Vera response flows through this 7-step intelligent pipeline
            </motion.p>

            <div className="space-y-6">
              {architectureSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;

                return (
                  <div key={step.id}>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setActiveStep(isActive ? null : step.id)}
                      className="p-6 rounded-2xl border-2 backdrop-blur-xl cursor-pointer transition-all duration-300"
                      style={{
                        background: isDark 
                          ? 'rgba(15, 23, 42, 0.6)' 
                          : 'rgba(255, 255, 255, 0.8)',
                        borderColor: isActive ? step.color : 'var(--theme-primary-alpha)',
                        boxShadow: isActive ? `0 8px 32px ${step.color}40` : 'none'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `${step.color}20`,
                            border: `2px solid ${step.color}`
                          }}
                        >
                          <Icon className="w-7 h-7" style={{ color: step.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span 
                              className="text-sm font-bold px-2 py-1 rounded"
                              style={{
                                background: `${step.color}20`,
                                color: step.color
                              }}
                            >
                              Step {step.id}
                            </span>
                            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                              {step.title}
                            </h3>
                          </div>
                          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {step.description}
                          </p>

                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4"
                            >
                              {step.features && (
                                <div className="space-y-2">
                                  {step.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                      <CheckCircle2 className="w-4 h-4" style={{ color: step.color }} />
                                      <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                        {feature}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {step.details && (
                                <div className="space-y-2">
                                  {step.details.map((detail, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
                                      <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                        {detail}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {step.example && (
                                <div 
                                  className="mt-3 p-3 rounded-lg text-sm italic"
                                  style={{
                                    background: isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)',
                                    color: step.color
                                  }}
                                >
                                  Example: {step.example}
                                </div>
                              )}
                              {step.actions && (
                                <div className="mt-3 space-y-2">
                                  {step.actions.map((action, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                      <Shield className="w-4 h-4" style={{ color: step.color }} />
                                      <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                        {action}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* Arrow between steps */}
                    {index < architectureSteps.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ArrowDown className="w-6 h-6" style={{ color: 'var(--theme-primary)' }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Design Principles */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Design Principles
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designPrinciples.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.principle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-2xl border-2 backdrop-blur-xl"
                    style={{
                      background: isDark 
                        ? 'rgba(15, 23, 42, 0.6)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'var(--theme-primary-alpha)',
                    }}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `${item.color}20`,
                        border: `2px solid ${item.color}`
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.principle}
                    </h3>
                    <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.implementation}
                    </p>
                    <div 
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg inline-block"
                      style={{
                        background: `${item.color}15`,
                        color: item.color
                      }}
                    >
                      {item.impact}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Rules Engine Capabilities */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Rules Engine Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-center text-lg mb-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              100% accurate coded calculations - no AI guessing
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {rulesEngineCapabilities.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl border-2 backdrop-blur-xl"
                    style={{
                      background: isDark 
                        ? 'rgba(15, 23, 42, 0.6)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'var(--theme-primary-alpha)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${category.color}20`,
                          border: `2px solid ${category.color}`
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: category.color }} />
                      </div>
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {category.category}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {category.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: category.color }} />
                          <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gemini AI Capabilities */}
        <div className="relative py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Gemini AI Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-center text-lg mb-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Natural conversation and contextual understanding
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border-2 backdrop-blur-xl"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: 'var(--theme-primary-alpha)',
              }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {geminiCapabilities.map((capability, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Sparkles className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--theme-primary)' }} />
                    <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {capability}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* What Vera Does */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              What Vera <span style={{ color: 'var(--theme-primary)' }}>Does</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatVeraDoes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl border-2 backdrop-blur-xl"
                    style={{
                      background: isDark 
                        ? 'rgba(15, 23, 42, 0.6)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'var(--theme-primary-alpha)',
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                    <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* What Vera Does NOT Do */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              What Vera <span className="text-red-500">Does NOT</span> Do
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatVeraDoesNot.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-4 rounded-xl border-2 backdrop-blur-xl border-red-500/30 ${
                    isDark ? 'bg-slate-900/60' : 'bg-white/80'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                    <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {item.label}
                    </span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-500">
                    {item.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl border-2 backdrop-blur-xl text-center"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: 'var(--theme-primary-alpha)',
              }}
            >
              <Brain className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--theme-primary)' }} />
              <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Transparency & Trust
              </h3>
              <p className={`text-lg mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Vera AI is designed with ASIC compliance, data privacy, and accuracy at its core. 
                We're transparent about what we do, what we don't do, and how your data is handled.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/compliance"
                  className="px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-transform hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  }}
                >
                  View Compliance Framework
                </a>
                <a
                  href="/disclaimers"
                  className="px-8 py-4 rounded-xl font-semibold border-2 transition-all hover:scale-105"
                  style={{
                    borderColor: 'var(--theme-primary)',
                    color: 'var(--theme-primary)',
                    background: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.8)'
                  }}
                >
                  Read Disclaimers
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
