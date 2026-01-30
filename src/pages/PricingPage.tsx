import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Check, X, Award, Brain, Calculator, MessageSquare, Target, ChevronRight } from "lucide-react";
import { useState } from "react";
import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { PlanComparison } from '../components/PlanComparison';
import { StatsSection } from '../components/StatsSection';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';

// Competitor Feature Comparison Component
const CompetitorComparison = ({ isDark }: { isDark: boolean }) => {
  const features = [
    { feature: 'Performance Tracking', verafy: true, sharesight: true, navexa: true },
    { feature: 'Tax Reporting (Post-Trade CGT)', verafy: true, sharesight: true, navexa: true },
    { feature: 'Unrealized CGT Report', verafy: true, sharesight: 'Standard+', navexa: 'Standard+' },
    { feature: 'PRE-TRADE CGT Modeling', verafy: 'UNIQUE', sharesight: false, navexa: false, highlight: true },
    { feature: 'AI Behavioral Coaching', verafy: 'Patent-pending', sharesight: false, navexa: false, highlight: true },
    { feature: 'Parcel Selection Optimizer', verafy: 'AI-powered', sharesight: false, navexa: 'Manual only' },
    { feature: 'Tax Loss Harvesting', verafy: 'Proactive AI', sharesight: false, navexa: 'Detection only' },
    { feature: 'Chat Interface', verafy: 'Vera AI (Pro)', sharesight: false, navexa: false },
    { feature: 'Scenario Modeling', verafy: '20/month (Pro)', sharesight: false, navexa: false },
    { feature: 'VerafyAI Academy', verafy: 'All tiers', sharesight: false, navexa: false },
    { feature: 'Community Forum', verafy: 'Included', sharesight: false, navexa: false },
    { feature: 'Referral Program', verafy: true, sharesight: false, navexa: false },
  ];

  const pricing = [
    { tier: 'Starter (Annual)', verafy: '$50 AUD', sharesight: '$180 AUD', navexa: '$99 AUD' },
    { tier: 'Pro/Premium (Annual)', verafy: '$200 AUD', sharesight: '$468 AUD', navexa: '$300 AUD' },
  ];

  const scrollToFAQ = () => {
    const faqSection = document.querySelector('[data-section="faq"]');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`py-20 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{
              borderColor: 'var(--theme-primary)',
              background: 'var(--theme-primary-alpha)',
            }}
          >
            <Award className="h-4 w-4" style={{ color: 'var(--theme-primary)' }} />
            <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
              See How We Compare
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Feature Comparison
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Compare VerafyAI with leading portfolio tracking platforms
          </p>
        </motion.div>

        {/* Feature Comparison Table */}
        <motion.div
          className={`rounded-2xl overflow-hidden border mb-8 ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className={isDark ? 'bg-slate-800' : 'bg-slate-100'}>
                  <th className={`p-4 text-left font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Feature
                  </th>
                  <th className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-lg" style={{ color: 'var(--theme-primary)' }}>VerafyAI</span>
                      <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>AI-Powered</span>
                    </div>
                  </th>
                  <th className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">Sharesight</span>
                      <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Market Leader</span>
                    </div>
                  </th>
                  <th className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">Navexa</span>
                      <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>AU Challenger</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-200'} ${
                      row.highlight ? (isDark ? 'bg-cyan-500/10' : 'bg-cyan-50') : ''
                    }`}
                  >
                    <td className={`p-4 ${isDark ? 'text-white' : 'text-slate-800'} ${row.highlight ? 'font-semibold' : ''}`}>
                      {row.feature}
                      {row.highlight && (
                        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-cyan-500/20 text-cyan-400">
                          Unique
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center" style={{ background: isDark ? 'rgba(6, 182, 212, 0.05)' : 'rgba(6, 182, 212, 0.03)' }}>
                      {row.verafy === true ? (
                        <Check className="w-6 h-6 mx-auto text-green-500" />
                      ) : row.verafy === false ? (
                        <X className="w-5 h-5 mx-auto text-red-400/50" />
                      ) : (
                        <span className="text-sm font-semibold" style={{ color: 'var(--theme-primary)' }}>{row.verafy}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.sharesight === true ? (
                        <Check className="w-5 h-5 mx-auto text-green-500" />
                      ) : row.sharesight === false ? (
                        <X className="w-5 h-5 mx-auto text-red-400/50" />
                      ) : (
                        <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.sharesight}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.navexa === true ? (
                        <Check className="w-5 h-5 mx-auto text-green-500" />
                      ) : row.navexa === false ? (
                        <X className="w-5 h-5 mx-auto text-red-400/50" />
                      ) : (
                        <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.navexa}</span>
                      )}
                    </td>
                  </tr>
                ))}
                {/* Pricing Rows */}
                <tr className={`border-t-2 ${isDark ? 'border-cyan-500/30 bg-slate-800/50' : 'border-cyan-500/30 bg-slate-50'}`}>
                  <td colSpan={4} className={`p-3 text-center font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Pricing Comparison (Founding Member Rates)
                  </td>
                </tr>
                {pricing.map((row, i) => (
                  <tr key={`pricing-${i}`} className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <td className={`p-4 font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>{row.tier}</td>
                    <td className="p-4 text-center" style={{ background: isDark ? 'rgba(6, 182, 212, 0.05)' : 'rgba(6, 182, 212, 0.03)' }}>
                      <span className="font-bold text-lg" style={{ color: 'var(--theme-primary)' }}>{row.verafy}</span>
                    </td>
                    <td className={`p-4 text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.sharesight}</td>
                    <td className={`p-4 text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.navexa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            {
              icon: Brain,
              title: 'Pre-Trade CGT Modeling',
              desc: 'See tax impact BEFORE you execute',
              color: 'cyan'
            },
            {
              icon: MessageSquare,
              title: 'AI Behavioral Coaching',
              desc: 'Patent-pending emotional intervention',
              color: 'purple'
            },
            {
              icon: Calculator,
              title: '50-57% Cheaper',
              desc: '$200 vs $468 Sharesight Premium',
              color: 'green'
            },
            {
              icon: Target,
              title: 'Complete Ecosystem',
              desc: 'Portfolio + Trading + Advisor in Y1',
              color: 'orange'
            },
          ].map((advantage, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl border ${
                isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                advantage.color === 'cyan' ? 'bg-cyan-500/20' :
                advantage.color === 'purple' ? 'bg-purple-500/20' :
                advantage.color === 'green' ? 'bg-green-500/20' : 'bg-orange-500/20'
              }`}>
                <advantage.icon className={`w-6 h-6 ${
                  advantage.color === 'cyan' ? 'text-cyan-400' :
                  advantage.color === 'purple' ? 'text-purple-400' :
                  advantage.color === 'green' ? 'text-green-400' : 'text-orange-400'
                }`} />
              </div>
              <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {advantage.title}
              </h3>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {advantage.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* FAQ Links */}
        <motion.div
          className={`p-6 rounded-xl border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className={`font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Have questions about how we compare?
              </h3>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Check out our FAQ section for detailed comparisons with Sharesight and more.
              </p>
            </div>
            <button
              onClick={scrollToFAQ}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(to right, var(--theme-primary), var(--theme-secondary))',
                color: 'white'
              }}
            >
              View FAQs
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface PricingPageProps {
  isDark: boolean;
}

/**
 * Pricing Page Content
 * 
 * Independent page component that renders within Layout.
 * Contains all pricing-specific content without Navigation/Footer.
 */
export function PricingPage({ isDark }: PricingPageProps) {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);
  
  return (
    <>
      {/* Background Effects */}
      <FloatingParticles isDark={isDark} />
      <InteractiveCursor isDark={isDark} />
      
      {/* Hero Section with Holographic Visual */}
      <div className="relative overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20">
          <div 
            className="absolute inset-0 rounded-full blur-[120px]"
            style={{
              background: `radial-gradient(circle, var(--theme-primary), transparent 70%)`
            }}
          />
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{
              borderColor: 'var(--theme-primary)',
              background: 'var(--theme-primary-alpha)',
              boxShadow: '0 4px 20px var(--theme-glow)'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Zap className="h-4 w-4" style={{ color: 'var(--theme-primary)' }} />
            <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Portfolio Intelligence Platform
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Simple, Transparent
            <br />
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Pricing
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className={`text-xl max-w-2xl mx-auto mb-12 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Get institutional-grade portfolio insights powered by AI. Choose the plan that fits your needs.
          </motion.p>

          {/* Feature Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { icon: Shield, text: "ASIC Compliant" },
              { icon: TrendingUp, text: "Real-time Analytics" },
              { icon: Zap, text: "AI-Powered Insights" }
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700' 
                    : 'bg-white border-slate-200'
                }`}
              >
                <feature.icon className="h-4 w-4" style={{ color: 'var(--theme-primary)' }} />
                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust/Feature Badges - Above Pricing Cards */}
        <motion.div 
          className="relative max-w-5xl mx-auto px-6 py-8 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Shield, 
                title: "ASIC Compliant",
                description: "Fully regulated and compliant with Australian financial standards"
              },
              { 
                icon: TrendingUp, 
                title: "Real-time Analytics",
                description: "Live market data and portfolio performance tracking"
              },
              { 
                icon: Zap, 
                title: "AI-Powered Insights",
                description: "Institutional-grade intelligence powered by advanced AI"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredBox(index)}
                onMouseLeave={() => setHoveredBox(null)}
                className={`relative p-6 rounded-xl cursor-pointer transition-colors duration-300 ${
                  isDark 
                    ? 'bg-slate-800/50' 
                    : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: hoveredBox === index ? -10 : 0,
                  scale: hoveredBox === index ? 1.05 : 1,
                  boxShadow: hoveredBox === index
                    ? isDark 
                      ? '0 20px 40px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.3)' 
                      : '0 20px 40px rgba(34, 211, 238, 0.2), 0 0 30px rgba(34, 211, 238, 0.15)'
                    : isDark 
                      ? '0 4px 20px rgba(0,0,0,0.3)' 
                      : '0 4px 20px rgba(0,0,0,0.05)'
                }}
                transition={{ 
                  delay: hoveredBox === index ? 0 : 0.7 + (index * 0.1),
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                style={{
                  borderWidth: '1.6px',
                  borderStyle: 'solid',
                  borderColor: hoveredBox === index 
                    ? '#22D3EE' 
                    : isDark 
                      ? 'rgba(148, 163, 184, 0.5)' 
                      : 'rgba(226, 232, 240, 1)'
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="mb-4 p-4 rounded-full"
                    animate={{
                      rotate: hoveredBox === index ? 360 : 0
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                    style={{
                      background: 'var(--theme-primary-alpha)',
                      boxShadow: hoveredBox === index 
                        ? '0 8px 28px var(--theme-glow-strong)' 
                        : '0 4px 14px var(--theme-glow)'
                    }}
                  >
                    <feature.icon 
                      className="h-8 w-8" 
                      style={{ color: 'var(--theme-primary)' }} 
                    />
                  </motion.div>
                  <h3 className={`text-lg font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="py-16">
          <PlanComparison isDark={isDark} />
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection isDark={isDark} />

      {/* Testimonials Section */}
      <Testimonials isDark={isDark} />

      {/* Competitor Feature Comparison */}
      <CompetitorComparison isDark={isDark} />

      {/* FAQ Section */}
      <div data-section="faq">
        <FAQSection isDark={isDark} />
      </div>
    </>
  );
}