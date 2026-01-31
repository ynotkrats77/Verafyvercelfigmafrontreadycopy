import { useState, lazy, Suspense } from 'react';
import { DashboardSidebar } from '../components/Sidebar';
import { getUserTierConfig, CURRENT_USER_TIER, getRequiredTierForFeature } from '../config/userTier';
import { UpgradeModal } from '../components/UpgradeModal';
import {
  DollarSign,
  BarChart3,
  TrendingDown,
  MessageSquare,
} from 'lucide-react';

// Loading fallback component
const PageLoader = ({ isDark }: { isDark: boolean }) => (
  <div className="flex items-center justify-center h-full min-h-[400px]">
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin"
        style={{ borderColor: isDark ? '#22d3ee' : '#0891b2', borderTopColor: 'transparent' }}
      />
      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Loading...</span>
    </div>
  </div>
);

// Dashboard Content Pages - Lazy loaded
const ActionCenterPage = lazy(() => import('./dashboard/ActionCenterPage').then(m => ({ default: m.ActionCenterPage })));
const VeraDashboardPage = lazy(() => import('./dashboard/VeraDashboardPage').then(m => ({ default: m.VeraDashboardPage })));
const PortfolioManagerPage = lazy(() => import('./dashboard/PortfolioManagerPage').then(m => ({ default: m.PortfolioManagerPage })));
const ConcentrationRiskPage = lazy(() => import('./dashboard/ConcentrationRiskPage').then(m => ({ default: m.ConcentrationRiskPage })));
const AIDailyFeedPage = lazy(() => import('./dashboard/AIDailyFeedPage').then(m => ({ default: m.AIDailyFeedPage })));
const WinnersLosersPage = lazy(() => import('./dashboard/WinnersLosersPage').then(m => ({ default: m.WinnersLosersPage })));
const SectorAllocationPage = lazy(() => import('./dashboard/SectorAllocationPage').then(m => ({ default: m.SectorAllocationPage })));
const PlaceholderPage = lazy(() => import('./dashboard/PlaceholderPage').then(m => ({ default: m.PlaceholderPage })));
const ComparePortfoliosPage = lazy(() => import('./dashboard/ComparePortfoliosPage').then(m => ({ default: m.ComparePortfoliosPage })));
const ConsolidatedViewPage = lazy(() => import('./dashboard/ConsolidatedViewPage').then(m => ({ default: m.ConsolidatedViewPage })));
const PortfolioHealthPage = lazy(() => import('./dashboard/PortfolioHealthPage').then(m => ({ default: m.PortfolioHealthPage })));
const CashFlowPage = lazy(() => import('./dashboard/CashFlowPage').then(m => ({ default: m.CashFlowPage })));
const RiskAdjustedPerformancePage = lazy(() => import('./dashboard/RiskAdjustedPerformancePage').then(m => ({ default: m.RiskAdjustedPerformancePage })));
const MarketOpportunityPage = lazy(() => import('./dashboard/MarketOpportunityPage').then(m => ({ default: m.MarketOpportunityPage })));
const WatchlistsPage = lazy(() => import('./dashboard/WatchlistsPage').then(m => ({ default: m.WatchlistsPage })));
const ScreenersPage = lazy(() => import('./dashboard/ScreenersPage').then(m => ({ default: m.ScreenersPage })));
const StockPickersPage = lazy(() => import('./dashboard/StockPickersPage').then(m => ({ default: m.StockPickersPage })));
const AIStrategyPage = lazy(() => import('./dashboard/AIStrategyPage').then(m => ({ default: m.AIStrategyPage })));
const FutureScenariosPage = lazy(() => import('./dashboard/FutureScenariosPage').then(m => ({ default: m.FutureScenariosPage })));
const PeerComparisonPage = lazy(() => import('./dashboard/PeerComparisonPage').then(m => ({ default: m.PeerComparisonPage })));
const StrategicPlannerPage = lazy(() => import('./dashboard/StrategicPlannerPage').then(m => ({ default: m.StrategicPlannerPage })));
const TaxCenterPage = lazy(() => import('./dashboard/TaxCenterPage').then(m => ({ default: m.TaxCenterPage })));
const TaxPlannerPage = lazy(() => import('./dashboard/TaxPlannerPage').then(m => ({ default: m.TaxPlannerPage })));
const CapitalGainsPage = lazy(() => import('./dashboard/CapitalGainsPage').then(m => ({ default: m.CapitalGainsPage })));
const TaxReportsPage = lazy(() => import('./dashboard/TaxReportsPage').then(m => ({ default: m.TaxReportsPage })));
const MultiJurisdictionTaxPage = lazy(() => import('./dashboard/MultiJurisdictionTaxPage').then(m => ({ default: m.MultiJurisdictionTaxPage })));
const ForeignTaxFilingPage = lazy(() => import('./dashboard/ForeignTaxFilingPage').then(m => ({ default: m.ForeignTaxFilingPage })));

// Learning Pages - Lazy loaded
const AcademyPage = lazy(() => import('./learning/AcademyPage').then(m => ({ default: m.AcademyPage })));
const CoursesPage = lazy(() => import('./learning/CoursesPage').then(m => ({ default: m.CoursesPage })));
const AchievementsPage = lazy(() => import('./learning/AchievementsPage').then(m => ({ default: m.AchievementsPage })));
const EarnCreditsPage = lazy(() => import('./learning/EarnCreditsPage').then(m => ({ default: m.EarnCreditsPage })));

// Community Pages - Lazy loaded
const ForumPage = lazy(() => import('./community/ForumPage').then(m => ({ default: m.ForumPage })));
const BlogPage = lazy(() => import('./community/BlogPage').then(m => ({ default: m.BlogPage })));

// Referral Pages - Lazy loaded
const ReferralProgramPage = lazy(() => import('./referral/ReferralProgramPage').then(m => ({ default: m.ReferralProgramPage })));

// Profile Pages - Lazy loaded
const SettingsPage = lazy(() => import('./profile/SettingsPage').then(m => ({ default: m.SettingsPage })));
const SubscriptionsPage = lazy(() => import('./profile/SubscriptionsPage').then(m => ({ default: m.SubscriptionsPage })));
const AcademyRecordPage = lazy(() => import('./profile/AcademyRecordPage').then(m => ({ default: m.AcademyRecordPage })));

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
        <Suspense fallback={<PageLoader isDark={isDark} />}>
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
          {currentSection === 'ai-strategy-insights' && <AIStrategyPage isDark={isDark} />}
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
          {currentSection === 'help' && (
            <PlaceholderPage
              isDark={isDark}
              title="Help Centre"
              description="Get help with your Verafy AI account and portfolio management"
              badge={{ label: 'Support', color: '#22D3EE' }}
              features={[
                'Browse FAQs and common questions',
                'Access documentation and guides',
                'Ask Vera for instant assistance',
                'Submit support tickets for account issues'
              ]}
            />
          )}
        </Suspense>
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