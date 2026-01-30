import { motion } from 'framer-motion';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Check,
  CheckCircle2,
  Target,
  Calculator,
  PieChart,
  BarChart3,
  Users,
  Percent,
  Clock,
  AlertTriangle,
  Shield,
  Building2,
  Briefcase,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { GlowCard } from '../components/GlowCard';
import { SectionHeader } from '../components/SectionHeader';

interface InvestorFinancialsPageProps {
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

export function InvestorFinancialsPage({ isDark }: InvestorFinancialsPageProps) {
  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
              <Calculator className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Financial Model</span>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Financial Model & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projections</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Defendable Projections & Stress-Tested Assumptions
            </p>
            <p className={`text-lg mt-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Prepared for Antler | Version 2.0 | January 2026
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Executive Summary */}
        <section className="mb-20">
          <SectionHeader
            title="Executive Summary"
            subtitle="Three scenarios with different funding levels"
            isDark={isDark}
          />

          <div className="overflow-x-auto">
            <table className={`w-full rounded-xl overflow-hidden ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Metric</th>
                  <th className={`p-4 text-center text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Conservative</th>
                  <th className={`p-4 text-center text-sm font-semibold text-cyan-400`}>Base</th>
                  <th className={`p-4 text-center text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Aggressive</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-200'}`}>
                {[
                  { metric: 'Funding', conservative: '$1M', base: '$1M', aggressive: '$3M' },
                  { metric: 'ARR Year 1 (Apr-Dec)', conservative: '$648K', base: '$1.2M', aggressive: '$2.5M' },
                  { metric: 'ARR Year 3', conservative: '$6.2M', base: '$10M', aggressive: '$39.6M' },
                  { metric: 'Break-even', conservative: 'Q2 2027', base: 'Q4 2026', aggressive: 'Q3 2026' },
                  { metric: 'Exit Value (Yr 4)', conservative: '$136M', base: '$177M', aggressive: '$665M', highlight: true },
                  { metric: 'Investor Return', conservative: '12.4x', base: '16.1x', aggressive: '60x', highlight: true },
                ].map((row, i) => (
                  <tr key={i} className={row.highlight ? 'bg-cyan-500/10' : ''}>
                    <td className={`p-4 font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{row.metric}</td>
                    <td className={`p-4 text-center ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{row.conservative}</td>
                    <td className={`p-4 text-center font-bold ${row.highlight ? 'text-cyan-400' : 'text-cyan-400'}`}>{row.base}</td>
                    <td className={`p-4 text-center ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{row.aggressive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Revenue Assumptions */}
        <section className="mb-20">
          <SectionHeader
            title="Revenue Assumptions"
            subtitle="Confirmed pricing and tier mix projections"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GlowCard className="p-6" highlight>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-cyan-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Pricing (Confirmed)</h4>
              </div>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Tier</th>
                    <th className="py-2 text-right">Monthly</th>
                    <th className="py-2 text-right">Annual</th>
                    <th className="py-2 text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tier: 'Starter', monthly: '$5', annual: '$60', status: 'confirmed' },
                    { tier: 'Standard', monthly: '$10', annual: '$120', status: 'confirmed' },
                    { tier: 'Professional', monthly: '$20', annual: '$240', status: 'confirmed' },
                    { tier: 'Tax Pack add-on', monthly: '$5', annual: '$60', status: 'confirmed' },
                    { tier: 'Trading (Q3)', monthly: '$30', annual: '$360', status: 'planned' },
                    { tier: 'Advisor', monthly: '$99-299', annual: '$1,188-$3,588', status: 'planned' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                      <td className="py-2">{row.tier}</td>
                      <td className="py-2 text-right font-medium">{row.monthly}</td>
                      <td className="py-2 text-right">{row.annual}</td>
                      <td className="py-2 text-center">
                        {row.status === 'confirmed' ? (
                          <span className="text-green-400 text-xs">Confirmed</span>
                        ) : (
                          <span className="text-slate-500 text-xs">Planned</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <PieChart className="w-6 h-6 text-blue-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Tier Mix & ARPU</h4>
              </div>
              <div className="space-y-4">
                {[
                  { tier: 'Starter', pct: 10, color: 'slate', contribution: '$6' },
                  { tier: 'Standard', pct: 30, color: 'blue', contribution: '$36' },
                  { tier: 'Professional', pct: 60, color: 'cyan', contribution: '$144' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item.tier}</span>
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{item.pct}% = {item.contribution}</span>
                    </div>
                    <div className={`h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div
                        className={`h-full rounded-full ${
                          item.color === 'cyan' ? 'bg-cyan-500' :
                          item.color === 'blue' ? 'bg-blue-500' :
                          'bg-slate-500'
                        }`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className={`mt-4 p-3 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>+ Tax Pack (40% attach)</span>
                    <span className={`font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>$24</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-700">
                    <span className="text-cyan-400 font-semibold">Blended ARPU</span>
                    <span className="text-xl font-bold text-cyan-400">$216/year</span>
                  </div>
                </div>
              </div>
              <p className={`mt-4 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Rationale: Sharesight reports 70%+ on premium tiers. Our Pro tier is 52% cheaper.
              </p>
            </GlowCard>
          </div>
        </section>

        {/* Growth Assumptions */}
        <section className="mb-20">
          <SectionHeader
            title="Growth Assumptions"
            subtitle="User growth, conversion, and retention metrics"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-3 gap-6">
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>User Growth Rate</h4>
              </div>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Scenario</th>
                    <th className="py-2 text-right">Year 1</th>
                    <th className="py-2 text-right">Year 2</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: 'Conservative', y1: '15%', y2: '10%' },
                    { scenario: 'Base', y1: '20%', y2: '12%', highlight: true },
                    { scenario: 'Aggressive', y1: '25%', y2: '15%' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'} ${row.highlight ? 'bg-cyan-500/10' : ''}`}>
                      <td className={`py-2 ${row.highlight ? 'text-cyan-400' : ''}`}>{row.scenario}</td>
                      <td className="py-2 text-right">{row.y1} MoM</td>
                      <td className="py-2 text-right">{row.y2} MoM</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={`mt-3 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                15% MoM is conservative. Sharesight grew 40%+ YoY in early years.
              </p>
            </GlowCard>

            <GlowCard className="p-6" highlight>
              <div className="flex items-center gap-3 mb-4">
                <Percent className="w-6 h-6 text-cyan-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Conversion Rate</h4>
              </div>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Scenario</th>
                    <th className="py-2 text-right">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: 'Conservative', rate: '35%' },
                    { scenario: 'Base', rate: '40%', highlight: true },
                    { scenario: 'Aggressive', rate: '45%' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'} ${row.highlight ? 'bg-cyan-500/10' : ''}`}>
                      <td className={`py-2 ${row.highlight ? 'text-cyan-400' : ''}`}>{row.scenario}</td>
                      <td className="py-2 text-right font-bold">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={`mt-3 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Free tier limited to 10 holdings. Users MUST upgrade or churn. This is a trial, not freemium.
              </p>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-6 h-6 text-orange-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Churn Rate</h4>
              </div>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Scenario</th>
                    <th className="py-2 text-right">Annual</th>
                    <th className="py-2 text-right">Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: 'Conservative', annual: '15%', monthly: '1.25%' },
                    { scenario: 'Base', annual: '12%', monthly: '1.0%', highlight: true },
                    { scenario: 'Aggressive', annual: '10%', monthly: '0.83%' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'} ${row.highlight ? 'bg-cyan-500/10' : ''}`}>
                      <td className={`py-2 ${row.highlight ? 'text-cyan-400' : ''}`}>{row.scenario}</td>
                      <td className="py-2 text-right">{row.annual}</td>
                      <td className="py-2 text-right">{row.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={`mt-3 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Sharesight reports &lt;10% churn. Tax data = 7-year ATO requirement = high switching cost.
              </p>
            </GlowCard>
          </div>
        </section>

        {/* Cost Assumptions */}
        <section className="mb-20">
          <SectionHeader
            title="Cost Assumptions"
            subtitle="Customer acquisition and operating costs"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-purple-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Customer Acquisition Cost (CAC)</h4>
              </div>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Channel</th>
                    <th className="py-2 text-right">CAC</th>
                    <th className="py-2 text-right">% Budget</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { channel: 'Content/SEO', cac: '$8', pct: '40%' },
                    { channel: 'Paid Ads', cac: '$25', pct: '30%' },
                    { channel: 'Referral', cac: '$15', pct: '20%' },
                    { channel: 'Partnerships', cac: '$5', pct: '10%' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                      <td className="py-2">{row.channel}</td>
                      <td className="py-2 text-right">{row.cac}</td>
                      <td className="py-2 text-right">{row.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 flex justify-between items-center">
                <span className="text-purple-400 font-semibold">Blended CAC</span>
                <span className="text-xl font-bold text-purple-400">$17</span>
              </div>
              <p className={`mt-3 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Sensitivity: If CAC increases 50% to $25, LTV:CAC drops to 33:1 (still exceptional).
              </p>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-6 h-6 text-green-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Variable Costs Per User</h4>
              </div>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Item</th>
                    <th className="py-2 text-right">Annual Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: 'AI/ML usage (20 queries/mo)', cost: '$7.20' },
                    { item: 'Infrastructure (AWS allocated)', cost: '$6.00' },
                    { item: 'Support (0.5 tickets/mo)', cost: '$12.00' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                      <td className="py-2">{row.item}</td>
                      <td className="py-2 text-right">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 p-3 rounded-lg bg-green-500/20 border border-green-500/30">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Total Variable Cost</span>
                  <span className="font-bold text-white">$25.20/user/year</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-green-500/30">
                  <span className="text-green-400 font-semibold">Gross Margin</span>
                  <span className="text-xl font-bold text-green-400">88%</span>
                </div>
              </div>
              <p className={`mt-3 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Sensitivity: If AI costs double, gross margin drops to 85% (still strong for SaaS).
              </p>
            </GlowCard>
          </div>

          {/* Fixed Costs */}
          <GlowCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-blue-400" />
              <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Fixed Costs (Monthly)</h4>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { category: 'Founders (2)', amount: '$8,000', note: 'Nupur only; Amit deferred' },
                { category: 'Contractors (3)', amount: '$13,000', note: 'Dev, QA, Design' },
                { category: 'AWS Infrastructure', amount: '$3,000', note: 'Baseline' },
                { category: 'SaaS Tools', amount: '$1,000', note: 'Stripe, SendGrid, etc.' },
                { category: 'Marketing', amount: '$15,000', note: 'Scales with growth' },
                { category: 'Legal/Accounting', amount: '$2,000', note: 'Compliance' },
                { category: 'Insurance', amount: '$1,000', note: 'PI, Cyber, D&O' },
                { category: 'Office/Admin', amount: '$2,000', note: 'Co-working, misc' },
              ].map((item, i) => (
                <div key={i} className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                  <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{item.category}</p>
                  <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.amount}</p>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-lg bg-blue-500/20 border border-blue-500/30 flex justify-between items-center">
              <span className="text-blue-400 font-semibold">Total Fixed Costs</span>
              <div className="text-right">
                <span className="text-xl font-bold text-blue-400">$45,000/mo</span>
                <span className={`block text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>$540K/year</span>
              </div>
            </div>
          </GlowCard>
        </section>

        {/* Financial Projections */}
        <section className="mb-20">
          <SectionHeader
            title="Financial Projections"
            subtitle="Three scenarios with detailed projections"
            isDark={isDark}
          />

          <div className="space-y-8">
            {/* Conservative */}
            <GlowCard className="p-8">
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Scenario 1: Conservative ($1M Funding)
              </h3>
              <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                15% MoM growth (Y1), 10% (Y2) | 35% conversion | 15% churn | $216 ARPU
              </p>
              <div className="overflow-x-auto mb-6">
                <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <thead>
                    <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <th className="p-3 text-left">Year</th>
                      <th className="p-3 text-right">Users</th>
                      <th className="p-3 text-right">Paying</th>
                      <th className="p-3 text-right">ARR</th>
                      <th className="p-3 text-right">Net Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { year: '2026 (Apr-Dec)', users: '10,000', paying: '3,000', arr: '$648K', net: '($320K)' },
                      { year: '2027', users: '35,000', paying: '10,500', arr: '$2.3M', net: '$115K' },
                      { year: '2028', users: '95,000', paying: '28,500', arr: '$6.2M', net: '$1.5M' },
                      { year: '2029', users: '210,000', paying: '63,000', arr: '$13.6M', net: '$5.4M' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                        <td className="p-3">{row.year}</td>
                        <td className="p-3 text-right">{row.users}</td>
                        <td className="p-3 text-right">{row.paying}</td>
                        <td className="p-3 text-right font-bold">{row.arr}</td>
                        <td className={`p-3 text-right ${row.net.includes('(') ? 'text-red-400' : 'text-green-400'}`}>{row.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
                  Break-even: Q2 2027
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-400">
                  Exit (Year 4): $136M
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-400">
                  Investor return: 12.4x
                </span>
              </div>
            </GlowCard>

            {/* Base Case */}
            <GlowCard className="p-8" highlight>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-cyan-400">
                  Scenario 2: Base Case ($1M Funding)
                </h3>
                <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold">RECOMMENDED</span>
              </div>
              <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                20% MoM growth (Y1), 12% (Y2) | 40% conversion | 12% churn | $220 ARPU
              </p>
              <div className="overflow-x-auto mb-6">
                <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <thead>
                    <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <th className="p-3 text-left">Year</th>
                      <th className="p-3 text-right">Users</th>
                      <th className="p-3 text-right">Paying</th>
                      <th className="p-3 text-right">ARR</th>
                      <th className="p-3 text-right">Net Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { year: '2026 (Apr-Dec)', users: '18,000', paying: '6,500', arr: '$1.4M', net: '($150K)' },
                      { year: '2027', users: '65,000', paying: '23,400', arr: '$5.1M', net: '$1.2M' },
                      { year: '2028', users: '180,000', paying: '64,800', arr: '$14.3M', net: '$4.5M' },
                      { year: '2029', users: '400,000', paying: '144,000', arr: '$31.7M', net: '$12.6M' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                        <td className="p-3">{row.year}</td>
                        <td className="p-3 text-right">{row.users}</td>
                        <td className="p-3 text-right">{row.paying}</td>
                        <td className="p-3 text-right font-bold text-cyan-400">{row.arr}</td>
                        <td className={`p-3 text-right ${row.net.includes('(') ? 'text-red-400' : 'text-green-400'}`}>{row.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
                  Break-even: Q4 2026
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-400">
                  Exit (Year 4): $177M
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-400 font-bold">
                  Investor return: 16.1x
                </span>
              </div>
            </GlowCard>

            {/* Aggressive */}
            <GlowCard className="p-8">
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Scenario 3: Aggressive ($3M Funding)
              </h3>
              <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                25% MoM growth (Y1), 15% (Y2) | 45% conversion | 10% churn | $240 ARPU
              </p>
              <div className="overflow-x-auto mb-6">
                <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <thead>
                    <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <th className="p-3 text-left">Year</th>
                      <th className="p-3 text-right">Users</th>
                      <th className="p-3 text-right">Paying</th>
                      <th className="p-3 text-right">ARR</th>
                      <th className="p-3 text-right">Net Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { year: '2026 (Apr-Dec)', users: '35,000', paying: '15,750', arr: '$3.8M', net: '$200K' },
                      { year: '2027', users: '160,000', paying: '72,000', arr: '$17.3M', net: '$5.2M' },
                      { year: '2028', users: '550,000', paying: '247,500', arr: '$59.4M', net: '$21.3M' },
                      { year: '2029', users: '1,500,000', paying: '675,000', arr: '$162M', net: '$64.8M' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                        <td className="p-3">{row.year}</td>
                        <td className="p-3 text-right">{row.users}</td>
                        <td className="p-3 text-right">{row.paying}</td>
                        <td className="p-3 text-right font-bold">{row.arr}</td>
                        <td className="p-3 text-right text-green-400">{row.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
                  Break-even: Q3 2026
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-400">
                  Exit (Year 4): $665M
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-400 font-bold">
                  Investor return: 60x
                </span>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Unit Economics Deep Dive */}
        <section className="mb-20">
          <SectionHeader
            title="Unit Economics Deep Dive"
            subtitle="LTV, CAC, and payback analysis"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* LTV */}
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-green-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Lifetime Value (LTV)</h4>
              </div>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Input</th>
                    <th className="py-2 text-right">Cons.</th>
                    <th className="py-2 text-right text-cyan-400">Base</th>
                    <th className="py-2 text-right">Aggr.</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { input: 'ARPU', cons: '$216', base: '$220', aggr: '$240' },
                    { input: 'Gross Margin', cons: '88%', base: '89%', aggr: '90%' },
                    { input: 'Annual Churn', cons: '15%', base: '12%', aggr: '10%' },
                    { input: 'Lifespan', cons: '3.3 yrs', base: '4.2 yrs', aggr: '5.0 yrs' },
                    { input: 'Gross LTV', cons: '$713', base: '$924', aggr: '$1,200', bold: true },
                    { input: 'Net LTV', cons: '$630', base: '$819', aggr: '$1,075', bold: true, highlight: true },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'} ${row.highlight ? 'bg-cyan-500/10' : ''}`}>
                      <td className={`py-2 ${row.bold ? 'font-semibold' : ''}`}>{row.input}</td>
                      <td className="py-2 text-right">{row.cons}</td>
                      <td className={`py-2 text-right ${row.bold ? 'text-cyan-400 font-bold' : ''}`}>{row.base}</td>
                      <td className="py-2 text-right">{row.aggr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlowCard>

            {/* LTV:CAC */}
            <GlowCard className="p-6" highlight>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-cyan-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>LTV:CAC Ratio</h4>
              </div>
              <div className="space-y-4">
                {[
                  { scenario: 'Conservative', ltv: '$630', cac: '$17', ratio: '37:1' },
                  { scenario: 'Base', ltv: '$819', cac: '$17', ratio: '48:1', highlight: true },
                  { scenario: 'Aggressive', ltv: '$1,075', cac: '$20', ratio: '54:1' },
                ].map((item, i) => (
                  <div key={i} className={`p-3 rounded-lg ${item.highlight ? 'bg-cyan-500/20 border border-cyan-500/30' : isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${item.highlight ? 'text-cyan-400' : isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.scenario}</span>
                      <span className={`text-2xl font-bold ${item.highlight ? 'text-cyan-400' : isDark ? 'text-white' : 'text-slate-900'}`}>{item.ratio}</span>
                    </div>
                    <div className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      LTV {item.ltv} / CAC {item.cac}
                    </div>
                  </div>
                ))}
              </div>
              <p className={`mt-4 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Benchmark: 3:1 is healthy for SaaS. Our ratios are exceptional.
              </p>
            </GlowCard>

            {/* Payback */}
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-yellow-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Payback Period</h4>
              </div>
              <div className="space-y-4">
                {[
                  { scenario: 'Conservative', revenue: '$18/mo', profit: '$15.84', payback: '1.1 months' },
                  { scenario: 'Base', revenue: '$18.33/mo', profit: '$16.32', payback: '1.0 months', highlight: true },
                  { scenario: 'Aggressive', revenue: '$20/mo', profit: '$18.00', payback: '1.1 months' },
                ].map((item, i) => (
                  <div key={i} className={`p-3 rounded-lg ${item.highlight ? 'bg-yellow-500/20 border border-yellow-500/30' : isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.scenario}</span>
                      <span className={`text-xl font-bold ${item.highlight ? 'text-yellow-400' : isDark ? 'text-white' : 'text-slate-900'}`}>{item.payback}</span>
                    </div>
                    <div className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      {item.revenue} revenue, {item.profit} profit
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-green-500/20 border border-green-500/30 text-center">
                <p className="text-green-400 font-bold">Every customer is profitable from Month 1</p>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Sensitivity Analysis */}
        <section className="mb-20">
          <SectionHeader
            title="Sensitivity Analysis"
            subtitle="What breaks the model?"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: 'CAC 2x Higher ($34)',
                changes: [
                  { metric: 'LTV:CAC', original: '48:1', stress: '24:1', change: '-50%' },
                  { metric: 'Break-even', original: 'Q2 2027', stress: 'Q3 2027', change: '+3 months' },
                  { metric: 'Cash required', original: '$1M', stress: '$1.3M', change: '+$300K' },
                ],
                verdict: 'Model still works. Raise slightly more or extend timeline.',
                color: 'yellow',
              },
              {
                title: 'Churn 2x Higher (30%)',
                changes: [
                  { metric: 'Customer lifespan', original: '4.2 years', stress: '2.3 years', change: '-45%' },
                  { metric: 'LTV', original: '$819', stress: '$506', change: '-38%' },
                  { metric: 'Break-even', original: 'Q2 2027', stress: 'Q4 2027', change: '+6 months' },
                ],
                verdict: 'Model still works, but slower. Focus on retention.',
                color: 'orange',
              },
              {
                title: 'Conversion 50% Lower (18%)',
                changes: [
                  { metric: 'Paying users Y1', original: '3,000', stress: '1,800', change: '-40%' },
                  { metric: 'ARR Y1', original: '$648K', stress: '$389K', change: '-40%' },
                  { metric: 'Break-even', original: 'Q2 2027', stress: 'Q4 2027', change: '+6 months' },
                ],
                verdict: 'Model still works. Increase free tier limitations.',
                color: 'blue',
              },
              {
                title: 'Worst Case: All Three',
                changes: [
                  { metric: 'ARR Y1', original: '$648K', stress: '$234K', change: '-64%' },
                  { metric: 'Break-even', original: 'Q2 2027', stress: 'Q1 2028', change: '+9 months' },
                  { metric: 'LTV:CAC', original: '48:1', stress: '10:1', change: '-79%' },
                ],
                verdict: 'Model still works, but barely. Would need $1.5M raise.',
                color: 'red',
              },
            ].map((scenario, i) => (
              <GlowCard key={i} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className={`w-6 h-6 ${
                    scenario.color === 'yellow' ? 'text-yellow-400' :
                    scenario.color === 'orange' ? 'text-orange-400' :
                    scenario.color === 'blue' ? 'text-blue-400' :
                    'text-red-400'
                  }`} />
                  <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{scenario.title}</h4>
                </div>
                <table className={`w-full text-sm mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <thead>
                    <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <th className="py-2 text-left">Metric</th>
                      <th className="py-2 text-right">Original</th>
                      <th className="py-2 text-right">Stress</th>
                      <th className="py-2 text-right">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenario.changes.map((row, j) => (
                      <tr key={j} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                        <td className="py-2">{row.metric}</td>
                        <td className="py-2 text-right">{row.original}</td>
                        <td className="py-2 text-right">{row.stress}</td>
                        <td className="py-2 text-right text-red-400">{row.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className={`p-3 rounded-lg ${
                  scenario.color === 'red' ? 'bg-red-500/20 border border-red-500/30' :
                  'bg-green-500/20 border border-green-500/30'
                }`}>
                  <p className={`text-sm font-medium ${
                    scenario.color === 'red' ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {scenario.verdict}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* Valuation Methodology */}
        <section className="mb-20">
          <SectionHeader
            title="Valuation Methodology"
            subtitle="Why $10M pre-money is fair"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlowCard className="p-6">
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Method 1: Revenue Multiple</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>ARR Dec 2026</span>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>$648K</span>
                </div>
                <div className="flex justify-between">
                  <span className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>ARR Dec 2027</span>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>$2.3M</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-700">
                  <span className="text-cyan-400">Forward multiple</span>
                  <span className="text-xl font-bold text-cyan-400">4.3x</span>
                </div>
              </div>
              <p className={`mt-4 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                SaaS seed rounds typically valued at 3-8x projected Year 1 ARR.
              </p>
            </GlowCard>

            <GlowCard className="p-6" highlight>
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Method 2: Comparable Transactions</h4>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Company</th>
                    <th className="py-2 text-right">ARR</th>
                    <th className="py-2 text-right">Valuation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { company: 'Sharesight (2009)', arr: '$0', val: '$2M' },
                    { company: 'Stake (2017)', arr: '$0', val: '$15M' },
                    { company: 'Superhero (2020)', arr: '$0', val: '$20M' },
                    { company: 'VerafyAI (2026)', arr: '$120K', val: '$10M', highlight: true },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'} ${row.highlight ? 'bg-cyan-500/10' : ''}`}>
                      <td className={`py-2 ${row.highlight ? 'text-cyan-400 font-semibold' : ''}`}>{row.company}</td>
                      <td className="py-2 text-right">{row.arr}</td>
                      <td className={`py-2 text-right ${row.highlight ? 'text-cyan-400 font-bold' : ''}`}>{row.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={`mt-4 text-xs text-cyan-400`}>
                We're asking for less despite having revenue and a built product.
              </p>
            </GlowCard>

            <GlowCard className="p-6">
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Method 3: DCF Analysis</h4>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Year</th>
                    <th className="py-2 text-right">FCF</th>
                    <th className="py-2 text-right">PV</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: '2026', fcf: '($320K)', pv: '($246K)' },
                    { year: '2027', fcf: '$115K', pv: '$68K' },
                    { year: '2028', fcf: '$1.5M', pv: '$690K' },
                    { year: '2029', fcf: '$5.4M', pv: '$1.89M' },
                    { year: 'Terminal', fcf: '$54M', pv: '$18.9M' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                      <td className="py-2">{row.year}</td>
                      <td className="py-2 text-right">{row.fcf}</td>
                      <td className="py-2 text-right">{row.pv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 p-3 rounded-lg bg-green-500/20 border border-green-500/30 text-center">
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>DCF suggests</p>
                <p className="text-xl font-bold text-green-400">$21M valuation</p>
                <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>We're asking for $10M</p>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Exit Analysis */}
        <section className="mb-20">
          <SectionHeader
            title="Exit Analysis"
            subtitle="Strategic acquirers and return scenarios"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-blue-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Strategic Acquirers</h4>
              </div>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Buyer</th>
                    <th className="py-2 text-left">Rationale</th>
                    <th className="py-2 text-right">Multiple</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { buyer: 'CBA/CommSec', rationale: 'Portfolio intelligence', multiple: '10-12x' },
                    { buyer: 'Macquarie', rationale: 'Wealth expansion', multiple: '8-10x' },
                    { buyer: 'Sharesight', rationale: 'Eliminate competitor', multiple: '10-15x' },
                    { buyer: 'Interactive Brokers', rationale: 'Tax intelligence', multiple: '8-10x' },
                    { buyer: 'Xero', rationale: 'Financial ecosystem', multiple: '10-12x' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                      <td className="py-2 font-medium">{row.buyer}</td>
                      <td className="py-2">{row.rationale}</td>
                      <td className="py-2 text-right text-cyan-400">{row.multiple}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlowCard>

            <GlowCard className="p-6" highlight>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Exit Scenarios</h4>
              </div>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Scenario</th>
                    <th className="py-2 text-right">ARR</th>
                    <th className="py-2 text-right">Value</th>
                    <th className="py-2 text-right">Return</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: 'Conservative', arr: '$13.6M', value: '$136M', return: '12.4x' },
                    { scenario: 'Base', arr: '$17.7M', value: '$177M', return: '16.1x', highlight: true },
                    { scenario: 'Aggressive', arr: '$66.5M', value: '$665M', return: '60x' },
                    { scenario: 'Strategic Premium', arr: '$13.6M', value: '$204M', return: '18.5x' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'} ${row.highlight ? 'bg-cyan-500/10' : ''}`}>
                      <td className={`py-2 ${row.highlight ? 'text-cyan-400 font-semibold' : ''}`}>{row.scenario}</td>
                      <td className="py-2 text-right">{row.arr}</td>
                      <td className="py-2 text-right">{row.value}</td>
                      <td className={`py-2 text-right font-bold ${row.highlight ? 'text-cyan-400' : 'text-green-400'}`}>{row.return}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 p-3 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-center">
                <p className="text-cyan-400 font-bold text-lg">Median expected return: 16x over 4 years</p>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-20">
          <SectionHeader
            title="Why This Model Works"
            subtitle="The numbers are defendable because they're conservative"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Exceptional Unit Economics', desc: 'LTV:CAC 48:1, <1 month payback', icon: Target },
              { title: 'Multiple Revenue Streams', desc: 'Consumer, trading, advisor platforms', icon: Briefcase },
              { title: 'Strong Retention', desc: 'Tax data = 7-year switching cost', icon: Shield },
              { title: 'Clear Path to Profit', desc: '15 months from launch to break-even', icon: TrendingUp },
              { title: 'Conservative Assumptions', desc: 'Below industry benchmarks throughout', icon: CheckCircle2 },
              { title: 'Stress-Tested', desc: 'Works even with 2x CAC, 2x churn', icon: AlertTriangle },
            ].map((item, i) => (
              <GlowCard key={i} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <GlowCard className="p-12" highlight>
            <h2 className="text-3xl font-bold text-white mb-4">
              The numbers are defendable because they're conservative.
            </h2>
            <p className="text-xl text-cyan-400 mb-8">
              Ready to discuss the financial model in detail?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <p className="text-lg font-semibold text-white">Amit Vohra, CEO</p>
                <p className="text-cyan-400">amit@verafyai.com.au</p>
              </div>
              <div className={`hidden sm:block w-px h-12 ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`} />
              <div className="text-center">
                <p className="text-lg font-semibold text-white">Nupur Agarwal, CTO</p>
                <p className="text-cyan-400">nupur@axientai.au</p>
              </div>
            </div>
            <p className={`mt-8 text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Document Version 2.0 | Last Updated: January 23, 2026 | Confidential – For Investor Use Only
            </p>
          </GlowCard>
        </section>
      </div>
    </div>
  );
}
