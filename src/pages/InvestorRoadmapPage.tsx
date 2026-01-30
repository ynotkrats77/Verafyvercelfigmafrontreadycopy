import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Check,
  Calendar,
  CheckCircle2,
  Target,
  Server,
  Database,
  Code,
  Smartphone,
  LineChart,
  Briefcase,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Layers,
  ArrowRight,
  Cpu,
  Brain,
  FileText,
  DollarSign,
  AlertCircle,
} from 'lucide-react';

interface InvestorRoadmapPageProps {
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

// Glowing card component
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
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
      </div>
    )}
    <div className="relative z-10">{children}</div>
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

export function InvestorRoadmapPage({ isDark }: InvestorRoadmapPageProps) {
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
              <Rocket className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Product Roadmap</span>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Product Roadmap & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Milestones</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Technical Development Plan: From Portfolio Intelligence to Full Financial Ecosystem
            </p>
            <p className={`text-lg mt-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Prepared for Antler / AXIENT Executive | Version 3.0 | January 2026
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Executive Summary */}
        <section className="mb-20">
          <SectionHeader
            title="Executive Summary"
            subtitle="Current status and key milestones"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: 'Current Status', value: 'Post-MVP', sub: 'Beta Feb 15, 2026', icon: CheckCircle2, color: 'green' },
              { label: 'Funding Deployed', value: '$175K', sub: '$150K seed + $25K AWS', icon: DollarSign, color: 'cyan' },
              { label: 'R&D Tax Credit', value: '$60K', sub: 'Expected Q1 2026', icon: FileText, color: 'blue' },
              { label: 'Raising', value: '$1M', sub: 'Seed Q1 2026', icon: TrendingUp, color: 'purple' },
              { label: 'Full Ecosystem', value: 'Q4 2026', sub: '12 months', icon: Layers, color: 'yellow' },
            ].map((item, i) => (
              <GlowCard key={i} className="p-6 text-center" highlight={i === 0}>
                <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                  item.color === 'green' ? 'bg-green-500/20' :
                  item.color === 'cyan' ? 'bg-cyan-500/20' :
                  item.color === 'blue' ? 'bg-blue-500/20' :
                  item.color === 'purple' ? 'bg-purple-500/20' :
                  'bg-yellow-500/20'
                }`}>
                  <item.icon className={`w-6 h-6 ${
                    item.color === 'green' ? 'text-green-400' :
                    item.color === 'cyan' ? 'text-cyan-400' :
                    item.color === 'blue' ? 'text-blue-400' :
                    item.color === 'purple' ? 'text-purple-400' :
                    'text-yellow-400'
                  }`} />
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.label}</p>
                <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.value}</p>
                <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{item.sub}</p>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* Launch Timeline Overview */}
        <section className="mb-20">
          <SectionHeader
            title="Launch Timeline Overview"
            subtitle="Key milestones from infrastructure to full ecosystem"
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
                  { milestone: 'Beta launch', date: 'Feb 15, 2026', status: 'target', highlight: true },
                  { milestone: 'Public launch', date: 'Apr 1, 2026', status: 'target', highlight: true },
                  { milestone: 'Mobile apps (iOS, Android)', date: 'May 2026', status: 'planned' },
                  { milestone: 'Trading platform beta', date: 'Aug 2026', status: 'planned' },
                  { milestone: 'Trading platform full', date: 'Sep 2026', status: 'planned' },
                  { milestone: 'Advisor platform', date: 'Oct 2026', status: 'planned' },
                ].map((item, i) => (
                  <tr key={i} className={item.highlight ? 'bg-cyan-500/10' : ''}>
                    <td className={`p-4 font-medium ${item.highlight ? 'text-cyan-400' : isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.milestone}</td>
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

        {/* Product 1: Consumer App */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Product 1: Consumer App – VerafyAI</h2>
              <p className="text-cyan-400 font-semibold">Status: BUILT – Launching February 15, 2026</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* What's Complete */}
            <GlowCard className="p-6" highlight>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>What's Complete</h4>
              </div>
              <div className="mb-4">
                <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Core Portfolio Features:</p>
                <ul className="space-y-2">
                  {[
                    'Multi-platform portfolio aggregation (equities, ETFs)',
                    'Real-time portfolio tracking across all holdings',
                    'Cost base calculations with corporate actions',
                    'Multi-portfolio support (personal, joint, trusts)',
                    'Web platform (responsive design)',
                    'User authentication (Cognito)',
                    'Action Centre alert system',
                    '1st Gen Vera Insight & AI Chat',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Tax Intelligence:</p>
                <ul className="space-y-2">
                  {[
                    'CGT calculation engine (FIFO, LIFO, discount)',
                    'Pre-trade tax modeling',
                    'Wash sale detection',
                    '50% CGT discount tracking (12-month holding)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>

            {/* In Development */}
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-purple-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>In Development</h4>
              </div>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Feature</th>
                    <th className="py-2 text-left">Target</th>
                    <th className="py-2 text-right">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Enhanced CGT calculator (unlimited)', target: 'Feb 15', progress: '80%' },
                    { feature: 'Tax pack export (FY 2024/25, 2025/26)', target: 'Feb 15', progress: '70%' },
                    { feature: 'Vera Chat v2 (behavioral insights)', target: 'Mar 2026', progress: '40%' },
                    { feature: 'Mobile apps (iOS, Android)', target: 'May 2026', progress: '0%' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                      <td className="py-3">{row.feature}</td>
                      <td className="py-3 text-cyan-400">{row.target}</td>
                      <td className="py-3 text-right">
                        <span className={`px-2 py-1 rounded text-xs ${
                          row.progress === '0%' ? 'bg-slate-500/20 text-slate-400' :
                          parseInt(row.progress) >= 70 ? 'bg-green-500/20 text-green-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {row.progress}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlowCard>
          </div>

          {/* Tech Stack */}
          <GlowCard className="p-6 mb-8">
            <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Technology Stack Deployed</h4>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { title: 'Compute & Backend', items: ['AWS Lambda (serverless)', 'Python/FastAPI backend', 'API Gateway'], icon: Server },
                { title: 'Database & Storage', items: ['RDS PostgreSQL', 'DynamoDB (real-time)', 'S3 (documents)'], icon: Database },
                { title: 'Frontend', items: ['React (Web)', 'React Native (planned)', 'Responsive design'], icon: Code },
                { title: 'Authentication', items: ['AWS Cognito', 'MFA support', 'Passwordless'], icon: Shield },
              ].map((section, i) => (
                <div key={i} className={`p-4 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <section.icon className="w-5 h-5 text-cyan-400" />
                    <h5 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{section.title}</h5>
                  </div>
                  <ul className="space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j} className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlowCard>

          {/* Beta vs Public Launch */}
          <div className="grid md:grid-cols-2 gap-6">
            <GlowCard className="p-6" highlight>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-cyan-400" />
                <h4 className="text-lg font-bold text-cyan-400">Beta Launch: February 15, 2026</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>What Goes Live:</p>
                  <ul className="space-y-1">
                    {['Portfolio tracking (equities, ETFs, managed funds)', 'CGT calculation engine', 'Pre-trade tax modeling', 'Action Centre', 'Vera AI chat (v1)', 'Tax pack export (basic)'].map((item, i) => (
                      <li key={i} className={`text-sm flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <Check className="w-4 h-4 text-cyan-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Target Users</p>
                    <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>100-500</p>
                  </div>
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Founding Price</p>
                    <p className="text-lg font-bold text-green-400">50% off</p>
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-6 h-6 text-blue-400" />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Public Launch: April 1, 2026</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Additional Features:</p>
                  <ul className="space-y-1">
                    {['Full CGT calculator (unlimited)', 'Complete tax pack (ATO-ready)', 'Vera Chat v2 (behavioral insights)', 'Broker integrations (CommSec, SelfWealth, Stake)', 'Educational content framework'].map((item, i) => (
                      <li key={i} className={`text-sm flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <ArrowRight className="w-4 h-4 text-blue-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Target Users</p>
                    <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>3,000</p>
                  </div>
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Pro Tier</p>
                    <p className="text-lg font-bold text-cyan-400">$20/mo</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Product 2: Trading App */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
              <LineChart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Product 2: Trading App – VerafyAI Trade</h2>
              <p className="text-blue-400 font-semibold">Status: PRE-BUILD – Launching Q2-Q3 2026</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GlowCard className="p-6">
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>IBKR Integration (Primary Approach)</h4>
              <ul className="space-y-3 mb-6">
                {[
                  'Connect VerafyAI portfolio to Interactive Brokers',
                  'Execute trades through IBKR API',
                  'Real-time sync between tracking and IBKR',
                  'Pre-execution CGT impact shown before trade',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                <h5 className={`font-semibold text-sm mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Why IBKR?</h5>
                <ul className="space-y-1 text-sm">
                  {['No AFSL required (IBKR holds license)', 'Access to global markets immediately', 'Low commissions', 'Professional-grade execution'].map((item, i) => (
                    <li key={i} className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>• {item}</li>
                  ))}
                </ul>
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Core Features</h4>
              <div className="space-y-4">
                <div>
                  <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Tax-Aware Trading Interface:</p>
                  <ul className="space-y-1">
                    {['"Sell now vs hold" comparison', 'CGT liability on order entry', 'Wash sale warnings (real-time)', 'Loss harvesting suggestions'].map((item, i) => (
                      <li key={i} className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Advanced Order Types:</p>
                  <ul className="space-y-1">
                    {['Market, limit, stop-loss', 'Trailing stops', 'Conditional orders', 'Bracket orders'].map((item, i) => (
                      <li key={i} className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Trading Milestones */}
          <GlowCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Development Timeline</h4>
              <span className="text-blue-400 font-semibold">March – September 2026</span>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { date: 'Aug 2026', milestone: 'IBKR integration beta', icon: Cpu },
                { date: 'Sep 2026', milestone: 'Tax-aware trading live', icon: LineChart },
                { date: 'Sep 2026', milestone: 'Paper trading mode', icon: FileText },
                { date: 'Target', milestone: '500 active traders', icon: Users },
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-xl text-center ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                  <item.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{item.date}</p>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.milestone}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 flex justify-between items-center">
              <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Revenue Model: Premium subscription</span>
              <span className="text-blue-400 font-bold">$30/month | ARPU $360/year</span>
            </div>
          </GlowCard>
        </section>

        {/* Product 3: Advisor Platform */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Product 3: Advisor Platform – VerafyAI Advisor</h2>
              <p className="text-purple-400 font-semibold">Status: PRE-BUILD – Launching Q4 2026</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GlowCard className="p-6">
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Core Features</h4>
              <div className="space-y-4">
                {[
                  { title: 'Multi-Client Portfolio Management', items: ['Advisor dashboard with all clients', 'Aggregate view across practice', 'Performance reporting by segment'] },
                  { title: 'Tax Intelligence for Advisors', items: ['Multi-client CGT optimization', 'Tax scenario modeling', 'Loss harvesting opportunities'] },
                  { title: 'Compliance & Reporting', items: ['Audit trail of all actions', 'Client-ready reports', 'Regulatory exports'] },
                ].map((section, i) => (
                  <div key={i}>
                    <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{section.title}:</p>
                    <ul className="space-y-1">
                      {section.items.map((item, j) => (
                        <li key={j} className={`text-sm flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          <Check className="w-4 h-4 text-purple-400" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Why This Competes with xplan</h4>
              <table className={`w-full text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                    <th className="py-2 text-left">Dimension</th>
                    <th className="py-2 text-center text-purple-400">VerafyAI</th>
                    <th className="py-2 text-center">xplan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dim: 'Interface', verafy: 'Modern web', xplan: 'Legacy desktop' },
                    { dim: 'Tax intelligence', verafy: 'AI-powered', xplan: 'Basic' },
                    { dim: 'Price', verafy: '$3,600/year', xplan: '$10K+/year' },
                    { dim: 'Architecture', verafy: 'API-first', xplan: 'Closed system' },
                    { dim: 'AI insights', verafy: 'Yes', xplan: 'None' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                      <td className="py-2">{row.dim}</td>
                      <td className="py-2 text-center text-purple-400 font-semibold">{row.verafy}</td>
                      <td className={`py-2 text-center ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{row.xplan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { tier: 'Portfolio Manager', price: '$99/mo', desc: 'Up to 30 clients' },
                  { tier: 'Enterprise', price: '$299/mo', desc: 'Unlimited clients' },
                  { tier: 'Practice License', price: '$3,600/yr', desc: 'Unlimited advisors' },
                ].map((item, i) => (
                  <div key={i} className={`p-3 rounded-lg text-center ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{item.tier}</p>
                    <p className="text-sm font-bold text-purple-400">{item.price}</p>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Full Ecosystem */}
        <section className="mb-20">
          <SectionHeader
            title="Full Ecosystem Integration"
            subtitle="By December 2026, all three products connected"
            isDark={isDark}
          />

          <GlowCard className="p-8" highlight>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              {[
                { label: 'Consumer tracks portfolio', icon: Brain, product: 'VerafyAI' },
                { label: 'Trades through IBKR', icon: LineChart, product: 'VerafyAI Trade' },
                { label: 'Shares with advisor', icon: Briefcase, product: 'VerafyAI Advisor' },
              ].map((step, i) => (
                <React.Fragment key={i}>
                  <div className={`p-4 rounded-xl text-center ${isDark ? 'bg-slate-800/50' : 'bg-white'}`}>
                    <step.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{step.label}</p>
                    <p className="text-xs text-cyan-400 font-semibold">{step.product}</p>
                  </div>
                  {i < 2 && <ArrowRight className="w-6 h-6 text-cyan-400 hidden md:block" />}
                </React.Fragment>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Unified Features Across Platform</h4>
                <ul className="space-y-2">
                  {[
                    'Single login, multiple interfaces',
                    'Data syncs in real-time',
                    'Tax intelligence in every interaction',
                    'AI assistant (Vera) available everywhere',
                  ].map((item, i) => (
                    <li key={i} className={`text-sm flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      <Check className="w-4 h-4 text-cyan-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Network Effects</h4>
                <ul className="space-y-2">
                  {[
                    'Consumers invite advisors → advisors subscribe',
                    'Advisors refer clients → viral growth',
                    'Traders already have portfolios → low friction',
                    'Data locked in ecosystem → high switching cost',
                  ].map((item, i) => (
                    <li key={i} className={`text-sm flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      <TrendingUp className="w-4 h-4 text-green-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlowCard>
        </section>

        {/* Development Status Summary */}
        <section className="mb-20">
          <SectionHeader
            title="Development Status Summary"
            isDark={isDark}
          />

          <div className="overflow-x-auto">
            <table className={`w-full rounded-xl overflow-hidden ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Product</th>
                  <th className={`p-4 text-center text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>% Complete</th>
                  <th className={`p-4 text-center text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Status</th>
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Launch</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-200'}`}>
                {[
                  { product: 'Consumer App (Core)', pct: 95, status: 'ready', launch: 'Feb 15, 2026' },
                  { product: 'Consumer App (Tax Pack)', pct: 70, status: 'inprogress', launch: 'Feb 15, 2026' },
                  { product: 'Consumer App (Vera v2)', pct: 40, status: 'inprogress', launch: 'Apr 1, 2026' },
                  { product: 'Advanced Analytics', pct: 0, status: 'planned', launch: 'Q2-Q3 2026' },
                  { product: 'Trading App', pct: 0, status: 'planned', launch: 'Q3 2026' },
                  { product: 'Advisor Platform', pct: 0, status: 'planned', launch: 'Q4 2026' },
                ].map((item, i) => (
                  <tr key={i} className={item.pct >= 70 ? 'bg-green-500/5' : ''}>
                    <td className={`p-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.product}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className={`w-20 h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                          <div
                            className={`h-full rounded-full ${
                              item.pct >= 70 ? 'bg-green-500' :
                              item.pct > 0 ? 'bg-yellow-500' :
                              'bg-slate-500'
                            }`}
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                        <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.pct}%</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      {item.status === 'ready' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                          <CheckCircle2 className="w-4 h-4" /> Ready
                        </span>
                      )}
                      {item.status === 'inprogress' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
                          <Clock className="w-4 h-4" /> In Progress
                        </span>
                      )}
                      {item.status === 'planned' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-500/20 text-slate-400 text-sm">
                          <Calendar className="w-4 h-4" /> Planned
                        </span>
                      )}
                    </td>
                    <td className={`p-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.launch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Technical Milestones by Quarter */}
        <section className="mb-20">
          <SectionHeader
            title="Technical Milestones by Quarter"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                quarter: 'Q1 2026',
                items: [
                  { item: 'AWS infrastructure deployed', done: true },
                  { item: 'Consumer app live (Web)', done: true },
                  { item: 'CGT engine complete', done: true },
                  { item: 'Tax pack export (basic)', done: false },
                  { item: 'Vera Chat v2', done: false },
                ],
              },
              {
                quarter: 'Q2 2026',
                items: [
                  { item: 'Public launch', done: false },
                  { item: 'Mobile apps (iOS, Android)', done: false },
                  { item: 'AI/ML infrastructure setup', done: false },
                  { item: 'IBKR API integration started', done: false },
                  { item: 'Advanced analytics engine', done: false },
                ],
              },
              {
                quarter: 'Q3 2026',
                items: [
                  { item: 'ML models in production', done: false },
                  { item: 'Stock screener live', done: false },
                  { item: 'Trading interface beta', done: false },
                  { item: 'Paper trading system', done: false },
                  { item: 'IBKR integration complete', done: false },
                ],
              },
              {
                quarter: 'Q4 2026',
                items: [
                  { item: 'Trading platform full launch', done: false },
                  { item: 'Advisor dashboard live', done: false },
                  { item: 'Multi-tenant system deployed', done: false },
                  { item: 'Platform integrations', done: false },
                  { item: 'Full ecosystem connected', done: false },
                ],
              },
            ].map((q, i) => (
              <GlowCard key={i} className="p-4" highlight={i === 0}>
                <h4 className={`text-lg font-bold mb-3 ${i === 0 ? 'text-cyan-400' : isDark ? 'text-white' : 'text-slate-900'}`}>
                  {q.quarter}
                </h4>
                <ul className="space-y-2">
                  {q.items.map((item, j) => (
                    <li key={j} className={`text-sm flex items-start gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {item.done ? (
                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Clock className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      )}
                      {item.item}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* Revenue Projections */}
        <section className="mb-20">
          <SectionHeader
            title="Revenue Projections by Quarter (2026)"
            isDark={isDark}
          />

          <div className="overflow-x-auto mb-8">
            <table className={`w-full rounded-xl overflow-hidden ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Quarter</th>
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Product Mix</th>
                  <th className={`p-4 text-right text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Users/Practices</th>
                  <th className={`p-4 text-right text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>ARR</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-200'}`}>
                {[
                  { quarter: 'Q1 (Feb-Mar)', mix: 'Consumer only (beta)', users: '500 users', arr: '$30K' },
                  { quarter: 'Q2 (Apr-Jun)', mix: 'Consumer (public)', users: '3,000 users', arr: '$180K' },
                  { quarter: 'Q3 (Jul-Sep)', mix: 'Consumer + Trading', users: '7,500 users + 500 traders', arr: '$450K' },
                  { quarter: 'Q4 (Oct-Dec)', mix: 'Full ecosystem', users: '10K users + 1K traders + 50 practices', arr: '$648K', highlight: true },
                ].map((row, i) => (
                  <tr key={i} className={row.highlight ? 'bg-cyan-500/10' : ''}>
                    <td className={`p-4 font-semibold ${row.highlight ? 'text-cyan-400' : isDark ? 'text-slate-300' : 'text-slate-700'}`}>{row.quarter}</td>
                    <td className={`p-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{row.mix}</td>
                    <td className={`p-4 text-right ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{row.users}</td>
                    <td className={`p-4 text-right font-bold ${row.highlight ? 'text-cyan-400' : isDark ? 'text-white' : 'text-slate-900'}`}>{row.arr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-center">
            <p className="text-2xl font-bold text-cyan-400">Total Year 1 ARR (Apr-Dec): $648K</p>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="mb-20">
          <SectionHeader
            title="Key Differentiators vs Timeline"
            isDark={isDark}
          />

          <div className="space-y-4">
            {[
              { date: 'Feb 2026', diff: 'Only mobile-first portfolio tracker with pre-trade CGT modeling in Australia', icon: Smartphone },
              { date: 'Apr 2026', diff: 'Only platform with complete tax pack + behavioral AI insights', icon: Brain },
              { date: 'Q3 2026', diff: 'Only tax-aware trading interface integrated with portfolio tracking', icon: LineChart },
              { date: 'Q4 2026', diff: 'Only modern xplan alternative with built-in tax intelligence and consumer connectivity', icon: Briefcase },
              { date: 'Dec 2026', diff: 'Only complete ecosystem connecting consumers, traders, and advisors with tax intelligence throughout', icon: Layers },
            ].map((item, i) => (
              <GlowCard key={i} className="p-4" highlight={i === 4}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    i === 4 ? 'bg-cyan-500/30' : isDark ? 'bg-slate-800' : 'bg-slate-100'
                  }`}>
                    <item.icon className={`w-5 h-5 ${i === 4 ? 'text-cyan-400' : 'text-cyan-400'}`} />
                  </div>
                  <div className="flex-1">
                    <span className={`text-sm font-bold ${i === 4 ? 'text-cyan-400' : isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.date}
                    </span>
                    <p className={`${i === 4 ? 'text-white' : isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.diff}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* Risk Mitigation */}
        <section className="mb-20">
          <SectionHeader
            title="Risk Mitigation"
            isDark={isDark}
          />

          <div className="overflow-x-auto mb-8">
            <table className={`w-full rounded-xl overflow-hidden ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Product</th>
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Risk</th>
                  <th className={`p-4 text-left text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Mitigation</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-200'}`}>
                {[
                  { product: 'Consumer (Feb)', risk: 'User adoption slower than expected', mitigation: 'Early adopter cohort validated, organic channels tested' },
                  { product: 'AI Features (Q2)', risk: 'ML models don\'t perform well', mitigation: 'Simple rule-based fallbacks, iterative improvement' },
                  { product: 'Trading (Q3)', risk: 'IBKR API integration complex', mitigation: 'Well-documented API, 6 months dev time, IBKR has integration partners' },
                  { product: 'Advisor (Q4)', risk: 'Feature creep, requirements unclear', mitigation: '10 pilot practices define requirements, MVP scope locked' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className={`p-4 font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{row.product}</td>
                    <td className={`p-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        {row.risk}
                      </div>
                    </td>
                    <td className={`p-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{row.mitigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <GlowCard className="p-6">
            <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Overall Risk Strategy:</h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                'Staggered launches reduce risk',
                'Each product validates before next begins',
                'Revenue generating throughout year',
                'Can adjust roadmap based on market feedback',
              ].map((item, i) => (
                <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <Shield className="w-4 h-4 text-green-400" />
                  {item}
                </li>
              ))}
            </ul>
          </GlowCard>
        </section>

        {/* Contact */}
        <section className="text-center">
          <GlowCard className="p-12" highlight>
            <h2 className="text-3xl font-bold text-white mb-4">
              Current Status: T-minus 24 days to beta launch
            </h2>
            <p className="text-xl text-cyan-400 mb-8">
              Product 1 complete and ready for market.
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
              Document Version 3.0 | Last Updated: January 23, 2026 | Confidential – For Investor Use Only
            </p>
          </GlowCard>
        </section>
      </div>
    </div>
  );
}
