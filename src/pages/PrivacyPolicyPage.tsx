import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Globe, Eye, Clock, FileText, Mail } from 'lucide-react';
// import { EmailLink } from '@/config/contacts';

interface PrivacyPolicyPageProps {
  isDark: boolean;
}

export function PrivacyPolicyPage({ isDark }: PrivacyPolicyPageProps) {
  const sections = [
    {
      icon: FileText,
      title: "1. Introduction",
      content: `This Privacy Policy explains how Axient AI Pty Ltd (ABN 21 688 793 151), trading as "VerafyAI" or "Verafy AI", collects, uses, discloses, and protects your personal information.

We are committed to protecting your privacy and complying with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).

**Last Updated:** January 2026
**Version:** 1.0

By using VerafyAI's services, you consent to the collection, use, and disclosure of your personal information as described in this policy.`
    },
    {
      icon: Database,
      title: "2. Information We Collect",
      subsections: [
        {
          subtitle: "2.1 Personal Information",
          content: `We collect the following types of personal information:

**Account Information:**
• Email address (required for account creation)
• Name or display name (optional)
• Password (encrypted, never stored in plain text)

**Financial Portfolio Data:**
• Stock holdings and positions
• Transaction history (buys, sells, dividends)
• Cost basis and acquisition dates
• Portfolio performance history
• Broker API connection credentials (encrypted)

**Technical Information:**
• IP addresses (for security and fraud prevention)
• Device information (browser type, operating system)
• Usage data (features accessed, session duration)
• Cookies and similar tracking technologies

**Communication Data:**
• Support inquiries and correspondence
• Chat history with Vera AI assistant
• Feedback and survey responses`
        },
        {
          subtitle: "2.2 Information We Do NOT Collect",
          content: `To protect your privacy, we explicitly do NOT collect:

❌ Tax File Number (TFN)
❌ Bank account details (except via Stripe for payments)
❌ Credit card numbers (Stripe handles all payment processing)
❌ Government-issued ID numbers (driver's license, passport, etc.)
❌ Biometric information
❌ Health information
❌ Sensitive personal information as defined under the Privacy Act`
        },
        {
          subtitle: "2.3 How We Collect Information",
          content: `We collect information:

**Directly from you:**
• Account registration forms
• Manual portfolio entry
• Broker API connections you authorize
• Support requests and communications

**Automatically:**
• Log files and analytics
• Cookies and tracking technologies
• Error logs and crash reports

**From third parties:**
• Market data providers (stock prices, company information)
• Broker APIs (with your explicit authorization)
• Payment processor (Stripe - transaction status only)`
        }
      ]
    },
    {
      icon: Eye,
      title: "3. How We Use Your Information",
      content: `We use your personal information for the following purposes:

**Service Delivery:**
• Provide portfolio tracking and analytics
• Generate performance reports and insights
• Calculate tax estimates (informational only)
• Deliver AI-powered conversational assistance

**Account Management:**
• Create and maintain your account
• Authenticate your identity
• Process subscription payments
• Send service-related notifications

**Product Improvement:**
• Analyze usage patterns (aggregated and anonymized)
• Improve AI model accuracy
• Develop new features
• Fix bugs and technical issues

**Legal and Compliance:**
• Comply with Australian laws and regulations
• Respond to legal requests and court orders
• Prevent fraud and abuse
• Enforce our Terms of Service

**Marketing (with consent):**
• Send product updates and newsletters
• Notify you of new features
• Conduct user surveys

You can opt out of marketing communications at any time via the unsubscribe link in emails or account settings.`
    },
    {
      icon: Globe,
      title: "4. Data Storage and Location",
      subsections: [
        {
          subtitle: "4.1 Primary Storage Location",
          content: `Your data is primarily stored in Australia using AWS infrastructure:

**Primary Region:** AWS ap-southeast-2 (Sydney)
• RDS PostgreSQL databases
• S3 document storage
• Lambda compute functions
• CloudWatch logs

All data at rest is encrypted using AES-256 encryption. All data in transit is encrypted using TLS 1.3.`
        },
        {
          subtitle: "4.2 Cross-Border Data Disclosure (APP 8)",
          content: `Some of our service providers operate globally and may process data outside Australia:

**Google Gemini AI (United States):**
• **Purpose:** Natural language processing for Vera AI assistant
• **Data Sent:** Anonymized, aggregated portfolio metrics only (e.g., total value rounded to nearest $1,000, sector weights, health scores)
• **Data NOT Sent:** Your email, name, individual stock symbols, transaction history, exact position sizes
• **Safeguards:** No personally identifiable information (PII) sent; covered by our Terms of Service consent

**Stripe (United States):**
• **Purpose:** Payment processing
• **Data Sent:** Payment card details, transaction amounts
• **Safeguards:** Stripe is PCI-DSS Level 1 compliant; we never see full card numbers
• **Standard Contractual Clauses:** In place

By using our service, you consent to these cross-border disclosures under the safeguards described above. We take reasonable steps to ensure overseas recipients handle your information in accordance with Australian privacy standards.`
        }
      ]
    },
    {
      icon: Lock,
      title: "5. Data Security",
      content: `We implement bank-level security measures to protect your information:

**Encryption:**
• AES-256 encryption for data at rest
• TLS 1.3 encryption for data in transit
• Encrypted database backups

**Access Controls:**
• Row-Level Security (RLS) - you can only access your own data
• Multi-Factor Authentication (MFA) available
• Role-based access controls for staff

**Authentication:**
• AWS Cognito for user authentication
• JWT tokens with expiration
• Secure password hashing (bcrypt)

**Monitoring:**
• 24/7 security monitoring
• Intrusion detection systems
• Automated anomaly detection
• Immutable audit logs

**Infrastructure:**
• AWS security best practices
• Regular security updates and patches
• Secrets stored in AWS Secrets Manager
• No production data in development environments

Despite our security measures, no system is completely secure. If we become aware of a data breach that is likely to result in serious harm, we will notify you and the Office of the Australian Information Commissioner (OAIC) as required by law.`
    },
    {
      icon: Shield,
      title: "6. Your Privacy Rights (Australian Privacy Principles)",
      subsections: [
        {
          subtitle: "6.1 Access (APP 12)",
          content: `You have the right to access your personal information.

**How to access:**
• Log in to your account to view most information
• Go to Settings → Download My Data for a complete JSON export
• Email ${EmailLink} to request a copy

We will respond to access requests within 30 days. We may charge a reasonable fee for complex requests.`
        },
        {
          subtitle: "6.2 Correction (APP 13)",
          content: `You have the right to correct inaccurate or outdated information.

**How to correct:**
• Edit your profile information directly in account settings
• Update portfolio data via the portfolio management interface
• Email ${EmailLink} for assistance

We will respond to correction requests within 30 days.`
        },
        {
          subtitle: "6.3 Deletion",
          content: `You have the right to request deletion of your personal information.

**How to delete:**
• Go to Settings → Delete Account
• Confirm deletion (30-day grace period applies)
• Email ${EmailLink} for immediate deletion requests

**What happens when you delete:**
• Account data is soft-deleted immediately (inaccessible to you and staff)
• After 7 years, data is permanently purged (tax record retention requirement)
• Transaction history is anonymized after 7 years
• Some data may be retained in encrypted backups for disaster recovery

**Exceptions:**
We may retain certain information if required by law or for legitimate business purposes (e.g., fraud prevention, legal disputes).`
        },
        {
          subtitle: "6.4 Data Portability",
          content: `You have the right to export your data in a machine-readable format.

**How to export:**
• Settings → Download My Data
• Receive a complete JSON file containing all your data
• Use this file to transfer to another service if desired`
        },
        {
          subtitle: "6.5 Anonymity and Pseudonymity (APP 2)",
          content: `Where practicable, we offer the option to deal with us anonymously or using a pseudonym. However, for portfolio tracking services, we require at least an email address for account creation and authentication. You may use a pseudonym or anonymous email address if you wish.`
        }
      ]
    },
    {
      icon: Clock,
      title: "7. Data Retention",
      content: `We retain your information for the following periods:

| **Data Type** | **Retention Period** | **Reason** |
|---------------|---------------------|-----------|
| Account data | Until deletion + 7 years | Tax compliance, legal disputes |
| Portfolio data | Until deletion | Service delivery |
| Transaction history | 7 years from transaction | ATO requirements |
| Chat history | 2 years | Service improvement |
| Audit logs | 7 years | Security and compliance |
| Aggregated analytics | Indefinite | Already anonymized |

After the retention period, data is either permanently deleted or anonymized beyond recovery.`
    },
    {
      icon: Eye,
      title: "8. Disclosure to Third Parties",
      content: `We do NOT sell your personal information to third parties.

We may disclose your information to:

**Service Providers:**
• AWS (hosting and infrastructure)
• Google (AI processing - anonymized data only)
• Stripe (payment processing)
• Market data providers (stock prices)
• Email service providers (transactional emails)

All service providers are bound by confidentiality agreements and process data only on our instructions.

**Legal Requirements:**
• Law enforcement agencies (with valid court orders)
• Regulatory bodies (ASIC, OAIC, ATO)
• As required by law or legal process

**Business Transfers:**
If VerafyAI is acquired or merged with another company, your information may be transferred to the new owner. We will notify you before this occurs.

**With Your Consent:**
We may disclose information to other parties with your explicit consent.`
    },
    {
      icon: FileText,
      title: "9. Cookies and Tracking Technologies",
      content: `We use cookies and similar technologies to enhance your experience:

**Essential Cookies:**
• Session authentication
• Security tokens
• Load balancing

**Analytics Cookies:**
• Usage statistics (aggregated)
• Feature adoption tracking
• Error monitoring

**Preference Cookies:**
• Theme selection
• Display settings
• Notification preferences

You can disable cookies in your browser settings, but this may affect functionality.

**Do Not Track:**
We respect browser "Do Not Track" signals and do not track users across third-party websites.`
    },
    {
      icon: Shield,
      title: "10. Children's Privacy",
      content: `VerafyAI is not intended for users under 18 years of age. We do not knowingly collect personal information from children under 18.

If you are a parent or guardian and believe your child has provided us with personal information, please contact us at ${EmailLink} and we will delete the information.`
    },
    {
      icon: FileText,
      title: "11. Notifiable Data Breaches",
      content: `Under the Notifiable Data Breaches (NDB) scheme in the Privacy Act, we must notify you and the OAIC if:

1. There is unauthorized access or disclosure of personal information
2. This is likely to result in serious harm to you
3. We cannot prevent the likely risk of serious harm

**Our Commitment:**
• We will notify you as soon as practicable after becoming aware of an eligible data breach
• We will provide information about the breach, what information was involved, and steps you should take
• We will report to the OAIC within 30 days of becoming aware of the breach

**Report a suspected breach:**
Email: enquiries@verafyai.com.au`
    },
    {
      icon: FileText,
      title: "12. Changes to This Privacy Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.

**How we notify you:**
• Email notification to your registered address
• In-app notification on next login
• Updated "Last Updated" date at the top of this policy

**Material changes:**
For significant changes that affect how we handle your information, we will seek your consent before applying the new policy to existing data.

**Your options:**
If you disagree with the updated policy, you may delete your account before the changes take effect.`
    },
    {
      icon: Mail,
      title: "13. Complaints and Contact",
      subsections: [
        {
          subtitle: "13.1 Privacy Complaints",
          content: `If you have a complaint about how we handle your personal information:

**Step 1: Contact Us**
Email: ${EmailLink}
Response time: Within 5 business days

**Step 2: Internal Review**
If you're not satisfied, email: enquiries@verafyai.com.au
We will investigate and respond within 30 days

**Step 3: External Resolution**
If you're still not satisfied, you can complain to:

**Office of the Australian Information Commissioner (OAIC)**
• Website: www.oaic.gov.au
• Phone: 1300 363 992
• Email: enquiries@oaic.gov.au
• Mail: GPO Box 5218, Sydney NSW 2001`
        },
        {
          subtitle: "13.2 General Privacy Inquiries",
          content: `For general questions about this Privacy Policy or our data practices:

**Email:** ${EmailLink}
**Mail:** Axient AI Pty Ltd, Sydney, Australia
**ABN:** 21 688 793 151

We will respond to all inquiries within 5 business days.`
        }
      ]
    },
    {
      icon: FileText,
      title: "14. Glossary",
      content: `**Personal Information:** Information or opinion about an identified individual, or an individual who is reasonably identifiable.

**Australian Privacy Principles (APPs):** The 13 principles in the Privacy Act 1988 that govern how organizations handle personal information.

**Eligible Data Breach:** A data breach that is likely to result in serious harm to any individual whose personal information was involved.

**Anonymization:** The process of removing personally identifiable information so that individuals cannot be identified.

**Encryption:** The process of encoding information so that only authorized parties can access it.

**Serious Harm:** Includes physical harm, psychological harm, emotional harm, economic harm, and harm to reputation.`
    }
  ];

  return (
    <>
      {/* Background Effects */}
      <FloatingParticles isDark={isDark} />
      <InteractiveCursor isDark={isDark} />

      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="relative pt-32 pb-16 overflow-hidden">
          {/* Gradient Background */}
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
                  <Lock className="inline-block w-4 h-4 mr-2 -mt-1" />
                  Trust Centre
                </span>
              </motion.div>

              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Privacy{' '}
                <span 
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Policy
                </span>
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto mb-6 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                How we collect, use, and protect your personal information
              </p>

              <div className="flex flex-wrap gap-3 justify-center text-sm">
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  <strong>Effective:</strong> January 2026
                </span>
                <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  <strong>Version:</strong> 1.0
                </span>
                <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  <strong>Entity:</strong> Axient AI Pty Ltd (ABN 21 688 793 151)
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="relative py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-12">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="backdrop-blur-xl border-2 rounded-2xl p-8"
                    style={{
                      background: isDark
                        ? 'rgba(15, 23, 42, 0.6)'
                        : 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'var(--theme-primary-alpha)',
                    }}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className="p-3 rounded-xl"
                        style={{
                          background: 'rgba(var(--theme-primary-rgb), 0.1)',
                        }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: 'var(--theme-primary)' }}
                        />
                      </div>
                      <h2
                        className={`text-2xl md:text-3xl ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {section.title}
                      </h2>
                    </div>

                    {section.content && (
                      <div
                        className={`prose prose-lg max-w-none ${
                          isDark ? 'prose-invert' : ''
                        }`}
                        style={{
                          color: isDark ? '#cbd5e1' : '#334155',
                        }}
                      >
                        {section.content.split('\n').map((paragraph, pIndex) => {
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            return (
                              <h3
                                key={pIndex}
                                className={`text-lg font-semibold mt-6 mb-3 ${
                                  isDark ? 'text-white' : 'text-slate-900'
                                }`}
                              >
                                {paragraph.replace(/\*\*/g, '')}
                              </h3>
                            );
                          } else if (paragraph.startsWith('•')) {
                            return (
                              <li key={pIndex} className="ml-6">
                                {paragraph.substring(2)}
                              </li>
                            );
                          } else if (paragraph.startsWith('❌')) {
                            return (
                              <li key={pIndex} className="ml-6 list-none">
                                {paragraph}
                              </li>
                            );
                          } else if (paragraph.startsWith('| **')) {
                            // Table row
                            return null; // Skip for now, handle tables separately if needed
                          } else if (paragraph.trim()) {
                            return (
                              <p key={pIndex} className="mb-4">
                                {paragraph}
                              </p>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}

                    {section.subsections?.map((subsection, subIndex) => (
                      <div key={subIndex} className="mt-8">
                        <h3
                          className={`text-xl font-semibold mb-4 ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {subsection.subtitle}
                        </h3>
                        <div
                          className={`prose prose-lg max-w-none ${
                            isDark ? 'prose-invert' : ''
                          }`}
                          style={{
                            color: isDark ? '#cbd5e1' : '#334155',
                          }}
                        >
                          {subsection.content.split('\n').map((paragraph, pIndex) => {
                            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                              return (
                                <h4
                                  key={pIndex}
                                  className={`text-lg font-semibold mt-4 mb-2 ${
                                    isDark ? 'text-white' : 'text-slate-900'
                                  }`}
                                >
                                  {paragraph.replace(/\*\*/g, '')}
                                </h4>
                              );
                            } else if (paragraph.startsWith('•')) {
                              return (
                                <li key={pIndex} className="ml-6">
                                  {paragraph.substring(2)}
                                </li>
                              );
                            } else if (paragraph.startsWith('❌')) {
                              return (
                                <li key={pIndex} className="ml-6 list-none">
                                  {paragraph}
                                </li>
                              );
                            } else if (paragraph.trim()) {
                              return (
                                <p key={pIndex} className="mb-4">
                                  {paragraph}
                                </p>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                );
              })}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center p-8 backdrop-blur-xl border-2 rounded-2xl"
              style={{
                background: isDark
                  ? 'rgba(15, 23, 42, 0.8)'
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: 'var(--theme-primary-alpha)',
              }}
            >
              <h3
                className={`text-2xl mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                Questions About Your Privacy?
              </h3>
              <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Contact our privacy team or view related policies
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href={`mailto:${EmailLink}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  }}
                >
                  <Mail className="inline-block w-4 h-4 mr-2 -mt-1" />
                  Email Privacy Team
                </motion.a>
                <motion.a
                  href="/terms"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl font-semibold border-2 transition-all"
                  style={{
                    borderColor: 'var(--theme-primary)',
                    color: 'var(--theme-primary)',
                    background: isDark
                      ? 'rgba(15, 23, 42, 0.6)'
                      : 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="/security"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl font-semibold border-2 transition-all"
                  style={{
                    borderColor: 'var(--theme-primary)',
                    color: 'var(--theme-primary)',
                    background: isDark
                      ? 'rgba(15, 23, 42, 0.6)'
                      : 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Security Framework
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}