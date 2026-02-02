import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Shield,
  Globe,
  Zap,
  Check,
  X,
  LineChart,
  Brain,
  Clock,
  Briefcase,
  CheckCircle2,
  Award,
  Sparkles,
  BarChart3,
  Calculator,
  Building2,
  Crown,
  Percent,
  AlertTriangle,
  Layers,
} from 'lucide-react';
import { GlowCard } from '../components/GlowCard';
import { SectionHeader } from '../components/SectionHeader';
import { SectionDivider } from '../components/SectionDivider';

interface InvestorCompetitiveAnalysisPageProps {
  isDark: boolean;
}

// Floating particles component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 bg-cyan-400/20 rounded-full"
        initial={{
          x: Math.random() * 100 + '%',
          y: Math.random() * 100 + '%',
        }}
        animate={{
          x: [null, Math.random() * 100 + '%'],
          y: [null, Math.random() * 100 + '%'],
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

export function InvestorCompetitiveAnalysisPage({ isDark }: InvestorCompetitiveAnalysisPageProps) {
  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-20 bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
                <div className="w-10 h-10 bg-cyan-400 rounded-lg transform rotate-45" />
              </div>
            </div>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Competitive Analysis & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Market Intelligence</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Document Version 1.1 | February 2026
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
              <BarChart3 className="w-6 h-6 text-cyan-400" />
              <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Investor Briefing Document
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Executive Summary */}
        <section className="mb-8">
          <SectionHeader
            title="Executive Summary"
            isDark={isDark}
          />

          <GlowCard className="p-8" highlight>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-3">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">7.7M</div>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>Australian Retail Investors</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>38% of adult population</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-3">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-400 mb-1">$1.3T</div>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>Total Retail Capital</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>in listed assets</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center mb-3">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-red-400 mb-1">95%</div>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>Market Unaddressed</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>use spreadsheets only</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center mb-3">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-1">5M</div>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>Self-Directed Investors</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>65% of total investors</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-center">
                <p className="text-green-400 font-bold">Category Creator</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>First AI-powered pre-trade tax optimization platform</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-500/20 border border-blue-500/30 text-center">
                <p className="text-blue-400 font-bold">Three-Product Ecosystem</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Portfolio Intelligence → Trading → Advisor (all Year 1)</p>
              </div>
            </div>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* VerafyAI Pricing Structure */}
        <section className="mb-8">
          <SectionHeader
            title="VerafyAI Pricing Structure"
            subtitle="Founding member pricing: 50% off locked forever (before June 30, 2026)"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Starter Plan */}
            <GlowCard className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/20 border border-slate-500/30 mb-4">
                  <Sparkles className="w-5 h-5 text-slate-400" />
                  <span className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>STARTER</span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-cyan-400">$5</span>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>/month</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>or $50/year</p>
              </div>
              <div className="p-4 rounded-xl bg-orange-500/20 border border-orange-500/30 mb-6">
                <p className="text-orange-400 font-semibold text-center flex items-center justify-center gap-2">
                  <Crown className="w-4 h-4" />
                  Regular: $10/mo or $100/yr
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  '50 Holdings',
                  'Up to 3 Portfolios',
                  'Action Center (5/day)',
                  'Basic Vera voice',
                  'Tax loss harvesting detection',
                  '1 year tax history',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>

            {/* Standard Plan */}
            <GlowCard className="p-6" highlight>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 rounded-full bg-cyan-500 text-white text-sm font-bold">POPULAR</span>
              </div>
              <div className="text-center mb-6 pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-4">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-bold">STANDARD</span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-cyan-400">$10</span>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>/month</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>or $100/year</p>
              </div>
              <div className="p-4 rounded-xl bg-orange-500/20 border border-orange-500/30 mb-6">
                <p className="text-orange-400 font-semibold text-center flex items-center justify-center gap-2">
                  <Crown className="w-4 h-4" />
                  Regular: $20/mo or $200/yr
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  'Unlimited holdings & portfolios',
                  'Full Action Center',
                  'Full Vera personality',
                  'Behavioral pattern detection',
                  '2 years tax history',
                  'Priority support',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 text-sm ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>

            {/* Pro Plan */}
            <GlowCard className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-bold">AI PRO</span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-purple-400">$20</span>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>/month</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>or $200/year</p>
              </div>
              <div className="p-4 rounded-xl bg-orange-500/20 border border-orange-500/30 mb-6">
                <p className="text-orange-400 font-semibold text-center flex items-center justify-center gap-2">
                  <Crown className="w-4 h-4" />
                  Regular: $40/mo or $400/yr
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  'Chat with Vera (500 q/mo)',
                  'Scenario Modeling (20/mo)',
                  'Pre-trade CGT modeling',
                  'ATO-ready tax reports (PDF)',
                  '5 years tax history',
                  'Priority phone support',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>
        </section>

        <SectionDivider />

        {/* Direct Competitors Pricing */}
        <section className="mb-8">
          <SectionHeader
            title="Pricing Comparison (January 2026)"
            subtitle="VerafyAI Pro: 57% cheaper than Sharesight Premium with 5x more features"
            isDark={isDark}
          />

          <GlowCard className="p-6 overflow-x-auto">
            <div className="rounded-xl overflow-hidden border border-cyan-500/20 min-w-[700px]">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
                    <th className={`p-4 text-left font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Platform</th>
                    <th className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Monthly</th>
                    <th className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Annual</th>
                    <th className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Holdings</th>
                    <th className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Portfolios</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Sharesight Free', monthly: '$0', annual: '$0', holdings: '10', portfolios: '1', highlight: false },
                    { name: 'Sharesight Starter', monthly: '$19', annual: '$180', holdings: '30', portfolios: '1', highlight: false },
                    { name: 'Sharesight Premium', monthly: '$49', annual: '$468', holdings: 'Unlimited', portfolios: '5-10', highlight: false },
                    { name: 'Navexa Basic', monthly: 'N/A', annual: '$99', holdings: 'N/A', portfolios: '1', highlight: false },
                    { name: 'Navexa Premium', monthly: 'N/A', annual: '$300', holdings: 'N/A', portfolios: '10', highlight: false },
                    { name: 'VerafyAI Starter*', monthly: '$5', annual: '$50', holdings: '50', portfolios: '3', highlight: true },
                    { name: 'VerafyAI Standard*', monthly: '$10', annual: '$100', holdings: 'Unlimited', portfolios: 'Unlimited', highlight: true },
                    { name: 'VerafyAI Pro*', monthly: '$20', annual: '$200', holdings: 'Unlimited', portfolios: 'Unlimited', highlight: true },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-200'} ${row.highlight ? 'bg-cyan-500/10' : ''}`}>
                      <td className={`p-4 font-medium ${row.highlight ? 'text-cyan-400' : isDark ? 'text-white' : 'text-slate-800'}`}>{row.name}</td>
                      <td className={`p-4 text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.monthly}</td>
                      <td className={`p-4 text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.annual}</td>
                      <td className={`p-4 text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.holdings}</td>
                      <td className={`p-4 text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.portfolios}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={`text-sm mt-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              *Founding member pricing (50% off) available before June 30, 2026. Prices in AUD.
            </p>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* Feature Comparison Matrix */}
        <section className="mb-8">
          <SectionHeader
            title="Feature Comparison Matrix"
            subtitle="What VerafyAI has that nobody else does"
            isDark={isDark}
          />

          <GlowCard className="p-6 overflow-x-auto">
            <div className="rounded-xl overflow-hidden border border-cyan-500/20 min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
                    <th className={`p-4 text-left font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Feature</th>
                    <th className="p-4 text-center text-cyan-400 font-bold">VerafyAI</th>
                    <th className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Sharesight</th>
                    <th className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Navexa</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Performance Tracking', verafy: true, sharesight: true, navexa: true },
                    { feature: 'Post-Trade Tax Reporting', verafy: true, sharesight: true, navexa: true },
                    { feature: 'Unrealized CGT Report', verafy: true, sharesight: 'Std+', navexa: 'Std+' },
                    { feature: 'PRE-TRADE CGT Modeling', verafy: 'UNIQUE', sharesight: false, navexa: false },
                    { feature: 'AI Behavioral Coaching', verafy: 'UNIQUE', sharesight: false, navexa: false },
                    { feature: 'AI-Powered Parcel Selection', verafy: 'Pro', sharesight: false, navexa: 'Manual' },
                    { feature: 'Tax Loss Harvesting', verafy: 'Proactive', sharesight: false, navexa: 'Detect' },
                    { feature: 'Chat Interface (Vera AI)', verafy: 'Pro', sharesight: false, navexa: false },
                    { feature: 'Scenario Modeling', verafy: 'Pro', sharesight: false, navexa: false },
                    { feature: 'Academy & Community', verafy: 'Included', sharesight: false, navexa: false },
                    { feature: 'Referral Program', verafy: true, sharesight: false, navexa: false },
                    { feature: 'Mobile App', verafy: 'Q2 2026', sharesight: true, navexa: true },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <td className={`p-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>{row.feature}</td>
                      <td className="p-4 text-center bg-cyan-500/10">
                        {row.verafy === true ? <CheckCircle2 className="w-5 h-5 text-cyan-400 mx-auto" /> :
                         row.verafy === false ? <X className="w-5 h-5 text-red-400 mx-auto" /> :
                         row.verafy === 'UNIQUE' ? <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">UNIQUE</span> :
                         <span className="text-cyan-400 text-sm">{row.verafy}</span>}
                      </td>
                      <td className="p-4 text-center">
                        {row.sharesight === true ? <Check className="w-5 h-5 text-green-400 mx-auto" /> :
                         row.sharesight === false ? <X className="w-5 h-5 text-red-400/50 mx-auto" /> :
                         <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.sharesight}</span>}
                      </td>
                      <td className="p-4 text-center">
                        {row.navexa === true ? <Check className="w-5 h-5 text-green-400 mx-auto" /> :
                         row.navexa === false ? <X className="w-5 h-5 text-red-400/50 mx-auto" /> :
                         <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.navexa}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlowCard>

          {/* Unique Features Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {[
              { title: 'Pre-Trade CGT Modeling', desc: 'Shows tax impact BEFORE you execute trade', tag: 'UNIQUE' },
              { title: 'AI Behavioral Coaching', desc: 'Patent-pending emotional decision prevention', tag: 'UNIQUE' },
              { title: 'Chat with Vera', desc: 'Conversational AI (500 q/mo)', tag: 'UNIQUE' },
              { title: 'Scenario Modeling', desc: "Test 'what-if' strategies (20/mo)", tag: 'UNIQUE' },
              { title: 'AI Parcel Selection', desc: 'Optimal parcels for lowest CGT', tag: 'AI' },
              { title: 'Educational Ecosystem', desc: 'Academy + Community included', tag: 'INCLUDED' },
              { title: 'Year 1 Ecosystem', desc: 'Portfolio + Trading + Advisor', tag: 'UNIQUE' },
            ].map((item, i) => (
              <GlowCard key={i} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    item.tag === 'UNIQUE' ? 'bg-green-500/20 text-green-400' :
                    item.tag === 'AI' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-cyan-500/20 text-cyan-400'
                  }`}>{item.tag}</span>
                </div>
                <h4 className={`font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
              </GlowCard>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Adjacent Competitors Review */}
        <section className="mb-8">
          <SectionHeader
            title="Adjacent & Emerging Players - Full Review"
            subtitle="Not direct competitors but monitored for potential pivots"
            isDark={isDark}
          />

          <GlowCard className="p-6 overflow-x-auto">
            <div className="rounded-xl overflow-hidden border border-cyan-500/20 min-w-[800px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
                    <th className={`p-3 text-left font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Platform</th>
                    <th className={`p-3 text-left ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Type</th>
                    <th className={`p-3 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Est. Users</th>
                    <th className={`p-3 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Pricing</th>
                    <th className={`p-3 text-left ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Why Not Direct Competition</th>
                    <th className={`p-3 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Threat</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Pearler', type: 'Robo-advisor', users: '~50K', pricing: '$9-15/mo', why: 'Auto-invest focus, no AI', threat: 'Medium' },
                    { name: 'Stockspot', type: 'Robo-advisor', users: '100K+', pricing: '$29-49/mo', why: 'ETF/SMSF, not self-directed', threat: 'Medium' },
                    { name: 'Simply Wall St', type: 'Analysis tool', users: '~200K AU', pricing: '$10-20/mo', why: 'Analysis-first, weak tax', threat: 'Low' },
                    { name: 'CommSec Portfolio', type: 'Broker-embedded', users: 'N/A', pricing: 'Free', why: 'CommSec clients only', threat: 'Low' },
                    { name: 'CMC Markets', type: 'Broker-embedded', users: 'N/A', pricing: 'Free', why: 'CMC clients only', threat: 'Low' },
                    { name: 'Yahoo Finance', type: 'Free global', users: 'N/A', pricing: 'Free', why: 'No AU tax intelligence', threat: 'Very Low' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <td className={`p-3 font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>{row.name}</td>
                      <td className={`p-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.type}</td>
                      <td className={`p-3 text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.users}</td>
                      <td className={`p-3 text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.pricing}</td>
                      <td className={`p-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.why}</td>
                      <td className="p-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          row.threat === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          row.threat === 'Low' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>{row.threat}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
              <h4 className={`font-bold text-sm mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Key Insight: No Adjacent Player Offers Our Core Value</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" />
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Pre-trade CGT modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" />
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>AI behavioral coaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" />
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Complete ecosystem</span>
                </div>
              </div>
            </div>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* Market Sizing */}
        <section className="mb-8">
          <SectionHeader
            title="Market Sizing (TAM)"
            subtitle="Australian & Global Self-Directed Investor Market"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <GlowCard className="p-8" highlight>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8" />
                Australia
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Total Retail Investors', value: '7.7M adults', note: '38% of adult population' },
                  { label: 'Median Portfolio Value', value: '$170,000 AUD', note: 'ASX 2025' },
                  { label: 'Self-Directed Investors', value: '5M', note: '65% trade via non-advice' },
                  { label: 'SMSF Investors', value: '1.1M', note: 'Managing $900B' },
                  { label: 'Current Penetration', value: '~5%', note: '~250K use tracking tools' },
                  { label: 'Unaddressed Market', value: '95%', note: '~4.75M use spreadsheets' },
                ].map((item, i) => (
                  <div key={i} className={`p-3 rounded-lg flex justify-between items-center ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item.label}</span>
                    <div className="text-right">
                      <span className="font-bold text-cyan-400">{item.value}</span>
                      <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <TrendingUp className="w-8 h-8 text-purple-400" />
                Global Market
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Global Total', value: '145M accounts', note: '$104.1B market value' },
                  { label: 'Growth Rate', value: '4.49% CAGR', note: 'to 2034' },
                  { label: 'North America', value: '80M+ investors', note: '4-5% CAGR' },
                  { label: 'India', value: '40M+ demat accounts', note: '12-15% CAGR (high growth)' },
                ].map((item, i) => (
                  <div key={i} className={`p-3 rounded-lg flex justify-between items-center ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item.label}</span>
                    <div className="text-right">
                      <span className="font-bold text-purple-400">{item.value}</span>
                      <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </section>

        <SectionDivider />

        {/* Three-Product Ecosystem */}
        <section className="mb-8">
          <SectionHeader
            title="Three-Product Ecosystem (All Year 1)"
            subtitle="VerafyAI is the ONLY platform delivering all three products in Year 1"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                phase: 'Phase 1',
                product: 'Portfolio Intelligence',
                launch: 'Feb 15 (Beta) / Apr 1 (Public)',
                target: '5M self-directed investors',
                revenue: '$50-$200/year',
                competitors: 'Sharesight, Navexa',
                color: 'cyan',
                icon: Brain,
              },
              {
                phase: 'Phase 2',
                product: 'Trading Platform',
                launch: 'Q2-Q3 2026',
                target: '7.7M retail investors',
                revenue: 'Included in Pro or standalone',
                competitors: 'CommSec, Superhero, SelfWealth',
                color: 'blue',
                icon: LineChart,
              },
              {
                phase: 'Phase 3',
                product: 'Advisor Platform',
                launch: 'Q4 2026',
                target: '~100K financial advisors',
                revenue: '$3,000/year per advisor',
                competitors: 'Xplan (IOOF), Midwinter',
                color: 'purple',
                icon: Briefcase,
              },
            ].map((item, i) => (
              <GlowCard key={i} className="p-6" highlight={i === 0}>
                <div className="text-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                    item.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>{item.phase}</span>
                </div>
                <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                  item.color === 'cyan' ? 'bg-gradient-to-br from-cyan-400 to-blue-500' :
                  item.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-indigo-500' :
                  'bg-gradient-to-br from-purple-400 to-pink-500'
                }`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-xl font-bold text-center mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.product}</h3>
                <p className={`text-center text-sm mb-4 ${
                  item.color === 'cyan' ? 'text-cyan-400' :
                  item.color === 'blue' ? 'text-blue-400' :
                  'text-purple-400'
                }`}>{item.launch}</p>
                <div className={`space-y-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <p><strong>Target:</strong> {item.target}</p>
                  <p><strong>Revenue:</strong> {item.revenue}</p>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>Competitors: {item.competitors}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Competitive Moats */}
        <section className="mb-8">
          <SectionHeader
            title="Competitive Moats"
            subtitle="Defensible advantages with 12-36 month head start"
            isDark={isDark}
          />

          <div className="space-y-4">
            {[
              {
                moat: 'Behavioral Finance AI',
                strength: 'Very High',
                patent: 'Patent-pending',
                replicate: '12-18 months',
                desc: 'Tracks emotional patterns, intervenes on panic-selling, learns individual risk tolerance.',
                why: 'Requires 10K+ user interactions to train; competitors start from scratch',
              },
              {
                moat: 'Pre-Trade CGT Engine',
                strength: 'Very High',
                patent: 'First-mover',
                replicate: '12-18 months',
                desc: 'Calculates tax impact BEFORE trade, suggests optimal parcel selection.',
                why: 'Requires deep AU tax law expertise + real-time parcel tracking',
              },
              {
                moat: 'AI-Native Architecture',
                strength: 'High',
                patent: 'Architectural',
                replicate: '18-24 months',
                desc: 'Built on Claude Sonnet (AWS Bedrock) from day one.',
                why: 'Sharesight/Navexa have 10+ years legacy code; AI requires full rebuild',
              },
              {
                moat: 'Three-Product Ecosystem',
                strength: 'Very High',
                patent: 'Execution moat',
                replicate: '24-36 months',
                desc: 'Portfolio → Trading → Advisor launching in Year 1.',
                why: 'Requires $5M+, 3 product teams, coordinating parallel launches',
              },
              {
                moat: 'Behavioral Data Moat',
                strength: 'High',
                patent: 'Network effect',
                replicate: 'Compounding',
                desc: 'Every interaction trains Vera; data creates actuarial advantage.',
                why: 'Winner-takes-most: 1K users = weak AI, 100K users = strong AI',
              },
            ].map((item, i) => (
              <GlowCard key={i} className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.moat}</h3>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.strength === 'Very High' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>{item.strength}</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-400">{item.patent}</span>
                  </div>
                </div>
                <p className={`mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.desc}</p>
                <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <strong>Time to replicate:</strong> {item.replicate} | <strong>Why hard:</strong> {item.why}
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Risk Analysis */}
        <section className="mb-8">
          <SectionHeader
            title="Risk Analysis & Mitigation"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-8">
            <GlowCard className="p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                External Risks
              </h3>
              <div className="space-y-4">
                {[
                  { risk: 'ATO CGT Rule Changes', impact: 'High', likelihood: 'Low-Medium', mitigation: 'Flexible engine; expand to zero-CGT markets' },
                  { risk: 'AI Regulation', impact: 'Medium', likelihood: 'Medium', mitigation: "Design as 'decision support' not 'advice'" },
                  { risk: 'Sharesight Adds Pre-Trade CGT', impact: 'High', likelihood: 'Medium (12-18mo)', mitigation: 'First-mover data moat; ecosystem lock-in; patents' },
                  { risk: 'Market Downturn', impact: 'Medium', likelihood: 'Medium', mitigation: 'Counter-cyclical value prop; sticky SMSF segment' },
                ].map((item, i) => (
                  <div key={i} className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.risk}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs bg-red-500/20 text-red-400">Impact: {item.impact}</span>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.mitigation}</p>
                  </div>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Internal Risks
              </h3>
              <div className="space-y-4">
                {[
                  { risk: 'AI False Positives', impact: 'Medium', likelihood: 'Medium', mitigation: 'Conservative thresholds; A/B testing; clear disclaimers' },
                  { risk: 'Tax Calculation Errors', impact: 'High', likelihood: 'Low', mitigation: 'Rigorous QA; accountant partnerships; PI insurance' },
                  { risk: 'CAC Inflation', impact: 'Medium', likelihood: 'Medium', mitigation: 'Diversify channels; target LTV:CAC > 5:1' },
                ].map((item, i) => (
                  <div key={i} className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.risk}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs bg-orange-500/20 text-orange-400">Impact: {item.impact}</span>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.mitigation}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </section>

        <SectionDivider />

        {/* Churn & Retention */}
        <section className="mb-8">
          <SectionHeader
            title="Churn & Retention Strategy"
            subtitle="Target: <15% annual churn vs 22% industry average"
            isDark={isDark}
          />

          <GlowCard className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                <p className="text-3xl font-bold text-red-400">22%</p>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>Industry Avg Annual Churn</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>(360 Research Reports 2025)</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                <p className="text-3xl font-bold text-green-400">&lt;15%</p>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>VerafyAI Target</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Annual Churn</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <p className="text-3xl font-bold text-cyan-400">3-4 yrs</p>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>Expected Customer</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Lifetime</p>
              </div>
            </div>

            <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Retention Mechanisms</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                { title: 'Behavioral AI Lock-in', desc: 'Vera learns patterns; switching = starting over' },
                { title: 'Historical Data Moat', desc: '5 years of tax history stored; migration friction' },
                { title: 'Community Network Effects', desc: 'Academy + Forum = social switching costs' },
                { title: 'Founding Member Pricing', desc: '50% discount forever = financial disincentive' },
                { title: 'Free Trial Conversion', desc: '14-day trial demonstrates value before payment' },
                { title: 'Ecosystem Progression', desc: 'Portfolio → Trading → Advisor cross-sell stickiness' },
              ].map((item, i) => (
                <div key={i} className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                  <p className={`font-medium text-sm mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</p>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                </div>
              ))}
            </div>

            <h4 className={`font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Early Warning Metrics</h4>
            <div className="grid md:grid-cols-4 gap-3">
              {[
                'Login frequency drop (30-day rolling)',
                'Action Center engagement decline',
                'Vera chat abandonment rate',
                'Community forum inactivity',
              ].map((item, i) => (
                <div key={i} className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-center">
                  <p className="text-xs text-yellow-400">{item}</p>
                </div>
              ))}
            </div>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* Global Expansion */}
        <section className="mb-8">
          <SectionHeader
            title="Global Expansion Roadmap"
            isDark={isDark}
          />

          <GlowCard className="p-6 overflow-x-auto">
            <div className="rounded-xl overflow-hidden border border-cyan-500/20 min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
                    <th className={`p-4 text-left font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Year</th>
                    <th className={`p-4 text-left ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Markets</th>
                    <th className={`p-4 text-left ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Strategy</th>
                    <th className={`p-4 text-left ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Localization</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: '2026', markets: 'Australia', strategy: 'Launch all 3 products, establish category', local: 'Full AU tax engine, ATO integration' },
                    { year: '2027', markets: 'USA, Canada', strategy: 'Portfolio Intelligence only', local: 'US federal + state tax, Canadian CGT' },
                    { year: '2027', markets: 'India', strategy: 'Portfolio Intelligence only', local: 'STCG/LTCG tax engine, INR currency' },
                    { year: '2028', markets: 'Singapore, UAE, HK', strategy: 'Performance + behavioral (no tax)', local: 'Multi-currency, minimal tax features' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <td className="p-4 font-bold text-cyan-400">{row.year}</td>
                      <td className={`p-4 font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>{row.markets}</td>
                      <td className={`p-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.strategy}</td>
                      <td className={`p-4 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{row.local}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* Summary */}
        <section>
          <GlowCard className="p-10 text-center" highlight>
            <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Why We Win</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: '12-18 Month Window', desc: 'Sharesight has 500K+ users but ZERO pre-trade CGT. By late 2027, we have ecosystem lock-in + 18 months AI training advantage.' },
                { title: 'Founder-Market Fit', desc: 'CTO built xplan (the advisor tool). CEO scaled healthcare platforms to $12M. We know where the inefficiencies are coded.' },
                { title: 'AI-Native Architecture', desc: "While others bolt on AI chatbots, we've built AI-native from day one. We ship in weeks what takes competitors months." },
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                  <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Data sourced from: ASX 2025, Investability AU (June/Nov 2025), First Advisers 2025, 360 Research Reports 2025, Sharesight & Navexa official pricing (Jan 30, 2026)
            </p>
          </GlowCard>
        </section>

      </div>
    </div>
  );
}
