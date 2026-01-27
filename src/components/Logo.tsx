interface LogoProps {
  variant?: 'full' | 'icon' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  colorScheme?: 'cyan' | 'gradient' | 'monochrome' | 'white';
  isDark?: boolean;
  className?: string;
}

export function Logo({ 
  variant = 'full', 
  size = 'md', 
  colorScheme = 'cyan',
  isDark = true, 
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    sm: { icon: 'h-6 w-6', text: 'text-lg', spacing: 'gap-1.5' },
    md: { icon: 'h-8 w-8', text: 'text-2xl', spacing: 'gap-2' },
    lg: { icon: 'h-12 w-12', text: 'text-4xl', spacing: 'gap-3' },
    xl: { icon: 'h-16 w-16', text: 'text-5xl', spacing: 'gap-4' }
  };

  const currentSize = sizeClasses[size];
  
  // Text color based on color scheme and theme
  let textColor = '';
  if (colorScheme === 'white') {
    textColor = 'text-white';
  } else if (colorScheme === 'monochrome') {
    textColor = isDark ? 'text-white' : 'text-slate-900';
  } else if (colorScheme === 'cyan') {
    textColor = 'text-cyan-400';
  } else if (colorScheme === 'gradient') {
    textColor = 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500';
  }

  // SVG V icon with different color schemes
  const VIcon = () => {
    if (colorScheme === 'white') {
      return (
        <svg 
          className={currentSize.icon} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M15 10 L45 90 L55 90 L85 10 L72 10 L52 70 L48 70 L28 10 Z" 
            fill="white"
          />
        </svg>
      );
    }

    if (colorScheme === 'monochrome') {
      return (
        <svg 
          className={currentSize.icon} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M15 10 L45 90 L55 90 L85 10 L72 10 L52 70 L48 70 L28 10 Z" 
            fill={isDark ? 'white' : '#0F172A'}
          />
        </svg>
      );
    }

    if (colorScheme === 'gradient') {
      return (
        <svg 
          className={currentSize.icon} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
          <path 
            d="M15 10 L45 90 L55 90 L85 10 L72 10 L52 70 L48 70 L28 10 Z" 
            fill="url(#vGradient)"
          />
        </svg>
      );
    }

    // Default: Pure cyan
    return (
      <svg 
        className={currentSize.icon} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M15 10 L45 90 L55 90 L85 10 L72 10 L52 70 L48 70 L28 10 Z" 
          fill="#22D3EE"
        />
      </svg>
    );
  };

  if (variant === 'icon') {
    return (
      <div className={className}>
        <VIcon />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <VIcon />
        <span 
          className={`${currentSize.text} font-bold ${textColor}`}
          style={{ transform: 'scaleX(0.81)', letterSpacing: '0.05em' }}
        >
          verafy ai
        </span>
      </div>
    );
  }

  // Full horizontal logo (default)
  return (
    <div className={`flex items-center ${currentSize.spacing} ${className}`}>
      <VIcon />
      <span 
        className={`${currentSize.text} font-bold ${textColor}`}
        style={{ transform: 'scaleX(0.81)', transformOrigin: 'left', letterSpacing: '0.05em' }}
      >
        verafy ai
      </span>
    </div>
  );
}