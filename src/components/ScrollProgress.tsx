import { motion, useScroll, useSpring } from "motion/react";

interface ScrollProgressProps {
  isDark: boolean;
}

export function ScrollProgress({ isDark }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{ 
        scaleX,
        background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary), var(--theme-primary))`
      }}
    >
      {/* Glowing effect */}
      <motion.div
        className="absolute inset-0 blur-sm"
        style={{
          background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary), var(--theme-primary))`,
          scaleX,
        }}
      />
    </motion.div>
  );
}