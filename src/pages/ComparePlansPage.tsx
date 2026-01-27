import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';
import { ThemedButton } from '../components/ui/themed-button';
import { PLANS, PLAN_COMPARISON, getAllPlans } from '../config/plans';

interface ComparePlansPageProps {
  isDark: boolean;
}

export function ComparePlansPage({ isDark }: ComparePlansPageProps) {
  const plans = getAllPlans();

  return (
    <div className="min-h-screen py-16 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: isDark ? 'rgba(34, 211, 238, 0.1)' : 'rgba(34, 211, 238, 0.1)',
            border: '1px solid rgba(34, 211, 238, 0.3)',
          }}
        >
          <Sparkles className="w-4 h-4 text-cyan-500" />
          <span className="text-sm font-semibold text-cyan-500">Compare All Plans</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
        >
          Choose Your Perfect Plan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
        >
          Compare features across all plans and find the one that fits your investing goals
        </motion.p>
      </div>

      {/* Plan Cards Overview */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`relative p-6 rounded-2xl border-2 ${
                plan.recommended
                  ? 'border-cyan-500 shadow-lg shadow-cyan-500/20'
                  : isDark
                  ? 'border-slate-700'
                  : 'border-slate-200'
              }`}
              style={{
                background: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.9)',
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap"
                  style={{ background: plan.gradient }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-4">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: isDark ? '#ffffff' : '#0f172a' }}
                  >
                    ${plan.price.monthly}
                  </span>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    /mo
                  </span>
                </div>
                {plan.savings && (
                  <p className="text-xs text-green-500 mt-1">{plan.savings}</p>
                )}
              </div>

              <ThemedButton
                variant="primary"
                size="sm"
                fullWidth
                style={{ background: plan.gradient }}
              >
                {plan.cta}
              </ThemedButton>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Comparison Table */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`rounded-2xl border overflow-hidden ${
            isDark ? 'border-slate-700 bg-slate-800/50' : 'border-slate-200 bg-white'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header */}
              <thead>
                <tr className={isDark ? 'bg-slate-900/50' : 'bg-slate-50'}>
                  <th
                    className={`sticky left-0 z-10 px-6 py-4 text-left text-sm font-semibold ${
                      isDark ? 'bg-slate-900/50 text-slate-300' : 'bg-slate-50 text-slate-700'
                    }`}
                  >
                    Features
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div style={{ color: PLANS.starter.color }} className="font-bold">
                      Starter
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div style={{ color: PLANS.standard.color }} className="font-bold">
                      Standard
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div style={{ color: PLANS.pro.color }} className="font-bold">
                      AI Pro
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div style={{ color: PLANS['tax-pack'].color }} className="font-bold">
                      Tax Pack
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {PLAN_COMPARISON.map((section, sectionIndex) => (
                  <>
                    {/* Category Header */}
                    <tr key={`category-${sectionIndex}`}>
                      <td
                        colSpan={5}
                        className={`sticky left-0 px-6 py-3 text-sm font-bold ${
                          isDark
                            ? 'bg-slate-800 text-cyan-400'
                            : 'bg-slate-100 text-cyan-600'
                        }`}
                      >
                        {section.category}
                      </td>
                    </tr>

                    {/* Features in Category */}
                    {section.features.map((feature, featureIndex) => (
                      <tr
                        key={`feature-${sectionIndex}-${featureIndex}`}
                        className={`border-t ${
                          isDark ? 'border-slate-700' : 'border-slate-200'
                        }`}
                      >
                        <td
                          className={`sticky left-0 px-6 py-4 text-sm ${
                            isDark
                              ? 'bg-slate-800/50 text-slate-300'
                              : 'bg-white text-slate-700'
                          }`}
                        >
                          {feature.name}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {renderFeatureCell(feature.starter, isDark)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {renderFeatureCell(feature.standard, isDark)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {renderFeatureCell(feature.pro, isDark)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {renderFeatureCell(feature.taxPack, isDark)}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`p-8 rounded-2xl border ${
            isDark ? 'border-slate-700 bg-slate-800/50' : 'border-slate-200 bg-white'
          }`}
        >
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Not sure which plan is right for you?
          </h2>
          <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Start with our free Starter plan and upgrade anytime. All paid plans include a 14-day
            free trial and 30-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ThemedButton variant="primary" size="lg">
              Start Free Trial*
            </ThemedButton>
            <ThemedButton variant="outline" size="lg">
              Contact Sales
            </ThemedButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Helper function to render feature cells
function renderFeatureCell(value: boolean | string, isDark: boolean) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-5 h-5 text-green-500 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-slate-400 mx-auto" />
    );
  }

  if (value === '-') {
    return <span className="text-slate-400">-</span>;
  }

  return (
    <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
      {value}
    </span>
  );
}