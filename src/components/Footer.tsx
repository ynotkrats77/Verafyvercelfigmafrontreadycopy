import { useState } from 'react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Lock, Unlock } from 'lucide-react';
import { FOOTER_SECTIONS, COMPANY_INFO, SOCIAL_LINKS, PageType } from '../utils/constants';
import { scrollToTop } from '../utils/themeUtils';
import { TEMP_BYPASS_AUTH } from '../config/authSettings';

interface FooterProps {
  isDark: boolean;
  onNavigate?: (page: PageType) => void;
}

interface FooterSection {
  readonly title: string;
  readonly links: ReadonlyArray<{ readonly label: string; readonly page: PageType }>;
}

interface MobileAccordionProps {
  section: FooterSection;
  isDark: boolean;
  onNavigate: (page: PageType) => void;
}

function MobileAccordion({ section, isDark, onNavigate }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b last:border-b-0 ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between py-4 text-left transition-colors ${
          isDark
            ? 'text-white hover:text-theme-primary'
            : 'text-slate-900 hover:text-theme-primary'
        }`}
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold uppercase tracking-wider">
          {section.title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.page}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.page);
                    }}
                    className={`block text-sm transition-colors hover:text-theme-primary active:text-theme-primary-dark ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Footer({ isDark, onNavigate }: FooterProps) {
  const handleNavClick = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
      scrollToTop();
    }
  };

  const sections = [
    FOOTER_SECTIONS.product,
    FOOTER_SECTIONS.plans,
    FOOTER_SECTIONS.resources,
    FOOTER_SECTIONS.company,
    FOOTER_SECTIONS.legal,
    FOOTER_SECTIONS.investors,
  ];

  return (
    <footer
      className={`relative border-t mt-16 ${
        isDark
          ? 'bg-slate-950 border-slate-800'
          : 'bg-slate-50 border-slate-200'
      }`}
    >
      {/* Decorative gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, var(--theme-primary), transparent)`,
          opacity: 0.3,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout: Brand + 6 Columns */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-6 xl:gap-10 py-12">
          {/* Brand Column - Takes 1 column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size="md" variant="icon" colorScheme="monochrome" isDark={isDark} />
              <span
                className={`text-lg font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                verafy ai
              </span>
            </div>
            
            {/* Animated Vera Image - Placeholder removed to fix srcset errors */}
            <div className="relative mb-6 flex flex-col items-center">
              <motion.div
                className="relative"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-4xl"
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 20px var(--theme-glow)',
                      '0 0 40px var(--theme-glow-strong)',
                      '0 0 20px var(--theme-glow)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  V
                </motion.div>
              </motion.div>
              <p
                className={`text-sm text-center mt-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                I'm Vera - your Verafy AI Assistant <span className="text-theme-primary">Gen 1</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {(Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>).map((social) => (
                <motion.a
                  key={social}
                  href={SOCIAL_LINKS[social]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${
                    isDark
                      ? 'border-slate-700 hover:border-theme-primary hover:bg-theme-primary/10'
                      : 'border-slate-300 hover:border-theme-primary hover:bg-theme-primary/10'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Follow us on ${social}`}
                >
                  <span
                    className={`text-xs uppercase font-semibold ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {social[0]}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* 5 Menu Columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3
                className={`text-sm font-semibold mb-4 uppercase tracking-wider ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={`#${link.page}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.page);
                      }}
                      className={`text-sm transition-colors hover:text-theme-primary ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tablet Layout: 2 Columns + Brand on top */}
        <div className="hidden md:block lg:hidden py-12">
          {/* Brand Section */}
          <div className="mb-8 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <Logo size="md" variant="icon" colorScheme="monochrome" isDark={isDark} />
              <span
                className={`text-xl font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                verafy ai
              </span>
            </div>
            <p
              className={`text-sm leading-relaxed mb-6 max-w-md ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Vera – your AI assistant delivering institutional-grade portfolio
              insights in plain English.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {(Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>).map((social) => (
                <motion.a
                  key={social}
                  href={SOCIAL_LINKS[social]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                    isDark
                      ? 'border-slate-700 hover:border-theme-primary hover:bg-theme-primary/10'
                      : 'border-slate-300 hover:border-theme-primary hover:bg-theme-primary/10'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Follow us on ${social}`}
                >
                  <span
                    className={`text-xs uppercase font-semibold ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {social[0]}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2 Column Grid for Links */}
          <div className="grid grid-cols-2 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h3
                  className={`text-sm font-semibold mb-4 uppercase tracking-wider ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={`#${link.page}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.page);
                        }}
                        className={`text-sm transition-colors hover:text-theme-primary ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout: Accordion */}
        <div className="md:hidden py-8">
          {/* Brand Section */}
          <div className="mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Logo size="sm" variant="icon" colorScheme="monochrome" isDark={isDark} />
              <span
                className={`text-lg font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                verafy ai
              </span>
            </div>
            
            {/* Animated Vera Image - Placeholder removed to fix srcset errors */}
            <div className="relative mb-4 flex flex-col items-center">
              <motion.div
                className="relative"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-4xl"
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 20px var(--theme-glow)',
                      '0 0 40px var(--theme-glow-strong)',
                      '0 0 20px var(--theme-glow)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  V
                </motion.div>
              </motion.div>
              <p
                className={`text-xs text-center mt-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                I'm Vera - your Verafy AI Assistant <span className="text-theme-primary">Gen 1</span>
              </p>
            </div>

            {/* Social Links - Mobile Optimized */}
            <div className="flex gap-3 justify-center">
              {(Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>).map((social) => (
                <a
                  key={social}
                  href={SOCIAL_LINKS[social]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all active:scale-95 ${
                    isDark
                      ? 'border-slate-700 active:border-theme-primary active:bg-theme-primary/10'
                      : 'border-slate-300 active:border-theme-primary active:bg-theme-primary/10'
                  }`}
                  aria-label={`Follow us on ${social}`}
                >
                  <span
                    className={`text-xs uppercase font-semibold ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Accordion Menu Sections */}
          <div>
            {sections.map((section) => (
              <MobileAccordion
                key={section.title}
                section={section}
                isDark={isDark}
                onNavigate={handleNavClick}
              />
            ))}
          </div>
        </div>

        {/* Bottom Bar - All Layouts */}
        <div
          className={`py-6 border-t ${
            isDark ? 'border-slate-800' : 'border-slate-200'
          }`}
          style={{
            paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
          }}
        >
          {/* Hosting & Security Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div
                className={`px-3 py-1.5 rounded-md font-semibold text-xs ${
                  isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700'
                }`}
              >
                AWS
              </div>
              <span
                className={`text-xs ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Hosted on AWS
              </span>
            </div>
            <div
              className={`h-4 w-px ${
                isDark ? 'bg-slate-800' : 'bg-slate-300'
              }`}
            />
            <div className="flex items-center gap-2">
              <svg
                className={`h-4 w-4 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span
                className={`text-xs ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Bank-grade security: AES-256 at rest · TLS 1.3 in transit
              </span>
            </div>
          </div>

          {/* Disclaimer */}
          <div
            className={`max-w-4xl mx-auto text-center mb-6 px-4 ${
              isDark ? 'text-slate-500' : 'text-slate-600'
            }`}
          >
            <p className="text-xs leading-relaxed">
              <span className="font-semibold">Disclaimer:</span>{' '}
              {COMPANY_INFO.disclaimer}{' '}
              <a
                href="#disclaimers"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('disclaimers');
                }}
                className="underline hover:text-theme-primary transition-colors"
              >
                {COMPANY_INFO.disclaimerLink}
              </a>
            </p>
          </div>

          {/* Copyright & Badge */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <p
              className={`text-xs text-center ${
                isDark ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              {COMPANY_INFO.copyright}
            </p>
          </div>

          {/* TEMPORARY: Developer Dashboard Access */}
          {TEMP_BYPASS_AUTH && (
            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <Unlock className="w-4 h-4 text-amber-500" />
                  <span className={`text-xs font-semibold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                    DEVELOPMENT MODE - Auth Bypass Active
                  </span>
                </div>
                <motion.button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('dashboard');
                      scrollToTop();
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: '#fff',
                  }}
                >
                  🔓 Access Dashboard (Temporary Dev Link)
                </motion.button>
                <p className={`text-[10px] text-center max-w-md ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  Note: All dashboard sections are protected under authentication. This link bypasses auth for development only.
                  Set TEMP_BYPASS_AUTH = false in /config/authSettings.ts for production.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}