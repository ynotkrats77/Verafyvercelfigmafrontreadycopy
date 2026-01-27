import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';
import { InteractiveCursor } from './InteractiveCursor';

interface PageHeroProps {
  badge?: {
    icon: LucideIcon;
    label: string;
  };
  title: string;
  gradientWord?: string;
  subtitle: string;
  metadata?: Array<{
    label: string;
    value: string;
  }>;
  isDark: boolean;
  children?: React.ReactNode;
}

export function PageHero({
  badge,
  title,
  gradientWord,
  subtitle,
  metadata,
  isDark,
  children
}: PageHeroProps) {
  return (
    <>
      {/* Background Effects */}
      <FloatingParticles isDark={isDark} />
      <InteractiveCursor isDark={isDark} />

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
            {/* Badge */}
            {badge && (
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
                  <badge.icon className="inline-block w-4 h-4 mr-2 -mt-1" />
                  {badge.label}
                </span>
              </motion.div>
            )}

            {/* Heading */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {title}
              {gradientWord && (
                <>
                  {' '}
                  <span
                    style={{
                      background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {gradientWord}
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-xl md:text-2xl max-w-3xl mx-auto mb-6 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {subtitle}
            </p>

            {/* Metadata */}
            {metadata && metadata.length > 0 && (
              <div className="flex flex-wrap gap-3 justify-center text-sm">
                {metadata.map((item, index) => (
                  <span key={index}>
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      <strong>{item.label}:</strong> {item.value}
                    </span>
                    {index < metadata.length - 1 && (
                      <span className={`mx-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        •
                      </span>
                    )}
                  </span>
                ))}
              </div>
            )}

            {/* Optional Children (for custom content) */}
            {children && <div className="mt-6">{children}</div>}
          </motion.div>
        </div>
      </div>
    </>
  );
}
