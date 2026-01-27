import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface InteractiveCursorProps {
  isDark: boolean;
}

export function InteractiveCursor({ isDark }: InteractiveCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          mixBlendMode: isDark ? 'screen' : 'multiply'
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.9 : 0.6,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
          style={{
            background: 'var(--theme-primary)',
            boxShadow: '0 0 30px var(--theme-primary), 0 0 60px var(--theme-glow)'
          }}
        />
      </motion.div>

      {/* Secondary glow */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          mixBlendMode: isDark ? 'screen' : 'multiply'
        }}
        animate={{
          scale: isHovering ? 3.5 : 2,
          opacity: isDark ? 0.3 : 0.2,
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background: 'var(--theme-secondary)',
            boxShadow: '0 0 40px var(--theme-secondary), 0 0 80px var(--theme-glow)'
          }}
        />
      </motion.div>
    </>
  );
}