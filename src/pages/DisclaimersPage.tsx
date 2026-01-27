import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Info, 
  Calculator, 
  TrendingUp, 
  Brain, 
  FileText, 
  Shield, 
  AlertTriangle,
  ChevronDown,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';
import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { CORPORATE_COLORS, getCategoryColor, corporateGradientStyle } from '../config/corporate-theme';

interface DisclaimersPageProps {
  isDark: boolean;
}

interface Disclaimer {
  id: string;
  title: string;
  icon: any;
  category: string;
  color: string;
  summary: string;
  content: string;
  links?: { label: string; url: string }[];
  usage: string[];
}

export function DisclaimersPage({ isDark }: DisclaimersPageProps) {
  const [activeDisclaimer, setActiveDisclaimer] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const disclaimers: Disclaimer[] = [
    {
      id: 'general',
      title: 'General Information Disclaimer',
      icon: Info,
      category: 'ASIC RG 244 Compliance',
      color: getCategoryColor('ASIC RG 244 Compliance'),
      summary: 'This information is general in nature and does not constitute personal advice',
      content: `This information is general in nature and does not take into account your personal objectives, financial situation, or needs. Before making any financial decisions, you should consider whether the information is appropriate for your circumstances and seek advice from a licensed financial adviser.

VerafyAI provides factual information and educational content only. We do NOT provide personal financial advice, recommendations, or investment advice of any kind.`,
      links: [
        { label: 'Find a Licensed Financial Adviser', url: 'https://moneysmart.gov.au/financial-advice' }
      ],
      usage: [
        'All pages and outputs',
        'Financial information displays',
        'Portfolio analysis results',
        'Market insights and reports'
      ]
    },
    {
      id: 'tax',
      title: 'Tax Estimate Disclaimer',
      icon: Calculator,
      category: 'Tax Calculations',
      color: getCategoryColor('Tax Calculations'),
      summary: 'Tax calculations are estimates only and not personal tax advice',
      content: `⚠️ TAX ESTIMATE ONLY

This calculation is an estimate based on the information available and standard Australian tax rules. It is not personal tax advice.

Actual tax outcomes depend on your complete financial situation, including:
• Other income and deductions
• Carry-forward losses
• Your residency status
• Other CGT (Capital Gains Tax) events
• Specific tax elections you may have made
• Changes to tax legislation

Tax laws are complex and change regularly. This estimate should not be used for tax planning, lodgement, or compliance purposes.

For personal tax advice, please consult a registered tax agent.`,
      links: [
        { label: 'Find a Registered Tax Agent', url: 'https://www.tpb.gov.au/public-register' },
        { label: 'ATO Tax Rates', url: 'https://www.ato.gov.au/rates' }
      ],
      usage: [
        'Capital gains calculators',
        'Tax impact estimates',
        'Portfolio tax reporting',
        'Income tax projections'
      ]
    },
    {
      id: 'investment',
      title: 'Investment Information Disclaimer',
      icon: TrendingUp,
      category: 'Investment Content',
      color: getCategoryColor('Investment Content'),
      summary: 'Past performance is not indicative of future results',
      content: `Past performance is not a reliable indicator of future performance. The value of investments can go down as well as up. This is factual information only and not a recommendation to buy, sell, or hold any investment.

Investment risks include but are not limited to:
• Market volatility and price fluctuations
• Loss of capital
• Liquidity risk
• Currency risk (for international investments)
• Sector and company-specific risks
• Economic and political risks

All investment decisions should be made based on your personal circumstances, investment objectives, and risk tolerance. Consider seeking advice from a licensed financial adviser before making investment decisions.

VerafyAI does not provide investment recommendations, portfolio management services, or execute trades on your behalf.`,
      links: [
        { label: 'ASIC MoneySmart - Investing', url: 'https://moneysmart.gov.au/how-to-invest' }
      ],
      usage: [
        'Portfolio performance displays',
        'Investment holdings information',
        'Market analysis and insights',
        'Historical return calculations'
      ]
    },
    {
      id: 'ai',
      title: 'AI-Generated Content Disclaimer',
      icon: Brain,
      category: 'AI & Technology',
      color: getCategoryColor('AI & Technology'),
      summary: 'AI-generated insights may contain errors and require human verification',
      content: `VerafyAI uses artificial intelligence and machine learning to analyze financial data and generate insights. While we strive for accuracy, AI-generated content may contain errors, omissions, or outdated information.

Important limitations:
• AI models are trained on historical data and may not account for recent events
• Natural language processing may misinterpret complex financial information
• Calculations and analysis should be independently verified
• AI cannot replace professional human judgment or advice
• Models may have biases or blind spots

Always verify important information with official sources and consult qualified professionals for advice. Human oversight and professional judgment remain essential for financial decisions.

We continuously monitor, audit, and improve our AI models, but they remain subject to limitations inherent in current AI technology.`,
      links: [
        { label: 'Our AI Ethics Framework', url: '/compliance#ai' }
      ],
      usage: [
        'AI-powered insights',
        'Automated portfolio analysis',
        'Natural language queries',
        'Predictive features'
      ]
    },
    {
      id: 'data-accuracy',
      title: 'Data Accuracy Disclaimer',
      icon: FileText,
      category: 'Data & Information',
      color: getCategoryColor('Data & Information'),
      summary: 'We strive for accuracy but cannot guarantee all data is error-free',
      content: `While we make every effort to ensure data accuracy, we cannot guarantee that all information displayed is complete, accurate, or up-to-date at all times.

Data limitations include:
• Market data may be delayed (typically 15-20 minutes)
• Third-party data feeds may experience outages or errors
• Corporate actions may not be immediately reflected
• Historical data corrections and restatements
• Exchange and data provider limitations

Users should:
• Verify important data with official sources
• Check timestamps on data displays
• Report any suspected errors to our support team
• Not rely solely on displayed data for time-sensitive decisions

We use reputable data providers and implement quality controls, but errors can occur. We are not liable for losses resulting from data inaccuracies or delays.`,
      links: [
        { label: 'Report Data Issue', url: '/contact' }
      ],
      usage: [
        'All data displays',
        'Real-time and delayed quotes',
        'Portfolio valuations',
        'Market data feeds'
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy Disclaimer',
      icon: Shield,
      category: 'Security',
      color: getCategoryColor('Security'),
      summary: 'We implement strong security but users must also take precautions',
      content: `VerafyAI implements bank-level security measures to protect your data. However, no system is 100% secure, and users must also take appropriate precautions.

User responsibilities:
• Keep login credentials secure and confidential
• Enable multi-factor authentication (MFA)
• Use strong, unique passwords
• Log out from shared or public devices
• Keep software and browsers up to date
• Be cautious of phishing attempts

We will never:
• Ask for your password via email or phone
• Request remote access to your device
• Ask you to disable security features

Report suspected security incidents immediately to: enquiries@verafyai.com.au

See our Security Policy and Privacy Policy for comprehensive information about how we protect your data.`,
      links: [
        { label: 'Security Policy', url: '/security' },
        { label: 'Privacy Policy', url: '/privacy' },
        { label: 'Report Security Issue', url: 'mailto:enquiries@verafyai.com.au' }
      ],
      usage: [
        'Account security',
        'Data handling',
        'Authentication processes',
        'Privacy practices'
      ]
    },
    {
      id: 'no-warranty',
      title: 'No Warranty Disclaimer',
      icon: AlertTriangle,
      category: 'Legal',
      color: getCategoryColor('Legal'),
      summary: 'Service provided "as is" without warranties of any kind',
      content: `VerafyAI is provided "as is" and "as available" without warranties of any kind, either express or implied.

We do not warrant that:
• The service will be uninterrupted or error-free
• Defects will be corrected immediately
• The service is free from viruses or harmful components
• Results obtained will be accurate or reliable
• Any errors in information will be corrected

To the maximum extent permitted by law, we disclaim all warranties including:
• Warranties of merchantability
• Fitness for a particular purpose
• Non-infringement
• Accuracy or completeness

Your use of VerafyAI is at your own risk. We recommend maintaining appropriate backups and not relying on the service for mission-critical functions without appropriate safeguards.

For full legal terms, see our Terms of Service.`,
      links: [
        { label: 'Terms of Service', url: '/terms' }
      ],
      usage: [
        'All service features',
        'Platform availability',
        'Software functionality',
        'Legal terms'
      ]
    }
  ];

  const handleCopy = async (content: string, id: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
                  Disclaimers
                </span>{' '}
                Repository
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto ${ 
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Central repository for all VerafyAI disclaimers and important notices
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
            >
              {[
                { label: 'Total Disclaimers', value: disclaimers.length.toString() },
                { label: 'Categories', value: '7' },
                { label: 'Last Updated', value: 'Jan 2026' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="p-4 rounded-xl backdrop-blur-xl border-2"
                  style={{
                    background: isDark 
                      ? 'rgba(15, 23, 42, 0.6)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: 'var(--theme-primary-alpha)',
                  }}
                >
                  <div 
                    className="text-2xl font-bold mb-1"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    {stat.value}
                  </div>
                  <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Disclaimers List */}
        <div className="relative py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="space-y-4">
              {disclaimers.map((disclaimer, index) => {
                const Icon = disclaimer.icon;
                const isActive = activeDisclaimer === disclaimer.id;
                const isCopied = copiedId === disclaimer.id;

                return (
                  <motion.div
                    key={disclaimer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div
                      className="rounded-2xl border-2 backdrop-blur-xl overflow-hidden transition-all duration-300"
                      style={{
                        background: isDark 
                          ? 'rgba(15, 23, 42, 0.6)' 
                          : 'rgba(255, 255, 255, 0.8)',
                        borderColor: isActive ? disclaimer.color : 'var(--theme-primary-alpha)',
                        boxShadow: isActive ? `0 8px 32px ${disclaimer.color}40` : 'none'
                      }}
                    >
                      {/* Header */}
                      <div
                        className="p-6 cursor-pointer"
                        onClick={() => setActiveDisclaimer(isActive ? null : disclaimer.id)}
                      >
                        <div className="flex items-start gap-4">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                              background: `${disclaimer.color}20`,
                              border: `2px solid ${disclaimer.color}40`
                            }}
                          >
                            <Icon className="w-6 h-6" style={{ color: disclaimer.color }} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <div>
                                <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                  {disclaimer.title}
                                </h3>
                                <span 
                                  className="text-xs font-semibold px-2 py-1 rounded"
                                  style={{
                                    background: `${disclaimer.color}20`,
                                    color: disclaimer.color
                                  }}
                                >
                                  {disclaimer.category}
                                </span>
                              </div>
                              <motion.div
                                animate={{ rotate: isActive ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown 
                                  className="w-6 h-6 flex-shrink-0" 
                                  style={{ color: disclaimer.color }}
                                />
                              </motion.div>
                            </div>
                            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {disclaimer.summary}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div 
                              className="px-6 pb-6 border-t-2"
                              style={{ borderColor: `${disclaimer.color}20` }}
                            >
                              <div className="pt-6 space-y-6">
                                {/* Full Content */}
                                <div>
                                  <div className="flex items-center justify-between mb-3">
                                    <h4 className={`text-sm font-semibold uppercase tracking-wide ${
                                      isDark ? 'text-slate-300' : 'text-slate-700'
                                    }`}>
                                      Full Disclaimer Text
                                    </h4>
                                    <motion.button
                                      onClick={() => handleCopy(disclaimer.content, disclaimer.id)}
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                                      style={{
                                        background: isCopied ? `${disclaimer.color}20` : 'transparent',
                                        color: isCopied ? disclaimer.color : isDark ? '#94a3b8' : '#64748b',
                                        border: `1px solid ${isCopied ? disclaimer.color : isDark ? '#334155' : '#cbd5e1'}`
                                      }}
                                    >
                                      {isCopied ? (
                                        <>
                                          <Check className="w-3 h-3" />
                                          Copied!
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="w-3 h-3" />
                                          Copy
                                        </>
                                      )}
                                    </motion.button>
                                  </div>
                                  <div 
                                    className="p-4 rounded-xl font-mono text-sm whitespace-pre-wrap"
                                    style={{
                                      background: isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)',
                                      color: isDark ? '#e2e8f0' : '#334155'
                                    }}
                                  >
                                    {disclaimer.content}
                                  </div>
                                </div>

                                {/* Links */}
                                {disclaimer.links && disclaimer.links.length > 0 && (
                                  <div>
                                    <h4 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${
                                      isDark ? 'text-slate-300' : 'text-slate-700'
                                    }`}>
                                      Related Resources
                                    </h4>
                                    <div className="space-y-2">
                                      {disclaimer.links.map((link, i) => (
                                        <motion.a
                                          key={i}
                                          href={link.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          whileHover={{ x: 4 }}
                                          className="flex items-center gap-2 text-sm group"
                                          style={{ color: disclaimer.color }}
                                        >
                                          <ExternalLink className="w-4 h-4" />
                                          <span className="group-hover:underline">{link.label}</span>
                                        </motion.a>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Usage */}
                                <div>
                                  <h4 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${
                                    isDark ? 'text-slate-300' : 'text-slate-700'
                                  }`}>
                                    Used In
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {disclaimer.usage.map((use, i) => (
                                      <span
                                        key={i}
                                        className="px-3 py-1 rounded-full text-xs font-medium"
                                        style={{
                                          background: isDark ? 'rgba(100, 116, 139, 0.2)' : 'rgba(100, 116, 139, 0.1)',
                                          color: isDark ? '#cbd5e1' : '#475569'
                                        }}
                                      >
                                        {use}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="relative py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl border-2 backdrop-blur-xl"
              style={{
                background: isDark 
                  ? 'rgba(15, 23, 42, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: 'var(--theme-primary-alpha)',
              }}
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 flex-shrink-0" style={{ color: 'var(--theme-primary)' }} />
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Important Notice
                  </h3>
                  <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    These disclaimers are incorporated throughout the VerafyAI platform and should be read 
                    in conjunction with our Terms of Service, Privacy Policy, and other legal documentation.
                  </p>
                  <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    Last updated: January 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}