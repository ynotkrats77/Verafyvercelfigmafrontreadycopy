import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ThemedButton } from './ui/themed-button';

interface ContactCTAProps {
  topic: string;
  team: string;
  emailType: 'support' | 'enquiries' | 'accounts';
  relatedLinks?: Array<{
    label: string;
    url: string;
  }>;
  isDark: boolean;
}

const EMAIL_ADDRESSES = {
  support: 'support@verafyai.com.au',
  enquiries: 'enquiries@verafyai.com.au',
  accounts: 'accounts@verafyai.com.au',
} as const;

export function ContactCTA({
  topic,
  team,
  emailType,
  relatedLinks = [],
  isDark,
}: ContactCTAProps) {
  const email = EMAIL_ADDRESSES[emailType];

  return (
    <GlassCard isDark={isDark} className="mt-16 text-center">
      <h3
        className={`text-2xl mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}
      >
        Questions About {topic}?
      </h3>
      <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        Contact our {team} team or view related policies
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <motion.a
          href={`mailto:${email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-lg"
          style={{
            background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
          }}
        >
          <Mail className="inline-block w-4 h-4 mr-2 -mt-1" />
          Email {team}
        </motion.a>

        {relatedLinks.map((link) => (
          <motion.a
            key={link.url}
            href={link.url}
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
            {link.label}
          </motion.a>
        ))}
      </div>
    </GlassCard>
  );
}
