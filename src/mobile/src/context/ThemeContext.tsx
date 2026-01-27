import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { COLORS } from '../config/theme';

type Theme = 'light' | 'dark' | 'corporate' | 'high-contrast';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
  colors: typeof COLORS.light | typeof COLORS.dark;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>('dark'); // Default to dark as per futuristic aesthetic

  const isDark = theme === 'dark' || (theme === 'corporate' && systemColorScheme === 'dark');
  
  const colors = isDark ? COLORS.dark : COLORS.light;

  const value = {
    theme,
    isDark,
    setTheme,
    colors
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
