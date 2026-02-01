import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Rocket,
  Shield,
  Globe,
  Zap,
  Check,
  X,
  LineChart,
  Award,
  Brain,
  Clock,
  FileText,
  Briefcase,
  MessageSquare,
  Calendar,
  Sparkles,
  CheckCircle2,
  Mail,
  Phone,
  BarChart3,
  AlertTriangle,
} from 'lucide-react';
import { GlowCard } from './GlowCard';

interface InvestorPitchDeckProps {
  isDark: boolean;
}

interface SlideProps {
  isDark: boolean;
}

// Floating particles component - cyan/blue only
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 bg-cyan-400/20 rounded-full"
        initial={{
          x: Math.random() * 1920,
          y: Math.random() * 1080,
        }}
        animate={{
          x: [null, Math.random() * 1920],
          y: [null, Math.random() * 1080],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 12 + Math.random() * 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

// Slide 1: Cover
const CoverSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    {/* Background Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-slate-950/0" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 text-center"
    >
      {/* Logo */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative">
          <div className="w-24 h-24 bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-400 rounded-lg transform rotate-45" />
          </div>
          <div className="absolute inset-0 bg-cyan-400/30 rounded-xl blur-xl animate-pulse" />
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        className="text-[140px] font-bold mb-6 leading-none"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span className="text-white">Verafy</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic mb-4 font-light"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        The Interface Between Finance and Humans
      </motion.p>

      <motion.p
        className="text-3xl text-slate-300 mb-16"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        AI-native wealth management for Australia
      </motion.p>

      {/* Founders */}
      <motion.div
        className="text-2xl text-slate-400 space-y-3 mb-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-white font-semibold">Amit Vohra | Co-founder & CEO</p>
        <p className="text-white font-semibold">Nupur Agarwal | Co-founder & CTO</p>
        <p className="text-slate-400">amit.vohra@axientai.au | verafyai.com.au</p>
      </motion.div>
    </motion.div>

    {/* Ask Badge */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, type: "spring" }}
      className="absolute top-10 right-16"
    >
      <div className="relative">
        <div className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-bold text-2xl shadow-2xl shadow-cyan-500/40">
          $1M Seed @ $10M Pre-Money
        </div>
        <div className="absolute inset-0 bg-cyan-400/40 rounded-xl blur-xl -z-10 animate-pulse" />
      </div>
    </motion.div>

    {/* Version Badge */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
      className="absolute bottom-10 right-16 text-slate-500 text-lg"
    >
      v4.1 | February 1, 2026
    </motion.div>
  </div>
);

// Slide 2: The Problem
const ProblemSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <h2 className="text-7xl font-bold text-white mb-4">The Problem</h2>
      <p className="text-4xl text-red-400 font-semibold">9 million Australians invest. Most are flying blind.</p>
    </motion.div>

    <div className="flex-1 grid grid-cols-3 gap-10 mb-10">
      {/* Retail Investors */}
      <GlowCard className="p-8" delay={0.2} animated>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <Users className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-cyan-400">Retail Investors</h3>
        </div>
        <p className="text-xl text-white">Get charts and data dumps, not guidance</p>
      </GlowCard>

      {/* Financial Advisers */}
      <GlowCard className="p-8" delay={0.3} animated>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            <Briefcase className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-orange-400">Financial Advisers</h3>
        </div>
        <p className="text-xl text-white">Trapped in $4,000/month legacy platforms that take 3 weeks to produce a single advice document</p>
      </GlowCard>

      {/* The Result */}
      <GlowCard className="p-8" delay={0.4} highlight animated>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
            <AlertTriangle className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-red-400">The Result</h3>
        </div>
        <p className="text-xl text-white">Australians lose an estimated <span className="text-red-400 font-bold text-3xl">$21B annually</span> to poor financial decisions</p>
      </GlowCard>
    </div>

    {/* The Gap */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="p-8 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
    >
      <p className="text-3xl text-white text-center">
        <span className="font-bold text-cyan-400">The gap:</span> Institutional-grade intelligence exists. Regular people can't access it. Advisers can't deliver it efficiently.
      </p>
    </motion.div>
  </div>
);

// Slide 3: The Solution
const SolutionSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      <h2 className="text-6xl font-bold text-white mb-4">The Solution</h2>
      <p className="text-2xl text-slate-300">VerafyAI delivers AI-powered portfolio intelligence through <span className="text-cyan-400 font-bold">Vera</span> - an assistant that speaks plain English, not finance jargon.</p>
    </motion.div>

    {/* Comparison Table */}
    <GlowCard className="flex-1 p-10" delay={0.2} animated>
      <div className="rounded-xl overflow-hidden border border-cyan-500/20">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
              <th className="p-5 text-left text-xl text-white font-semibold">Capability</th>
              <th className="p-5 text-center text-xl text-slate-300 font-semibold">Sharesight</th>
              <th className="p-5 text-center text-xl text-slate-300 font-semibold">Empower</th>
              <th className="p-5 text-center text-xl text-cyan-400 font-bold">VerafyAI</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['AI-Driven Analysis', false, false, 'Claude AI'],
              ['Australian Tax Rules', true, 'US-only', 'Native'],
              ['Plain English Insights', false, false, 'Vera'],
              ['Adviser Platform', false, false, 'One-meeting SOA'],
              ['Price Point', '$29/mo', 'Free (US)', '$10-20/mo'],
            ].map(([feature, s, e, v], i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="border-t border-slate-700"
              >
                <td className="p-5 text-xl text-white font-semibold">{feature}</td>
                <td className="p-5 text-center">
                  {typeof s === 'boolean' ? (
                    s ? <Check className="w-7 h-7 text-green-400 mx-auto" /> : <X className="w-7 h-7 text-red-400/50 mx-auto" />
                  ) : <span className="text-slate-400 text-lg">{s}</span>}
                </td>
                <td className="p-5 text-center">
                  {typeof e === 'boolean' ? (
                    e ? <Check className="w-7 h-7 text-green-400 mx-auto" /> : <X className="w-7 h-7 text-red-400/50 mx-auto" />
                  ) : <span className="text-slate-400 text-lg">{e}</span>}
                </td>
                <td className="p-5 text-center bg-cyan-500/10">
                  {typeof v === 'boolean' ? (
                    v ? <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto" /> : <X className="w-7 h-7 text-red-400 mx-auto" />
                  ) : <span className="text-cyan-400 font-bold text-xl">{v}</span>}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlowCard>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="mt-8 text-center"
    >
      <p className="text-3xl font-bold">
        <span className="text-slate-400">We're not building another dashboard.</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">We're building the interface between finance and humans.</span>
      </p>
    </motion.div>
  </div>
);

// Slide 4: Product Roadmap
const RoadmapSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 text-center"
    >
      <h2 className="text-6xl font-bold text-white mb-4">Product Roadmap</h2>
      <p className="text-3xl text-cyan-400">Three products, one platform, phased rollout</p>
    </motion.div>

    <div className="flex-1 grid grid-cols-3 gap-10 mb-10">
      {/* Phase 1 */}
      <GlowCard className="p-8 flex flex-col" delay={0.2} highlight animated>
        <div className="text-center mb-6">
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-4"
            animate={{ boxShadow: ['0 0 20px rgba(34, 211, 238, 0.3)', '0 0 40px rgba(34, 211, 238, 0.5)', '0 0 20px rgba(34, 211, 238, 0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-bold text-xl">PHASE 1</span>
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-2">Portfolio Intelligence</h3>
          <p className="text-lg text-slate-400">9M retail investors</p>
          <p className="text-cyan-400 font-semibold">Feb 2026 - Beta launching Feb 15</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/40">
            <Brain className="w-10 h-10 text-white" />
          </div>
        </div>
      </GlowCard>

      {/* Phase 2 */}
      <GlowCard className="p-8 flex flex-col" delay={0.3} animated>
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
            <Calendar className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-bold text-xl">PHASE 2</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Trading Integration</h3>
          <p className="text-lg text-slate-400">Active investors</p>
          <p className="text-blue-400 font-semibold">Q3 2026 - In development</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
            <LineChart className="w-10 h-10 text-white" />
          </div>
        </div>
      </GlowCard>

      {/* Phase 3 */}
      <GlowCard className="p-8 flex flex-col" delay={0.4} animated>
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
            <Rocket className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 font-bold text-xl">PHASE 3</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Adviser Platform</h3>
          <p className="text-lg text-slate-400">15,000 financial advisers</p>
          <p className="text-purple-400 font-semibold">Q4 2026 - Validated demand</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <FileText className="w-10 h-10 text-white" />
          </div>
        </div>
      </GlowCard>
    </div>

    {/* Why this sequence */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="p-6 rounded-xl bg-slate-800/50 border border-slate-700"
    >
      <h4 className="text-xl font-bold text-white mb-4">Why this sequence:</h4>
      <div className="grid grid-cols-3 gap-6 text-lg">
        <p className="text-slate-300"><span className="text-cyan-400">Phase 1</span> proves execution and builds Vera's intelligence</p>
        <p className="text-slate-300"><span className="text-blue-400">Phase 2</span> adds transaction revenue and deepens user engagement</p>
        <p className="text-slate-300"><span className="text-purple-400">Phase 3</span> captures 84% of projected 2029 revenue at premium pricing</p>
      </div>
    </motion.div>
  </div>
);

// Slide 5: The Adviser Opportunity
const AdviserSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h2 className="text-5xl font-bold text-white mb-3">The Adviser Opportunity</h2>
      <p className="text-2xl text-slate-300">Xplan (owned by IRESS) dominates Australian financial advice software. <span className="text-red-400 font-semibold">Advisers hate it.</span></p>
    </motion.div>

    <div className="flex-1 grid grid-cols-2 gap-10">
      {/* Pain vs Solution */}
      <GlowCard className="p-8" delay={0.2} animated>
        <h3 className="text-2xl font-bold text-white mb-6">Current Pain → VerafyAI Solution</h3>
        <div className="space-y-4">
          {[
            { pain: '$4,000/month platform costs', solution: '$1,490-$3,990/month, 60% savings' },
            { pain: '3-4 weeks to produce an SOA', solution: 'One-meeting SOA (~55 minutes)' },
            { pain: 'Complex interfaces, 20% feature usage', solution: 'AI-native, advisers use what they need' },
            { pain: 'Manual compliance documentation', solution: 'Automated, audit-ready records' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="flex-1 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-lg text-red-300">{item.pain}</p>
              </div>
              <ChevronRight className="w-6 h-6 text-cyan-400" />
              <div className="flex-1 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <p className="text-lg text-cyan-300">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </GlowCard>

      {/* One-Meeting SOA Process */}
      <GlowCard className="p-8" delay={0.3} highlight animated>
        <h3 className="text-2xl font-bold text-cyan-400 mb-6">The One-Meeting SOA Process</h3>
        <div className="space-y-3">
          {[
            { step: '1', text: 'Client completes digital intake', time: '5 min' },
            { step: '2', text: 'Vera guides fact-find conversation', time: '15 min' },
            { step: '3', text: 'Real-time risk profiling', time: '10 min' },
            { step: '4', text: 'Instant strategy modelling with scenarios', time: '15 min' },
            { step: '5', text: 'SOA auto-generated', time: '5 min' },
            { step: '6', text: 'Adviser reviews, client signs, leaves with SOA', time: '5 min' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                {item.step}
              </div>
              <p className="flex-1 text-lg text-white">{item.text}</p>
              <span className="text-cyan-400 font-semibold">{item.time}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 p-4 rounded-lg bg-purple-500/20 border border-purple-500/30"
        >
          <p className="text-xl text-white text-center font-semibold">
            Client walks out with their Statement of Advice. <span className="text-purple-400">Same day. No paraplanners required.</span>
          </p>
        </motion.div>
      </GlowCard>
    </div>
  </div>
);

// Slide 6: Market Opportunity
const MarketSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 text-center"
    >
      <h2 className="text-6xl font-bold text-white mb-3">Market Opportunity</h2>
      <p className="text-4xl font-bold text-cyan-400">Total Addressable Market: $756M annually</p>
    </motion.div>

    <div className="flex-1 grid grid-cols-2 gap-10 mb-8">
      {/* Retail Investors */}
      <GlowCard className="p-10" delay={0.2} animated>
        <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-4">
          <Users className="w-10 h-10" />
          Retail Investors (Phase 1-2)
        </h3>
        <div className="space-y-4 text-xl text-white mb-6">
          <p className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-cyan-400" /> 9M+ Australians hold shares or ETFs (ASX 2024)</p>
          <p className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-cyan-400" /> 2.5M new investors entered since COVID-19</p>
          <p className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-cyan-400" /> 61% of Millennials now invest</p>
        </div>
        <p className="text-2xl text-white">
          Serviceable market at $15/mo average: <span className="text-5xl font-bold text-cyan-400">$1.6B</span> potential
        </p>
      </GlowCard>

      {/* Financial Advisers */}
      <GlowCard className="p-10" delay={0.3} animated>
        <h3 className="text-3xl font-bold text-purple-400 mb-6 flex items-center gap-4">
          <Briefcase className="w-10 h-10" />
          Financial Advisers (Phase 3)
        </h3>
        <div className="space-y-4 text-xl text-white mb-6">
          <p className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-purple-400" /> 15,000 licensed advisers in Australia</p>
          <p className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-purple-400" /> $6B industry revenue</p>
          <p className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-purple-400" /> Average practice spends $2,000-$4,000/month on software</p>
        </div>
        <p className="text-2xl text-white">
          Serviceable market: <span className="text-5xl font-bold text-purple-400">$540M</span>/year
        </p>
      </GlowCard>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-center"
    >
      <p className="text-3xl font-bold">
        <span className="text-slate-400">Our strategy:</span>{' '}
        <span className="text-cyan-400">Start with millions of retail investors (volume),</span>{' '}
        <span className="text-purple-400">scale to thousands of advisers (value).</span>
      </p>
    </motion.div>
  </div>
);

// Slide 7: Traction & Milestones
const TractionSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />

    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl font-bold text-white mb-10"
    >
      Traction & Milestones
    </motion.h2>

    <div className="flex-1 grid grid-cols-3 gap-10">
      {/* What's Built */}
      <GlowCard className="p-8" delay={0.2} highlight animated>
        <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
          <CheckCircle2 className="w-8 h-8" />
          What's Built
        </h3>
        <ul className="space-y-4">
          {[
            'Full platform live (AWS, React, Claude AI integration)',
            '$150K pre-seed raised and deployed',
            'Beta waitlist at capacity',
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 text-xl text-white"
            >
              <Check className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </GlowCard>

      {/* What's Validated */}
      <GlowCard className="p-8" delay={0.3} animated>
        <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
          <Target className="w-8 h-8" />
          What's Validated
        </h3>
        <ul className="space-y-4">
          {[
            '180+ warm leads from adviser outreach',
            '42 advisers committed to future beta testing',
            'Strategic conversations active with dealer groups',
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-3 text-xl text-white"
            >
              <Check className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </GlowCard>

      {/* Upcoming Milestones */}
      <GlowCard className="p-8" delay={0.4} animated>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Calendar className="w-8 h-8 text-purple-400" />
          Upcoming Milestones
        </h3>
        <ul className="space-y-3 text-lg">
          {[
            { date: 'Feb 15, 2026', text: 'Beta launch' },
            { date: 'Apr 1, 2026', text: 'Public launch' },
            { date: 'Q3 2026', text: '5,000 users, $50K MRR' },
            { date: 'Q4 2026', text: 'Trading integration live' },
            { date: 'Q1 2027', text: 'Adviser platform pilot' },
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="flex items-center gap-3 text-white"
            >
              <span className="w-28 text-purple-400 font-semibold flex-shrink-0">{item.date}</span>
              {item.text}
            </motion.li>
          ))}
        </ul>
      </GlowCard>
    </div>
  </div>
);

// Slide 8: Business Model
const BusinessModelSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h2 className="text-6xl font-bold text-white mb-2">Business Model</h2>
      <p className="text-3xl text-cyan-400">Three revenue streams, scaling unit economics</p>
    </motion.div>

    <div className="grid grid-cols-3 gap-8 mb-8">
      {/* Phase 1: Consumer SaaS */}
      <GlowCard className="p-6" delay={0.2} highlight animated>
        <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
          <Brain className="w-7 h-7" />
          Phase 1: Consumer SaaS
        </h3>
        <div className="space-y-2 text-lg text-white mb-4">
          <p>Starter: <span className="font-bold">$5/month</span></p>
          <p>Standard: <span className="font-bold">$10/month</span></p>
          <p>Pro: <span className="font-bold">$20/month</span></p>
        </div>
        <div className="p-3 rounded-lg bg-orange-500/20 border border-orange-500/30">
          <p className="text-orange-400 font-semibold text-sm flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Founding members: 50% discount for life
          </p>
        </div>
      </GlowCard>

      {/* Phase 2: Trading */}
      <GlowCard className="p-6" delay={0.3} animated>
        <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-3">
          <LineChart className="w-7 h-7" />
          Phase 2: Trading Revenue
        </h3>
        <div className="space-y-2 text-lg text-white">
          <p>Revenue share on executed trades: <span className="font-bold">$2-5 per transaction</span></p>
        </div>
      </GlowCard>

      {/* Phase 3: Adviser */}
      <GlowCard className="p-6" delay={0.4} animated>
        <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-3">
          <FileText className="w-7 h-7" />
          Phase 3: Adviser Platform
        </h3>
        <div className="space-y-2 text-lg text-white">
          <p>Solo Adviser: <span className="font-bold">$1,490/month</span></p>
          <p>Small Practice: <span className="font-bold">$3,990/month + $99/SOA</span></p>
          <p>Enterprise: Custom pricing</p>
        </div>
      </GlowCard>
    </div>

    {/* Unit Economics */}
    <GlowCard className="p-6" delay={0.5} animated>
      <h3 className="text-2xl font-bold text-white mb-4">Unit Economics</h3>
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Customer Acquisition Cost', value: '$25', color: 'white' },
          { label: 'Lifetime Value', value: '$360+', color: 'white' },
          { label: 'LTV:CAC Ratio', value: '14:1', color: 'cyan', highlight: true },
          { label: 'Payback Period', value: '2 months', color: 'white' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className={`p-5 rounded-xl text-center ${item.highlight ? 'bg-cyan-500/20 border-2 border-cyan-500/50' : 'bg-slate-800/50 border border-slate-700'}`}
          >
            <div className="text-lg text-slate-400 mb-2">{item.label}</div>
            <div className={`text-4xl font-bold ${item.highlight ? 'text-cyan-400' : 'text-white'}`}>{item.value}</div>
          </motion.div>
        ))}
      </div>
    </GlowCard>
  </div>
);

// Slide 9: Financial Projections
const FinancialsSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h2 className="text-6xl font-bold text-white mb-2">Financial Projections</h2>
      <p className="text-2xl text-slate-400">Conservative growth path</p>
    </motion.div>

    {/* Projections Table */}
    <GlowCard className="p-8 mb-8" delay={0.2} animated>
      <div className="rounded-xl overflow-hidden border border-cyan-500/20">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
              <th className="p-4 text-left text-xl text-white font-semibold">Year</th>
              <th className="p-4 text-center text-xl text-white font-semibold">Users</th>
              <th className="p-4 text-center text-xl text-white font-semibold">Advisers</th>
              <th className="p-4 text-center text-xl text-white font-semibold">ARR</th>
              <th className="p-4 text-left text-xl text-white font-semibold">Primary Revenue</th>
            </tr>
          </thead>
          <tbody>
            {[
              { year: '2026', users: '5,000', advisers: '-', arr: '$600K', revenue: 'Consumer SaaS' },
              { year: '2027', users: '25,000', advisers: '-', arr: '$3.5M', revenue: 'Consumer + Trading' },
              { year: '2028', users: '75,000', advisers: '500', arr: '$12M', revenue: 'All streams' },
              { year: '2029', users: '150,000', advisers: '2,000', arr: '$35M', revenue: 'Adviser-led (60%+)', highlight: true },
            ].map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`border-t border-slate-700 ${row.highlight ? 'bg-cyan-500/10' : ''}`}
              >
                <td className="p-4 text-xl text-white font-semibold">{row.year}</td>
                <td className="p-4 text-center text-xl text-slate-300">{row.users}</td>
                <td className="p-4 text-center text-xl text-slate-300">{row.advisers}</td>
                <td className={`p-4 text-center text-xl font-bold ${row.highlight ? 'text-cyan-400' : 'text-white'}`}>{row.arr}</td>
                <td className="p-4 text-xl text-slate-300">{row.revenue}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlowCard>

    <div className="grid grid-cols-2 gap-8">
      {/* Key Assumptions */}
      <GlowCard className="p-6" delay={0.4} animated>
        <h3 className="text-xl font-bold text-white mb-4">Key Assumptions</h3>
        <ul className="space-y-2 text-lg text-slate-300">
          <li className="flex items-center gap-2"><Check className="w-5 h-5 text-cyan-400" /> 12-18% annual churn (managed via weekly feedback loops)</li>
          <li className="flex items-center gap-2"><Check className="w-5 h-5 text-cyan-400" /> 70% beta-to-paid conversion</li>
          <li className="flex items-center gap-2"><Check className="w-5 h-5 text-cyan-400" /> Adviser revenue becomes majority by 2029</li>
        </ul>
      </GlowCard>

      {/* Sensitivity */}
      <GlowCard className="p-6" delay={0.5} animated>
        <h3 className="text-xl font-bold text-white mb-4">Sensitivity Analysis</h3>
        <div className="space-y-3 text-lg">
          <p className="text-slate-300"><span className="text-orange-400 font-semibold">Bear case</span> (3% Y1 penetration): ~$400K ARR</p>
          <p className="text-slate-300"><span className="text-green-400 font-semibold">Bull case</span> (8% Y1 penetration): ~$900K ARR</p>
        </div>
      </GlowCard>
    </div>
  </div>
);

// Slide 10: Team
const TeamSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      <h2 className="text-6xl font-bold text-white mb-3">Team</h2>
      <p className="text-2xl text-cyan-400">Operator-founders who've built in this market</p>
    </motion.div>

    <div className="flex-1 grid grid-cols-2 gap-10">
      {/* Amit */}
      <GlowCard className="p-10" delay={0.2} highlight animated>
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-4xl font-bold text-white">
            AV
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">Amit Vohra</h3>
            <p className="text-xl text-cyan-400">Co-founder & CEO</p>
          </div>
        </div>
        <div className="space-y-3 text-lg text-slate-300">
          <p><span className="text-white font-semibold">PhD</span> Health Workforce, <span className="text-white font-semibold">MBA</span> (Distinction), <span className="text-white font-semibold">GAICD</span> (High Distinction)</p>
          <p><span className="text-cyan-400">Former CEO, GPRA:</span> 500% revenue growth, $18M project funding secured</p>
          <p><span className="text-cyan-400">Former EGM, Sonic Clinical Services:</span> National strategy, built risk algorithms with 98% accuracy</p>
          <p><span className="text-cyan-400">Former COO, AMA WA:</span> Led COVID-19 response operations</p>
          <p className="text-white font-semibold">Direct experience running P&L with AFSL obligations</p>
        </div>
      </GlowCard>

      {/* Nupur */}
      <GlowCard className="p-10" delay={0.3} animated>
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-4xl font-bold text-white">
            NA
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">Nupur Agarwal</h3>
            <p className="text-xl text-purple-400">Co-founder & CTO</p>
          </div>
        </div>
        <div className="space-y-3 text-lg text-slate-300">
          <p><span className="text-purple-400">Former GBST:</span> Core platform development for wealth management</p>
          <p><span className="text-purple-400">Former JP Morgan (7 years):</span> Enterprise financial systems architecture</p>
          <p className="text-orange-400 font-semibold">Headhunted by IRESS/Xplan team (declined)</p>
          <p><span className="text-white font-semibold">MBA + Double Masters</span></p>
          <p className="text-white font-semibold">Deep domain expertise in Australian wealth management technology</p>
        </div>
      </GlowCard>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-8 p-6 rounded-xl bg-slate-800/50 border border-slate-700 text-center"
    >
      <p className="text-2xl text-white">
        <span className="text-cyan-400 font-bold">Why us:</span> Amit knows why advisers buy. Nupur knows why Xplan can't fix itself.
      </p>
    </motion.div>
  </div>
);

// Slide 11: The Ask
const AskSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-cyan-500/15 rounded-full blur-[120px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      <h2 className="text-7xl font-bold text-white mb-4">The Ask</h2>
      <div className="inline-flex items-center gap-5 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-500/50">
        <DollarSign className="w-10 h-10 text-cyan-400" />
        <span className="text-4xl font-bold text-cyan-400">$1,000,000 at $10,000,000 pre-money valuation</span>
      </div>
    </motion.div>

    <div className="flex-1 grid grid-cols-2 gap-12">
      {/* Use of Funds */}
      <GlowCard className="p-8" delay={0.2} animated>
        <h3 className="text-2xl font-bold text-white mb-6">Use of Funds</h3>
        <div className="space-y-6">
          {[
            { label: 'Product', pct: 40, amount: '$400K', purpose: 'Phase 1 refinement, Phase 2 build', color: '#22d3ee' },
            { label: 'Growth', pct: 30, amount: '$300K', purpose: 'User acquisition, content, AFSL partnerships', color: '#3b82f6' },
            { label: 'Runway', pct: 30, amount: '$300K', purpose: 'Team expansion, operations, compliance', color: '#a855f7' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <div className="flex justify-between text-lg text-white mb-2">
                <span className="font-semibold">{item.label}</span>
                <span><span className="text-cyan-400">{item.pct}%</span> <span className="text-slate-400">{item.amount}</span></span>
              </div>
              <div className="h-4 bg-slate-800 rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                  className="h-full rounded-full"
                  style={{ background: item.color }}
                />
              </div>
              <p className="text-sm text-slate-400">{item.purpose}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
          <p className="text-lg text-slate-300"><span className="text-white font-semibold">Investment Terms:</span> SAFE or priced equity (flexible)</p>
          <p className="text-lg text-slate-300"><span className="text-white font-semibold">Seeking:</span> $500K lead investor, remainder from angels/syndicates</p>
        </div>
      </GlowCard>

      {/* Investor Returns */}
      <GlowCard className="p-8" delay={0.3} highlight animated>
        <h3 className="text-2xl font-bold text-cyan-400 mb-6">Investor Returns (18-month horizon to Series A)</h3>
        <div className="rounded-xl overflow-hidden border border-cyan-500/20">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
                <th className="p-3 text-left text-lg text-white font-semibold">Scenario</th>
                <th className="p-3 text-center text-lg text-white font-semibold">2029 ARR</th>
                <th className="p-3 text-center text-lg text-white font-semibold">Exit Multiple</th>
                <th className="p-3 text-center text-lg text-white font-semibold">Exit Value</th>
                <th className="p-3 text-center text-lg text-white font-semibold">Return</th>
              </tr>
            </thead>
            <tbody>
              {[
                { scenario: 'Conservative', arr: '$12M', multiple: '5x', exit: '$60M', return: '6x' },
                { scenario: 'Base', arr: '$18M', multiple: '6x', exit: '$108M', return: '11x', highlight: true },
                { scenario: 'Aggressive', arr: '$28M', multiple: '8x', exit: '$224M', return: '22x' },
              ].map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`border-t border-slate-700 ${row.highlight ? 'bg-cyan-500/10' : ''}`}
                >
                  <td className="p-3 text-lg text-white font-semibold">{row.scenario}</td>
                  <td className="p-3 text-center text-lg text-slate-300">{row.arr}</td>
                  <td className="p-3 text-center text-lg text-slate-300">{row.multiple}</td>
                  <td className="p-3 text-center text-lg text-slate-300">{row.exit}</td>
                  <td className={`p-3 text-center text-lg font-bold ${row.highlight ? 'text-cyan-400' : 'text-green-400'}`}>{row.return}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowCard>
    </div>
  </div>
);

// Slide 12: Why Now
const WhyNowSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      <h2 className="text-7xl font-bold text-white mb-3">Why Now</h2>
      <p className="text-3xl text-cyan-400">Five forces converging</p>
    </motion.div>

    <div className="flex-1 grid grid-cols-5 gap-6">
      {[
        { num: '1', title: 'AI Maturity', desc: 'Large language models (Claude, GPT-4) are finally capable of nuanced financial analysis', icon: Brain, color: 'cyan' },
        { num: '2', title: 'Regulatory Tailwind', desc: 'ASIC is actively pushing for more accessible financial advice', icon: Shield, color: 'blue' },
        { num: '3', title: 'Demographic Shift', desc: 'Millennials and Gen Z expect digital-first, mobile-native experiences', icon: Users, color: 'purple' },
        { num: '4', title: 'Incumbent Fatigue', desc: 'Advisers openly frustrated with legacy platforms; switching costs declining', icon: AlertTriangle, color: 'orange' },
        { num: '5', title: 'Post-COVID Boom', desc: '2.5M new Australian investors need guidance they\'re not getting', icon: TrendingUp, color: 'green' },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
        >
          <GlowCard className="p-6 h-full" delay={0.2 + i * 0.1} animated>
            <div className={`w-14 h-14 rounded-xl bg-${item.color}-500/20 flex items-center justify-center mb-4`}
                 style={{ backgroundColor: item.color === 'cyan' ? 'rgba(34, 211, 238, 0.2)' : item.color === 'blue' ? 'rgba(59, 130, 246, 0.2)' : item.color === 'purple' ? 'rgba(168, 85, 247, 0.2)' : item.color === 'orange' ? 'rgba(249, 115, 22, 0.2)' : 'rgba(34, 197, 94, 0.2)' }}>
              <item.icon className="w-7 h-7" style={{ color: item.color === 'cyan' ? '#22d3ee' : item.color === 'blue' ? '#3b82f6' : item.color === 'purple' ? '#a855f7' : item.color === 'orange' ? '#f97316' : '#22c55e' }} />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: item.color === 'cyan' ? '#22d3ee' : item.color === 'blue' ? '#3b82f6' : item.color === 'purple' ? '#a855f7' : item.color === 'orange' ? '#f97316' : '#22c55e' }}>
              {item.num}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-sm text-slate-400">{item.desc}</p>
          </GlowCard>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-8 p-6 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-center"
    >
      <p className="text-2xl text-white">
        <span className="text-cyan-400 font-bold">First-mover advantage</span> in AI-native Australian wealth management is available now. <span className="text-orange-400 font-bold">It won't be for long.</span>
      </p>
    </motion.div>
  </div>
);

// Slide 13: Vision
const VisionSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    {/* Multiple glows */}
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="text-center max-w-5xl px-10"
    >
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-7xl font-bold text-white mb-8"
      >
        Vision
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-10 font-semibold"
      >
        Financial dignity for everyone
      </motion.p>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-2xl text-slate-300 mb-10"
      >
        VerafyAI exists to close the gap between institutional intelligence and everyday Australians.
      </motion.p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-4 text-xl text-white mb-10"
      >
        <p>A first-generation investor gets the <span className="text-cyan-400">same insights as a family office</span></p>
        <p>A financial adviser spends time with <span className="text-cyan-400">clients, not compliance paperwork</span></p>
        <p><span className="text-cyan-400">Plain English</span> replaces jargon</p>
        <p><span className="text-cyan-400">Actions</span> replace charts</p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="p-8 rounded-xl bg-slate-800/50 border border-slate-700 inline-block"
      >
        <p className="text-2xl text-white italic">
          "A generation that doesn't waste 15 years learning what they should have been taught at 18."
        </p>
      </motion.div>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
      >
        This is VerafyAI. This is Vera.
      </motion.p>
    </motion.div>
  </div>
);

// Slide 14: Contact / Thank You
const ContactSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    {/* Background Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-slate-950/0" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
    </div>

    {/* Animated glow */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[150px]"
    />

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="text-center relative z-10"
    >
      {/* Logo */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="inline-block relative">
          <div className="w-28 h-28 mx-auto bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
            <div className="w-14 h-14 bg-cyan-400 rounded-lg transform rotate-45" />
          </div>
          <div className="absolute inset-0 bg-cyan-400/30 rounded-xl blur-2xl animate-pulse" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[100px] font-bold text-white mb-6 leading-none"
      >
        VerafyAI
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-4xl text-slate-400 mb-12"
      >
        Thank you. Questions?
      </motion.p>

      {/* Contact Info */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-6"
      >
        <div className="grid grid-cols-2 gap-10">
          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <h4 className="text-xl font-bold text-white mb-2">Amit Vohra</h4>
            <p className="text-lg text-cyan-400">Co-founder & CEO</p>
            <p className="text-lg text-slate-400 flex items-center gap-2 mt-2">
              <Mail className="w-5 h-5" /> amit.vohra@axientai.au
            </p>
            <p className="text-lg text-slate-400 flex items-center gap-2 mt-1">
              <Phone className="w-5 h-5" /> +61 431 909 502
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <h4 className="text-xl font-bold text-white mb-2">Nupur Agarwal</h4>
            <p className="text-lg text-purple-400">Co-founder & CTO</p>
            <p className="text-lg text-slate-400 flex items-center gap-2 mt-2">
              <Mail className="w-5 h-5" /> nupur.agarwal@axientai.au
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-10 text-xl text-slate-400">
          <span className="flex items-center gap-3">
            <Globe className="w-6 h-6" />
            verafyai.com.au
          </span>
          <span className="flex items-center gap-3">
            <Rocket className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400">Beta Launch: February 15, 2026</span>
          </span>
        </div>
      </motion.div>
    </motion.div>

    {/* Version */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-10 right-16 text-slate-500 text-lg"
    >
      v4.1 | February 1, 2026
    </motion.div>
  </div>
);

// Main Component
export function InvestorPitchDeck({ isDark }: InvestorPitchDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);

  const slides = [
    CoverSlide,
    ProblemSlide,
    SolutionSlide,
    RoadmapSlide,
    AdviserSlide,
    MarketSlide,
    TractionSlide,
    BusinessModelSlide,
    FinancialsSlide,
    TeamSlide,
    AskSlide,
    WhyNowSlide,
    VisionSlide,
    ContactSlide,
  ];

  useEffect(() => {
    const handleResize = () => {
      const baseWidth = 1920;
      const baseHeight = 1080;
      const scaleX = window.innerWidth / baseWidth;
      const scaleY = window.innerHeight / baseHeight;
      setScale(Math.min(scaleX, scaleY) * 0.95);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setCurrentSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setCurrentSlide(slides.length - 1);
    }
  }, [slides.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <div
        style={{
          width: 1920,
          height: 1080,
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
        className="relative shadow-2xl rounded-lg overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full"
          >
            <CurrentSlideComponent isDark={isDark} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-5 z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            className="p-4 rounded-full bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/70 hover:border-cyan-500/50 transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </motion.button>

          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentSlide(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'w-12 bg-gradient-to-r from-cyan-400 to-blue-500'
                    : 'w-3 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
            disabled={currentSlide === slides.length - 1}
            className="p-4 rounded-full bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/70 hover:border-cyan-500/50 transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </motion.button>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 right-10 z-20">
          <div className="px-5 py-3 rounded-full bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-slate-300 text-lg">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Keyboard hint */}
        <div className="absolute bottom-8 right-10 text-slate-500 text-sm z-20">
          Use arrow keys to navigate
        </div>
      </div>
    </div>
  );
}
