import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle } from 'lucide-react';

interface GlossaryTooltipProps {
  term: string;
  definition: string;
  isDark?: boolean;
  inline?: boolean;
}

export function GlossaryTooltip({ term, definition, isDark = true, inline = true }: GlossaryTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (inline) {
    return (
      <span
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          className="border-b-2 border-dotted cursor-help"
          style={{
            borderColor: 'var(--theme-primary)',
          }}
        >
          {term}
        </span>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 pointer-events-none"
            >
              <div
                className="backdrop-blur-xl border-2 rounded-lg p-3 shadow-2xl"
                style={{
                  background: isDark
                    ? 'rgba(15, 23, 42, 0.98)'
                    : 'rgba(255, 255, 255, 0.98)',
                  borderColor: 'var(--theme-primary)',
                  boxShadow: '0 8px 32px var(--theme-glow)',
                }}
              >
                <div className="flex items-start gap-2 mb-2">
                  <HelpCircle
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--theme-primary)' }}
                  />
                  <span
                    className={`font-semibold text-sm ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {term}
                  </span>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {definition}
                </p>
                {/* Arrow */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
                  style={{
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop: `6px solid var(--theme-primary)`,
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </span>
    );
  }

  // Icon-based tooltip (for standalone use)
  return (
    <span
      className="relative inline-block ml-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <HelpCircle
        className="w-4 h-4 cursor-help inline-block"
        style={{ color: 'var(--theme-primary-alpha)' }}
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 pointer-events-none"
          >
            <div
              className="backdrop-blur-xl border-2 rounded-lg p-3 shadow-2xl"
              style={{
                background: isDark
                  ? 'rgba(15, 23, 42, 0.98)'
                  : 'rgba(255, 255, 255, 0.98)',
                borderColor: 'var(--theme-primary)',
                boxShadow: '0 8px 32px var(--theme-glow)',
              }}
            >
              <div className="flex items-start gap-2 mb-2">
                <HelpCircle
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--theme-primary)' }}
                />
                <span
                  className={`font-semibold text-sm ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {term}
                </span>
              </div>
              <p
                className={`text-xs leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {definition}
              </p>
              {/* Arrow */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
                style={{
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: `6px solid var(--theme-primary)`,
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}