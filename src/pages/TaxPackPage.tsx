import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { motion } from 'framer-motion';
import { 
  Check, 
  Calculator, 
  FileText, 
  TrendingDown,
  AlertTriangle,
  ChevronRight,
  DollarSign,
  Calendar,
  Shield
} from 'lucide-react';
import { ThemedButton } from '../components/ui/themed-button';

interface TaxPackPageProps {
  isDark: boolean;
}

export function TaxPackPage({ isDark }: TaxPackPageProps) {
  const starterFeatures = [
    { name: 'Tax loss harvesting detection', icon: TrendingDown },
    { name: 'Tax history tracking', icon: Calendar },
    { name: 'Basic tax reporting', icon: FileText },
    { name: 'CGT calculations', icon: Calculator },
    { name: 'Current financial year only', icon: Calendar },
  ];

  const standardFeatures = [
    { name: 'Tax loss harvesting detection', icon: TrendingDown },
    { name: 'Tax history tracking', icon: Calendar },
    { name: 'Enhanced tax reporting', icon: FileText },
    { name: 'CGT calculations', icon: Calculator },
    { name: 'Current financial year only', icon: Calendar },
    { name: 'Export tax reports', icon: FileText },
  ];

  const proFeatures = [
    { name: 'Tax Reporting Pack included at no extra cost', icon: Check },
    { name: 'Current financial year included', icon: Calendar },
    { name: 'Up to 5 previous years available', icon: Calendar },
    { name: '$20/year per additional year', icon: DollarSign },
    { name: 'ATO-ready PDF reports', icon: FileText },
    { name: 'Advanced tax optimization', icon: Calculator },
    { name: 'Tax scenario modeling', icon: TrendingDown },
  ];

  const keyPoints = [
    {
      icon: AlertTriangle,
      title: 'Non-Refundable',
      description: 'Tax Reporting Pack purchases are non-refundable once purchased, whether or not features are used.',
    },
    {
      icon: Shield,
      title: 'Informational Only',
      description: 'Tax calculations are estimates only. Always consult a registered tax agent for personal tax advice.',
    },
    {
      icon: FileText,
      title: 'Subject to Data Upload',
      description: 'Historical tax reporting requires uploading complete transaction history for those years.',
    },
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
                ? 'radial-gradient(circle at 50% 0%, #10B981 0%, transparent 50%)'
                : 'radial-gradient(circle at 50% 0%, #10B981 0%, transparent 70%)',
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
                      ? 'rgba(16, 185, 129, 0.1)' 
                      : 'rgba(16, 185, 129, 0.1)',
                    borderColor: '#10B981',
                    color: '#10B981',
                  }}
                >
                  <Calculator className="inline-block w-4 h-4 mr-2 -mt-1" />
                  Optional Add-On
                </span>
              </motion.div>

              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #10B981, #34D399)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Tax Reporting
                </span>{' '}
                Pack
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Unlock tax optimization features to maximize your returns
              </p>

              {/* Pricing Tiers */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                {/* Starter Pricing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="backdrop-blur-xl border-2 rounded-2xl p-6"
                  style={{
                    background: isDark
                      ? 'rgba(15, 23, 42, 0.6)'
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Starter Plan
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      $30
                    </span>
                    <span className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      /fin year
                    </span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    Add-on purchase
                  </p>
                </motion.div>

                {/* Standard Pricing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="backdrop-blur-xl border-2 rounded-2xl p-6"
                  style={{
                    background: isDark
                      ? 'rgba(15, 23, 42, 0.6)'
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Standard Plan
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      $20
                    </span>
                    <span className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      /fin year
                    </span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    Add-on purchase
                  </p>
                </motion.div>

                {/* Pro Pricing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="backdrop-blur-xl border-2 rounded-2xl p-6 relative overflow-hidden"
                  style={{
                    background: isDark
                      ? 'rgba(16, 185, 129, 0.1)'
                      : 'rgba(16, 185, 129, 0.05)',
                    borderColor: '#10B981',
                  }}
                >
                  <div 
                    className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #10B981, #34D399)',
                      color: 'white',
                    }}
                  >
                    INCLUDED
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Pro Plan
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className={`text-4xl font-bold`} style={{ color: '#10B981' }}>
                      FREE
                    </span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    Current year included
                  </p>
                  <p className={`text-xs mt-1 ${isDark ? 'text-slate-600' : 'text-slate-500'}`}>
                    +$20/year for previous years
                  </p>
                </motion.div>
              </div>

              <ThemedButton size="lg" className="mb-4">
                Add Tax Reporting Pack
                <ChevronRight className="w-5 h-5 ml-2" />
              </ThemedButton>

              <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Non-refundable once purchased
              </p>
            </motion.div>
          </div>
        </div>

        {/* Features by Plan */}
        <div className="relative py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Features */}
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
                  borderColor: 'rgba(16, 185, 129, 0.3)',
                }}
              >
                <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Starter Pack
                </h2>
                <div className="space-y-4">
                  {starterFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
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
                            background: 'rgba(16, 185, 129, 0.2)',
                          }}
                        >
                          <Icon className="w-4 h-4" style={{ color: '#10B981' }} />
                        </div>
                        <span className={`text-base ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          {feature.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Standard Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="backdrop-blur-xl border-2 rounded-2xl p-8"
                style={{
                  background: isDark
                    ? 'rgba(15, 23, 42, 0.6)'
                    : 'rgba(255, 255, 255, 0.8)',
                  borderColor: 'rgba(16, 185, 129, 0.3)',
                }}
              >
                <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Standard Pack
                </h2>
                <div className="space-y-4">
                  {standardFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
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
                            background: 'rgba(16, 185, 129, 0.2)',
                          }}
                        >
                          <Icon className="w-4 h-4" style={{ color: '#10B981' }} />
                        </div>
                        <span className={`text-base ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          {feature.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Pro Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="backdrop-blur-xl border-2 rounded-2xl p-8"
                style={{
                  background: isDark
                    ? 'rgba(16, 185, 129, 0.1)'
                    : 'rgba(16, 185, 129, 0.05)',
                  borderColor: '#10B981',
                }}
              >
                <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Pro Pack
                </h2>
                <div className="space-y-4">
                  {proFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
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
                            background: 'rgba(16, 185, 129, 0.2)',
                          }}
                        >
                          <Icon className="w-4 h-4" style={{ color: '#10B981' }} />
                        </div>
                        <span className={`text-base ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          {feature.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="relative py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Important Information
              </h2>
              <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Please review these key points before purchasing
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {keyPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="backdrop-blur-xl border-2 rounded-2xl p-6"
                    style={{
                      background: isDark
                        ? 'rgba(15, 23, 42, 0.6)'
                        : 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'rgba(239, 68, 68, 0.3)',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                      style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#EF4444' }} />
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {point.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {point.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl border-2 rounded-2xl p-8 text-center"
              style={{
                background: isDark
                  ? 'rgba(16, 185, 129, 0.1)'
                  : 'rgba(16, 185, 129, 0.05)',
                borderColor: '#10B981',
              }}
            >
              <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Ready to Optimize Your Taxes?
              </h2>
              <p className={`text-lg mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Add the Tax Reporting Pack to your plan and unlock powerful tax optimization features
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ThemedButton size="lg">
                  View Pricing Plans
                  <ChevronRight className="w-5 h-5 ml-2" />
                </ThemedButton>
                <ThemedButton size="lg" variant="outline">
                  Learn More
                </ThemedButton>
              </div>
              <p className={`text-sm mt-4 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Questions? Contact us at{' '}
                <a 
                  href="mailto:support@verafyai.com.au"
                  className="font-semibold hover:underline transition-colors"
                  style={{ color: 'var(--theme-primary)' }}
                >
                  support@verafyai.com.au
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}