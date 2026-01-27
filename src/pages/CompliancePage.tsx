import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  FileCheck, 
  Users, 
  Globe, 
  Database,
  CheckCircle2,
  ChevronRight,
  Eye,
  AlertTriangle,
  Building2,
  Fingerprint,
  ScrollText,
  Award
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { GlassCard } from '../components/GlassCard';
import { ContactCTA } from '../components/ContactCTA';
import { COLORS } from '../config/theme';

interface CompliancePageProps {
  isDark: boolean;
}

interface ComplianceFramework {
  id: string;
  title: string;
  icon: any;
  description: string;
  color: string;
  items: string[];
}

export function CompliancePage({ isDark }: CompliancePageProps) {
  const [activeFramework, setActiveFramework] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<'frameworks' | 'certifications' | 'policies'>('frameworks');

  const frameworks: ComplianceFramework[] = [
    {
      id: 'privacy',
      title: 'Privacy & Data Protection',
      icon: Lock,
      description: 'Comprehensive data protection aligned with Australian Privacy Principles',
      color: COLORS.cyan.light, // OPTIMIZED: Using theme config
      items: [
        'Australian Privacy Act 1988 compliance',
        'Privacy by design principles',
        'Data minimization and purpose limitation',
        'Individual rights management (access, correction, deletion)',
        'Privacy impact assessments for new features',
        'Cross-border data transfer safeguards',
        'Regular privacy audits and reviews',
        'Transparent privacy notices and consent management'
      ]
    },
    {
      id: 'security',
      title: 'Information Security',
      icon: Shield,
      description: 'Bank-level security standards protecting your financial data',
      color: COLORS.blue.light, // OPTIMIZED: Using theme config
      items: [
        'ISO 27001 aligned security controls',
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'Multi-factor authentication (MFA)',
        'Regular penetration testing and vulnerability assessments',
        'Security incident response procedures',
        '24/7 security monitoring and threat detection',
        'Secure software development lifecycle (SDLC)'
      ]
    },
    {
      id: 'financial',
      title: 'Financial Services',
      icon: Building2,
      description: 'Adherence to Australian financial regulations and standards',
      color: COLORS.blue.base, // OPTIMIZED: Using theme config
      items: [
        'ASIC regulatory compliance monitoring',
        'AML/CTF program implementation',
        'Consumer Data Right (CDR) compliance',
        'Financial services licensing requirements',
        'Product disclosure and transparency',
        'Responsible lending practices',
        'Financial hardship support',
        'Dispute resolution procedures'
      ]
    },
    {
      id: 'rg244',
      title: 'ASIC RG 244 Compliance',
      icon: ScrollText,
      description: 'Regulatory Guide 244: Giving information, general advice and scaled advice',
      color: COLORS.green.light, // OPTIMIZED: Using theme config
      items: [
        'Provides factual information and general educational content only',
        'Does NOT provide personal financial advice of any kind',
        'Clear disclaimers on all outputs and communications',
        'General Disclaimer: Information does not account for personal circumstances',
        'Tax Disclaimer: Tax estimates are informational only, consult registered tax agent',
        'Investment Disclaimer: Past performance not indicative of future results',
        'Transparency about information vs advice distinction',
        'Users directed to licensed advisers for personal recommendations'
      ]
    },
    {
      id: 'ai',
      title: 'AI Ethics & Governance',
      icon: Fingerprint,
      description: 'Responsible AI development and deployment practices',
      color: COLORS.indigo.base, // OPTIMIZED: Using theme config
      items: [
        'AI ethics framework and principles',
        'Algorithmic transparency and explainability',
        'Bias detection and mitigation',
        'Human oversight of automated decisions',
        'Regular AI model auditing',
        'Fair and ethical AI use cases',
        'AI impact assessments',
        'Continuous model monitoring and improvement'
      ]
    },
    {
      id: 'data',
      title: 'Data Governance',
      icon: Database,
      description: 'Robust data management and quality assurance',
      color: COLORS.purple.base, // OPTIMIZED: Using theme config
      items: [
        'Data quality management framework',
        'Data classification and handling procedures',
        'Data retention and deletion policies',
        'Access control and authorization',
        'Data lineage and provenance tracking',
        'Regular data quality audits',
        'Third-party data sharing agreements',
        'Data breach notification procedures'
      ]
    },
    {
      id: 'operational',
      title: 'Operational Resilience',
      icon: AlertTriangle,
      description: 'Business continuity and disaster recovery',
      color: COLORS.pink.base, // OPTIMIZED: Using theme config
      items: [
        'Business continuity planning (BCP)',
        'Disaster recovery procedures',
        'Incident management framework',
        '99.9% uptime SLA commitment',
        'Redundant infrastructure and failover',
        'Regular backup and recovery testing',
        'Change management processes',
        'Service level monitoring and reporting'
      ]
    }
  ];

  const certifications = [
    {
      title: 'ISO 27001',
      status: 'In Progress',
      description: 'Information Security Management System',
      icon: Award
    },
    {
      title: 'SOC 2 Type II',
      status: 'In Progress',
      description: 'Security, Availability & Confidentiality',
      icon: Shield
    },
    {
      title: 'APRA CPS 234',
      status: 'Aligned',
      description: 'Information Security Standards',
      icon: Building2
    },
    {
      title: 'CDR Compliance',
      status: 'Aligned',
      description: 'Consumer Data Right Standards',
      icon: FileCheck
    }
  ];

  const policies = [
    { title: 'Privacy Policy', icon: Eye, updated: 'Jan 2026' },
    { title: 'Information Security Policy', icon: Lock, updated: 'Jan 2026' },
    { title: 'Data Retention Policy', icon: Database, updated: 'Dec 2025' },
    { title: 'Acceptable Use Policy', icon: Users, updated: 'Dec 2025' },
    { title: 'Incident Response Policy', icon: AlertTriangle, updated: 'Nov 2025' },
    { title: 'Third-Party Risk Policy', icon: Globe, updated: 'Nov 2025' }
  ];

  return (
    <>
      <FloatingParticles isDark={isDark} />
      <InteractiveCursor isDark={isDark} />

      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="relative pt-32 pb-16 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: isDark 
                ? 'radial-gradient(circle at 50% 0%, var(--theme-primary) 0%, transparent 50%)'
                : 'radial-gradient(circle at 50% 0%, var(--theme-primary) 0%, transparent 70%)',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span 
                  className="px-4 py-2 rounded-full text-sm font-semibold border-2"
                  style={{
                    background: isDark 
                      ? 'rgba(var(--theme-primary-rgb), 0.1)' 
                      : 'rgba(var(--theme-primary-rgb), 0.1)',
                    borderColor: 'var(--theme-primary-alpha)',
                    color: 'var(--theme-primary)',
                  }}
                >
                  Trust & Security
                </span>
              </motion.div>

              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Compliance{' '}
                <span 
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Framework
                </span>
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Built on a foundation of security, privacy, and regulatory excellence
              </p>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { label: 'Compliance Frameworks', value: '7+' },
                { label: 'Security Controls', value: '100+' },
                { label: 'Annual Audits', value: '12+' },
                { label: 'Uptime SLA', value: '99.9%' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-xl backdrop-blur-xl border-2"
                  style={{
                    background: isDark 
                      ? 'rgba(15, 23, 42, 0.6)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: 'var(--theme-primary-alpha)',
                  }}
                >
                  <div 
                    className="text-3xl font-bold mb-1"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="relative py-8 border-b-2" style={{ borderColor: 'var(--theme-primary-alpha)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center gap-4">
              {[
                { id: 'frameworks', label: 'Compliance Frameworks', icon: ScrollText },
                { id: 'certifications', label: 'Certifications', icon: Award },
                { id: 'policies', label: 'Policies', icon: FileCheck }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id as any)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    selectedTab === tab.id
                      ? 'shadow-lg'
                      : ''
                  }`}
                  style={{
                    background: selectedTab === tab.id
                      ? `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`
                      : isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.8)',
                    color: selectedTab === tab.id ? 'white' : isDark ? '#94a3b8' : '#64748b',
                    border: `2px solid ${selectedTab === tab.id ? 'transparent' : 'var(--theme-primary-alpha)'}`
                  }}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatePresence mode="wait">
              {/* Frameworks Tab */}
              {selectedTab === 'frameworks' && (
                <motion.div
                  key="frameworks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {frameworks.map((framework, index) => {
                    const Icon = framework.icon;
                    const isActive = activeFramework === framework.id;

                    return (
                      <motion.div
                        key={framework.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                      >
                        <div
                          className={`p-6 rounded-2xl border-2 backdrop-blur-xl transition-all duration-300 cursor-pointer ${
                            isDark
                              ? 'bg-slate-900/60 hover:bg-slate-900/80'
                              : 'bg-white/80 hover:bg-white'
                          }`}
                          style={{
                            borderColor: isActive ? framework.color : 'var(--theme-primary-alpha)',
                            boxShadow: isActive ? `0 8px 32px ${framework.color}40` : 'none'
                          }}
                          onClick={() => setActiveFramework(isActive ? null : framework.id)}
                        >
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div 
                              className="w-14 h-14 rounded-xl flex items-center justify-center"
                              style={{
                                background: `${framework.color}20`,
                                border: `2px solid ${framework.color}40`
                              }}
                            >
                              <Icon className="w-7 h-7" style={{ color: framework.color }} />
                            </div>
                            <motion.div
                              animate={{ rotate: isActive ? 90 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronRight 
                                className="w-6 h-6" 
                                style={{ color: framework.color }}
                              />
                            </motion.div>
                          </div>

                          <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {framework.title}
                          </h3>
                          
                          <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {framework.description}
                          </p>

                          {/* Expandable Content */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div 
                                  className="mt-4 pt-4 border-t-2"
                                  style={{ borderColor: `${framework.color}40` }}
                                >
                                  <ul className="space-y-2">
                                    {framework.items.map((item, i) => (
                                      <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                        className="flex items-start gap-2"
                                      >
                                        <CheckCircle2 
                                          className="w-4 h-4 mt-0.5 flex-shrink-0" 
                                          style={{ color: framework.color }}
                                        />
                                        <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                          {item}
                                        </span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Click Indicator */}
                          <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: framework.color }}>
                            {isActive ? 'Click to collapse' : 'Click to expand'}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {/* Certifications Tab */}
              {selectedTab === 'certifications' && (
                <motion.div
                  key="certifications"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                >
                  {certifications.map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                      <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -8 }}
                        className="p-8 rounded-2xl border-2 backdrop-blur-xl"
                        style={{
                          background: isDark 
                            ? 'rgba(15, 23, 42, 0.6)' 
                            : 'rgba(255, 255, 255, 0.8)',
                          borderColor: 'var(--theme-primary-alpha)',
                        }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div 
                            className="w-16 h-16 rounded-xl flex items-center justify-center"
                            style={{
                              background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                            }}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{
                              background: cert.status === 'Certified' ? '#10B98120' : 
                                         cert.status === 'In Progress' ? '#F59E0B20' : '#06B6D420',
                              color: cert.status === 'Certified' ? '#10B981' : 
                                    cert.status === 'In Progress' ? '#F59E0B' : '#06B6D4',
                            }}
                          >
                            {cert.status}
                          </span>
                        </div>
                        <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {cert.title}
                        </h3>
                        <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {cert.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {/* Policies Tab */}
              {selectedTab === 'policies' && (
                <motion.div
                  key="policies"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {policies.map((policy, index) => {
                    const Icon = policy.icon;
                    return (
                      <motion.div
                        key={policy.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="p-6 rounded-2xl border-2 backdrop-blur-xl cursor-pointer transition-all duration-300"
                        style={{
                          background: isDark 
                            ? 'rgba(15, 23, 42, 0.6)' 
                            : 'rgba(255, 255, 255, 0.8)',
                          borderColor: 'var(--theme-primary-alpha)',
                        }}
                      >
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                          style={{
                            background: 'var(--theme-primary-alpha)',
                          }}
                        >
                          <Icon className="w-6 h-6" style={{ color: 'var(--theme-primary)' }} />
                        </div>
                        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {policy.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            Updated: {policy.updated}
                          </span>
                          <ChevronRight className="w-5 h-5" style={{ color: 'var(--theme-primary)' }} />
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-3xl border-2 backdrop-blur-xl text-center"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: 'var(--theme-primary-alpha)',
              }}
            >
              <Shield className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--theme-primary)' }} />
              <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Questions about our compliance?
              </h3>
              <p className={`text-lg mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Our security team is here to answer any questions about our compliance frameworks,
                certifications, or security practices.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-semibold text-white shadow-lg"
                style={{
                  background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                }}
              >
                Contact Security Team
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}