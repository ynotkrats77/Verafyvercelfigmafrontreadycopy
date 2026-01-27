import { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon, Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, Z_INDEX, PageType } from '../utils/constants';
import { ThemeType } from '../hooks/useTheme';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { 
  getNavLinkClasses,
  getPrimaryGradientStyle,
  scrollToTop,
} from '../utils/themeUtils';

interface NavigationProps {
  isDark: boolean;
  onToggleDark?: () => void;
  onNavigate?: (page: PageType) => void;
  theme?: ThemeType;
  onThemeChange?: (theme: ThemeType) => void;
}

export function Navigation({ isDark, onToggleDark, onNavigate, theme, onThemeChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
      setIsMobileMenuOpen(false);
      scrollToTop();
    }
  };

  const handleThemeChange = () => {
    if (!onThemeChange || !theme) return;
    
    const themes: ThemeType[] = ['verafy', 'pink', 'pride'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    onThemeChange(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    if (!theme) return null;
    
    const themeColors = {
      verafy: 'text-cyan-400',
      pink: 'text-pink-400',
      pride: 'text-purple-400'
    };
    
    return themeColors[theme];
  };

  const getThemeTitle = () => {
    if (!theme) return 'Change Theme';
    
    const themeNames = {
      verafy: 'Verafy (Cyan)',
      pink: 'Pink',
      pride: 'Pride (Purple)'
    };
    
    const themes: ThemeType[] = ['verafy', 'pink', 'pride'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    return `Switch to ${themeNames[nextTheme]} Theme`;
  };

  const navLinkClasses = getNavLinkClasses(isDark);
  const primaryGradientStyle = getPrimaryGradientStyle();

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'bg-slate-900/95 backdrop-blur-lg border-b border-theme-primary/20 shadow-lg'
              : 'bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-lg'
            : isDark
            ? 'bg-transparent'
            : 'bg-transparent'
        }`}
        style={{
          zIndex: Z_INDEX.navigation,
          ...(isScrolled && isDark ? { boxShadow: '0 4px 20px var(--theme-glow)' } : {}),
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <Logo size="md" variant="icon" colorScheme="monochrome" isDark={isDark} />
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
                style={{
                  ['--hover-color' as any]: 'var(--theme-primary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--theme-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '';
                }}
              >
                verafy ai
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              {NAV_LINKS.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.page)}
                  className="relative group px-3 py-2"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {/* Text with color transition */}
                  <span
                    className={`relative inline-block text-sm font-medium transition-colors duration-300 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--theme-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '';
                    }}
                  >
                    {link.label}
                  </span>
                  
                  {/* Animated gradient underline */}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-theme-primary to-theme-secondary group-hover:w-full transition-all duration-300 ease-out"
                    style={{ boxShadow: '0 0 8px var(--theme-glow)' }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Center: Three Toggles */}
            <div className="hidden md:flex items-center gap-3">
              {/* Dark/Light Mode Toggle */}
              <motion.div whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full transition-all ${
                    isDark
                      ? 'hover:bg-slate-800 hover:shadow-lg hover:shadow-theme-primary/20'
                      : 'hover:bg-slate-100 hover:shadow-lg hover:shadow-theme-primary/20'
                  }`}
                  onClick={onToggleDark}
                  title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                  {isDark ? (
                    <Sun className="h-4 w-4 text-slate-400 transition-colors group-hover:text-theme-primary" />
                  ) : (
                    <Moon className="h-4 w-4 text-slate-600 transition-colors group-hover:text-theme-primary" />
                  )}
                </Button>
              </motion.div>
              
              {/* Language Toggle */}
              <div className="relative">
                <motion.div whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-full transition-all ${
                      isDark
                        ? 'hover:bg-slate-800 hover:shadow-lg hover:shadow-theme-primary/20'
                        : 'hover:bg-slate-100 hover:shadow-lg hover:shadow-theme-primary/20'
                    }`}
                    onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                    title="Language"
                  >
                    <Globe className={`h-4 w-4 transition-colors ${
                      isDark 
                        ? 'text-slate-400 hover:text-theme-primary' 
                        : 'text-slate-600 hover:text-theme-primary'
                    }`} />
                  </Button>
                </motion.div>
                
                {/* Language Dropdown */}
                <AnimatePresence>
                  {isLanguageMenuOpen && (
                    <>
                      {/* Backdrop to close dropdown */}
                      <div 
                        className="fixed inset-0 z-40"
                        onClick={() => setIsLanguageMenuOpen(false)}
                      />
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute right-0 top-12 w-48 rounded-xl border backdrop-blur-xl shadow-2xl overflow-hidden z-50 ${
                          isDark
                            ? 'bg-slate-900/95 border-cyan-500/30 shadow-cyan-500/20'
                            : 'bg-white/95 border-slate-200 shadow-slate-300/50'
                        }`}
                      >
                        <div className="py-2">
                          {languages.map((lang, index) => (
                            <motion.button
                              key={lang.code}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={() => {
                                setSelectedLanguage(lang.name);
                                setIsLanguageMenuOpen(false);
                              }}
                              className={`w-full px-4 py-2.5 flex items-center justify-between gap-3 transition-all ${
                                isDark
                                  ? 'hover:bg-cyan-500/10 text-slate-200'
                                  : 'hover:bg-cyan-50 text-slate-700'
                              } ${selectedLanguage === lang.name ? 'bg-cyan-500/20' : ''}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl">{lang.flag}</span>
                                <span className="text-sm font-medium">{lang.name}</span>
                              </div>
                              {selectedLanguage === lang.name && (
                                <Check className={`w-4 h-4 ${
                                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                                }`} />
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Theme Toggle */}
              {onThemeChange && theme && (
                <motion.div whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-full transition-all ${
                      isDark
                        ? 'hover:bg-slate-800 hover:shadow-lg hover:shadow-theme-primary/20'
                        : 'hover:bg-slate-100 hover:shadow-lg hover:shadow-theme-primary/20'
                    }`}
                    onClick={handleThemeChange}
                    title={getThemeTitle()}
                  >
                    <Palette className={`h-4 w-4 transition-colors ${getThemeIcon()}`} />
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Right: Sign In & Sign Up */}
            <div className="hidden md:flex items-center gap-3">
              {/* Sign In Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`rounded-full font-semibold transition-all ${
                    isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  onClick={() => handleNavClick('signin')}
                >
                  Sign In
                </Button>
              </motion.div>

              {/* Sign Up Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="sm"
                  className="rounded-full font-semibold text-white border-0 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                    boxShadow: `0 4px 12px var(--theme-glow)`,
                  }}
                  onClick={() => handleNavClick('signup')}
                >
                  Sign Up
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isDark ? 'text-white' : 'text-slate-900'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isDark ? 'text-white' : 'text-slate-900'}`} />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`fixed inset-0 z-40 md:hidden ${
              isDark ? 'bg-slate-900' : 'bg-white'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-2xl font-medium transition-colors hover:text-theme-primary cursor-pointer ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div
                className="flex flex-col gap-4 w-full max-w-xs mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.05 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className={`border-2 transition-all ${
                    isDark
                      ? 'bg-transparent border-theme-primary/30 text-white hover:bg-theme-primary/10 hover:border-theme-primary'
                      : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-theme-primary'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Button>
                
                <Button
                  size="lg"
                  className="text-white font-semibold shadow-lg"
                  style={{
                    background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                    boxShadow: '0 4px 14px var(--theme-glow)',
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}