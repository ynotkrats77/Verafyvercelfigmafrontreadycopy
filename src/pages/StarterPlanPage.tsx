import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Check, 
  Zap, 
  TrendingUp, 
  Shield, 
  Bell,
  FileText,
  ChevronRight,
  ChevronDown,
  X,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ThemedButton } from '../components/ui/themed-button';
import { PLANS, getPlan } from '../config/plans';
import { getFAQsByPlan } from '../config/faqs';

interface StarterPlanPageProps {
  isDark: boolean;
}

export function StarterPlanPage({ isDark }: StarterPlanPageProps) {
  const features = [
    { name: 'Portfolio tracking (50 holdings)', included: true },
    { name: 'Action Center (5 cards per day)', included: true },
    { name: 'Basic Vera voice', included: true },
    { name: 'Performance metrics', included: true },
    { name: 'Risk scoring', included: true },
    { name: 'Concentration alerts', included: true },
    { name: 'Email alerts', included: true },
  ];

  const addOns = [
    { name: 'Tax Reporting Pack', description: '$30/financial year - Tax loss harvesting, tax history tracking, and basic tax reporting', price: '$30/fin year' },
  ];

  const notIncluded = [
    'Unlimited holdings & portfolios',
    'Full Action Center (unlimited cards)',
    'Winners/Losers analysis',
    'Chat with Vera',
    'Portfolio Optimization Engine',
    'ATO-ready tax reports (included in Pro)',
  ];

  const [showFAQs, setShowFAQs] = useState(false);

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
                ? 'radial-gradient(circle at 50% 0%, #06B6D4 0%, transparent 50%)'
                : 'radial-gradient(circle at 50% 0%, #06B6D4 0%, transparent 70%)',
            }}
          />

          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
                className="inline-block mb-6"
              >
                <span 
                  className="px-4 py-2 rounded-full text-sm font-semibold border-2"
                  style={{
                    background: isDark 
                      ? 'rgba(6, 182, 212, 0.1)' 
                      : 'rgba(6, 182, 212, 0.1)',
                    borderColor: '#06B6D4',
                    color: '#06B6D4',
                  }}
                >
                  <Zap className="inline-block w-4 h-4 mr-2 -mt-1" />
                  Perfect for Beginners
                </span>
              </motion.div>

              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #06B6D4, #22D3EE)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Starter
                </span>{' '}
                Plan
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Try Vera for less than a coffee
              </p>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className={`text-2xl line-through ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    $10
                  </span>
                  <span className={`text-6xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    $5
                  </span>
                  <span className={`text-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    /month
                  </span>
                </div>
                <div 
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #06B6D4, #22D3EE)',
                    color: 'white',
                  }}
                >
                  50% OFF Founding Member Pricing
                </div>
                <p className={`text-sm mt-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  or $50/year (save $10)
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="backdrop-blur-xl border-2 rounded-2xl p-8 mb-8"
              style={{
                background: isDark
                  ? 'rgba(15, 23, 42, 0.6)'
                  : 'rgba(255, 255, 255, 0.8)',
                borderColor: 'rgba(6, 182, 212, 0.3)',
              }}
            >
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                What's Included
              </h2>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.03, ease: 'easeOut' }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background: 'rgba(6, 182, 212, 0.2)',
                      }}
                    >
                      <Check className="w-4 h-4" style={{ color: '#06B6D4' }} />
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
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="backdrop-blur-xl border-2 rounded-2xl p-8 mb-8"
              style={{
                background: isDark
                  ? 'rgba(15, 23, 42, 0.6)'
                  : 'rgba(255, 255, 255, 0.8)',
                borderColor: 'rgba(6, 182, 212, 0.3)',
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
                    transition={{ duration: 0.2, delay: index * 0.03, ease: 'easeOut' }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background: 'rgba(6, 182, 212, 0.2)',
                      }}
                    >
                      <Check className="w-4 h-4" style={{ color: '#06B6D4' }} />
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
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="backdrop-blur-xl border-2 rounded-2xl p-8"
              style={{
                background: isDark
                  ? 'rgba(15, 23, 42, 0.6)'
                  : 'rgba(255, 255, 255, 0.8)',
                borderColor: isDark ? 'rgba(148, 163, 184, 0.2)' : 'rgba(148, 163, 184, 0.3)',
              }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Upgrade to Standard or Pro for
              </h3>

              <div className="space-y-3">
                {notIncluded.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.03, ease: 'easeOut' }}
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
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: TrendingUp,
                  title: 'Track 50 Holdings',
                  description: 'Perfect for small portfolios',
                },
                {
                  icon: Shield,
                  title: 'Risk Insights',
                  description: 'Portfolio risk scoring & alerts',
                },
                {
                  icon: Bell,
                  title: 'Daily Action Center',
                  description: '5 personalized insights per day',
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
                      borderColor: 'rgba(6, 182, 212, 0.2)',
                    }}
                  >
                    <Icon
                      className="w-10 h-10 mx-auto mb-4"
                      style={{ color: '#06B6D4' }}
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

            {/* FAQs */}
            <div className="mt-12">
              <button
                className={`flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                onClick={() => setShowFAQs(!showFAQs)}
              >
                <Sparkles className="w-5 h-5" />
                FAQs
                {showFAQs ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>

              <AnimatePresence>
                {showFAQs && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4"
                  >
                    <div className="backdrop-blur-xl border-2 rounded-2xl p-8">
                      <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Frequently Asked Questions
                      </h3>

                      <div className="space-y-4">
                        {getFAQsByPlan('starter').map((faq, index) => (
                          <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2, delay: index * 0.03, ease: 'easeOut' }}
                            className="border-b border-opacity-20 pb-4 last:border-0"
                            style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}
                          >
                            <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                              {faq.question}
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {faq.answer}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}