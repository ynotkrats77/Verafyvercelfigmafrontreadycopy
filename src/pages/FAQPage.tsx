import { FAQSection } from '../components/FAQSection';
import { PageHero } from '../components/PageHero';
import { GlassCard } from '../components/GlassCard';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, FileText } from 'lucide-react';

interface FAQPageProps {
  isDark: boolean;
}

export function FAQPage({ isDark }: FAQPageProps) {
  return (
    <>
      {/* Hero Section - NOW USING REUSABLE COMPONENT! */}
      <PageHero
        title="Frequently Asked"
        gradientWord="Questions"
        subtitle="Everything you need to know about Verafy AI"
        isDark={isDark}
      />

      <div className="relative min-h-screen">
        {/* FAQ Section */}
        <FAQSection isDark={isDark} />

        {/* Additional Help Section */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Help Card 1 - NOW USING GlassCard! */}
              <GlassCard isDark={isDark} icon={<Mail className="w-6 h-6" style={{ color: 'var(--theme-primary)' }} />}>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Email Support
                </h3>
                <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Get help from our support team
                </p>
                <a
                  href="mailto:support@verafyai.com.au"
                  className="text-sm font-medium"
                  style={{ color: 'var(--theme-primary)' }}
                >
                  support@verafyai.com.au
                </a>
              </GlassCard>

              {/* Help Card 2 */}
              <GlassCard isDark={isDark} icon={<MessageCircle className="w-6 h-6" style={{ color: 'var(--theme-primary)' }} />} delay={0.1}>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Live Chat
                </h3>
                <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Chat with Vera AI instantly
                </p>
                <a
                  href="/chat"
                  className="text-sm font-medium"
                  style={{ color: 'var(--theme-primary)' }}
                >
                  Start Chat →
                </a>
              </GlassCard>

              {/* Help Card 3 */}
              <GlassCard isDark={isDark} icon={<FileText className="w-6 h-6" style={{ color: 'var(--theme-primary)' }} />} delay={0.2}>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Documentation
                </h3>
                <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Browse our help articles
                </p>
                <a
                  href="/docs"
                  className="text-sm font-medium"
                  style={{ color: 'var(--theme-primary)' }}
                >
                  View Docs →
                </a>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}