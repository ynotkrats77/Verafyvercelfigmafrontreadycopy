import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

interface FloatingParticlesProps {
  isDark: boolean;
  count?: number;
}

export function FloatingParticles({ isDark, count = 30 }: FloatingParticlesProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => {
        const particleX = (particle.initialX / 100) * window.innerWidth;
        const particleY = (particle.initialY / 100) * window.innerHeight;
        const distanceToMouse = Math.sqrt(
          Math.pow(mousePosition.x - particleX, 2) + 
          Math.pow(mousePosition.y - particleY, 2)
        );
        const isNearMouse = distanceToMouse < 200;
        const proximityFactor = Math.max(0, 1 - distanceToMouse / 200);
        
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
              filter: "blur(0.5px)",
              background: 'var(--theme-primary)',
              boxShadow: `0 0 ${12 + proximityFactor * 20}px var(--theme-glow-strong), 0 0 ${6 + proximityFactor * 10}px var(--theme-primary)`,
            }}
            animate={{
              y: [0, -100, 0],
              x: isNearMouse 
                ? [0, (mousePosition.x - particleX) * 0.1, 0]
                : [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.8, 0.8, 0.3],
              scale: [0.8, 1 + proximityFactor * 0.8, 1 + proximityFactor * 0.8, 0.8],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
              times: [0, 0.3, 0.7, 1],
            }}
          />
        );
      })}
    </div>
  );
}