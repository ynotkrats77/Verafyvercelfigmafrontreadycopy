import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { motion } from 'motion/react';
import { 
  Check, 
  Zap, 
  TrendingUp, 
  Shield, 
  Bell,
  FileText,
  ChevronRight,
  X,
  BarChart3,
  Activity
} from 'lucide-react';
import { ThemedButton } from '../components/ui/themed-button';

interface StandardPlanPageProps {
  isDark: boolean;
}

export function StandardPlanPage({ isDark }: StandardPlanPageProps) {
  const starterFeatures = [
    'Portfolio tracking (50 holdings)',
    'Action Center (5 cards per day)',
    'Basic Vera voice',
    'Performance metrics',
    'Risk scoring',
    'Concentration alerts',
    'Email alerts',
  ];

  const standardFeatures = [
    { name: 'Unlimited holdings & portfolios', included: true },
    { name: 'Full Action Center (unlimited cards)', included: true },
    { name: "Vera's complete personality", included: true },
    { name: 'Winners/Losers analysis', included: true },
    { name: 'Behavioral pattern detection', included: true },
    { name: 'Sector allocation analysis', included: true },
    { name: 'Email & push notifications', included: true },
    { name: 'Priority email support', included: true },
  ];

  const addOns = [
    { name: 'Tax Reporting Pack', description: '$20/financial year - Enhanced tax reporting with tax loss harvesting and export capabilities', price: '$20/fin year' },
  ];

  const notIncluded = [
    'Portfolio Optimization Engine',
    'Chat with Vera (500 questions/month)',
    'Scenario Modeling',
    'Peer comparison & benchmarking',
    'ATO-ready tax reports (PDF)',
    'Advanced tax optimization',
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
                ? 'radial-gradient(circle at 50% 0%, #3B82F6 0%, transparent 50%)'
                : 'radial-gradient(circle at 50% 0%, #3B82F6 0%, transparent 70%)',
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
                      ? 'rgba(59, 130, 246, 0.1)' 
                      : 'rgba(59, 130, 246, 0.1)',
                    borderColor: '#3B82F6',
                    color: '#3B82F6',
                  }}
                >
                  <Zap className="inline-block w-4 h-4 mr-2 -mt-1" />
                  Most Popular
                </span>
              </motion.div>

              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Standard
                </span>{' '}
                Plan
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Live with Vera every day
              </p>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className={`text-2xl line-through ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    $20
                  </span>
                  <span className={`text-6xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    $10
                  </span>
                  <span className={`text-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    /month
                  </span>
                </div>
                <div 
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                    color: 'white',
                  }}
                >
                  50% OFF Founding Member Pricing
                </div>
                <p className={`text-sm mt-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  or $100/year (save $20)
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
            {/* Includes Starter */}
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
                borderColor: 'rgba(6, 182, 212, 0.2)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'rgba(6, 182, 212, 0.2)',
                  }}
                >
                  <Check className="w-5 h-5" style={{ color: '#06B6D4' }} />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Includes everything in Starter, plus:
                </h3>
              </div>
              <p className={`text-sm ml-11 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {starterFeatures.join(' • ')}
              </p>
            </motion.div>

            {/* Standard Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl border-2 rounded-2xl p-8 mb-8"
              style={{
                background: isDark
                  ? 'rgba(15, 23, 42, 0.6)'
                  : 'rgba(255, 255, 255, 0.8)',
                borderColor: 'rgba(59, 130, 246, 0.3)',
              }}
            >
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Standard Features
              </h2>

              <div className="space-y-4">
                {standardFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background: 'rgba(59, 130, 246, 0.2)',
                      }}
                    >
                      <Check className="w-4 h-4" style={{ color: '#3B82F6' }} />
                    </div>
                    <span className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {feature.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Add-ons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl border-2 rounded-2xl p-8 mb-8"
              style={{
                background: isDark
                  ? 'rgba(15, 23, 42, 0.6)'
                  : 'rgba(255, 255, 255, 0.8)',
                borderColor: 'rgba(59, 130, 246, 0.3)',
              }}
            >
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Add-ons
              </h2>

              <div className="space-y-4">
                {addOns.map((addOn, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background: 'rgba(59, 130, 246, 0.2)',
                      }}
                    >
                      <Check className="w-4 h-4" style={{ color: '#3B82F6' }} />
                    </div>
                    <span className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {addOn.name} - {addOn.description} - {addOn.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Not Included */}
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
                borderColor: isDark ? 'rgba(148, 163, 184, 0.2)' : 'rgba(148, 163, 184, 0.3)',
              }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Upgrade to Pro for
              </h3>

              <div className="space-y-3">
                {notIncluded.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background: isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(148, 163, 184, 0.1)',
                      }}
                    >
                      <X className="w-3 h-3" style={{ color: isDark ? '#94A3B8' : '#64748B' }} />
                    </div>
                    <span className={`${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      {feature}
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
                  icon: TrendingUp,
                  title: 'Unlimited Tracking',
                  description: 'No limits on holdings or portfolios',
                },
                {
                  icon: BarChart3,
                  title: 'Strategic Insights',
                  description: 'Winners/Losers & behavioral patterns',
                },
                {
                  icon: Bell,
                  title: 'Priority Support',
                  description: 'Email & push notifications + priority help',
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
                      borderColor: 'rgba(59, 130, 246, 0.2)',
                    }}
                  >
                    <Icon
                      className="w-10 h-10 mx-auto mb-4"
                      style={{ color: '#3B82F6' }}
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