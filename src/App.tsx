import { useState, lazy, Suspense } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "./components/ui/button";
import { Layout } from "./components/Layout";
import { useTheme } from "./hooks/useTheme";
import { AuthProvider } from "./contexts/AuthContext";
import type { PageType } from "./types/navigation";

/**
 * Verafy AI - Portfolio Intelligence Platform
 * Build: 2025-01-14-CACHE-CLEAR-v2
 * Fresh deployment with all cached assets removed
 */

// Lazy load pages for code splitting (80% bundle size reduction)
const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const PricingPage = lazy(() => import("./pages/PricingPage").then(m => ({ default: m.PricingPage })));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage").then(m => ({ default: m.FeaturesPage })));
const EnterprisePage = lazy(() => import("./pages/EnterprisePage").then(m => ({ default: m.EnterprisePage })));
const MarketsPage = lazy(() => import("./pages/MarketsPage").then(m => ({ default: m.MarketsPage })));
const DemoPage = lazy(() => import("./pages/DemoPage").then(m => ({ default: m.DemoPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const DocumentationPage = lazy(() => import("./pages/DocumentationPage").then(m => ({ default: m.DocumentationPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const ChatPage = lazy(() => import("./pages/ChatPage").then(m => ({ default: m.ChatPage })));
const SignInPage = lazy(() => import("./pages/SignInPage").then(m => ({ default: m.SignInPage })));
const SignUpPage = lazy(() => import("./pages/SignUpPage").then(m => ({ default: m.SignUpPage })));
const FAQPage = lazy(() => import("./pages/FAQPage").then(m => ({ default: m.FAQPage })));
const CompliancePage = lazy(() => import("./pages/CompliancePage").then(m => ({ default: m.CompliancePage })));
const DisclaimersPage = lazy(() => import("./pages/DisclaimersPage").then(m => ({ default: m.DisclaimersPage })));
const SecurityPage = lazy(() => import("./pages/SecurityPage").then(m => ({ default: m.SecurityPage })));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage").then(m => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import("./pages/TermsPage").then(m => ({ default: m.TermsPage })));
const RefundsPage = lazy(() => import("./pages/RefundsPage").then(m => ({ default: m.RefundsPage })));
const VeraAIPage = lazy(() => import("./pages/VeraAIPage").then(m => ({ default: m.VeraAIPage })));
const ReleaseNotesPage = lazy(() => import("./pages/ReleaseNotesPage").then(m => ({ default: m.ReleaseNotesPage })));
const StarterPlanPage = lazy(() => import("./pages/StarterPlanPage").then(m => ({ default: m.StarterPlanPage })));
const StandardPlanPage = lazy(() => import("./pages/StandardPlanPage").then(m => ({ default: m.StandardPlanPage })));
const ProPlanPage = lazy(() => import("./pages/ProPlanPage").then(m => ({ default: m.ProPlanPage })));
const TaxPackPage = lazy(() => import("./pages/TaxPackPage").then(m => ({ default: m.TaxPackPage })));
const GlossaryPage = lazy(() => import("./pages/GlossaryPage").then(m => ({ default: m.GlossaryPage })));
const DashboardPage = lazy(() => import("./pages/DashboardPage").then(m => ({ default: m.DashboardPage })));
const ComparePlansPage = lazy(() => import("./pages/ComparePlansPage").then(m => ({ default: m.ComparePlansPage })));
// InvestorPitchPage loaded eagerly for instant investor access
import { InvestorPitchPage } from "./pages/InvestorPitchPage";
const InvestorVideoPage = lazy(() => import("./pages/InvestorVideoPage").then(m => ({ default: m.InvestorVideoPage })));
const InvestorCommercialsPage = lazy(() => import("./pages/InvestorCommercialsPage").then(m => ({ default: m.InvestorCommercialsPage })));
const InvestorRoadmapPage = lazy(() => import("./pages/InvestorRoadmapPage").then(m => ({ default: m.InvestorRoadmapPage })));
const InvestorFinancialsPage = lazy(() => import("./pages/InvestorFinancialsPage").then(m => ({ default: m.InvestorFinancialsPage })));
const InvestorCompetitiveAnalysisPage = lazy(() => import("./pages/InvestorCompetitiveAnalysisPage").then(m => ({ default: m.InvestorCompetitiveAnalysisPage })));
const RewardsPage = lazy(() => import("./pages/RewardsPage").then(m => ({ default: m.RewardsPage })));
const LearnPage = lazy(() => import("./pages/LearnPage").then(m => ({ default: m.LearnPage })));

// Lazy load demo modes (only loaded when needed)
const PricingSlide = lazy(() => import("./components/PricingSlide").then(m => ({ default: m.PricingSlide })));
const DesignSystemShowcase = lazy(() => import("./components/DesignSystemShowcase").then(m => ({ default: m.DesignSystemShowcase })));
const LogoExporter = lazy(() => import("./components/LogoExporter").then(m => ({ default: m.LogoExporter })));
const AuthButtonShowcase = lazy(() => import("./components/AuthButtonShowcase").then(m => ({ default: m.AuthButtonShowcase })));
const InvestorPitchDeck = lazy(() => import("./components/InvestorPitchDeck").then(m => ({ default: m.InvestorPitchDeck })));
const InvestorPitchVideo = lazy(() => import("./components/InvestorPitchVideo").then(m => ({ default: m.InvestorPitchVideo })));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      <div className="mt-4 text-center text-slate-400">Loading...</div>
    </div>
  </div>
);

// Extracted reusable component for mode toggle buttons
interface ModeToggleButtonsProps {
  isDark: boolean;
  onToggleDark: () => void;
  onBackToWeb: () => void;
}

const ModeToggleButtons = ({ isDark, onToggleDark, onBackToWeb }: ModeToggleButtonsProps) => (
  <div className="fixed bottom-4 right-4 z-50 flex gap-2">
    <Button 
      variant="outline" 
      size="icon" 
      className="bg-slate-900 border-slate-700 hover:bg-slate-800"
      onClick={onToggleDark}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? <Sun className="h-4 w-4 text-slate-400" aria-hidden="true" /> : <Moon className="h-4 w-4 text-slate-400" aria-hidden="true" />}
    </Button>
    <Button 
      variant="outline" 
      size="icon" 
      className="bg-slate-900 border-slate-700 hover:bg-slate-800"
      onClick={onBackToWeb}
      title="Switch to Web View"
      aria-label="Switch to Web View"
    >
      <Monitor className="h-4 w-4 text-slate-400" aria-hidden="true" />
    </Button>
  </div>
);

export default function App() {
  const [mode, setMode] = useState<'web' | 'slide' | 'design' | 'export' | 'auth' | 'investor' | 'video'>('web');
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isDark, setIsDark] = useState(true);
  const { theme, setTheme } = useTheme();

  // Demo mode renderers (slide, design, export, auth)
  if (mode === 'slide') {
    return (
      <Suspense fallback={<PageLoader />}>
        <PricingSlide isDark={isDark} />
        <ModeToggleButtons isDark={isDark} onToggleDark={() => setIsDark(!isDark)} onBackToWeb={() => setMode('web')} />
      </Suspense>
    );
  }

  if (mode === 'design') {
    return (
      <Suspense fallback={<PageLoader />}>
        <DesignSystemShowcase isDark={isDark} />
        <ModeToggleButtons isDark={isDark} onToggleDark={() => setIsDark(!isDark)} onBackToWeb={() => setMode('web')} />
      </Suspense>
    );
  }

  if (mode === 'export') {
    return (
      <Suspense fallback={<PageLoader />}>
        <LogoExporter isDark={isDark} />
        <ModeToggleButtons isDark={isDark} onToggleDark={() => setIsDark(!isDark)} onBackToWeb={() => setMode('web')} />
      </Suspense>
    );
  }

  if (mode === 'auth') {
    return (
      <Suspense fallback={<PageLoader />}>
        <AuthButtonShowcase isDark={isDark} />
        <ModeToggleButtons isDark={isDark} onToggleDark={() => setIsDark(!isDark)} onBackToWeb={() => setMode('web')} />
      </Suspense>
    );
  }

  if (mode === 'investor') {
    return (
      <Suspense fallback={<PageLoader />}>
        <InvestorPitchDeck isDark={isDark} />
        <ModeToggleButtons isDark={isDark} onToggleDark={() => setIsDark(!isDark)} onBackToWeb={() => setMode('web')} />
      </Suspense>
    );
  }

  if (mode === 'video') {
    return (
      <Suspense fallback={<PageLoader />}>
        <InvestorPitchVideo isDark={isDark} onClose={() => setMode('web')} />
      </Suspense>
    );
  }

  // Main web application
  return (
    <AuthProvider>
    <Layout
      isDark={isDark}
      onToggleDark={() => setIsDark(!isDark)}
      currentPage={currentPage}
      onNavigate={setCurrentPage}
      theme={theme}
      onThemeChange={setTheme}
      onModeChange={setMode}
    >
      {/* Page Content - Lazy loaded with Suspense */}
      <Suspense fallback={<PageLoader />}>
        {currentPage === 'home' && <HomePage isDark={isDark} />}
        {currentPage === 'pricing' && <PricingPage isDark={isDark} />}
        {currentPage === 'features' && <FeaturesPage isDark={isDark} />}
        {currentPage === 'enterprise' && <EnterprisePage isDark={isDark} />}
        {currentPage === 'markets' && <MarketsPage isDark={isDark} />}
        {currentPage === 'demo' && <DemoPage isDark={isDark} />}
        {currentPage === 'about' && <AboutPage isDark={isDark} />}
        {currentPage === 'docs' && <DocumentationPage isDark={isDark} />}
        {currentPage === 'contact' && <ContactPage isDark={isDark} />}
        {currentPage === 'chat' && <ChatPage isDark={isDark} />}
        {currentPage === 'signin' && <SignInPage isDark={isDark} onNavigate={setCurrentPage} />}
        {currentPage === 'signup' && <SignUpPage isDark={isDark} onNavigate={setCurrentPage} />}
        {currentPage === 'faq' && <FAQPage isDark={isDark} />}
        {currentPage === 'compliance' && <CompliancePage isDark={isDark} />}
        {currentPage === 'disclaimers' && <DisclaimersPage isDark={isDark} />}
        {currentPage === 'security' && <SecurityPage isDark={isDark} />}
        {currentPage === 'privacy' && <PrivacyPolicyPage isDark={isDark} />}
        {currentPage === 'terms' && <TermsPage isDark={isDark} />}
        {currentPage === 'refunds' && <RefundsPage isDark={isDark} />}
        {currentPage === 'veraai' && <VeraAIPage isDark={isDark} />}
        {currentPage === 'release-notes' && <ReleaseNotesPage isDark={isDark} />}
        {currentPage === 'starter-plan' && <StarterPlanPage isDark={isDark} />}
        {currentPage === 'standard-plan' && <StandardPlanPage isDark={isDark} />}
        {currentPage === 'pro-plan' && <ProPlanPage isDark={isDark} />}
        {currentPage === 'tax-pack' && <TaxPackPage isDark={isDark} />}
        {currentPage === 'glossary' && <GlossaryPage isDark={isDark} />}
        {currentPage === 'dashboard' && <DashboardPage isDark={isDark} />}
        {currentPage === 'compare-plans' && <ComparePlansPage isDark={isDark} />}
        {currentPage === 'investor-pitch' && <InvestorPitchPage isDark={isDark} />}
        {currentPage === 'investor-video' && <InvestorVideoPage isDark={isDark} />}
        {currentPage === 'investor-commercials' && <InvestorCommercialsPage isDark={isDark} />}
        {currentPage === 'investor-roadmap' && <InvestorRoadmapPage isDark={isDark} />}
        {currentPage === 'investor-financials' && <InvestorFinancialsPage isDark={isDark} />}
        {currentPage === 'investor-competitive-analysis' && <InvestorCompetitiveAnalysisPage isDark={isDark} />}
        {currentPage === 'rewards' && <RewardsPage isDark={isDark} />}
        {currentPage === 'learn' && <LearnPage isDark={isDark} />}
      </Suspense>
    </Layout>
    </AuthProvider>
  );
}