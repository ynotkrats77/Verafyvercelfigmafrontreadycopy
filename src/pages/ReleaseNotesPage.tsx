import { FloatingParticles } from '../components/FloatingParticles';
import { InteractiveCursor } from '../components/InteractiveCursor';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Shield, 
  DollarSign, 
  FileText, 
  Users, 
  Zap, 
  CheckCircle,
  AlertCircle,
  Lock,
  BarChart3,
  MessageSquare,
  RefreshCw,
  Settings,
  ChevronRight
} from 'lucide-react';

interface ReleaseNotesPageProps {
  isDark: boolean;
}

interface Release {
  version: string;
  date: string;
  isLatest?: boolean;
  title: string;
  description?: string;
  features?: {
    icon: any;
    text: string;
    type: 'feature' | 'improvement' | 'security' | 'fix';
  }[];
}

export function ReleaseNotesPage({ isDark }: ReleaseNotesPageProps) {
  const releases: Release[] = [
    {
      version: 'v1.4.0',
      date: 'January 10, 2026',
      isLatest: true,
      title: 'Refunds Policy & FAQ Expansion',
      description: 'Comprehensive refund policy and expanded FAQ repository with 46 questions across 12 categories.',
      features: [
        {
          icon: FileText,
          text: 'Added comprehensive Refunds Policy page with 13 major sections covering 7-day money-back guarantee, auto-billing terms, and Australian Consumer Law compliance',
          type: 'feature'
        },
        {
          icon: MessageSquare,
          text: 'Expanded FAQ repository to 46 total questions organized into 12 categories: Pricing & Founding Member, Features & Tiers, Fair Use & Limits, Technical & Security, Trial & Getting Started, Comparison to Competitors, Licensing & Regulation, Privacy & Data, AI & Technology, Security, Billing & Subscriptions, and Support & Complaints',
          type: 'feature'
        },
        {
          icon: Users,
          text: 'Updated leadership team with Dr. Amit Vohra (Co-Founder & CEO), Ms. Nupur Agarwal (Co-Founder & CTO), and Mr. Subodh Ramugade (Head of AI & Engineering) including comprehensive bios highlighting 20+ years C-suite experience and industry expertise',
          type: 'feature'
        },
        {
          icon: Settings,
          text: 'Reduced navigation spacing for more compact top menu layout (gap-8 to gap-4)',
          type: 'improvement'
        },
        {
          icon: CheckCircle,
          text: 'Added refund eligibility indicators with color-coded quick reference cards (Green: Refundable, Red: Not Refundable, Blue: 7-Day Window)',
          type: 'feature'
        },
        {
          icon: AlertCircle,
          text: 'Clarified refund disqualification rules: CGT Optimizer usage, tax report generation, and auto-billing cycles are non-refundable',
          type: 'feature'
        },
        {
          icon: FileText,
          text: 'Integrated Refunds Policy into Trust Centre footer menu between Terms of Service and Disclaimers',
          type: 'improvement'
        }
      ]
    },
    {
      version: 'v1.3.0',
      date: 'January 8, 2026',
      title: 'Trust Centre & Legal Compliance',
      description: 'Complete Trust Centre with Privacy Policy, Terms of Service, Compliance Framework, and comprehensive legal documentation.',
      features: [
        {
          icon: Shield,
          text: 'Created comprehensive Privacy Policy (14 sections) fully compliant with Privacy Act 1988, ASIC requirements, and Australian Privacy Principles (APPs)',
          type: 'feature'
        },
        {
          icon: FileText,
          text: 'Built complete Terms of Service (14 sections) covering service description, subscription terms, intellectual property, limitations of liability, and dispute resolution',
          type: 'feature'
        },
        {
          icon: Lock,
          text: 'Added Security Framework page with 5 security layers: Encryption & Data Protection, Access Controls & Authentication, Infrastructure Security, Monitoring & Incident Response, and Compliance & Auditing',
          type: 'feature'
        },
        {
          icon: CheckCircle,
          text: 'Created Compliance Framework page with 7 interactive expandable cards covering ASIC RG 244, Privacy Act 1988, Tax Agent Services Act 2009, Corporations Act 2001, AML/CTF Act 2006, Consumer Data Right, and Cybersecurity Standards',
          type: 'feature'
        },
        {
          icon: Sparkles,
          text: 'Built "How Vera AI Works" page explaining the 3-layer architecture: Rules Engine (tax, diversification, risk scoring), Gemini AI (conversational interface), and Market Data Layer',
          type: 'feature'
        },
        {
          icon: MessageSquare,
          text: 'Added Disclaimers Repository with 6 comprehensive disclaimers: General Information, Tax Information, Investment Performance, AI-Generated Content, Market Data, and Technical Limitations',
          type: 'feature'
        },
        {
          icon: RefreshCw,
          text: 'Reorganized Trust Centre footer menu structure: System Status, Security, Compliance Framework, Privacy Policy, Terms of Service, Disclaimers',
          type: 'improvement'
        }
      ]
    },
    {
      version: 'v1.2.0',
      date: 'January 5, 2026',
      title: 'FAQ System & Sign In/Sign Up Pages',
      description: 'Comprehensive FAQ system with 23 detailed questions and complete authentication page designs.',
      features: [
        {
          icon: MessageSquare,
          text: 'Created comprehensive FAQ page with 23 FAQs organized into 6 filterable categories (Licensing & Regulation, Privacy & Data, AI & Technology, Security, Billing & Subscriptions, Support & Complaints)',
          type: 'feature'
        },
        {
          icon: Users,
          text: 'Built complete Sign In and Sign Up pages with tabbed interfaces, form validation, glassmorphism effects, and full navigation integration',
          type: 'feature'
        },
        {
          icon: Sparkles,
          text: 'Added theme-aware ChatScreenshot component with animated scrolling chat simulation, progressive message loading, and typing indicators',
          type: 'feature'
        },
        {
          icon: BarChart3,
          text: 'Implemented 3-slide hero carousel on HomePage with smooth fade transitions, auto-rotation, theme-aware dots, and live countdown timer',
          type: 'feature'
        },
        {
          icon: CheckCircle,
          text: 'Added FAQ icon badges for each category (Shield, Lock, Zap, AlertTriangle, DollarSign, MessageCircle)',
          type: 'improvement'
        }
      ]
    },
    {
      version: 'v1.1.0',
      date: 'January 2, 2026',
      title: 'Features Page & Navigation Enhancements',
      description: 'Complete Features page rebuild with content from Vera AI and sophisticated navigation effects.',
      features: [
        {
          icon: Sparkles,
          text: 'Rebuilt FeaturesPage with content from Vera AI features page using futuristic health-tech design aesthetic',
          type: 'feature'
        },
        {
          icon: Zap,
          text: 'Added hover effects to "What Vera tells you" insight cards section with scale and glow animations',
          type: 'improvement'
        },
        {
          icon: RefreshCw,
          text: 'Implemented fully optimized Footer with sophisticated hover effects and 5-column layout',
          type: 'improvement'
        },
        {
          icon: Settings,
          text: 'Created theme color selector that cycles through three color schemes (Verafy, Pink, Pride) using CSS variables',
          type: 'feature'
        },
        {
          icon: CheckCircle,
          text: 'Implemented comprehensive theme-aware button system with reusable ThemedButton component',
          type: 'feature'
        }
      ]
    },
    {
      version: 'v1.0.0',
      date: 'December 28, 2025',
      title: 'Subscription Tiers & Pricing Launch',
      description: 'Launched three subscription tiers with founding member pricing and complete pricing page.',
      features: [
        {
          icon: DollarSign,
          text: 'Launched three subscription tiers with founding member pricing: 50% off current published price forever (offer ends June 30, 2026). Current prices: Starter $5/mo, Standard $10/mo, Pro $20/mo.',
          type: 'feature'
        },
        {
          icon: CheckCircle,
          text: 'Added comprehensive feature comparison table with 22 features across all tiers',
          type: 'feature'
        },
        {
          icon: Sparkles,
          text: 'Implemented founding member pricing badges with countdown timer and launch special badges',
          type: 'feature'
        },
        {
          icon: FileText,
          text: 'Updated Pricing page with clean feature lists, tier progression, annual billing options, and FAQ section',
          type: 'feature'
        },
        {
          icon: BarChart3,
          text: 'Added feature limits breakdown: Holdings (50/200/2000), Portfolios (3/10/Unlimited), API calls per day (100/150/200)',
          type: 'feature'
        }
      ]
    },
    {
      version: 'v0.9.0',
      date: 'December 20, 2025',
      title: 'Initial Platform Launch',
      description: 'Core portfolio tracking platform with AI-powered insights and bank-grade security.',
      features: [
        {
          icon: BarChart3,
          text: 'Portfolio tracking with CSV import and manual entry support',
          type: 'feature'
        },
        {
          icon: Sparkles,
          text: 'AI-powered portfolio validation and insights using Gemini AI',
          type: 'feature'
        },
        {
          icon: Lock,
          text: 'Bank-grade encryption (AES-256 at rest, TLS 1.3 in transit)',
          type: 'security'
        },
        {
          icon: BarChart3,
          text: 'Real-time performance tracking across 60+ global exchanges',
          type: 'feature'
        },
        {
          icon: MessageSquare,
          text: 'Conversational AI interface for portfolio questions and analysis',
          type: 'feature'
        },
        {
          icon: CheckCircle,
          text: 'Support for 25+ currencies with automatic conversion',
          type: 'feature'
        }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'feature':
        return { icon: Sparkles, color: 'var(--theme-primary)' };
      case 'improvement':
        return { icon: Zap, color: '#F59E0B' };
      case 'security':
        return { icon: Shield, color: '#10B981' };
      case 'fix':
        return { icon: CheckCircle, color: '#6366F1' };
      default:
        return { icon: Sparkles, color: 'var(--theme-primary)' };
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'feature':
        return { label: 'New', bg: 'rgba(var(--theme-primary-rgb), 0.1)', border: 'var(--theme-primary-alpha)' };
      case 'improvement':
        return { label: 'Improved', bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.3)' };
      case 'security':
        return { label: 'Security', bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.3)' };
      case 'fix':
        return { label: 'Fixed', bg: 'rgba(99, 102, 241, 0.1)', border: 'rgba(99, 102, 241, 0.3)' };
      default:
        return { label: 'Update', bg: 'rgba(148, 163, 184, 0.1)', border: 'rgba(148, 163, 184, 0.3)' };
    }
  };

  return (
    <>
      {/* Background Effects */}
      <FloatingParticles isDark={isDark} />
      <InteractiveCursor isDark={isDark} />

      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="relative pt-32 pb-16 overflow-hidden">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: isDark 
                ? 'radial-gradient(circle at 50% 0%, var(--theme-primary) 0%, transparent 50%)'
                : 'radial-gradient(circle at 50% 0%, var(--theme-primary) 0%, transparent 70%)',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span 
                  className="px-4 py-2 rounded-full text-sm font-semibold border-2"
                  style={{
                    background: isDark 
                      ? 'rgba(var(--theme-primary-rgb), 0.1)' 
                      : 'rgba(var(--theme-primary-rgb), 0.1)',
                    borderColor: 'var(--theme-primary-alpha)',
                    color: 'var(--theme-primary)',
                  }}
                >
                  <Sparkles className="inline-block w-4 h-4 mr-2 -mt-1" />
                  Product Updates
                </span>
              </motion.div>

              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Release{' '}
                <span 
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Notes
                </span>
              </h1>

              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                See what's new in VerafyAI. We ship updates regularly to improve your experience.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Release Timeline */}
        <div className="relative py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="space-y-8">
              {releases.map((release, index) => (
                <motion.div
                  key={release.version}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline connector */}
                  {index < releases.length - 1 && (
                    <div
                      className="absolute left-6 top-20 bottom-0 w-0.5"
                      style={{
                        background: isDark
                          ? 'linear-gradient(to bottom, var(--theme-primary-alpha), transparent)'
                          : 'linear-gradient(to bottom, var(--theme-primary-alpha), transparent)',
                      }}
                    />
                  )}

                  <div className="flex gap-6">
                    {/* Version Badge */}
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center border-2 relative z-10"
                        style={{
                          background: isDark
                            ? 'rgba(15, 23, 42, 0.95)'
                            : 'rgba(255, 255, 255, 0.95)',
                          borderColor: release.isLatest ? 'var(--theme-primary)' : 'var(--theme-primary-alpha)',
                          boxShadow: release.isLatest ? '0 0 20px var(--theme-glow)' : 'none',
                        }}
                      >
                        <Sparkles
                          className="w-6 h-6"
                          style={{ color: release.isLatest ? 'var(--theme-primary)' : 'var(--theme-primary-alpha)' }}
                        />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1">
                      <div
                        className="backdrop-blur-xl border-2 rounded-2xl p-8"
                        style={{
                          background: isDark
                            ? 'rgba(15, 23, 42, 0.6)'
                            : 'rgba(255, 255, 255, 0.8)',
                          borderColor: release.isLatest ? 'var(--theme-primary)' : 'var(--theme-primary-alpha)',
                          boxShadow: release.isLatest ? '0 8px 32px var(--theme-glow)' : 'none',
                        }}
                      >
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h2
                                className={`text-2xl md:text-3xl font-bold ${
                                  isDark ? 'text-white' : 'text-slate-900'
                                }`}
                              >
                                {release.version}
                              </h2>
                              {release.isLatest && (
                                <span
                                  className="px-3 py-1 rounded-full text-xs font-bold text-white"
                                  style={{
                                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                                  }}
                                >
                                  LATEST
                                </span>
                              )}
                            </div>
                            <p
                              className={`text-sm ${
                                isDark ? 'text-slate-500' : 'text-slate-500'
                              }`}
                            >
                              {release.date}
                            </p>
                          </div>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-xl font-semibold mb-2 ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {release.title}
                        </h3>

                        {/* Description */}
                        {release.description && (
                          <p
                            className={`mb-6 ${
                              isDark ? 'text-slate-400' : 'text-slate-600'
                            }`}
                          >
                            {release.description}
                          </p>
                        )}

                        {/* Features List */}
                        {release.features && release.features.length > 0 && (
                          <div className="space-y-3">
                            {release.features.map((feature, fIndex) => {
                              const typeInfo = getTypeIcon(feature.type);
                              const badge = getTypeBadge(feature.type);
                              const FeatureIcon = feature.icon;

                              return (
                                <motion.div
                                  key={fIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: fIndex * 0.05 }}
                                  className="flex items-start gap-3 group"
                                >
                                  <div
                                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                                    style={{
                                      background: isDark
                                        ? 'rgba(var(--theme-primary-rgb), 0.1)'
                                        : 'rgba(var(--theme-primary-rgb), 0.08)',
                                    }}
                                  >
                                    <FeatureIcon
                                      className="w-4 h-4"
                                      style={{ color: typeInfo.color }}
                                    />
                                  </div>

                                  <div className="flex-1">
                                    <div className="flex items-start gap-2 mb-1">
                                      <span
                                        className={`text-sm leading-relaxed ${
                                          isDark ? 'text-slate-300' : 'text-slate-700'
                                        }`}
                                      >
                                        {feature.text}
                                      </span>
                                    </div>
                                    <span
                                      className="inline-block px-2 py-0.5 rounded text-xs font-semibold border"
                                      style={{
                                        background: badge.bg,
                                        borderColor: badge.border,
                                        color: typeInfo.color,
                                      }}
                                    >
                                      {badge.label}
                                    </span>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { label: 'Releases', value: releases.length.toString(), icon: Sparkles },
                { 
                  label: 'Features', 
                  value: releases.reduce((sum, r) => sum + (r.features?.filter(f => f.type === 'feature').length || 0), 0).toString(),
                  icon: CheckCircle 
                },
                { 
                  label: 'Improvements', 
                  value: releases.reduce((sum, r) => sum + (r.features?.filter(f => f.type === 'improvement').length || 0), 0).toString(),
                  icon: Zap 
                },
                { 
                  label: 'Security', 
                  value: releases.reduce((sum, r) => sum + (r.features?.filter(f => f.type === 'security').length || 0), 0).toString(),
                  icon: Shield 
                },
              ].map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={index}
                    className="backdrop-blur-xl border-2 rounded-xl p-6 text-center"
                    style={{
                      background: isDark
                        ? 'rgba(15, 23, 42, 0.6)'
                        : 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'var(--theme-primary-alpha)',
                    }}
                  >
                    <StatIcon
                      className="w-8 h-8 mx-auto mb-3"
                      style={{ color: 'var(--theme-primary)' }}
                    />
                    <div
                      className={`text-3xl font-bold mb-1 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-sm ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Subscribe CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center p-8 backdrop-blur-xl border-2 rounded-2xl"
              style={{
                background: isDark
                  ? 'rgba(15, 23, 42, 0.8)'
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: 'var(--theme-primary-alpha)',
              }}
            >
              <h3
                className={`text-2xl mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                Stay Updated
              </h3>
              <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Get notified when we ship new features
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="/signup"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-lg inline-flex items-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  }}
                >
                  Sign Up for Updates
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}