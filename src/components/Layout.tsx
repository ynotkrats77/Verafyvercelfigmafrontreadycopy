import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { BackToTop } from './BackToTop';
import { ThemeType } from '../hooks/useTheme';
import type { PageType } from '../types/navigation';

interface LayoutProps {
  children: ReactNode;
  isDark: boolean;
  onToggleDark?: () => void;
  currentPage?: PageType;
  onNavigate?: (page: PageType) => void;
  showScrollProgress?: boolean;
  showBackToTop?: boolean;
  theme?: ThemeType;
  onThemeChange?: (theme: ThemeType) => void;
  // Dev mode controls
  onModeChange?: (mode: 'web' | 'slide' | 'design' | 'export' | 'auth' | 'investor' | 'video') => void;
}

/**
 * Layout Component
 * 
 * Provides consistent Navigation and Footer across all pages.
 * The middle content section can be swapped independently.
 * 
 * @param children - Page content to render between Navigation and Footer
 * @param isDark - Dark/light mode state
 * @param onToggleDark - Function to toggle dark mode
 * @param currentPage - Current active page
 * @param onNavigate - Function to navigate to a different page
 * @param showScrollProgress - Whether to show scroll progress indicator (default: true)
 * @param showBackToTop - Whether to show back to top button (default: true)
 * @param theme - Current theme
 * @param onThemeChange - Function to change theme
 */
export function Layout({
  children,
  isDark,
  onToggleDark,
  currentPage,
  onNavigate,
  showScrollProgress = true,
  showBackToTop = true,
  theme,
  onThemeChange,
  onModeChange
}: LayoutProps) {
  return (
    <div className={`min-h-screen relative transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950' 
        : 'bg-gradient-to-b from-slate-50 via-white to-slate-100'
    }`}>
      {/* Fixed Navigation Bar */}
      <Navigation 
        isDark={isDark} 
        onToggleDark={onToggleDark} 
        onNavigate={onNavigate}
        theme={theme}
        onThemeChange={onThemeChange}
      />
      
      {/* Optional Scroll Progress Indicator */}
      {showScrollProgress && <ScrollProgress isDark={isDark} />}
      
      {/* Main Content Area - Swappable per page */}
      <main className="relative pt-20">
        {children}
      </main>
      
      {/* Optional Back to Top Button */}
      {showBackToTop && <BackToTop isDark={isDark} />}
      
      {/* Fixed Footer */}
      <Footer
        isDark={isDark}
        onNavigate={onNavigate}
        currentPage={currentPage}
        onModeChange={onModeChange}
        onToggleDark={onToggleDark}
        theme={theme}
        onThemeChange={onThemeChange}
      />
    </div>
  );
}