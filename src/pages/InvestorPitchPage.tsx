import { motion } from 'framer-motion';
import {
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
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Mail,
  Cpu,
  Linkedin,
  GraduationCap,
  Phone,
  Building2,
} from 'lucide-react';
import { GlowCard } from '../components/GlowCard';
import { SectionHeader } from '../components/SectionHeader';
import { SectionDivider } from '../components/SectionDivider';

interface InvestorPitchPageProps {
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

export function InvestorPitchPage({ isDark }: InvestorPitchPageProps) {
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
            <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <span>Verafy</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI</span>
            </h1>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic mb-6 font-light">
              The interface between finance and humans
            </p>
            <p className={`text-xl md:text-2xl mb-10 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Where <span className="text-cyan-400 font-bold">9 million</span> investors meet institutional intelligence
            </p>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-bold text-xl shadow-2xl shadow-cyan-500/30">
              <DollarSign className="w-6 h-6" />
              $1M Seed @ $10M Pre-Money
            </div>
            <div className={`mt-8 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-3">
                <p className={`text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>Amit Vohra | Co-founder & CEO</p>
                <p className={`text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>Nupur Agarwal | Co-founder & CTO</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-base">
                <span>amit.vohra@axientai.au</span>
                <span>nupur.agarwal@axientai.au</span>
              </div>
              <p className="mt-2 text-base">+61 431 909 502 | verafyai.com.au</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        <SectionDivider />

        {/* Problem Section */}
        <section className="mb-8">
          <SectionHeader
            title="Two Markets. One Broken System."
            isDark={isDark}
          />

          {/* $21B Stat */}
          <div className="text-center mb-10">
            <div className="text-6xl md:text-7xl font-bold text-red-400 mb-4">$21B</div>
            <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>lost annually to poor financial decisions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <GlowCard className="p-8" highlight>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">9 Million Retail Investors</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: AlertTriangle, text: 'Making decisions without institutional tools' },
                  { icon: FileText, text: 'Spreadsheets, basic trackers, or nothing' },
                  { icon: TrendingDown, text: 'No real-time tax optimisation' },
                  { icon: X, text: 'No personalised guidance' },
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 text-lg ${isDark ? 'text-white' : 'text-slate-800'}`}>
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
                <h3 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>15,000 Financial Advisers</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: Lock, text: 'Trapped in legacy software (Xplan)' },
                  { icon: DollarSign, text: '$2,000-$4,000/month for complexity' },
                  { icon: Clock, text: '3-week SOA turnarounds' },
                  { icon: AlertTriangle, text: 'Hours on paperwork, minutes with clients' },
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 text-lg ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <item.icon className="w-6 h-6 text-orange-400 flex-shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30">
            <p className={`text-xl text-center ${isDark ? 'text-white' : 'text-slate-800'}`}>
              The gap between investors and advisers has never been wider.
            </p>
            <p className="text-lg text-cyan-400 italic text-center mt-2">The industry is ripe for disruption.</p>
          </div>
        </section>

        <SectionDivider />

        {/* Solution Section */}
        <section className="mb-8">
          <SectionHeader
            title="The Solution"
            subtitle="VerafyAI bridges the gap between DIY and full advice"
            isDark={isDark}
          />

          {/* Comparison Table */}
          <GlowCard className="p-8 mb-8">
            <div className="rounded-xl overflow-hidden border border-cyan-500/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
                    <th className={`p-4 text-left text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Feature</th>
                    <th className={`p-4 text-center text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Sharesight</th>
                    <th className={`p-4 text-center text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Empower</th>
                    <th className="p-4 text-center text-lg text-cyan-400 font-bold">VerafyAI</th>
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
                    <tr key={i} className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <td className={`p-4 text-lg ${isDark ? 'text-white' : 'text-slate-800'}`}>{feature}</td>
                      <td className="p-4 text-center">
                        {typeof s === 'boolean' ? (s ? <Check className="w-6 h-6 text-green-400 mx-auto" /> : <X className="w-6 h-6 text-red-400/50 mx-auto" />) : <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{s}</span>}
                      </td>
                      <td className="p-4 text-center">
                        {typeof e === 'boolean' ? (e ? <Check className="w-6 h-6 text-green-400 mx-auto" /> : <X className="w-6 h-6 text-red-400/50 mx-auto" />) : <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{e}</span>}
                      </td>
                      <td className="p-4 text-center bg-cyan-500/10">
                        {typeof v === 'boolean' ? (v ? <CheckCircle2 className="w-7 h-7 text-cyan-400 mx-auto" /> : <X className="w-6 h-6 text-red-400 mx-auto" />) : <span className="text-cyan-400 font-bold">{v}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlowCard>

          <div className="text-center">
            <p className="text-xl font-bold">
              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Not charts that make you feel smart.</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Actions that make you money.</span>
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* Product Roadmap Section */}
        <section className="mb-8">
          <SectionHeader
            title="Product Roadmap"
            subtitle="Three phases to full ecosystem"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlowCard className="p-6" highlight>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50 mb-4">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-bold">NOW - LIVE</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Phase 1: Portfolio Intelligence</h3>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <ul className="space-y-3">
                {['Connect broker → real-time analysis', 'Tax optimisation, rebalancing', 'Plain English actions', '$5-$20/month'].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-bold">JULY 2026</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Phase 2: Trading App</h3>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
              </div>
              <ul className="space-y-3">
                {['Standalone app, separate entity', 'IBKR brokerage gateway', 'AWS enterprise deployment', 'Chinese wall maintained'].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
                  <Rocket className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-bold">2027</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Phase 3: Adviser Platform</h3>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <ul className="space-y-3">
                {['One-meeting SOA generation', 'Conversational fact-find', 'No paraplanners needed', '$1,500-$4,000/month'].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30">
              <Zap className="w-6 h-6 text-cyan-400" />
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Product build 2026. Full ecosystem 2027.</span>
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Adviser Opportunity - One Meeting SOA */}
        <section className="mb-8">
          <SectionHeader
            title="The Adviser Opportunity"
            subtitle="One-Meeting SOA: From 3 weeks to 55 minutes"
            isDark={isDark}
          />

          <GlowCard className="p-8 mb-8" highlight>
            <h3 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
              The One-Meeting SOA Process
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { step: 1, title: 'Client arrives', desc: 'Vera greets, collects data conversationally', time: '10 min', icon: Users },
                { step: 2, title: 'Fact-find complete', desc: 'Goals, risk, situation captured', time: '15 min', icon: FileText },
                { step: 3, title: 'AI generates draft SOA', desc: 'While adviser reviews notes', time: '5 min', icon: Brain },
                { step: 4, title: 'Adviser reviews', desc: 'Tweaks, approves', time: '10 min', icon: CheckCircle2 },
                { step: 5, title: 'Client signs', desc: 'Digital signature on iPad', time: '5 min', icon: FileText },
                { step: 6, title: 'Done', desc: 'Client walks out with advice', time: '10 min', icon: Rocket },
              ].map((item) => (
                <div key={item.step} className={`p-4 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                      {item.step}
                    </div>
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                  <p className={`text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                  <span className="text-cyan-400 font-semibold text-sm">{item.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-center">
              <p className={`text-lg ${isDark ? 'text-white' : 'text-slate-800'}`}>
                Total time: <span className="text-cyan-400 font-bold text-2xl">55 minutes</span>
              </p>
              <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>vs. 3 weeks industry average</p>
            </div>
          </GlowCard>

          <div className="grid md:grid-cols-2 gap-6">
            <GlowCard className="p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" />
                Current Reality
              </h3>
              <ul className="space-y-3">
                {[
                  '3-week average SOA turnaround',
                  '$2,000-$4,000/month software costs',
                  'Paraplanner bottleneck',
                  'Client drops off between meetings',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
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
                {[
                  'SOA in one meeting',
                  '3x more clients per day',
                  'No paraplanner needed',
                  'Higher conversion rate',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>
        </section>

        <SectionDivider />

        {/* Market Opportunity Section */}
        <section className="mb-8">
          <SectionHeader
            title="Market Opportunity"
            isDark={isDark}
          />

          {/* TAM Headline */}
          <div className="text-center mb-10">
            <div className="text-6xl md:text-7xl font-bold text-cyan-400 mb-4">$756M</div>
            <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Total Addressable Market (annually)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { value: '9M+', label: 'Australians own shares/ETFs', color: '#22d3ee' },
              { value: '15K', label: 'Financial advisers in AU', color: '#3b82f6' },
              { value: '$6B', label: 'Advice industry revenue', color: '#a855f7' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                <div className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <GlowCard className="p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6" />
                Phase 1 TAM: Retail
              </h3>
              <p className={`text-lg mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                9M × 5% penetration × $14/mo = <span className="text-3xl font-bold text-cyan-400">$75.6M</span>/year
              </p>
              <div className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                <p className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-400" /> 2.5M new investors since COVID</p>
                <p className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-400" /> 61% of Millennials now invest</p>
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-3">
                <Briefcase className="w-6 h-6" />
                Phase 3 TAM: Advisers
              </h3>
              <p className={`text-lg mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                15K × 30% × $1,500/mo = <span className="text-3xl font-bold text-purple-400">$81M</span>/year
              </p>
              <div className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                <p className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-orange-400" /> Average practice pays $2-4K/mo</p>
                <p className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-orange-400" /> for software they barely use</p>
              </div>
            </GlowCard>
          </div>
        </section>

        <SectionDivider />

        {/* Traction Section */}
        <section className="mb-8">
          <SectionHeader
            title="Traction & Milestones"
            subtitle="Built the product before raising"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-8">
            <GlowCard className="p-6" highlight>
              <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                <Rocket className="w-6 h-6" />
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
                  <li key={i} className={`flex items-start gap-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>

            <GlowCard className="p-6">
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Calendar className="w-6 h-6 text-blue-400" />
                Timeline
              </h3>
              <ul className="space-y-4">
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
                    <span className={`flex-1 ${item.status === 'target' ? 'text-cyan-400 font-semibold' : isDark ? 'text-white' : 'text-slate-800'}`}>{item.text}</span>
                    {item.status === 'done' && <CheckCircle2 className="w-5 h-5 text-green-400" />}
                    {item.status === 'target' && <Target className="w-5 h-5 text-cyan-400" />}
                    {item.status === 'planned' && <Clock className="w-5 h-5 text-slate-500" />}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-center">
                <p className="text-cyan-400 font-bold">We're not raising to build. We're raising to accelerate.</p>
              </div>
            </GlowCard>
          </div>
        </section>

        <SectionDivider />

        {/* Business Model Section */}
        <section className="mb-8">
          <SectionHeader
            title="Business Model"
            subtitle="Three Revenue Streams"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlowCard className="p-6" highlight>
              <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Phase 1: SaaS
              </h3>
              <div className={`space-y-2 mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>
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
              <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                <LineChart className="w-5 h-5" />
                Phase 2: Trading
              </h3>
              <div className={`space-y-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                <p>Brokerage fees</p>
                <p>Premium features</p>
                <p>Standalone entity</p>
                <p className={`italic text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>No advice liability</p>
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Phase 3: Adviser
              </h3>
              <div className={`space-y-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                <p className="font-bold">$1,500-$4,000/mo per practice</p>
                <p>Implementation fees</p>
                <p>Data/compliance add-ons</p>
              </div>
            </GlowCard>
          </div>

          <GlowCard className="p-6 mb-8">
            <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Unit Economics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'CAC (blended)', value: '$25', highlight: false },
                { label: 'LTV', value: '$360+', highlight: false },
                { label: 'LTV:CAC', value: '14:1', highlight: true },
                { label: 'Gross Margin', value: '85%+', highlight: false },
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-xl text-center ${item.highlight ? 'bg-cyan-500/20 border-2 border-cyan-500/50' : isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
                  <div className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</div>
                  <div className={`text-2xl font-bold ${item.highlight ? 'text-cyan-400' : isDark ? 'text-white' : 'text-slate-900'}`}>{item.value}</div>
                </div>
              ))}
            </div>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* Financial Projections Section */}
        <section className="mb-8">
          <SectionHeader
            title="Financial Projections"
            subtitle="Conservative path to profitability"
            isDark={isDark}
          />

          <GlowCard className="p-8">
            <div className="rounded-xl overflow-hidden border border-cyan-500/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
                    <th className={`p-4 text-left text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Metric</th>
                    <th className={`p-4 text-center text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>2026</th>
                    <th className={`p-4 text-center text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>2027</th>
                    <th className={`p-4 text-center text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>2028</th>
                    <th className="p-4 text-center text-lg text-cyan-400 font-bold">2029</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Revenue', y1: '$600K', y2: '$3.5M', y3: '$12M', y4: '$35M' },
                    { metric: 'Paying Users', y1: '5,000', y2: '25,000', y3: '80,000', y4: '200,000' },
                    { metric: 'MRR', y1: '$50K', y2: '$290K', y3: '$1M', y4: '$2.9M' },
                    { metric: 'Burn Rate', y1: '$80K/mo', y2: '$150K/mo', y3: 'Breakeven', y4: 'Profitable' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <td className={`p-4 text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{row.metric}</td>
                      <td className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{row.y1}</td>
                      <td className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{row.y2}</td>
                      <td className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{row.y3}</td>
                      <td className="p-4 text-center text-cyan-400 font-bold bg-cyan-500/10">{row.y4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* Team Section */}
        <section className="mb-8">
          <SectionHeader
            title="The Team"
            subtitle="Proven Founders"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Amit Vohra */}
            <GlowCard className="p-6" highlight>
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 text-3xl font-bold text-white">
                  AV
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Amit Vohra</h3>
                <p className="text-cyan-400 font-semibold">Co-Founder & CEO</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>PhD, MBA (Distinction), GAICD</span>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'} mt-3`}>
                  <p className={`text-xs mb-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Track Record</p>
                  <ul className="space-y-1.5">
                    {[
                      '25+ years in senior healthcare leadership',
                      'CEO GPRA: $2M → $12M ARR (500% growth)',
                      'Raised $10M from health funds',
                      'Risk algorithm 98% accuracy (Sonic Healthcare)',
                    ].map((item, i) => (
                      <li key={i} className={`flex items-start gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`mt-4 pt-4 border-t flex items-center justify-center gap-2 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>linkedin.com/in/amitvohra</span>
              </div>
            </GlowCard>

            {/* Nupur Agarwal */}
            <GlowCard className="p-6" highlight>
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4 text-3xl font-bold text-white">
                  NA
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Nupur Agarwal</h3>
                <p className="text-purple-400 font-semibold">Co-Founder & CTO</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>MBA + Double Masters</span>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'} mt-3`}>
                  <p className={`text-xs mb-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Track Record</p>
                  <ul className="space-y-1.5">
                    {[
                      '15+ years enterprise fintech',
                      'Ex-GBST/Xplan – knows where gatekeeping is coded',
                      'Ex-JP Morgan, Macquarie',
                      'Built entire beta platform solo',
                    ].map((item, i) => (
                      <li key={i} className={`flex items-start gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`mt-4 pt-4 border-t flex items-center justify-center gap-2 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>linkedin.com/in/nupuragarwal</span>
              </div>
            </GlowCard>

            {/* Subodh Ramugade */}
            <GlowCard className="p-6" highlight>
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-4 text-3xl font-bold text-white">
                  SR
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Subodh Ramugade</h3>
                <p className="text-orange-400 font-semibold">Head of AI/ML</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <GraduationCap className="w-4 h-4 text-orange-400" />
                  <span>MIT Deep Learning Certificate</span>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'} mt-3`}>
                  <p className={`text-xs mb-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Track Record</p>
                  <ul className="space-y-1.5">
                    {[
                      'VP AI, Healthcare Analytics (CloudxLab)',
                      'Ex-Amazon, Digital Payments UX Lead',
                      'Ex-JP Morgan Sydney, Systems Architecture',
                      '15+ years enterprise AI/ML deployment',
                    ].map((item, i) => (
                      <li key={i} className={`flex items-start gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`mt-4 pt-4 border-t flex items-center justify-center gap-2 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>linkedin.com/in/subodhramugade</span>
              </div>
            </GlowCard>
          </div>
        </section>

        <SectionDivider />

        {/* The Ask Section */}
        <section className="mb-8">
          <SectionHeader
            title="The Ask"
            isDark={isDark}
          />

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-500/50">
              <DollarSign className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl md:text-3xl font-bold text-cyan-400">$1M Seed @ $10M Pre-Money</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <GlowCard className="p-6">
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Use of Funds</h3>
              <div className="space-y-6">
                {[
                  { label: 'Product (Phase 1, 2, 3)', pct: 40, amount: '$400K', color: '#22d3ee' },
                  { label: 'Growth & Partnerships', pct: 30, amount: '$300K', color: '#3b82f6' },
                  { label: 'Runway & Operations', pct: 30, amount: '$300K', color: '#a855f7' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className={`flex justify-between mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                      <span>{item.label}</span>
                      <span className="font-bold">
                        <span className="text-cyan-400">{item.pct}%</span> <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{item.amount}</span>
                      </span>
                    </div>
                    <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="p-6" highlight>
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Investment Terms</h3>
              <ul className="space-y-4">
                {[
                  'SAFE or priced equity (open to discussion)',
                  '$500K lead investor minimum',
                  'Pro-rata rights for future rounds',
                  'Board observer seat available',
                ].map((item, i) => (
                  <li key={i} className={`flex items-start gap-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>

          {/* Return Scenarios */}
          <GlowCard className="p-8">
            <h3 className={`text-xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Return Scenarios</h3>
            <div className="rounded-xl overflow-hidden border border-cyan-500/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
                    <th className={`p-4 text-left text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Scenario</th>
                    <th className={`p-4 text-center text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Exit Valuation</th>
                    <th className={`p-4 text-center text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Return Multiple</th>
                    <th className="p-4 text-center text-lg text-cyan-400 font-bold">$100K → </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: 'Conservative', valuation: '$60M', multiple: '6x', returns: '$600K' },
                    { scenario: 'Base Case', valuation: '$110M', multiple: '11x', returns: '$1.1M' },
                    { scenario: 'Aggressive', valuation: '$220M', multiple: '22x', returns: '$2.2M' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <td className={`p-4 text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{row.scenario}</td>
                      <td className={`p-4 text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{row.valuation}</td>
                      <td className={`p-4 text-center font-bold ${i === 2 ? 'text-green-400' : i === 1 ? 'text-cyan-400' : isDark ? 'text-slate-300' : 'text-slate-600'}`}>{row.multiple}</td>
                      <td className={`p-4 text-center font-bold bg-cyan-500/10 ${i === 2 ? 'text-green-400' : 'text-cyan-400'}`}>{row.returns}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* Why Now Section */}
        <section className="mb-8">
          <SectionHeader
            title="Why Now?"
            subtitle="Five forces converging"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { icon: Cpu, title: 'AI Maturity', desc: 'LLMs finally good enough for financial reasoning', color: 'cyan' },
              { icon: Shield, title: 'Regulatory Tailwind', desc: 'ASIC pushing for accessible advice', color: 'blue' },
              { icon: Users, title: 'Demographic Shift', desc: 'Millennials demand digital-first', color: 'purple' },
              { icon: Building2, title: 'Incumbent Fatigue', desc: 'Advisers hate legacy software', color: 'orange' },
              { icon: TrendingUp, title: 'Post-COVID Boom', desc: '2.5M new retail investors', color: 'green' },
            ].map((item, i) => (
              <GlowCard key={i} className="p-4 text-center">
                <div className={`w-12 h-12 mx-auto rounded-xl bg-${item.color}-500/20 flex items-center justify-center mb-3`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
              </GlowCard>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Vision Section */}
        <section className="mb-8">
          <SectionHeader
            title="The Vision"
            isDark={isDark}
          />

          <GlowCard className="p-10 text-center" highlight>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 font-light">
              The interface between humans and the global financial system
            </p>
            <p className={`text-lg italic leading-relaxed mb-8 max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Over the next 3 years, my ability to detect behavioural patterns at an individual and industry level
              will grow to a point that we will <span className="text-cyan-400 font-semibold">carry risk for the advice</span> delivered through the pattern.
            </p>
            <p className={`text-xl mb-8 ${isDark ? 'text-white' : 'text-slate-800'}`}>
              The ecosystem. The infrastructure. <span className="text-cyan-400">The rails that everything else runs on.</span>
            </p>
            <div className={`p-6 rounded-xl inline-block ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}>
              <p className="text-lg text-cyan-400 italic">"Nupur & Amit aren't selling their houses to build another tracker."</p>
            </div>
          </GlowCard>
        </section>

        <SectionDivider />

        {/* Contact / Thank You Section */}
        <section className="text-center">
          <GlowCard className="p-12" highlight>
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
                <div className="w-10 h-10 bg-cyan-400 rounded-lg transform rotate-45" />
              </div>
            </div>
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>VerafyAI</h2>
            <p className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 font-light">
              I am inevitable.
            </p>
            <p className={`text-lg mb-10 italic max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              The only question is whether you will be in the room when I truly arrive.
            </p>
            <div className="space-y-4">
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                <div className="text-center">
                  <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Amit Vohra</p>
                  <p className="text-cyan-400 font-semibold mb-2">Co-founder & CEO</p>
                  <p className="flex items-center gap-2 justify-center text-sm">
                    <Mail className="w-4 h-4" />
                    amit.vohra@axientai.au
                  </p>
                  <p className="flex items-center gap-2 justify-center text-sm">
                    <Phone className="w-4 h-4" />
                    +61 431 909 502
                  </p>
                </div>
                <div className="text-center">
                  <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Nupur Agarwal</p>
                  <p className="text-purple-400 font-semibold mb-2">Co-founder & CTO</p>
                  <p className="flex items-center gap-2 justify-center text-sm">
                    <Mail className="w-4 h-4" />
                    nupur.agarwal@axientai.au
                  </p>
                </div>
              </div>
              <p className="flex items-center gap-2 justify-center mt-4">
                <Globe className="w-5 h-5" />
                verafyai.com.au
              </p>
              <p className={`text-2xl font-semibold mt-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Thank you. Questions?</p>
            </div>
          </GlowCard>
        </section>
      </div>
    </div>
  );
}
