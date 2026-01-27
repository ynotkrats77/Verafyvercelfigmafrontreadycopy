import { Check, Sparkles, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ThemedButton } from './ui/themed-button';
import { useState, memo } from "react";
import { PLANS, getAllPlans } from '../config/plans';

interface Feature {
  name: string;
  starter: boolean;
  standard: boolean;
  pro: boolean;
  highlight?: boolean;
}

interface Plan {
  name: string;
  tagline: string;
  price: string;
  originalPrice: string;
  annualPrice: string;
  savings: string;
  color: string;
  glowColor: string;
  features: string[];
  includesPrevious?: boolean;
  previousTier?: string;
  popular?: boolean;
}

interface PlanComparisonProps {
  isDark: boolean;
}

const PlanComparisonComponent = ({ isDark }: PlanComparisonProps) => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  
  // Get plans from centralized config
  const configPlans = getAllPlans().filter(p => p.id !== 'tax-pack'); // Exclude tax pack for main comparison
  
  // Map to legacy format for existing UI
  const plans: Plan[] = configPlans.map(plan => ({
    name: plan.name,
    tagline: plan.description,
    price: `$${plan.price.monthly}`,
    originalPrice: `$${plan.price.monthly * 2}`, // Pre-founding member price (50% off)
    annualPrice: `$${plan.price.annual} per year`,
    savings: `save $${(plan.price.monthly * 2 * 11) - plan.price.annual}`, // Regular annual (11 months) - founding annual
    color: plan.gradient,
    glowColor: plan.color,
    features: plan.features,
    includesPrevious: plan.id !== 'starter',
    previousTier: plan.id === 'standard' ? 'Starter' : plan.id === 'pro' ? 'Standard' : undefined,
    popular: plan.id === 'pro', // Best Value for Pro
  }));

  const allFeatures: Feature[] = [
    // Starter Core Features
    { name: "Portfolio tracking (20 holdings)", starter: true, standard: true, pro: true },
    { name: "Action Center (5 cards per day)", starter: true, standard: true, pro: true },
    { name: "Basic Vera voice", starter: true, standard: true, pro: true },
    { name: "Performance metrics", starter: true, standard: true, pro: true },
    { name: "Risk scoring", starter: true, standard: true, pro: true },
    { name: "Concentration alerts", starter: true, standard: true, pro: true },
    { name: "Email alerts", starter: true, standard: true, pro: true },
    
    // Standard Enhanced Tracking
    { name: "Unlimited holdings & portfolios", starter: false, standard: true, pro: true },
    { name: "Full Action Center (unlimited cards)", starter: false, standard: true, pro: true },
    { name: "Vera's complete personality", starter: false, standard: true, pro: true },
    
    // Standard Strategic Insights
    { name: "Winners/Losers analysis", starter: false, standard: true, pro: true },
    { name: "Behavioral pattern detection", starter: false, standard: true, pro: true },
    { name: "Sector allocation analysis", starter: false, standard: true, pro: true },
    
    // Standard Support
    { name: "Email & push notifications", starter: false, standard: true, pro: true },
    { name: "Priority email support", starter: false, standard: true, pro: true },
    
    // Tax Add-on for Starter/Standard
    { name: "Tax reporting (add-on available)*", starter: true, standard: true, pro: false },
    
    // Pro AI-Powered Features (highlighted)
    { name: "Portfolio Optimization Engine ⚡", starter: false, standard: false, pro: true, highlight: true },
    { name: "Chat with Vera (500 questions/month) ⚡", starter: false, standard: false, pro: true, highlight: true },
    { name: "Scenario Modeling (20 scenarios/month) ⚡", starter: false, standard: false, pro: true, highlight: true },
    
    // Pro Strategic Planning
    { name: "Peer comparison & benchmarking", starter: false, standard: false, pro: true },
    { name: "Strategic goal planning", starter: false, standard: false, pro: true },
    
    // Pro Tax Features (Included)
    { name: "Tax Reporting Pack (INCLUDED) ⭐", starter: false, standard: false, pro: true, highlight: true },
    { name: "Tax loss harvesting detection", starter: false, standard: false, pro: true },
    { name: "5 years tax history", starter: false, standard: false, pro: true },
    { name: "ATO-ready tax reports (PDF)", starter: false, standard: false, pro: true },
    { name: "Advanced tax optimization", starter: false, standard: false, pro: true },
    { name: "Capital gains calendar", starter: false, standard: false, pro: true },
    { name: "Franking credits tracking", starter: false, standard: false, pro: true },
    { name: "Wash sale warnings", starter: false, standard: false, pro: true },
    
    // Pro Support
    { name: "Priority phone & email support", starter: false, standard: false, pro: true }
  ];

  const getFeatureHighlight = (featureName: string) => {
    const feature = allFeatures.find(f => f.name === featureName);
    return feature?.highlight || false;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2 
          className={`text-3xl sm:text-4xl mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Choose Your <span style={{
            background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Plan</span>
        </motion.h2>
        <motion.p 
          className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Founding member pricing - Lock in 50% off forever
        </motion.p>
      </div>

      {/* Three Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-4">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="relative cursor-pointer"
          >
            <motion.div
              whileHover={{ 
                boxShadow: plan.popular 
                  ? "0 0 80px rgba(34, 211, 238, 0.6)" 
                  : "0 0 40px rgba(34, 211, 238, 0.4)"
              }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Card className={`relative backdrop-blur-md border h-full flex flex-col group ${
                isDark 
                  ? 'bg-slate-900/50 ' + (plan.popular 
                      ? 'border-cyan-500/70 shadow-2xl shadow-cyan-500/30' 
                      : 'border-cyan-500/20')
                  : 'bg-white ' + (plan.popular 
                      ? 'border-cyan-600 shadow-2xl shadow-cyan-600/20' 
                      : 'border-slate-300')
              } transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl ${
                isDark ? 'hover:shadow-cyan-500/40' : 'hover:shadow-cyan-400/30'
              }`}>
                
                {/* Best Value Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/50 rounded-t-xl" />
                )}
                
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 border-0 px-4 py-1 text-xs font-semibold whitespace-nowrap">
                      BEST VALUE
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <div className={`p-6 sm:p-8 text-center ${
                  isDark ? 'border-b border-slate-800' : 'border-b border-slate-200'
                } ${plan.popular ? 'pt-10' : 'pt-6 sm:pt-8'}`}>
                  <h3 
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    style={{
                      background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p className={`text-xs sm:text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{plan.tagline}</p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className={`line-through text-3xl font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{plan.originalPrice}</span>
                      <span className={`text-sm font-semibold uppercase tracking-wide ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>RRP</span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className={`text-5xl sm:text-6xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                      <span className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}> per month</span>
                    </div>
                    <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      or {plan.annualPrice} <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>({plan.savings})</span>
                    </p>
                  </div>

                  {/* Founding Member Badge */}
                  <div className="inline-block">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 border-0 shadow-lg">
                      FOUNDING MEMBER PRICE
                    </Badge>
                  </div>
                  <p className={`text-xs mt-2 font-medium ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>50% off RRP forever + bonus month on us</p>
                </div>

                {/* Features List */}
                <div className="p-4 sm:p-6 flex-1">
                  <div className="space-y-2">
                    {/* Show "Everything in X PLUS:*" for Standard and Pro */}
                    {plan.includesPrevious && plan.previousTier && (
                      <div 
                        className={`mb-3 pb-3 border-b-2 ${isDark ? 'border-cyan-500/30' : 'border-cyan-400/50'}`}
                        style={{
                          background: isDark 
                            ? 'linear-gradient(90deg, rgba(34, 211, 238, 0.1), transparent)'
                            : 'linear-gradient(90deg, rgba(34, 211, 238, 0.15), transparent)'
                        }}
                      >
                        <div className="py-1.5 px-2">
                          <span 
                            className="text-sm font-bold tracking-wide"
                            style={{
                              background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            Everything in {plan.previousTier} PLUS:*
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {plan.features.map((feature, idx) => {
                      const isTaxAddon = feature.includes('Tax Reporting Pack (add-on');
                      
                      return (
                        <motion.div 
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.02 }}
                          className={`flex items-start gap-2 group ${
                            isTaxAddon 
                              ? `mt-3 pt-3 ${isDark ? 'border-t border-orange-500/30' : 'border-t border-orange-300'}`
                              : ''
                          }`}
                        >
                          <div className={`mt-0.5 rounded-full p-0.5 ring-2 group-hover:scale-110 transition-all flex-shrink-0 ${
                            isTaxAddon
                              ? isDark
                                ? 'bg-orange-500/20 ring-orange-500/50 group-hover:bg-orange-500/30'
                                : 'bg-orange-100 ring-orange-500 group-hover:bg-orange-200'
                              : isDark 
                                ? 'bg-cyan-500/20 ring-cyan-500/50 group-hover:bg-cyan-500/30' 
                                : 'bg-cyan-100 ring-cyan-500 group-hover:bg-cyan-200'
                          }`}>
                            <Check className={`w-3.5 h-3.5 ${
                              isTaxAddon
                                ? isDark ? 'text-orange-400' : 'text-orange-600'
                                : isDark ? 'text-cyan-400' : 'text-cyan-600'
                            }`} />
                          </div>
                          <span className={`text-xs sm:text-sm flex items-center gap-2 flex-1 leading-snug ${
                            isTaxAddon
                              ? isDark ? 'text-orange-300' : 'text-orange-700'
                              : isDark ? 'text-slate-200' : 'text-slate-700'
                          }`}>
                            {feature}
                            {getFeatureHighlight(feature) && (
                              <Sparkles className={`w-3 h-3 flex-shrink-0 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                            )}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA Section */}
                <div className={`p-4 sm:p-6 pt-3 ${isDark ? 'border-t border-slate-800' : 'border-t border-slate-200'}`}>
                  <ThemedButton
                    onClick={() => console.log(`Selected ${plan.name}`)}
                    variant={index === 1 ? 'primary' : 'outline'}
                    size="lg"
                    fullWidth
                  >
                    {configPlans[index].cta}
                  </ThemedButton>
                  <p className={`text-xs text-center mt-2 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                    *Credit card required. Auto-billed after 14 days.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div 
        className="text-center mt-12 text-xs sm:text-sm text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>Start your free trial today. Cancel anytime or continue at founding member rates.</p>
      </motion.div>

      {/* Feature Comparison Table */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className={`text-2xl sm:text-3xl text-center mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Feature <span style={{
            background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Comparison</span>
        </h3>

        {/* Desktop Table */}
        <div className={`hidden md:block backdrop-blur-md border-2 rounded-2xl overflow-hidden ${
          isDark 
            ? 'bg-slate-900/30 border-cyan-500/20' 
            : 'bg-white border-slate-300'
        }`}>
          <table className="w-full">
            <thead>
              <tr className={isDark ? 'border-b border-slate-800' : 'border-b border-slate-200'}>
                <th className={`text-left p-6 font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Feature</th>
                <th className={`text-center p-6 font-semibold ${isDark ? 'text-slate-300 bg-slate-900/30' : 'text-slate-700 bg-slate-50'}`}>Starter</th>
                <th className={`text-center p-6 font-semibold ${isDark ? 'text-slate-300 bg-blue-500/5' : 'text-slate-700 bg-blue-50'}`}>Standard</th>
                <th className={`text-center p-6 font-semibold border-l border-r ${isDark ? 'text-slate-300 bg-cyan-500/10 border-cyan-500/30' : 'text-slate-700 bg-cyan-50 border-cyan-400'}`}>Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`transition-colors ${isDark ? 'border-b border-slate-800 hover:bg-slate-800/30' : 'border-b border-slate-200 hover:bg-slate-50'}`}>
                <td className={`p-6 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Holdings</td>
                <td className={`p-6 text-center ${isDark ? 'text-slate-300 bg-slate-900/30' : 'text-slate-700 bg-slate-50'}`}>20</td>
                <td className={`p-6 text-center ${isDark ? 'text-slate-300 bg-blue-500/5' : 'text-slate-700 bg-blue-50'}`}>Unlimited</td>
                <td className={`p-6 text-center border-l border-r ${isDark ? 'text-slate-300 bg-cyan-500/10 border-cyan-500/30' : 'text-slate-700 bg-cyan-50 border-cyan-400'}`}>Unlimited</td>
              </tr>
              
              <tr className={`transition-colors ${isDark ? 'border-b border-slate-800 hover:bg-slate-800/30' : 'border-b border-slate-200 hover:bg-slate-50'}`}>
                <td className={`p-6 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Portfolios</td>
                <td className={`p-6 text-center ${isDark ? 'text-slate-300 bg-slate-900/30' : 'text-slate-700 bg-slate-50'}`}>1</td>
                <td className={`p-6 text-center ${isDark ? 'text-slate-300 bg-blue-500/5' : 'text-slate-700 bg-blue-50'}`}>Unlimited</td>
                <td className={`p-6 text-center border-l border-r ${isDark ? 'text-slate-300 bg-cyan-500/10 border-cyan-500/30' : 'text-slate-700 bg-cyan-50 border-cyan-400'}`}>Unlimited</td>
              </tr>
              
              <tr className={`transition-colors ${isDark ? 'border-b border-slate-800 hover:bg-slate-800/30' : 'border-b border-slate-200 hover:bg-slate-50'}`}>
                <td className={`p-6 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Action Center</td>
                <td className={`p-6 text-center ${isDark ? 'text-slate-300 bg-slate-900/30' : 'text-slate-700 bg-slate-50'}`}>5 per day</td>
                <td className={`p-6 text-center ${isDark ? 'text-slate-300 bg-blue-500/5' : 'text-slate-700 bg-blue-50'}`}>Unlimited</td>
                <td className={`p-6 text-center border-l border-r ${isDark ? 'text-slate-300 bg-cyan-500/10 border-cyan-500/30' : 'text-slate-700 bg-cyan-50 border-cyan-400'}`}>Unlimited</td>
              </tr>
              
              <tr className={`transition-colors ${isDark ? 'border-b border-slate-800 hover:bg-slate-800/30' : 'border-b border-slate-200 hover:bg-slate-50'}`}>
                <td className={`p-6 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Vera Personality</td>
                <td className={`p-6 text-center ${isDark ? 'text-slate-300 bg-slate-900/30' : 'text-slate-700 bg-slate-50'}`}>Basic</td>
                <td className={`p-6 text-center ${isDark ? 'text-slate-300 bg-blue-500/5' : 'text-slate-700 bg-blue-50'}`}>Full</td>
                <td className={`p-6 text-center border-l border-r ${isDark ? 'text-slate-300 bg-cyan-500/10 border-cyan-500/30' : 'text-slate-700 bg-cyan-50 border-cyan-400'}`}>Full</td>
              </tr>
              
              <tr className={`transition-colors ${isDark ? 'border-b border-slate-800 hover:bg-slate-800/30' : 'border-b border-slate-200 hover:bg-slate-50'}`}>
                <td className={`p-6 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Tax Reporting Pack</td>
                <td className={`p-6 text-center ${isDark ? 'text-slate-300 bg-slate-900/30' : 'text-slate-700 bg-slate-50'}`}>$30/year</td>
                <td className={`p-6 text-center ${isDark ? 'text-slate-300 bg-blue-500/5' : 'text-slate-700 bg-blue-50'}`}>$20/year</td>
                <td className={`p-6 text-center border-l border-r ${isDark ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' : 'text-cyan-600 bg-cyan-50 border-cyan-400'}`}>INCLUDED ⭐</td>
              </tr>
              
              <tr className={`transition-colors ${isDark ? 'border-b border-slate-800 hover:bg-slate-800/30' : 'border-b border-slate-200 hover:bg-slate-50'}`}>
                <td className={`p-6 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Optimization</td>
                <td className={`p-6 text-center ${isDark ? 'bg-slate-900/30' : 'bg-slate-50'}`}>
                  <X className={`w-5 h-5 mx-auto ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                </td>
                <td className={`p-6 text-center ${isDark ? 'bg-blue-500/5' : 'bg-blue-50'}`}>
                  <X className={`w-5 h-5 mx-auto ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                </td>
                <td className={`p-6 text-center border-l border-r ${isDark ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-cyan-50 border-cyan-400'}`}>
                  <Check className={`w-5 h-5 mx-auto ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                </td>
              </tr>
              
              <tr className={`transition-colors ${isDark ? 'border-b border-slate-800 hover:bg-slate-800/30' : 'border-b border-slate-200 hover:bg-slate-50'}`}>
                <td className={`p-6 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Chat with Vera</td>
                <td className={`p-6 text-center ${isDark ? 'bg-slate-900/30' : 'bg-slate-50'}`}>
                  <X className={`w-5 h-5 mx-auto ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                </td>
                <td className={`p-6 text-center ${isDark ? 'bg-blue-500/5' : 'bg-blue-50'}`}>
                  <X className={`w-5 h-5 mx-auto ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                </td>
                <td className={`p-6 text-center border-l border-r ${isDark ? 'text-slate-300 bg-cyan-500/10 border-cyan-500/30' : 'text-slate-700 bg-cyan-50 border-cyan-400'}`}>500 per month</td>
              </tr>
              
              <tr className={`transition-colors ${isDark ? 'border-b border-slate-800 hover:bg-slate-800/30' : 'border-b border-slate-200 hover:bg-slate-50'}`}>
                <td className={`p-6 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Scenarios</td>
                <td className={`p-6 text-center ${isDark ? 'bg-slate-900/30' : 'bg-slate-50'}`}>
                  <X className={`w-5 h-5 mx-auto ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                </td>
                <td className={`p-6 text-center ${isDark ? 'bg-blue-500/5' : 'bg-blue-50'}`}>
                  <X className={`w-5 h-5 mx-auto ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                </td>
                <td className={`p-6 text-center border-l border-r ${isDark ? 'text-slate-300 bg-cyan-500/10 border-cyan-500/30' : 'text-slate-700 bg-cyan-50 border-cyan-400'}`}>20 per month</td>
              </tr>
              
              <tr className={`transition-colors ${isDark ? 'border-b border-slate-800 hover:bg-slate-800/30' : 'border-b border-slate-200 hover:bg-slate-50'}`}>
                <td className={`p-6 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>ATO Reports</td>
                <td className={`p-6 text-center ${isDark ? 'bg-slate-900/30' : 'bg-slate-50'}`}>
                  <X className={`w-5 h-5 mx-auto ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                </td>
                <td className={`p-6 text-center ${isDark ? 'bg-blue-500/5' : 'bg-blue-50'}`}>
                  <X className={`w-5 h-5 mx-auto ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                </td>
                <td className={`p-6 text-center border-l border-r ${isDark ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-cyan-50 border-cyan-400'}`}>
                  <Check className={`w-5 h-5 mx-auto ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                </td>
              </tr>
              
              <tr className={isDark ? 'border-b border-slate-800 bg-slate-800/50' : 'border-b border-slate-200 bg-slate-100'}>
                <td className={`p-6 font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Price (founding)</td>
                <td className={`p-6 text-center font-bold ${isDark ? 'text-cyan-400 bg-slate-900/30' : 'text-cyan-600 bg-slate-50'}`}>$55 per year</td>
                <td className={`p-6 text-center font-bold ${isDark ? 'text-cyan-400 bg-blue-500/5' : 'text-cyan-600 bg-blue-50'}`}>$110 per year</td>
                <td className={`p-6 text-center font-bold border-l border-r ${isDark ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' : 'text-cyan-600 bg-cyan-50 border-cyan-400'}`}>$220 per year</td>
              </tr>
              
              <tr>
                <td className={`p-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Price (regular)</td>
                <td className={`p-6 text-center ${isDark ? 'text-slate-500 bg-slate-900/30' : 'text-slate-500 bg-slate-50'}`}>$110 per year</td>
                <td className={`p-6 text-center ${isDark ? 'text-slate-500 bg-blue-500/5' : 'text-slate-500 bg-blue-50'}`}>$220 per year</td>
                <td className={`p-6 text-center border-l border-r ${isDark ? 'text-slate-500 bg-cyan-500/10 border-cyan-500/30' : 'text-slate-500 bg-cyan-50 border-cyan-400'}`}>$440 per year</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {plans.map((plan, idx) => (
            <div key={plan.name} className={`backdrop-blur-md border-2 rounded-2xl overflow-hidden ${
              isDark 
                ? 'bg-slate-900/30 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <div className={`p-4 text-center font-semibold ${
                isDark 
                  ? 'border-b border-slate-800 ' + (plan.popular ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-900/30 text-slate-300')
                  : 'border-b border-slate-200 ' + (plan.popular ? 'bg-cyan-50 text-cyan-600' : 'bg-slate-50 text-slate-700')
              }`}>
                {plan.name}
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Holdings</span>
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{idx === 0 ? '20' : 'Unlimited'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Portfolios</span>
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{idx === 0 ? '1' : 'Unlimited'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Action Center</span>
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{idx === 0 ? '5 per day' : 'Unlimited'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Vera Personality</span>
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{idx === 0 ? 'Basic' : 'Full'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Tax Reporting Pack</span>
                  {idx === 0 ? <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>$30/year</span> : idx === 1 ? <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>$20/year</span> : <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>INCLUDED ⭐</span>}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Optimization</span>
                  {idx === 2 ? <Check className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} /> : <X className={`w-5 h-5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Chat with Vera</span>
                  {idx === 2 ? <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>500 per mo</span> : <X className={`w-5 h-5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Scenarios</span>
                  {idx === 2 ? <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>20 per mo</span> : <X className={`w-5 h-5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>ATO Reports</span>
                  {idx === 2 ? <Check className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} /> : <X className={`w-5 h-5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />}
                </div>
                <div className={`pt-3 ${isDark ? 'border-t border-slate-800' : 'border-t border-slate-200'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Price (founding)</span>
                    <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{idx === 0 ? '55' : idx === 1 ? '110' : '220'} per year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-sm">Price (regular)</span>
                    <span className="text-slate-500">{idx === 0 ? '110' : idx === 1 ? '220' : '440'} per year</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tax Reports Note */}
        <div className={`mt-6 p-4 backdrop-blur-md border-2 rounded-xl ${
          isDark 
            ? 'bg-slate-900/30 border-cyan-500/20' 
            : 'bg-cyan-50/50 border-cyan-200'
        }`}>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
            <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Tax Reporting:</span> All users can access up to 5 years of tax history if they upload data and pay the annual fee. Starter: Tax Reporting Pack is $30/year. Standard: Tax Reporting Pack is $20/year. Pro: Includes current financial year tax reporting at sign-up. Additional previous years can be purchased for $20 per financial year (maximum 5 previous years total).
          </p>
        </div>

        {/* Fair Use Policy Note */}
        <div className={`mt-4 p-4 backdrop-blur-md border-2 rounded-xl ${
          isDark 
            ? 'bg-slate-900/30 border-orange-500/20' 
            : 'bg-orange-50/50 border-orange-200'
        }`}>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
            <span className={`font-semibold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>&#42; Fair Use Policy:</span> All features are subject to reasonable use limits to ensure optimal performance for all users. &quot;Unlimited&quot; features mean no hard caps, but excessive automated usage may be reviewed. Standard and Pro tiers include all features from previous tiers plus the additional features listed.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export const PlanComparison = memo(PlanComparisonComponent);