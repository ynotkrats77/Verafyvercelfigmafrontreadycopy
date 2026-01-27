import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

interface BackToTopProps {
  isDark: boolean;
}

export function BackToTop({ isDark }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 p-3 rounded-full transition-all duration-300 shadow-lg text-white"
          style={{
            background: `linear-gradient(to right, var(--theme-primary-dark), var(--theme-secondary))`
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: isDark
              ? "0 10px 30px rgba(34, 211, 238, 0.5)"
              : "0 10px 30px rgba(34, 211, 238, 0.4)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}