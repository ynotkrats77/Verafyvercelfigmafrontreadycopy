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
  LineChart,
  Award,
  Brain,
  Clock,
  FileText,
  Briefcase,
  Calendar,
  CheckCircle2,
  Server,
  Database,
  Code,
  Layers,
} from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface InvestorCommercialsPageProps {
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

// Section header component
const SectionHeader = ({ title, subtitle, isDark }: { title: string; subtitle?: string; isDark: boolean }) => (
  <div className="text-center mb-12">
    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export function InvestorCommercialsPage({ isDark }: InvestorCommercialsPageProps) {
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
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Investor Information</span>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Commercials & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Strategy</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              VerafyAI: From Portfolio Intelligence to Financial Operating System
            </p>
            <p className={`text-lg mt-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Axient AI Pty Ltd | Prepared for Antler | January 2026
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Problem Statement */}
        <section className="mb-20">
          <SectionHeader
            title="Why This Matters"
            subtitle="The $21 billion problem facing young Australian investors"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-8">
            <GlowCard className="p-8">
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                The Problem
              </h3>
              <ul className="space-y-4">
                {[
                  'Schools don\'t teach investing',
                  'Financial advisors require $500K+ AUM minimums',
                  'Existing tools are calculators, not advisors',
                  'Tax surprises hit at year-end (too late to optimize)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm font-bold">!</span>
                    </div>
                    <span className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>

            <GlowCard className="p-8" highlight>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                The Opportunity
              </h3>
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-white mb-2">$21B</div>
                <div className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Lost annually by young Australians to uninformed investing decisions
                </div>
              </div>
              <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                For the first time in history, we can change that. AI + behavioral data + real-time insight = true financial autonomy.
              </p>
            </GlowCard>
          </div>
        </section>

        {/* Four Phases */}
        <section className="mb-20">
          <SectionHeader
            title="The Four Phases"
            subtitle="Our strategic roadmap to becoming a financial operating system"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                phase: 'Phase 1',
                title: 'Portfolio Intelligence',
                year: '2026',
                description: 'VerafyAI – Australia\'s first AI-powered pre-trade tax advisor',
                revenue: '$3.2M ARR by end of 2026',
                moat: 'Behavioral data from every user interaction',
                icon: Brain,
                highlight: true,
              },
              {
                phase: 'Phase 2',
                title: 'Life Finance Operating System',
                year: '2027-2028',
                description: 'Beyond investments into full financial life',
                revenue: 'Integration with banking data (Open Banking/CDR)',
                moat: 'Real-time discretionary spend optimization',
                icon: Layers,
              },
              {
                phase: 'Phase 3',
                title: 'Biometric Financial Identity',
                year: '2028-2029',
                description: 'Vera becomes your financial identity layer',
                revenue: 'Execute transactions, sign contracts, move money',
                moat: 'Authenticate transactions without passwords',
                icon: Shield,
              },
              {
                phase: 'Phase 4',
                title: 'Risk Transfer & Insurance',
                year: '2030+',
                description: 'Insurance-backed portfolio guarantees',
                revenue: 'Subscription + downside protection',
                moat: 'Data moat = actuarial advantage',
                icon: Award,
              },
            ].map((phase, i) => (
              <GlowCard key={i} className="p-6" highlight={phase.highlight}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    phase.highlight
                      ? 'bg-gradient-to-br from-cyan-400 to-blue-500'
                      : 'bg-slate-700'
                  }`}>
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-sm font-bold ${phase.highlight ? 'text-cyan-400' : 'text-blue-400'}`}>
                        {phase.phase}
                      </span>
                      <span className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        ({phase.year})
                      </span>
                    </div>
                    <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {phase.title}
                    </h4>
                    <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {phase.description}
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm text-green-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" /> {phase.revenue}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                        Moat: {phase.moat}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* Launch Timeline */}
        <section className="mb-20">
          <SectionHeader
            title="Launch Timeline"
            subtitle="What we've built and what's coming"
            isDark={isDark}
          />

          <div className="overflow-x-auto">
            <table className={`w-full rounded-xl overflow-hidden ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Milestone</th>
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Date</th>
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Status</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-200'}`}>
                {[
                  { milestone: 'Infrastructure deployed', date: 'Nov 2025', status: 'complete' },
                  { milestone: 'Core product built', date: 'Jan 2026', status: 'complete' },
                  { milestone: 'Beta launch', date: 'Feb 15, 2026', status: 'target' },
                  { milestone: 'Public launch', date: 'Apr 1, 2026', status: 'target' },
                  { milestone: 'Trading platform', date: 'Q2-Q3 2026', status: 'planned' },
                  { milestone: 'Advisor platform', date: 'Q4 2026', status: 'planned' },
                ].map((item, i) => (
                  <tr key={i}>
                    <td className={`p-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.milestone}</td>
                    <td className={`p-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.date}</td>
                    <td className="p-4">
                      {item.status === 'complete' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                          <CheckCircle2 className="w-4 h-4" /> Complete
                        </span>
                      )}
                      {item.status === 'target' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                          <Target className="w-4 h-4" /> Target
                        </span>
                      )}
                      {item.status === 'planned' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-500/20 text-slate-400 text-sm">
                          <Calendar className="w-4 h-4" /> Planned
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What's Built */}
        <section className="mb-20">
          <SectionHeader
            title="What's Actually Built"
            subtitle="Not planned. Complete and deployed."
            isDark={isDark}
          />

          <div className="grid md:grid-cols-3 gap-6">
            <GlowCard className="p-6" highlight>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Complete & Deployed</h4>
              </div>
              <ul className="space-y-2">
                {[
                  'Multi-platform portfolio aggregation',
                  'Real-time portfolio tracking',
                  'CGT calculation engine (FIFO, LIFO, discount)',
                  'Pre-trade tax modeling',
                  'Multi-portfolio support',
                  'Web platform (responsive)',
                  'User authentication (Cognito)',
                  'Action Centre alert system',
                  'Vera Insight & AI Chat (v1)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-blue-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Infrastructure Operational</h4>
              </div>
              <ul className="space-y-2">
                {[
                  'AWS enterprise stack (ECS, Aurora, S3, CloudFront)',
                  'API Gateway + Lambda for serverless compute',
                  'DynamoDB for real-time prices',
                  'React frontend (web)',
                  'Python/FastAPI backend',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-purple-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>In Development</h4>
              </div>
              <div className="mb-4">
                <p className={`text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Feb 15 target:</p>
                <ul className="space-y-2 mt-2">
                  {[
                    'Enhanced CGT calculator',
                    'Tax pack export (FY 2024/25, 2025/26)',
                    'Vera Chat v2 (behavioral insights)',
                    'Mobile-responsive optimization',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={`text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>April 1 target:</p>
                <ul className="space-y-2 mt-2">
                  {[
                    'Interactive Brokers API integration',
                    'Mobile apps (iOS, Android)',
                    'Educational content framework',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Commercial Strategy */}
        <section className="mb-20">
          <SectionHeader
            title="Why This Works Commercially"
            subtitle="Category creation with zero direct competitors"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <GlowCard className="p-8">
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Category Creation
              </h3>
              <p className={`mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                We're not competing with Sharesight. We're creating a new category.
              </p>
              <div className={`rounded-xl overflow-hidden border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <table className="w-full">
                  <thead>
                    <tr className={isDark ? 'bg-slate-800' : 'bg-slate-100'}>
                      <th className={`p-3 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Platform</th>
                      <th className={`p-3 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>What It Does</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <td className={`p-3 font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Sharesight</td>
                      <td className={`p-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Calculator – tells you what happened</td>
                    </tr>
                    <tr className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-200'} bg-cyan-500/10`}>
                      <td className="p-3 font-semibold text-cyan-400">VerafyAI</td>
                      <td className={`p-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Advisor – tells you what to do</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </GlowCard>

            <GlowCard className="p-8" highlight>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                Zero Direct Competitors
              </h3>
              <p className={`mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                No one else offers:
              </p>
              <ul className="space-y-3">
                {[
                  'AI-powered pre-trade CGT optimization in Australia',
                  'Natural language portfolio queries ("Vera, should I sell?")',
                  'Behavioral coaching based on trading patterns',
                  'Action-first interface (prioritized to-dos, not charts)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
                <p className="text-cyan-400 font-semibold text-center">
                  12-18 month first-mover advantage
                </p>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Unit Economics */}
        <section className="mb-20">
          <SectionHeader
            title="Validated Economics"
            subtitle="Projected metrics with defendable methodology"
            isDark={isDark}
          />

          <div className="overflow-x-auto mb-8">
            <table className={`w-full rounded-xl overflow-hidden ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Metric</th>
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Target</th>
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Methodology</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-200'}`}>
                {[
                  { metric: 'Beta users (Mar 31)', target: '500', methodology: 'Founder network + waitlist' },
                  { metric: 'Activation rate', target: '40%', methodology: 'Industry benchmark for freemium SaaS' },
                  { metric: '6-month retention', target: '85%', methodology: 'Sharesight benchmark (we expect better given tax value)' },
                  { metric: 'Average tax savings', target: '$3,200/year', methodology: 'Real beta user saved $8,400 on single rebalance' },
                  { metric: 'LTV:CAC', target: '48:1', methodology: '$816 LTV ÷ $17 CAC (industry benchmark: 3:1)', highlight: true },
                ].map((item, i) => (
                  <tr key={i} className={item.highlight ? 'bg-cyan-500/10' : ''}>
                    <td className={`p-4 font-semibold ${item.highlight ? 'text-cyan-400' : isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.metric}</td>
                    <td className={`p-4 font-bold ${item.highlight ? 'text-cyan-400' : isDark ? 'text-white' : 'text-slate-900'}`}>{item.target}</td>
                    <td className={`p-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.methodology}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Three Products */}
        <section className="mb-20">
          <SectionHeader
            title="Three Products, Three Revenue Streams"
            subtitle="Year 1 revenue mix"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { product: 'Portfolio Intelligence', arpu: '$216/year', revenue: '60%', launch: 'Apr 2026', icon: Brain, color: 'cyan' },
              { product: 'Trading Platform', arpu: '$360/year', revenue: '25%', launch: 'Q2-Q3 2026', icon: LineChart, color: 'blue' },
              { product: 'Advisor Platform', arpu: '$3,000/year', revenue: '15%', launch: 'Q4 2026', icon: Briefcase, color: 'purple' },
            ].map((item, i) => (
              <GlowCard key={i} className="p-6" highlight={i === 0}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  item.color === 'cyan' ? 'bg-gradient-to-br from-cyan-400 to-blue-500' :
                  item.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-indigo-500' :
                  'bg-gradient-to-br from-purple-400 to-pink-500'
                }`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {item.product}
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>ARPU:</span>
                    <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.arpu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>% Revenue:</span>
                    <span className="font-bold text-cyan-400">{item.revenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Launch:</span>
                    <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.launch}</span>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* Financial Scenarios */}
        <section className="mb-20">
          <SectionHeader
            title="The Numbers"
            subtitle="Three scenarios with transparent assumptions"
            isDark={isDark}
          />

          <div className="space-y-8">
            {/* Scenario 1 */}
            <GlowCard className="p-8">
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Scenario 1: Bootstrap (No Funding)
              </h3>
              <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Assumptions: Organic growth only (8% MoM), content marketing, no paid ads, 30% conversion, 18% churn
              </p>
              <div className="overflow-x-auto">
                <table className={`w-full ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <thead>
                    <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <th className="p-3 text-left">Year</th>
                      <th className="p-3 text-right">Users</th>
                      <th className="p-3 text-right">Paying</th>
                      <th className="p-3 text-right">ARR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { year: '2026 (Apr-Dec)', users: '3,500', paying: '1,000', arr: '$180K' },
                      { year: '2027', users: '12,000', paying: '3,600', arr: '$648K' },
                      { year: '2028', users: '35,000', paying: '10,500', arr: '$1.9M' },
                      { year: '2029', users: '88,000', paying: '26,400', arr: '$4.8M' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                        <td className="p-3">{row.year}</td>
                        <td className="p-3 text-right">{row.users}</td>
                        <td className="p-3 text-right">{row.paying}</td>
                        <td className="p-3 text-right font-bold">{row.arr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                  Break-even: Q4 2027 (21 months)
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                  Exit (Year 5): $48M (10x ARR)
                </span>
              </div>
            </GlowCard>

            {/* Scenario 2 */}
            <GlowCard className="p-8" highlight>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold text-cyan-400">
                  Scenario 2: Conservative ($1M Funding)
                </h3>
                <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold">RECOMMENDED</span>
              </div>
              <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Assumptions: 15% MoM growth (Year 1), 10% (Year 2), paid + organic acquisition, 35% conversion, 15% churn
              </p>
              <div className="overflow-x-auto">
                <table className={`w-full ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <thead>
                    <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <th className="p-3 text-left">Year</th>
                      <th className="p-3 text-right">Users</th>
                      <th className="p-3 text-right">Paying</th>
                      <th className="p-3 text-right">ARR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { year: '2026 (Apr-Dec)', users: '10,000', paying: '3,000', arr: '$648K' },
                      { year: '2027', users: '35,000', paying: '10,500', arr: '$2.3M' },
                      { year: '2028', users: '95,000', paying: '28,500', arr: '$6.2M' },
                      { year: '2029', users: '210,000', paying: '63,000', arr: '$13.6M' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                        <td className="p-3">{row.year}</td>
                        <td className="p-3 text-right">{row.users}</td>
                        <td className="p-3 text-right">{row.paying}</td>
                        <td className="p-3 text-right font-bold text-cyan-400">{row.arr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
                  Break-even: Q2 2027 (15 months)
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-400">
                  Exit (Year 4): $136M (10x ARR)
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-400 font-bold">
                  Investor return: 12.4x on $1M
                </span>
              </div>
            </GlowCard>

            {/* Scenario 3 */}
            <GlowCard className="p-8">
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Scenario 3: Aggressive ($3M Funding)
              </h3>
              <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Assumptions: 25% MoM growth (Year 1), 15% (Year 2), full marketing spend + partnerships, 40% conversion, 12% churn
              </p>
              <div className="overflow-x-auto">
                <table className={`w-full ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <thead>
                    <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <th className="p-3 text-left">Year</th>
                      <th className="p-3 text-right">Users</th>
                      <th className="p-3 text-right">Paying</th>
                      <th className="p-3 text-right">ARR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { year: '2026 (Apr-Dec)', users: '35,000', paying: '10,500', arr: '$2.5M' },
                      { year: '2027', users: '160,000', paying: '48,000', arr: '$11.5M' },
                      { year: '2028', users: '550,000', paying: '165,000', arr: '$39.6M' },
                      { year: '2029', users: '1,200,000', paying: '360,000', arr: '$86.4M' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                        <td className="p-3">{row.year}</td>
                        <td className="p-3 text-right">{row.users}</td>
                        <td className="p-3 text-right">{row.paying}</td>
                        <td className="p-3 text-right font-bold">{row.arr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                  Break-even: Q3 2026 (6 months)
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                  Exit (Year 4): $864M (10x ARR)
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-400 font-bold">
                  Investor return: 27x on $3M
                </span>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* What We've Achieved */}
        <section className="mb-20">
          <SectionHeader
            title="What We've Already Achieved"
            subtitle="4 months full-time with evidence"
            isDark={isDark}
          />

          <div className="overflow-x-auto">
            <table className={`w-full rounded-xl overflow-hidden ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Item</th>
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Status</th>
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Evidence</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-200'}`}>
                {[
                  { item: '$150K seed deployed', status: true, evidence: 'Bank statements' },
                  { item: '$25K AWS credits', status: true, evidence: 'AWS console' },
                  { item: 'Product built', status: true, evidence: 'Live at dev.verafyai.com.au' },
                  { item: 'Portfolio analyzer', status: true, evidence: 'Demo available' },
                  { item: 'CGT engine', status: true, evidence: 'In development, 80% complete' },
                  { item: 'R&D tax claim', status: true, evidence: '$60K expected Q1 2026' },
                  { item: 'Trademarks filed', status: true, evidence: 'IP Australia confirmation' },
                  { item: 'Patent drafted', status: true, evidence: 'Under internal review' },
                ].map((item, i) => (
                  <tr key={i}>
                    <td className={`p-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.item}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                        <CheckCircle2 className="w-4 h-4" /> Complete
                      </span>
                    </td>
                    <td className={`p-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-center">
            <p className="text-xl font-bold text-cyan-400">
              We're not raising to build. We're raising to accelerate.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <SectionHeader
            title="The Team"
            subtitle="Experienced operators with proven track records"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-8">
            <GlowCard className="p-8">
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Amit Vohra – CEO
              </h3>
              <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                PhD Health Workforce | MBA with Distinction | GAICD (High Distinction)
              </p>
              <div className={`rounded-xl overflow-hidden border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className={isDark ? 'bg-slate-800' : 'bg-slate-100'}>
                      <th className={`p-3 text-left font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Role</th>
                      <th className={`p-3 text-left font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Achievement</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${isDark ? 'divide-slate-700' : 'divide-slate-200'}`}>
                    {[
                      { role: 'CEO, GPRA (2006-2014)', achievement: '$2M → $12M revenue (500% growth)' },
                      { role: 'CEO, GPRA', achievement: '$1M → $8M equity value (700% growth)' },
                      { role: 'CEO, GPRA', achievement: 'Secured $18M in project funding' },
                      { role: 'National Lead, Sonic', achievement: 'Built WellNet (Kaiser model), $10M raised' },
                      { role: 'National Lead, Sonic', achievement: 'Risk algorithm with 98% accuracy' },
                      { role: 'Executive Lead, CPD Home', achievement: 'Break-even in 18 months' },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className={`p-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{row.role}</td>
                        <td className={`p-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{row.achievement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Nupur Agarwal – CTO
              </h3>
              <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                10+ years engineering (Python, React, AWS) | Ex-GBST/xplan | 40% equity
              </p>
              <ul className="space-y-3">
                {[
                  'Insider knowledge of advisor platforms',
                  'Built entire VerafyAI beta before raising',
                  'Ex-JP Morgan (7 years)',
                  'Deep AWS and fintech expertise',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={`mt-6 p-4 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Why This Team:</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    'CEO who\'s grown companies 5x+ (multiple times)',
                    'CTO who\'s built the product (not just planned it)',
                    'Both learned about money at 40 (founder-market fit)',
                    'Both have houses on market (skin in game)',
                  ].map((item, i) => (
                    <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <Check className="w-4 h-4 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* The Ask */}
        <section className="mb-20">
          <SectionHeader
            title="The Opportunity"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <GlowCard className="p-8" highlight>
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">
                The Ask
              </h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>Raising:</span>
                  <span className="font-bold text-white text-2xl">$1,000,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>Valuation:</span>
                  <span className="font-bold text-white text-2xl">$10M pre-money</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>Equity:</span>
                  <span className="font-bold text-white text-2xl">9.09% (fully diluted)</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>Instrument:</span>
                  <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Flexible (SAFE or priced equity)</span>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Use of Funds
              </h3>
              <div className="space-y-4">
                {[
                  { category: 'User Acquisition', amount: '$450K', pct: 45, color: 'cyan' },
                  { category: 'Product Development', amount: '$400K', pct: 40, color: 'blue' },
                  { category: 'Infrastructure', amount: '$100K', pct: 10, color: 'purple' },
                  { category: 'Operations', amount: '$50K', pct: 5, color: 'slate' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item.category}</span>
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{item.amount} ({item.pct}%)</span>
                    </div>
                    <div className={`h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div
                        className={`h-full rounded-full ${
                          item.color === 'cyan' ? 'bg-cyan-500' :
                          item.color === 'blue' ? 'bg-blue-500' :
                          item.color === 'purple' ? 'bg-purple-500' :
                          'bg-slate-500'
                        }`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className={`mt-6 p-4 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>What $1M buys:</p>
                <ul className="space-y-1 text-sm">
                  {[
                    '0 → 10K users in 12 months (vs. 3K bootstrap)',
                    'Trading platform + advisor platform shipped 6 months faster',
                    'Break-even in 15 months (vs. 21 months bootstrap)',
                  ].map((item, i) => (
                    <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <Zap className="w-4 h-4 text-yellow-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </div>

          {/* Expected Returns */}
          <GlowCard className="p-8 mb-8">
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Expected Returns
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { scenario: 'Bootstrap', exit: '$48M', return: 'N/A' },
                { scenario: 'Conservative', exit: '$136M', return: '12.4x', highlight: true },
                { scenario: 'Base', exit: '$177M', return: '16.1x' },
                { scenario: 'Aggressive', exit: '$665M', return: '60x' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl text-center ${
                    item.highlight
                      ? 'bg-cyan-500/20 border-2 border-cyan-500/50'
                      : isDark ? 'bg-slate-800/50' : 'bg-slate-100'
                  }`}
                >
                  <p className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.scenario}</p>
                  <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.exit}</p>
                  <p className={`text-lg font-bold ${item.highlight ? 'text-cyan-400' : 'text-green-400'}`}>{item.return}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                <Target className="w-5 h-5 text-cyan-400" />
                <span className="text-xl font-bold text-cyan-400">Median expected return: 16x over 4 years</span>
              </span>
            </div>
          </GlowCard>

          {/* Why Now */}
          <GlowCard className="p-8">
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Why Now?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Market gap widening',
                  points: ['Young traders losing $8.4B/year', '1,200 advisors exiting annually', 'No one serving the mass market'],
                  icon: TrendingUp,
                },
                {
                  title: 'Technology ready',
                  points: ['AI can explain tax in plain English', 'Broker APIs standardizing', 'Mobile-first expectation'],
                  icon: Zap,
                },
                {
                  title: 'Regulatory window',
                  points: ['2-3 years before ASIC tightens', 'First-mover advantage locks in position', 'Compliant architecture from day 1'],
                  icon: Shield,
                },
                {
                  title: 'Founder-market fit',
                  points: ['Proven CEO + product-ready CTO', 'Personal capital at risk', 'Not raising to build – raising to accelerate'],
                  icon: Users,
                },
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className={`text-sm flex items-start gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlowCard>
        </section>

        {/* Contact */}
        <section className="text-center">
          <GlowCard className="p-12" highlight>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Us?</h2>
            <p className={`text-xl mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Contact us to discuss this investment opportunity
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <p className="text-lg font-semibold text-white">Amit Vohra, CEO</p>
                <p className="text-cyan-400">amit@verafyai.com.au</p>
              </div>
              <div className={`hidden sm:block w-px h-12 ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`} />
              <div className="text-center">
                <p className="text-lg font-semibold text-white">Website</p>
                <p className="text-cyan-400">www.verafyai.com.au</p>
              </div>
            </div>
            <p className={`mt-8 text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              This document is confidential and intended solely for the recipient. Do not distribute without written permission from Axient AI Pty Ltd.
            </p>
          </GlowCard>
        </section>
      </div>
    </div>
  );
}
