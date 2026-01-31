import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  /** Enable motion animations (entrance + hover effects) */
  animated?: boolean;
  /** Animation delay in seconds (only used when animated=true) */
  delay?: number;
  /** Enable cursor-following glow effect */
  cursorGlow?: boolean;
}

/**
 * GlowCard Component
 *
 * A reusable card component with a glowing border effect.
 * Features cursor-tracking glow for an energizing interaction.
 *
 * @param children - Card content
 * @param className - Additional CSS classes
 * @param highlight - Whether to show highlighted/emphasized style
 * @param animated - Enable framer-motion animations
 * @param delay - Animation delay (when animated=true)
 * @param cursorGlow - Enable cursor-following border glow
 */
export function GlowCard({
  children,
  className = '',
  highlight = false,
  animated = false,
  delay = 0,
  cursorGlow = true
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !cursorGlow) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, [cursorGlow]);

  const baseClassName = `relative rounded-2xl backdrop-blur-sm overflow-hidden ${className}`;

  const style: React.CSSProperties = {
    background: highlight
      ? 'linear-gradient(135deg, rgba(8, 145, 178, 0.3), rgba(6, 182, 212, 0.2))'
      : 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9))',
    border: highlight ? '2px solid rgba(34, 211, 238, 0.6)' : '1px solid rgba(34, 211, 238, 0.2)',
    boxShadow: highlight
      ? '0 0 50px rgba(34, 211, 238, 0.25), inset 0 1px 0 rgba(255,255,255,0.1)'
      : '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
  };

  const cursorGlowOverlay = cursorGlow && isHovered && (
    <div
      className="absolute pointer-events-none transition-opacity duration-150"
      style={{
        left: cursorPosition.x - 100,
        top: cursorPosition.y - 100,
        width: 200,
        height: 200,
        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, rgba(34, 211, 238, 0.1) 40%, transparent 70%)',
        filter: 'blur(20px)',
        opacity: isHovered ? 1 : 0,
      }}
    />
  );

  const highlightOverlay = highlight && (
    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 ${animated ? 'animate-pulse' : ''}`} />
    </div>
  );

  if (animated) {
    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.3, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
        className={baseClassName}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cursorGlowOverlay}
        {highlightOverlay}
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }

  return (
    <div
      ref={cardRef}
      className={`${baseClassName} transition-all duration-150 hover:scale-[1.02] hover:-translate-y-1`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cursorGlowOverlay}
      {highlightOverlay}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
