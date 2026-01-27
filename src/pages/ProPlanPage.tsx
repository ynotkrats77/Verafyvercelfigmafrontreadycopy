import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { motion } from 'framer-motion';
import { 
  Check, 
  Zap, 
  TrendingUp, 
  Shield, 
  Bell,
  FileText,
  ChevronRight,
  Sparkles,
  MessageSquare,
  BarChart3,
  Target,
  Phone
} from 'lucide-react';
import { ThemedButton } from '../components/ui/themed-button';

interface ProPlanPageProps {
  isDark: boolean;
}

export function ProPlanPage({ isDark }: ProPlanPageProps) {
  const starterStandardFeatures = [
    'All Starter features (portfolio tracking, risk scoring, basic tax detection)',
    'All Standard features (unlimited holdings, behavioral patterns, sector analysis)',
  ];

  const proFeatures = [
    { name: 'Portfolio Optimization Engine ⚡', included: true, highlight: true },
    { name: 'Chat with Vera (500 questions/month) ⚡', included: true, highlight: true },
    { name: 'Scenario Modeling (20 scenarios/month) ⚡', included: true, highlight: true },
    { name: 'Peer comparison & benchmarking', included: true },
    { name: 'Strategic goal planning', included: true },
    { name: 'Tax Reporting Pack for current year (INCLUDED) ⭐', included: true, highlight: true },
    { name: 'Additional previous years ($20/year each, max 5 years)', included: true },
    { name: 'Tax loss harvesting detection', included: true },
    { name: 'ATO-ready tax reports (PDF)', included: true },
    { name: 'Advanced tax optimization', included: true },
    { name: 'Capital gains calendar', included: true },
    { name: 'Franking credits tracking', included: true },
    { name: 'Wash sale warnings', included: true },
    { name: 'Priority phone & email support', included: true },
  ];

  return (
    <>
      {/* Background Effects */}
      <FloatingParticles isDark={isDark} />
      <InteractiveCursor isDark={isDark} />

      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="relative pt-32 pb-16 overflow-hidden">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: isDark 
                ? 'radial-gradient(circle at 50% 0%, #8B5CF6 0%, transparent 50%)'
                : 'radial-gradient(circle at 50% 0%, #8B5CF6 0%, transparent 70%)',
            }}
          />

          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span 
                  className="px-4 py-2 rounded-full text-sm font-semibold border-2"
                  style={{
                    background: isDark 
                      ? 'rgba(139, 92, 246, 0.1)' 
                      : 'rgba(139, 92, 246, 0.1)',
                    borderColor: '#8B5CF6',
                    color: '#8B5CF6',
                  }}
                >
                  <Sparkles className="inline-block w-4 h-4 mr-2 -mt-1" />
                  Full AI Power
                </span>
              </motion.div>

              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Pro
                </span>{' '}
                Plan
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Unlimited AI-powered portfolio intelligence
              </p>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className={`text-2xl line-through ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    $40
                  </span>
                  <span className={`text-6xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    $20
                  </span>
                  <span className={`text-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    /month
                  </span>
                </div>
                <div 
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                    color: 'white',
                  }}
                >
                  50% OFF Founding Member Pricing
                </div>
                <p className={`text-sm mt-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  or $200/year (save $40)
                </p>
              </div>

              <ThemedButton size="lg" className="mb-4">
                Get Started Free*
                <ChevronRight className="w-5 h-5 ml-2" />
              </ThemedButton>

              <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                7-day money-back guarantee • No credit card required for trial
              </p>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative py-16">
          <div className="max-w-5xl mx-auto px-6">
            {/* Includes Starter + Standard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl border-2 rounded-2xl p-6 mb-8"
              style={{
                background: isDark
                  ? 'rgba(15, 23, 42, 0.6)'
                  : 'rgba(255, 255, 255, 0.8)',
                borderColor: 'rgba(59, 130, 246, 0.2)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'rgba(59, 130, 246, 0.2)',
                  }}
                >
                  <Check className="w-5 h-5" style={{ color: '#3B82F6' }} />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Includes everything in Starter + Standard, plus:
                </h3>
              </div>
              <div className="ml-11 space-y-2">
                {starterStandardFeatures.map((feature, index) => (
                  <p key={index} className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    • {feature}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Pro Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl border-2 rounded-2xl p-8"
              style={{
                background: isDark
                  ? 'rgba(15, 23, 42, 0.6)'
                  : 'rgba(255, 255, 255, 0.8)',
                borderColor: 'rgba(139, 92, 246, 0.3)',
                boxShadow: '0 8px 32px rgba(139, 92, 246, 0.15)',
              }}
            >
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Pro Features
              </h2>

              <div className="space-y-4">
                {proFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`flex items-start gap-3 ${
                      feature.highlight
                        ? 'p-3 rounded-xl border-2'
                        : ''
                    }`}
                    style={
                      feature.highlight
                        ? {
                            background: isDark
                              ? 'rgba(139, 92, 246, 0.1)'
                              : 'rgba(139, 92, 246, 0.05)',
                            borderColor: 'rgba(139, 92, 246, 0.3)',
                          }
                        : {}
                    }
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background: feature.highlight
                          ? 'rgba(139, 92, 246, 0.3)'
                          : 'rgba(139, 92, 246, 0.2)',
                      }}
                    >
                      {feature.highlight ? (
                        <Sparkles className="w-4 h-4" style={{ color: '#8B5CF6' }} />
                      ) : (
                        <Check className="w-4 h-4" style={{ color: '#8B5CF6' }} />
                      )}
                    </div>
                    <span
                      className={`text-lg ${
                        feature.highlight
                          ? isDark
                            ? 'text-white font-semibold'
                            : 'text-slate-900 font-semibold'
                          : isDark
                          ? 'text-slate-300'
                          : 'text-slate-700'
                      }`}
                    >
                      {feature.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: MessageSquare,
                  title: 'Chat with Vera',
                  description: '500 AI conversations per month',
                },
                {
                  icon: FileText,
                  title: 'ATO Tax Reports',
                  description: '5 years history + PDF exports',
                },
                {
                  icon: Phone,
                  title: 'Premium Support',
                  description: 'Priority phone & email assistance',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="backdrop-blur-xl border-2 rounded-xl p-6 text-center"
                    style={{
                      background: isDark
                        ? 'rgba(15, 23, 42, 0.6)'
                        : 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'rgba(139, 92, 246, 0.2)',
                    }}
                  >
                    <Icon
                      className="w-10 h-10 mx-auto mb-4"
                      style={{ color: '#8B5CF6' }}
                    />
                    <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}