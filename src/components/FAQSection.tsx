import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, Shield, Lock, Calculator, AlertTriangle, HelpCircle, CreditCard, DollarSign, Sparkles, Users, TrendingUp } from "lucide-react";
import { useState, memo } from "react";

interface FAQSectionProps {
  isDark: boolean;
}

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const FAQSectionComponent = ({ isDark }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQ[] = [
    // Pricing & Founding Member
    {
      category: "Pricing & Founding Member",
      question: "What's \"founding member pricing\"?",
      answer: "Sign up before June 30, 2026 and get 50% off the current published price forever. Even if we raise prices in the future, you'll always pay exactly 50% of whatever the current published price is. Currently: Starter $5 (50% off $10), Standard $10 (50% off $20), Pro $20 (50% off $40)."
    },
    {
      category: "Pricing & Founding Member",
      question: "What happens if you raise prices after I join as a founding member?",
      answer: "You keep your 50% discount forever. If Starter goes from $10 to $15, you'd pay $7.50 (50% off). If Pro goes from $40 to $60, you'd pay $30 (50% off). Your founding member discount is permanent - always 50% off the published rate."
    },
    {
      category: "Pricing & Founding Member",
      question: "What if I cancel and come back?",
      answer: "If you cancel during the founding member period (before June 30, 2026), you lose your founding member status. When you return, you'll pay full published pricing (no discount)."
    },
    {
      category: "Pricing & Founding Member",
      question: "Will my price ever increase as a founding member?",
      answer: "Yes, but only proportionally if we raise published prices. You'll always pay exactly 50% of the current published price. Example: If Pro increases from $40 to $50, your price increases from $20 to $25 (still 50% off). You keep the discount rate (50% off current published price forever), not a fixed dollar amount."
    },
    {
      category: "Pricing & Founding Member",
      question: "Do founding members keep their discount if they upgrade?",
      answer: "Yes! You can switch between Starter, Standard, and Pro anytime and keep your 50% founding member discount on whichever tier you choose."
    },

    // Features & Tiers
    {
      category: "Features & Tiers",
      question: "What's the difference between Basic and Full Vera personality?",
      answer: "Basic Vera (Starter tier) gives you clear, functional alerts: \"DOC is down 54%. Your loss is $7,505.\" Full Vera (Standard/Pro) is conversational and contextual: \"DOC has taken a big hit - down 54% to a $7,500 loss. Before you panic, let's think through your options. This could be a tax-harvesting opportunity, or if you still believe in the company, a chance to average down. What's your gut telling you?\""
    },
    {
      category: "Features & Tiers",
      question: "How does the Action Center work?",
      answer: "Every night at 3am, Vera analyzes your entire portfolio and identifies the most important actions you should consider. She ranks them by urgency and potential financial impact, so you always know what matters most. Starter tier shows your top 5 priorities. Standard and Pro show everything."
    },
    {
      category: "Features & Tiers",
      question: "Can I upgrade or downgrade anytime?",
      answer: "Yes! Changes take effect immediately for upgrades. Downgrades apply at your next billing cycle. Founding members keep their 50% discount on any tier."
    },
    {
      category: "Features & Tiers",
      question: "What happens to my data if I downgrade?",
      answer: "Your data is never deleted. If you downgrade from Standard to Starter and have more than 50 holdings, your portfolio is read-only until you either upgrade or reduce holdings. All historical data remains accessible."
    },
    {
      category: "Features & Tiers",
      question: "What is the Tax Reporting Pack add-on?",
      answer: "The Tax Reporting Pack is an optional add-on for Starter ($30/financial year) and Standard ($20/financial year) plans. It includes tax loss harvesting detection, tax history tracking, and tax reporting features. Pro plan includes the Tax Reporting Pack at no extra cost for the current financial year, with additional previous years available at $20/year (up to 5 years max, subject to data upload)."
    },
    {
      category: "Features & Tiers",
      question: "Can I get a refund if I purchase the Tax Reporting Pack?",
      answer: "No. Once the Tax Reporting Pack is purchased or any tax features are used (such as generating tax reports, running CGT calculations, or downloading tax PDFs), the purchase is non-refundable. This is because the tax analysis provides immediate financial value that cannot be 'returned' once accessed."
    },

    // Fair Use & Limits
    {
      category: "Fair Use & Limits",
      question: "What does \"fair use\" mean for API calls?",
      answer: "API calls are how the app communicates with our servers. Normal usage (checking your portfolio 3-5 times per day, running analysis) uses 50-100 API calls per day. Our limits (100/150/200 per day) give you plenty of headroom. 95% of users never hit these limits."
    },
    {
      category: "Fair Use & Limits",
      question: "What happens if I exceed fair use limits?",
      answer: "First time: We send a friendly email to understand your use case. Often we'll just increase your limits. Consistent high usage: We might suggest upgrading to a higher tier or Enterprise. We always contact you before taking any action."
    },
    {
      category: "Fair Use & Limits",
      question: "Can I track my family's portfolios on Pro tier?",
      answer: "No. Pro tier is for ONE PERSON managing their own portfolios only. If you want to track portfolios for your spouse, kids, or parents, you need Enterprise. This ensures proper data security and access controls."
    },
    {
      category: "Fair Use & Limits",
      question: "What if I need to track more than 2,000 holdings?",
      answer: "That's well beyond typical individual investor needs. Contact us at enquiries@verafyai.com.au - you likely need our Enterprise plan with custom limits."
    },

    // Technical & Security
    {
      category: "Technical & Security",
      question: "How accurate is the tax reporting?",
      answer: "Our tax calculations are built for Australian tax law and validated against ATO guidelines. However, we recommend reviewing reports with your accountant, especially for complex situations. Pro tier includes 5 years of tax history and ATO-ready PDF reports."
    },
    {
      category: "Technical & Security",
      question: "Does Vera actually make investment decisions for me?",
      answer: "No. Vera provides recommendations, analysis, and insights, but never executes trades on your behalf. You're always in control. Think of her as a very smart advisor who does the research and math, but you make the final call."
    },
    {
      category: "Technical & Security",
      question: "Is my data secure?",
      answer: "Yes. We use bank-level encryption, never sell your data, and are fully ASIC compliant. We don't have access to your brokerage accounts - you manually import transactions or use our broker integrations. Your portfolio data is yours alone."
    },
    {
      category: "Technical & Security",
      question: "Do you support international stocks?",
      answer: "Yes! We support 60+ global exchanges and 25+ currencies. Track ASX, NYSE, NASDAQ, LSE, and more in one portfolio with automatic currency conversion."
    },

    // Trial & Getting Started
    {
      category: "Trial & Getting Started",
      question: "What's included in the 14-day trial?",
      answer: "Everything in Pro tier - optimization, chat, scenarios, tax reports, unlimited portfolios, the works. No credit card required. Experience Vera at her best, then choose your plan."
    },
    {
      category: "Trial & Getting Started",
      question: "How do I import my portfolio?",
      answer: "Three ways: (1) Manual entry, (2) CSV upload from your broker, (3) Direct broker integration (coming soon). Most users start with CSV upload - takes 5 minutes."
    },
    {
      category: "Trial & Getting Started",
      question: "Can I switch tiers during my trial?",
      answer: "Your trial gives you full Pro access. After trial ends, choose the tier that fits your needs. You can change tiers anytime."
    },

    // Comparison to Competitors
    {
      category: "Comparison to Competitors",
      question: "How is this different from Sharesight?",
      answer: "Sharesight is a great portfolio tracker - it shows you what happened. VerafyAI tells you what to do next. We add AI-powered recommendations, conversational insights, portfolio optimization, and proactive alerts. Plus, we're cheaper: our Pro tier ($20/month launch price) has more features than Sharesight's Expert tier ($42 AUD/month)."
    },
    {
      category: "Comparison to Competitors",
      question: "Why is Vera better than a spreadsheet?",
      answer: "Vera automatically tracks performance, identifies risks, finds tax opportunities, and provides personalized recommendations. A spreadsheet is static - Vera is proactive. Plus, no manual updates or formula errors."
    },

    // Licensing & Regulation
    {
      category: "Licensing & Regulation",
      question: "Does VerafyAI need a financial services license?",
      answer: "No. VerafyAI operates as a general information provider, not a financial services licensee. We provide portfolio tracking, analytics, and educational content only. We do NOT provide personal financial advice, investment recommendations, or manage client funds. This means we don't need an Australian Financial Services License (AFSL)."
    },
    {
      category: "Licensing & Regulation",
      question: "What's the difference between general information and personal advice?",
      answer: "General information is factual data that doesn't take your personal circumstances into account (e.g., 'Your portfolio is 54% in one stock'). Personal advice considers your individual situation and recommends actions (e.g., 'You should sell some of that stock'). VerafyAI only provides general information, never personal advice."
    },
    {
      category: "Licensing & Regulation",
      question: "Can Vera tell me what stocks to buy or sell?",
      answer: "No. Vera AI cannot and will not recommend buying or selling specific stocks. That would be personal financial advice, which requires an AFSL. Vera provides factual information about your portfolio, market data, and educational content to help you make informed decisions. For investment recommendations, please consult a licensed financial adviser."
    },
    {
      category: "Licensing & Regulation",
      question: "Is VerafyAI a registered tax agent?",
      answer: "No. VerafyAI is not a registered tax agent. We provide tax calculation tools and estimates for informational purposes only. We do NOT provide personal tax advice, prepare tax returns, or offer tax planning services. For personal tax advice, please consult a registered tax agent via the Tax Practitioners Board (TPB) public register."
    },
    {
      category: "Licensing & Regulation",
      question: "Can VerafyAI prepare my tax return?",
      answer: "No. Only registered tax agents can prepare tax returns for a fee. VerafyAI provides tax estimate calculators (like CGT estimates) to help you understand potential tax outcomes, but these are informational tools only. You'll need to work with a registered tax agent or use ATO myTax to lodge your actual return."
    },

    // Privacy & Data
    {
      category: "Privacy & Data",
      question: "What personal information does VerafyAI collect?",
      answer: "We collect: (1) Your email address and optional display name for account management, (2) Portfolio data (holdings, transactions, performance history), (3) Preferences and settings, and (4) Technical data (IP addresses, device info) for security. We do NOT collect: Tax File Numbers (TFN), bank account details, credit card details (Stripe handles payments), or government ID numbers."
    },
    {
      category: "Privacy & Data",
      question: "Where is my data stored?",
      answer: "Your data is primarily stored in AWS Sydney (ap-southeast-2 region) in Australia. We use AWS RDS PostgreSQL for databases, S3 for document storage, and Lambda for compute. Some services like Google Gemini (AI) and Stripe (payments) operate globally with appropriate privacy safeguards. All data is encrypted at rest (AES-256) and in transit (TLS 1.3)."
    },
    {
      category: "Privacy & Data",
      question: "Does VerafyAI send my data to Google Gemini AI?",
      answer: "We send anonymized, aggregated portfolio data to Google Gemini for conversational AI features. We do NOT send: your email, name, individual stock symbols, transaction history, or exact position sizes. For example, '$127,450' becomes '$127,000' and stock names are anonymized. Your personal identifiable information (PII) never leaves our Australian servers."
    },
    {
      category: "Privacy & Data",
      question: "How long does VerafyAI keep my data?",
      answer: "Account data: Until deletion + 7 years (tax compliance). Portfolio data: Until account deletion. Transaction history: 7 years (ATO requirement), then anonymized. Chat history: 2 years, then auto-purged. Audit logs: 7 years in archive. You can request data deletion at any time via Settings → Delete Account with a 30-day grace period."
    },
    {
      category: "Privacy & Data",
      question: "What are my privacy rights?",
      answer: "Under Australian privacy law, you have the right to: (1) Access your data (Settings → Download My Data), (2) Correct your data (self-service editing), (3) Delete your data (Settings → Delete Account), (4) Data portability (JSON export), and (5) Complain (enquiries@verafyai.com.au or escalate to OAIC). All these features are available in your account settings."
    },

    // AI & Technology
    {
      category: "AI & Technology",
      question: "How does VerafyAI prevent AI hallucinations?",
      answer: "We use a 4-layer prevention system: (1) Input validation with confidence scores, (2) Calculation isolation - ALL numbers come from coded rules, never AI-generated, (3) Response validation to verify numbers match our calculations, and (4) Output labeling with mandatory disclaimers. Gemini AI handles natural language only; our Rules Engine handles all calculations for 100% accuracy."
    },
    {
      category: "AI & Technology",
      question: "What's the difference between Vera's Rules Engine and Gemini AI?",
      answer: "Our Rules Engine is coded logic that performs 100% accurate calculations (CGT, portfolio metrics, risk scores, tax estimates). Gemini AI provides natural conversation, explanations, and context understanding. For any query involving numbers, our Rules Engine calculates them first, then Gemini explains them naturally. This hybrid approach ensures accuracy while maintaining conversational engagement."
    },

    // Security
    {
      category: "Security",
      question: "What security measures does VerafyAI use?",
      answer: "We implement bank-level security: AES-256 encryption at rest, TLS 1.3 encryption in transit, AWS Cognito authentication with optional MFA, Row-Level Security (RLS) for data isolation, JWT tokens with rate limiting for APIs, AWS Secrets Manager for credentials, and immutable CloudWatch audit logs. All infrastructure is in AWS Sydney with 24/7 monitoring."
    },
    {
      category: "Security",
      question: "What happens if there's a data breach?",
      answer: "We have a 4-priority incident response plan (P1: 15 min response for critical issues). For data breaches: (1) Immediate containment, (2) Assessment within 30 days, (3) OAIC notification if required, (4) User notification as soon as practicable, and (5) Full documentation and review. We maintain comprehensive audit trails and cyber insurance. Report suspected incidents to enquiries@verafyai.com.au."
    },

    // Billing & Subscriptions
    {
      category: "Billing & Subscriptions",
      question: "What is the founding member pricing?",
      answer: "Founding members get 50% off current published price forever! Get our special pricing now and never pay full price. This is a limited-time offer to celebrate our launch. Once you become a founding member, your 50% discount is permanent as long as you maintain an active subscription."
    },
    {
      category: "Billing & Subscriptions",
      question: "Can I cancel anytime?",
      answer: "Yes, absolutely! You can cancel your subscription at any time with no penalties or hidden fees. Your access will continue until the end of your billing period. Cancel anytime from Settings → Subscription Management. We also offer a 7-day full refund policy for new signups."
    },
    {
      category: "Billing & Subscriptions",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express) via Stripe. Stripe is PCI-DSS Level 1 compliant and handles all payment card data - VerafyAI never sees your full card number. For enterprise customers, we also accept bank transfers and purchase orders for annual subscriptions."
    },
    {
      category: "Billing & Subscriptions",
      question: "Is there a free trial?",
      answer: "Yes! All plans come with a 14-day free trial. Credit card required upfront - you'll be automatically billed after 14 days unless you cancel. You'll have access to all features of your selected plan during the trial period. We'll send you reminders before the trial ends so you can cancel if needed."
    },
    {
      category: "Billing & Subscriptions",
      question: "How do I upgrade or downgrade my plan?",
      answer: "You can change your plan at any time from Settings → Subscription Management. Upgrades take effect immediately with prorated billing. Downgrades apply at the start of your next billing cycle to ensure you don't lose access to features you've paid for. No penalties or fees for changing plans."
    },
    {
      category: "Billing & Subscriptions",
      question: "Can I get a refund?",
      answer: "Yes! We offer a 7-day full refund policy for new signups. If you're not satisfied within the first 7 days, contact support@verafyai.com.au for a full refund. After 7 days, you can cancel anytime and your subscription will remain active until the end of the billing period (no partial refunds)."
    },
    {
      category: "Billing & Subscriptions",
      question: "Are Tax Reporting Pack add-ons refundable?",
      answer: "No. Tax Reporting Pack purchases (Starter $30/year, Standard $20/year, Pro additional years $20/year) are non-refundable once purchased. This applies whether or not you use the tax features, as the purchase grants immediate access to valuable tax analysis tools. The 7-day refund policy for base subscriptions does not apply to Tax Reporting Pack add-ons."
    },

    // Support & Complaints
    {
      category: "Support & Complaints",
      question: "How do I complain about VerafyAI's service?",
      answer: "We have a 3-step complaint process: (1) Email support@verafyai.com.au (response within 2 business days), (2) Escalate to enquiries@verafyai.com.au (response within 5 business days), (3) External resolution via OAIC (privacy issues: www.oaic.gov.au) or ACCC (consumer issues: www.accc.gov.au). We take all complaints seriously and aim to resolve them quickly."
    },
    {
      category: "Support & Complaints",
      question: "What if I disagree with a tax calculation?",
      answer: "Tax calculations are estimates based on standard Australian tax rules and the data you've provided. If you believe a calculation is incorrect: (1) Check your input data (transactions, cost bases, dates), (2) Contact support@verafyai.com.au with calculation details, (3) We'll review and respond within 2 business days. Remember: estimates are informational only - always verify with a registered tax agent before lodging."
    },
    {
      category: "Support & Complaints",
      question: "Does VerafyAI provide customer support?",
      answer: "Yes! We provide email support at support@verafyai.com.au with a 2 business day response time. Pro plan members get priority support with faster response times. We also have comprehensive documentation, video tutorials, and this FAQ section. For security incidents, contact enquiries@verafyai.com.au for immediate attention."
    }
  ];

  const categories = [
    { id: 'Pricing & Founding Member', label: 'Pricing & Founding Member', icon: DollarSign },
    { id: 'Features & Tiers', label: 'Features & Tiers', icon: Sparkles },
    { id: 'Fair Use & Limits', label: 'Fair Use & Limits', icon: Users },
    { id: 'Technical & Security', label: 'Technical & Security', icon: Lock },
    { id: 'Trial & Getting Started', label: 'Trial & Getting Started', icon: TrendingUp },
    { id: 'Comparison to Competitors', label: 'Comparison to Competitors', icon: AlertTriangle },
    { id: 'Licensing & Regulation', label: 'Licensing & Regulation', icon: Shield },
    { id: 'Privacy & Data', label: 'Privacy & Data', icon: Lock },
    { id: 'AI & Technology', label: 'AI & Technology', icon: Calculator },
    { id: 'Security', label: 'Security', icon: AlertTriangle },
    { id: 'Billing & Subscriptions', label: 'Billing & Subscriptions', icon: CreditCard },
    { id: 'Support & Complaints', label: 'Support & Complaints', icon: HelpCircle }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Frequently Asked <span style={{
              background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Questions</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Select a topic below to view related questions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenIndex(null);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all border-2"
                  style={{
                    background: activeCategory === category.id
                      ? isDark
                        ? 'rgba(var(--theme-primary-rgb), 0.2)'
                        : 'rgba(var(--theme-primary-rgb), 0.1)'
                      : isDark
                      ? 'rgba(15, 23, 42, 0.6)'
                      : 'rgba(255, 255, 255, 0.8)',
                    borderColor: activeCategory === category.id
                      ? 'var(--theme-primary)'
                      : 'var(--theme-primary-alpha)',
                    color: activeCategory === category.id
                      ? 'var(--theme-primary)'
                      : isDark
                      ? '#94a3b8'
                      : '#64748b'
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Items - Only show when a specific category is selected */}
        {activeCategory !== 'all' && (
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <motion.div
                    className="backdrop-blur-xl border-2 rounded-xl overflow-hidden transition-all duration-300"
                    style={{
                      background: isDark
                        ? openIndex === index
                          ? 'rgba(15, 23, 42, 0.8)'
                          : 'rgba(15, 23, 42, 0.6)'
                        : openIndex === index
                        ? 'rgba(255, 255, 255, 0.95)'
                        : 'rgba(255, 255, 255, 0.8)',
                      borderColor: openIndex === index
                        ? 'var(--theme-primary)'
                        : 'var(--theme-primary-alpha)',
                      boxShadow: openIndex === index
                        ? '0 8px 32px rgba(var(--theme-primary-rgb), 0.2)'
                        : 'none'
                    }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <div className="flex-1 pr-4">
                        {activeCategory === 'all' && (
                          <span 
                            className="text-xs font-semibold px-2 py-1 rounded mb-2 inline-block"
                            style={{
                              background: 'rgba(var(--theme-primary-rgb), 0.1)',
                              color: 'var(--theme-primary)'
                            }}
                          >
                            {faq.category}
                          </span>
                        )}
                        <span
                          className={`block text-lg font-semibold ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        {openIndex === index ? (
                          <Minus className="w-5 h-5" style={{ color: 'var(--theme-primary)' }} />
                        ) : (
                          <Plus
                            className={`w-5 h-5 ${
                              isDark ? "text-slate-400" : "text-slate-600"
                            }`}
                          />
                        )}
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div
                            className={`px-6 pb-5 border-t-2 pt-4 ${
                              isDark ? "text-slate-300 border-slate-700" : "text-slate-700 border-slate-200"
                            }`}
                          >
                            <motion.p
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="leading-relaxed"
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Contact CTA */}
        <motion.div
          className="mt-12 text-center p-8 backdrop-blur-xl border-2 rounded-2xl"
          style={{
            background: isDark
              ? 'rgba(15, 23, 42, 0.8)'
              : 'rgba(255, 255, 255, 0.9)',
            borderColor: 'var(--theme-primary-alpha)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4
            className={`text-xl mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Still have questions?
          </h4>
          <p className={`mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Our support team is here to help you
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="mailto:support@verafyai.com.au"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-lg"
              style={{
                background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
              }}
            >
              Contact Support
            </motion.a>
            <motion.a
              href="/compliance"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl font-semibold border-2 transition-all"
              style={{
                borderColor: 'var(--theme-primary)',
                color: 'var(--theme-primary)',
                background: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.8)'
              }}
            >
              View Compliance Framework
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export const FAQSection = memo(FAQSectionComponent);