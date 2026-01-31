import { useState } from 'react';
import { FAQSection } from '../components/FAQSection';
import { PageHero } from '../components/PageHero';
import { GlassCard } from '../components/GlassCard';
import { motion } from 'framer-motion';
import {
  Search,
  MessageCircle,
  FileText,
  Users,
  BookOpen,
  HelpCircle,
  ChevronRight,
  Lock,
  AlertCircle,
  CheckCircle,
  Send,
} from 'lucide-react';
import { ThemedButton } from '../components/ui/themed-button';
import { CHART_COLORS } from '../config/theme';

interface FAQPageProps {
  isDark: boolean;
}

export function FAQPage({ isDark }: FAQPageProps) {
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [showAccountHelp, setShowAccountHelp] = useState(false);
  const [ticketType, setTicketType] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [whatTried, setWhatTried] = useState('');

  // Mock auth state - in production from AuthContext
  const isAuthenticated = false;

  const selfServeResources = [
    {
      icon: Search,
      title: 'Search FAQs',
      description: 'Find answers to common questions instantly',
      action: 'Search below',
      primary: true,
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Detailed guides and how-to articles',
      action: 'Browse Docs',
      link: '/docs',
    },
    {
      icon: BookOpen,
      title: 'Financial Glossary',
      description: 'Investment terms explained simply',
      action: 'View Glossary',
      link: '/glossary',
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Get answers from other investors',
      action: 'Visit Forum',
      requiresAuth: true,
    },
  ];

  const ticketTypes = [
    { value: 'bug', label: 'Bug Report', description: 'Something is broken or not working correctly' },
    { value: 'billing', label: 'Billing Issue', description: 'Payment, subscription, or refund questions' },
    { value: 'data', label: 'Data Issue', description: 'Missing or incorrect portfolio data' },
    { value: 'feature', label: 'Feature Request', description: 'Suggest a new feature or improvement' },
    { value: 'other', label: 'Other', description: 'Issue not covered above' },
  ];

  return (
    <>
      <PageHero
        title="Help"
        gradientWord="Centre"
        subtitle="Find answers, get support, and learn how to make the most of Verafy"
        isDark={isDark}
      />

      <div className="relative min-h-screen">
        {/* Self-Serve Resources - Level 0 */}
        <div className="relative py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Find Answers Quickly
              </h2>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                Most questions can be answered with our self-serve resources
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {selfServeResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard isDark={isDark} className="h-full text-center">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                        style={{ background: resource.primary ? CHART_COLORS.primary : 'rgba(34, 211, 238, 0.1)' }}
                      >
                        <Icon className="w-6 h-6" style={{ color: resource.primary ? 'white' : CHART_COLORS.primary }} />
                      </div>
                      <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {resource.title}
                      </h3>
                      <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {resource.description}
                      </p>
                      {resource.link ? (
                        <a
                          href={resource.link}
                          className="text-sm font-medium inline-flex items-center gap-1"
                          style={{ color: CHART_COLORS.primary }}
                        >
                          {resource.action}
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      ) : resource.requiresAuth ? (
                        <span className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          <Lock className="w-3 h-3 inline mr-1" />
                          Sign in required
                        </span>
                      ) : (
                        <span className="text-sm" style={{ color: CHART_COLORS.primary }}>
                          {resource.action} ↓
                        </span>
                      )}
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FAQ Section - Searchable */}
        <FAQSection isDark={isDark} />

        {/* AI Chatbot - Level 1 */}
        <div className="relative py-12">
          <div className="max-w-3xl mx-auto px-6">
            <GlassCard isDark={isDark} className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" style={{ color: CHART_COLORS.primary }} />
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Ask Vera
              </h3>
              <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Our AI assistant can help answer your questions 24/7. Try asking about features,
                how things work, or general investment concepts.
              </p>
              <ThemedButton variant="primary">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Chat with Vera
              </ThemedButton>
            </GlassCard>
          </div>
        </div>

        {/* Still Need Help - Level 2 */}
        <div className="relative py-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Still Need Help?
              </h2>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                If you've searched our FAQs and chatted with Vera but still need assistance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Submit Ticket - Auth Required */}
              <GlassCard isDark={isDark}>
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(34, 211, 238, 0.1)' }}
                  >
                    <HelpCircle className="w-6 h-6" style={{ color: CHART_COLORS.primary }} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Submit a Support Request
                    </h3>
                    <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      For bugs, billing issues, or account-specific problems that require human assistance.
                    </p>
                    {isAuthenticated ? (
                      <ThemedButton
                        variant="outline"
                        onClick={() => setShowTicketForm(!showTicketForm)}
                      >
                        {showTicketForm ? 'Hide Form' : 'Open Ticket Form'}
                      </ThemedButton>
                    ) : (
                      <div>
                        <ThemedButton variant="outline" className="opacity-75">
                          <Lock className="w-4 h-4 mr-2" />
                          Sign In to Submit
                        </ThemedButton>
                        <p className={`text-xs mt-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          Support tickets require an account so we can help you with your specific issue.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>

              {/* Account Access Help - No Auth Required */}
              <GlassCard isDark={isDark}>
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(249, 115, 22, 0.1)' }}
                  >
                    <AlertCircle className="w-6 h-6" style={{ color: '#f97316' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Can't Access Your Account?
                    </h3>
                    <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      If you're having trouble signing in, creating an account, or resetting your password.
                    </p>
                    <ThemedButton
                      variant="outline"
                      onClick={() => setShowAccountHelp(!showAccountHelp)}
                    >
                      {showAccountHelp ? 'Hide Form' : 'Get Account Help'}
                    </ThemedButton>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Ticket Form - Shown when authenticated and clicked */}
            {showTicketForm && isAuthenticated && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6"
              >
                <GlassCard isDark={isDark}>
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Submit Support Request
                  </h3>

                  {/* Pre-qualification notice */}
                  <div className={`p-4 rounded-lg mb-6 ${isDark ? 'bg-cyan-900/20' : 'bg-cyan-50'}`}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: CHART_COLORS.primary }} />
                      <div>
                        <p className={`text-sm font-medium ${isDark ? 'text-cyan-200' : 'text-cyan-800'}`}>
                          Before submitting, please confirm:
                        </p>
                        <ul className={`text-sm mt-2 space-y-1 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
                          <li>• I've searched the FAQs above</li>
                          <li>• I've tried asking Vera (chatbot)</li>
                          <li>• My issue requires human assistance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Issue Type *
                      </label>
                      <select
                        value={ticketType}
                        onChange={(e) => setTicketType(e.target.value)}
                        title="Select issue type"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          isDark
                            ? 'bg-slate-800 border-slate-600 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="">Select issue type...</option>
                        {ticketTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label} - {type.description}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        What have you already tried? *
                      </label>
                      <textarea
                        value={whatTried}
                        onChange={(e) => setWhatTried(e.target.value)}
                        placeholder="Describe the steps you took to resolve this issue..."
                        rows={3}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          isDark
                            ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-500'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                      <p className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Minimum 50 characters required
                      </p>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Describe your issue *
                      </label>
                      <textarea
                        value={ticketDescription}
                        onChange={(e) => setTicketDescription(e.target.value)}
                        placeholder="Please provide details about your issue, including any error messages..."
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          isDark
                            ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-500'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    <div className="flex justify-end gap-3">
                      <ThemedButton variant="outline" onClick={() => setShowTicketForm(false)}>
                        Cancel
                      </ThemedButton>
                      <ThemedButton
                        variant="primary"
                        disabled={!ticketType || whatTried.length < 50 || !ticketDescription}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Submit Request
                      </ThemedButton>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {/* Account Help Form - No Auth Required */}
            {showAccountHelp && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6"
              >
                <GlassCard isDark={isDark}>
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Account Access Help
                  </h3>

                  <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Having trouble accessing your account? Select your issue below:
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      { id: 'forgot-password', label: 'I forgot my password', action: 'Use password reset' },
                      { id: 'no-email', label: "I'm not receiving reset emails", action: 'Check spam folder first' },
                      { id: 'cant-signup', label: "I can't create a new account", action: 'Describe the error' },
                      { id: 'locked-out', label: 'My account appears to be locked', action: 'We can help' },
                    ].map((issue) => (
                      <div
                        key={issue.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          isDark
                            ? 'border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/50'
                            : 'border-slate-200 hover:border-cyan-500/50 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={isDark ? 'text-white' : 'text-slate-900'}>{issue.label}</span>
                          <span className="text-sm" style={{ color: CHART_COLORS.primary }}>
                            {issue.action} →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={`p-4 rounded-lg border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <strong>Still stuck?</strong> Email us at{' '}
                      <a href="mailto:accounts@verafyai.com.au" style={{ color: CHART_COLORS.primary }}>
                        accounts@verafyai.com.au
                      </a>
                      {' '}with your registered email address and a description of the issue.
                      Account access requests are typically resolved within 24 hours.
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="relative py-8">
          <div className="max-w-3xl mx-auto px-6">
            <div className={`text-center text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              <p>
                Our support team reviews tickets within 1-2 business days.
                Priority support is available for Standard and Pro plan subscribers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
