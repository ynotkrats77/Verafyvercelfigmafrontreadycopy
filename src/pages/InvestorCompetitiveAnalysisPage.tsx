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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Market Sizing</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              January 2026
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
              <BarChart3 className="w-6 h-6 text-cyan-400" />
              <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Data-Driven Investment Thesis
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
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">7.7M</div>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>Australian investors</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>holding $1.3 trillion in assets</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-2">77%</div>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>Use zero portfolio tools</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>~6 million underserved investors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">$5-20</div>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>Per month pricing</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>50% founding member discount</p>
              </div>
            </div>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* VerafyAI Pricing Structure */}
        <section className="mb-8">
          <SectionHeader
            title="VerafyAI Pricing Structure"
            subtitle="Simple, transparent pricing with founding member benefits"
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
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>or $50/year (save 17%)</p>
              </div>
              <div className="p-4 rounded-xl bg-orange-500/20 border border-orange-500/30 mb-6">
                <p className="text-orange-400 font-semibold text-center flex items-center justify-center gap-2">
                  <Crown className="w-4 h-4" />
                  Founding: $2.50/mo or $25/yr
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  '1 Portfolio',
                  '50 Holdings',
                  'Basic dashboard',
                  'Performance tracking',
                  'Email support',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
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
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>or $100/year (save 17%)</p>
              </div>
              <div className="p-4 rounded-xl bg-orange-500/20 border border-orange-500/30 mb-6">
                <p className="text-orange-400 font-semibold text-center flex items-center justify-center gap-2">
                  <Crown className="w-4 h-4" />
                  Founding: $5/mo or $50/yr
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  '3 Portfolios',
                  '200 Holdings',
                  'AI daily insights',
                  'Tax-loss harvesting',
                  'Dividend tracking',
                  'Priority support',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>or $200/year (save 17%)</p>
              </div>
              <div className="p-4 rounded-xl bg-orange-500/20 border border-orange-500/30 mb-6">
                <p className="text-orange-400 font-semibold text-center flex items-center justify-center gap-2">
                  <Crown className="w-4 h-4" />
                  Founding: $10/mo or $100/yr
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  '10 Portfolios',
                  '500 Holdings',
                  'Vera AI assistant',
                  'Pre-trade CGT modelling',
                  'Strategic scenario planning',
                  'White-glove support',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>

          <GlowCard className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-orange-400" />
                <div>
                  <p className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Founding Member Benefits</p>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>50% discount locked for life</p>
                </div>
              </div>
              <div className="h-12 w-px bg-slate-700 hidden md:block" />
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-cyan-400" />
                <div>
                  <p className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Tax Pack Add-On</p>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>$100/FY comprehensive CGT report</p>
                </div>
              </div>
            </div>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* Competitive Landscape */}
        <section className="mb-8">
          <SectionHeader
            title="Competitive Landscape"
            subtitle="How we compare to existing solutions"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Sharesight */}
            <GlowCard className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <LineChart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Sharesight</h3>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>Established market leader</p>
                </div>
              </div>
              <div className={`p-4 rounded-lg mb-4 ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                <p className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Pricing:</p>
                <ul className="space-y-2">
                  <li className={isDark ? 'text-slate-300' : 'text-slate-700'}>Starter: <span className="text-blue-400 font-bold">$19/mo</span> (10 holdings)</li>
                  <li className={isDark ? 'text-slate-300' : 'text-slate-700'}>Investor: <span className="text-blue-400 font-bold">$35/mo</span> (unlimited)</li>
                  <li className={isDark ? 'text-slate-300' : 'text-slate-700'}>Expert: <span className="text-blue-400 font-bold">$49/mo</span> (advanced)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><Check className="w-4 h-4 inline text-green-400 mr-2" />Good tax reporting</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><Check className="w-4 h-4 inline text-green-400 mr-2" />Multi-broker support</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><X className="w-4 h-4 inline text-red-400 mr-2" />No AI insights</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><X className="w-4 h-4 inline text-red-400 mr-2" />No pre-trade modelling</p>
              </div>
            </GlowCard>

            {/* Navexa */}
            <GlowCard className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Navexa</h3>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>Australian challenger</p>
                </div>
              </div>
              <div className={`p-4 rounded-lg mb-4 ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                <p className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Pricing:</p>
                <ul className="space-y-2">
                  <li className={isDark ? 'text-slate-300' : 'text-slate-700'}>Investor: <span className="text-green-400 font-bold">$99/yr</span> (1 portfolio)</li>
                  <li className={isDark ? 'text-slate-300' : 'text-slate-700'}>Trader: <span className="text-green-400 font-bold">$159/yr</span> (3 portfolios)</li>
                  <li className={isDark ? 'text-slate-300' : 'text-slate-700'}>Pro: <span className="text-green-400 font-bold">$299/yr</span> (unlimited)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><Check className="w-4 h-4 inline text-green-400 mr-2" />Clean interface</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><Check className="w-4 h-4 inline text-green-400 mr-2" />AU tax focused</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><X className="w-4 h-4 inline text-red-400 mr-2" />No AI features</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><X className="w-4 h-4 inline text-red-400 mr-2" />Limited actionable insights</p>
              </div>
            </GlowCard>
          </div>

          {/* Feature Comparison Matrix */}
          <GlowCard className="p-6 overflow-x-auto">
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Feature Comparison Matrix</h3>
            <div className="rounded-xl overflow-hidden border border-cyan-500/20 min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
                    <th className={`p-4 text-left font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Feature</th>
                    <th className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Sharesight</th>
                    <th className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Navexa</th>
                    <th className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Empower</th>
                    <th className="p-4 text-center text-cyan-400 font-bold">VerafyAI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pre-trade CGT Modelling', false, false, false, true],
                    ['AI-Powered Insights', false, false, false, true],
                    ['Plain English Recommendations', false, false, false, true],
                    ['Tax-Loss Harvesting Alerts', false, false, false, true],
                    ['Australian Tax Rules', true, true, false, true],
                    ['Dividend Tracking', true, true, true, true],
                    ['Multi-Portfolio Support', true, true, true, true],
                    ['Corporate Actions', true, true, false, true],
                    ['Real-time Sync', true, true, false, true],
                    ['Price/mo (mid-tier)', '$35', '$13', 'Free', '$10'],
                  ].map(([feature, s, n, e, v], i) => (
                    <tr key={i} className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <td className={`p-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>{feature}</td>
                      <td className="p-4 text-center">
                        {typeof s === 'boolean' ? (s ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400/50 mx-auto" />) : <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{s}</span>}
                      </td>
                      <td className="p-4 text-center">
                        {typeof n === 'boolean' ? (n ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400/50 mx-auto" />) : <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{n}</span>}
                      </td>
                      <td className="p-4 text-center">
                        {typeof e === 'boolean' ? (e ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400/50 mx-auto" />) : <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{e}</span>}
                      </td>
                      <td className="p-4 text-center bg-cyan-500/10">
                        {typeof v === 'boolean' ? (v ? <CheckCircle2 className="w-6 h-6 text-cyan-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />) : <span className="text-cyan-400 font-bold">{v}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* Market Sizing */}
        <section className="mb-8">
          <SectionHeader
            title="Market Sizing"
            subtitle="Australian Retail Investment Landscape"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <GlowCard className="p-8" highlight>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8" />
                Total Addressable Market
              </h3>
              <div className="space-y-6">
                <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Australian investors</span>
                    <span className="text-2xl font-bold text-cyan-400">7.7M</span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Direct share ownership</p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Assets under management</span>
                    <span className="text-2xl font-bold text-cyan-400">$1.3T</span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Direct equities held by retail</p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Using portfolio tools</span>
                    <span className="text-2xl font-bold text-red-400">23%</span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>77% use nothing or spreadsheets</p>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Target className="w-8 h-8 text-purple-400" />
                Serviceable Market
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Active self-directed investors</span>
                    <span className="text-xl font-bold text-purple-400">3.5M</span>
                  </div>
                  <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500" style={{ width: '45%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Addressable (tech-savvy, paying)</span>
                    <span className="text-xl font-bold text-purple-400">1.5M</span>
                  </div>
                  <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500" style={{ width: '20%' }} />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-purple-500/20 border border-purple-500/30">
                  <p className="text-purple-400 font-semibold text-center">
                    1.5M × $12/mo avg = <span className="text-2xl">$216M</span> ARR potential
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Growth Drivers */}
          <GlowCard className="p-8">
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Market Growth Drivers</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: TrendingUp, label: 'Post-COVID surge', value: '+2.5M', desc: 'new investors since 2020', color: 'green' },
                { icon: Users, label: 'Millennial adoption', value: '61%', desc: 'now invest directly', color: 'cyan' },
                { icon: Building2, label: 'SMSF growth', value: '1.1M', desc: 'funds, $900B assets', color: 'purple' },
                { icon: Percent, label: 'ETF explosion', value: '40%', desc: 'annual inflow growth', color: 'orange' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-3 ${
                    item.color === 'green' ? 'bg-green-500/20' :
                    item.color === 'cyan' ? 'bg-cyan-500/20' :
                    item.color === 'purple' ? 'bg-purple-500/20' : 'bg-orange-500/20'
                  }`}>
                    <item.icon className={`w-7 h-7 ${
                      item.color === 'green' ? 'text-green-400' :
                      item.color === 'cyan' ? 'text-cyan-400' :
                      item.color === 'purple' ? 'text-purple-400' : 'text-orange-400'
                    }`} />
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${
                    item.color === 'green' ? 'text-green-400' :
                    item.color === 'cyan' ? 'text-cyan-400' :
                    item.color === 'purple' ? 'text-purple-400' : 'text-orange-400'
                  }`}>{item.value}</div>
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.label}</p>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* Ecosystem Strategy */}
        <section className="mb-8">
          <SectionHeader
            title="Ecosystem Strategy"
            subtitle="Three phases to market dominance"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlowCard className="p-6" highlight>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-4">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-bold">PHASE 1: NOW</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Portfolio Intelligence</h3>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Vera AI assistant',
                  'Real-time portfolio analysis',
                  'Tax optimisation insights',
                  'Plain English actions',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className={`p-3 rounded-lg text-center ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                <span className="text-cyan-400 font-bold">$5-$20/month</span>
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-bold">PHASE 2: JULY 2026</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Trading Platform</h3>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'IBKR brokerage gateway',
                  'Seamless execution',
                  'Separate entity (Chinese wall)',
                  'No AI advice crossing',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className={`p-3 rounded-lg text-center ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                <span className="text-blue-400 font-bold">Brokerage fees</span>
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
                  <Target className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-bold">PHASE 3: 2027</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Adviser Platform</h3>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'One-meeting SOA generation',
                  'Conversational fact-find',
                  'Xplan replacement',
                  '15,000 adviser market',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className={`p-3 rounded-lg text-center ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                <span className="text-purple-400 font-bold">$1,500-$4,000/month</span>
              </div>
            </GlowCard>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30">
              <Zap className="w-6 h-6 text-cyan-400" />
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Combined TAM: <span className="text-cyan-400">$2.1B+</span> across all phases
              </span>
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Key Differentiators */}
        <section className="mb-8">
          <SectionHeader
            title="Key Differentiators"
            subtitle="Why VerafyAI wins"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-8">
            <GlowCard className="p-8" highlight>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8" />
                Technology Moat
              </h3>
              <ul className="space-y-4">
                {[
                  { title: 'Hybrid AI Architecture', desc: 'Rules for math (no hallucinations), AI for insights' },
                  { title: '2 Patents Lodged', desc: 'Pre-trade CGT modelling methodology' },
                  { title: 'Plain English Output', desc: 'Actions, not charts that confuse' },
                  { title: 'Australian Tax Native', desc: 'Built for AU rules from day one' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</p>
                      <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Shield className="w-8 h-8 text-purple-400" />
                Business Moat
              </h3>
              <ul className="space-y-4">
                {[
                  { title: 'Regulatory Clarity', desc: 'Chinese wall architecture - no AFSL required for Phase 1' },
                  { title: 'Unit Economics', desc: 'LTV:CAC of 48:1, 84-92% gross margins' },
                  { title: 'Founder-Market Fit', desc: 'Ex-GBST/Xplan CTO + healthcare scaling CEO' },
                  { title: 'Capital Efficiency', desc: 'Product built before raising, $150K deployed' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</p>
                      <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>
        </section>

        <SectionDivider />

        {/* Summary */}
        <section>
          <GlowCard className="p-10 text-center" highlight>
            <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Investment Thesis</h2>
            <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 font-light max-w-3xl mx-auto">
              VerafyAI captures the massive underserved retail investor market with AI-powered tools
              at half the price of competitors, with a clear path to 3x market expansion through
              trading and adviser platforms.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { value: '7.7M', label: 'Investors' },
                { value: '77%', label: 'Underserved' },
                { value: '50%', label: 'Price Advantage' },
                { value: '$2.1B', label: 'Total TAM' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className={isDark ? 'text-slate-400' : 'text-slate-500'}>{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-bold text-xl shadow-2xl shadow-cyan-500/30">
              <DollarSign className="w-6 h-6" />
              $1M Seed @ $10M Pre-Money
            </div>
          </GlowCard>
        </section>

      </div>
    </div>
  );
}
