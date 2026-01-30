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
  ArrowRight,
  LineChart,
  PieChart,
  Award,
  Building2,
  Wallet,
  Brain
} from 'lucide-react';

interface InvestorPitchDeckProps {
  isDark: boolean;
}

interface SlideProps {
  isDark: boolean;
}

// Slide 1: Title Slide
const TitleSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col items-center justify-center relative">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]" />

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center"
    >
      {/* Logo */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
          <div className="w-8 h-8 bg-white rounded-lg transform rotate-45" />
        </div>
        <h1 className="text-5xl font-bold text-white tracking-wider">
          VERAFY<span className="text-cyan-400">AI</span>
        </h1>
      </div>

      {/* Tagline */}
      <h2 className="text-6xl font-bold text-white mb-6">
        Democratizing{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Institutional-Grade
        </span>
        <br />
        Investment Intelligence
      </h2>

      <p className="text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
        AI-powered portfolio analytics for the Australian retail investor market
      </p>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
        <Shield className="w-5 h-5 text-cyan-400" />
        <span className="text-white font-medium">ASIC Compliant | Built for Australian Investors</span>
      </div>
    </motion.div>

    {/* Footer */}
    <div className="absolute bottom-8 text-slate-500 text-sm">
      Investor Presentation | Q1 2026
    </div>
  </div>
);

// Slide 2: The Problem
const ProblemSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-5xl font-bold text-white mb-12"
    >
      The Problem
    </motion.h2>

    <div className="flex-1 grid grid-cols-2 gap-12">
      <div className="space-y-8">
        {[
          { icon: Building2, title: 'Institutional Advantage', desc: 'Professional investors have access to sophisticated portfolio analytics tools that retail investors lack' },
          { icon: BarChart3, title: 'Complex Data', desc: 'Retail investors struggle to understand their portfolio performance, risk exposure, and tax implications' },
          { icon: Globe, title: 'Australian Gap', desc: 'Few platforms cater specifically to Australian investors with local tax, compliance, and market needs' },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700"
          >
            <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-7 h-7 text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center"
      >
        <div className="relative">
          <div className="w-80 h-80 rounded-full border-8 border-red-500/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl font-bold text-red-400 mb-2">67%</div>
              <div className="text-xl text-slate-400">of retail investors</div>
              <div className="text-xl text-slate-400">don't understand their</div>
              <div className="text-xl text-white font-semibold">portfolio risk</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-red-500 rounded-lg text-white font-semibold">
            Industry Research 2024
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Slide 3: The Solution
const SolutionSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-5xl font-bold text-white mb-4"
    >
      The Solution: Meet <span className="text-cyan-400">Vera</span>
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-xl text-slate-400 mb-12"
    >
      Your AI-powered portfolio intelligence assistant
    </motion.p>

    <div className="flex-1 grid grid-cols-3 gap-8">
      {[
        { icon: Brain, title: 'AI-Powered Insights', desc: 'Natural language analysis of your portfolio in plain English', color: 'cyan' },
        { icon: LineChart, title: 'Real-time Analytics', desc: 'Live performance tracking, risk scoring, and opportunity detection', color: 'blue' },
        { icon: Shield, title: 'Tax Optimization', desc: 'Australian tax-loss harvesting and ATO-ready reports', color: 'purple' },
        { icon: Target, title: 'Action Center', desc: 'Personalized daily recommendations based on your goals', color: 'green' },
        { icon: PieChart, title: 'Portfolio Health', desc: 'Concentration risk, sector analysis, and diversification scoring', color: 'orange' },
        { icon: Zap, title: 'Scenario Modeling', desc: 'What-if analysis for investment decisions', color: 'yellow' },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl bg-slate-800/50 border border-${item.color}-500/30 hover:border-${item.color}-500/60 transition-all cursor-pointer`}
          style={{ borderColor: `var(--${item.color}-500, #22d3ee)30` }}
        >
          <div
            className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))` }}
          >
            <item.icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-slate-400 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Slide 4: Market Opportunity
const MarketSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-5xl font-bold text-white mb-12"
    >
      Market Opportunity
    </motion.h2>

    <div className="flex-1 grid grid-cols-2 gap-16">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30"
        >
          <div className="text-6xl font-bold text-cyan-400 mb-2">$3.4T</div>
          <div className="text-xl text-white font-semibold mb-1">Australian Superannuation</div>
          <div className="text-slate-400">Largest pension pool outside US/UK</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30"
        >
          <div className="text-6xl font-bold text-blue-400 mb-2">9M+</div>
          <div className="text-xl text-white font-semibold mb-1">Active Retail Investors</div>
          <div className="text-slate-400">Growing 15% YoY since 2020</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30"
        >
          <div className="text-6xl font-bold text-purple-400 mb-2">$850M</div>
          <div className="text-xl text-white font-semibold mb-1">TAM for Portfolio Analytics</div>
          <div className="text-slate-400">Australian retail market</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col justify-center"
      >
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6">Why Now?</h3>
          {[
            'Post-pandemic surge in retail investing',
            'Growing demand for self-directed SMSF management',
            'Regulatory push for financial literacy',
            'AI technology maturity for personalized insights',
            'Underserved Australian-specific market'
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-lg text-slate-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

// Slide 5: Business Model
const BusinessModelSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-5xl font-bold text-white mb-12"
    >
      Business Model
    </motion.h2>

    <div className="flex-1 grid grid-cols-3 gap-8">
      {[
        {
          name: 'Starter',
          price: '$5',
          annual: '$50/yr',
          color: 'from-slate-400 to-slate-500',
          features: ['50 holdings tracked', 'Basic Vera AI', 'Action Center (5/day)', 'Performance metrics']
        },
        {
          name: 'Standard',
          price: '$10',
          annual: '$100/yr',
          color: 'from-blue-400 to-cyan-400',
          features: ['Unlimited holdings', 'Full Vera personality', 'Unlimited Action Center', 'Behavioral patterns', 'Sector analysis'],
          popular: true
        },
        {
          name: 'Pro',
          price: '$20',
          annual: '$200/yr',
          color: 'from-cyan-400 to-blue-500',
          features: ['Portfolio optimization', 'Chat with Vera (500/mo)', 'Scenario modeling', 'Tax Pack included', 'Priority support']
        },
      ].map((plan, i) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className={`relative p-8 rounded-2xl bg-slate-800/50 border-2 ${
            plan.popular ? 'border-cyan-500' : 'border-slate-700'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-semibold">
              MOST POPULAR
            </div>
          )}

          <h3 className={`text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>
            {plan.name}
          </h3>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-bold text-white">{plan.price}</span>
            <span className="text-slate-400">/month</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">or {plan.annual}</p>

          <div className="space-y-3">
            {plan.features.map((feature, j) => (
              <div key={j} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-8 p-6 bg-orange-500/20 rounded-xl border border-orange-500/30 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <Zap className="w-8 h-8 text-orange-400" />
        <div>
          <div className="text-xl font-bold text-white">Founding Member Pricing</div>
          <div className="text-orange-300">50% off locked in for life until June 30, 2026</div>
        </div>
      </div>
      <div className="text-3xl font-bold text-orange-400">50% OFF</div>
    </motion.div>
  </div>
);

// Slide 6: Traction & Metrics
const TractionSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-5xl font-bold text-white mb-12"
    >
      Traction & Metrics
    </motion.h2>

    <div className="flex-1 grid grid-cols-4 gap-6 mb-12">
      {[
        { value: '2,500+', label: 'Beta Users', icon: Users, color: 'cyan' },
        { value: '4.8/5', label: 'User Rating', icon: Award, color: 'yellow' },
        { value: '$2.4M', label: 'AUM Tracked', icon: Wallet, color: 'green' },
        { value: '78%', label: 'Weekly Active', icon: TrendingUp, color: 'purple' },
      ].map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 text-center"
        >
          <metric.icon className={`w-10 h-10 mx-auto mb-4 text-${metric.color}-400`} style={{ color: `var(--theme-primary)` }} />
          <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
          <div className="text-slate-400">{metric.label}</div>
        </motion.div>
      ))}
    </div>

    <div className="grid grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700"
      >
        <h3 className="text-xl font-bold text-white mb-4">Growth Trajectory</h3>
        <div className="flex items-end justify-between h-40 gap-2">
          {[20, 35, 45, 60, 80, 100].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg"
                style={{ height: `${height}%` }}
              />
              <span className="text-xs text-slate-500">M{i + 1}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700"
      >
        <h3 className="text-xl font-bold text-white mb-4">Key Milestones</h3>
        <div className="space-y-4">
          {[
            { date: 'Q3 2024', milestone: 'Product launch & beta program' },
            { date: 'Q4 2024', milestone: '1,000 beta users achieved' },
            { date: 'Q1 2025', milestone: 'Founding member pricing launched' },
            { date: 'Q2 2025', milestone: 'Mobile app release (iOS/Android)' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-20 text-cyan-400 font-semibold text-sm">{item.date}</div>
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <div className="text-slate-300">{item.milestone}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

// Slide 7: Competitive Advantage
const CompetitiveSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-5xl font-bold text-white mb-12"
    >
      Competitive Advantage
    </motion.h2>

    <div className="flex-1 grid grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Why Verafy AI Wins</h3>
        <div className="space-y-4">
          {[
            { title: 'Australian-First Design', desc: 'Built specifically for Australian tax, compliance, and market conditions' },
            { title: 'Conversational AI', desc: 'Vera explains complex concepts in plain English, not financial jargon' },
            { title: 'Affordable Pricing', desc: '10x cheaper than traditional portfolio management tools' },
            { title: 'Proactive Intelligence', desc: 'Daily actionable insights, not passive dashboards' },
            { title: 'Privacy-First', desc: 'Read-only broker connections, bank-grade encryption' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-cyan-500/20"
            >
              <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">Competitive Landscape</h3>
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="p-4 text-left text-slate-400 font-medium">Feature</th>
                <th className="p-4 text-center text-cyan-400 font-bold">Verafy AI</th>
                <th className="p-4 text-center text-slate-400 font-medium">Others</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Australian Tax Focus', true, false],
                ['Conversational AI', true, false],
                ['Under $20/month', true, false],
                ['Daily Action Items', true, false],
                ['SMSF Support', true, true],
                ['Real-time Data', true, true],
              ].map(([feature, us, them], i) => (
                <tr key={i} className="border-b border-slate-700/50">
                  <td className="p-4 text-slate-300">{feature}</td>
                  <td className="p-4 text-center">
                    {us ? <Check className="w-6 h-6 text-cyan-400 mx-auto" /> : <span className="text-slate-600">—</span>}
                  </td>
                  <td className="p-4 text-center">
                    {them ? <Check className="w-6 h-6 text-slate-500 mx-auto" /> : <span className="text-slate-600">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </div>
);

// Slide 8: Team
const TeamSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-5xl font-bold text-white mb-12"
    >
      Leadership Team
    </motion.h2>

    <div className="flex-1 grid grid-cols-3 gap-8">
      {[
        {
          name: 'Dr. Amit Vohra',
          role: 'Co-Founder & CEO',
          bio: '20+ years C-suite experience in CEO, COO, and EGM roles. Board director with expertise in M&A, healthcare and financial services.',
          initials: 'AV'
        },
        {
          name: 'Ms. Nupur Agarwal',
          role: 'Co-Founder & CTO',
          bio: 'Combined tech and business focus with financial sector expertise leading enterprise platform transformations and digital innovation.',
          initials: 'NA'
        },
        {
          name: 'Mr. Subodh Ramugade',
          role: 'Head of AI & Engineering',
          bio: 'Leading AI and engineering innovation, driving the development of intelligent portfolio management solutions.',
          initials: 'SR'
        },
      ].map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.15 }}
          className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 text-center"
        >
          <div
            className="w-24 h-24 mx-auto rounded-full mb-6 flex items-center justify-center text-3xl font-bold text-white"
            style={{ background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))' }}
          >
            {member.initials}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
          <div className="text-cyan-400 font-semibold mb-4">{member.role}</div>
          <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-8 grid grid-cols-4 gap-6"
    >
      {[
        { label: 'Combined Experience', value: '50+ years' },
        { label: 'Previous Exits', value: '3' },
        { label: 'Team Size', value: '12' },
        { label: 'Advisors', value: '5 Industry Experts' },
      ].map((stat, i) => (
        <div key={i} className="p-4 bg-slate-800/30 rounded-xl text-center">
          <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
          <div className="text-slate-400 text-sm">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  </div>
);

// Slide 9: The Ask
const AskSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col p-16">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-5xl font-bold text-white mb-4"
    >
      The Ask
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="text-xl text-slate-400 mb-12"
    >
      Seed Round - Series A Bridge
    </motion.p>

    <div className="flex-1 grid grid-cols-2 gap-12">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 mb-8"
        >
          <div className="text-6xl font-bold text-cyan-400 mb-2">$2.5M</div>
          <div className="text-2xl text-white font-semibold">Seed Round</div>
          <div className="text-slate-400 mt-2">Pre-money valuation: $10M</div>
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-6">Use of Funds</h3>
        <div className="space-y-4">
          {[
            { label: 'Product Development', pct: 40 },
            { label: 'Sales & Marketing', pct: 30 },
            { label: 'Team Expansion', pct: 20 },
            { label: 'Operations', pct: 10 },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">{item.label}</span>
                <span className="text-cyan-400 font-semibold">{item.pct}%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-6">18-Month Targets</h3>
        <div className="space-y-4">
          {[
            { metric: '25,000', label: 'Paying Subscribers' },
            { metric: '$3M', label: 'ARR' },
            { metric: '$50M', label: 'AUM Tracked' },
            { metric: '3', label: 'Enterprise Partnerships' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center gap-6"
            >
              <div className="text-4xl font-bold text-cyan-400">{item.metric}</div>
              <div className="text-slate-300">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 p-6 bg-green-500/20 rounded-xl border border-green-500/30"
        >
          <div className="flex items-center gap-3">
            <Rocket className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-lg font-bold text-white">Path to Series A</div>
              <div className="text-green-300">Targeting Q4 2026 at $30M+ valuation</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

// Slide 10: Thank You / Contact
const ThankYouSlide: React.FC<SlideProps> = ({ isDark }) => (
  <div className="h-full flex flex-col items-center justify-center relative">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]" />

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center"
    >
      {/* Logo */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
          <div className="w-10 h-10 bg-white rounded-lg transform rotate-45" />
        </div>
      </div>

      <h2 className="text-6xl font-bold text-white mb-6">
        Thank You
      </h2>

      <p className="text-2xl text-slate-400 mb-12 max-w-2xl mx-auto">
        Let's democratize investment intelligence together.
      </p>

      <div className="grid grid-cols-3 gap-8 mb-12">
        {[
          { icon: Globe, label: 'verafy.ai', href: '#' },
          { icon: DollarSign, label: 'invest@verafy.ai', href: '#' },
          { icon: Users, label: 'Schedule a Call', href: '#' },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors cursor-pointer"
          >
            <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-white font-semibold">{item.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg shadow-lg shadow-cyan-500/30 cursor-pointer hover:shadow-cyan-500/50 transition-shadow"
      >
        <span>Let's Build the Future of Investing</span>
        <ArrowRight className="w-5 h-5" />
      </motion.div>
    </motion.div>

    {/* Footer */}
    <div className="absolute bottom-8 text-slate-500 text-sm">
      Verafy AI Pty Ltd | ABN XX XXX XXX XXX | Confidential
    </div>
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
    MarketSlide,
    BusinessModelSlide,
    TractionSlide,
    CompetitiveSlide,
    TeamSlide,
    AskSlide,
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
        className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl border border-slate-800"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-slate-950/0" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0" />
        </div>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 h-full"
          >
            <CurrentSlideComponent isDark={isDark} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <button
            onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            className="p-2 rounded-full bg-slate-800/80 border border-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
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
                    ? 'w-8 bg-cyan-500'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-full bg-slate-800/80 border border-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-6 right-8 text-slate-500 text-sm z-20">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Keyboard Hint */}
        <div className="absolute bottom-6 right-8 text-slate-600 text-xs z-20">
          Use arrow keys to navigate
        </div>
      </div>
    </div>
  );
}
