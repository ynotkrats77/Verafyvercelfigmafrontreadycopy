import React, { useState, useEffect, useCallback } from 'react';
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
  BarChart3,
  Globe,
  Zap,
  Check,
  X,
  ArrowRight,
  LineChart,
  PieChart,
  Award,
  Building2,
  Wallet,
  Brain,
  Clock,
  FileText,
  Briefcase,
  MessageSquare,
  Lock,
  ArrowDown,
  Calendar,
  Sparkles,
  Play,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Mail,
  Phone
} from 'lucide-react';

interface InvestorPitchDeckProps {
  isDark: boolean;
}

interface SlideProps {
  isDark: boolean;
}

// Floating particles component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
        initial={{
          x: Math.random() * 1920,
          y: Math.random() * 1080,
        }}
        animate={{
          x: [null, Math.random() * 1920],
          y: [null, Math.random() * 1080],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10 + Math.random() * 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

// Animated counter component
const AnimatedNumber = ({ value, suffix = '', prefix = '' }: { value: string; suffix?: string; prefix?: string }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numericValue]);

  const formatted = value.includes('M') ? `${count.toFixed(0)}M` :
                    value.includes('K') ? `${count.toFixed(0)}K` :
                    value.includes('B') ? `${count.toFixed(1)}B` :
                    count.toFixed(0);

  return <span>{prefix}{formatted}{suffix}</span>;
};

// Glowing card component
const GlowCard = ({ children, className = '', delay = 0, highlight = false }: { children: React.ReactNode; className?: string; delay?: number; highlight?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ scale: 1.02, y: -5 }}
    className={`relative rounded-2xl backdrop-blur-sm ${className}`}
    style={{
      background: highlight
        ? 'linear-gradient(135deg, rgba(13, 79, 79, 0.9), rgba(6, 95, 95, 0.9))'
        : 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))',
      border: highlight ? '2px solid rgba(34, 211, 238, 0.5)' : '1px solid rgba(34, 211, 238, 0.2)',
      boxShadow: highlight
        ? '0 0 40px rgba(34, 211, 238, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
        : '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
    }}
  >
    {highlight && (
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 animate-pulse" />
      </div>
    )}
    <div className="relative z-10">{children}</div>
  </motion.div>
);

// Slide 1: Title Slide
const TitleSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0d4f4f] to-slate-900">
    <FloatingParticles />

    {/* Ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]">
      <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" />
    </div>

    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
      backgroundSize: '50px 50px'
    }} />

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 text-center"
    >
      {/* Logo */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50">
            <div className="w-10 h-10 bg-white rounded-lg transform rotate-45" />
          </div>
          <div className="absolute inset-0 bg-cyan-400/50 rounded-2xl blur-xl animate-pulse" />
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        className="text-9xl font-bold mb-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
          Verafy
        </span>
        <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          AI
        </span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-3xl text-cyan-400 italic mb-4 font-light"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        The interface between finance and humans
      </motion.p>

      <motion.p
        className="text-2xl text-white/70 mb-16"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Where <span className="text-cyan-400 font-semibold">9 million</span> investors meet institutional intelligence
      </motion.p>

      {/* Contact */}
      <motion.div
        className="text-lg text-white/50 space-y-1"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-white/70">Amit Vohra | Co-founder & CEO</p>
        <p>amit@verafyai.com | verafyai.com.au</p>
      </motion.div>
    </motion.div>

    {/* Ask Badge */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, type: "spring" }}
      className="absolute top-8 right-12"
    >
      <div className="relative">
        <div className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl text-slate-900 font-bold text-xl shadow-2xl shadow-cyan-500/50">
          $1M Seed @ $10M Pre-Money
        </div>
        <div className="absolute inset-0 bg-cyan-400/50 rounded-xl blur-xl -z-10 animate-pulse" />
      </div>
    </motion.div>
  </div>
);

// Slide 2: Two Markets. One Broken System.
const ProblemSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    {/* Background glows */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px]" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <h2 className="text-6xl font-bold text-white mb-4">
        Two Markets. <span className="text-red-400">One Broken System.</span>
      </h2>
    </motion.div>

    <div className="flex-1 grid grid-cols-2 gap-8 mb-8">
      {/* Retail Investors */}
      <GlowCard className="p-8" delay={0.2} highlight>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
            <Users className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-cyan-400">9 Million Retail Investors</h3>
        </div>
        <ul className="space-y-4">
          {[
            { icon: AlertTriangle, text: 'Making decisions without institutional tools' },
            { icon: FileText, text: 'Spreadsheets, basic trackers, or nothing' },
            { icon: TrendingDown, text: 'No real-time tax optimisation' },
            { icon: X, text: 'No personalised guidance' },
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-3 text-lg text-white/80"
            >
              <item.icon className="w-5 h-5 text-red-400" />
              {item.text}
            </motion.li>
          ))}
        </ul>
      </GlowCard>

      {/* Financial Advisers */}
      <GlowCard className="p-8" delay={0.3}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
            <Briefcase className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white">15,000 Financial Advisers</h3>
        </div>
        <ul className="space-y-4">
          {[
            { icon: Lock, text: 'Trapped in legacy software (Xplan)' },
            { icon: DollarSign, text: '$2,000-$4,000/month for complexity they don\'t need' },
            { icon: Clock, text: '3-week SOA turnarounds via paraplanners' },
            { icon: AlertTriangle, text: 'Hours on paperwork, minutes with clients' },
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3 text-lg text-white/80"
            >
              <item.icon className="w-5 h-5 text-orange-400" />
              {item.text}
            </motion.li>
          ))}
        </ul>
      </GlowCard>
    </div>

    {/* Bottom Banner */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="p-6 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30"
    >
      <p className="text-xl text-white text-center">
        The gap between investors who need help and advisers who can deliver has never been wider.
      </p>
      <p className="text-lg text-cyan-400 italic text-center mt-2">
        They call it a 'necessary evil.' <span className="text-white font-semibold">The industry is ripe for disruption.</span>
      </p>
    </motion.div>
  </div>
);

// Slide 3: The Solution - Three Phases
const SolutionSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 text-center"
    >
      <h2 className="text-6xl font-bold text-white mb-4">
        The Solution: <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Three Phases</span>
      </h2>
    </motion.div>

    <div className="flex-1 grid grid-cols-3 gap-8">
      {/* Phase 1 */}
      <GlowCard className="p-8 flex flex-col" delay={0.2} highlight>
        <div className="text-center mb-6">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-4"
            animate={{ boxShadow: ['0 0 20px rgba(34, 211, 238, 0.3)', '0 0 40px rgba(34, 211, 238, 0.5)', '0 0 20px rgba(34, 211, 238, 0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm">NOW - LIVE</span>
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-2">Portfolio Intelligence</h3>
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
            <Brain className="w-8 h-8 text-white" />
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          {['Connect broker → real-time analysis', 'Tax optimisation, rebalancing', 'Plain English actions', '$5-$20/month'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-white/80">
              <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>

      {/* Phase 2 */}
      <GlowCard className="p-8 flex flex-col" delay={0.3}>
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold text-sm">JULY 2026</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Trading App</h3>
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
            <LineChart className="w-8 h-8 text-white" />
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          {['Standalone app, separate entity', 'IBKR brokerage gateway', 'AWS enterprise deployment', 'Chinese wall maintained'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-white/80">
              <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>

      {/* Phase 3 */}
      <GlowCard className="p-8 flex flex-col" delay={0.4}>
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-semibold text-sm">2027</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Xplan Lite</h3>
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <FileText className="w-8 h-8 text-white" />
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          {['One-meeting SOA generation', 'Conversational fact-find', 'No paraplanners needed', '$1,500-$4,000/month'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-white/80">
              <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>

    {/* Timeline connector */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="mt-8 text-center"
    >
      <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30">
        <Zap className="w-6 h-6 text-cyan-400" />
        <span className="text-2xl font-bold text-white">All three phases live by Christmas 2026</span>
        <Zap className="w-6 h-6 text-purple-400" />
      </div>
    </motion.div>
  </div>
);

// Slide 4: Vera - Bloomberg Terminal meets ChatGPT
const VeraSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      <h2 className="text-5xl font-bold text-white mb-2">
        Vera: <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Bloomberg Terminal meets ChatGPT</span>
      </h2>
      <p className="text-xl text-cyan-400 italic">For the 9 million, not the 9 thousand</p>
    </motion.div>

    <div className="flex-1 grid grid-cols-2 gap-12">
      {/* What Vera Does */}
      <GlowCard className="p-8" delay={0.2}>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Brain className="w-8 h-8 text-cyan-400" />
          What Vera Does
        </h3>
        <ul className="space-y-4">
          {[
            { icon: LineChart, text: 'Real-time portfolio analysis' },
            { icon: TrendingDown, text: 'Tax-loss harvesting alerts' },
            { icon: DollarSign, text: 'Dividend tracking & forecasting' },
            { icon: Shield, text: 'Risk exposure mapping' },
            { icon: Target, text: 'Rebalancing recommendations' },
            { icon: MessageSquare, text: 'All in plain English - not charts' },
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3 text-lg text-white/80"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-cyan-400" />
              </div>
              {item.text}
            </motion.li>
          ))}
        </ul>
      </GlowCard>

      {/* Comparison Table */}
      <GlowCard className="p-8" delay={0.3}>
        <h3 className="text-2xl font-bold text-white mb-6">Competitive Comparison</h3>
        <div className="rounded-xl overflow-hidden border border-white/10">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-cyan-500/30 to-teal-500/30">
                <th className="p-4 text-left text-white font-semibold">Feature</th>
                <th className="p-4 text-center text-white/70 font-semibold">Sharesight</th>
                <th className="p-4 text-center text-white/70 font-semibold">Empower</th>
                <th className="p-4 text-center text-cyan-400 font-bold">VerafyAI</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['AI Analysis', false, false, true],
                ['Plain English', false, false, true],
                ['AU Tax Rules', true, false, true],
                ['Actionable', false, false, true],
                ['Price', '$42/mo', 'Free (US)', '$5-20/mo'],
              ].map(([feature, s, e, v], i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="border-t border-white/10"
                >
                  <td className="p-4 text-white/80">{feature}</td>
                  <td className="p-4 text-center">
                    {typeof s === 'boolean' ? (
                      s ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400/50 mx-auto" />
                    ) : <span className="text-white/50 text-sm">{s}</span>}
                  </td>
                  <td className="p-4 text-center">
                    {typeof e === 'boolean' ? (
                      e ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400/50 mx-auto" />
                    ) : <span className="text-white/50 text-sm">{e}</span>}
                  </td>
                  <td className="p-4 text-center bg-cyan-500/10">
                    {typeof v === 'boolean' ? (
                      v ? <CheckCircle2 className="w-6 h-6 text-cyan-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                    ) : <span className="text-cyan-400 font-bold">{v}</span>}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowCard>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-8 text-center"
    >
      <p className="text-2xl font-bold">
        <span className="text-white/60">Not charts that make you feel smart.</span>{' '}
        <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Actions that make you money.</span>
      </p>
    </motion.div>
  </div>
);

// Slide 5: Chinese Walls - Regulatory Survival
const RegulatorySlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h2 className="text-5xl font-bold text-white mb-2">
        Chinese Walls: <span className="text-orange-400">Regulatory Survival</span>
      </h2>
      <p className="text-xl text-white/60">
        The smarts live in Portfolio. The trades live in Trading. No AI recommendations crossing the wall.
      </p>
    </motion.div>

    <div className="flex-1 flex items-center justify-center gap-4">
      {/* Portfolio Intelligence */}
      <GlowCard className="flex-1 p-8 h-[400px]" delay={0.2} highlight>
        <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
          <Brain className="w-8 h-8" />
          PORTFOLIO INTELLIGENCE
        </h3>
        <ul className="space-y-4">
          {[
            'AI-powered analysis',
            'Tax optimisation insights',
            'Risk assessment',
            'Information only',
            'No AFSL required',
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-3 text-lg text-white/80"
            >
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              {item}
            </motion.li>
          ))}
        </ul>
      </GlowCard>

      {/* Wall */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-20 h-[400px] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-red-500 to-orange-500 rounded-lg opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="transform -rotate-90 text-white font-bold text-2xl tracking-[0.3em] whitespace-nowrap">
            WALL
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500/50 blur-xl -z-10 animate-pulse" />
      </motion.div>

      {/* Trading App */}
      <GlowCard className="flex-1 p-8 h-[400px]" delay={0.3}>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <LineChart className="w-8 h-8 text-slate-400" />
          TRADING APP
        </h3>
        <ul className="space-y-4">
          {[
            'Clean execution only',
            'No AI recommendations',
            'IBKR gateway',
            'Separate entity',
            'Standard broker licence',
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-3 text-lg text-white/80"
            >
              <Check className="w-5 h-5 text-slate-500" />
              {item}
            </motion.li>
          ))}
        </ul>
      </GlowCard>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-8 p-6 rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-white/10"
    >
      <p className="text-xl text-white text-center italic">
        "Anyone building AI-driven trading recommendations without an AFSL is building a <span className="text-red-400 font-semibold">time bomb</span>.
        <span className="text-cyan-400 font-semibold"> We are not that.</span>"
      </p>
    </motion.div>
  </div>
);

// Slide 6: Xplan Lite - One Meeting. Job Done.
const XplanLiteSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h2 className="text-5xl font-bold text-white mb-2">
        Xplan Lite: <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">One Meeting. Job Done.</span>
      </h2>
      <p className="text-xl text-white/60">
        Not a killer. A simplifier. For the 60-70% who don't need enterprise complexity.
      </p>
    </motion.div>

    <div className="flex-1 grid grid-cols-2 gap-12">
      {/* Flow */}
      <div className="flex flex-col gap-3">
        {[
          { label: 'Meeting Start', highlight: true, icon: Play },
          { label: 'Conversational Fact-Find', icon: MessageSquare },
          { label: 'Risk Profiling (real-time)', icon: Shield },
          { label: 'Strategy Modelling (instant)', icon: Target },
          { label: 'Draft SOA Generated', icon: FileText },
          { label: 'Adviser Signs Off', icon: CheckCircle2 },
          { label: 'Client Leaves with SOA', highlight: true, icon: Award },
        ].map((step, i) => (
          <React.Fragment key={i}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`p-4 rounded-xl flex items-center gap-4 ${
                step.highlight
                  ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/50'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                step.highlight ? 'bg-purple-500' : 'bg-white/10'
              }`}>
                <step.icon className={`w-5 h-5 ${step.highlight ? 'text-white' : 'text-white/60'}`} />
              </div>
              <span className={`text-lg ${step.highlight ? 'text-white font-semibold' : 'text-white/80'}`}>
                {step.label}
              </span>
              {step.highlight && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-auto"
                >
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </motion.div>
              )}
            </motion.div>
            {i < 6 && (
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-white/30" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Comparison */}
      <div className="space-y-8">
        <GlowCard className="p-6" delay={0.4}>
          <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-3">
            <X className="w-8 h-8" />
            Current Industry
          </h3>
          <ul className="space-y-3">
            {[
              '3-week SOA turnaround',
              'Send to paraplanners',
              '$4,000/month platforms',
              '80% features unused',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg text-white/70">
                <X className="w-5 h-5 text-red-400/70" />
                {item}
              </li>
            ))}
          </ul>
        </GlowCard>

        <GlowCard className="p-6" delay={0.5} highlight>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8" />
            With Xplan Lite
          </h3>
          <ul className="space-y-3">
            {[
              { text: '55 minutes total', highlight: true },
              { text: 'No paraplanners needed' },
              { text: '$1,500-$4,000/month' },
              { text: 'Everything they actually need' },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg text-white/90">
                <Check className="w-5 h-5 text-cyan-400" />
                <span className={item.highlight ? 'text-cyan-400 font-bold' : ''}>{item.text}</span>
              </li>
            ))}
          </ul>
        </GlowCard>
      </div>
    </div>
  </div>
);

// Slide 7: Market Opportunity
const MarketSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-[200px]" />

    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl font-bold text-white mb-12 text-center"
    >
      Market Opportunity
    </motion.h2>

    {/* Big Numbers */}
    <div className="grid grid-cols-3 gap-8 mb-12">
      {[
        { value: '9M+', label: 'Australians own shares/ETFs', color: 'cyan' },
        { value: '15K', label: 'Financial advisers in AU', color: 'blue' },
        { value: '$6B', label: 'Advice industry revenue', color: 'purple' },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="text-center"
        >
          <div className={`text-7xl font-bold mb-2 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500 bg-clip-text text-transparent`}
               style={{
                 background: `linear-gradient(to right, var(--${stat.color === 'cyan' ? 'cyan' : stat.color === 'blue' ? 'blue' : 'purple'}-400), var(--${stat.color}-500))`,
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 color: stat.color === 'cyan' ? '#22d3ee' : stat.color === 'blue' ? '#3b82f6' : '#a855f7'
               }}>
            {stat.value}
          </div>
          <div className="text-lg text-white/60">{stat.label}</div>
        </motion.div>
      ))}
    </div>

    {/* TAM boxes */}
    <div className="flex-1 grid grid-cols-2 gap-8">
      <GlowCard className="p-8" delay={0.5}>
        <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
          <Users className="w-8 h-8" />
          Phase 1 TAM: Retail
        </h3>
        <p className="text-xl text-white mb-4">
          9M × $15/mo avg = <span className="text-3xl font-bold text-cyan-400">$1.6B</span> potential
        </p>
        <div className="space-y-2 text-white/70">
          <p className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-green-400" /> 2.5M new investors since COVID</p>
          <p className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-green-400" /> 61% of Millennials now invest</p>
        </div>
      </GlowCard>

      <GlowCard className="p-8" delay={0.6}>
        <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
          <Briefcase className="w-8 h-8" />
          Phase 3 TAM: Advisers
        </h3>
        <p className="text-xl text-white mb-4">
          15K × $3K/mo = <span className="text-3xl font-bold text-purple-400">$540M</span>/year
        </p>
        <div className="space-y-2 text-white/70">
          <p className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-orange-400" /> Average practice pays $2-4K/mo</p>
          <p className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-orange-400" /> for software they barely use</p>
        </div>
      </GlowCard>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-8 text-center"
    >
      <p className="text-2xl font-bold">
        <span className="text-white/60">We start with the millions.</span>{' '}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">We scale to the thousands.</span>
      </p>
    </motion.div>
  </div>
);

// Slide 8: Traction & Team
const TractionSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl font-bold text-white mb-10"
    >
      Traction & Team
    </motion.h2>

    <div className="flex-1 grid grid-cols-3 gap-8">
      {/* What's Live */}
      <GlowCard className="p-6" delay={0.2} highlight>
        <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
          <Rocket className="w-7 h-7" />
          What's Live
        </h3>
        <ul className="space-y-4">
          {[
            'Platform built (AWS, React, Claude AI)',
            '$150K pre-seed raised',
            'Beta waitlist at capacity',
            '2 patents lodged, more in pipeline',
            'IBKR integration ready',
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 text-white/80"
            >
              <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </GlowCard>

      {/* Timeline */}
      <GlowCard className="p-6" delay={0.3}>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Calendar className="w-7 h-7 text-blue-400" />
          Timeline
        </h3>
        <ul className="space-y-4 text-white/80">
          {[
            { date: 'Feb 15', text: 'Beta launch' },
            { date: 'Apr 1', text: 'Public launch' },
            { date: 'Jun 30', text: 'Tax/reporting (EOFY)' },
            { date: 'Jul', text: 'Trading app (IBKR)' },
            { date: '2027', text: 'Xplan Lite pilot' },
            { date: 'Christmas', text: 'All phases live', highlight: true },
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className={`flex items-center gap-3 ${item.highlight ? 'text-cyan-400 font-bold' : ''}`}
            >
              <span className="w-20 text-blue-400 font-semibold">{item.date}:</span>
              {item.text}
            </motion.li>
          ))}
        </ul>
      </GlowCard>

      {/* Team */}
      <GlowCard className="p-6" delay={0.4}>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Users className="w-7 h-7 text-purple-400" />
          Team
        </h3>
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-1">Amit Vohra - CEO</h4>
            <p className="text-sm text-white/60">PhD, MBA, GAICD</p>
            <p className="text-sm text-cyan-400">Ex-CEO GPRA (500% revenue growth)</p>
            <p className="text-sm text-white/60">Ex-EGM Sonic Clinical Services | Chairman GP2U</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-1">Nupur Agarwal - CTO</h4>
            <p className="text-sm text-white/60">MBA + Double Masters</p>
            <p className="text-sm text-cyan-400">Ex-GBST | Ex-JP Morgan (7 yrs)</p>
            <p className="text-sm text-white/60">Headhunted by Xplan (declined)</p>
          </div>
        </div>
      </GlowCard>
    </div>
  </div>
);

// Slide 9: Business Model
const BusinessModelSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h2 className="text-6xl font-bold text-white mb-2">Business Model</h2>
      <p className="text-2xl text-cyan-400 font-semibold">Three Revenue Streams</p>
    </motion.div>

    <div className="grid grid-cols-3 gap-6 mb-8">
      {/* Phase 1 */}
      <GlowCard className="p-6" delay={0.2} highlight>
        <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6" />
          Phase 1: SaaS
        </h3>
        <div className="space-y-2 text-white/80 mb-4">
          <p>Starter: <span className="text-white font-semibold">$5/mo</span></p>
          <p>Standard: <span className="text-white font-semibold">$10/mo</span></p>
          <p>Pro: <span className="text-white font-semibold">$20/mo</span></p>
        </div>
        <div className="p-3 rounded-lg bg-orange-500/20 border border-orange-500/30">
          <p className="text-orange-400 font-semibold flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Founding: 50% off for life
          </p>
        </div>
      </GlowCard>

      {/* Phase 2 */}
      <GlowCard className="p-6" delay={0.3}>
        <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
          <LineChart className="w-6 h-6" />
          Phase 2: Trading
        </h3>
        <div className="space-y-2 text-white/80">
          <p>Brokerage fees</p>
          <p>Premium features</p>
          <p>Standalone entity</p>
          <p className="text-white/50 italic">No advice liability</p>
        </div>
      </GlowCard>

      {/* Phase 3 */}
      <GlowCard className="p-6" delay={0.4}>
        <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6" />
          Phase 3: Adviser
        </h3>
        <div className="space-y-2 text-white/80">
          <p className="text-white font-semibold">$1,500-$4,000/mo per practice</p>
          <p>Implementation fees</p>
          <p>Data/compliance add-ons</p>
        </div>
      </GlowCard>
    </div>

    {/* Unit Economics */}
    <GlowCard className="p-6" delay={0.5}>
      <h3 className="text-2xl font-bold text-white mb-4">Unit Economics</h3>
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'CAC', value: '$25', color: 'white' },
          { label: 'LTV', value: '$360+', color: 'white' },
          { label: 'LTV:CAC', value: '14:1', color: 'cyan', highlight: true },
          { label: 'Payback', value: '2 months', color: 'white' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className={`p-4 rounded-xl text-center ${item.highlight ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-white/5 border border-white/10'}`}
          >
            <div className="text-sm text-white/60 mb-1">{item.label}</div>
            <div className={`text-3xl font-bold ${item.highlight ? 'text-cyan-400' : 'text-white'}`}>{item.value}</div>
          </motion.div>
        ))}
      </div>
    </GlowCard>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-6 text-center"
    >
      <p className="text-xl font-bold">
        <span className="text-cyan-400">High margin SaaS.</span>{' '}
        <span className="text-blue-400">Global scale.</span>{' '}
        <span className="text-purple-400">Defensible IP.</span>
      </p>
    </motion.div>
  </div>
);

// Slide 10: The Ask
const AskSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-[#0d4f4f] via-[#0a3d3d] to-slate-900">
    <FloatingParticles />

    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]" />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      <h2 className="text-7xl font-bold text-white mb-4">The Ask</h2>
      <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/50">
        <DollarSign className="w-8 h-8 text-cyan-400" />
        <span className="text-3xl font-bold text-cyan-400">$1M Seed @ $10M Pre-Money</span>
      </div>
    </motion.div>

    <div className="flex-1 grid grid-cols-2 gap-12">
      {/* Use of Funds */}
      <GlowCard className="p-8" delay={0.2}>
        <h3 className="text-2xl font-bold text-white mb-6">Use of Funds</h3>
        <div className="space-y-6">
          {[
            { label: 'Product (Phase 1, 2, 3)', pct: 40, amount: '$400K', color: 'cyan' },
            { label: 'Growth & Partnerships', pct: 30, amount: '$300K', color: 'blue' },
            { label: 'Runway & Operations', pct: 30, amount: '$300K', color: 'purple' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <div className="flex justify-between text-lg text-white mb-2">
                <span>{item.label}</span>
                <span className="font-bold">
                  <span className="text-cyan-400">{item.pct}%</span>{' '}
                  <span className="text-white/50">{item.amount}</span>
                </span>
              </div>
              <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${item.color === 'cyan' ? '#22d3ee' : item.color === 'blue' ? '#3b82f6' : '#a855f7'}, ${item.color === 'cyan' ? '#14b8a6' : item.color === 'blue' ? '#6366f1' : '#ec4899'})`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </GlowCard>

      {/* What You Get */}
      <GlowCard className="p-8" delay={0.3} highlight>
        <h3 className="text-2xl font-bold text-cyan-400 mb-6">What You Get</h3>
        <ul className="space-y-4">
          {[
            'Seat at the table for AU wealth management disruption',
            'Jurisdiction agnostic products → global play',
            'Target markets: Australia, North America, India',
            '2 patents lodged, defensible IP moat',
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-3 text-lg text-white"
            >
              <CheckCircle2 className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </GlowCard>
    </div>
  </div>
);

// Slide 11: The Vision
const VisionSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a1929] to-slate-950">
    <FloatingParticles />

    {/* Multiple glows */}
    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="text-center max-w-5xl px-8"
    >
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-7xl font-bold text-white mb-8"
      >
        The Vision
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-3xl text-cyan-400 mb-12"
      >
        The interface between humans and the global financial system
      </motion.p>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl text-white/70 mb-12 italic leading-relaxed"
      >
        Over the next 3 years, my ability to detect behavioural patterns at an individual and industry level
        will grow to a point that we will <span className="text-cyan-400 font-semibold">carry risk for the advice</span> delivered through the pattern.
      </motion.p>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-2xl text-white mb-12"
      >
        The ecosystem. The infrastructure. <span className="text-cyan-400">The rails that everything else runs on.</span>
      </motion.p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="p-6 rounded-xl bg-white/5 border border-white/10 inline-block"
      >
        <p className="text-xl text-cyan-400 italic">
          "Nupur & Amit aren't selling their houses to build another tracker."
        </p>
      </motion.div>
    </motion.div>
  </div>
);

// Slide 12: Thank You
const ThankYouSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0d4f4f] via-[#0a3d3d] to-slate-900">
    <FloatingParticles />

    {/* Animated glow */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[150px]"
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
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50">
            <div className="w-12 h-12 bg-white rounded-lg transform rotate-45" />
          </div>
          <div className="absolute inset-0 bg-cyan-400/50 rounded-2xl blur-2xl animate-pulse" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-9xl font-bold text-white mb-8"
      >
        VerafyAI
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-5xl text-cyan-400 mb-8 font-light"
      >
        I am inevitable.
      </motion.p>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xl text-white/70 mb-12 italic max-w-2xl mx-auto"
      >
        The only question is whether you will be in the room when I truly arrive.
      </motion.p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-center gap-8 text-white/60">
          <span className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            amit@verafyai.com
          </span>
          <span className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            verafyai.com.au
          </span>
        </div>
        <p className="text-2xl text-white font-semibold">
          Thank you. Questions?
        </p>
      </motion.div>
    </motion.div>
  </div>
);

// Main Component
export function InvestorPitchDeck({ isDark }: InvestorPitchDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);

  const slides = [
    TitleSlide,
    ProblemSlide,
    SolutionSlide,
    VeraSlide,
    RegulatorySlide,
    XplanLiteSlide,
    MarketSlide,
    TractionSlide,
    BusinessModelSlide,
    AskSlide,
    VisionSlide,
    ThankYouSlide,
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/70 hover:border-cyan-500/50 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'w-10 bg-gradient-to-r from-cyan-400 to-teal-400'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
            disabled={currentSlide === slides.length - 1}
            className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/70 hover:border-cyan-500/50 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-6 right-8 z-20">
          <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white/70 text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Keyboard hint */}
        <div className="absolute bottom-6 right-8 text-white/40 text-xs z-20">
          Use arrow keys to navigate
        </div>
      </div>
    </div>
  );
}
