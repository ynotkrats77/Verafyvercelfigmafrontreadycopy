import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Briefcase,
  TrendingUp,
  Search,
  Lightbulb,
  FileText,
  GraduationCap,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Zap,
  AlertCircle,
  Activity,
  BarChart3,
  PieChart,
  Shield,
  Target,
  Users,
  Sparkles,
  Map,
  GitCompare,
  Calculator,
  Receipt,
  BookOpen,
  Award,
  Coins,
  MessageSquare,
  Lock,
  LockKeyhole,
  Crown,
  User,
  CreditCard,
  Gift,
  Settings,
  HelpCircle,
  Trophy,
  LogOut,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import { getUserTierConfig, hasAccessToFeature, CURRENT_USER_TIER } from '../config/userTier';

interface SidebarProps {
  isDark: boolean;
  currentSection?: string;
  onNavigate?: (section: string) => void;
  isMobileOpen?: boolean;
  onMobileToggle?: () => void;
  onLockedFeatureClick?: (featureBadge: string, featureName: string) => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: any;
  badge?: 'Legacy' | 'Standard' | 'AI Pro' | 'Add-On' | 'TEMP' | 'APIS';
  children?: MenuItem[];
  sectionHeader?: string;
}

export function DashboardSidebar({ isDark, currentSection = 'dashboard', onNavigate, isMobileOpen, onMobileToggle, onLockedFeatureClick }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['dashboard', 'learning', 'profile'])
  );

  const userTierConfig = getUserTierConfig(CURRENT_USER_TIER);

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  const menuItems: MenuItem[] = [
    {
      id: 'action-center',
      label: 'Action Center',
      icon: AlertCircle,
      // Single click item - no children
    },
    {
      id: 'vera-dashboard',
      label: 'My Dashboard',
      icon: LayoutDashboard,
      // Single click item - no children
    },
    {
      id: 'vera-chat',
      label: 'Vera Chat',
      icon: MessageSquare,
      // Single click item - no children
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      icon: Briefcase,
      children: [
        { id: 'portfolio-manager', label: 'Portfolio Manager', icon: Briefcase },
        { id: 'compare-portfolios', label: 'Compare Portfolios', icon: GitCompare },
        { id: 'consolidated-view', label: 'Consolidated View', icon: Activity },
        { id: 'portfolio-health', label: 'Portfolio Health', icon: Shield },
        { id: 'concentration-risk', label: 'Concentration Risk', icon: Target }, // Moved from Insights
        { id: 'sector-allocation', label: 'Sector Allocation', icon: PieChart }, // Moved from Insights
      ],
    },
    {
      id: 'market-insights',
      label: 'Market Insights',
      icon: TrendingUp,
      badge: 'Standard',
      children: [
        { id: 'ai-daily-feed', label: 'AI Daily Feed', icon: Sparkles, badge: 'Standard' }, // Moved from Insights
        { id: 'winners-losers', label: 'Winners vs Losers', icon: TrendingUp, badge: 'Standard' },
        { id: 'cash-flow', label: 'Cash Flow & Wealth Behavioral Patterns', icon: Activity, badge: 'Standard' },
        { id: 'risk-performance', label: 'Risk-Adjusted Performance', icon: BarChart3, badge: 'Standard' },
        { id: 'market-opportunity', label: 'Market Opportunity', icon: Zap, badge: 'Standard' },
      ],
    },
    {
      id: 'research',
      label: 'Research Tools',
      icon: Search,
      badge: 'Standard',
      children: [
        { id: 'watchlists', label: 'Watchlists', icon: BookOpen, badge: 'Standard' },
        { id: 'screeners', label: 'Screeners', icon: Target, badge: 'Standard' },
        { id: 'stock-pickers', label: 'Stock Pickers', icon: Sparkles, badge: 'Standard' },
      ],
    },
    {
      id: 'ai-strategy',
      label: 'AI Strategy',
      icon: Lightbulb,
      badge: 'AI Pro',
      children: [
        { id: 'ai-strategy-insights', label: 'AI Strategy Insights Portfolio Optimization', icon: Sparkles, badge: 'AI Pro' },
        { id: 'future-scenarios', label: 'Future Scenarios', icon: Map, badge: 'AI Pro' },
        { id: 'peer-comparison', label: 'Peer Comparison', icon: Users, badge: 'AI Pro' },
        { id: 'strategic-planner', label: 'Strategic Planner', icon: Target, badge: 'AI Pro' },
      ],
    },
    {
      id: 'tax-center',
      label: 'Tax Center',
      icon: Calculator,
      badge: 'Add-On',
      children: [
        { id: 'tax-planner', label: 'Tax Planner', icon: Calculator, badge: 'Add-On' },
        { id: 'capital-gains', label: 'Capital Gains Summary Tax-Loss Harvesting', icon: TrendingUp, badge: 'Add-On' },
        { id: 'tax-reports', label: 'Tax Reports', icon: Receipt, badge: 'Add-On' },
        { id: 'multi-jurisdiction-tax', label: 'Multi-Jurisdiction Tax', icon: Globe, badge: 'Add-On' },
      ],
    },
    {
      id: 'foreign-tax-filing',
      label: 'Foreign Tax Filing',
      icon: Globe,
      badge: 'Add-On',
      // Single click item - for users from tax-exempt countries
    },
    {
      id: 'learning',
      label: 'Learning',
      icon: GraduationCap,
      children: [
        { id: 'academy', label: 'Academy', icon: GraduationCap },
        { id: 'courses', label: 'Courses', icon: BookOpen },
        { id: 'achievements', label: 'Achievements', icon: Award },
      ],
    },
    {
      id: 'community',
      label: 'Community',
      icon: Users,
      children: [
        { id: 'forum', label: 'Forum', icon: MessageSquare },
        { id: 'blog', label: 'Blog', icon: BookOpen },
      ],
    },
    {
      id: 'rewards',
      label: 'Rewards',
      icon: Gift,
      children: [
        { id: 'earn-credits', label: 'Earn Credits', icon: Coins },
        { id: 'referral-program', label: 'Refer Friends', icon: Users },
      ],
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      children: [
        { id: 'settings', label: 'Settings', icon: Settings },
        { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
        { id: 'academy-record', label: 'Academy Record', icon: Award },
        { id: 'help', label: 'Help', icon: HelpCircle },
      ],
    },
  ];

  const getBadgeStyles = (badge: string) => {
    switch (badge) {
      case 'Legacy':
        return {
          bg: isDark ? 'rgba(100, 116, 139, 0.2)' : 'rgba(100, 116, 139, 0.1)',
          color: isDark ? '#94a3b8' : '#64748b',
        };
      case 'Standard':
        return {
          bg: isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
          color: isDark ? '#60a5fa' : '#3b82f6',
        };
      case 'AI Pro':
        return {
          bg: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0.1)',
          color: isDark ? '#c084fc' : '#a855f7',
        };
      case 'Add-On':
        return {
          bg: isDark ? 'rgba(249, 115, 22, 0.2)' : 'rgba(249, 115, 22, 0.1)',
          color: isDark ? '#fb923c' : '#f97316',
        };
      case 'TEMP':
        return {
          bg: isDark ? 'rgba(251, 191, 36, 0.2)' : 'rgba(251, 191, 36, 0.1)',
          color: isDark ? '#fbbf24' : '#f59e0b',
        };
      case 'APIS':
        return {
          bg: isDark ? 'rgba(255, 193, 7, 0.2)' : 'rgba(255, 193, 7, 0.1)',
          color: isDark ? '#facc15' : '#f59e0b',
        };
      default:
        return null;
    }
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const Icon = item.icon;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.has(item.id);
    const isActive = currentSection === item.id;
    
    // Determine if this section has access (for tier-locked sections)
    const hasAccess = item.badge ? hasAccessToFeature(userTierConfig, item.badge) : true;
    const isTrial = userTierConfig.isTrial || false;
    
    // Show lock icon for ALL items with tier badge (not just parent sections)
    const showLockIcon = item.badge && !isCollapsed;

    return (
      <div key={item.id}>
        {item.sectionHeader && !isCollapsed && (
          <div
            className="px-3 py-2 text-xs font-semibold uppercase tracking-wider mt-4"
            style={{
              color: isDark ? '#64748b' : '#94a3b8',
            }}
          >
            {item.sectionHeader}
          </div>
        )}
        
        <motion.div
          whileHover={{ x: isCollapsed ? 0 : 2 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => {
              if (hasChildren) {
                // In collapsed mode, navigate to first child if exists
                if (isCollapsed && item.children && item.children.length > 0) {
                  const firstChild = item.children[0];
                  if (firstChild.badge && !hasAccessToFeature(userTierConfig, firstChild.badge)) {
                    onLockedFeatureClick?.(firstChild.badge, firstChild.label);
                  } else {
                    onNavigate?.(firstChild.id);
                    if (window.innerWidth < 1024) {
                      onMobileToggle?.();
                    }
                  }
                } else {
                  // Expanded mode - toggle the section
                  toggleSection(item.id);
                }
              } else {
                // No children - navigate directly
                if (item.badge && !hasAccessToFeature(userTierConfig, item.badge)) {
                  onLockedFeatureClick?.(item.badge, item.label);
                } else {
                  onNavigate?.(item.id);
                  // Close mobile sidebar when navigating
                  if (window.innerWidth < 1024) {
                    onMobileToggle?.();
                  }
                }
              }
            }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
              isActive
                ? 'font-semibold'
                : 'font-normal'
            } ${
              isDark
                ? 'hover:bg-slate-800/50'
                : 'hover:bg-slate-100/50'
            }`}
            style={{
              paddingLeft: isCollapsed ? '12px' : `${12 + level * 16}px`,
              background: isActive
                ? isDark
                  ? 'rgba(34, 211, 238, 0.1)'
                  : 'rgba(34, 211, 238, 0.08)'
                : 'transparent',
              color: isActive
                ? '#22d3ee'
                : isDark
                ? '#e2e8f0'
                : '#1e293b',
            }}
            title={isCollapsed ? `${item.label}${hasChildren ? ' (click to navigate)' : ''}` : ''}
          >
            <div className="relative">
              <Icon className="w-5 h-5 flex-shrink-0" />
              {/* Small indicator dot for items with children when collapsed */}
              {isCollapsed && hasChildren && (
                <div 
                  className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full"
                  style={{ background: '#22d3ee' }}
                />
              )}
            </div>
            
            {!isCollapsed && (
              <>
                <span className="flex-1 text-left text-sm truncate">
                  {item.label}
                </span>
                
                {/* Lock/Unlock Icon for ALL tier-locked items */}
                {showLockIcon && (
                  isTrial || hasAccess ? (
                    <LockKeyhole className="w-4 h-4 flex-shrink-0" style={{ color: '#22d3ee' }} />
                  ) : (
                    <Lock className="w-4 h-4 flex-shrink-0" style={{ color: isDark ? '#64748b' : '#94a3b8' }} />
                  )
                )}
                
                {item.badge && (
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-semibold flex-shrink-0"
                    style={getBadgeStyles(item.badge) || {}}
                  >
                    {item.badge}
                  </span>
                )}
                
                {hasChildren && (
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  </motion.div>
                )}
              </>
            )}
          </button>
        </motion.div>

        <AnimatePresence>
          {hasChildren && isExpanded && !isCollapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {item.children?.map(child => renderMenuItem(child, level + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onMobileToggle}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ 
          width: isCollapsed ? '64px' : '280px',
          x: window.innerWidth < 1024 && isMobileOpen !== undefined && !isMobileOpen ? '-100%' : '0%'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`h-screen border-r flex flex-col fixed lg:relative z-50 lg:z-auto`}
        style={{
          background: isDark ? '#0f172a' : '#ffffff',
          borderColor: isDark ? '#1e293b' : '#e2e8f0',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b"
          style={{
            borderColor: isDark ? '#1e293b' : '#e2e8f0',
          }}
        >
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Verafy
              </span>
            </motion.div>
          )}
          
          <button
            onClick={() => {
              // On mobile, close the sidebar
              if (window.innerWidth < 1024) {
                onMobileToggle?.();
              } else {
                // On desktop, toggle collapse
                setIsCollapsed(!isCollapsed);
              }
            }}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? 'hover:bg-slate-800 text-slate-400'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4 px-2">
          <div className="space-y-1">
            {menuItems.map(item => renderMenuItem(item))}
          </div>
          
          {/* Admin Section - Bottom of nav */}
          {!isCollapsed && (
            <div className="mt-6 pt-4 border-t" style={{ borderColor: isDark ? '#1e293b' : '#e2e8f0' }}>
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <button
                  onClick={() => {
                    // Admin functionality - AWS Cognito role check
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all font-normal ${
                    isDark ? 'hover:bg-slate-800/50' : 'hover:bg-slate-100/50'
                  }`}
                  style={{
                    color: isDark ? '#e2e8f0' : '#1e293b',
                  }}
                >
                  <ShieldCheck className="w-5 h-5 flex-shrink-0" style={{ color: '#f97316' }} />
                  <span className="flex-1 text-left text-sm">Switch to Admin</span>
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-semibold"
                    style={{
                      background: isDark ? 'rgba(249, 115, 22, 0.2)' : 'rgba(249, 115, 22, 0.1)',
                      color: isDark ? '#fb923c' : '#f97316',
                    }}
                  >
                    Internal
                  </span>
                </button>
              </motion.div>
              
              {/* Sign Out Button */}
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }} className="mt-2">
                <button
                  onClick={() => {
                    // Sign out - AWS Cognito auth.signOut()
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all font-normal ${
                    isDark ? 'hover:bg-slate-800/50' : 'hover:bg-slate-100/50'
                  }`}
                  style={{
                    color: isDark ? '#e2e8f0' : '#1e293b',
                  }}
                >
                  <LogOut className="w-5 h-5 flex-shrink-0" style={{ color: '#ef4444' }} />
                  <span className="flex-1 text-left text-sm">Sign Out</span>
                </button>
              </motion.div>
            </div>
          )}
        </div>

        {/* Footer - Enable AI Validation Toggle */}
        {!isCollapsed && (
          <div className="p-4 border-t"
            style={{
              borderColor: isDark ? '#1e293b' : '#e2e8f0',
            }}
          >
            <div
              className="p-3 rounded-lg"
              style={{
                background: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(248, 250, 252, 0.8)',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" style={{ color: '#22d3ee' }} />
                  <span className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Enable AI Validation
                  </span>
                </div>
                <label className="relative inline-block w-9 h-5">
                  <input type="checkbox" className="sr-only peer" />
                  <div
                    className="w-9 h-5 rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all cursor-pointer"
                    style={{
                      background: isDark ? '#334155' : '#cbd5e1',
                    }}
                  />
                </label>
              </div>
              <p className={`text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Vera Desktop &amp; Mobile pricing automatically
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}