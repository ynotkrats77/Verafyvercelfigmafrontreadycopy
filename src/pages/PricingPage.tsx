import { motion } from "motion/react";
import { Zap, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";
import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { PlanComparison } from '../components/PlanComparison';
import { StatsSection } from '../components/StatsSection';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';

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

      {/* FAQ Section */}
      <FAQSection isDark={isDark} />
    </>
  );
}