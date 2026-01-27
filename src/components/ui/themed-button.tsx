import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ThemedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const ThemedButton = forwardRef<HTMLButtonElement, ThemedButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, className = '', children, ...props }, ref) => {
    
    const sizeClasses = {
      sm: 'py-2 px-4 text-sm',
      md: 'py-3 px-6 text-base',
      lg: 'py-4 px-8 text-lg'
    };

    const baseClasses = `
      relative overflow-hidden font-semibold transition-all duration-300 rounded-xl
      ${fullWidth ? 'w-full' : ''}
      ${sizeClasses[size]}
      ${className}
    `;

    if (variant === 'primary') {
      return (
        <motion.button
          ref={ref}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`${baseClasses} text-white shadow-lg`}
          style={{
            background: 'var(--theme-primary)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#000000';
            e.currentTarget.style.borderColor = 'var(--theme-primary)';
            e.currentTarget.style.boxShadow = '0 12px 32px var(--theme-glow-strong)';
            e.currentTarget.style.border = '2px solid var(--theme-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--theme-primary)';
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.border = 'none';
          }}
          {...props}
        >
          {children}
        </motion.button>
      );
    }

    if (variant === 'outline') {
      return (
        <motion.button
          ref={ref}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`${baseClasses} bg-transparent border-2 transition-all duration-300`}
          style={{
            borderColor: 'var(--theme-primary)',
            color: 'var(--theme-primary)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#000000';
            e.currentTarget.style.color = 'var(--theme-primary)';
            e.currentTarget.style.boxShadow = '0 8px 24px var(--theme-glow-strong)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--theme-primary)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          {...props}
        >
          {children}
        </motion.button>
      );
    }

    // Ghost variant
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClasses} bg-transparent`}
        style={{
          color: 'var(--theme-primary)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--theme-glow)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

ThemedButton.displayName = 'ThemedButton';