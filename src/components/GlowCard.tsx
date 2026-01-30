import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  /** Enable motion animations (entrance + hover effects) */
  animated?: boolean;
  /** Animation delay in seconds (only used when animated=true) */
  delay?: number;
}

/**
 * GlowCard Component
 *
 * A reusable card component with a glowing border effect.
 * Used across investor pages for consistent styling.
 *
 * @param children - Card content
 * @param className - Additional CSS classes
 * @param highlight - Whether to show highlighted/emphasized style
 * @param animated - Enable framer-motion animations
 * @param delay - Animation delay (when animated=true)
 */
export function GlowCard({
  children,
  className = '',
  highlight = false,
  animated = false,
  delay = 0
}: GlowCardProps) {
  const baseClassName = `relative rounded-2xl backdrop-blur-sm ${className}`;

  const style = {
    background: highlight
      ? 'linear-gradient(135deg, rgba(8, 145, 178, 0.3), rgba(6, 182, 212, 0.2))'
      : 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9))',
    border: highlight ? '2px solid rgba(34, 211, 238, 0.6)' : '1px solid rgba(34, 211, 238, 0.2)',
    boxShadow: highlight
      ? '0 0 50px rgba(34, 211, 238, 0.25), inset 0 1px 0 rgba(255,255,255,0.1)'
      : '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
  };

  const highlightOverlay = highlight && (
    <div className="absolute inset-0 rounded-2xl overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 ${animated ? 'animate-pulse' : ''}`} />
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className={baseClassName}
        style={style}
      >
        {highlightOverlay}
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }

  return (
    <div className={baseClassName} style={style}>
      {highlightOverlay}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
