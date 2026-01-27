import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { motion } from 'motion/react';
import { FileText, User, CreditCard, Shield, AlertTriangle, Scale, XCircle, Globe, Mail } from 'lucide-react';

interface TermsPageProps {
  isDark: boolean;
}

export function TermsPage({ isDark }: TermsPageProps) {
  const sections = [
    {
      icon: FileText,
      title: "1. Introduction and Acceptance",
      content: `These Terms of Service ("Terms") constitute a legally binding agreement between you and Axient AI Pty Ltd (ABN 21 688 793 151), trading as "VerafyAI" or "Verafy AI".

**By accessing or using our service, you agree to be bound by these Terms.**

**Important:** Please read these Terms carefully before using our service. If you do not agree to these Terms, do not use our service.

**Last Updated:** January 2026
**Version:** 1.0

**Entity Information:**
• Legal Name: Axient AI Pty Ltd
• ABN: 21 688 793 151
• Contact: support@verafyai.com.au
• Location: Sydney, Australia`
    },
    {
      icon: Shield,
      title: "2. Service Description",
      content: `**2.1 What VerafyAI Is**

VerafyAI is a portfolio intelligence platform that provides:
• Portfolio tracking and performance analytics
• Risk assessment and health scoring
• Tax estimate calculators (CGT, dividend income)
• Market data and company information
• AI-powered conversational assistant (Vera AI)
• Educational content about investing

**2.2 What VerafyAI Is NOT**

⚠️ **Critical Disclaimers:**

**NOT Financial Advice:**
VerafyAI does NOT provide personal financial advice as defined by the Corporations Act 2001 (Cth). We do NOT:
• Recommend specific investments
• Advise you to buy or sell securities
• Provide investment recommendations tailored to your circumstances
• Hold an Australian Financial Services License (AFSL)

All information is general in nature and does not take into account your personal objectives, financial situation, or needs. Before making any financial decisions, seek advice from a licensed financial adviser.

**NOT Tax Advice:**
VerafyAI is NOT a registered tax agent under the Tax Agent Services Act 2009. We do NOT:
• Provide personal tax advice
• Prepare or lodge tax returns
• Advise on tax structures or planning
• Guarantee tax outcomes

All tax estimates are informational tools only. Consult a registered tax agent for personal tax advice.

**NOT a Broker:**
We do not execute trades, hold securities, or handle client funds.

**2.3 Information Only**

All content, calculations, and insights provided by VerafyAI are for informational purposes only. You are solely responsible for your investment decisions.`
    },
    {
      icon: User,
      title: "3. User Accounts and Responsibilities",
      subsections: [
        {
          subtitle: "3.1 Account Creation",
          content: `To use VerafyAI, you must:
• Be at least 18 years of age
• Provide accurate and complete registration information
• Maintain the security of your account credentials
• Notify us immediately of any unauthorized access

You are responsible for all activity that occurs under your account.`
        },
        {
          subtitle: "3.2 User Responsibilities",
          content: `You agree to:
• Provide accurate portfolio and transaction data
• Keep your account information up to date
• Use the service only for lawful purposes
• Comply with all applicable laws and regulations
• Not share your account credentials with others
• Not attempt to circumvent security measures
• Not use the service to violate intellectual property rights

**Data Accuracy:**
VerafyAI relies on the accuracy of data you provide. We are not responsible for errors in calculations or insights that result from inaccurate input data.`
        },
        {
          subtitle: "3.3 Broker API Connections",
          content: `If you connect your brokerage account:
• You authorize VerafyAI to access read-only data
• We will NEVER execute trades without your explicit instruction outside our platform
• You can revoke access at any time
• Connection security is subject to your broker's terms

We are not responsible for errors or delays in data from third-party brokers.`
        }
      ]
    },
    {
      icon: CreditCard,
      title: "4. Subscription and Billing",
      subsections: [
        {
          subtitle: "4.1 Plans and Pricing",
          content: `VerafyAI offers multiple subscription tiers:
• **Starter Plan:** $10/month (currently $5/month for founding members - 50% off current published price forever, billed annually)
• **Standard Plan:** $20/month (currently $10/month for founding members - 50% off current published price forever, billed annually)
• **Pro Plan:** $40/month (currently $20/month for founding members - 50% off current published price forever, billed annually)

All prices are in Australian Dollars (AUD) and include GST.

**Founding Member Pricing:**
Limited-time offer: 50% off current published price forever for early adopters. Your discount percentage (50%) is permanent as long as subscription remains active without interruption. If we raise prices, you always pay 50% of the new published price.`
        },
        {
          subtitle: "4.2 Billing Terms",
          content: `**Subscription Billing:**
• Billed monthly or annually in advance
• Automatic renewal unless cancelled
• Payment processed via Stripe

**Free Trial:**
• 14-day free trial available for new users
• No credit card required to start trial
• Trial converts to paid subscription automatically unless cancelled

**Price Changes:**
We may change our pricing with 30 days' notice. Existing subscribers will be grandfathered at their current rate for 90 days.`
        },
        {
          subtitle: "4.3 Cancellation and Refunds",
          content: `**Cancellation:**
• Cancel anytime from account settings
• Cancellation effective at end of billing period
• No penalties or cancellation fees
• Access continues until period end

**Refund Policy:**
• **7-day money-back guarantee** for new subscriptions
• Full refund if requested within 7 days of first payment
• After 7 days: no refunds, but you keep access until period ends
• No refunds for partial months

**How to Cancel:**
Settings → Subscription Management → Cancel Subscription

**How to Request Refund:**
Email: accounts@verafyai.com.au within 7 days`
        },
        {
          subtitle: "4.4 Payment Processing",
          content: `All payments are processed by Stripe, a PCI-DSS Level 1 certified payment processor. VerafyAI does not store your credit card details.

**Failed Payments:**
• We will attempt to re-process failed payments
• Service may be suspended if payment fails repeatedly
• You will receive email notifications before suspension`
        }
      ]
    },
    {
      icon: XCircle,
      title: "5. Acceptable Use Policy",
      content: `**You may NOT:**

**Prohibited Activities:**
• Use the service for any illegal purpose
• Attempt to gain unauthorized access to our systems
• Reverse engineer, decompile, or disassemble our software
• Use automated tools to scrape or harvest data
• Upload malicious code, viruses, or malware
• Impersonate another person or entity
• Harass, abuse, or harm other users or our staff
• Use the service to manipulate markets or securities prices
• Violate any applicable laws or regulations
• Resell or redistribute our service without permission

**Market Manipulation:**
Do not use VerafyAI to engage in:
• Pump and dump schemes
• Insider trading
• Market manipulation
• Securities fraud

**Consequences:**
Violation of this policy may result in:
• Immediate account suspension or termination
• Legal action
• Reporting to relevant authorities (ASIC, AFP)
• No refund of fees paid`
    },
    {
      icon: Shield,
      title: "6. Intellectual Property",
      subsections: [
        {
          subtitle: "6.1 Our IP",
          content: `All content, features, and functionality of VerafyAI, including:
• Software code and algorithms
• User interface and design
• Logos, trademarks, and branding
• Proprietary AI models and rules engines
• Documentation and educational content

...are owned by Axient AI Pty Ltd and protected by Australian and international copyright, trademark, and other intellectual property laws.`
        },
        {
          subtitle: "6.2 License Grant",
          content: `We grant you a limited, non-exclusive, non-transferable, revocable license to:
• Access and use the service for personal, non-commercial use
• Download data exports of your own portfolio data

You may NOT:
• Modify, copy, or distribute our software
• Create derivative works
• Use our trademarks without permission
• Frame or mirror our website content`
        },
        {
          subtitle: "6.3 Your Data",
          content: `You retain ownership of:
• Your portfolio data
• Transaction information you input
• Content you create (notes, tags, etc.)

By using our service, you grant us a license to:
• Store and process your data to provide the service
• Use aggregated, anonymized data for analytics and improvement
• Display your data back to you via our interface

We will NEVER sell your personal data to third parties.`
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "7. Disclaimers and Limitations of Liability",
      subsections: [
        {
          subtitle: "7.1 General Disclaimers",
          content: `**⚠️ IMPORTANT DISCLAIMERS:**

**NOT FINANCIAL ADVICE:**
This information is general in nature and does not take into account your personal objectives, financial situation, or needs. Before making any financial decisions, you should consider whether the information is appropriate for your circumstances and seek advice from a licensed financial adviser.

**NOT TAX ADVICE:**
Tax estimates are for informational purposes only and should not be relied upon for tax planning. Actual tax outcomes depend on your individual circumstances. Please consult a registered tax agent for personal tax advice.

**Investment Risk:**
• Past performance is not indicative of future results
• The value of investments can go up or down
• You may lose money by investing
• Higher returns typically come with higher risk
• Diversification does not guarantee profit or protect against loss

**Data Accuracy:**
While we strive for accuracy, we do not guarantee:
• Completeness or accuracy of market data
• Real-time data (delays may occur)
• Accuracy of third-party data sources
• Error-free calculations (based on your input data)`
        },
        {
          subtitle: "7.2 Service Availability",
          content: `**"AS IS" BASIS:**
The service is provided "as is" and "as available" without warranties of any kind, either express or implied.

We do NOT guarantee:
• Uninterrupted service (maintenance, outages may occur)
• Error-free operation
• Availability of specific features
• Compatibility with all devices or browsers
• Security from all threats

**Service Modifications:**
We reserve the right to:
• Modify or discontinue features at any time
• Change the service without notice
• Suspend service for maintenance`
        },
        {
          subtitle: "7.3 Limitation of Liability",
          content: `**TO THE MAXIMUM EXTENT PERMITTED BY LAW:**

VerafyAI and its officers, directors, employees, and agents SHALL NOT BE LIABLE for:

**Excluded Damages:**
• Investment losses based on information from our service
• Lost profits or business opportunities
• Data loss or corruption
• Indirect, incidental, or consequential damages
• Damages from service interruptions or errors
• Damages from unauthorized access to your account
• Damages from third-party services (brokers, market data)

**Maximum Liability:**
In any event, our total liability to you shall not exceed the amount you paid us in the 12 months preceding the claim, or AUD $100, whichever is greater.

**Australian Consumer Law:**
Nothing in these Terms excludes or limits liability that cannot be excluded or limited under Australian Consumer Law, including consumer guarantees.`
        },
        {
          subtitle: "7.4 Indemnification",
          content: `You agree to indemnify, defend, and hold harmless VerafyAI and its affiliates from any claims, damages, losses, or expenses (including legal fees) arising from:

• Your use of the service
• Your violation of these Terms
• Your violation of any laws or regulations
• Your investment decisions
• Inaccurate data you provided
• Your infringement of third-party rights`
        }
      ]
    },
    {
      icon: XCircle,
      title: "8. Termination",
      subsections: [
        {
          subtitle: "8.1 Termination by You",
          content: `You may terminate your account at any time by:
• Going to Settings → Delete Account
• Following the account deletion process
• Emailing support@verafyai.com.au

Upon termination:
• Access ends immediately or at end of billing period (depending on cancellation timing)
• Data is retained per our Privacy Policy retention schedule
• No refunds for unused time (except within 7-day guarantee)`
        },
        {
          subtitle: "8.2 Termination by Us",
          content: `We may suspend or terminate your account immediately if:
• You violate these Terms
• You engage in fraudulent activity
• Your payment method fails repeatedly
• We are required to do so by law
• We cease operating the service

**Notice:**
We will attempt to provide reasonable notice, except in cases of:
• Suspected fraud or illegal activity
• Violations of Acceptable Use Policy
• Legal or regulatory requirements`
        },
        {
          subtitle: "8.3 Effect of Termination",
          content: `Upon termination:
• Your right to access the service ends immediately
• You must cease using our service
• Outstanding fees remain due
• Certain provisions survive termination (IP rights, disclaimers, limitation of liability, dispute resolution)

**Data Deletion:**
See our Privacy Policy for data retention and deletion practices.`
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "9. AI-Specific Terms (Vera AI Assistant)",
      content: `**9.1 AI-Generated Content**

Vera AI is powered by Google Gemini and our proprietary rules engine. You acknowledge:

• AI responses are probabilistic and may contain errors
• AI does NOT provide personal financial or tax advice
• All numbers/calculations come from coded rules engine, not AI
• Conversational explanations are AI-generated
• You should verify important information

**9.2 Hallucination Prevention**

While we implement safeguards to prevent AI "hallucinations":
• We cannot guarantee 100% accuracy
• Always verify calculations independently
• Do not rely solely on AI for financial decisions
• Report inaccurate responses to support

**9.3 Prohibited AI Interactions**

Do NOT:
• Attempt to jailbreak or manipulate Vera AI
• Input prompts designed to generate inappropriate content
• Use Vera to generate content that violates our Acceptable Use Policy
• Attempt to extract our prompts or system instructions

**9.4 AI Data Usage**

When you interact with Vera AI:
• Conversations may be logged for quality assurance
• Anonymized data may be used to improve AI models
• No personally identifiable information is sent to external AI providers
• See our Privacy Policy for details on AI data handling`
    },
    {
      icon: Scale,
      title: "10. Dispute Resolution and Governing Law",
      subsections: [
        {
          subtitle: "10.1 Governing Law",
          content: `These Terms are governed by the laws of New South Wales, Australia, and the Commonwealth of Australia.

**Applicable Legislation:**
• Corporations Act 2001 (Cth)
• Australian Consumer Law
• Privacy Act 1988 (Cth)
• Competition and Consumer Act 2010 (Cth)

You agree to submit to the non-exclusive jurisdiction of the courts of New South Wales, Australia.`
        },
        {
          subtitle: "10.2 Complaint Process",
          content: `Before initiating legal action, you agree to attempt resolution through our complaint process:

**Step 1: Contact Support**
Email: support@verafyai.com.au
Response: Within 2 business days

**Step 2: Escalation**
Email: enquiries@verafyai.com.au
Response: Within 5 business days

**Step 3: External Dispute Resolution**
If unresolved, you may contact:
• **OAIC** (privacy matters): www.oaic.gov.au
• **ACCC** (consumer matters): www.accc.gov.au
• **Small claims tribunal** (monetary disputes under threshold)`
        },
        {
          subtitle: "10.3 Class Action Waiver",
          content: `To the extent permitted by law, you agree:
• To bring claims individually, not as part of a class action
• You waive the right to participate in class action lawsuits
• You may opt out of this waiver by emailing enquiries@verafyai.com.au within 30 days of accepting these Terms`
        },
        {
          subtitle: "10.4 Limitation Period",
          content: `You must bring any claim arising from these Terms or the service within 12 months of the cause of action arising. Claims brought after 12 months are time-barred.`
        }
      ]
    },
    {
      icon: Globe,
      title: "11. International Use",
      content: `**11.1 Australian-Focused Service**

VerafyAI is designed primarily for Australian users and:
• Uses Australian tax rules (CGT, franking credits, etc.)
• Prices are in Australian Dollars (AUD)
• Focuses on ASX-listed securities
• Complies with Australian regulations

**11.2 Use Outside Australia**

If you use VerafyAI from outside Australia:
• You are responsible for compliance with local laws
• Tax calculators may not apply to your jurisdiction
• Market data may be limited for non-ASX securities
• We do not guarantee service availability in all countries
• Currency conversion may be required

**11.3 Export Controls**

You may not use VerafyAI in violation of Australian export control laws or sanctions.`
    },
    {
      icon: FileText,
      title: "12. Miscellaneous",
      subsections: [
        {
          subtitle: "12.1 Changes to Terms",
          content: `We may modify these Terms at any time. Changes will be effective:
• Immediately for new users
• After 30 days' notice for existing users

**Notice Method:**
• Email to your registered address
• In-app notification
• Updated "Last Updated" date

**Your Options:**
If you disagree with changes, you may cancel your account before the changes take effect. Continued use after changes constitutes acceptance.`
        },
        {
          subtitle: "12.2 Entire Agreement",
          content: `These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and VerafyAI.

These Terms supersede all prior agreements, understandings, and communications, whether oral or written.`
        },
        {
          subtitle: "12.3 Severability",
          content: `If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.`
        },
        {
          subtitle: "12.4 Waiver",
          content: `Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.`
        },
        {
          subtitle: "12.5 Assignment",
          content: `You may not assign or transfer these Terms or your account without our written consent. We may assign these Terms to any affiliate or in connection with a merger or sale of our company.`
        },
        {
          subtitle: "12.6 Force Majeure",
          content: `We are not liable for any failure or delay in performance due to circumstances beyond our reasonable control, including:
• Natural disasters
• Pandemics
• War or terrorism
• Government actions
• Internet or telecommunications failures
• Third-party service outages (AWS, market data providers)

**Recent Example:** During COVID-19 market volatility, extreme data feed delays were beyond our control.`
        },
        {
          subtitle: "12.7 Third-Party Services",
          content: `Our service integrates with third-party services:
• AWS (hosting)
• Google Gemini (AI)
• Stripe (payments)
• Market data providers
• Broker APIs

You acknowledge that:
• These services have their own terms and privacy policies
• We are not responsible for third-party service failures
• Third-party terms may apply to your use`
        }
      ]
    },
    {
      icon: Mail,
      title: "13. Contact Information",
      content: `**Axient AI Pty Ltd**
Trading as: VerafyAI / Verafy AI
ABN: 21 688 793 151
Location: Sydney, Australia

**Email Contacts:**
• General Support: support@verafyai.com.au
• Billing & Accounts: accounts@verafyai.com.au
• General Enquiries: enquiries@verafyai.com.au

**Response Times:**
• Support: 2 business days
• Billing: 2 business days
• Enquiries: 2 business days

**Website:** https://verafyai.com.au

**Australian Business Register:** Search "Axient AI Pty Ltd" at https://abr.business.gov.au`
    },
    {
      icon: FileText,
      title: "14. Acknowledgment",
      content: `**BY USING VERAFYAI, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.**

**YOU ALSO ACKNOWLEDGE:**

✅ VerafyAI does NOT provide personal financial advice
✅ VerafyAI does NOT provide personal tax advice
✅ You are responsible for your own investment decisions
✅ Past performance does not guarantee future results
✅ You may lose money by investing
✅ You should consult licensed professionals before making financial decisions
✅ Tax estimates are informational only
✅ All information is general in nature

**REGULATORY STATUS:**
✅ VerafyAI is NOT an Australian Financial Services Licensee (no AFSL)
✅ VerafyAI is NOT a registered tax agent
✅ VerafyAI is NOT a broker or dealer
✅ VerafyAI does NOT manage client funds

**YOUR AGREEMENT:**
By clicking "I Agree" or by using our service, you confirm that you have read and agree to these Terms.`
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
                  <Scale className="inline-block w-4 h-4 mr-2 -mt-1" />
                  Legal Agreement
                </span>
              </motion.div>

              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Terms of{' '}
                <span 
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Service
                </span>
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto mb-6 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Legal agreement governing your use of VerafyAI
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

              {/* Critical Disclaimer Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 max-w-2xl mx-auto p-4 rounded-xl border-2"
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  borderColor: 'rgba(239, 68, 68, 0.3)',
                }}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Critical: Not Financial or Tax Advice
                    </p>
                    <p className="text-xs text-red-400">
                      VerafyAI does NOT provide personal financial advice or tax advice. We are NOT licensed by ASIC and NOT registered as tax agents. All information is general in nature.
                    </p>
                  </div>
                </div>
              </motion.div>
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
                    transition={{ duration: 0.6, delay: index * 0.05 }}
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
                          if (paragraph.startsWith('**') && paragraph.endsWith('**') && !paragraph.includes(':')) {
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
                          } else if (paragraph.startsWith('⚠️') || paragraph.startsWith('✅') || paragraph.startsWith('❌')) {
                            return (
                              <p key={pIndex} className="mb-2 font-semibold">
                                {paragraph}
                              </p>
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
                            if (paragraph.startsWith('**') && paragraph.endsWith('**') && !paragraph.includes(':')) {
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
                            } else if (paragraph.startsWith('⚠️') || paragraph.startsWith('✅') || paragraph.startsWith('❌')) {
                              return (
                                <p key={pIndex} className="mb-2 font-semibold">
                                  {paragraph}
                                </p>
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
                Questions About These Terms?
              </h3>
              <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Contact our team or view related policies
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="mailto:enquiries@verafyai.com.au"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  }}
                >
                  <Mail className="inline-block w-4 h-4 mr-2 -mt-1" />
                  Email Legal Team
                </motion.a>
                <motion.a
                  href="/privacy"
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
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="/compliance"
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
                  Compliance Framework
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}