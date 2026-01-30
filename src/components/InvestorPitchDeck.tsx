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
  Calendar
} from 'lucide-react';

interface InvestorPitchDeckProps {
  isDark: boolean;
}

interface SlideProps {
  isDark: boolean;
}

// Slide 1: Title Slide
const TitleSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col items-center justify-center relative bg-[#0d4f4f]">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center"
    >
      <h1 className="text-8xl font-bold text-white mb-6">
        VerafyAI
      </h1>

      <p className="text-3xl text-cyan-400 italic mb-4">
        The interface between finance and humans
      </p>

      <p className="text-2xl text-white/80 mb-16">
        Where 9 million investors meet institutional intelligence
      </p>

      <div className="text-lg text-white/60 mb-4">
        Amit Vohra | Co-founder & CEO
      </div>
      <div className="text-lg text-white/60 mb-12">
        amit@verafyai.com | verafyai.com.au
      </div>
    </motion.div>

    {/* Ask Badge */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="absolute top-8 right-12 px-6 py-3 bg-cyan-400 text-[#0d4f4f] font-bold text-xl rounded"
    >
      $1M Seed @ $10M Pre-Money
    </motion.div>
  </div>
);

// Slide 2: Two Markets. One Broken System.
const ProblemSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 bg-white">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold text-slate-800 mb-12"
    >
      Two Markets. One Broken System.
    </motion.h2>

    <div className="flex-1 grid grid-cols-2 gap-8 mb-8">
      {/* Retail Investors */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="p-8 bg-[#0d4f4f] rounded-lg text-white"
      >
        <h3 className="text-3xl font-bold text-cyan-400 mb-6">9 Million Retail Investors</h3>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">•</span>
            Making decisions without institutional tools
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">•</span>
            Spreadsheets, basic trackers, or nothing
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">•</span>
            No real-time tax optimisation
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">•</span>
            No personalised guidance
          </li>
        </ul>
      </motion.div>

      {/* Financial Advisers */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="p-8 border-2 border-[#0d4f4f] rounded-lg"
      >
        <h3 className="text-3xl font-bold text-[#0d4f4f] mb-6">15,000 Financial Advisers</h3>
        <ul className="space-y-4 text-lg text-slate-700">
          <li className="flex items-start gap-3">
            <span className="text-[#0d4f4f] mt-1">•</span>
            Trapped in legacy software (Xplan)
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#0d4f4f] mt-1">•</span>
            $2,000-$4,000/month for complexity they don't need
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#0d4f4f] mt-1">•</span>
            3-week SOA turnarounds via paraplanners
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#0d4f4f] mt-1">•</span>
            Hours on paperwork, minutes with clients
          </li>
        </ul>
      </motion.div>
    </div>

    {/* Bottom Banner */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="p-6 bg-[#0d4f4f] rounded-lg text-center"
    >
      <p className="text-xl text-white">
        The gap between investors who need help and advisers who can deliver has never been wider.
      </p>
      <p className="text-lg text-cyan-400 italic mt-2">
        They call it a 'necessary evil.' The industry is ripe for disruption.
      </p>
    </motion.div>
  </div>
);

// Slide 3: The Solution - Three Phases
const SolutionSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 bg-white">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold text-slate-800 mb-12"
    >
      The Solution: Three Phases
    </motion.h2>

    <div className="flex-1 grid grid-cols-3 gap-6">
      {/* Phase 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-8 bg-[#0d4f4f] rounded-lg text-white"
      >
        <div className="text-cyan-400 font-semibold mb-2">PHASE 1</div>
        <h3 className="text-2xl font-bold mb-2">Portfolio Intelligence</h3>
        <div className="text-cyan-400 text-sm mb-6">NOW - LIVE</div>
        <ul className="space-y-3 text-base">
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">•</span>
            Connect broker → real-time analysis
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">•</span>
            Tax optimisation, rebalancing
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">•</span>
            Plain English actions
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">•</span>
            $5-$20/month
          </li>
        </ul>
      </motion.div>

      {/* Phase 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-8 border-2 border-[#0d4f4f] rounded-lg"
      >
        <div className="text-[#0d4f4f] font-semibold mb-2">PHASE 2</div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Trading App</h3>
        <div className="text-[#0d4f4f] text-sm mb-6">JULY 2026</div>
        <ul className="space-y-3 text-base text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-[#0d4f4f]">•</span>
            Standalone app, separate entity
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0d4f4f]">•</span>
            IBKR brokerage gateway
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0d4f4f]">•</span>
            AWS enterprise deployment
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0d4f4f]">•</span>
            Chinese wall maintained
          </li>
        </ul>
      </motion.div>

      {/* Phase 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-8 border-2 border-[#0d4f4f] rounded-lg"
      >
        <div className="text-[#0d4f4f] font-semibold mb-2">PHASE 3</div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Xplan Lite</h3>
        <div className="text-[#0d4f4f] text-sm mb-6">2027</div>
        <ul className="space-y-3 text-base text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-[#0d4f4f]">•</span>
            One-meeting SOA generation
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0d4f4f]">•</span>
            Conversational fact-find
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0d4f4f]">•</span>
            No paraplanners needed
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0d4f4f]">•</span>
            $1,500-$4,000/month
          </li>
        </ul>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-8 text-center"
    >
      <span className="text-2xl font-bold text-cyan-500">All three phases live by Christmas 2026</span>
    </motion.div>
  </div>
);

// Slide 4: Vera - Bloomberg Terminal meets ChatGPT
const VeraSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 bg-white">
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-5xl font-bold text-slate-800 mb-2">
        Vera: Bloomberg Terminal meets ChatGPT
      </h2>
      <p className="text-xl text-cyan-600 italic mb-10">For the 9 million, not the 9 thousand</p>
    </motion.div>

    <div className="flex-1 grid grid-cols-2 gap-12">
      {/* What Vera Does */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-6">What Vera Does:</h3>
        <ul className="space-y-4 text-lg text-slate-700">
          {[
            'Real-time portfolio analysis',
            'Tax-loss harvesting alerts',
            'Dividend tracking & forecasting',
            'Risk exposure mapping',
            'Rebalancing recommendations',
            'All in plain English - not charts'
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-[#0d4f4f] rounded-full" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-slate-50 rounded-xl overflow-hidden"
      >
        <table className="w-full">
          <thead>
            <tr className="bg-[#0d4f4f] text-white">
              <th className="p-4 text-left font-semibold">Feature</th>
              <th className="p-4 text-center font-semibold">Sharesight</th>
              <th className="p-4 text-center font-semibold">Empower</th>
              <th className="p-4 text-center font-semibold text-cyan-400">VerafyAI</th>
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
              <tr key={i} className="border-b border-slate-200">
                <td className="p-4 font-medium text-slate-700">{feature}</td>
                <td className="p-4 text-center">
                  {typeof s === 'boolean' ? (
                    s ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-red-500 mx-auto" />
                  ) : <span className="text-slate-600">{s}</span>}
                </td>
                <td className="p-4 text-center">
                  {typeof e === 'boolean' ? (
                    e ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-red-500 mx-auto" />
                  ) : <span className="text-slate-600">{e}</span>}
                </td>
                <td className="p-4 text-center bg-cyan-50">
                  {typeof v === 'boolean' ? (
                    v ? <Check className="w-6 h-6 text-cyan-600 mx-auto" /> : <X className="w-6 h-6 text-red-500 mx-auto" />
                  ) : <span className="text-cyan-600 font-semibold">{v}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-8 text-center text-xl font-bold text-cyan-600"
    >
      Not charts that make you feel smart. Actions that make you money.
    </motion.p>
  </div>
);

// Slide 5: Chinese Walls - Regulatory Survival
const RegulatorySlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 bg-white">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold text-slate-800 mb-4"
    >
      Chinese Walls: Regulatory Survival
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="text-xl text-slate-600 mb-12"
    >
      The smarts live in Portfolio. The trades live in Trading. No AI recommendations crossing the wall.
    </motion.p>

    <div className="flex-1 flex items-center justify-center gap-8">
      {/* Portfolio Intelligence */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 p-8 bg-[#0d4f4f] rounded-lg text-white h-80"
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-6">PORTFOLIO INTELLIGENCE</h3>
        <ul className="space-y-3 text-lg">
          <li className="flex items-center gap-2"><span className="text-cyan-400">•</span> AI-powered analysis</li>
          <li className="flex items-center gap-2"><span className="text-cyan-400">•</span> Tax optimisation insights</li>
          <li className="flex items-center gap-2"><span className="text-cyan-400">•</span> Risk assessment</li>
          <li className="flex items-center gap-2"><span className="text-cyan-400">•</span> Information only</li>
          <li className="flex items-center gap-2"><span className="text-cyan-400">•</span> No AFSL required</li>
        </ul>
      </motion.div>

      {/* Wall */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 0.4 }}
        className="w-16 h-80 bg-gradient-to-b from-slate-300 to-slate-500 rounded flex items-center justify-center"
      >
        <div className="transform -rotate-90 text-slate-700 font-bold text-xl tracking-widest whitespace-nowrap">
          WALL
        </div>
      </motion.div>

      {/* Trading App */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 p-8 border-2 border-[#0d4f4f] rounded-lg h-80"
      >
        <h3 className="text-2xl font-bold text-[#0d4f4f] mb-6">TRADING APP</h3>
        <ul className="space-y-3 text-lg text-slate-700">
          <li className="flex items-center gap-2"><span className="text-[#0d4f4f]">•</span> Clean execution only</li>
          <li className="flex items-center gap-2"><span className="text-[#0d4f4f]">•</span> No AI recommendations</li>
          <li className="flex items-center gap-2"><span className="text-[#0d4f4f]">•</span> IBKR gateway</li>
          <li className="flex items-center gap-2"><span className="text-[#0d4f4f]">•</span> Separate entity</li>
          <li className="flex items-center gap-2"><span className="text-[#0d4f4f]">•</span> Standard broker licence</li>
        </ul>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-8 p-6 bg-slate-800 rounded-lg text-center"
    >
      <p className="text-xl text-white italic">
        "Anyone building AI-driven trading recommendations without an AFSL is building a time bomb. We are not that."
      </p>
    </motion.div>
  </div>
);

// Slide 6: Xplan Lite - One Meeting. Job Done.
const XplanLiteSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 bg-white">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold text-slate-800 mb-4"
    >
      Xplan Lite: One Meeting. Job Done.
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="text-xl text-slate-600 mb-10"
    >
      Not a killer. A simplifier. For the 60-70% who don't need enterprise complexity.
    </motion.p>

    <div className="flex-1 grid grid-cols-2 gap-12">
      {/* Flow */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-2"
      >
        {[
          { label: 'Meeting Start', highlight: true },
          { label: 'Conversational Fact-Find' },
          { label: 'Risk Profiling (real-time)' },
          { label: 'Strategy Modelling (instant)' },
          { label: 'Draft SOA Generated' },
          { label: 'Adviser Signs Off' },
          { label: 'Client Leaves with SOA', highlight: true },
        ].map((step, i) => (
          <React.Fragment key={i}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className={`p-4 rounded-lg ${step.highlight ? 'bg-[#0d4f4f] text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              {step.label}
            </motion.div>
            {i < 6 && (
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-[#0d4f4f]" />
              </div>
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Comparison */}
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Current Industry</h3>
          <ul className="space-y-3 text-lg text-slate-600">
            <li className="flex items-center gap-2"><X className="w-5 h-5 text-red-500" /> 3-week SOA turnaround</li>
            <li className="flex items-center gap-2"><X className="w-5 h-5 text-red-500" /> Send to paraplanners</li>
            <li className="flex items-center gap-2"><X className="w-5 h-5 text-red-500" /> $4,000/month platforms</li>
            <li className="flex items-center gap-2"><X className="w-5 h-5 text-red-500" /> 80% features unused</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-[#0d4f4f] mb-4">With Xplan Lite</h3>
          <ul className="space-y-3 text-lg text-slate-700">
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-cyan-600" /> 55 minutes total</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-cyan-600" /> No paraplanners needed</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-cyan-600" /> $1,500-$4,000/month</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-cyan-600" /> Everything they actually need</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </div>
);

// Slide 7: Market Opportunity
const MarketSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 bg-white">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold text-slate-800 mb-12"
    >
      Market Opportunity
    </motion.h2>

    {/* Big Numbers */}
    <div className="grid grid-cols-3 gap-8 mb-12">
      {[
        { value: '9M+', label: 'Australians own shares/ETFs' },
        { value: '15K', label: 'Financial advisers in AU' },
        { value: '$6B', label: 'Advice industry revenue' },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="text-center"
        >
          <div className="text-6xl font-bold text-cyan-600 mb-2">{stat.value}</div>
          <div className="text-lg text-slate-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>

    {/* TAM boxes */}
    <div className="flex-1 grid grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="p-8 border-2 border-[#0d4f4f] rounded-lg"
      >
        <h3 className="text-2xl font-bold text-[#0d4f4f] mb-4">Phase 1 TAM: Retail</h3>
        <p className="text-xl text-slate-700 mb-4">9M × $15/mo avg = <span className="font-bold text-cyan-600">$1.6B potential</span></p>
        <p className="text-lg text-slate-600">2.5M new investors since COVID</p>
        <p className="text-lg text-slate-600">61% of Millennials now invest</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="p-8 border-2 border-[#0d4f4f] rounded-lg"
      >
        <h3 className="text-2xl font-bold text-[#0d4f4f] mb-4">Phase 3 TAM: Advisers</h3>
        <p className="text-xl text-slate-700 mb-4">15K × $3K/mo = <span className="font-bold text-cyan-600">$540M/year</span></p>
        <p className="text-lg text-slate-600">Average practice pays $2-4K/mo</p>
        <p className="text-lg text-slate-600">for software they barely use</p>
      </motion.div>
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-8 text-center text-2xl font-bold text-cyan-600"
    >
      We start with the millions. We scale to the thousands.
    </motion.p>
  </div>
);

// Slide 8: Traction & Team
const TractionSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 bg-white">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold text-slate-800 mb-10"
    >
      Traction & Team
    </motion.h2>

    <div className="flex-1 grid grid-cols-3 gap-8">
      {/* What's Live */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-[#0d4f4f] mb-6">What's Live</h3>
        <ul className="space-y-3">
          {[
            'Platform built (AWS, React, Claude AI)',
            '$150K pre-seed raised',
            'Beta waitlist at capacity',
            '2 patents lodged, more in pipeline',
            'IBKR integration ready',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700">
              <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-[#0d4f4f] mb-6">Timeline</h3>
        <ul className="space-y-3 text-slate-700">
          <li><span className="font-semibold">Feb 15:</span> Beta launch</li>
          <li><span className="font-semibold">Apr 1:</span> Public launch</li>
          <li><span className="font-semibold">Jun 30:</span> Tax/reporting (EOFY)</li>
          <li><span className="font-semibold">Jul:</span> Trading app (IBKR)</li>
          <li><span className="font-semibold">2027:</span> Xplan Lite pilot</li>
          <li className="font-bold text-[#0d4f4f]">Christmas: All phases live</li>
        </ul>
      </motion.div>

      {/* Team */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 border-2 border-[#0d4f4f] rounded-lg"
      >
        <h3 className="text-2xl font-bold text-[#0d4f4f] mb-6">Team</h3>

        <div className="mb-6">
          <h4 className="text-lg font-bold text-slate-800">Amit Vohra - CEO</h4>
          <p className="text-sm text-slate-600">PhD, MBA, GAICD | Ex-CEO GPRA (500% revenue growth)</p>
          <p className="text-sm text-slate-600">Ex-EGM Sonic Clinical Services | Chairman GP2U</p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-slate-800">Nupur Agarwal - CTO</h4>
          <p className="text-sm text-slate-600">Ex-GBST | Ex-JP Morgan (7 yrs) | MBA + Double Masters</p>
          <p className="text-sm text-slate-600">Headhunted by Xplan (declined)</p>
        </div>
      </motion.div>
    </div>
  </div>
);

// Slide 9: Business Model
const BusinessModelSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 bg-white">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold text-slate-800 mb-4"
    >
      Business Model
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-2xl text-[#0d4f4f] font-semibold mb-10"
    >
      Three Revenue Streams
    </motion.p>

    <div className="grid grid-cols-3 gap-6 mb-10">
      {/* Phase 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6 bg-[#0d4f4f] rounded-lg text-white"
      >
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Phase 1: SaaS</h3>
        <p className="mb-2">Starter: $5/mo</p>
        <p className="mb-2">Standard: $10/mo</p>
        <p className="mb-4">Pro: $20/mo</p>
        <p className="text-cyan-400 font-semibold">Founding: 50% off for life</p>
      </motion.div>

      {/* Phase 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 border-2 border-[#0d4f4f] rounded-lg"
      >
        <h3 className="text-xl font-bold text-[#0d4f4f] mb-4">Phase 2: Trading</h3>
        <p className="text-slate-700 mb-2">Brokerage fees</p>
        <p className="text-slate-700 mb-2">Premium features</p>
        <p className="text-slate-700 mb-2">Standalone entity</p>
        <p className="text-slate-500 italic">No advice liability</p>
      </motion.div>

      {/* Phase 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 border-2 border-[#0d4f4f] rounded-lg"
      >
        <h3 className="text-xl font-bold text-[#0d4f4f] mb-4">Phase 3: Adviser</h3>
        <p className="text-slate-700 mb-2">$1,500-$4,000/mo per practice</p>
        <p className="text-slate-700 mb-2">Implementation fees</p>
        <p className="text-slate-700">Data/compliance add-ons</p>
      </motion.div>
    </div>

    {/* Unit Economics */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-slate-800 mb-4">Unit Economics</h3>
      <div className="bg-slate-50 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#0d4f4f] text-white">
              <th className="p-4 text-center font-semibold">CAC</th>
              <th className="p-4 text-center font-semibold">LTV</th>
              <th className="p-4 text-center font-semibold">LTV:CAC</th>
              <th className="p-4 text-center font-semibold">Payback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-center text-xl font-bold text-slate-800">$25</td>
              <td className="p-4 text-center text-xl font-bold text-slate-800">$360+</td>
              <td className="p-4 text-center text-xl font-bold text-cyan-600">14:1</td>
              <td className="p-4 text-center text-xl font-bold text-slate-800">2 months</td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="mt-6 text-center text-xl font-bold text-cyan-600"
    >
      High margin SaaS. Global scale. Defensible IP.
    </motion.p>
  </div>
);

// Slide 10: The Ask
const AskSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16 bg-[#0d4f4f]">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl font-bold text-white mb-2"
    >
      The Ask
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="text-3xl text-cyan-400 mb-12"
    >
      $1M Seed @ $10M Pre-Money
    </motion.p>

    <div className="flex-1 grid grid-cols-2 gap-12">
      {/* Use of Funds */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">Use of Funds</h3>
        <div className="space-y-6">
          {[
            { label: 'Product (Phase 1, 2, 3)', pct: 40, amount: '$400K' },
            { label: 'Growth & Partnerships', pct: 30, amount: '$300K' },
            { label: 'Runway & Operations', pct: 30, amount: '$300K' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="flex justify-between text-lg text-white mb-2">
                <span>{item.label}</span>
                <span className="text-cyan-400 font-bold">{item.pct}% <span className="text-white/60">{item.amount}</span></span>
              </div>
              <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  className="h-full bg-cyan-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* What You Get */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
        <ul className="space-y-4">
          {[
            'Seat at the table for AU wealth management disruption',
            'Jurisdiction agnostic products → global play',
            'Target markets: Australia, North America, India',
            '2 patents lodged, defensible IP moat',
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-start gap-3 text-lg text-white"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
);

// Slide 11: The Vision
const VisionSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col items-center justify-center p-16 bg-slate-900">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl font-bold text-white mb-6"
    >
      The Vision
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-3xl text-cyan-400 mb-12 text-center"
    >
      The interface between humans and the global financial system
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-xl text-slate-300 max-w-4xl text-center mb-12 italic"
    >
      Over the next 3 years, my ability to detect behavioural patterns at an individual and industry level
      will grow to a point that we will carry risk for the advice delivered through the pattern.
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-2xl text-white max-w-3xl text-center mb-16"
    >
      The ecosystem. The infrastructure. The rails that everything else runs on.
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-xl text-cyan-400 italic"
    >
      "Nupur & Amit aren't selling their houses to build another tracker."
    </motion.p>
  </div>
);

// Slide 12: Thank You
const ThankYouSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col items-center justify-center relative bg-[#0d4f4f]">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-8xl font-bold text-white mb-8">
        VerafyAI
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl text-cyan-400 mb-8"
      >
        I am inevitable.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl text-white/80 max-w-2xl mx-auto mb-16 italic"
      >
        The only question is whether you will be in the room when I truly arrive.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-lg text-white/60 mb-4"
      >
        Amit Vohra | amit@verafyai.com | verafyai.com.au
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-2xl text-white"
      >
        Thank you. Questions?
      </motion.p>
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

  // Auto-scale to fit window while maintaining 16:9
  useEffect(() => {
    const handleResize = () => {
      const baseWidth = 1920;
      const baseHeight = 1080;

      const scaleX = window.innerWidth / baseWidth;
      const scaleY = window.innerHeight / baseHeight;

      const newScale = Math.min(scaleX, scaleY) * 0.95;
      setScale(newScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard navigation
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
      {/* 16:9 Container Fixed at 1920x1080 and Scaled */}
      <div
        style={{
          width: 1920,
          height: 1080,
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
        className="relative shadow-2xl"
      >
        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <CurrentSlideComponent isDark={isDark} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <button
            onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            className="p-2 rounded-full bg-black/50 border border-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide
                    ? 'w-8 bg-cyan-400'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-full bg-black/50 border border-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-6 right-8 text-white/60 text-sm z-20 bg-black/30 px-3 py-1 rounded">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
