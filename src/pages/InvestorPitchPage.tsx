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
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Mail,
  Maximize2,
  Minimize2,
} from 'lucide-react';

interface InvestorPitchPageProps {
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

// Glowing card component - cyan/blue scheme
const GlowCard = ({ children, className = '', highlight = false }: { children: React.ReactNode; className?: string; highlight?: boolean }) => (
  <div
    className={`relative rounded-2xl backdrop-blur-sm ${className}`}
    style={{
      background: highlight
        ? 'linear-gradient(135deg, rgba(8, 145, 178, 0.3), rgba(6, 182, 212, 0.2))'
        : 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9))',
      border: highlight ? '2px solid rgba(34, 211, 238, 0.6)' : '1px solid rgba(34, 211, 238, 0.2)',
      boxShadow: highlight
        ? '0 0 50px rgba(34, 211, 238, 0.25), inset 0 1px 0 rgba(255,255,255,0.1)'
        : '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
    }}
  >
    {highlight && (
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse" />
      </div>
    )}
    <div className="relative z-10">{children}</div>
  </div>
);

// All slide components (simplified versions for page display)
const TitleSlide = () => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-slate-950/0" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0" />
    </div>
    <div className="relative z-10 text-center">
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-24 h-24 bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
          <div className="w-12 h-12 bg-cyan-400 rounded-lg transform rotate-45" />
        </div>
      </div>
      <h1 className="text-[120px] font-bold mb-6 leading-none">
        <span className="text-white">Verafy</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI</span>
      </h1>
      <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic mb-6 font-light">
        The interface between finance and humans
      </p>
      <p className="text-2xl text-slate-300 mb-16">
        Where <span className="text-cyan-400 font-bold">9 million</span> investors meet institutional intelligence
      </p>
      <div className="text-xl text-slate-400 space-y-2">
        <p className="text-white">Amit Vohra | Co-founder & CEO</p>
        <p>amit@verafyai.com | verafyai.com.au</p>
      </div>
    </div>
    <div className="absolute top-8 right-12">
      <div className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-bold text-xl shadow-2xl shadow-cyan-500/40">
        $1M Seed @ $10M Pre-Money
      </div>
    </div>
  </div>
);

const ProblemSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-10">
      <h2 className="text-6xl font-bold text-white mb-4">
        Two Markets. <span className="text-red-400">One Broken System.</span>
      </h2>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-10 mb-8">
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
    <div className="p-6 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30">
      <p className="text-2xl text-white text-center">The gap between investors and advisers has never been wider.</p>
      <p className="text-xl text-cyan-400 italic text-center mt-2">The industry is ripe for disruption.</p>
    </div>
  </div>
);

const SolutionSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-10 text-center">
      <h2 className="text-6xl font-bold text-white mb-4">
        The Solution: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Three Phases</span>
      </h2>
    </div>
    <div className="flex-1 grid grid-cols-3 gap-8">
      <GlowCard className="p-8 flex flex-col" highlight>
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-bold text-lg">NOW - LIVE</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Portfolio Intelligence</h3>
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
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
          <h3 className="text-2xl font-bold text-white mb-3">Trading App</h3>
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
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
          <h3 className="text-2xl font-bold text-white mb-3">Xplan Lite</h3>
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
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
    <div className="mt-8 text-center">
      <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30">
        <Zap className="w-7 h-7 text-cyan-400" />
        <span className="text-2xl font-bold text-white">All three phases live by Christmas 2026</span>
        <Zap className="w-7 h-7 text-purple-400" />
      </div>
    </div>
  </div>
);

const VeraSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-10">
      <h2 className="text-5xl font-bold text-white mb-2">
        Vera: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Bloomberg Terminal meets ChatGPT</span>
      </h2>
      <p className="text-2xl text-cyan-400 italic">For the 9 million, not the 9 thousand</p>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-10">
      <GlowCard className="p-8">
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
            <li key={i} className="flex items-center gap-3 text-xl text-white">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-cyan-400" />
              </div>
              {item.text}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Competitive Comparison</h3>
        <div className="rounded-xl overflow-hidden border border-cyan-500/20">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
                <th className="p-4 text-left text-lg text-white font-semibold">Feature</th>
                <th className="p-4 text-center text-lg text-slate-300">Sharesight</th>
                <th className="p-4 text-center text-lg text-slate-300">Empower</th>
                <th className="p-4 text-center text-lg text-cyan-400 font-bold">VerafyAI</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['AI Analysis', false, false, true],
                ['Plain English', false, false, true],
                ['AU Tax Rules', true, false, true],
                ['Actionable', false, false, true],
              ].map(([feature, s, e, v], i) => (
                <tr key={i} className="border-t border-slate-700">
                  <td className="p-4 text-lg text-white">{feature}</td>
                  <td className="p-4 text-center">
                    {s ? <Check className="w-6 h-6 text-green-400 mx-auto" /> : <X className="w-6 h-6 text-red-400/50 mx-auto" />}
                  </td>
                  <td className="p-4 text-center">
                    {e ? <Check className="w-6 h-6 text-green-400 mx-auto" /> : <X className="w-6 h-6 text-red-400/50 mx-auto" />}
                  </td>
                  <td className="p-4 text-center bg-cyan-500/10">
                    {v ? <CheckCircle2 className="w-7 h-7 text-cyan-400 mx-auto" /> : <X className="w-6 h-6 text-red-400 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowCard>
    </div>
    <div className="mt-8 text-center">
      <p className="text-2xl font-bold">
        <span className="text-slate-400">Not charts that make you feel smart.</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Actions that make you money.</span>
      </p>
    </div>
  </div>
);

const RegulatorySlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-8">
      <h2 className="text-5xl font-bold text-white mb-2">
        Chinese Walls: <span className="text-orange-400">Regulatory Survival</span>
      </h2>
      <p className="text-xl text-slate-300">The smarts live in Portfolio. The trades live in Trading. No AI recommendations crossing the wall.</p>
    </div>
    <div className="flex-1 flex items-center justify-center gap-4">
      <GlowCard className="flex-1 p-8 h-[380px]" highlight>
        <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
          <Brain className="w-8 h-8" />
          PORTFOLIO INTELLIGENCE
        </h3>
        <ul className="space-y-4">
          {['AI-powered analysis', 'Tax optimisation insights', 'Risk assessment', 'Information only', 'No AFSL required'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-xl text-white">
              <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
      <div className="w-20 h-[380px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-red-500 to-orange-500 rounded-lg opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="transform -rotate-90 text-white font-bold text-2xl tracking-[0.3em] whitespace-nowrap">WALL</div>
        </div>
      </div>
      <GlowCard className="flex-1 p-8 h-[380px]">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <LineChart className="w-8 h-8 text-slate-400" />
          TRADING APP
        </h3>
        <ul className="space-y-4">
          {['Clean execution only', 'No AI recommendations', 'IBKR gateway', 'Separate entity', 'Standard broker licence'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-xl text-white">
              <Check className="w-6 h-6 text-slate-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlowCard>
    </div>
    <div className="mt-8 p-6 rounded-xl bg-slate-800/50 border border-slate-700">
      <p className="text-xl text-white text-center italic">
        "Anyone building AI-driven trading recommendations without an AFSL is building a <span className="text-red-400 font-semibold">time bomb</span>.
        <span className="text-cyan-400 font-semibold"> We are not that.</span>"
      </p>
    </div>
  </div>
);

const MarketSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <h2 className="text-6xl font-bold text-white mb-10 text-center">Market Opportunity</h2>
    <div className="grid grid-cols-3 gap-8 mb-10">
      {[
        { value: '9M+', label: 'Australians own shares/ETFs', color: '#22d3ee' },
        { value: '15K', label: 'Financial advisers in AU', color: '#3b82f6' },
        { value: '$6B', label: 'Advice industry revenue', color: '#a855f7' },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-7xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
          <div className="text-xl text-slate-300">{stat.label}</div>
        </div>
      ))}
    </div>
    <div className="flex-1 grid grid-cols-2 gap-8">
      <GlowCard className="p-8">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
          <Users className="w-8 h-8" />
          Phase 1 TAM: Retail
        </h3>
        <p className="text-xl text-white mb-4">
          9M × $15/mo avg = <span className="text-4xl font-bold text-cyan-400">$1.6B</span> potential
        </p>
        <div className="space-y-2 text-lg text-slate-300">
          <p className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-400" /> 2.5M new investors since COVID</p>
          <p className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-400" /> 61% of Millennials now invest</p>
        </div>
      </GlowCard>
      <GlowCard className="p-8">
        <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
          <Briefcase className="w-8 h-8" />
          Phase 3 TAM: Advisers
        </h3>
        <p className="text-xl text-white mb-4">
          15K × $3K/mo = <span className="text-4xl font-bold text-purple-400">$540M</span>/year
        </p>
        <div className="space-y-2 text-lg text-slate-300">
          <p className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-orange-400" /> Average practice pays $2-4K/mo</p>
          <p className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-orange-400" /> for software they barely use</p>
        </div>
      </GlowCard>
    </div>
  </div>
);

const TractionSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <h2 className="text-6xl font-bold text-white mb-10">Traction & Team</h2>
    <div className="flex-1 grid grid-cols-3 gap-8">
      <GlowCard className="p-6" highlight>
        <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
          <Rocket className="w-8 h-8" />
          What's Live
        </h3>
        <ul className="space-y-4">
          {['Platform built (AWS, React, Claude AI)', '$150K pre-seed raised', 'Beta waitlist at capacity', '2 patents lodged', 'IBKR integration ready'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-white">
              <CheckCircle2 className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
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
        <ul className="space-y-4 text-lg">
          {[
            { date: 'Feb 15', text: 'Beta launch' },
            { date: 'Apr 1', text: 'Public launch' },
            { date: 'Jun 30', text: 'Tax/reporting (EOFY)' },
            { date: 'Jul', text: 'Trading app (IBKR)' },
            { date: '2027', text: 'Xplan Lite pilot' },
            { date: 'Christmas', text: 'All phases live', highlight: true },
          ].map((item, i) => (
            <li key={i} className={`flex items-center gap-3 ${item.highlight ? 'text-cyan-400 font-bold' : 'text-white'}`}>
              <span className="w-20 text-blue-400 font-semibold flex-shrink-0">{item.date}:</span>
              {item.text}
            </li>
          ))}
        </ul>
      </GlowCard>
      <GlowCard className="p-6">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Users className="w-8 h-8 text-purple-400" />
          Team
        </h3>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
            <h4 className="text-xl font-bold text-white mb-1">Amit Vohra - CEO</h4>
            <p className="text-sm text-slate-400">PhD, MBA, GAICD</p>
            <p className="text-sm text-cyan-400">Ex-CEO GPRA (500% revenue growth)</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
            <h4 className="text-xl font-bold text-white mb-1">Nupur Agarwal - CTO</h4>
            <p className="text-sm text-slate-400">MBA + Double Masters</p>
            <p className="text-sm text-cyan-400">Ex-GBST | Ex-JP Morgan (7 yrs)</p>
          </div>
        </div>
      </GlowCard>
    </div>
  </div>
);

const BusinessModelSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-8">
      <h2 className="text-6xl font-bold text-white mb-2">Business Model</h2>
      <p className="text-2xl text-cyan-400 font-semibold">Three Revenue Streams</p>
    </div>
    <div className="grid grid-cols-3 gap-6 mb-8">
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
          <p className="text-slate-400 italic text-base">No advice liability</p>
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
          { label: 'CAC', value: '$25', highlight: false },
          { label: 'LTV', value: '$360+', highlight: false },
          { label: 'LTV:CAC', value: '14:1', highlight: true },
          { label: 'Payback', value: '2 months', highlight: false },
        ].map((item, i) => (
          <div key={i} className={`p-4 rounded-xl text-center ${item.highlight ? 'bg-cyan-500/20 border-2 border-cyan-500/50' : 'bg-slate-800/50 border border-slate-700'}`}>
            <div className="text-lg text-slate-400 mb-1">{item.label}</div>
            <div className={`text-3xl font-bold ${item.highlight ? 'text-cyan-400' : 'text-white'}`}>{item.value}</div>
          </div>
        ))}
      </div>
    </GlowCard>
  </div>
);

const AskSlide = () => (
  <div className="h-full flex flex-col p-16 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="mb-10">
      <h2 className="text-7xl font-bold text-white mb-4">The Ask</h2>
      <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-500/50">
        <DollarSign className="w-8 h-8 text-cyan-400" />
        <span className="text-3xl font-bold text-cyan-400">$1M Seed @ $10M Pre-Money</span>
      </div>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-10">
      <GlowCard className="p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Use of Funds</h3>
        <div className="space-y-6">
          {[
            { label: 'Product (Phase 1, 2, 3)', pct: 40, amount: '$400K', color: '#22d3ee' },
            { label: 'Growth & Partnerships', pct: 30, amount: '$300K', color: '#3b82f6' },
            { label: 'Runway & Operations', pct: 30, amount: '$300K', color: '#a855f7' },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-lg text-white mb-2">
                <span>{item.label}</span>
                <span className="font-bold">
                  <span className="text-cyan-400">{item.pct}%</span> <span className="text-slate-400">{item.amount}</span>
                </span>
              </div>
              <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </GlowCard>
      <GlowCard className="p-8" highlight>
        <h3 className="text-2xl font-bold text-cyan-400 mb-6">What You Get</h3>
        <ul className="space-y-4">
          {[
            'Seat at the table for AU wealth management disruption',
            'Jurisdiction agnostic products → global play',
            'Target markets: Australia, North America, India',
            '2 patents lodged, defensible IP moat',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-xl text-white">
              <CheckCircle2 className="w-7 h-7 text-cyan-400 mt-0.5 flex-shrink-0" />
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
    <div className="text-center max-w-5xl px-8">
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
        <p className="text-xl text-cyan-400 italic">"Nupur & Amit aren't selling their houses to build another tracker."</p>
      </div>
    </div>
  </div>
);

const ThankYouSlide = () => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <FloatingParticles />
    <div className="text-center relative z-10">
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
          <div className="w-12 h-12 bg-cyan-400 rounded-lg transform rotate-45" />
        </div>
      </div>
      <h1 className="text-[100px] font-bold text-white mb-8 leading-none">VerafyAI</h1>
      <p className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 font-light">
        I am inevitable.
      </p>
      <p className="text-xl text-slate-300 mb-10 italic max-w-2xl mx-auto">
        The only question is whether you will be in the room when I truly arrive.
      </p>
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-8 text-lg text-slate-400">
          <span className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            amit@verafyai.com
          </span>
          <span className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            verafyai.com.au
          </span>
        </div>
        <p className="text-3xl text-white font-semibold">Thank you. Questions?</p>
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
  MarketSlide,
  TractionSlide,
  BusinessModelSlide,
  AskSlide,
  VisionSlide,
  ThankYouSlide,
];

export function InvestorPitchPage({ isDark }: InvestorPitchPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = isFullscreen ? window.innerWidth : Math.min(window.innerWidth - 64, 1400);
      const containerHeight = isFullscreen ? window.innerHeight : Math.min(window.innerHeight - 300, 800);
      const baseWidth = 1920;
      const baseHeight = 1080;
      const scaleX = containerWidth / baseWidth;
      const scaleY = containerHeight / baseHeight;
      setScale(Math.min(scaleX, scaleY) * 0.95);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isFullscreen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      setCurrentSlide(prev => Math.min(prev + 1, SLIDES.length - 1));
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Escape') {
      setIsFullscreen(false);
    } else if (e.key === 'f') {
      setIsFullscreen(prev => !prev);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
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
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <button
            onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-white disabled:opacity-30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentSlide ? 'w-8 bg-gradient-to-r from-cyan-400 to-blue-500' : 'w-2 bg-slate-600'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentSlide(prev => Math.min(prev + 1, SLIDES.length - 1))}
            disabled={currentSlide === SLIDES.length - 1}
            className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-white disabled:opacity-30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Exit fullscreen button */}
        <button
          onClick={() => setIsFullscreen(false)}
          className="absolute top-4 right-4 p-3 rounded-lg bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-white hover:bg-black/70"
        >
          <Minimize2 className="w-6 h-6" />
        </button>

        <div className="absolute top-4 left-4 text-slate-400 text-sm">
          Slide {currentSlide + 1} / {SLIDES.length} • Press ESC to exit
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Investor <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pitch Deck</span>
          </h1>
          <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            VerafyAI • $1M Seed @ $10M Pre-Money Valuation
          </p>
        </div>

        {/* Slide viewer */}
        <div className="flex justify-center mb-8">
          <div
            style={{
              width: 1920,
              height: 1080,
              transform: `scale(${scale})`,
              transformOrigin: 'top center'
            }}
            className="relative shadow-2xl rounded-lg overflow-hidden border border-cyan-500/20"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <CurrentSlideComponent />
              </motion.div>
            </AnimatePresence>

            {/* Fullscreen button */}
            <button
              onClick={() => setIsFullscreen(true)}
              className="absolute top-4 right-4 p-3 rounded-lg bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-white hover:bg-black/70 z-10"
            >
              <Maximize2 className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-4" style={{ marginTop: `${(1080 * scale) - 1080 + 32}px` }}>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
              disabled={currentSlide === 0}
              className={`p-3 rounded-full border transition-all disabled:opacity-30 ${
                isDark
                  ? 'bg-slate-800 border-cyan-500/30 text-white hover:bg-slate-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-3 rounded-full transition-all ${
                    i === currentSlide
                      ? 'w-10 bg-gradient-to-r from-cyan-400 to-blue-500'
                      : `w-3 ${isDark ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-300 hover:bg-slate-400'}`
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentSlide(prev => Math.min(prev + 1, SLIDES.length - 1))}
              disabled={currentSlide === SLIDES.length - 1}
              className={`p-3 rounded-full border transition-all disabled:opacity-30 ${
                isDark
                  ? 'bg-slate-800 border-cyan-500/30 text-white hover:bg-slate-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Slide {currentSlide + 1} of {SLIDES.length} • Use arrow keys to navigate • Press F for fullscreen
          </p>
        </div>
      </div>
    </div>
  );
}
