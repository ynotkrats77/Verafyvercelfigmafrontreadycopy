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
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Download,
  Phone,
  Cpu,
  Building2,
  GraduationCap,
} from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface InvestorVideoPageProps {
  isDark: boolean;
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

// Vera Hologram Presenter Component - Full height outside slide
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

    {/* Main hologram container */}
    <div className="relative w-64 h-[400px] overflow-hidden rounded-lg mb-4">
      {/* Holographic effect overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.1) 2px, rgba(34, 211, 238, 0.1) 4px)',
          }}
        />
        <motion.div
          className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
          animate={{ y: [-80, 400, -80] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-lg" />
        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(34,211,238,0.3)] rounded-lg" />
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
        className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 1), transparent)',
        }}
      />
    </div>

    {/* Floating particles around hologram */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
        style={{
          left: `${20 + Math.random() * 60}%`,
          bottom: `${10 + Math.random() * 70}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [0.5, 1, 0.5],
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
      className="px-4 py-1.5 bg-slate-900/80 backdrop-blur-sm rounded-full border border-cyan-500/40"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="text-cyan-400 text-sm font-medium tracking-wider">VERA</span>
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
          x: Math.random() * 1440,
          y: Math.random() * 810,
        }}
        animate={{
          x: [null, Math.random() * 1440],
          y: [null, Math.random() * 810],
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
    <div className="relative z-10 text-center">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-20 h-20 bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
          <div className="w-10 h-10 bg-cyan-400 rounded-lg transform rotate-45" />
        </div>
      </div>
      <h1 className="text-7xl font-bold mb-3 leading-none">
        <span className="text-white">Verafy</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI</span>
      </h1>
      <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic mb-3 font-light">
        The interface between finance and humans
      </p>
      <p className="text-lg text-slate-300 mb-8">
        Where <span className="text-cyan-400 font-bold">9 million</span> investors meet institutional intelligence
      </p>
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-bold text-lg shadow-2xl shadow-cyan-500/30 mb-6">
        <DollarSign className="w-5 h-5" />
        $1M Seed @ $10M Pre-Money
      </div>
      <div className="text-base text-slate-400 space-y-1">
        <div className="flex items-center justify-center gap-6">
          <span className="text-white font-semibold">Amit Vohra | CEO</span>
          <span className="text-white font-semibold">Nupur Agarwal | CTO</span>
        </div>
        <p className="text-sm">amit.vohra@axientai.au | nupur.agarwal@axientai.au</p>
      </div>
    </div>
  </div>
);

// Slide 2: Problem - $21B
const ProblemSlide = () => (
  <div className="h-full flex flex-col p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <h2 className="text-4xl font-bold text-white mb-2">Two Markets. <span className="text-red-400">One Broken System.</span></h2>
    <div className="text-center mb-4">
      <div className="text-6xl font-bold text-red-400 mb-1">$21B</div>
      <p className="text-lg text-slate-300">lost annually to poor financial decisions</p>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-6">
      <GlowCard className="p-5" highlight>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-cyan-400">9M Retail Investors</h3>
        </div>
        <ul className="space-y-2">
          {[
            { icon: AlertTriangle, text: 'No institutional tools' },
            { icon: TrendingDown, text: 'No real-time tax optimisation' },
            { icon: X, text: 'No personalised guidance' },
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-base text-white">
              <item.icon className="w-4 h-4 text-red-400 flex-shrink-0" />
              {item.text}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">15K Advisers</h3>
        </div>
        <ul className="space-y-2">
          {[
            { icon: Lock, text: 'Trapped in legacy software' },
            { icon: DollarSign, text: '$2-4K/month for complexity' },
            { icon: Clock, text: '3-week SOA turnarounds' },
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-base text-white">
              <item.icon className="w-4 h-4 text-orange-400 flex-shrink-0" />
              {item.text}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
  </div>
);

// Slide 3: Solution
const SolutionSlide = () => (
  <div className="h-full flex flex-col p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-1">The Solution</h2>
      <p className="text-lg text-cyan-400">VerafyAI bridges the gap</p>
    </div>
    <GlowCard className="flex-1 p-4">
      <div className="rounded-lg overflow-hidden border border-cyan-500/20 h-full">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
              <th className="p-3 text-left text-white font-semibold">Feature</th>
              <th className="p-3 text-center text-slate-300">Sharesight</th>
              <th className="p-3 text-center text-slate-300">Empower</th>
              <th className="p-3 text-center text-cyan-400 font-bold">VerafyAI</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Pre-trade CGT Analysis', false, false, true],
              ['AI Recommendations', false, false, true],
              ['Plain English Insights', false, false, true],
              ['Tax-loss Harvesting', false, true, true],
              ['AU Tax Rules Native', true, false, true],
            ].map(([feature, s, e, v], i) => (
              <tr key={i} className="border-t border-slate-700">
                <td className="p-3 text-white">{feature}</td>
                <td className="p-3 text-center">
                  {typeof s === 'boolean' ? (s ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400/50 mx-auto" />) : s}
                </td>
                <td className="p-3 text-center">
                  {typeof e === 'boolean' ? (e ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400/50 mx-auto" />) : e}
                </td>
                <td className="p-3 text-center bg-cyan-500/10">
                  {typeof v === 'boolean' ? (v ? <CheckCircle2 className="w-6 h-6 text-cyan-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />) : v}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlowCard>
  </div>
);

// Slide 4: Product Roadmap
const ProductRoadmapSlide = () => (
  <div className="h-full flex flex-col p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-1">Product Roadmap</h2>
      <p className="text-lg text-slate-300">Three phases to full ecosystem</p>
    </div>
    <div className="flex-1 grid grid-cols-3 gap-4">
      <GlowCard className="p-4 flex flex-col" highlight>
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-bold text-sm">NOW - LIVE</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Portfolio Intelligence</h3>
          <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
        </div>
        <ul className="space-y-1.5 flex-1 text-sm">
          {['Connect broker → analysis', 'Tax optimisation', 'Plain English actions', '$5-$20/month'].map((item, i) => (
            <li key={i} className="flex items-center gap-1.5 text-white">
              <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-4 flex flex-col">
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 mb-2">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-bold text-sm">JULY 2026</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Trading App</h3>
          <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
            <LineChart className="w-6 h-6 text-white" />
          </div>
        </div>
        <ul className="space-y-1.5 flex-1 text-sm">
          {['Standalone entity', 'IBKR gateway', 'AWS deployment', 'Chinese wall'].map((item, i) => (
            <li key={i} className="flex items-center gap-1.5 text-white">
              <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-4 flex flex-col">
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 mb-2">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-bold text-sm">2027</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Adviser Platform</h3>
          <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
        </div>
        <ul className="space-y-1.5 flex-1 text-sm">
          {['One-meeting SOA', 'Conversational fact-find', 'No paraplanners', '$1.5-4K/month'].map((item, i) => (
            <li key={i} className="flex items-center gap-1.5 text-white">
              <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
  </div>
);

// Slide 5: Adviser Opportunity
const AdviserOpportunitySlide = () => (
  <div className="h-full flex flex-col p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-4">
      <h2 className="text-3xl font-bold text-white mb-1">The Adviser Opportunity</h2>
      <p className="text-lg text-cyan-400">One-Meeting SOA: From 3 weeks to 55 minutes</p>
    </div>
    <GlowCard className="p-4 mb-4" highlight>
      <div className="grid grid-cols-6 gap-2">
        {[
          { step: 1, title: 'Client arrives', time: '10 min' },
          { step: 2, title: 'Fact-find', time: '15 min' },
          { step: 3, title: 'AI generates', time: '5 min' },
          { step: 4, title: 'Adviser reviews', time: '10 min' },
          { step: 5, title: 'Client signs', time: '5 min' },
          { step: 6, title: 'Done!', time: '10 min' },
        ].map((item) => (
          <div key={item.step} className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 text-center">
            <div className="w-8 h-8 mx-auto rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm mb-1">
              {item.step}
            </div>
            <h4 className="font-bold text-white text-xs">{item.title}</h4>
            <span className="text-cyan-400 font-semibold text-xs">{item.time}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-center">
        <p className="text-base text-white">
          Total: <span className="text-cyan-400 font-bold text-xl">55 minutes</span> vs. 3 weeks
        </p>
      </div>
    </GlowCard>
    <div className="flex-1 grid grid-cols-2 gap-4">
      <GlowCard className="p-4">
        <h3 className="text-lg font-bold text-red-400 mb-2 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" /> Current Reality
        </h3>
        <ul className="space-y-1.5 text-sm">
          {['3-week SOA turnaround', '$2-4K/month software', 'Paraplanner bottleneck'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-white">
              <X className="w-4 h-4 text-red-400 flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-4" highlight>
        <h3 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5" /> With VerafyAI
        </h3>
        <ul className="space-y-1.5 text-sm">
          {['SOA in one meeting', '3x more clients/day', 'No paraplanner needed'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
  </div>
);

// Slide 6: Market
const MarketSlide = () => (
  <div className="h-full flex flex-col p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <h2 className="text-4xl font-bold text-white mb-4 text-center">Market Opportunity</h2>
    <div className="text-center mb-6">
      <div className="text-6xl font-bold text-cyan-400 mb-1">$756M</div>
      <p className="text-lg text-slate-300">Total Addressable Market (annually)</p>
    </div>
    <div className="grid grid-cols-3 gap-6 mb-6">
      {[
        { value: '9M+', label: 'Australians own shares', color: '#22d3ee' },
        { value: '15K', label: 'Financial advisers', color: '#3b82f6' },
        { value: '$6B', label: 'Industry revenue', color: '#a855f7' },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-4xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
          <div className="text-sm text-slate-300">{stat.label}</div>
        </div>
      ))}
    </div>
    <div className="flex-1 grid grid-cols-2 gap-4">
      <GlowCard className="p-4">
        <h3 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
          <Users className="w-5 h-5" /> Retail TAM
        </h3>
        <p className="text-base text-white">9M × 5% × $14/mo = <span className="text-2xl font-bold text-cyan-400">$75.6M</span>/year</p>
      </GlowCard>
      <GlowCard className="p-4">
        <h3 className="text-lg font-bold text-purple-400 mb-2 flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> Adviser TAM
        </h3>
        <p className="text-base text-white">15K × 30% × $1.5K/mo = <span className="text-2xl font-bold text-purple-400">$81M</span>/year</p>
      </GlowCard>
    </div>
  </div>
);

// Slide 7: Traction
const TractionSlide = () => (
  <div className="h-full flex flex-col p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-4">
      <h2 className="text-4xl font-bold text-white mb-1">Traction & Milestones</h2>
      <p className="text-lg text-cyan-400">Built the product before raising</p>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-4">
      <GlowCard className="p-4" highlight>
        <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
          <Rocket className="w-5 h-5" /> What's Live
        </h3>
        <ul className="space-y-2 text-sm">
          {['Platform built (AWS, React, Claude AI)', '$150K pre-seed deployed', '$25K AWS credits', 'CGT engine complete', 'Beta users onboarded', '2 patents lodged'].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-white">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-4">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-400" /> Timeline
        </h3>
        <ul className="space-y-2 text-sm">
          {[
            { date: 'Feb 15', text: 'Beta launch', done: true },
            { date: 'Apr 1', text: 'Public launch', target: true },
            { date: 'Jul 2026', text: 'Trading platform' },
            { date: 'Q4 2026', text: 'Advisor platform beta' },
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-16 text-blue-400 font-semibold flex-shrink-0 text-xs">{item.date}</span>
              <span className={item.target ? 'text-cyan-400 font-semibold' : 'text-white'}>{item.text}</span>
              {item.done && <CheckCircle2 className="w-4 h-4 text-green-400" />}
              {item.target && <Target className="w-4 h-4 text-cyan-400" />}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
  </div>
);

// Slide 8: Business Model
const BusinessModelSlide = () => (
  <div className="h-full flex flex-col p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-4">
      <h2 className="text-4xl font-bold text-white mb-1">Business Model</h2>
      <p className="text-lg text-cyan-400">Three Revenue Streams</p>
    </div>
    <div className="grid grid-cols-3 gap-4 mb-4">
      <GlowCard className="p-4" highlight>
        <h3 className="text-base font-bold text-cyan-400 mb-2 flex items-center gap-1">
          <Brain className="w-4 h-4" /> Phase 1: SaaS
        </h3>
        <div className="space-y-1 text-sm text-white">
          <p>Starter: $5/mo | Standard: $10/mo | Pro: $20/mo</p>
        </div>
      </GlowCard>
      <GlowCard className="p-4">
        <h3 className="text-base font-bold text-blue-400 mb-2 flex items-center gap-1">
          <LineChart className="w-4 h-4" /> Phase 2: Trading
        </h3>
        <p className="text-sm text-white">Brokerage fees, Premium features</p>
      </GlowCard>
      <GlowCard className="p-4">
        <h3 className="text-base font-bold text-purple-400 mb-2 flex items-center gap-1">
          <FileText className="w-4 h-4" /> Phase 3: Adviser
        </h3>
        <p className="text-sm text-white font-bold">$1,500-$4,000/mo per practice</p>
      </GlowCard>
    </div>
    <GlowCard className="p-4">
      <h3 className="text-lg font-bold text-white mb-3">Unit Economics</h3>
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: 'CAC', value: '$25' },
          { label: 'LTV', value: '$360+' },
          { label: 'LTV:CAC', value: '14:1', highlight: true },
          { label: 'Margin', value: '85%+' },
        ].map((item, i) => (
          <div key={i} className={`p-3 rounded-lg text-center ${item.highlight ? 'bg-cyan-500/20 border-2 border-cyan-500/50' : 'bg-slate-800/50 border border-slate-700'}`}>
            <div className="text-xs text-slate-400 mb-1">{item.label}</div>
            <div className={`text-xl font-bold ${item.highlight ? 'text-cyan-400' : 'text-white'}`}>{item.value}</div>
          </div>
        ))}
      </div>
    </GlowCard>
  </div>
);

// Slide 9: Financial Projections
const FinancialProjectionsSlide = () => (
  <div className="h-full flex flex-col p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-1">Financial Projections</h2>
      <p className="text-lg text-slate-300">Conservative path to profitability</p>
    </div>
    <GlowCard className="flex-1 p-4">
      <div className="rounded-lg overflow-hidden border border-cyan-500/20 h-full">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
              <th className="p-3 text-left text-white font-semibold">Metric</th>
              <th className="p-3 text-center text-slate-300">2026</th>
              <th className="p-3 text-center text-slate-300">2027</th>
              <th className="p-3 text-center text-slate-300">2028</th>
              <th className="p-3 text-center text-cyan-400 font-bold">2029</th>
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
                <td className="p-3 font-semibold text-white">{row.metric}</td>
                <td className="p-3 text-center text-slate-300">{row.y1}</td>
                <td className="p-3 text-center text-slate-300">{row.y2}</td>
                <td className="p-3 text-center text-slate-300">{row.y3}</td>
                <td className="p-3 text-center text-cyan-400 font-bold bg-cyan-500/10">{row.y4}</td>
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
  <div className="h-full flex flex-col p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-1">The Team</h2>
      <p className="text-lg text-slate-300">Proven Founders</p>
    </div>
    <div className="flex-1 grid grid-cols-3 gap-4">
      <GlowCard className="p-4" highlight>
        <div className="text-center mb-2">
          <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-2 text-lg font-bold text-white">AV</div>
          <h3 className="text-base font-bold text-white">Amit Vohra</h3>
          <p className="text-cyan-400 text-sm">Co-Founder & CEO</p>
        </div>
        <div className="text-xs">
          <p className="text-slate-400 mb-1 flex items-center gap-1"><GraduationCap className="w-3 h-3" /> PhD, MBA, GAICD</p>
          <ul className="space-y-0.5 text-slate-300">
            <li className="flex items-start gap-1"><CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5" /> CEO GPRA: 500% growth</li>
            <li className="flex items-start gap-1"><CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5" /> Raised $10M</li>
          </ul>
        </div>
      </GlowCard>
      <GlowCard className="p-4" highlight>
        <div className="text-center mb-2">
          <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-2 text-lg font-bold text-white">NA</div>
          <h3 className="text-base font-bold text-white">Nupur Agarwal</h3>
          <p className="text-purple-400 text-sm">Co-Founder & CTO</p>
        </div>
        <div className="text-xs">
          <p className="text-slate-400 mb-1 flex items-center gap-1"><GraduationCap className="w-3 h-3" /> MBA + Double Masters</p>
          <ul className="space-y-0.5 text-slate-300">
            <li className="flex items-start gap-1"><CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5" /> Ex-GBST/Xplan</li>
            <li className="flex items-start gap-1"><CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5" /> Ex-JP Morgan</li>
          </ul>
        </div>
      </GlowCard>
      <GlowCard className="p-4" highlight>
        <div className="text-center mb-2">
          <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-2 text-lg font-bold text-white">SR</div>
          <h3 className="text-base font-bold text-white">Subodh Ramugade</h3>
          <p className="text-orange-400 text-sm">Head of AI/ML</p>
        </div>
        <div className="text-xs">
          <p className="text-slate-400 mb-1 flex items-center gap-1"><GraduationCap className="w-3 h-3" /> MIT Deep Learning</p>
          <ul className="space-y-0.5 text-slate-300">
            <li className="flex items-start gap-1"><CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5" /> Ex-Amazon</li>
            <li className="flex items-start gap-1"><CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5" /> Ex-JP Morgan</li>
          </ul>
        </div>
      </GlowCard>
    </div>
  </div>
);

// Slide 11: The Ask
const AskSlide = () => (
  <div className="h-full flex flex-col p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-3">The Ask</h2>
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-500/50">
        <DollarSign className="w-6 h-6 text-cyan-400" />
        <span className="text-2xl font-bold text-cyan-400">$1M Seed @ $10M Pre-Money</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <GlowCard className="p-4">
        <h3 className="text-base font-bold text-white mb-3">Use of Funds</h3>
        {[
          { label: 'Product', pct: 40, color: '#22d3ee' },
          { label: 'Growth', pct: 30, color: '#3b82f6' },
          { label: 'Runway', pct: 30, color: '#a855f7' },
        ].map((item, i) => (
          <div key={i} className="mb-2">
            <div className="flex justify-between text-sm text-white mb-1">
              <span>{item.label}</span>
              <span className="text-cyan-400 font-bold">{item.pct}%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
            </div>
          </div>
        ))}
      </GlowCard>
      <GlowCard className="p-4" highlight>
        <h3 className="text-base font-bold text-cyan-400 mb-3">Return Scenarios</h3>
        <div className="space-y-2 text-sm">
          {[
            { s: 'Conservative', v: '$60M', m: '6x', r: '$600K' },
            { s: 'Base Case', v: '$110M', m: '11x', r: '$1.1M' },
            { s: 'Aggressive', v: '$220M', m: '22x', r: '$2.2M' },
          ].map((row, i) => (
            <div key={i} className="flex justify-between text-white">
              <span>{row.s}</span>
              <span className={i === 2 ? 'text-green-400 font-bold' : i === 1 ? 'text-cyan-400 font-bold' : ''}>{row.m}</span>
              <span className={i === 2 ? 'text-green-400 font-bold' : 'text-cyan-400 font-bold'}>{row.r}</span>
            </div>
          ))}
        </div>
      </GlowCard>
    </div>
  </div>
);

// Slide 12: Why Now
const WhyNowSlide = () => (
  <div className="h-full flex flex-col p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-1">Why Now?</h2>
      <p className="text-lg text-slate-300">Five forces converging</p>
    </div>
    <div className="flex-1 grid grid-cols-5 gap-3">
      {[
        { icon: Cpu, title: 'AI Maturity', desc: 'LLMs for finance', color: 'cyan' },
        { icon: Shield, title: 'Regulatory', desc: 'ASIC tailwind', color: 'blue' },
        { icon: Users, title: 'Demographics', desc: 'Digital-first', color: 'purple' },
        { icon: Building2, title: 'Incumbent', desc: 'Legacy fatigue', color: 'orange' },
        { icon: TrendingUp, title: 'Post-COVID', desc: '2.5M new investors', color: 'green' },
      ].map((item, i) => (
        <GlowCard key={i} className="p-3 text-center">
          <div className={`w-10 h-10 mx-auto rounded-lg bg-${item.color}-500/20 flex items-center justify-center mb-2`}>
            <item.icon className={`w-5 h-5 text-${item.color}-400`} />
          </div>
          <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
          <p className="text-xs text-slate-400">{item.desc}</p>
        </GlowCard>
      ))}
    </div>
  </div>
);

// Slide 13: Vision
const VisionSlide = () => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10">
    <FloatingParticles />
    <div className="text-center max-w-3xl">
      <h2 className="text-5xl font-bold text-white mb-6">The Vision</h2>
      <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
        The interface between humans and the global financial system
      </p>
      <p className="text-lg text-slate-300 mb-6 italic">
        We will <span className="text-cyan-400 font-semibold">carry risk for the advice</span> delivered through the pattern.
      </p>
      <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 inline-block">
        <p className="text-base text-cyan-400 italic">"Nupur & Amit aren't selling their houses to build another tracker."</p>
      </div>
    </div>
  </div>
);

// Slide 14: Thank You
const ThankYouSlide = () => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="text-center">
      <div className="mb-6">
        <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
          <div className="w-8 h-8 bg-cyan-400 rounded-lg transform rotate-45" />
        </div>
      </div>
      <h1 className="text-6xl font-bold text-white mb-4 leading-none">VerafyAI</h1>
      <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 font-light">
        I am inevitable.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-4 max-w-md mx-auto text-sm">
        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
          <p className="font-bold text-white">Amit Vohra</p>
          <p className="text-cyan-400 text-xs">CEO</p>
          <p className="text-slate-400 text-xs flex items-center justify-center gap-1"><Mail className="w-3 h-3" /> amit.vohra@axientai.au</p>
        </div>
        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
          <p className="font-bold text-white">Nupur Agarwal</p>
          <p className="text-purple-400 text-xs">CTO</p>
          <p className="text-slate-400 text-xs flex items-center justify-center gap-1"><Mail className="w-3 h-3" /> nupur.agarwal@axientai.au</p>
        </div>
      </div>
      <p className="text-xl text-white font-semibold">Thank you. Questions?</p>
    </div>
  </div>
);

const SLIDES = [
  TitleSlide, ProblemSlide, SolutionSlide, ProductRoadmapSlide, AdviserOpportunitySlide,
  MarketSlide, TractionSlide, BusinessModelSlide, FinancialProjectionsSlide, TeamSlide,
  AskSlide, WhyNowSlide, VisionSlide, ThankYouSlide,
];

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export function InvestorVideoPage({ isDark }: InvestorVideoPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(503);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (isFullscreen) {
        const slideWidth = 1200;
        const slideHeight = 675;
        const availableWidth = window.innerWidth - 280;
        const availableHeight = window.innerHeight - 120;
        setScale(Math.min(availableWidth / slideWidth, availableHeight / slideHeight) * 0.95);
      } else {
        const containerWidth = Math.min(window.innerWidth - 300, 1000);
        const containerHeight = Math.min(window.innerHeight - 350, 550);
        setScale(Math.min(containerWidth / 1200, containerHeight / 675));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isFullscreen]);

  useEffect(() => {
    const slideIndex = SLIDE_TIMINGS.findIndex(
      (timing) => currentTime >= timing.start && currentTime < timing.end
    );
    if (slideIndex !== -1 && slideIndex !== currentSlide) {
      setCurrentSlide(slideIndex);
    }
  }, [currentTime, currentSlide]);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  }, []);

  const togglePlay = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
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
    if (e.key === ' ') { e.preventDefault(); togglePlay(); }
    else if (e.key === 'ArrowRight' && currentSlide < SLIDES.length - 1) { e.preventDefault(); goToSlide(currentSlide + 1); }
    else if (e.key === 'ArrowLeft' && currentSlide > 0) { e.preventDefault(); goToSlide(currentSlide - 1); }
    else if (e.key === 'm') toggleMute();
    else if (e.key === 'Escape') setIsFullscreen(false);
    else if (e.key === 'f') setIsFullscreen(prev => !prev);
  }, [togglePlay, currentSlide, goToSlide, toggleMute]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col overflow-hidden">
        <audio ref={audioRef} src="/Vera_Pitch_Full.mp3" preload="auto" onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onEnded={() => setIsPlaying(false)} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
        <div className="flex-1 flex">
          <div className="w-72 h-full bg-gradient-to-b from-slate-950 via-slate-900 to-black relative flex-shrink-0">
            <VeraHologramPresenter isPlaying={isPlaying} />
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <div style={{ width: 1200, height: 675, transform: `scale(${scale})`, transformOrigin: 'center center' }} className="relative shadow-2xl rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="h-full">
                  <CurrentSlideComponent />
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-3 right-3 z-20">
                <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-cyan-500/30 text-slate-300 text-sm">
                  Slide {currentSlide + 1} / {SLIDES.length}
                </div>
              </div>
              {!isPlaying && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex items-center justify-center z-30 bg-black/40">
                  <motion.button type="button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={togglePlay} className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-2xl shadow-cyan-500/50" title="Play" aria-label="Play">
                    <Play className="w-12 h-12 ml-1" />
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full px-6 py-3 bg-slate-900/90 backdrop-blur-md border-t border-cyan-500/20">
          <div className="flex items-center gap-3 mb-2 max-w-4xl mx-auto">
            <span className="text-cyan-400 text-xs font-mono w-10">{formatTime(currentTime)}</span>
            <input type="range" min={0} max={duration || 503} value={currentTime} onChange={handleSeek} aria-label="Video progress" title="Seek" className="flex-1 h-1.5 bg-slate-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full" style={{ background: `linear-gradient(to right, #22d3ee ${(currentTime / (duration || 503)) * 100}%, #334155 ${(currentTime / (duration || 503)) * 100}%)` }} />
            <span className="text-slate-400 text-xs font-mono w-10">{formatTime(duration || 503)}</span>
          </div>
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <button type="button" onClick={togglePlay} className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white" title={isPlaying ? 'Pause' : 'Play'} aria-label={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>
              <button type="button" onClick={() => goToSlide(Math.max(0, currentSlide - 1))} disabled={currentSlide === 0} className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30" title="Previous" aria-label="Previous"><ChevronLeft className="w-5 h-5" /></button>
              <button type="button" onClick={() => goToSlide(Math.min(SLIDES.length - 1, currentSlide + 1))} disabled={currentSlide === SLIDES.length - 1} className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30" title="Next" aria-label="Next"><ChevronRight className="w-5 h-5" /></button>
              <button type="button" onClick={toggleMute} className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700" title={isMuted ? 'Unmute' : 'Mute'} aria-label={isMuted ? 'Unmute' : 'Mute'}>{isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}</button>
            </div>
            <div className="flex items-center gap-1">
              {SLIDES.map((_, i) => (
                <button type="button" key={i} onClick={() => goToSlide(i)} className={`h-1.5 rounded-full transition-all ${i === currentSlide ? 'w-5 bg-gradient-to-r from-cyan-400 to-blue-500' : 'w-1.5 bg-slate-600 hover:bg-slate-500'}`} title={`Go to slide ${i + 1}`} aria-label={`Go to slide ${i + 1}`} />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a href="/VerafyAI_Investor_Pitch.mp4" download className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 text-sm">
                <Download className="w-4 h-4" /> Download
              </a>
              <button type="button" onClick={() => setIsFullscreen(false)} className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700" title="Exit fullscreen"><Minimize2 className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <audio ref={audioRef} src="/Vera_Pitch_Full.mp3" preload="auto" onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onEnded={() => setIsPlaying(false)} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="text-center mb-4">
          <h1 className={`text-2xl md:text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Presentation</span>
          </h1>
          <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Narrated pitch deck • 8:23</p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pb-4">
        <div className="flex justify-center gap-4" style={{ height: `${675 * scale + 20}px` }}>
          {/* Vera on left */}
          <div className="w-64 h-full bg-gradient-to-b from-slate-950 via-slate-900 to-black rounded-lg relative flex-shrink-0 hidden md:block">
            <VeraHologramPresenter isPlaying={isPlaying} />
          </div>

          {/* Slide viewer */}
          <div className="relative" style={{ width: `${1200 * scale}px`, height: `${675 * scale}px` }}>
            <div style={{ width: 1200, height: 675, transform: `scale(${scale})`, transformOrigin: 'top left' }} className="absolute top-0 left-0 shadow-2xl rounded-lg overflow-hidden border border-cyan-500/20">
              <AnimatePresence mode="wait">
                <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="h-full">
                  <CurrentSlideComponent />
                </motion.div>
              </AnimatePresence>
              {!isPlaying && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex items-center justify-center z-30 bg-black/40">
                  <motion.button type="button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={togglePlay} className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-2xl shadow-cyan-500/50" title="Play" aria-label="Play">
                    <Play className="w-10 h-10 ml-1" />
                  </motion.button>
                </motion.div>
              )}
              <button type="button" onClick={() => setIsFullscreen(true)} className="absolute top-3 right-3 p-2 rounded-lg bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-white hover:bg-black/70 z-10" title="Fullscreen (F)"><Maximize2 className="w-4 h-4" /></button>
              <div className="absolute top-3 left-3 z-10">
                <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-cyan-500/30 text-slate-300 text-xs">Slide {currentSlide + 1} / {SLIDES.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col items-center gap-3">
          <div className={`w-full max-w-2xl flex items-center gap-3 px-3 py-2 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-white'} border ${isDark ? 'border-cyan-500/20' : 'border-slate-200'}`}>
            <span className="text-cyan-400 text-xs font-mono w-10">{formatTime(currentTime)}</span>
            <input type="range" min={0} max={duration || 503} value={currentTime} onChange={handleSeek} aria-label="Video progress" title="Seek" className="flex-1 h-1.5 bg-slate-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full" style={{ background: `linear-gradient(to right, #22d3ee ${(currentTime / (duration || 503)) * 100}%, #334155 ${(currentTime / (duration || 503)) * 100}%)` }} />
            <span className={`text-xs font-mono w-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{formatTime(duration || 503)}</span>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => goToSlide(Math.max(0, currentSlide - 1))} disabled={currentSlide === 0} className={`p-2 rounded-full border transition-all disabled:opacity-30 ${isDark ? 'bg-slate-800 border-cyan-500/30 text-white hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'}`} title="Previous" aria-label="Previous"><ChevronLeft className="w-5 h-5" /></button>
            <button type="button" onClick={togglePlay} className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50" title={isPlaying ? 'Pause' : 'Play'} aria-label={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </button>
            <button type="button" onClick={() => goToSlide(Math.min(SLIDES.length - 1, currentSlide + 1))} disabled={currentSlide === SLIDES.length - 1} className={`p-2 rounded-full border transition-all disabled:opacity-30 ${isDark ? 'bg-slate-800 border-cyan-500/30 text-white hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'}`} title="Next" aria-label="Next"><ChevronRight className="w-5 h-5" /></button>
            <button type="button" onClick={toggleMute} className={`p-2 rounded-full border transition-all ${isDark ? 'bg-slate-800 border-cyan-500/30 text-white hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'}`} title={isMuted ? 'Unmute' : 'Mute'} aria-label={isMuted ? 'Unmute' : 'Mute'}>{isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}</button>
            <a href="/VerafyAI_Investor_Pitch.mp4" download className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm ${isDark ? 'bg-slate-800 border-cyan-500/30 text-white hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'}`}>
              <Download className="w-4 h-4" /> Download
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            {SLIDES.map((_, i) => (
              <button type="button" key={i} onClick={() => goToSlide(i)} className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-6 bg-gradient-to-r from-cyan-400 to-blue-500' : `w-2 ${isDark ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-300 hover:bg-slate-400'}`}`} title={`Go to slide ${i + 1}`} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
          <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Space: play/pause • Arrows: navigate • M: mute • F: fullscreen</p>
        </div>
      </div>
    </div>
  );
}
