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
  Award,
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
  Pause,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Mail,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface InvestorVideoPageProps {
  isDark: boolean;
}

// Slide timing in seconds - total ~503 seconds (8:23)
const SLIDE_TIMINGS = [
  { start: 0, end: 35 },      // Slide 1: Title (0:00 - 0:35)
  { start: 35, end: 85 },     // Slide 2: Problem (0:35 - 1:25)
  { start: 85, end: 145 },    // Slide 3: Solution (1:25 - 2:25)
  { start: 145, end: 200 },   // Slide 4: Vera (2:25 - 3:20)
  { start: 200, end: 255 },   // Slide 5: Regulatory (3:20 - 4:15)
  { start: 255, end: 310 },   // Slide 6: Xplan Lite (4:15 - 5:10)
  { start: 310, end: 360 },   // Slide 7: Market (5:10 - 6:00)
  { start: 360, end: 405 },   // Slide 8: Traction (6:00 - 6:45)
  { start: 405, end: 445 },   // Slide 9: Business Model (6:45 - 7:25)
  { start: 445, end: 475 },   // Slide 10: The Ask (7:25 - 7:55)
  { start: 475, end: 495 },   // Slide 11: Vision (7:55 - 8:15)
  { start: 495, end: 503 },   // Slide 12: Thank You (8:15 - 8:23)
];

// Vera Hologram Presenter Component
const VeraHologramPresenter = ({ isPlaying }: { isPlaying: boolean }) => (
  <div className="absolute bottom-0 left-0 z-20 pointer-events-none" style={{ width: '320px', height: '400px' }}>
    {/* Holographic base platform */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-4">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent rounded-full blur-sm" />
      <div className="absolute inset-x-4 inset-y-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent rounded-full" />
      {/* Scanning line effect */}
      <motion.div
        className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </div>

    {/* Hologram projection beams */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-40">
      <motion.div
        className="absolute bottom-0 left-0 w-1 h-64 origin-bottom"
        style={{
          background: 'linear-gradient(to top, rgba(34, 211, 238, 0.4), transparent)',
          transform: 'rotate(-15deg)',
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-1 h-64 origin-bottom"
        style={{
          background: 'linear-gradient(to top, rgba(34, 211, 238, 0.4), transparent)',
          transform: 'rotate(15deg)',
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
    </div>

    {/* Main hologram container */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-80 overflow-hidden rounded-lg">
      {/* Holographic effect overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Scanlines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.1) 2px, rgba(34, 211, 238, 0.1) 4px)',
          }}
        />
        {/* Moving scan bar */}
        <motion.div
          className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
          animate={{ y: [-80, 320, -80] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        {/* Edge glow */}
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
            transform: 'scale(2)',
            transformOrigin: 'center center',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Bottom fade to transparent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(15, 23, 42, 1), transparent)',
        }}
      />
    </div>

    {/* Floating particles around hologram */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
        style={{
          left: `${30 + Math.random() * 40}%`,
          bottom: `${20 + Math.random() * 60}%`,
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
      className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full border border-cyan-500/40"
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

// All slide components (simplified for video - no animations that depend on mount)
const TitleSlide = () => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-slate-950/0" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
    </div>
    <div className="relative z-10 text-center">
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="relative">
          <div className="w-24 h-24 bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-400 rounded-lg transform rotate-45" />
          </div>
        </div>
      </div>
      <h1 className="text-[140px] font-bold mb-6 leading-none">
        <span className="text-white">Verafy</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI</span>
      </h1>
      <p className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic mb-6 font-light">
        The interface between finance and humans
      </p>
      <p className="text-3xl text-slate-300 mb-20">
        Where <span className="text-cyan-400 font-bold">9 million</span> investors meet institutional intelligence
      </p>
      <div className="text-2xl text-slate-400 space-y-2">
        <p className="text-white">Amit Vohra | Co-founder & CEO</p>
        <p>amit@verafyai.com | verafyai.com.au</p>
      </div>
    </div>
    <div className="absolute top-10 right-16">
      <div className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-bold text-2xl shadow-2xl shadow-cyan-500/40">
        $1M Seed @ $10M Pre-Money
      </div>
    </div>
  </div>
);

const ProblemSlide = () => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
    <div className="mb-14">
      <h2 className="text-7xl font-bold text-white mb-4">
        Two Markets. <span className="text-red-400">One Broken System.</span>
      </h2>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-12 mb-10">
      <GlowCard className="p-10" highlight>
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-4xl font-bold text-cyan-400">9 Million Retail Investors</h3>
        </div>
        <ul className="space-y-5">
          {[
            { icon: AlertTriangle, text: 'Making decisions without institutional tools' },
            { icon: FileText, text: 'Spreadsheets, basic trackers, or nothing' },
            { icon: TrendingDown, text: 'No real-time tax optimisation' },
            { icon: X, text: 'No personalised guidance' },
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-2xl text-white">
              <item.icon className="w-7 h-7 text-red-400 flex-shrink-0" />
              {item.text}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-10">
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-4xl font-bold text-white">15,000 Financial Advisers</h3>
        </div>
        <ul className="space-y-5">
          {[
            { icon: Lock, text: 'Trapped in legacy software (Xplan)' },
            { icon: DollarSign, text: '$2,000-$4,000/month for complexity' },
            { icon: Clock, text: '3-week SOA turnarounds' },
            { icon: AlertTriangle, text: 'Hours on paperwork, minutes with clients' },
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-2xl text-white">
              <item.icon className="w-7 h-7 text-orange-400 flex-shrink-0" />
              {item.text}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
    <div className="p-8 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30">
      <p className="text-3xl text-white text-center">
        The gap between investors and advisers has never been wider.
      </p>
      <p className="text-2xl text-cyan-400 italic text-center mt-3">
        The industry is ripe for disruption.
      </p>
    </div>
  </div>
);

const SolutionSlide = () => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
    <div className="mb-12 text-center">
      <h2 className="text-7xl font-bold text-white mb-4">
        The Solution: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Three Phases</span>
      </h2>
    </div>
    <div className="flex-1 grid grid-cols-3 gap-10">
      <GlowCard className="p-10 flex flex-col" highlight>
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-5">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-bold text-xl">NOW - LIVE</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Portfolio Intelligence</h3>
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/40">
            <Brain className="w-10 h-10 text-white" />
          </div>
        </div>
        <ul className="space-y-4 flex-1">
          {['Connect broker → real-time analysis', 'Tax optimisation, rebalancing', 'Plain English actions', '$5-$20/month'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-xl text-white">
              <Check className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-10 flex flex-col">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500/20 border border-blue-500/30 mb-5">
            <Calendar className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-bold text-xl">JULY 2026</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Trading App</h3>
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
            <LineChart className="w-10 h-10 text-white" />
          </div>
        </div>
        <ul className="space-y-4 flex-1">
          {['Standalone app, separate entity', 'IBKR brokerage gateway', 'AWS enterprise deployment', 'Chinese wall maintained'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-xl text-white">
              <Check className="w-6 h-6 text-blue-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-10 flex flex-col">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-5">
            <Rocket className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 font-bold text-xl">2027</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Xplan Lite</h3>
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <FileText className="w-10 h-10 text-white" />
          </div>
        </div>
        <ul className="space-y-4 flex-1">
          {['One-meeting SOA generation', 'Conversational fact-find', 'No paraplanners needed', '$1,500-$4,000/month'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-xl text-white">
              <Check className="w-6 h-6 text-purple-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
    <div className="mt-10 text-center">
      <div className="inline-flex items-center gap-5 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30">
        <Zap className="w-8 h-8 text-cyan-400" />
        <span className="text-3xl font-bold text-white">All three phases live by Christmas 2026</span>
        <Zap className="w-8 h-8 text-purple-400" />
      </div>
    </div>
  </div>
);

const VeraSlide = () => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
    <div className="mb-12">
      <h2 className="text-6xl font-bold text-white mb-3">
        Vera: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Bloomberg Terminal meets ChatGPT</span>
      </h2>
      <p className="text-3xl text-cyan-400 italic">For the 9 million, not the 9 thousand</p>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-14">
      <GlowCard className="p-10">
        <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
          <Brain className="w-10 h-10 text-cyan-400" />
          What Vera Does
        </h3>
        <ul className="space-y-5">
          {[
            { icon: LineChart, text: 'Real-time portfolio analysis' },
            { icon: TrendingDown, text: 'Tax-loss harvesting alerts' },
            { icon: DollarSign, text: 'Dividend tracking & forecasting' },
            { icon: Shield, text: 'Risk exposure mapping' },
            { icon: Target, text: 'Rebalancing recommendations' },
            { icon: MessageSquare, text: 'All in plain English - not charts' },
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-2xl text-white">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              {item.text}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-10">
        <h3 className="text-3xl font-bold text-white mb-8">Competitive Comparison</h3>
        <div className="rounded-xl overflow-hidden border border-cyan-500/20">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
                <th className="p-5 text-left text-xl text-white font-semibold">Feature</th>
                <th className="p-5 text-center text-xl text-slate-300 font-semibold">Sharesight</th>
                <th className="p-5 text-center text-xl text-slate-300 font-semibold">Empower</th>
                <th className="p-5 text-center text-xl text-cyan-400 font-bold">VerafyAI</th>
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
                <tr key={i} className="border-t border-slate-700">
                  <td className="p-5 text-xl text-white">{feature}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowCard>
    </div>
    <div className="mt-10 text-center">
      <p className="text-3xl font-bold">
        <span className="text-slate-400">Not charts that make you feel smart.</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Actions that make you money.</span>
      </p>
    </div>
  </div>
);

const RegulatorySlide = () => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
    <div className="mb-10">
      <h2 className="text-6xl font-bold text-white mb-3">
        Chinese Walls: <span className="text-orange-400">Regulatory Survival</span>
      </h2>
      <p className="text-2xl text-slate-300">
        The smarts live in Portfolio. The trades live in Trading. No AI recommendations crossing the wall.
      </p>
    </div>
    <div className="flex-1 flex items-center justify-center gap-6">
      <GlowCard className="flex-1 p-10 h-[450px]" highlight>
        <h3 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center gap-4">
          <Brain className="w-10 h-10" />
          PORTFOLIO INTELLIGENCE
        </h3>
        <ul className="space-y-5">
          {['AI-powered analysis', 'Tax optimisation insights', 'Risk assessment', 'Information only', 'No AFSL required'].map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-2xl text-white">
              <CheckCircle2 className="w-7 h-7 text-cyan-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <div className="w-24 h-[450px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-red-500 to-orange-500 rounded-lg opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="transform -rotate-90 text-white font-bold text-3xl tracking-[0.3em] whitespace-nowrap">
            WALL
          </div>
        </div>
      </div>
      <GlowCard className="flex-1 p-10 h-[450px]">
        <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
          <LineChart className="w-10 h-10 text-slate-400" />
          TRADING APP
        </h3>
        <ul className="space-y-5">
          {['Clean execution only', 'No AI recommendations', 'IBKR gateway', 'Separate entity', 'Standard broker licence'].map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-2xl text-white">
              <Check className="w-7 h-7 text-slate-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
    <div className="mt-10 p-8 rounded-xl bg-slate-800/50 border border-slate-700">
      <p className="text-2xl text-white text-center italic">
        "Anyone building AI-driven trading recommendations without an AFSL is building a <span className="text-red-400 font-semibold">time bomb</span>.
        <span className="text-cyan-400 font-semibold"> We are not that.</span>"
      </p>
    </div>
  </div>
);

const XplanLiteSlide = () => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
    <div className="mb-10">
      <h2 className="text-6xl font-bold text-white mb-3">
        Xplan Lite: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">One Meeting. Job Done.</span>
      </h2>
      <p className="text-2xl text-slate-300">
        Not a killer. A simplifier. For the 60-70% who don't need enterprise complexity.
      </p>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-14">
      <div className="flex flex-col gap-4">
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
            <div className={`p-5 rounded-xl flex items-center gap-5 ${
              step.highlight
                ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/50'
                : 'bg-slate-800/50 border border-slate-700'
            }`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${step.highlight ? 'bg-purple-500' : 'bg-slate-700'}`}>
                <step.icon className={`w-6 h-6 ${step.highlight ? 'text-white' : 'text-slate-300'}`} />
              </div>
              <span className={`text-2xl ${step.highlight ? 'text-white font-semibold' : 'text-slate-200'}`}>
                {step.label}
              </span>
            </div>
            {i < 6 && (
              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-slate-500" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="space-y-10">
        <GlowCard className="p-8">
          <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center gap-4">
            <X className="w-10 h-10" />
            Current Industry
          </h3>
          <ul className="space-y-4">
            {['3-week SOA turnaround', 'Send to paraplanners', '$4,000/month platforms', '80% features unused'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-2xl text-slate-300">
                <X className="w-7 h-7 text-red-400/70 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </GlowCard>
        <GlowCard className="p-8" highlight>
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-4">
            <CheckCircle2 className="w-10 h-10" />
            With Xplan Lite
          </h3>
          <ul className="space-y-4">
            {[
              { text: '55 minutes total', highlight: true },
              { text: 'No paraplanners needed' },
              { text: '$1,500-$4,000/month' },
              { text: 'Everything they actually need' },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-2xl text-white">
                <Check className="w-7 h-7 text-cyan-400 flex-shrink-0" />
                <span className={item.highlight ? 'text-cyan-400 font-bold' : ''}>{item.text}</span>
              </li>
            ))}
          </ul>
        </GlowCard>
      </div>
    </div>
  </div>
);

const MarketSlide = () => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
    <h2 className="text-7xl font-bold text-white mb-14 text-center">Market Opportunity</h2>
    <div className="grid grid-cols-3 gap-10 mb-14">
      {[
        { value: '9M+', label: 'Australians own shares/ETFs', color: '#22d3ee' },
        { value: '15K', label: 'Financial advisers in AU', color: '#3b82f6' },
        { value: '$6B', label: 'Advice industry revenue', color: '#a855f7' },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-8xl font-bold mb-3" style={{ color: stat.color }}>{stat.value}</div>
          <div className="text-2xl text-slate-300">{stat.label}</div>
        </div>
      ))}
    </div>
    <div className="flex-1 grid grid-cols-2 gap-10">
      <GlowCard className="p-10">
        <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-4">
          <Users className="w-10 h-10" />
          Phase 1 TAM: Retail
        </h3>
        <p className="text-2xl text-white mb-6">
          9M × $15/mo avg = <span className="text-5xl font-bold text-cyan-400">$1.6B</span> potential
        </p>
        <div className="space-y-3 text-xl text-slate-300">
          <p className="flex items-center gap-3"><TrendingUp className="w-6 h-6 text-green-400" /> 2.5M new investors since COVID</p>
          <p className="flex items-center gap-3"><TrendingUp className="w-6 h-6 text-green-400" /> 61% of Millennials now invest</p>
        </div>
      </GlowCard>
      <GlowCard className="p-10">
        <h3 className="text-3xl font-bold text-purple-400 mb-6 flex items-center gap-4">
          <Briefcase className="w-10 h-10" />
          Phase 3 TAM: Advisers
        </h3>
        <p className="text-2xl text-white mb-6">
          15K × $3K/mo = <span className="text-5xl font-bold text-purple-400">$540M</span>/year
        </p>
        <div className="space-y-3 text-xl text-slate-300">
          <p className="flex items-center gap-3"><DollarSign className="w-6 h-6 text-orange-400" /> Average practice pays $2-4K/mo</p>
          <p className="flex items-center gap-3"><AlertTriangle className="w-6 h-6 text-orange-400" /> for software they barely use</p>
        </div>
      </GlowCard>
    </div>
    <div className="mt-10 text-center">
      <p className="text-3xl font-bold">
        <span className="text-slate-400">We start with the millions.</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">We scale to the thousands.</span>
      </p>
    </div>
  </div>
);

const TractionSlide = () => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
    <h2 className="text-7xl font-bold text-white mb-12">Traction & Team</h2>
    <div className="flex-1 grid grid-cols-3 gap-10">
      <GlowCard className="p-8" highlight>
        <h3 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center gap-4">
          <Rocket className="w-10 h-10" />
          What's Live
        </h3>
        <ul className="space-y-5">
          {['Platform built (AWS, React, Claude AI)', '$150K pre-seed raised', 'Beta waitlist at capacity', '2 patents lodged', 'IBKR integration ready'].map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-xl text-white">
              <CheckCircle2 className="w-7 h-7 text-cyan-400 mt-1 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-8">
        <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
          <Calendar className="w-10 h-10 text-blue-400" />
          Timeline
        </h3>
        <ul className="space-y-5 text-xl">
          {[
            { date: 'Feb 15', text: 'Beta launch' },
            { date: 'Apr 1', text: 'Public launch' },
            { date: 'Jun 30', text: 'Tax/reporting (EOFY)' },
            { date: 'Jul', text: 'Trading app (IBKR)' },
            { date: '2027', text: 'Xplan Lite pilot' },
            { date: 'Christmas', text: 'All phases live', highlight: true },
          ].map((item, i) => (
            <li key={i} className={`flex items-center gap-4 ${item.highlight ? 'text-cyan-400 font-bold' : 'text-white'}`}>
              <span className="w-24 text-blue-400 font-semibold flex-shrink-0">{item.date}:</span>
              {item.text}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-8">
        <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
          <Users className="w-10 h-10 text-purple-400" />
          Team
        </h3>
        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
            <h4 className="text-2xl font-bold text-white mb-2">Amit Vohra - CEO</h4>
            <p className="text-lg text-slate-400">PhD, MBA, GAICD</p>
            <p className="text-lg text-cyan-400">Ex-CEO GPRA (500% revenue growth)</p>
            <p className="text-lg text-slate-400">Chairman GP2U</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
            <h4 className="text-2xl font-bold text-white mb-2">Nupur Agarwal - CTO</h4>
            <p className="text-lg text-slate-400">MBA + Double Masters</p>
            <p className="text-lg text-cyan-400">Ex-GBST | Ex-JP Morgan (7 yrs)</p>
            <p className="text-lg text-slate-400">Headhunted by Xplan</p>
          </div>
        </div>
      </GlowCard>
    </div>
  </div>
);

const BusinessModelSlide = () => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
    <div className="mb-10">
      <h2 className="text-7xl font-bold text-white mb-3">Business Model</h2>
      <p className="text-3xl text-cyan-400 font-semibold">Three Revenue Streams</p>
    </div>
    <div className="grid grid-cols-3 gap-8 mb-10">
      <GlowCard className="p-8" highlight>
        <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
          <Brain className="w-8 h-8" />
          Phase 1: SaaS
        </h3>
        <div className="space-y-3 text-xl text-white mb-6">
          <p>Starter: <span className="font-bold">$5/mo</span></p>
          <p>Standard: <span className="font-bold">$10/mo</span></p>
          <p>Pro: <span className="font-bold">$20/mo</span></p>
        </div>
        <div className="p-4 rounded-lg bg-orange-500/20 border border-orange-500/30">
          <p className="text-orange-400 font-semibold text-lg flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Founding: 50% off for life
          </p>
        </div>
      </GlowCard>
      <GlowCard className="p-8">
        <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
          <LineChart className="w-8 h-8" />
          Phase 2: Trading
        </h3>
        <div className="space-y-3 text-xl text-white">
          <p>Brokerage fees</p>
          <p>Premium features</p>
          <p>Standalone entity</p>
          <p className="text-slate-400 italic">No advice liability</p>
        </div>
      </GlowCard>
      <GlowCard className="p-8">
        <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
          <FileText className="w-8 h-8" />
          Phase 3: Adviser
        </h3>
        <div className="space-y-3 text-xl text-white">
          <p className="font-bold">$1,500-$4,000/mo per practice</p>
          <p>Implementation fees</p>
          <p>Data/compliance add-ons</p>
        </div>
      </GlowCard>
    </div>
    <GlowCard className="p-8">
      <h3 className="text-3xl font-bold text-white mb-6">Unit Economics</h3>
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'CAC', value: '$25', highlight: false },
          { label: 'LTV', value: '$360+', highlight: false },
          { label: 'LTV:CAC', value: '14:1', highlight: true },
          { label: 'Payback', value: '2 months', highlight: false },
        ].map((item, i) => (
          <div key={i} className={`p-6 rounded-xl text-center ${item.highlight ? 'bg-cyan-500/20 border-2 border-cyan-500/50' : 'bg-slate-800/50 border border-slate-700'}`}>
            <div className="text-xl text-slate-400 mb-2">{item.label}</div>
            <div className={`text-4xl font-bold ${item.highlight ? 'text-cyan-400' : 'text-white'}`}>{item.value}</div>
          </div>
        ))}
      </div>
    </GlowCard>
    <div className="mt-8 text-center">
      <p className="text-2xl font-bold">
        <span className="text-cyan-400">High margin SaaS.</span>{' '}
        <span className="text-blue-400">Global scale.</span>{' '}
        <span className="text-purple-400">Defensible IP.</span>
      </p>
    </div>
  </div>
);

const AskSlide = () => (
  <div className="h-full flex flex-col p-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-cyan-500/15 rounded-full blur-[120px]" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
    <div className="mb-12">
      <h2 className="text-8xl font-bold text-white mb-6">The Ask</h2>
      <div className="inline-flex items-center gap-5 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-500/50">
        <DollarSign className="w-10 h-10 text-cyan-400" />
        <span className="text-4xl font-bold text-cyan-400">$1M Seed @ $10M Pre-Money</span>
      </div>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-14">
      <GlowCard className="p-10">
        <h3 className="text-3xl font-bold text-white mb-8">Use of Funds</h3>
        <div className="space-y-8">
          {[
            { label: 'Product (Phase 1, 2, 3)', pct: 40, amount: '$400K', color: '#22d3ee' },
            { label: 'Growth & Partnerships', pct: 30, amount: '$300K', color: '#3b82f6' },
            { label: 'Runway & Operations', pct: 30, amount: '$300K', color: '#a855f7' },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-xl text-white mb-3">
                <span>{item.label}</span>
                <span className="font-bold">
                  <span className="text-cyan-400">{item.pct}%</span>{' '}
                  <span className="text-slate-400">{item.amount}</span>
                </span>
              </div>
              <div className="h-5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </GlowCard>
      <GlowCard className="p-10" highlight>
        <h3 className="text-3xl font-bold text-cyan-400 mb-8">What You Get</h3>
        <ul className="space-y-6">
          {[
            'Seat at the table for AU wealth management disruption',
            'Jurisdiction agnostic products → global play',
            'Target markets: Australia, North America, India',
            '2 patents lodged, defensible IP moat',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-2xl text-white">
              <CheckCircle2 className="w-8 h-8 text-cyan-400 mt-1 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
  </div>
);

const VisionSlide = () => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
    <div className="text-center max-w-6xl px-10">
      <h2 className="text-8xl font-bold text-white mb-10">The Vision</h2>
      <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-14">
        The interface between humans and the global financial system
      </p>
      <p className="text-2xl text-slate-300 mb-14 italic leading-relaxed">
        Over the next 3 years, my ability to detect behavioural patterns at an individual and industry level
        will grow to a point that we will <span className="text-cyan-400 font-semibold">carry risk for the advice</span> delivered through the pattern.
      </p>
      <p className="text-3xl text-white mb-14">
        The ecosystem. The infrastructure. <span className="text-cyan-400">The rails that everything else runs on.</span>
      </p>
      <div className="p-8 rounded-xl bg-slate-800/50 border border-slate-700 inline-block">
        <p className="text-2xl text-cyan-400 italic">
          "Nupur & Amit aren't selling their houses to build another tracker."
        </p>
      </div>
    </div>
  </div>
);

const ThankYouSlide = () => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-slate-950/0" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
    </div>
    <div className="text-center relative z-10">
      <div className="mb-10">
        <div className="inline-block relative">
          <div className="w-28 h-28 mx-auto bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
            <div className="w-14 h-14 bg-cyan-400 rounded-lg transform rotate-45" />
          </div>
        </div>
      </div>
      <h1 className="text-[140px] font-bold text-white mb-10 leading-none">VerafyAI</h1>
      <p className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-10 font-light">
        I am inevitable.
      </p>
      <p className="text-2xl text-slate-300 mb-14 italic max-w-3xl mx-auto">
        The only question is whether you will be in the room when I truly arrive.
      </p>
      <div className="space-y-5">
        <div className="flex items-center justify-center gap-10 text-xl text-slate-400">
          <span className="flex items-center gap-3">
            <Mail className="w-6 h-6" />
            amit@verafyai.com
          </span>
          <span className="flex items-center gap-3">
            <Globe className="w-6 h-6" />
            verafyai.com.au
          </span>
        </div>
        <p className="text-4xl text-white font-semibold">Thank you. Questions?</p>
      </div>
    </div>
  </div>
);

const SLIDES = [
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

// Format time as MM:SS
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
  const [audioReady, setAudioReady] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const baseWidth = 1920;
      const baseHeight = 1080;

      if (isFullscreen) {
        // In fullscreen, leave room for controls at bottom
        const scaleX = window.innerWidth / baseWidth;
        const scaleY = (window.innerHeight - 120) / baseHeight;
        setScale(Math.min(scaleX, scaleY) * 0.98);
      } else {
        // For non-fullscreen, scale to fit the container with room for controls
        const containerWidth = Math.min(window.innerWidth - 32, 1400);
        const containerHeight = Math.min(window.innerHeight - 320, 700);
        const scaleX = containerWidth / baseWidth;
        const scaleY = containerHeight / baseHeight;
        setScale(Math.min(scaleX, scaleY));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isFullscreen]);

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
    if (audioRef.current) {
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
    } else if (e.key === 'Escape') {
      setIsFullscreen(false);
    } else if (e.key === 'f') {
      setIsFullscreen(prev => !prev);
    }
  }, [togglePlay, currentSlide, goToSlide, toggleMute]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center overflow-hidden">
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

        {/* Slide container */}
        <div className="flex-1 flex items-center justify-center">
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <CurrentSlideComponent />
              </motion.div>
            </AnimatePresence>

            {/* Vera Hologram Presenter */}
            <VeraHologramPresenter isPlaying={isPlaying} />

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
                <div className="absolute bottom-32 text-white text-2xl font-medium">
                  Click to play narrated pitch
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Video controls */}
        <div className="w-full max-w-5xl px-8 py-4 bg-slate-900/90 backdrop-blur-md border-t border-cyan-500/20">
          {/* Progress bar */}
          <div className="flex items-center gap-4 mb-3">
            <span className="text-cyan-400 text-sm font-mono w-12">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 503}
              value={currentTime}
              onChange={handleSeek}
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
              </button>
              <button
                onClick={() => goToSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => goToSlide(Math.min(SLIDES.length - 1, currentSlide + 1))}
                disabled={currentSlide === SLIDES.length - 1}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all"
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? 'w-8 bg-gradient-to-r from-cyan-400 to-blue-500'
                      : 'w-2 bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-sm">Slide {currentSlide + 1} / {SLIDES.length}</span>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all"
              >
                <Minimize2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
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

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-4">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Presentation</span>
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Narrated pitch deck with audio • 8:23 duration
          </p>
        </div>
      </div>

      {/* Slide viewer - responsive container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-4">
        <div
          className="mx-auto relative"
          style={{
            maxWidth: '1400px',
            height: `${1080 * scale}px`
          }}
        >
          <div
            style={{
              width: 1920,
              height: 1080,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: '50%',
              marginLeft: `${-960 * scale}px`
            }}
            className="shadow-2xl rounded-lg overflow-hidden border border-cyan-500/20"
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

            {/* Vera Hologram Presenter */}
            <VeraHologramPresenter isPlaying={isPlaying} />

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
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
                >
                  <Play className="w-12 h-12 md:w-16 md:h-16 ml-1 md:ml-2" />
                </motion.button>
                <div className="absolute bottom-20 md:bottom-32 text-white text-lg md:text-2xl font-medium text-center px-4">
                  Click to play narrated pitch
                </div>
              </motion.div>
            )}

            {/* Fullscreen button */}
            <button
              onClick={() => setIsFullscreen(true)}
              className="absolute top-4 right-4 p-2 md:p-3 rounded-lg bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-white hover:bg-black/70 z-10"
              title="Enter fullscreen (F)"
            >
              <Maximize2 className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Slide indicator */}
            <div className="absolute top-4 left-4 z-10">
              <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/60 backdrop-blur-sm border border-cyan-500/30 text-slate-300 text-xs md:text-sm">
                Slide {currentSlide + 1} / {SLIDES.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col items-center gap-4">
          {/* Progress bar */}
          <div className={`w-full max-w-3xl flex items-center gap-4 px-4 py-3 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-white'} border ${isDark ? 'border-cyan-500/20' : 'border-slate-200'}`}>
            <span className="text-cyan-400 text-sm font-mono w-12">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 503}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-2 bg-slate-700 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                         [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              style={{
                background: `linear-gradient(to right, #22d3ee ${(currentTime / (duration || 503)) * 100}%, #334155 ${(currentTime / (duration || 503)) * 100}%)`
              }}
            />
            <span className={`text-sm font-mono w-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{formatTime(duration || 503)}</span>
          </div>

          {/* Playback controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => goToSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className={`p-3 rounded-full border transition-all disabled:opacity-30 ${
                isDark
                  ? 'bg-slate-800 border-cyan-500/30 text-white hover:bg-slate-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </button>

            <button
              onClick={() => goToSlide(Math.min(SLIDES.length - 1, currentSlide + 1))}
              disabled={currentSlide === SLIDES.length - 1}
              className={`p-3 rounded-full border transition-all disabled:opacity-30 ${
                isDark
                  ? 'bg-slate-800 border-cyan-500/30 text-white hover:bg-slate-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <button
              onClick={toggleMute}
              className={`p-3 rounded-full border transition-all ${
                isDark
                  ? 'bg-slate-800 border-cyan-500/30 text-white hover:bg-slate-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>

          {/* Slide dots */}
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-3 rounded-full transition-all ${
                  i === currentSlide
                    ? 'w-10 bg-gradient-to-r from-cyan-400 to-blue-500'
                    : `w-3 ${isDark ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-300 hover:bg-slate-400'}`
                }`}
              />
            ))}
          </div>

          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Space to play/pause • Arrow keys to navigate • M to mute • F for fullscreen
          </p>
        </div>
      </div>
    </div>
  );
}
