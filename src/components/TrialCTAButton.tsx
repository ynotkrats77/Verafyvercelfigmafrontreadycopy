import { ThemedButton } from './ui/themed-button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

interface TrialCTAButtonProps {
  variant?: 'start' | 'trial';
  buttonVariant?: 'primary' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  showDisclaimer?: boolean;
  icon?: 'arrow' | 'chevron' | 'none';
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export function TrialCTAButton({
  variant = 'trial',
  buttonVariant = 'primary',
  size = 'lg',
  showDisclaimer = false,
  icon = 'none',
  className = '',
  children,
  onClick,
}: TrialCTAButtonProps) {
  // Default text based on variant
  const defaultText = variant === 'start' ? 'Get Started Free*' : 'Start Free Trial*';
  const text = children || defaultText;

  // Icon component selection
  const IconComponent = icon === 'arrow' ? ArrowRight : icon === 'chevron' ? ChevronRight : null;

  return (
    <div className={className}>
      <ThemedButton
        variant={buttonVariant}
        size={size}
        onClick={onClick}
        className="group"
      >
        {text}
        {IconComponent && (
          <IconComponent className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        )}
      </ThemedButton>

      {showDisclaimer && (
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center">
          *Credit card required. Auto-billed after 14 days.
        </p>
      )}
    </div>
  );
}
