import { useEffect, useState } from 'react';

export type ThemeType = 'verafy' | 'pink' | 'pride';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Check localStorage for saved theme
    const saved = localStorage.getItem('verafy-theme');
    return (saved as ThemeType) || 'verafy';
  });

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove('theme-verafy', 'theme-pink', 'theme-pride');
    
    // Add current theme class
    document.documentElement.classList.add(`theme-${theme}`);
    
    // Save to localStorage
    localStorage.setItem('verafy-theme', theme);
  }, [theme]);

  return { theme, setTheme };
}
