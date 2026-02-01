import { useState, useEffect, useRef, useCallback } from 'react';
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
  Brain,
  Clock,
  FileText,
  Briefcase,
  Lock,
  Calendar,
  Sparkles,
  Play,
  Pause,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Mail,
  Download,
  Volume2,
  VolumeX,
  Phone,
  Cpu,
  Building2,
  GraduationCap,
  Linkedin,
} from 'lucide-react';
import { GlowCard } from './GlowCard';

interface InvestorPitchVideoProps {
  isDark: boolean;
  onClose?: () => void;
}

// Slide timing in seconds - total ~503 seconds (8:23) - 14 slides
const SLIDE_TIMINGS = [
  { start: 0, end: 30 },      // Slide 1: Title (0:00 - 0:30)
  { start: 30, end: 75 },     // Slide 2: Problem $21B (0:30 - 1:15)
  { start: 75, end: 115 },    // Slide 3: Solution (1:15 - 1:55)
  { start: 115, end: 155 },   // Slide 4: Product Roadmap (1:55 - 2:35)
  { start: 155, end: 195 },   // Slide 5: Adviser Opportunity (2:35 - 3:15)
  { start: 195, end: 235 },   // Slide 6: Market Opportunity (3:15 - 3:55)
  { start: 235, end: 275 },   // Slide 7: Traction (3:55 - 4:35)
  { start: 275, end: 315 },   // Slide 8: Business Model (4:35 - 5:15)
  { start: 315, end: 350 },   // Slide 9: Financial Projections (5:15 - 5:50)
  { start: 350, end: 390 },   // Slide 10: Team (5:50 - 6:30)
  { start: 390, end: 430 },   // Slide 11: The Ask (6:30 - 7:10)
  { start: 430, end: 460 },   // Slide 12: Why Now (7:10 - 7:40)
  { start: 460, end: 485 },   // Slide 13: Vision (7:40 - 8:05)
  { start: 485, end: 503 },   // Slide 14: Thank You (8:05 - 8:23)
];

// Vera Hologram Presenter Component - Now positioned OUTSIDE the slide
const VeraHologramPresenter = ({ isPlaying }: { isPlaying: boolean }) => (
  <div className="h-full flex flex-col items-center justify-end pb-8 pointer-events-none">
    {/* Holographic base platform */}
    <div className="relative w-48 h-4 mb-2">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent rounded-full blur-sm" />
      <div className="absolute inset-x-4 inset-y-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent rounded-full" />
      <motion.div
        className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </div>

    {/* Hologram projection beams */}
    <div className="absolute bottom-12 w-40">
      <motion.div
        className="absolute bottom-0 left-0 w-1 origin-bottom"
        style={{
          height: '400px',
          background: 'linear-gradient(to top, rgba(34, 211, 238, 0.4), transparent)',
          transform: 'rotate(-15deg)',
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-1 origin-bottom"
        style={{
          height: '400px',
          background: 'linear-gradient(to top, rgba(34, 211, 238, 0.4), transparent)',
          transform: 'rotate(15deg)',
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
    </div>

    {/* Main hologram container - taller for full height effect */}
    <div className="relative w-72 h-[500px] overflow-hidden rounded-lg mb-4">
      {/* Holographic effect overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.1) 2px, rgba(34, 211, 238, 0.1) 4px)',
          }}
        />
        <motion.div
          className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
          animate={{ y: [-100, 500, -100] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-lg" />
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(34,211,238,0.3)] rounded-lg" />
      </div>

      {/* Holographic color tint overlay */}
      <div
        className="absolute inset-0 z-10 mix-blend-screen pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(34, 211, 238, 0.1) 0%, rgba(6, 182, 212, 0.15) 50%, rgba(34, 211, 238, 0.1) 100%)',
        }}
      />

      {/* Glitch effect overlay */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        animate={{
          opacity: [0, 0, 0.3, 0, 0, 0],
          x: [0, -2, 2, -1, 1, 0],
        }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.1) 25%, transparent 50%, rgba(0,255,255,0.1) 75%, transparent 100%)',
        }}
      />

      {/* YouTube Video Embed (Vera Avatar) */}
      <div
        className="absolute inset-0"
        style={{
          filter: isPlaying ? 'none' : 'grayscale(50%) brightness(0.8)',
          opacity: isPlaying ? 1 : 0.7,
        }}
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/8okZgJP3qe4?autoplay=1&mute=1&loop=1&playlist=8okZgJP3qe4&controls=0&modestbranding=1&playsinline=1&showinfo=0&rel=0"
          title="Vera AI Presenter"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{
            border: 'none',
            transform: 'scale(1.8)',
            transformOrigin: 'center center',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Bottom fade to transparent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 1), transparent)',
        }}
      />
    </div>

    {/* Floating particles around hologram */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
        style={{
          left: `${20 + Math.random() * 60}%`,
          bottom: `${10 + Math.random() * 80}%`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}

    {/* "Vera" label */}
    <motion.div
      className="px-6 py-2 bg-slate-900/80 backdrop-blur-sm rounded-full border border-cyan-500/40"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="text-cyan-400 text-lg font-medium tracking-wider">VERA</span>
    </motion.div>
  </div>
);

// Floating particles component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(10)].map((_, i) => (
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

// Slide 1: Title
const TitleSlide = () => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-slate-950/0" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0" />
    </div>
    <div className="relative z-10 text-center">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-24 h-24 bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
          <div className="w-12 h-12 bg-cyan-400 rounded-lg transform rotate-45" />
        </div>
      </div>
      <h1 className="text-[120px] font-bold mb-4 leading-none">
        <span className="text-white">Verafy</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI</span>
      </h1>
      <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic mb-4 font-light">
        The interface between finance and humans
      </p>
      <p className="text-2xl text-slate-300 mb-12">
        Where <span className="text-cyan-400 font-bold">9 million</span> investors meet institutional intelligence
      </p>
      <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-bold text-2xl shadow-2xl shadow-cyan-500/30 mb-10">
        <DollarSign className="w-7 h-7" />
        $1M Seed @ $10M Pre-Money
      </div>
      <div className="text-xl text-slate-400 space-y-2">
        <div className="flex items-center justify-center gap-8">
          <span className="text-white font-semibold">Amit Vohra | Co-founder & CEO</span>
          <span className="text-white font-semibold">Nupur Agarwal | Co-founder & CTO</span>
        </div>
        <div className="flex items-center justify-center gap-6 text-lg">
          <span>amit.vohra@axientai.au</span>
          <span>nupur.agarwal@axientai.au</span>
        </div>
        <p>+61 431 909 502 | verafyai.com.au</p>
      </div>
    </div>
  </div>
);

// Slide 2: Problem - $21B
const ProblemSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-8">
      <h2 className="text-6xl font-bold text-white mb-2">
        Two Markets. <span className="text-red-400">One Broken System.</span>
      </h2>
    </div>
    <div className="text-center mb-8">
      <div className="text-8xl font-bold text-red-400 mb-2">$21B</div>
      <p className="text-2xl text-slate-300">lost annually to poor financial decisions</p>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-10">
      <GlowCard className="p-8" highlight>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
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
            <li key={i} className="flex items-center gap-3 text-xl text-white">
              <item.icon className="w-6 h-6 text-red-400 flex-shrink-0" />
              {item.text}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
            <Briefcase className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white">15,000 Financial Advisers</h3>
        </div>
        <ul className="space-y-4">
          {[
            { icon: Lock, text: 'Trapped in legacy software (Xplan)' },
            { icon: DollarSign, text: '$2,000-$4,000/month for complexity' },
            { icon: Clock, text: '3-week SOA turnarounds' },
            { icon: AlertTriangle, text: 'Hours on paperwork, minutes with clients' },
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-xl text-white">
              <item.icon className="w-6 h-6 text-orange-400 flex-shrink-0" />
              {item.text}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
    <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30">
      <p className="text-2xl text-white text-center">
        The gap between investors and advisers has never been wider.
        <span className="text-cyan-400 italic ml-2">The industry is ripe for disruption.</span>
      </p>
    </div>
  </div>
);

// Slide 3: Solution - Comparison Table
const SolutionSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-8 text-center">
      <h2 className="text-6xl font-bold text-white mb-2">The Solution</h2>
      <p className="text-2xl text-cyan-400">VerafyAI bridges the gap between DIY and full advice</p>
    </div>
    <GlowCard className="flex-1 p-8">
      <div className="rounded-xl overflow-hidden border border-cyan-500/20 h-full">
        <table className="w-full h-full">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
              <th className="p-5 text-left text-2xl text-white font-semibold">Feature</th>
              <th className="p-5 text-center text-2xl text-slate-300">Sharesight</th>
              <th className="p-5 text-center text-2xl text-slate-300">Empower</th>
              <th className="p-5 text-center text-2xl text-cyan-400 font-bold">VerafyAI</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Pre-trade CGT Analysis', false, false, true],
              ['AI Recommendations', false, false, true],
              ['Plain English Insights', false, false, true],
              ['Tax-loss Harvesting', false, true, true],
              ['AU Tax Rules Native', true, false, true],
              ['Real-time Alerts', false, true, true],
            ].map(([feature, s, e, v], i) => (
              <tr key={i} className="border-t border-slate-700">
                <td className="p-5 text-xl text-white">{feature}</td>
                <td className="p-5 text-center">
                  {typeof s === 'boolean' ? (s ? <Check className="w-8 h-8 text-green-400 mx-auto" /> : <X className="w-8 h-8 text-red-400/50 mx-auto" />) : <span className="text-slate-400 text-lg">{s}</span>}
                </td>
                <td className="p-5 text-center">
                  {typeof e === 'boolean' ? (e ? <Check className="w-8 h-8 text-green-400 mx-auto" /> : <X className="w-8 h-8 text-red-400/50 mx-auto" />) : <span className="text-slate-400 text-lg">{e}</span>}
                </td>
                <td className="p-5 text-center bg-cyan-500/10">
                  {typeof v === 'boolean' ? (v ? <CheckCircle2 className="w-9 h-9 text-cyan-400 mx-auto" /> : <X className="w-8 h-8 text-red-400 mx-auto" />) : <span className="text-cyan-400 font-bold text-xl">{v}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlowCard>
    <div className="mt-6 text-center">
      <p className="text-2xl font-bold">
        <span className="text-slate-400">Not charts that make you feel smart.</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Actions that make you money.</span>
      </p>
    </div>
  </div>
);

// Slide 4: Product Roadmap
const ProductRoadmapSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-8 text-center">
      <h2 className="text-6xl font-bold text-white mb-2">Product Roadmap</h2>
      <p className="text-2xl text-slate-300">Three phases to full ecosystem</p>
    </div>
    <div className="flex-1 grid grid-cols-3 gap-8">
      <GlowCard className="p-8 flex flex-col" highlight>
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-bold text-lg">NOW - LIVE</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Phase 1: Portfolio Intelligence</h3>
          <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <Brain className="w-8 h-8 text-white" />
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          {['Connect broker → real-time analysis', 'Tax optimisation, rebalancing', 'Plain English actions', '$5-$20/month'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-lg text-white">
              <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-8 flex flex-col">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
            <Calendar className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-bold text-lg">JULY 2026</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Phase 2: Trading App</h3>
          <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
            <LineChart className="w-8 h-8 text-white" />
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          {['Standalone app, separate entity', 'IBKR brokerage gateway', 'AWS enterprise deployment', 'Chinese wall maintained'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-lg text-white">
              <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-8 flex flex-col">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
            <Rocket className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-bold text-lg">2027</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Phase 3: Adviser Platform</h3>
          <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <FileText className="w-8 h-8 text-white" />
          </div>
        </div>
        <ul className="space-y-3 flex-1">
          {['One-meeting SOA generation', 'Conversational fact-find', 'No paraplanners needed', '$1,500-$4,000/month'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-lg text-white">
              <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
    <div className="mt-6 text-center">
      <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30">
        <Zap className="w-6 h-6 text-cyan-400" />
        <span className="text-2xl font-bold text-white">Product build 2026. Full ecosystem 2027.</span>
        <Zap className="w-6 h-6 text-purple-400" />
      </div>
    </div>
  </div>
);

// Slide 5: Adviser Opportunity - One Meeting SOA
const AdviserOpportunitySlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-6">
      <h2 className="text-5xl font-bold text-white mb-2">The Adviser Opportunity</h2>
      <p className="text-2xl text-cyan-400">One-Meeting SOA: From 3 weeks to 55 minutes</p>
    </div>
    <GlowCard className="p-6 mb-6" highlight>
      <h3 className="text-2xl font-bold text-white mb-4 text-center">The One-Meeting SOA Process</h3>
      <div className="grid grid-cols-6 gap-3">
        {[
          { step: 1, title: 'Client arrives', time: '10 min', icon: Users },
          { step: 2, title: 'Fact-find complete', time: '15 min', icon: FileText },
          { step: 3, title: 'AI generates draft', time: '5 min', icon: Brain },
          { step: 4, title: 'Adviser reviews', time: '10 min', icon: CheckCircle2 },
          { step: 5, title: 'Client signs', time: '5 min', icon: FileText },
          { step: 6, title: 'Done!', time: '10 min', icon: Rocket },
        ].map((item) => (
          <div key={item.step} className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mb-2">
              {item.step}
            </div>
            <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
            <span className="text-cyan-400 font-semibold text-sm">{item.time}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-center">
        <p className="text-lg text-white">
          Total time: <span className="text-cyan-400 font-bold text-2xl">55 minutes</span>
          <span className="text-slate-400 ml-2">vs. 3 weeks industry average</span>
        </p>
      </div>
    </GlowCard>
    <div className="flex-1 grid grid-cols-2 gap-6">
      <GlowCard className="p-6">
        <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-3">
          <AlertTriangle className="w-6 h-6" />
          Current Reality
        </h3>
        <ul className="space-y-3">
          {['3-week average SOA turnaround', '$2,000-$4,000/month software costs', 'Paraplanner bottleneck', 'Client drops off between meetings'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-lg text-white">
              <X className="w-5 h-5 text-red-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-6" highlight>
        <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
          <Sparkles className="w-6 h-6" />
          With VerafyAI
        </h3>
        <ul className="space-y-3">
          {['SOA in one meeting', '3x more clients per day', 'No paraplanner needed', 'Higher conversion rate'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-lg text-white">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
  </div>
);

// Slide 6: Market Opportunity - $756M TAM
const MarketSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <h2 className="text-6xl font-bold text-white mb-6 text-center">Market Opportunity</h2>
    <div className="text-center mb-8">
      <div className="text-8xl font-bold text-cyan-400 mb-2">$756M</div>
      <p className="text-2xl text-slate-300">Total Addressable Market (annually)</p>
    </div>
    <div className="grid grid-cols-3 gap-8 mb-8">
      {[
        { value: '9M+', label: 'Australians own shares/ETFs', color: '#22d3ee' },
        { value: '15K', label: 'Financial advisers in AU', color: '#3b82f6' },
        { value: '$6B', label: 'Advice industry revenue', color: '#a855f7' },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-6xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
          <div className="text-xl text-slate-300">{stat.label}</div>
        </div>
      ))}
    </div>
    <div className="flex-1 grid grid-cols-2 gap-8">
      <GlowCard className="p-6">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
          <Users className="w-8 h-8" />
          Phase 1 TAM: Retail
        </h3>
        <p className="text-xl text-white mb-4">
          9M × 5% penetration × $14/mo = <span className="text-4xl font-bold text-cyan-400">$75.6M</span>/year
        </p>
        <div className="space-y-2 text-lg text-slate-300">
          <p className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-400" /> 2.5M new investors since COVID</p>
          <p className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-400" /> 61% of Millennials now invest</p>
        </div>
      </GlowCard>
      <GlowCard className="p-6">
        <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
          <Briefcase className="w-8 h-8" />
          Phase 3 TAM: Advisers
        </h3>
        <p className="text-xl text-white mb-4">
          15K × 30% × $1,500/mo = <span className="text-4xl font-bold text-purple-400">$81M</span>/year
        </p>
        <div className="space-y-2 text-lg text-slate-300">
          <p className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-orange-400" /> Average practice pays $2-4K/mo</p>
          <p className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-orange-400" /> for software they barely use</p>
        </div>
      </GlowCard>
    </div>
  </div>
);

// Slide 7: Traction
const TractionSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-6">
      <h2 className="text-6xl font-bold text-white mb-2">Traction & Milestones</h2>
      <p className="text-2xl text-cyan-400">Built the product before raising</p>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-8">
      <GlowCard className="p-6" highlight>
        <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
          <Rocket className="w-8 h-8" />
          What's Live
        </h3>
        <ul className="space-y-3">
          {[
            'Platform built (AWS, React, Claude AI)',
            '$150K pre-seed deployed',
            '$25K AWS credits secured',
            'CGT engine complete',
            'Beta users onboarded',
            '2 provisional patents lodged',
            'R&D tax credit: $60K expected Q1 2026',
            'Trademarks filed (IP Australia)',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-white">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-6">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Calendar className="w-8 h-8 text-blue-400" />
          Timeline
        </h3>
        <ul className="space-y-3 text-lg">
          {[
            { date: 'Nov 2025', text: 'Infrastructure deployed', status: 'done' },
            { date: 'Jan 2026', text: 'Core product built', status: 'done' },
            { date: 'Feb 15', text: 'Beta launch', status: 'done' },
            { date: 'Apr 1', text: 'Public launch', status: 'target' },
            { date: 'Jul 2026', text: 'Trading platform (IBKR)', status: 'planned' },
            { date: 'Q4 2026', text: 'Advisor platform beta', status: 'planned' },
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-20 text-blue-400 font-semibold flex-shrink-0 text-sm">{item.date}</span>
              <span className={`flex-1 ${item.status === 'target' ? 'text-cyan-400 font-semibold' : 'text-white'}`}>{item.text}</span>
              {item.status === 'done' && <CheckCircle2 className="w-5 h-5 text-green-400" />}
              {item.status === 'target' && <Target className="w-5 h-5 text-cyan-400" />}
              {item.status === 'planned' && <Clock className="w-5 h-5 text-slate-500" />}
            </li>
          ))}
        </ul>
        <div className="mt-4 p-3 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-center">
          <p className="text-cyan-400 font-bold">We're not raising to build. We're raising to accelerate.</p>
        </div>
      </GlowCard>
    </div>
  </div>
);

// Slide 8: Business Model
const BusinessModelSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-6">
      <h2 className="text-6xl font-bold text-white mb-2">Business Model</h2>
      <p className="text-2xl text-cyan-400">Three Revenue Streams</p>
    </div>
    <div className="grid grid-cols-3 gap-6 mb-6">
      <GlowCard className="p-6" highlight>
        <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6" />
          Phase 1: SaaS
        </h3>
        <div className="space-y-2 text-lg text-white mb-4">
          <p>Starter: <span className="font-bold">$5/mo</span></p>
          <p>Standard: <span className="font-bold">$10/mo</span></p>
          <p>Pro: <span className="font-bold">$20/mo</span></p>
        </div>
        <div className="p-3 rounded-lg bg-orange-500/20 border border-orange-500/30">
          <p className="text-orange-400 font-semibold text-sm flex items-center gap-1">
            <Zap className="w-4 h-4" />
            Founding: 50% off for life
          </p>
        </div>
      </GlowCard>
      <GlowCard className="p-6">
        <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
          <LineChart className="w-6 h-6" />
          Phase 2: Trading
        </h3>
        <div className="space-y-2 text-lg text-white">
          <p>Brokerage fees</p>
          <p>Premium features</p>
          <p>Standalone entity</p>
          <p className="text-slate-400 italic text-sm">No advice liability</p>
        </div>
      </GlowCard>
      <GlowCard className="p-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6" />
          Phase 3: Adviser
        </h3>
        <div className="space-y-2 text-lg text-white">
          <p className="font-bold">$1,500-$4,000/mo per practice</p>
          <p>Implementation fees</p>
          <p>Data/compliance add-ons</p>
        </div>
      </GlowCard>
    </div>
    <GlowCard className="p-6">
      <h3 className="text-2xl font-bold text-white mb-4">Unit Economics</h3>
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'CAC (blended)', value: '$25', highlight: false },
          { label: 'LTV', value: '$360+', highlight: false },
          { label: 'LTV:CAC', value: '14:1', highlight: true },
          { label: 'Gross Margin', value: '85%+', highlight: false },
        ].map((item, i) => (
          <div key={i} className={`p-4 rounded-xl text-center ${item.highlight ? 'bg-cyan-500/20 border-2 border-cyan-500/50' : 'bg-slate-800/50 border border-slate-700'}`}>
            <div className="text-sm text-slate-400 mb-1">{item.label}</div>
            <div className={`text-3xl font-bold ${item.highlight ? 'text-cyan-400' : 'text-white'}`}>{item.value}</div>
          </div>
        ))}
      </div>
    </GlowCard>
  </div>
);

// Slide 9: Financial Projections
const FinancialProjectionsSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-6 text-center">
      <h2 className="text-6xl font-bold text-white mb-2">Financial Projections</h2>
      <p className="text-2xl text-slate-300">Conservative path to profitability</p>
    </div>
    <GlowCard className="flex-1 p-8">
      <div className="rounded-xl overflow-hidden border border-cyan-500/20 h-full">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
              <th className="p-5 text-left text-2xl text-white font-semibold">Metric</th>
              <th className="p-5 text-center text-2xl text-slate-300">2026</th>
              <th className="p-5 text-center text-2xl text-slate-300">2027</th>
              <th className="p-5 text-center text-2xl text-slate-300">2028</th>
              <th className="p-5 text-center text-2xl text-cyan-400 font-bold">2029</th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: 'Revenue', y1: '$600K', y2: '$3.5M', y3: '$12M', y4: '$35M' },
              { metric: 'Paying Users', y1: '5,000', y2: '25,000', y3: '80,000', y4: '200,000' },
              { metric: 'MRR', y1: '$50K', y2: '$290K', y3: '$1M', y4: '$2.9M' },
              { metric: 'Burn Rate', y1: '$80K/mo', y2: '$150K/mo', y3: 'Breakeven', y4: 'Profitable' },
            ].map((row, i) => (
              <tr key={i} className="border-t border-slate-700">
                <td className="p-5 text-xl font-semibold text-white">{row.metric}</td>
                <td className="p-5 text-center text-xl text-slate-300">{row.y1}</td>
                <td className="p-5 text-center text-xl text-slate-300">{row.y2}</td>
                <td className="p-5 text-center text-xl text-slate-300">{row.y3}</td>
                <td className="p-5 text-center text-xl text-cyan-400 font-bold bg-cyan-500/10">{row.y4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlowCard>
  </div>
);

// Slide 10: Team
const TeamSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-6 text-center">
      <h2 className="text-6xl font-bold text-white mb-2">The Team</h2>
      <p className="text-2xl text-slate-300">Proven Founders</p>
    </div>
    <div className="flex-1 grid grid-cols-3 gap-6">
      {/* Amit */}
      <GlowCard className="p-5" highlight>
        <div className="text-center mb-3">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-3 text-2xl font-bold text-white">AV</div>
          <h3 className="text-xl font-bold text-white">Amit Vohra</h3>
          <p className="text-cyan-400 font-semibold">Co-Founder & CEO</p>
        </div>
        <div className="text-sm">
          <div className="flex items-center gap-2 text-slate-400 mb-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>PhD, MBA (Distinction), GAICD</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700">
            <ul className="space-y-1">
              {['25+ years senior healthcare leadership', 'CEO GPRA: $2M → $12M ARR (500%)', 'Raised $10M from health funds', 'Risk algorithm 98% accuracy'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlowCard>
      {/* Nupur */}
      <GlowCard className="p-5" highlight>
        <div className="text-center mb-3">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-3 text-2xl font-bold text-white">NA</div>
          <h3 className="text-xl font-bold text-white">Nupur Agarwal</h3>
          <p className="text-purple-400 font-semibold">Co-Founder & CTO</p>
        </div>
        <div className="text-sm">
          <div className="flex items-center gap-2 text-slate-400 mb-2">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>MBA + Double Masters</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700">
            <ul className="space-y-1">
              {['15+ years enterprise fintech', 'Ex-GBST/Xplan – knows gatekeeping', 'Ex-JP Morgan, Macquarie', 'Built entire beta platform solo'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlowCard>
      {/* Subodh */}
      <GlowCard className="p-5" highlight>
        <div className="text-center mb-3">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-3 text-2xl font-bold text-white">SR</div>
          <h3 className="text-xl font-bold text-white">Subodh Ramugade</h3>
          <p className="text-orange-400 font-semibold">Head of AI/ML</p>
        </div>
        <div className="text-sm">
          <div className="flex items-center gap-2 text-slate-400 mb-2">
            <GraduationCap className="w-4 h-4 text-orange-400" />
            <span>MIT Deep Learning Certificate</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700">
            <ul className="space-y-1">
              {['VP AI, Healthcare Analytics (CloudxLab)', 'Ex-Amazon, Digital Payments UX', 'Ex-JP Morgan Sydney, Systems Arch', '15+ years enterprise AI/ML'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlowCard>
    </div>
  </div>
);

// Slide 11: The Ask with Return Scenarios
const AskSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-6 text-center">
      <h2 className="text-6xl font-bold text-white mb-4">The Ask</h2>
      <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-500/50">
        <DollarSign className="w-8 h-8 text-cyan-400" />
        <span className="text-3xl font-bold text-cyan-400">$1M Seed @ $10M Pre-Money</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-6 mb-6">
      <GlowCard className="p-5">
        <h3 className="text-xl font-bold text-white mb-4">Use of Funds</h3>
        <div className="space-y-4">
          {[
            { label: 'Product (Phase 1, 2, 3)', pct: 40, amount: '$400K', color: '#22d3ee' },
            { label: 'Growth & Partnerships', pct: 30, amount: '$300K', color: '#3b82f6' },
            { label: 'Runway & Operations', pct: 30, amount: '$300K', color: '#a855f7' },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-lg text-white mb-2">
                <span>{item.label}</span>
                <span className="font-bold"><span className="text-cyan-400">{item.pct}%</span> <span className="text-slate-400">{item.amount}</span></span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </GlowCard>
      <GlowCard className="p-5" highlight>
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Investment Terms</h3>
        <ul className="space-y-3">
          {['SAFE or priced equity (open to discussion)', '$500K lead investor minimum', 'Pro-rata rights for future rounds', 'Board observer seat available'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-white">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
    <GlowCard className="p-5">
      <h3 className="text-xl font-bold text-white mb-4 text-center">Return Scenarios</h3>
      <div className="rounded-xl overflow-hidden border border-cyan-500/20">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
              <th className="p-3 text-left text-lg text-white font-semibold">Scenario</th>
              <th className="p-3 text-center text-lg text-slate-300">Exit Valuation</th>
              <th className="p-3 text-center text-lg text-slate-300">Return Multiple</th>
              <th className="p-3 text-center text-lg text-cyan-400 font-bold">$100K →</th>
            </tr>
          </thead>
          <tbody>
            {[
              { scenario: 'Conservative', valuation: '$60M', multiple: '6x', returns: '$600K' },
              { scenario: 'Base Case', valuation: '$110M', multiple: '11x', returns: '$1.1M' },
              { scenario: 'Aggressive', valuation: '$220M', multiple: '22x', returns: '$2.2M' },
            ].map((row, i) => (
              <tr key={i} className="border-t border-slate-700">
                <td className="p-3 text-lg font-semibold text-white">{row.scenario}</td>
                <td className="p-3 text-center text-slate-300">{row.valuation}</td>
                <td className={`p-3 text-center font-bold ${i === 2 ? 'text-green-400' : i === 1 ? 'text-cyan-400' : 'text-slate-300'}`}>{row.multiple}</td>
                <td className={`p-3 text-center font-bold bg-cyan-500/10 ${i === 2 ? 'text-green-400' : 'text-cyan-400'}`}>{row.returns}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlowCard>
  </div>
);

// Slide 12: Why Now
const WhyNowSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-8 text-center">
      <h2 className="text-6xl font-bold text-white mb-2">Why Now?</h2>
      <p className="text-2xl text-slate-300">Five forces converging</p>
    </div>
    <div className="flex-1 grid grid-cols-5 gap-4">
      {[
        { icon: Cpu, title: 'AI Maturity', desc: 'LLMs finally good enough for financial reasoning', color: 'cyan' },
        { icon: Shield, title: 'Regulatory Tailwind', desc: 'ASIC pushing for accessible advice', color: 'blue' },
        { icon: Users, title: 'Demographic Shift', desc: 'Millennials demand digital-first', color: 'purple' },
        { icon: Building2, title: 'Incumbent Fatigue', desc: 'Advisers hate legacy software', color: 'orange' },
        { icon: TrendingUp, title: 'Post-COVID Boom', desc: '2.5M new retail investors', color: 'green' },
      ].map((item, i) => (
        <GlowCard key={i} className="p-5 text-center">
          <div className={`w-14 h-14 mx-auto rounded-xl bg-${item.color}-500/20 flex items-center justify-center mb-4`}>
            <item.icon className={`w-7 h-7 text-${item.color}-400`} />
          </div>
          <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
          <p className="text-sm text-slate-400">{item.desc}</p>
        </GlowCard>
      ))}
    </div>
    <div className="mt-6 text-center">
      <p className="text-2xl font-bold text-white">
        The window is <span className="text-cyan-400">now</span>. First mover advantage is <span className="text-cyan-400">real</span>.
      </p>
    </div>
  </div>
);

// Slide 13: Vision
const VisionSlide = () => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-16">
    <FloatingParticles />
    <div className="text-center max-w-5xl">
      <h2 className="text-7xl font-bold text-white mb-8">The Vision</h2>
      <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-10">
        The interface between humans and the global financial system
      </p>
      <p className="text-xl text-slate-300 mb-10 italic leading-relaxed">
        Over the next 3 years, my ability to detect behavioural patterns at an individual and industry level
        will grow to a point that we will <span className="text-cyan-400 font-semibold">carry risk for the advice</span> delivered through the pattern.
      </p>
      <p className="text-2xl text-white mb-10">
        The ecosystem. The infrastructure. <span className="text-cyan-400">The rails that everything else runs on.</span>
      </p>
      <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 inline-block">
        <p className="text-xl text-cyan-400 italic">
          "Nupur & Amit aren't selling their houses to build another tracker."
        </p>
      </div>
    </div>
  </div>
);

// Slide 14: Thank You
const ThankYouSlide = () => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="text-center">
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
          <div className="w-12 h-12 bg-cyan-400 rounded-lg transform rotate-45" />
        </div>
      </div>
      <h1 className="text-[100px] font-bold text-white mb-6 leading-none">VerafyAI</h1>
      <p className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 font-light">
        I am inevitable.
      </p>
      <p className="text-xl text-slate-300 mb-10 italic max-w-2xl mx-auto">
        The only question is whether you will be in the room when I truly arrive.
      </p>
      <div className="grid grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
          <h4 className="text-lg font-bold text-white mb-1">Amit Vohra</h4>
          <p className="text-cyan-400 text-sm mb-2">Co-founder & CEO</p>
          <p className="text-slate-400 text-sm flex items-center justify-center gap-2"><Mail className="w-4 h-4" /> amit.vohra@axientai.au</p>
          <p className="text-slate-400 text-sm flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> +61 431 909 502</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
          <h4 className="text-lg font-bold text-white mb-1">Nupur Agarwal</h4>
          <p className="text-purple-400 text-sm mb-2">Co-founder & CTO</p>
          <p className="text-slate-400 text-sm flex items-center justify-center gap-2"><Mail className="w-4 h-4" /> nupur.agarwal@axientai.au</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 text-lg text-slate-400 mb-6">
        <span className="flex items-center gap-2"><Globe className="w-5 h-5" /> verafyai.com.au</span>
      </div>
      <p className="text-3xl text-white font-semibold">Thank you. Questions?</p>
    </div>
  </div>
);

const SLIDES = [
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  ProductRoadmapSlide,
  AdviserOpportunitySlide,
  MarketSlide,
  TractionSlide,
  BusinessModelSlide,
  FinancialProjectionsSlide,
  TeamSlide,
  AskSlide,
  WhyNowSlide,
  VisionSlide,
  ThankYouSlide,
];

// Format time as MM:SS
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export function InvestorPitchVideo({ isDark, onClose }: InvestorPitchVideoProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(503);
  const [isMuted, setIsMuted] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleResize = () => {
      // Calculate scale for slide area (leaving room for Vera on left)
      const slideWidth = 1440; // Reduced width to make room for Vera
      const slideHeight = 810;
      const availableWidth = window.innerWidth - 320; // Leave 320px for Vera
      const availableHeight = window.innerHeight - 120; // Leave room for controls
      const scaleX = availableWidth / slideWidth;
      const scaleY = availableHeight / slideHeight;
      setScale(Math.min(scaleX, scaleY) * 0.95);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update current slide based on audio time
  useEffect(() => {
    const slideIndex = SLIDE_TIMINGS.findIndex(
      (timing) => currentTime >= timing.start && currentTime < timing.end
    );
    if (slideIndex !== -1 && slideIndex !== currentSlide) {
      setCurrentSlide(slideIndex);
    }
  }, [currentTime, currentSlide]);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setAudioReady(true);
    }
  }, []);

  const handleCanPlay = useCallback(() => {
    setAudioReady(true);
  }, []);

  const togglePlay = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (audioRef.current && index >= 0 && index < SLIDES.length) {
      audioRef.current.currentTime = SLIDE_TIMINGS[index].start;
      setCurrentTime(SLIDE_TIMINGS[index].start);
      setCurrentSlide(index);
    }
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (currentSlide < SLIDES.length - 1) {
        goToSlide(currentSlide + 1);
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
      }
    } else if (e.key === 'm') {
      toggleMute();
    } else if (e.key === 'Escape' && onClose) {
      onClose();
    }
  }, [togglePlay, currentSlide, goToSlide, toggleMute, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className="w-full h-screen bg-black flex flex-col overflow-hidden">
      {/* Audio element */}
      <audio
        ref={audioRef}
        src="/Vera_Pitch_Full.mp3"
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={handleCanPlay}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Main content area - Vera on left, Slides on right */}
      <div className="flex-1 flex">
        {/* Vera Hologram - Full height left side */}
        <div className="w-80 h-full bg-gradient-to-b from-slate-950 via-slate-900 to-black relative flex-shrink-0">
          <VeraHologramPresenter isPlaying={isPlaying} />
        </div>

        {/* Slide container - takes remaining space */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div
            style={{
              width: 1440,
              height: 810,
              transform: `scale(${scale})`,
              transformOrigin: 'center center'
            }}
            className="relative shadow-2xl rounded-lg overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <CurrentSlideComponent />
              </motion.div>
            </AnimatePresence>

            {/* Slide indicator */}
            <div className="absolute top-4 right-4 z-20">
              <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-cyan-500/30 text-slate-300 text-lg">
                Slide {currentSlide + 1} / {SLIDES.length}
              </div>
            </div>

            {/* Big centered play button overlay when paused */}
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center z-30 bg-black/40"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
                >
                  <Play className="w-16 h-16 ml-2" />
                </motion.button>
                <div className="absolute bottom-24 text-white text-2xl font-medium">
                  Click to play narrated pitch
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Video controls */}
      <div className="w-full px-8 py-4 bg-slate-900/90 backdrop-blur-md border-t border-cyan-500/20">
        {/* Progress bar */}
        <div className="flex items-center gap-4 mb-3 max-w-5xl mx-auto">
          <span className="text-cyan-400 text-sm font-mono w-12">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 503}
            value={currentTime}
            onChange={handleSeek}
            aria-label="Video progress"
            title="Seek video"
            className="flex-1 h-2 bg-slate-700 rounded-full appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                       [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
                       [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-cyan-400/50"
            style={{
              background: `linear-gradient(to right, #22d3ee ${(currentTime / (duration || 503)) * 100}%, #334155 ${(currentTime / (duration || 503)) * 100}%)`
            }}
          />
          <span className="text-slate-400 text-sm font-mono w-12">{formatTime(duration || 503)}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            {/* Play/Pause */}
            <button
              type="button"
              onClick={togglePlay}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              title={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
            </button>

            {/* Prev/Next */}
            <button
              type="button"
              onClick={() => goToSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              title="Previous slide"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => goToSlide(Math.min(SLIDES.length - 1, currentSlide + 1))}
              disabled={currentSlide === SLIDES.length - 1}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              title="Next slide"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Mute */}
            <button
              type="button"
              onClick={toggleMute}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all"
              title={isMuted ? 'Unmute' : 'Mute'}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>

          {/* Slide dots */}
          <div className="flex items-center gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'w-6 bg-gradient-to-r from-cyan-400 to-blue-500'
                    : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
                title={`Go to slide ${i + 1}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Download button */}
            <a
              href="/VerafyAI_Investor_Pitch.mp4"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all border border-slate-700"
            >
              <Download className="w-5 h-5" />
              <span className="text-sm">Download MPEG</span>
            </a>

            <span className="text-slate-500 text-sm">Space: play/pause • Arrows: navigate</span>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all flex items-center gap-2"
                title="Close video"
              >
                <X className="w-4 h-4" />
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
