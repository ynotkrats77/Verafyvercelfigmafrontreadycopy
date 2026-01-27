import { motion } from 'motion/react';
import { 
  Sparkles, 
  Search, 
  AlertTriangle, 
  MessageCircle, 
  Target, 
  Moon, 
  TrendingUp, 
  DollarSign, 
  Activity, 
  PieChart,
  Calculator,
  Shield,
  Ban,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { ThemedButton } from '../components/ui/themed-button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';

interface FeaturesPageProps {
  isDark: boolean;
}

export function FeaturesPage({ isDark }: FeaturesPageProps) {
  const differentiators = [
    {
      icon: Search,
      title: "Vera finds opportunities",
      description: "Vera could see $2,500 by harvesting your FGF loss."
    },
    {
      icon: AlertTriangle,
      title: "Vera warns before mistakes",
      description: "DOC is 94% of your portfolio. If it drops 25%, you lose $4.8k."
    },
    {
      icon: MessageCircle,
      title: "Vera explains in plain English",
      description: "No jargon. No confusion. Just clear advice you can act on."
    },
    {
      icon: Calculator,
      title: "Vera never guesses",
      description: "Every recommendation is backed by calculations from your data."
    },
    {
      icon: Target,
      title: "Vera adapts to your plan",
      description: "Shorter-term goals. Dividend plan personality. Pro user?"
    },
    {
      icon: Moon,
      title: "Vera works while you sleep",
      description: "Analyzing patterns, spotting risks, finding savings opportunities."
    }
  ];

  const insightCards = [
    {
      icon: DollarSign,
      title: "Tax Opportunities",
      badge: "FREE",
      highlight: "Harvest $9k in losses before June 30. Save $3,000 in taxes.",
      features: [
        "Built-in tax harvesting strategies",
        "Alerts savings, and warns when safe rules apply",
        "Year-end deadline countdown",
        "Tax-loss offset recommendations",
        "Impurity credit tracking (AU)",
        "Short-term vs long-term analysis"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Concentration Warnings",
      badge: "ALL PLANS",
      highlight: "DOC is 54% of your portfolio. Here's the risk...",
      features: [
        "Vera alerts you when one stock becomes too large",
        "Real-time concentration tracking",
        "Diversification calculations",
        "Rebalancing suggestions",
        "Priority-based alerts"
      ]
    },
    {
      icon: Activity,
      title: "Behavior Patterns",
      badge: "STANDARD+",
      highlight: "You've sold early almost every this year. Here's the impact...",
      features: [
        "Sees term patterns in your trading that hurt performance",
        "Buy-high/sell-low detection",
        "Overtrading alerts",
        "Win rate analysis",
        "Multi-year pattern alerts"
      ]
    },
    {
      icon: TrendingUp,
      title: "Performance Alerts",
      badge: "ALL PLANS",
      highlight: "TMG up 75%. Consider taking profits or holding?",
      features: [
        "Vera tracks big winners and losers, suggests actions based on your situation",
        "Profit target notifications",
        "Position size changes",
        "Tax-aware selling advice",
        "Unrealized gain tracking"
      ]
    }
  ];

  const chatFeatures = [
    "500 questions per month",
    "Backed by real calculations",
    "Instant position analysis",
    "What-if scenario modeling"
  ];

  const guardrails = [
    {
      icon: Calculator,
      title: "Calculation-Based",
      description: "Every recommendation is backed by actual calculations from your data. Vera never guesses."
    },
    {
      icon: Ban,
      title: "No Trade Execution",
      description: "Vera suggests actions but never executes trades. You stay in full control."
    },
    {
      icon: Shield,
      title: "Ethical Boundaries",
      description: "Vera won't encourage excessive risk or help with anything illegal or unethical."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
          <div 
            className="absolute inset-0 rounded-full blur-[120px]"
            style={{
              background: `radial-gradient(circle, var(--theme-primary), transparent 70%)`
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge 
              className="mb-4"
              style={{
                background: 'var(--theme-primary)',
                color: 'white',
                border: 'none'
              }}
            >
              HOW VERA WORKS
            </Badge>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Meet Vera.
            </h1>
            
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Your AI advisor who tells you{' '}
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                exactly what to do.
              </span>
            </h2>
            
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              While other platforms give you charts, Vera gives you answers. She explains your portfolio 24/7, spots opportunities and risks, and warns you before you make mistakes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Vera Different */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              What makes Vera different?
            </h2>
            <p className={`text-lg ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Vera isn't a dashboard. She's your AI advisor.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className={`p-6 h-full backdrop-blur-md border-2 transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-slate-900/50 border-slate-800 hover:border-theme-primary/50' 
                    : 'bg-white/50 border-slate-200 hover:border-theme-primary/50'
                }`}>
                  <div 
                    className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                    style={{
                      background: 'var(--theme-primary-alpha)',
                      boxShadow: '0 4px 12px var(--theme-glow)'
                    }}
                  >
                    <item.icon className="h-6 w-6" style={{ color: 'var(--theme-primary)' }} />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Vera Tells You */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              What Vera tells you
            </h2>
            <p className={`text-lg ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Real insights from your portfolio, not generic advice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {insightCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className={`p-8 h-full backdrop-blur-md border-2 transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20' 
                    : 'bg-white/50 border-slate-200 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/20'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          background: 'var(--theme-primary-alpha)',
                          boxShadow: '0 4px 12px var(--theme-glow)'
                        }}
                      >
                        <card.icon className="h-5 w-5" style={{ color: 'var(--theme-primary)' }} />
                      </div>
                      <h3 className={`text-xl font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {card.title}
                      </h3>
                    </div>
                    <Badge 
                      style={{
                        background: 'var(--theme-primary)',
                        color: 'white',
                        border: 'none'
                      }}
                    >
                      {card.badge}
                    </Badge>
                  </div>

                  <div 
                    className={`p-4 rounded-lg mb-4 border ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700' 
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <p className={`font-medium ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      "{card.highlight}"
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 
                          className="h-5 w-5 mt-0.5 flex-shrink-0" 
                          style={{ color: 'var(--theme-primary)' }} 
                        />
                        <span className={`text-sm ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask Vera Anything */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className={`p-8 md:p-12 backdrop-blur-md border-2 ${
              isDark 
                ? 'bg-slate-900/50 border-slate-800' 
                : 'bg-white/50 border-slate-200'
            }`}>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left side - Feature description */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="h-6 w-6" style={{ color: 'var(--theme-primary)' }} />
                    <Badge 
                      style={{
                        background: 'var(--theme-secondary)',
                        color: 'white',
                        border: 'none'
                      }}
                    >
                      Pro Only
                    </Badge>
                  </div>
                  
                  <h2 className={`text-3xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Ask Vera Anything
                  </h2>
                  
                  <p className={`mb-6 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Pro users can chat with Vera. Ask about specific positions, model scenarios, get tax advice, or just ask "what should I do?"
                  </p>

                  <ul className="space-y-3 mb-6">
                    {chatFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 
                          className="h-5 w-5 flex-shrink-0" 
                          style={{ color: 'var(--theme-primary)' }} 
                        />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ThemedButton variant="primary" size="md">
                    Upgrade to Pro
                  </ThemedButton>
                </div>

                {/* Right side - Chat example */}
                <div 
                  className={`p-6 rounded-xl border-2 ${
                    isDark 
                      ? 'bg-slate-800/50 border-slate-700' 
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="space-y-4">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div 
                        className="px-4 py-2 rounded-lg max-w-[80%]"
                        style={{
                          background: 'var(--theme-primary)',
                          color: 'white'
                        }}
                      >
                        <p className="text-sm font-medium">Should I sell DOC today?</p>
                      </div>
                    </div>

                    {/* Vera response */}
                    <div className="flex justify-start">
                      <div className={`px-4 py-3 rounded-lg max-w-[85%] ${
                        isDark 
                          ? 'bg-slate-700/50' 
                          : 'bg-slate-100'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="h-4 w-4" style={{ color: 'var(--theme-primary)' }} />
                          <span className={`text-xs font-medium ${
                            isDark ? 'text-slate-300' : 'text-slate-700'
                          }`}>
                            Vera
                          </span>
                        </div>
                        <p className={`text-sm mb-2 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          DOC is up 8% today. Here's what I see:
                        </p>
                        <ul className={`text-sm space-y-1 ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          <li>• You bought at $2.10, now $4.85</li>
                          <li>• You've held 6 months (short-term tax)</li>
                          <li>• It's 54% of your portfolio (risky!)</li>
                        </ul>
                        <p className={`text-sm mt-3 font-medium ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          My take:{' '}
                          <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                            Sell half to reduce concentration and lock in gains. Tax cost ~$800.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Built with Guardrails */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-6 w-6" style={{ color: 'var(--theme-primary)' }} />
              <h2 className={`text-4xl font-bold ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Built with guardrails
              </h2>
            </div>
            <p className={`text-lg ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Vera is designed to help, not to harm
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {guardrails.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className={`p-8 h-full backdrop-blur-md border-2 text-center ${
                  isDark 
                    ? 'bg-slate-900/50 border-slate-800' 
                    : 'bg-white/50 border-slate-200'
                }`}>
                  <div 
                    className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                    style={{
                      background: 'var(--theme-primary-alpha)',
                      boxShadow: '0 4px 12px var(--theme-glow)'
                    }}
                  >
                    <item.icon className="h-7 w-7" style={{ color: 'var(--theme-primary)' }} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl p-12 text-center"
            style={{
              background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
              boxShadow: '0 20px 60px var(--theme-glow-strong)'
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-3xl" />
            
            <div className="relative z-10">
              <Sparkles className="h-12 w-12 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to meet Vera?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your 14-day free trial. Get full access to Vera's insights, tax optimization, and chat. Cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ThemedButton 
                  variant="outline"
                  size="lg"
                  style={{
                    background: 'white',
                    color: 'var(--theme-primary)',
                    border: '2px solid white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Start 14-Day Pro Trial
                </ThemedButton>
                <ThemedButton 
                  variant="outline"
                  size="lg"
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  See Pricing
                </ThemedButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}