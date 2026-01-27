import { useEffect, useState } from 'react';
import { DashboardSidebar } from '../components/Sidebar';
import { ThemedButton } from '../components/ui/themed-button';
// import { CONTACT_EMAILS, EmailLink } from '@/config/contacts';
import { getUserTierConfig, CURRENT_USER_TIER, getRequiredTierForFeature } from '../config/userTier';
import { UpgradeModal } from '../components/UpgradeModal';
import { 
  LayoutDashboard,
  RefreshCw,
  ChevronRight,
  TrendingDown,
  TrendingUp,
  Clock,
  DollarSign,
  AlertCircle,
  BarChart3,
  Activity,
  Zap,
  MessageSquare,
  Briefcase,
  TrendingUp as TrendingUpIcon,
  Search,
  Lightbulb,
  BookOpen,
  Calculator,
  Menu,
} from 'lucide-react';

// Dashboard Content Pages
import { ActionCenterPage } from './dashboard/ActionCenterPage';
import { VeraDashboardPage } from './dashboard/VeraDashboardPage';
import { PortfolioManagerPage } from './dashboard/PortfolioManagerPage';
import { ConcentrationRiskPage } from './dashboard/ConcentrationRiskPage';
import { AIDailyFeedPage } from './dashboard/AIDailyFeedPage';
import { WinnersLosersPage } from './dashboard/WinnersLosersPage';
import { SectorAllocationPage } from './dashboard/SectorAllocationPage';
import { PlaceholderPage } from './dashboard/PlaceholderPage';
import { ComparePortfoliosPage } from './dashboard/ComparePortfoliosPage';
import { ConsolidatedViewPage } from './dashboard/ConsolidatedViewPage';
import { PortfolioHealthPage } from './dashboard/PortfolioHealthPage';
import { CashFlowPage } from './dashboard/CashFlowPage';
import { RiskAdjustedPerformancePage } from './dashboard/RiskAdjustedPerformancePage';
import { MarketOpportunityPage } from './dashboard/MarketOpportunityPage';
import { WatchlistsPage } from './dashboard/WatchlistsPage';
import { ScreenersPage } from './dashboard/ScreenersPage';
import { StockPickersPage } from './dashboard/StockPickersPage';
import { AIStrategyPage } from './dashboard/AIStrategyPage';
import { FutureScenariosPage } from './dashboard/FutureScenariosPage';
import { PeerComparisonPage } from './dashboard/PeerComparisonPage';
import { StrategicPlannerPage } from './dashboard/StrategicPlannerPage';
import { TaxCenterPage } from './dashboard/TaxCenterPage';
import { TaxPlannerPage } from './dashboard/TaxPlannerPage';
import { CapitalGainsPage } from './dashboard/CapitalGainsPage';
import { TaxReportsPage } from './dashboard/TaxReportsPage';
import { MultiJurisdictionTaxPage } from './dashboard/MultiJurisdictionTaxPage';
import { ForeignTaxFilingPage } from './dashboard/ForeignTaxFilingPage';

// Learning Pages
import { AcademyPage } from './learning/AcademyPage';
import { CoursesPage } from './learning/CoursesPage';
import { AchievementsPage } from './learning/AchievementsPage';
import { EarnCreditsPage } from './learning/EarnCreditsPage';

// Community Pages
import { ForumPage } from './community/ForumPage';
import { BlogPage } from './community/BlogPage';

// Referral Pages
import { ReferralProgramPage } from './referral/ReferralProgramPage';

// Profile Pages
import { SettingsPage } from './profile/SettingsPage';
import { SubscriptionsPage } from './profile/SubscriptionsPage';
import { AcademyRecordPage } from './profile/AcademyRecordPage';

interface DashboardPageProps {
  isDark: boolean;
}

interface ActionItem {
  id: string;
  type: 'urgent' | 'warning' | 'info';
  ticker: string;
  title: string;
  description: string;
  value: string;
  timeframe: string;
  action: string;
}

export function DashboardPage({ isDark }: DashboardPageProps) {
  const [currentSection, setCurrentSection] = useState('vera-dashboard');
  const [criticalAlerts] = useState(1);
  const [itemsNeedAttention] = useState(6);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isAuthenticated] = useState(true); // User is authenticated in dashboard
  
  // Upgrade Modal State
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [upgradeFeatureName, setUpgradeFeatureName] = useState('');
  const [upgradeRequiredTier, setUpgradeRequiredTier] = useState<'standard' | 'pro' | 'tax-pack'>('standard');

  const userTierConfig = getUserTierConfig(CURRENT_USER_TIER);

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    // Close mobile sidebar when navigating
    setIsMobileSidebarOpen(false);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const handleLockedFeatureClick = (featureBadge: string, featureName: string) => {
    const requiredTier = getRequiredTierForFeature(featureBadge);
    if (requiredTier) {
      setUpgradeFeatureName(featureName);
      setUpgradeRequiredTier(requiredTier as 'standard' | 'pro' | 'tax-pack');
      setShowUpgradeModal(true);
    }
  };

  const actionItems: ActionItem[] = [
    {
      id: '1',
      type: 'urgent',
      ticker: 'DOC',
      title: 'DOC is 83% of your portfolio',
      description: "DOC makes up 83% of your portfolio. If it drops 20%, you lose $3,746.86.",
      value: '$3,746.86',
      timeframe: 'Act within 7 days',
      action: 'View details',
    },
    {
      id: '2',
      type: 'warning',
      ticker: 'SXL',
      title: 'SXL down 54%',
      description: "SXL has fallen 54%. Your unrealized loss is $7,505.82.",
      value: '',
      timeframe: '',
      action: 'Review position',
    },
    {
      id: '3',
      type: 'warning',
      ticker: 'DOC',
      title: 'DOC down 80%',
      description: "DOC has fallen 80%. Your unrealized loss is $74,937.2.",
      value: '',
      timeframe: '',
      action: 'Review position',
    },
    {
      id: '4',
      type: 'info',
      ticker: 'SXL',
      title: 'SXL is 22% of your portfolio',
      description: "SXL makes up 22% of your portfolio. If it drops 20%, you lose $1,286.712.",
      value: '$1,286.712',
      timeframe: 'Consider within 30 days',
      action: 'View details',
    },
  ];

  const portfolioStats = [
    { label: 'Total Value', value: '$29,599.72', subtext: 'Current value of all holdings', icon: DollarSign },
    { label: 'Total Gain/Loss', value: '-$83,119.86', subtext: 'Total unrealized gains since purchases', trend: 'down', icon: TrendingDown },
    { label: 'Holdings', value: '12', subtext: 'Number of active holdings', icon: BarChart3 },
  ];

  const getActionColor = (type: string) => {
    switch (type) {
      case 'urgent':
        return {
          border: '#ef4444',
          bg: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)',
        };
      case 'warning':
        return {
          border: '#f97316',
          bg: isDark ? 'rgba(249, 115, 22, 0.1)' : 'rgba(249, 115, 22, 0.05)',
        };
      default:
        return {
          border: '#6b7280',
          bg: isDark ? 'rgba(107, 114, 128, 0.1)' : 'rgba(107, 114, 128, 0.05)',
        };
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <DashboardSidebar 
        isDark={isDark} 
        currentSection={currentSection}
        onNavigate={handleNavigate}
        isMobileOpen={isMobileSidebarOpen}
        onMobileToggle={toggleMobileSidebar}
        onLockedFeatureClick={handleLockedFeatureClick}
      />

      {/* Main Content */}
      <div 
        className="flex-1 overflow-y-auto"
        style={{
          background: isDark ? '#0f172a' : '#f8fafc',
        }}
      >
        {/* Dashboard Content */}
        {currentSection === 'dashboard' && <VeraDashboardPage isDark={isDark} />}
        {currentSection === 'action-center' && <ActionCenterPage isDark={isDark} />}
        {currentSection === 'vera-dashboard' && <VeraDashboardPage isDark={isDark} />}
        {currentSection === 'classic-dashboard' && (
          <PlaceholderPage
            isDark={isDark}
            title="Classic Dashboard"
            description="Traditional portfolio view with detailed holdings and performance metrics"
            badge={{ label: 'Legacy', color: '#64748b' }}
            features={[
              'Comprehensive holdings table with real-time prices',
              'Performance charts and historical data',
              'Transaction history and cost basis tracking',
              'Customizable watchlists and alerts'
            ]}
          />
        )}
        {currentSection === 'vera-chat' && (
          <PlaceholderPage
            isDark={isDark}
            title="Vera Chat"
            description="Ask Vera anything about your portfolio, markets, or investment strategies"
            icon={MessageSquare}
            badge={{ label: 'AI-Powered', color: '#22D3EE' }}
            features={[
              'Natural language portfolio questions',
              'Real-time market insights and analysis',
              'Investment strategy recommendations',
              'Educational content and explanations'
            ]}
          />
        )}
        
        {/* Portfolio Section */}
        {currentSection === 'portfolio-manager' && <PortfolioManagerPage isDark={isDark} />}
        {currentSection === 'compare-portfolios' && <ComparePortfoliosPage isDark={isDark} />}
        {currentSection === 'consolidated-view' && <ConsolidatedViewPage isDark={isDark} />}
        {currentSection === 'portfolio-health' && <PortfolioHealthPage isDark={isDark} />}
        
        {/* Insights Section */}
        {currentSection === 'concentration-risk' && <ConcentrationRiskPage isDark={isDark} />}
        {currentSection === 'ai-daily-feed' && <AIDailyFeedPage isDark={isDark} />}
        {currentSection === 'winners-losers' && <WinnersLosersPage isDark={isDark} />}
        {currentSection === 'cash-flow' && <CashFlowPage isDark={isDark} />}
        {currentSection === 'sector-allocation' && <SectorAllocationPage isDark={isDark} />}
        {currentSection === 'risk-performance' && <RiskAdjustedPerformancePage isDark={isDark} />}
        {currentSection === 'market-opportunity' && <MarketOpportunityPage isDark={isDark} />}
        
        {/* Research Section */}
        {currentSection === 'watchlists' && <WatchlistsPage isDark={isDark} />}
        {currentSection === 'screeners' && <ScreenersPage isDark={isDark} />}
        {currentSection === 'stock-pickers' && <StockPickersPage isDark={isDark} />}

        {/* Strategic Planning Section */}
        {currentSection === 'ai-strategy' && <AIStrategyPage isDark={isDark} />}
        {currentSection === 'future-scenarios' && <FutureScenariosPage isDark={isDark} />}
        {currentSection === 'peer-comparison' && <PeerComparisonPage isDark={isDark} />}
        {currentSection === 'strategic-planner' && <StrategicPlannerPage isDark={isDark} />}

        {/* Tax Pack Section */}
        {currentSection === 'tax-center' && <TaxCenterPage isDark={isDark} />}
        {currentSection === 'tax-planner' && <TaxPlannerPage isDark={isDark} />}
        {currentSection === 'capital-gains' && <CapitalGainsPage isDark={isDark} />}
        {currentSection === 'tax-reports' && <TaxReportsPage isDark={isDark} />}
        {currentSection === 'multi-jurisdiction-tax' && <MultiJurisdictionTaxPage isDark={isDark} />}
        {currentSection === 'foreign-tax-filing' && <ForeignTaxFilingPage isDark={isDark} />}

        {/* Learning Section */}
        {currentSection === 'academy' && <AcademyPage isDark={isDark} />}
        {currentSection === 'courses' && <CoursesPage isDark={isDark} />}
        {currentSection === 'achievements' && <AchievementsPage isDark={isDark} />}
        {currentSection === 'earn-credits' && <EarnCreditsPage isDark={isDark} isAuthenticated={isAuthenticated} />}

        {/* Community Section */}
        {currentSection === 'forum' && <ForumPage isDark={isDark} />}
        {currentSection === 'blog' && <BlogPage isDark={isDark} />}

        {/* Referral Section */}
        {currentSection === 'referral-program' && <ReferralProgramPage isDark={isDark} isAuthenticated={isAuthenticated} />}

        {/* Profile Section */}
        {currentSection === 'settings' && <SettingsPage isDark={isDark} />}
        {currentSection === 'subscriptions' && <SubscriptionsPage isDark={isDark} />}
        {currentSection === 'academy-record' && <AcademyRecordPage isDark={isDark} />}
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal
        isDark={isDark}
        isOpen={showUpgradeModal}
        featureName={upgradeFeatureName}
        requiredTier={upgradeRequiredTier}
        userTierConfig={userTierConfig}
        onClose={() => setShowUpgradeModal(false)}
      />
    </div>
  );
}