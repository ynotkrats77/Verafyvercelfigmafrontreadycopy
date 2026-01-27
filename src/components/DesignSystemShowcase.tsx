import { Smartphone, Monitor, Tablet, Menu, Bell, User, Search, Settings, Home, BarChart3, Wallet, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface DesignSystemShowcaseProps {
  isDark: boolean;
}

export function DesignSystemShowcase({ isDark }: DesignSystemShowcaseProps) {
  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950' 
        : 'bg-gradient-to-b from-slate-50 via-white to-slate-100'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">System</span>
          </h1>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-3xl mx-auto`}>
            A cohesive visual language for Verafy AI across web and mobile platforms
          </p>
        </motion.div>

        {/* Logo Variations */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Logo Variations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Full Horizontal */}
            <div className={`p-8 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <p className={`text-sm font-semibold mb-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                HORIZONTAL (Desktop/Web)
              </p>
              <div className="flex items-center justify-center py-8">
                <Logo variant="full" size="lg" colorScheme="cyan" isDark={isDark} />
              </div>
              <p className={`text-xs mt-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Primary usage for navigation headers and hero sections
              </p>
            </div>

            {/* Icon Only */}
            <div className={`p-8 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <p className={`text-sm font-semibold mb-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                ICON (Mobile/App)
              </p>
              <div className="flex items-center justify-center py-8">
                <Logo variant="icon" size="xl" colorScheme="cyan" isDark={isDark} />
              </div>
              <p className={`text-xs mt-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Mobile navigation, app icons, and compact spaces
              </p>
            </div>

            {/* Stacked */}
            <div className={`p-8 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <p className={`text-sm font-semibold mb-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                STACKED (Tablet/Square)
              </p>
              <div className="flex items-center justify-center py-8">
                <Logo variant="stacked" size="md" colorScheme="cyan" isDark={isDark} />
              </div>
              <p className={`text-xs mt-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Square formats, loading screens, and onboarding
              </p>
            </div>
          </div>

          {/* Color Scheme Options */}
          <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Color Schemes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Pure Cyan */}
            <div className={`p-8 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <p className={`text-xs font-bold mb-6 tracking-wider ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                PURE CYAN
              </p>
              <div className="flex flex-col items-center gap-6">
                <Logo variant="icon" size="lg" colorScheme="cyan" isDark={isDark} />
                <Logo variant="full" size="sm" colorScheme="cyan" isDark={isDark} />
              </div>
              <div className={`mt-6 pt-4 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <p className={`text-xs font-semibold mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Primary Brand
                </p>
                <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  #22D3EE
                </p>
              </div>
            </div>

            {/* Gradient */}
            <div className={`p-8 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <p className={`text-xs font-bold mb-6 tracking-wider ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                GRADIENT
              </p>
              <div className="flex flex-col items-center gap-6">
                <Logo variant="icon" size="lg" colorScheme="gradient" isDark={isDark} />
                <Logo variant="full" size="sm" colorScheme="gradient" isDark={isDark} />
              </div>
              <div className={`mt-6 pt-4 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <p className={`text-xs font-semibold mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Premium Features
                </p>
                <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  #06B6D4 → #22D3EE
                </p>
              </div>
            </div>

            {/* Monochrome */}
            <div className={`p-8 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <p className={`text-xs font-bold mb-6 tracking-wider ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                MONOCHROME
              </p>
              <div className="flex flex-col items-center gap-6">
                <Logo variant="icon" size="lg" colorScheme="monochrome" isDark={isDark} />
                <Logo variant="full" size="sm" colorScheme="monochrome" isDark={isDark} />
              </div>
              <div className={`mt-6 pt-4 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <p className={`text-xs font-semibold mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Professional Use
                </p>
                <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  White / Black
                </p>
              </div>
            </div>

            {/* White */}
            <div className={`p-8 rounded-2xl border-2 backdrop-blur-md bg-slate-900 border-slate-700`}>
              <p className={`text-xs font-bold mb-6 tracking-wider text-cyan-300`}>
                WHITE
              </p>
              <div className="flex flex-col items-center gap-6">
                <Logo variant="icon" size="lg" colorScheme="white" isDark={isDark} />
                <Logo variant="full" size="sm" colorScheme="white" isDark={isDark} />
              </div>
              <div className={`mt-6 pt-4 border-t border-slate-700`}>
                <p className={`text-xs font-semibold mb-1 text-slate-400`}>
                  Dark Backgrounds
                </p>
                <p className={`text-xs text-slate-500`}>
                  #FFFFFF
                </p>
              </div>
            </div>
          </div>

          {/* Size Variations */}
          <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Size Variations
          </h3>
          <div className={`p-10 rounded-2xl border-2 backdrop-blur-md ${
            isDark 
              ? 'bg-slate-900/50 border-cyan-500/20' 
              : 'bg-white border-slate-300'
          }`}>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <span className={`text-xs font-semibold w-16 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  XL
                </span>
                <Logo variant="full" size="xl" colorScheme="cyan" isDark={isDark} />
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs font-semibold w-16 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  LG
                </span>
                <Logo variant="full" size="lg" colorScheme="cyan" isDark={isDark} />
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs font-semibold w-16 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  MD
                </span>
                <Logo variant="full" size="md" colorScheme="cyan" isDark={isDark} />
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs font-semibold w-16 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  SM
                </span>
                <Logo variant="full" size="sm" colorScheme="cyan" isDark={isDark} />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Responsive Navigation Examples */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Navigation Components
          </h2>

          {/* Desktop Navigation */}
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <Monitor className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  DESKTOP HEADER
                </span>
              </div>
              <div className={`p-4 rounded-xl border ${
                isDark 
                  ? 'bg-slate-950/50 border-slate-800' 
                  : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center justify-between">
                  <Logo variant="full" size="md" isDark={isDark} />
                  <nav className="hidden md:flex items-center gap-6">
                    {['Portfolio', 'Analytics', 'Tax Center', 'Settings'].map((item) => (
                      <button 
                        key={item}
                        className={`text-sm font-medium transition-all duration-300 ${
                          isDark 
                            ? 'text-slate-400 hover:text-cyan-400' 
                            : 'text-slate-600 hover:text-cyan-600'
                        } hover:scale-105`}
                      >
                        {item}
                      </button>
                    ))}
                  </nav>
                  <div className="flex items-center gap-3">
                    <button className={`p-2 rounded-lg border transition-all duration-300 ${
                      isDark 
                        ? 'border-cyan-500/20 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30' 
                        : 'border-slate-200 hover:bg-slate-100 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20'
                    }`}>
                      <Bell className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                    </button>
                    <button className={`p-2 rounded-lg border transition-all duration-300 ${
                      isDark 
                        ? 'border-cyan-500/20 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30' 
                        : 'border-slate-200 hover:bg-slate-100 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20'
                    }`}>
                      <User className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`p-6 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <Smartphone className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  MOBILE HEADER
                </span>
              </div>
              <div className={`p-4 rounded-xl border ${
                isDark 
                  ? 'bg-slate-950/50 border-slate-800' 
                  : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center justify-between">
                  <button className={`p-2 rounded-lg transition-colors ${
                    isDark 
                      ? 'hover:bg-slate-800' 
                      : 'hover:bg-slate-100'
                  }`}>
                    <Menu className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                  </button>
                  <Logo variant="icon" size="md" isDark={isDark} />
                  <button className={`p-2 rounded-lg transition-colors ${
                    isDark 
                      ? 'hover:bg-slate-800' 
                      : 'hover:bg-slate-100'
                  }`}>
                    <Bell className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className={`p-6 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <Smartphone className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  MOBILE BOTTOM NAV
                </span>
              </div>
              <div className={`p-4 rounded-xl border ${
                isDark 
                  ? 'bg-slate-950/50 border-slate-800' 
                  : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center justify-around">
                  {[
                    { icon: Home, label: 'Home', active: true },
                    { icon: BarChart3, label: 'Analytics', active: false },
                    { icon: Wallet, label: 'Portfolio', active: false },
                    { icon: TrendingUp, label: 'Insights', active: false },
                    { icon: Settings, label: 'Settings', active: false }
                  ].map(({ icon: Icon, label, active }) => (
                    <button 
                      key={label}
                      className="flex flex-col items-center gap-1 group"
                    >
                      <div className={`p-2 rounded-lg transition-all ${
                        active 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                          : isDark 
                            ? 'group-hover:bg-slate-800' 
                            : 'group-hover:bg-slate-100'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          active 
                            ? 'text-white' 
                            : isDark 
                              ? 'text-slate-400 group-hover:text-cyan-400' 
                              : 'text-slate-600 group-hover:text-cyan-600'
                        }`} />
                      </div>
                      <span className={`text-xs ${
                        active 
                          ? 'text-cyan-400 font-medium' 
                          : isDark 
                            ? 'text-slate-400' 
                            : 'text-slate-600'
                      }`}>
                        {label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Color Palette */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Color Palette
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Primary Cyan */}
            <div className={`p-6 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <div className="w-full h-20 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 mb-3 shadow-lg"></div>
              <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Primary</p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>#22D3EE</p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>#06B6D4</p>
            </div>

            {/* Secondary Blue */}
            <div className={`p-6 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <div className="w-full h-20 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 mb-3 shadow-lg"></div>
              <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Secondary</p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>#60A5FA</p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>#2563EB</p>
            </div>

            {/* Accent Orange */}
            <div className={`p-6 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <div className="w-full h-20 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 mb-3 shadow-lg"></div>
              <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Accent</p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>#FB923C</p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>#EA580C</p>
            </div>

            {/* Neutral Gray */}
            <div className={`p-6 rounded-2xl border-2 backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/50 border-cyan-500/20' 
                : 'bg-white border-slate-300'
            }`}>
              <div className={`w-full h-20 rounded-lg mb-3 shadow-lg ${
                isDark 
                  ? 'bg-gradient-to-br from-slate-700 to-slate-900' 
                  : 'bg-gradient-to-br from-slate-100 to-slate-300'
              }`}></div>
              <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Neutral</p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {isDark ? '#1E293B' : '#F1F5F9'}
              </p>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {isDark ? '#0F172A' : '#E2E8F0'}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Typography Scale */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Typography
          </h2>
          
          <div className={`p-8 rounded-2xl border-2 backdrop-blur-md ${
            isDark 
              ? 'bg-slate-900/50 border-cyan-500/20' 
              : 'bg-white border-slate-300'
          }`}>
            <div className="space-y-6">
              <div>
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>HEADING 1</p>
                <h1 className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  The quick brown fox
                </h1>
              </div>
              <div>
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>HEADING 2</p>
                <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  The quick brown fox jumps
                </h2>
              </div>
              <div>
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>BODY</p>
                <p className={`text-base ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  The quick brown fox jumps over the lazy dog. This is example body text showing the default paragraph style.
                </p>
              </div>
              <div>
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>CAPTION</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  The quick brown fox jumps over the lazy dog. This is caption text for supporting information.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Design Principles */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Design Principles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Health-Tech Aesthetic',
                description: 'Clean, professional design with medical-grade precision and trustworthiness'
              },
              {
                title: 'Glassmorphism',
                description: 'Frosted glass effects with subtle transparency for depth and modernity'
              },
              {
                title: 'Responsive First',
                description: 'Mobile-optimized components that scale seamlessly to desktop and tablet'
              }
            ].map((principle, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-2xl border-2 backdrop-blur-md ${
                  isDark 
                    ? 'bg-slate-900/50 border-cyan-500/20' 
                    : 'bg-white border-slate-300'
                }`}
              >
                <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {principle.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}