import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield,
  Lock,
  Key,
  Database,
  Server,
  Activity,
  AlertTriangle,
  Eye,
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  Users,
  Fingerprint,
  Code,
  Zap
} from 'lucide-react';
import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';

interface SecurityPageProps {
  isDark: boolean;
}

interface SecurityControl {
  id: string;
  title: string;
  icon: any;
  description: string;
  implementation: string;
  color: string;
}

export function SecurityPage({ isDark }: SecurityPageProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const securityControls: SecurityControl[] = [
    {
      id: 'encryption-rest',
      title: 'Encryption at Rest',
      icon: Lock,
      description: 'All stored data is encrypted using industry-standard encryption',
      implementation: 'AES-256 encryption for RDS PostgreSQL and S3 storage',
      color: '#22D3EE'
    },
    {
      id: 'encryption-transit',
      title: 'Encryption in Transit',
      icon: Zap,
      description: 'All data transmitted between services and clients is encrypted',
      implementation: 'TLS 1.3 for all API communications and data transfers',
      color: '#06B6D4'
    },
    {
      id: 'authentication',
      title: 'Authentication',
      icon: Key,
      description: 'Secure user authentication with multi-factor options',
      implementation: 'AWS Cognito with optional Multi-Factor Authentication (MFA)',
      color: '#0EA5E9'
    },
    {
      id: 'authorization',
      title: 'Authorization',
      icon: Fingerprint,
      description: 'Fine-grained access control ensuring users only see their data',
      implementation: 'Row-Level Security (RLS) in PostgreSQL with JWT tokens',
      color: '#3B82F6'
    },
    {
      id: 'api-security',
      title: 'API Security',
      icon: Code,
      description: 'Protected APIs with rate limiting and token validation',
      implementation: 'JWT tokens, rate limiting, and request validation',
      color: '#8B5CF6'
    },
    {
      id: 'secrets',
      title: 'Secrets Management',
      icon: Eye,
      description: 'Secure storage and rotation of sensitive credentials',
      implementation: 'AWS Secrets Manager with automatic rotation',
      color: '#A855F7'
    },
    {
      id: 'audit-logging',
      title: 'Audit Logging',
      icon: FileText,
      description: 'Comprehensive logging of all security-relevant events',
      implementation: 'CloudWatch with immutable audit logs (7-year retention)',
      color: '#EC4899'
    },
    {
      id: 'monitoring',
      title: '24/7 Monitoring',
      icon: Activity,
      description: 'Continuous security monitoring and threat detection',
      implementation: 'Real-time alerting and automated threat response',
      color: '#F59E0B'
    }
  ];

  const accessControl = [
    { role: 'User', portfolio: 'Own only', admin: false, aiLogs: false, billing: 'Own only' },
    { role: 'Support', portfolio: 'Read (with consent)', admin: false, aiLogs: false, billing: false },
    { role: 'Tech Admin', portfolio: 'Anonymized', admin: true, aiLogs: true, billing: false },
    { role: 'Super Admin', portfolio: 'Full (audited)', admin: true, aiLogs: true, billing: true }
  ];

  const incidentLevels = [
    {
      level: 'P1 - CRITICAL',
      response: '15 minutes',
      color: '#EF4444',
      examples: [
        'Data breach confirmed',
        'Service completely unavailable',
        'Compliance violation affecting users'
      ]
    },
    {
      level: 'P2 - HIGH',
      response: '1 hour',
      color: '#F59E0B',
      examples: [
        'Partial service outage',
        'Security vulnerability discovered',
        'Significant data integrity issue'
      ]
    },
    {
      level: 'P3 - MEDIUM',
      response: '4 hours',
      color: '#3B82F6',
      examples: [
        'Minor feature unavailable',
        'Performance degradation',
        'Non-critical bug affecting users'
      ]
    },
    {
      level: 'P4 - LOW',
      response: '24 hours',
      color: '#10B981',
      examples: [
        'Cosmetic issues',
        'Feature requests',
        'Documentation updates'
      ]
    }
  ];

  const cgtAuditFields = [
    { category: 'Inputs', fields: ['Positions snapshot', 'Prices used', 'Assumed marginal tax rate'] },
    { category: 'Calculation Method', fields: ['Method (FIFO/LIFO/Specific ID)', 'Discount applied', 'Discount rate (50%)'] },
    { category: 'Outputs', fields: ['Gross gain', 'Discount amount', 'Taxable gain', 'Estimated tax'] },
    { category: 'Compliance', fields: ['Disclaimer version', 'Disclaimer displayed', 'Timestamp', 'User ID'] }
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
                  Security
                </span>{' '}
                Framework
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Bank-level security protecting your financial data
              </p>
            </motion.div>

            {/* Security Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { label: 'Encryption Standard', value: 'AES-256' },
                { label: 'TLS Version', value: '1.3' },
                { label: 'Monitoring', value: '24/7' },
                { label: 'Incident Response', value: '<15 min' }
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
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    {stat.value}
                  </div>
                  <div className={`text-xs md:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Security Controls */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Security Controls
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityControls.map((control, index) => {
                const Icon = control.icon;
                return (
                  <motion.div
                    key={control.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-2xl border-2 backdrop-blur-xl transition-all duration-300"
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
                        background: `${control.color}20`,
                        border: `2px solid ${control.color}40`
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: control.color }} />
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {control.title}
                    </h3>
                    <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {control.description}
                    </p>
                    <div 
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg inline-block"
                      style={{
                        background: `${control.color}15`,
                        color: control.color
                      }}
                    >
                      {control.implementation}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CGT Calculation Audit Trail */}
        <div className="relative py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border-2 backdrop-blur-xl"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: 'var(--theme-primary-alpha)',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  }}
                >
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    CGT Calculation Audit Trail
                  </h2>
                  <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    All tax calculations are logged for potential audit and verification
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {cgtAuditFields.map((section, index) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl"
                    style={{
                      background: isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <h3 className={`text-sm font-bold mb-3 uppercase tracking-wide ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {section.category}
                    </h3>
                    <ul className="space-y-2">
                      {section.fields.map((field, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--theme-primary)' }} />
                          <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {field}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div 
                className="mt-6 p-4 rounded-xl border-2"
                style={{
                  background: isDark ? 'rgba(34, 211, 238, 0.1)' : 'rgba(34, 211, 238, 0.05)',
                  borderColor: 'var(--theme-primary-alpha)'
                }}
              >
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <strong>Retention:</strong> All CGT calculation logs are retained for 7 years to comply with ATO record-keeping requirements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Access Control Matrix */}
        <div className="relative py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Access Control Matrix
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full rounded-2xl overflow-hidden">
                <thead>
                  <tr 
                    style={{
                      background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                    }}
                  >
                    <th className="px-6 py-4 text-left text-white font-semibold">Role</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Portfolio Data</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Admin Panel</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">AI Logs</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Billing</th>
                  </tr>
                </thead>
                <tbody>
                  {accessControl.map((row, index) => (
                    <motion.tr
                      key={row.role}
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
                        {row.role}
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {row.portfolio}
                      </td>
                      <td className="px-6 py-4">
                        {row.admin ? (
                          <CheckCircle2 className="w-5 h-5" style={{ color: '#10B981' }} />
                        ) : (
                          <XCircle className="w-5 h-5" style={{ color: '#EF4444' }} />
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {row.aiLogs ? (
                          <CheckCircle2 className="w-5 h-5" style={{ color: '#10B981' }} />
                        ) : (
                          <XCircle className="w-5 h-5" style={{ color: '#EF4444' }} />
                        )}
                      </td>
                      <td className={`px-6 py-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {typeof row.billing === 'boolean' ? (
                          row.billing ? (
                            <CheckCircle2 className="w-5 h-5" style={{ color: '#10B981' }} />
                          ) : (
                            <XCircle className="w-5 h-5" style={{ color: '#EF4444' }} />
                          )
                        ) : (
                          row.billing
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>

        {/* Incident Response */}
        <div className="relative py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Incident Response Plan
            </motion.h2>

            <div className="space-y-4">
              {incidentLevels.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl border-2 backdrop-blur-xl"
                  style={{
                    background: isDark 
                      ? 'rgba(15, 23, 42, 0.6)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: `${level.color}40`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${level.color}20`,
                        border: `2px solid ${level.color}`
                      }}
                    >
                      <AlertTriangle className="w-6 h-6" style={{ color: level.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {level.level}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" style={{ color: level.color }} />
                          <span 
                            className="text-sm font-semibold"
                            style={{ color: level.color }}
                          >
                            Response: {level.response}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {level.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div 
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ background: level.color }}
                            />
                            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {example}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Breach Notification */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-8 rounded-3xl border-2 backdrop-blur-xl"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: 'var(--theme-primary-alpha)',
              }}
            >
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Data Breach Notification
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'OAIC Notification', value: 'Within 30 days if eligible data breach' },
                  { label: 'Affected Users', value: 'As soon as practicable' },
                  { label: 'Internal Escalation', value: 'Immediate upon discovery' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 mt-0.5" style={{ color: 'var(--theme-primary)' }} />
                    <div>
                      <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {item.label}:
                      </span>{' '}
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact CTA */}
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
              <AlertTriangle className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--theme-primary)' }} />
              <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Report a Security Incident
              </h3>
              <p className={`text-lg mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                If you discover a security vulnerability or incident, please report it immediately to our security team.
              </p>
              <a
                href="mailto:enquiries@verafyai.com.au"
                className="inline-block px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-transform hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                }}
              >
                enquiries@verafyai.com.au
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}