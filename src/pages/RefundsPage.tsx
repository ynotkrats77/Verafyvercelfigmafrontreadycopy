import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { motion } from 'motion/react';
import { DollarSign, CheckCircle, XCircle, Clock, CreditCard, AlertTriangle, FileText, Mail } from 'lucide-react';

interface RefundsPageProps {
  isDark: boolean;
}

export function RefundsPage({ isDark }: RefundsPageProps) {
  const sections = [
    {
      icon: FileText,
      title: "1. Refund Policy Overview",
      content: `At VerafyAI, we want you to be completely satisfied with our service. This Refund Policy explains when refunds are available and the conditions that apply.

**Last Updated:** January 2026
**Version:** 1.0
**Entity:** Axient AI Pty Ltd (ABN 21 688 793 151)

**Key Points:**
• 7-day money-back guarantee for new subscriptions
• No refunds if certain premium features are used
• Auto-billing continues until you cancel
• Refunds apply to first payment only, not subsequent billing cycles

Please read this policy carefully before requesting a refund.`
    },
    {
      icon: CheckCircle,
      title: "2. 7-Day Money-Back Guarantee",
      content: `**2.1 Eligibility**

You are eligible for a full refund if:
• You request a refund within 7 calendar days of your first payment
• You are a new subscriber (first-time customer)
• You have NOT used the excluded premium features listed in Section 3

**2.2 How to Request a Refund**

To request a refund within the 7-day window:

**Email:** accounts@verafyai.com.au
**Subject:** Refund Request - [Your Account Email]
**Include:**
• Your account email address
• Date of payment
• Reason for refund (optional but appreciated)

**Response Time:** Within 2 business days

**2.3 Refund Processing**

Once approved:
• Refunds are processed within 5-7 business days
• Refund is issued to the original payment method
• You will receive confirmation via email
• Your account access ends immediately upon refund

**2.4 Refund Amount**

You will receive a 100% refund of:
• Subscription fee paid
• GST component

Processing fees charged by payment processors (Stripe) may not be refundable.`
    },
    {
      icon: XCircle,
      title: "3. Features That Disqualify Refunds",
      content: `**⚠️ IMPORTANT: Using These Features Voids Your Refund Eligibility**

If you use any of the following premium features within the 7-day window, you are **NOT eligible for a refund**:

**3.1 Tax Reporting Features**

❌ **CGT (Capital Gains Tax) Optimizer**
• Generates tax-loss harvesting opportunities
• Calculates optimal CGT strategies
• Provides tax-saving recommendations
• Creates CGT reports

❌ **Tax Reports Generation**
• Annual tax summary PDF exports
• ATO-ready tax reports
• Historical tax calculations (multi-year)
• Franking credit calculations for tax purposes

❌ **Tax Scenario Modeling**
• "What-if" tax projections
• CGT impact analysis
• Tax planning scenarios

❌ **Tax Reporting Pack Add-On Purchases**
• Starter plan: Tax Reporting Pack ($30/financial year)
• Standard plan: Tax Reporting Pack ($20/financial year)
• Pro plan: Additional previous year purchases ($20/financial year each)
• Once purchased, Tax Reporting Pack add-ons are non-refundable

**Why These Features Disqualify Refunds:**
These features provide immediate, tangible financial value by generating personalized tax strategies and reports. Once you've received this analysis and acted upon it, the value has been delivered and cannot be "returned." Tax add-on purchases are non-refundable once purchased, regardless of whether the features are used.

**3.2 How to Avoid Using These Features**

If you're within your 7-day trial period and think you might want a refund:
• Do NOT access the "Tax Center" or "Tax Reports" section
• Do NOT click "Generate CGT Report"
• Do NOT run the CGT Optimizer tool
• Do NOT download any tax-related PDFs

You can still use:
✅ Portfolio tracking and performance analytics
✅ Vera AI chat (general portfolio questions)
✅ Risk scoring and health checks
✅ Sector and diversification analysis
✅ Market data and price alerts
✅ General portfolio recommendations

**3.3 Excluded Feature Usage Tracking**

We automatically track when premium tax features are used:
• System logs all CGT Optimizer runs
• Tax report downloads are tracked
• Tax scenario modeling is logged
• Timestamp recorded for compliance

This ensures fair application of our refund policy.`
    },
    {
      icon: CreditCard,
      title: "4. Auto-Billing and Subscriptions",
      content: `**4.1 Automatic Renewal**

When you subscribe to VerafyAI:
• Your subscription automatically renews at the end of each billing period
• You are charged on your renewal date unless you cancel beforehand
• Renewal charges are processed automatically to your payment method on file
• You will receive an email reminder 7 days before renewal

**4.2 Refunds Do NOT Apply to Auto-Billing**

⚠️ **Critical: Refunds are only available for your FIRST payment within 7 days.**

Subsequent billing cycles are NOT refundable because:
• You've had ongoing access to the service
• You've received continuous value throughout the billing period
• Auto-renewal is disclosed at signup
• You can cancel anytime before the next billing cycle

**Example Scenarios:**

**✅ Refundable:**
• Day 1: You subscribe for $20/month
• Day 3: You request a refund (haven't used tax features)
• Result: Full refund issued

**❌ NOT Refundable:**
• Day 1: You subscribe for $20/month
• Day 15: You request a refund
• Result: Outside 7-day window - no refund

**❌ NOT Refundable:**
• Day 1: You subscribe for $20/month
• Day 5: You use CGT Optimizer
• Day 6: You request a refund
• Result: Premium feature used - no refund

**❌ NOT Refundable:**
• Month 1: You subscribe for $20/month
• Month 2: Auto-renewal charges $20
• Month 2, Day 3: You request a refund
• Result: 7-day window only applies to first payment - no refund

**4.3 How to Cancel to Avoid Future Charges**

To stop auto-billing:

**Method 1: Account Settings**
1. Log in to your account
2. Go to Settings → Subscription Management
3. Click "Cancel Subscription"
4. Confirm cancellation

**Method 2: Email**
Email: accounts@verafyai.com.au
Subject: Cancel Subscription - [Your Account Email]

**Cancellation Timing:**
• Cancel anytime before your next billing date
• Access continues until the end of your current billing period
• No partial refunds for unused time in current period
• No cancellation fees or penalties

**Email Notifications:**
• Confirmation sent immediately upon cancellation
• Reminder of when access will end
• No further charges after current period expires`
    },
    {
      icon: Clock,
      title: "5. Timing and Deadlines",
      content: `**5.1 The 7-Day Window**

The 7-day refund window:
• Starts: The moment your payment is processed (not when you sign up for trial)
• Ends: Exactly 7 calendar days later at 11:59 PM AEDT/AEST
• Includes: Weekends and public holidays
• Request Deadline: Must submit refund request within 7 days

**Example:**
• Payment processed: Monday, January 13, 2026 at 2:00 PM
• 7-day window ends: Monday, January 20, 2026 at 11:59 PM
• Request must be submitted: On or before January 20, 2026 at 11:59 PM

**5.2 Free Trial Period**

If you start with a free trial:
• The 7-day refund window starts when your FIRST PAYMENT is processed (after trial ends)
• NOT from when you started the trial
• Trial period is separate from refund window

**Example:**
• Trial starts: January 1, 2026
• Trial ends: January 14, 2026
• First payment: January 15, 2026
• 7-day refund window: January 15 - January 22, 2026

**5.3 Refund Processing Time**

Once approved:
• Review: 1-2 business days
• Processing: 3-5 business days
• Total: 5-7 business days
• Confirmation: Email sent when complete

**5.4 Late Requests**

Requests submitted after the 7-day window:
• Are evaluated on a case-by-case basis
• Generally not approved unless exceptional circumstances
• May be considered for account credit instead of refund
• Contact accounts@verafyai.com.au to discuss`
    },
    {
      icon: DollarSign,
      title: "6. Refund Amounts and Methods",
      content: `**6.1 What's Refunded**

Full refunds include:
• Subscription fee paid (100%)
• GST component (100%)
• Total amount charged

**6.2 What's NOT Refunded**

❌ Payment processing fees charged by Stripe (typically 1.75% + $0.30)
❌ Bank transfer fees (if applicable)
❌ Currency conversion fees (if applicable)
❌ Time and value already received from service usage

**Example:**
You paid $20.00 for a monthly subscription.
• Stripe fee: ~$0.65
• Refund to you: $19.35 (may vary)
• We absorb the processing cost difference

**6.3 Refund Methods**

Refunds are issued to the original payment method:

**Credit/Debit Cards:**
• Processed via Stripe
• Appears as a credit on your statement
• May show as "VERAFYAI REFUND" or "AXIENT AI"
• Takes 5-7 business days to appear

**Bank Transfers:**
• Refunded to the bank account used for payment
• Requires bank details verification
• May take 5-10 business days

**PayPal (if available):**
• Refunded to PayPal account
• Usually appears within 3-5 business days

**6.4 Failed Refunds**

If a refund fails:
• We will contact you via email
• May request updated payment details
• Can issue as account credit if preferred
• Will work with you to resolve

**6.5 Account Credit Option**

Instead of a refund, you may choose:
• Account credit for future use
• Applied to next billing cycle
• No expiration date
• Can be transferred if you upgrade/downgrade tiers

This is ideal if you want to try the service again later.`
    },
    {
      icon: AlertTriangle,
      title: "7. Special Circumstances",
      content: `**7.1 Duplicate Charges**

If you are charged twice for the same subscription:
• Full refund of duplicate charge
• No time restrictions apply
• Contact accounts@verafyai.com.au immediately
• Usually resolved within 24 hours

**7.2 Unauthorized Charges**

If you believe a charge was unauthorized:
• Contact us immediately: accounts@verafyai.com.au
• We will investigate and resolve promptly
• May request additional verification
• Escalate to your bank if necessary

**7.3 Billing Errors**

If we made a billing error:
• Full refund of incorrect amount
• Correct charge applied (if applicable)
• No penalties or fees
• Email confirmation provided

**7.4 Service Outages**

If VerafyAI experiences significant downtime:
• We may offer pro-rated credits
• Evaluated on case-by-case basis
• Must be substantial outage (e.g., >24 hours)
• Does not apply to scheduled maintenance

**7.5 Account Termination by VerafyAI**

If we terminate your account for violations:
• No refunds are provided
• Outstanding amounts still due
• Access ends immediately
• See Terms of Service for details

**7.6 Exceptional Circumstances**

We may consider refunds outside standard policy for:
• Medical emergencies
• Death of account holder
• Financial hardship

Contact: accounts@verafyai.com.au with documentation.
Evaluated on a case-by-case basis at our discretion.`
    },
    {
      icon: CheckCircle,
      title: "8. Upgrade, Downgrade, and Plan Changes",
      content: `**8.1 Upgrading Plans**

When you upgrade (e.g., Starter → Standard):
• Charged pro-rated amount immediately
• New plan features available instantly
• Billing date remains the same
• No refunds on upgrade charges

**8.2 Downgrading Plans**

When you downgrade (e.g., Pro → Standard):
• Change takes effect at next billing cycle
• Continue to enjoy current plan until then
• Charged lower amount on next renewal
• No refunds for unused time in current period

**8.3 Founding Member Status**

If you're a founding member:
• 50% discount applies to any tier
• Refund policy remains the same
• Discount preserved after refund if you return during founding member period
• May lose founding member status if you cancel (see Terms of Service)

**8.4 Annual vs. Monthly Billing**

**Annual Plans:**
• 7-day refund window applies to full annual amount
• No partial refunds after 7 days
• Cannot switch to monthly mid-term without forfeiting remaining time
• Better value but less flexibility

**Monthly Plans:**
• 7-day refund on first month only
• Can cancel anytime before next month
• More flexibility
• Slightly higher per-month cost`
    },
    {
      icon: FileText,
      title: "9. How to Avoid Needing a Refund",
      content: `**9.1 Use the Free Trial**

Before paying:
• Sign up for our 14-day free trial
• No credit card required
• Experience full Pro features
• Decide if it's right for you

**9.2 Start with a Lower Tier**

Not sure which plan you need?
• Start with Starter ($5/month)
• Upgrade anytime if you need more
• Lower financial risk
• Keep your founding member discount

**9.3 Read Feature Descriptions**

Before using premium features:
• Understand what makes features "premium"
• Tax features void refund eligibility
• Check "Pricing" page for tier details
• Ask support if unsure: support@verafyai.com.au

**9.4 Contact Support First**

Having issues or questions?
• Email: support@verafyai.com.au before requesting refund
• We often resolve issues quickly
• May extend trial or provide account credit
• We want you to succeed with VerafyAI

**9.5 Review Our Documentation**

Resources to help you succeed:
• FAQ section: /faq
• Documentation: /docs
• Video tutorials (coming soon)
• Feature guides in-app`
    },
    {
      icon: AlertTriangle,
      title: "10. Refund Abuse Prevention",
      content: `**10.1 Fair Use Policy**

To ensure fairness for all users:
• One refund per customer per 12-month period
• Repeated refund requests may be declined
• Pattern of abuse may result in account restrictions
• We reserve the right to refuse service to repeat refunders

**10.2 Tracking and Enforcement**

We monitor for abuse patterns:
• Multiple signups with different emails
• Using premium features then requesting refund
• Requesting refund after extracting all tax data
• "Serial refunders" across multiple accounts

**Consequences:**
• Refund request denied
• Account may be suspended
• Future signups may be restricted
• Legal action for fraud if applicable

**10.3 Good Faith**

This policy is designed for genuine cases:
• We trust our users to act in good faith
• Refunds are for legitimate dissatisfaction
• Not for "free consulting" via tax features
• Please respect the policy`
    },
    {
      icon: Mail,
      title: "11. Contact and Support",
      content: `**11.1 Billing Questions**

Email: accounts@verafyai.com.au
Response Time: Within 2 business days

**11.2 Refund Requests**

Email: accounts@verafyai.com.au
Subject: Refund Request - [Your Account Email]

Required Information:
• Account email address
• Payment date and amount
• Reason (optional but helpful)
• Confirmation you haven't used excluded features

**11.3 Disputes**

If you disagree with a refund decision:

**Step 1:** Email enquiries@verafyai.com.au
Response: Within 5 business days

**Step 2:** External resolution:
• ACCC (consumer issues): www.accc.gov.au
• Your bank's dispute resolution
• Small claims tribunal (for monetary disputes)

**11.4 General Support**

Email: support@verafyai.com.au
Use for:
• Technical issues before requesting refund
• Feature questions
• Account problems
• Billing questions (non-refund)

**11.5 Emergency Contact**

For urgent billing issues (duplicate charges, unauthorized access):
Email: enquiries@verafyai.com.au
Response: Within 24 hours (often faster)`
    },
    {
      icon: FileText,
      title: "12. Legal and Compliance",
      content: `**12.1 Australian Consumer Law**

Under Australian Consumer Law:
• You have consumer guarantees
• Services must be fit for purpose
• Services must match descriptions
• These rights cannot be excluded

Our refund policy works alongside, not in place of, your consumer rights.

**12.2 Consumer Guarantees**

If our service:
• Has a major failure
• Doesn't match what we promised
• Isn't fit for purpose

You may be entitled to:
• Refund or replacement
• Compensation for damage
• Repair or remedy

Contact us to discuss: enquiries@verafyai.com.au

**12.3 ACCC Compliance**

This refund policy complies with:
• Australian Consumer Law
• ACCC guidelines on refunds
• Competition and Consumer Act 2010

**12.4 Dispute Resolution**

See Section 11.3 for escalation process.

**12.5 Governing Law**

This policy is governed by:
• Laws of New South Wales, Australia
• Commonwealth of Australia laws
• Subject to courts of NSW jurisdiction

**12.6 Policy Updates**

We may update this policy:
• With 30 days' notice to existing customers
• Immediate effect for new customers
• Email notification sent
• Posted on website with "Last Updated" date

Continued use after changes = acceptance of new terms.`
    },
    {
      icon: CheckCircle,
      title: "13. Summary Checklist",
      content: `**Before Requesting a Refund:**

✅ Confirm you're within 7 days of first payment
✅ Confirm you have NOT used CGT Optimizer or tax reporting features
✅ Try contacting support first: support@verafyai.com.au
✅ Review if your issue can be resolved another way
✅ Understand access ends immediately upon refund
✅ Have your payment details and account email ready

**To Request a Refund:**

1. Email accounts@verafyai.com.au within 7 days
2. Include your account email and payment date
3. Confirm you haven't used excluded features
4. Wait for review (1-2 business days)
5. Receive refund (5-7 business days if approved)

**To Cancel Without Refund:**

1. Log in → Settings → Subscription Management
2. Click "Cancel Subscription"
3. Confirm cancellation
4. Access continues until period ends
5. No further charges

**Remember:**

• Refunds = first payment within 7 days only
• Auto-billing is NOT refundable
• Tax features void refund eligibility
• When in doubt, contact us first`
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
                  <DollarSign className="inline-block w-4 h-4 mr-2 -mt-1" />
                  Trust Centre
                </span>
              </motion.div>

              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Refund{' '}
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
                7-day money-back guarantee with clear terms and conditions
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

              {/* Quick Reference Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto"
              >
                <div
                  className="p-4 rounded-xl border-2"
                  style={{
                    background: isDark ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.05)',
                    borderColor: 'rgba(34, 197, 94, 0.3)',
                  }}
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    ✅ Refundable
                  </p>
                  <p className="text-xs text-green-400">
                    Within 7 days, no premium features used
                  </p>
                </div>

                <div
                  className="p-4 rounded-xl border-2"
                  style={{
                    background: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)',
                    borderColor: 'rgba(239, 68, 68, 0.3)',
                  }}
                >
                  <XCircle className="w-6 h-6 text-red-500 mx-auto mb-2" />
                  <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    ❌ Not Refundable
                  </p>
                  <p className="text-xs text-red-400">
                    CGT Optimizer or tax features used
                  </p>
                </div>

                <div
                  className="p-4 rounded-xl border-2"
                  style={{
                    background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                  }}
                >
                  <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    ⏰ 7-Day Window
                  </p>
                  <p className="text-xs text-blue-400">
                    First payment only, not auto-renewals
                  </p>
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
                        } else if (paragraph.startsWith('✅') || paragraph.startsWith('❌') || paragraph.startsWith('⚠️') || paragraph.startsWith('⏰')) {
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
                Need Help With a Refund?
              </h3>
              <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Contact our billing team or view related policies
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="mailto:accounts@verafyai.com.au"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  }}
                >
                  <Mail className="inline-block w-4 h-4 mr-2 -mt-1" />
                  Email Billing Team
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
                  href="/faq"
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
                  View FAQs
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}