import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  isDark: boolean;
  animate?: boolean;
  icon?: ReactNode;
  title?: string;
}

export function GlassCard({
  children,
  delay = 0,
  className = '',
  isDark,
  animate = true,
  icon,
  title,
}: GlassCardProps) {
  const cardContent = (
    <>
      {/* Icon and Title Header */}
      {(icon || title) && (
        <div className="flex items-start gap-4 mb-6">
          {icon && (
            <div
              className="p-3 rounded-xl"
              style={{
                background: 'rgba(var(--theme-primary-rgb), 0.1)',
              }}
            >
              {icon}
            </div>
          )}
          {title && (
            <h2
              className={`text-2xl md:text-3xl ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {title}
            </h2>
          )}
        </div>
      )}

      {/* Card Content */}
      {children}
    </>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className={`backdrop-blur-xl border-2 rounded-2xl p-8 ${className}`}
        style={{
          background: isDark
            ? 'rgba(15, 23, 42, 0.6)'
            : 'rgba(255, 255, 255, 0.8)',
          borderColor: 'var(--theme-primary-alpha)',
        }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <div
      className={`backdrop-blur-xl border-2 rounded-2xl p-8 ${className}`}
      style={{
        background: isDark
          ? 'rgba(15, 23, 42, 0.6)'
          : 'rgba(255, 255, 255, 0.8)',
        borderColor: 'var(--theme-primary-alpha)',
      }}
    >
      {cardContent}
    </div>
  );
}
