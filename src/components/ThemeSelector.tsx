import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
import { useState } from "react";

export type ThemeType = 'verafy' | 'pink' | 'pride';

interface ThemeSelectorProps {
  currentTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
  isDark: boolean;
}

export const ThemeSelector = ({ currentTheme, onThemeChange, isDark }: ThemeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      id: 'verafy' as ThemeType,
      name: 'Verafy',
      description: 'Official brand theme',
      colors: ['#22D3EE', '#06B6D4', '#60A5FA'],
      gradient: 'from-cyan-400 via-cyan-500 to-blue-500'
    },
    {
      id: 'pink' as ThemeType,
      name: 'Pink',
      description: 'Vibrant pink theme',
      colors: ['#EC4899', '#DB2777', '#F472B6'],
      gradient: 'from-pink-400 via-pink-500 to-pink-600'
    },
    {
      id: 'pride' as ThemeType,
      name: 'Pride',
      description: 'Rainbow celebration',
      colors: ['#E879F9', '#C026D3', '#A78BFA'],
      gradient: 'from-fuchsia-400 via-purple-400 to-violet-400'
    }
  ];

  return (
    <div className="relative">
      {/* Theme Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-10 h-10 rounded-lg border-2 transition-all duration-300 ${
          isDark
            ? 'bg-slate-900 border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30'
            : 'bg-white border-slate-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20'
        }`}
        title="Change Theme"
      >
        <div className={`w-full h-full rounded-md bg-gradient-to-r ${
          currentTheme === 'verafy' ? 'from-cyan-400 to-blue-500' :
          currentTheme === 'pink' ? 'from-pink-400 to-pink-600' :
          'from-fuchsia-400 via-purple-400 to-violet-400'
        }`} />
      </button>

      {/* Theme Picker Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`absolute right-0 bottom-full mb-2 w-72 rounded-xl border-2 backdrop-blur-xl shadow-2xl z-50 overflow-hidden ${
                isDark
                  ? 'bg-slate-900/95 border-cyan-500/30'
                  : 'bg-white/95 border-slate-300'
              }`}
            >
              <div className={`p-3 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <h3 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Choose Theme
                </h3>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Select your preferred color scheme
                </p>
              </div>

              <div className="p-2 space-y-1">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      onThemeChange(theme.id);
                      setIsOpen(false);
                    }}
                    className={`w-full p-3 rounded-lg transition-all duration-200 text-left group ${
                      currentTheme === theme.id
                        ? isDark
                          ? 'bg-slate-800 border-2 border-cyan-500/50'
                          : 'bg-slate-50 border-2 border-cyan-400'
                        : isDark
                          ? 'hover:bg-slate-800/50 border-2 border-transparent'
                          : 'hover:bg-slate-50 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Color Preview */}
                      <div className="relative">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${theme.gradient} shadow-lg`} />
                        {currentTheme === theme.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                              <Check className="w-4 h-4 text-slate-900" />
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Theme Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className={`text-sm font-semibold ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}>
                            {theme.name}
                          </h4>
                          {theme.id === 'verafy' && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              isDark
                                ? 'bg-cyan-500/20 text-cyan-400'
                                : 'bg-cyan-100 text-cyan-700'
                            }`}>
                              Default
                            </span>
                          )}
                        </div>
                        <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {theme.description}
                        </p>
                      </div>
                    </div>

                    {/* Color Swatches */}
                    <div className="flex gap-1 mt-2 ml-13">
                      {theme.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-6 h-1.5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              <div className={`p-3 border-t text-center ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  Themes sync across web, iOS & Android
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// Also export as default for compatibility
export default ThemeSelector;