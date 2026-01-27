// Central Source of Truth for All FAQs
// Update this file to modify FAQs across the entire application

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  relevantPlans?: ('starter' | 'standard' | 'pro' | 'tax-pack')[];
}

// Master FAQ List
export const ALL_FAQS: FAQ[] = [
  // General Questions
  {
    id: 'what-is-verafy',
    question: 'What is Verafy AI?',
    answer: 'Verafy AI is an intelligent portfolio management platform that helps investors track, analyze, and optimize their investment portfolios using advanced AI and data analytics.',
    category: 'General',
    relevantPlans: ['starter', 'standard', 'pro'],
  },
  {
    id: 'who-is-verafy-for',
    question: 'Who is Verafy for?',
    answer: 'Verafy is designed for Australian investors of all levels - from beginners tracking their first portfolio to experienced investors managing multiple accounts and seeking advanced analytics.',
    category: 'General',
    relevantPlans: ['starter', 'standard', 'pro'],
  },
  {
    id: 'how-does-verafy-work',
    question: 'How does Verafy work?',
    answer: 'Simply connect your portfolio data (via CSV upload or manual entry), and Verafy analyzes your holdings, identifies risks, tracks performance, and provides AI-powered insights to help you make better investment decisions.',
    category: 'General',
    relevantPlans: ['starter', 'standard', 'pro'],
  },

  // Starter Plan Specific
  {
    id: 'starter-free-forever',
    question: 'Is the Starter plan really free forever?',
    answer: 'Yes! The Starter plan is completely free with no time limit. You can track up to 20 holdings with basic analytics and performance tracking at no cost.',
    category: 'Starter Plan',
    relevantPlans: ['starter'],
  },
  {
    id: 'starter-limitations',
    question: 'What are the limitations of the free Starter plan?',
    answer: 'The Starter plan is limited to 20 holdings, manual data entry only, and basic analytics. You won\'t have access to AI insights, sector allocation, or advanced risk metrics available in Standard and Pro plans.',
    category: 'Starter Plan',
    relevantPlans: ['starter'],
  },
  {
    id: 'starter-upgrade',
    question: 'Can I upgrade from Starter later?',
    answer: 'Absolutely! You can upgrade to Standard or Pro at any time. Your existing portfolio data will be preserved, and you\'ll immediately get access to advanced features.',
    category: 'Starter Plan',
    relevantPlans: ['starter'],
  },
  {
    id: 'starter-portfolio-limit',
    question: 'Can I add more than 20 holdings on Starter?',
    answer: 'The Starter plan is limited to 20 holdings. If you need to track more holdings, you\'ll need to upgrade to Standard or Pro, which offer unlimited holdings.',
    category: 'Starter Plan',
    relevantPlans: ['starter'],
  },

  // Standard Plan Specific
  {
    id: 'standard-vs-starter',
    question: 'What\'s the difference between Standard and Starter?',
    answer: 'Standard includes unlimited portfolios, AI Daily Feed with market insights, sector allocation analysis, CSV/Excel import, advanced charting, portfolio health scores, and priority support - all features not available in Starter.',
    category: 'Standard Plan',
    relevantPlans: ['standard'],
  },
  {
    id: 'standard-trial',
    question: 'Is there a free trial for Standard?',
    answer: 'Yes! We offer a 14-day free trial of the Standard plan. No credit card required to start. You can cancel anytime during the trial with no charges.',
    category: 'Standard Plan',
    relevantPlans: ['standard'],
  },
  {
    id: 'standard-import',
    question: 'What file formats can I import with Standard?',
    answer: 'Standard plan supports CSV and Excel (XLS/XLSX) file imports. You can import transaction history, holdings, and portfolio data from most major brokers.',
    category: 'Standard Plan',
    relevantPlans: ['standard'],
  },
  {
    id: 'standard-ai-feed',
    question: 'What is the AI Daily Feed?',
    answer: 'The AI Daily Feed analyzes market news, your portfolio holdings, and macroeconomic trends to deliver personalized insights, opportunities, and risk alerts specific to your investments every day.',
    category: 'Standard Plan',
    relevantPlans: ['standard'],
  },
  {
    id: 'standard-health-score',
    question: 'How is the Portfolio Health Score calculated?',
    answer: 'The Portfolio Health Score (0-100) evaluates diversification, risk exposure, sector balance, performance consistency, and other factors to give you an at-a-glance assessment of your portfolio\'s overall health.',
    category: 'Standard Plan',
    relevantPlans: ['standard'],
  },

  // Pro Plan Specific
  {
    id: 'pro-vs-standard',
    question: 'What makes Pro worth $79/month?',
    answer: 'Pro includes AI trade recommendations, predictive analytics, real-time data, API access, advanced risk modeling, dedicated account manager, and phone support - essential tools for serious investors managing significant portfolios.',
    category: 'Pro Plan',
    relevantPlans: ['pro'],
  },
  {
    id: 'pro-ai-recommendations',
    question: 'How do AI trade recommendations work?',
    answer: 'Our AI analyzes your portfolio, risk tolerance, market conditions, and thousands of data points to suggest specific trades (buy/sell/hold) with confidence scores and reasoning. You maintain full control over all decisions.',
    category: 'Pro Plan',
    relevantPlans: ['pro'],
  },
  {
    id: 'pro-api-access',
    question: 'What can I do with API access?',
    answer: 'API access lets you automate portfolio updates, integrate with other tools, build custom dashboards, and programmatically access all Verafy features. Perfect for developers and power users.',
    category: 'Pro Plan',
    relevantPlans: ['pro'],
  },
  {
    id: 'pro-real-time',
    question: 'What is real-time market data?',
    answer: 'Pro plan includes live ASX price feeds with minimal delay (15-minute delay on Starter/Standard). See up-to-the-second portfolio valuations and make decisions with the latest market information.',
    category: 'Pro Plan',
    relevantPlans: ['pro'],
  },
  {
    id: 'pro-predictive',
    question: 'How accurate is the predictive analytics?',
    answer: 'Our AI models achieve 70-75% directional accuracy on 30-day predictions. While no prediction is guaranteed, our models are trained on 20+ years of market data and continuously improve with new information.',
    category: 'Pro Plan',
    relevantPlans: ['pro'],
  },
  {
    id: 'pro-account-manager',
    question: 'What does a dedicated account manager do?',
    answer: 'Your account manager provides personalized onboarding, quarterly portfolio reviews, platform optimization tips, and priority escalation for any issues. They\'re your direct line to Verafy expertise.',
    category: 'Pro Plan',
    relevantPlans: ['pro'],
  },

  // Tax Pack Specific
  {
    id: 'tax-who-needs',
    question: 'Who needs the Tax Pack add-on?',
    answer: 'The Tax Pack is essential for Australian investors who actively trade, want to optimize tax outcomes, or struggle with capital gains tax (CGT) calculations at tax time.',
    category: 'Tax Pack',
    relevantPlans: ['tax-pack'],
  },
  {
    id: 'tax-harvesting',
    question: 'What is tax-loss harvesting?',
    answer: 'Tax-loss harvesting identifies losing positions you can sell to offset capital gains, reducing your tax liability. Our scanner shows opportunities ranked by tax savings potential.',
    category: 'Tax Pack',
    relevantPlans: ['tax-pack'],
  },
  {
    id: 'tax-cgt',
    question: 'How does CGT calculation work?',
    answer: 'We automatically calculate capital gains tax using FIFO, LIFO, or average cost methods. Track your cost base, apply the 50% CGT discount (for holdings >12 months), and export pre-filled tax reports.',
    category: 'Tax Pack',
    relevantPlans: ['tax-pack'],
  },
  {
    id: 'tax-reports',
    question: 'What tax reports are included?',
    answer: 'Generate CGT schedules, dividend statements, interest income summaries, and year-end tax summaries. All reports are formatted for easy transfer to your tax return or accountant.',
    category: 'Tax Pack',
    relevantPlans: ['tax-pack'],
  },
  {
    id: 'tax-with-other-plans',
    question: 'Can I add Tax Pack to any plan?',
    answer: 'Yes! Tax Pack is an add-on that works with Starter, Standard, or Pro plans. It adds $15/month (or $150/year) to your base plan cost.',
    category: 'Tax Pack',
    relevantPlans: ['tax-pack'],
  },
  {
    id: 'tax-accountant',
    question: 'Will this replace my accountant?',
    answer: 'No, Tax Pack provides the data and calculations to make your accountant\'s job easier (and cheaper). You\'ll still want professional advice for complex tax situations, but you\'ll arrive prepared.',
    category: 'Tax Pack',
    relevantPlans: ['tax-pack'],
  },

  // Pricing & Billing
  {
    id: 'pricing-annual-discount',
    question: 'How much do I save with annual billing?',
    answer: 'Annual plans save you 2 months: Standard is $290/year (vs $348), Pro is $790/year (vs $948), and Tax Pack is $150/year (vs $180). That\'s 17% off the monthly price.',
    category: 'Pricing & Billing',
    relevantPlans: ['standard', 'pro', 'tax-pack'],
  },
  {
    id: 'pricing-change-plans',
    question: 'Can I change plans anytime?',
    answer: 'Yes! Upgrade or downgrade anytime. Upgrades are prorated immediately. Downgrades take effect at the end of your current billing cycle with no penalties.',
    category: 'Pricing & Billing',
    relevantPlans: ['starter', 'standard', 'pro', 'tax-pack'],
  },
  {
    id: 'pricing-refund',
    question: 'What\'s your refund policy?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied within the first 30 days, we\'ll refund your payment in full, no questions asked.',
    category: 'Pricing & Billing',
    relevantPlans: ['standard', 'pro', 'tax-pack'],
  },
  {
    id: 'pricing-cancel',
    question: 'How do I cancel my subscription?',
    answer: 'Cancel anytime from your account settings. Your access continues until the end of your billing period, and you won\'t be charged again. You can also downgrade to the free Starter plan.',
    category: 'Pricing & Billing',
    relevantPlans: ['standard', 'pro', 'tax-pack'],
  },
  {
    id: 'pricing-payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, Amex), debit cards, and PayPal. All payments are processed securely through Stripe.',
    category: 'Pricing & Billing',
    relevantPlans: ['standard', 'pro', 'tax-pack'],
  },

  // Features & Functionality
  {
    id: 'features-brokers',
    question: 'Which brokers do you support?',
    answer: 'We support all major Australian brokers including CommSec, SelfWealth, Stake, NAB Trade, Westpac, ANZ, and more. Any broker that provides CSV export will work.',
    category: 'Features',
    relevantPlans: ['standard', 'pro'],
  },
  {
    id: 'features-international',
    question: 'Can I track international stocks?',
    answer: 'Yes! Track ASX, NYSE, NASDAQ, LSE, and other major exchanges. Currency conversion is automatic, and all values are displayed in AUD by default.',
    category: 'Features',
    relevantPlans: ['standard', 'pro'],
  },
  {
    id: 'features-crypto',
    question: 'Do you support cryptocurrency?',
    answer: 'Not yet, but crypto support is on our roadmap for 2026. Currently, Verafy focuses exclusively on stocks, ETFs, and managed funds.',
    category: 'Features',
    relevantPlans: ['starter', 'standard', 'pro'],
  },
  {
    id: 'features-alerts',
    question: 'What types of alerts can I set?',
    answer: 'Set price alerts, concentration risk warnings, rebalancing reminders, dividend notifications, and AI insight alerts. Receive notifications via email, SMS, or push notification.',
    category: 'Features',
    relevantPlans: ['standard', 'pro'],
  },
  {
    id: 'features-mobile',
    question: 'Is there a mobile app?',
    answer: 'Yes! Verafy is available on iOS and Android. All plans include mobile access with full feature parity to the web platform.',
    category: 'Features',
    relevantPlans: ['starter', 'standard', 'pro'],
  },

  // Security & Privacy
  {
    id: 'security-data',
    question: 'How is my data protected?',
    answer: 'We use bank-level AES-256 encryption, secure AWS infrastructure, and never store your broker login credentials. Your portfolio data is encrypted at rest and in transit.',
    category: 'Security',
    relevantPlans: ['starter', 'standard', 'pro', 'tax-pack'],
  },
  {
    id: 'security-privacy',
    question: 'Do you sell my data?',
    answer: 'Absolutely not. We never sell, rent, or share your personal or portfolio data with third parties. Your data is yours alone. Read our Privacy Policy for full details.',
    category: 'Security',
    relevantPlans: ['starter', 'standard', 'pro', 'tax-pack'],
  },
  {
    id: 'security-broker-credentials',
    question: 'Do you need my broker login?',
    answer: 'No! We never ask for or store your broker login credentials. You import data via CSV export from your broker, maintaining complete security.',
    category: 'Security',
    relevantPlans: ['starter', 'standard', 'pro'],
  },

  // Support
  {
    id: 'support-response-time',
    question: 'How fast is support response?',
    answer: 'Starter: 48 hours. Standard: 24 hours (priority queue). Pro: 4 hours plus phone/chat access. Enterprise: Dedicated account manager with immediate response.',
    category: 'Support',
    relevantPlans: ['starter', 'standard', 'pro'],
  },
  {
    id: 'support-hours',
    question: 'What are your support hours?',
    answer: 'Email support: 24/7. Chat (Pro): Mon-Fri 9am-6pm AEST. Phone (Pro): Mon-Fri 9am-5pm AEST. We aim to respond to all inquiries within our SLA times.',
    category: 'Support',
    relevantPlans: ['starter', 'standard', 'pro'],
  },

  // Getting Started
  {
    id: 'getting-started-time',
    question: 'How long does setup take?',
    answer: 'Most users are up and running in under 10 minutes. Export your portfolio from your broker, upload the CSV to Verafy, and you\'re done. We also offer guided onboarding for Pro users.',
    category: 'Getting Started',
    relevantPlans: ['starter', 'standard', 'pro'],
  },
  {
    id: 'getting-started-help',
    question: 'Do you offer onboarding help?',
    answer: 'Yes! Standard and Pro users get access to video tutorials and setup guides. Pro users also get personalized onboarding with their dedicated account manager.',
    category: 'Getting Started',
    relevantPlans: ['standard', 'pro'],
  },
];

// Helper Functions
export function getFAQsByCategory(category: string): FAQ[] {
  return ALL_FAQS.filter(faq => faq.category === category);
}

export function getFAQsByPlan(planId: 'starter' | 'standard' | 'pro' | 'tax-pack'): FAQ[] {
  return ALL_FAQS.filter(faq => 
    faq.relevantPlans && faq.relevantPlans.includes(planId)
  );
}

export function getAllCategories(): string[] {
  const categories = new Set(ALL_FAQS.map(faq => faq.category));
  return Array.from(categories);
}

export function searchFAQs(query: string): FAQ[] {
  const lowerQuery = query.toLowerCase();
  return ALL_FAQS.filter(faq =>
    faq.question.toLowerCase().includes(lowerQuery) ||
    faq.answer.toLowerCase().includes(lowerQuery)
  );
}