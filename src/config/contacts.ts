// Central Source of Truth for All Contact Information
// Update this file to modify contact details across the entire application

// 🚨 EMAIL LOCKDOWN - DO NOT CHANGE 🚨
// ONLY 3 APPROVED EMAILS - NO EXCEPTIONS:
// 1. support@verafyai.com.au
// 2. enquiries@verafyai.com.au
// 3. accounts@verafyai.com.au
// DO NOT ADD: info@, hello@, sales@, general@, contact@, or ANY other emails

export interface ContactEmail {
  email: string;
  label: string;
  description: string;
  type: 'support' | 'accounts' | 'enquiries';
  mailtoLink: string;
  mailtoSubject?: string;
}

// 🏢 COMPANY INFORMATION - OFFICIAL LEGAL DETAILS
export const COMPANY_INFO = {
  legalName: 'Axient AI Pty Ltd',
  tradingName: 'VerafyAI Pty Ltd',
  fullLegalName: 'Axient AI Pty Ltd trading as VerafyAI Pty Ltd',
  abn: '21 688 793 151',
  address: {
    suburb: 'Petersham',
    state: 'NSW',
    postcode: '2049',
    country: 'Australia',
    full: 'Petersham, NSW 2049, Australia'
  },
  copyright: `© ${new Date().getFullYear()} Axient AI Pty Ltd trading as VerafyAI Pty Ltd`,
  copyrightShort: `© ${new Date().getFullYear()} VerafyAI Pty Ltd`,
  abnFormatted: 'ABN 21 688 793 151'
} as const;

// Production Contact Emails - Only 3 Official Addresses
export const CONTACT_EMAILS = {
  support: {
    email: 'support@verafyai.com.au',
    label: 'Support Team',
    description: 'Technical support, customer service, and general help',
    type: 'support' as const,
    mailtoLink: 'mailto:support@verafyai.com.au?subject=Support%20Request',
    mailtoSubject: 'Support Request'
  },
  
  accounts: {
    email: 'accounts@verafyai.com.au',
    label: 'Accounts Team',
    description: 'Billing, subscriptions, refunds, and account management',
    type: 'accounts' as const,
    mailtoLink: 'mailto:accounts@verafyai.com.au?subject=Account%20Inquiry',
    mailtoSubject: 'Account Inquiry'
  },
  
  enquiries: {
    email: 'enquiries@verafyai.com.au',
    label: 'General Enquiries',
    description: 'General questions, sales, partnerships, and information',
    type: 'enquiries' as const,
    mailtoLink: 'mailto:enquiries@verafyai.com.au?subject=Enquiry',
    mailtoSubject: 'Enquiry'
  }
} as const;

// Email Routing Map - Which email handles what topics
export const EMAIL_ROUTING = {
  // Technical & Product Support
  technical: 'support',
  bugs: 'support',
  features: 'support',
  help: 'support',
  
  // Billing & Accounts
  billing: 'accounts',
  subscription: 'accounts',
  refund: 'accounts',
  payment: 'accounts',
  invoice: 'accounts',
  
  // Legal & Compliance (routed to enquiries)
  legal: 'enquiries',
  privacy: 'enquiries',
  security: 'enquiries',
  compliance: 'enquiries',
  complaints: 'enquiries',
  
  // Sales & General
  sales: 'enquiries',
  partnership: 'enquiries',
  media: 'enquiries',
  general: 'enquiries'
} as const;

// Helper Functions
export function getContactEmail(type: keyof typeof CONTACT_EMAILS): ContactEmail {
  return CONTACT_EMAILS[type];
}

export function getMailtoLink(
  type: keyof typeof CONTACT_EMAILS,
  customSubject?: string,
  body?: string
): string {
  const contact = CONTACT_EMAILS[type];
  let link = `mailto:${contact.email}`;
  
  const params: string[] = [];
  
  if (customSubject) {
    params.push(`subject=${encodeURIComponent(customSubject)}`);
  } else if (contact.mailtoSubject) {
    params.push(`subject=${encodeURIComponent(contact.mailtoSubject)}`);
  }
  
  if (body) {
    params.push(`body=${encodeURIComponent(body)}`);
  }
  
  if (params.length > 0) {
    link += '?' + params.join('&');
  }
  
  return link;
}

// Get all production emails (exclude test/legacy)
export function getProductionEmails(): ContactEmail[] {
  return [CONTACT_EMAILS.support, CONTACT_EMAILS.enquiries];
}

// Get all emails including dev/test
export function getAllEmails(): ContactEmail[] {
  return Object.values(CONTACT_EMAILS);
}

// React Component for Email Links
interface EmailLinkProps {
  type: keyof typeof CONTACT_EMAILS;
  children?: React.ReactNode;
  subject?: string;
  body?: string;
  className?: string;
  showIcon?: boolean;
}

export function EmailLink({ 
  type, 
  children, 
  subject,
  body,
  className = 'text-cyan-400 hover:text-cyan-300 underline transition-colors',
  showIcon = false
}: EmailLinkProps) {
  const contact = CONTACT_EMAILS[type];
  const mailtoLink = getMailtoLink(type, subject, body);
  
  return (
    <a 
      href={mailtoLink}
      className={className}
      title={`Email ${contact.label}: ${contact.description}`}
    >
      {showIcon && (
        <svg 
          className="w-4 h-4 inline-block mr-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
          />
        </svg>
      )}
      {children || contact.email}
    </a>
  );
}

// Themed Email Link (uses theme colors)
interface ThemedEmailLinkProps extends EmailLinkProps {
  isDark?: boolean;
}

export function ThemedEmailLink({ 
  isDark = true,
  className,
  ...props 
}: ThemedEmailLinkProps) {
  const defaultClassName = isDark 
    ? 'text-cyan-400 hover:text-cyan-300 underline transition-colors'
    : 'text-cyan-600 hover:text-cyan-700 underline transition-colors';
  
  return <EmailLink {...props} className={className || defaultClassName} />;
}

// Email Button Component (styled as button)
interface EmailButtonProps {
  type: keyof typeof CONTACT_EMAILS;
  children?: React.ReactNode;
  subject?: string;
  body?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  isDark?: boolean;
}

export function EmailButton({
  type,
  children,
  subject,
  body,
  variant = 'primary',
  isDark = true
}: EmailButtonProps) {
  const contact = CONTACT_EMAILS[type];
  const mailtoLink = getMailtoLink(type, subject, body);
  
  const variantStyles = {
    primary: isDark
      ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
      : 'bg-cyan-600 hover:bg-cyan-700 text-white',
    secondary: isDark
      ? 'bg-slate-700 hover:bg-slate-600 text-white'
      : 'bg-slate-200 hover:bg-slate-300 text-slate-900',
    outline: isDark
      ? 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
      : 'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50'
  };
  
  return (
    <a
      href={mailtoLink}
      className={`
        inline-flex items-center gap-2 px-6 py-3 rounded-lg
        font-semibold transition-all duration-200
        ${variantStyles[variant]}
      `}
      title={`Email ${contact.label}`}
    >
      <svg 
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
        />
      </svg>
      {children || `Email ${contact.label}`}
    </a>
  );
}

// Export for easy imports
export default CONTACT_EMAILS;