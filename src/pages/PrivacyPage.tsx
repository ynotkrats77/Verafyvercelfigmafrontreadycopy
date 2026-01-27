import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Shield,
  Lock,
  Eye,
  Globe,
  Database,
  Download,
  Edit,
  Trash2,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Server,
  Cloud,
  ExternalLink
} from 'lucide-react';
import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';

interface PrivacyPageProps {
  isDark: boolean;
}

export function PrivacyPage({ isDark }: PrivacyPageProps) {
  const apps = [
    { number: 1, title: 'Open and transparent management', implementation: 'Privacy Policy, Collection Notices' },
    { number: 2, title: 'Anonymity and pseudonymity', implementation: 'Not practical for portfolio tracking' },
    { number: 3, title: 'Collection of solicited personal information', implementation: 'Only collect what\'s needed' },
    { number: 4, title: 'Dealing with unsolicited personal information', implementation: 'Destroy if not needed' },
    { number: 5, title: 'Notification of collection', implementation: 'Collection notice at signup' },
    { number: 6, title: 'Use or disclosure', implementation: 'Only for stated purposes' },
    { number: 7, title: 'Direct marketing', implementation: 'Opt-in only, easy unsubscribe' },
    { number: 8, title: 'Cross-border disclosure', implementation: 'See Cross-Border section' },
    { number: 9, title: 'Adoption of government identifiers', implementation: 'Don\'t use TFN as identifier' },
    { number: 10, title: 'Quality of personal information', implementation: 'Keep accurate and up-to-date' },
    { number: 11, title: 'Security', implementation: 'See Security Framework' },
    { number: 12, title: 'Access to personal information', implementation: 'Self-service data export' },
    { number: 13, title: 'Correction of personal information', implementation: 'Self-service editing' }
  ];

  const dataCollected = [
    {
      category: 'Identity',
      icon: Shield,
      color: '#22D3EE',
      items: [
        { field: 'Email address', purpose: 'Required for account', required: true },
        { field: 'Display name', purpose: 'Optional user preference', required: false }
      ]
    },
    {
      category: 'Financial Data',
      icon: Database,
      color: '#10B981',
      items: [
        { field: 'Portfolio holdings', purpose: 'Core service functionality', required: true },
        { field: 'Transaction history', purpose: 'Performance tracking', required: true },
        { field: 'Performance metrics', purpose: 'Analytics and insights', required: true }
      ]
    },
    {
      category: 'Preferences',
      icon: Edit,
      color: '#3B82F6',
      items: [
        { field: 'Notification settings', purpose: 'Communication preferences', required: false },
        { field: 'Display settings', purpose: 'User experience', required: false },
        { field: 'Theme preferences', purpose: 'Visual customization', required: false }
      ]
    },
    {
      category: 'Technical',
      icon: Server,
      color: '#8B5CF6',
      items: [
        { field: 'IP addresses', purpose: 'Security and fraud prevention', required: true },
        { field: 'Device information', purpose: 'Technical support', required: true },
        { field: 'Usage logs', purpose: 'Service improvement', required: true }
      ]
    }
  ];

  const notCollected = [
    'Tax File Number (TFN)',
    'Bank account details',
    'Credit card details (Stripe handles)',
    'Government ID numbers',
    'Social Security numbers',
    'Driver\'s license information'
  ];

  const crossBorderServices = [
    {
      service: 'RDS PostgreSQL',
      location: 'ap-southeast-2 (Sydney)',
      purpose: 'Primary data store',
      color: '#22D3EE'
    },
    {
      service: 'S3 Storage',
      location: 'ap-southeast-2 (Sydney)',
      purpose: 'Document storage',
      color: '#06B6D4'
    },
    {
      service: 'Lambda Functions',
      location: 'ap-southeast-2 (Sydney)',
      purpose: 'Compute services',
      color: '#0EA5E9'
    },
    {
      service: 'Google Gemini AI',
      location: 'Global (US)',
      purpose: 'AI processing (anonymized data)',
      color: '#F59E0B'
    },
    {
      service: 'Stripe Payments',
      location: 'US',
      purpose: 'Payment processing (PCI-DSS)',
      color: '#10B981'
    }
  ];

  const retentionPolicy = [
    { dataType: 'Account data', period: 'Until deletion + 7 years', method: 'Soft delete, then purge' },
    { dataType: 'Portfolio data', period: 'Until account deletion', method: 'Cascade delete' },
    { dataType: 'Transaction history', period: '7 years (tax requirement)', method: 'Anonymize after 7 years' },
    { dataType: 'Chat history', period: '2 years', method: 'Auto-purge' },
    { dataType: 'Audit logs', period: '7 years', method: 'Archive to cold storage' },
    { dataType: 'Analytics (aggregated)', period: 'Indefinite', method: 'Already anonymized' }
  ];

  const userRights = [
    { right: 'Access', icon: Eye, implementation: 'Settings → Download My Data (JSON export)' },
    { right: 'Correction', icon: Edit, implementation: 'Self-service editing in app' },
    { right: 'Deletion', icon: Trash2, implementation: 'Settings → Delete Account (30-day grace period)' },
    { right: 'Portability', icon: Download, implementation: 'JSON export includes all user data' },
    { right: 'Complaint', icon: AlertTriangle, implementation: 'enquiries@verafyai.com.au → OAIC escalation' }
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
                  Trust Centre
                </span>
              </motion.div>

              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                <span 
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Privacy
                </span>{' '}
                Policy
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Comprehensive privacy compliance under the Australian Privacy Act 1988
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto p-6 rounded-2xl backdrop-blur-xl border-2"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.6)' 
                  : 'rgba(255, 255, 255, 0.8)',
                borderColor: 'var(--theme-primary-alpha)',
              }}
            >
              <p className={`text-center ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <strong>Last Updated:</strong> January 2026 • <strong>Effective Date:</strong> January 1, 2026
              </p>
            </motion.div>
          </div>
        </div>

        {/* Australian Privacy Principles */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Australian Privacy Principles (APPs)
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {apps.map((app, index) => (
                <motion.div
                  key={app.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-5 rounded-xl border-2 backdrop-blur-xl"
                  style={{
                    background: isDark 
                      ? 'rgba(15, 23, 42, 0.6)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: 'var(--theme-primary-alpha)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                      }}
                    >
                      <span className="text-white font-bold text-sm">{app.number}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        APP {app.number}
                      </h3>
                      <p className={`text-xs mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {app.title}
                      </p>
                      <p 
                        className="text-xs font-semibold"
                        style={{ color: 'var(--theme-primary)' }}
                      >
                        {app.implementation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Data We Collect */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Personal Information We Collect
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {dataCollected.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl border-2 backdrop-blur-xl"
                    style={{
                      background: isDark 
                        ? 'rgba(15, 23, 42, 0.6)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'var(--theme-primary-alpha)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${category.color}20`,
                          border: `2px solid ${category.color}40`
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: category.color }} />
                      </div>
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {category.category}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: category.color }} />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                {item.field}
                              </span>
                              {item.required && (
                                <span 
                                  className="text-xs px-2 py-0.5 rounded"
                                  style={{
                                    background: `${category.color}20`,
                                    color: category.color
                                  }}
                                >
                                  Required
                                </span>
                              )}
                            </div>
                            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {item.purpose}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* NOT Collected */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border-2 backdrop-blur-xl"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: '#EF444440',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: '#EF444420',
                    border: '2px solid #EF4444'
                  }}
                >
                  <Shield className="w-7 h-7" style={{ color: '#EF4444' }} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Data We Do NOT Collect
                  </h3>
                  <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    We explicitly do not collect the following sensitive information:
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {notCollected.map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-lg"
                    style={{
                      background: isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: '#EF4444' }} />
                    <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cross-Border Data Disclosure */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Cross-Border Data Disclosure (APP 8)
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-center text-lg mb-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              <strong>Primary Region:</strong> AWS ap-southeast-2 (Sydney, Australia)
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crossBorderServices.map((service, index) => (
                <motion.div
                  key={service.service}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl border-2 backdrop-blur-xl"
                  style={{
                    background: isDark 
                      ? 'rgba(15, 23, 42, 0.6)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: `${service.color}40`,
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: `${service.color}20`,
                      border: `2px solid ${service.color}`
                    }}
                  >
                    <Globe className="w-5 h-5" style={{ color: service.color }} />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {service.service}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4" style={{ color: service.color }} />
                      <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {service.location}
                      </span>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {service.purpose}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Google Gemini Notice */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl border-2 backdrop-blur-xl"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: 'var(--theme-primary-alpha)',
              }}
            >
              <h4 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                🤖 Google Gemini AI - Privacy Safeguards
              </h4>
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Data sent to Gemini is <strong>anonymized and aggregated</strong>. We do NOT send:
              </p>
              <div className="grid md:grid-cols-2 gap-2">
                {['User email addresses', 'User names', 'Individual stock symbols', 'Transaction history', 'Exact position sizes'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--theme-primary)' }}>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Data Retention */}
        <div className="relative py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Data Retention Policy
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto rounded-2xl border-2"
              style={{
                borderColor: 'var(--theme-primary-alpha)'
              }}
            >
              <table className="w-full">
                <thead>
                  <tr 
                    style={{
                      background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                    }}
                  >
                    <th className="px-6 py-4 text-left text-white font-semibold">Data Type</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Retention Period</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Deletion Method</th>
                  </tr>
                </thead>
                <tbody>
                  {retentionPolicy.map((row, index) => (
                    <motion.tr
                      key={row.dataType}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b-2"
                      style={{
                        background: isDark 
                          ? index % 2 === 0 ? 'rgba(15, 23, 42, 0.6)' : 'rgba(15, 23, 42, 0.4)'
                          : index % 2 === 0 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(248, 250, 252, 0.8)',
                        borderColor: 'var(--theme-primary-alpha)'
                      }}
                    >
                      <td className={`px-6 py-4 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {row.dataType}
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {row.period}
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {row.method}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>

        {/* Data Subject Rights */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Your Privacy Rights
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userRights.map((right, index) => {
                const Icon = right.icon;
                return (
                  <motion.div
                    key={right.right}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-2xl border-2 backdrop-blur-xl"
                    style={{
                      background: isDark 
                        ? 'rgba(15, 23, 42, 0.6)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'var(--theme-primary-alpha)',
                    }}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {right.right}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {right.implementation}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl border-2 backdrop-blur-xl text-center"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: 'var(--theme-primary-alpha)',
              }}
            >
              <FileText className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--theme-primary)' }} />
              <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Privacy Questions or Complaints?
              </h3>
              <p className={`text-lg mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Contact our privacy team or escalate to the Office of the Australian Information Commissioner (OAIC).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:enquiries@verafyai.com.au"
                  className="px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-transform hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  }}
                >
                  enquiries@verafyai.com.au
                </a>
                <a
                  href="https://www.oaic.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl font-semibold border-2 transition-all hover:scale-105 flex items-center gap-2 justify-center"
                  style={{
                    borderColor: 'var(--theme-primary)',
                    color: 'var(--theme-primary)',
                    background: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.8)'
                  }}
                >
                  OAIC Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}