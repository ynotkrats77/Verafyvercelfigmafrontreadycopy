import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface InteractiveCursorProps {
  isDark: boolean;
}

export function InteractiveCursor({ isDark }: InteractiveCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a, [role="button"], input, select, textarea')) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  }, []);

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp]);

  return (
    <>
      {/* Main cursor glow - snappy spring response */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 0.8 : isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.95 : 0.7,
        }}
        transition={{
          x: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
          y: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
          scale: { duration: 0.1 },
          opacity: { duration: 0.1 }
        }}
        style={{ mixBlendMode: isDark ? 'screen' : 'multiply' }}
      >
        <div
          className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'var(--theme-primary)',
            filter: 'blur(8px)',
            boxShadow: '0 0 20px var(--theme-primary), 0 0 40px var(--theme-glow)'
          }}
        />
      </motion.div>

      {/* Secondary glow - slightly lagged for depth */}
      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 1.5 : isHovering ? 3 : 1.8,
          opacity: isDark ? 0.35 : 0.25,
        }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
          y: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
          scale: { duration: 0.15 },
          opacity: { duration: 0.15 }
        }}
        style={{ mixBlendMode: isDark ? 'screen' : 'multiply' }}
      >
        <div
          className="w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'var(--theme-secondary)',
            filter: 'blur(24px)',
            boxShadow: '0 0 30px var(--theme-secondary), 0 0 60px var(--theme-glow)'
          }}
        />
      </motion.div>

      {/* Tertiary ambient glow - slowest, largest */}
      <motion.div
        className="fixed pointer-events-none z-30"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 4 : 2.5,
          opacity: isDark ? 0.15 : 0.1,
        }}
        transition={{
          x: { type: "spring", stiffness: 150, damping: 35, mass: 1.2 },
          y: { type: "spring", stiffness: 150, damping: 35, mass: 1.2 },
          scale: { duration: 0.2 },
          opacity: { duration: 0.2 }
        }}
        style={{ mixBlendMode: isDark ? 'screen' : 'multiply' }}
      >
        <div
          className="w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, var(--theme-glow) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>
    </>
  );
}
