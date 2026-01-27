import { LogIn, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface AuthButtonShowcaseProps {
  isDark: boolean;
}

export function AuthButtonShowcase({ isDark }: AuthButtonShowcaseProps) {
  return (
    <div className={`min-h-screen py-20 px-4 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950' 
        : 'bg-gradient-to-b from-slate-50 via-white to-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl font-bold mb-4 text-center ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Sign In / Sign Up Button Options
        </h1>
        <p className={`text-center mb-12 ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Compare different design variations for authentication buttons
        </p>

        <div className="space-y-12">
          {/* CURRENT */}
          <OptionCard
            title="CURRENT"
            description="Outlined + Gradient with elevation"
            isDark={isDark}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                className={`border-2 transition-all duration-300 ${
                  isDark
                    ? 'border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20'
                    : 'border-slate-300 hover:border-cyan-400 hover:bg-cyan-400/5 hover:shadow-lg hover:shadow-cyan-400/20'
                }`}
              >
                Sign In
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Sign Up
              </Button>
            </motion.div>
          </OptionCard>

          {/* Option 1 */}
          <OptionCard
            title="Option 1: Minimal Glassmorphism"
            description="Sleek & Modern - Translucent glass with strong glow"
            isDark={isDark}
          >
            <Button
              variant="ghost"
              className="backdrop-blur-md bg-white/5 border border-white/10 
                         hover:bg-white/10 hover:border-cyan-500/30 
                         hover:shadow-lg hover:shadow-cyan-500/20
                         transition-all duration-300"
            >
              Sign In
            </Button>

            <Button
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 
                         text-white font-semibold shadow-lg shadow-cyan-500/30
                         hover:shadow-xl hover:shadow-cyan-500/50
                         hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </Button>
          </OptionCard>

          {/* Option 2 */}
          <OptionCard
            title="Option 2: Bold Contrast"
            description="High Impact - Thick borders, dramatic hover effects"
            isDark={isDark}
          >
            <Button
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-500
                         hover:bg-cyan-500 hover:text-white
                         transition-all duration-300 font-semibold"
            >
              Sign In
            </Button>

            <Button
              className="bg-cyan-500 text-white font-bold
                         hover:bg-cyan-600 hover:shadow-2xl 
                         hover:shadow-cyan-500/50 hover:scale-110
                         transition-all duration-300"
            >
              Sign Up
            </Button>
          </OptionCard>

          {/* Option 3 */}
          <OptionCard
            title="Option 3: Pill Style"
            description="Friendly & Rounded - Fully rounded pill shape"
            isDark={isDark}
          >
            <Button
              variant="ghost"
              className={`rounded-full px-6 border ${
                isDark ? 'border-slate-400/30' : 'border-slate-400/50'
              } hover:border-cyan-500 hover:bg-cyan-500/10
                         hover:shadow-md transition-all duration-300`}
            >
              Sign In
            </Button>

            <Button
              className="rounded-full px-6 bg-gradient-to-r from-cyan-500 to-cyan-600
                         text-white font-semibold shadow-md
                         hover:shadow-lg hover:shadow-cyan-500/40
                         hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </Button>
          </OptionCard>

          {/* Option 4 */}
          <OptionCard
            title="Option 4: With Icons & Badge"
            description="Feature-Rich - Icons + 'Free' badge for urgency"
            isDark={isDark}
          >
            <Button
              variant="outline"
              className="gap-2 border-2 border-cyan-500/30
                         hover:border-cyan-500 hover:bg-cyan-500/10
                         transition-all duration-300"
            >
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>

            <Button
              className="gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600
                         text-white font-semibold shadow-lg relative
                         hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <UserPlus className="h-4 w-4" />
              Sign Up
              <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[10px] 
                               bg-green-500 text-white rounded-full animate-pulse">
                Free
              </span>
            </Button>
          </OptionCard>

          {/* Option 5 */}
          <OptionCard
            title="Option 5: Neon Glow"
            description="Futuristic / Cyberpunk - Strong neon effects"
            isDark={isDark}
          >
            <Button
              variant="outline"
              className="border border-cyan-500 text-cyan-500
                         hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] 
                         hover:bg-cyan-500/5
                         transition-all duration-300"
              style={{ textShadow: isDark ? '0 0 10px rgba(34,211,238,0.3)' : 'none' }}
            >
              Sign In
            </Button>

            <Button
              className="bg-cyan-500 text-white font-bold
                         shadow-[0_0_30px_rgba(34,211,238,0.4)]
                         hover:shadow-[0_0_50px_rgba(34,211,238,0.7)]
                         hover:scale-110 transition-all duration-300"
              style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
            >
              Sign Up
            </Button>
          </OptionCard>

          {/* Option 6 */}
          <OptionCard
            title="Option 6: Stacked Vertical"
            description="Mobile-Friendly - Vertical layout, space-efficient"
            isDark={isDark}
          >
            <div className="flex flex-col gap-2 min-w-[120px]">
              <Button
                variant="ghost"
                size="sm"
                className="w-full hover:bg-cyan-500/10 hover:text-cyan-500
                           transition-all duration-300"
              >
                Sign In
              </Button>
              
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600
                           text-white font-semibold shadow-md
                           hover:shadow-lg hover:shadow-cyan-500/40
                           transition-all duration-300"
              >
                Sign Up Free
              </Button>
            </div>
          </OptionCard>

          {/* Option 7 */}
          <OptionCard
            title="Option 7: Gradient Border"
            description="Premium Look - Animated gradient borders"
            isDark={isDark}
          >
            <Button
              variant="outline"
              className="relative border-2 border-cyan-500/50
                         hover:border-cyan-500 hover:bg-cyan-500/10
                         hover:shadow-lg hover:shadow-cyan-500/30
                         hover:scale-105 transition-all duration-300"
            >
              Sign In
            </Button>

            <Button
              className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-500
                         text-white font-bold shadow-lg
                         hover:shadow-2xl hover:shadow-cyan-500/50
                         transition-all duration-300"
            >
              Sign Up
            </Button>
          </OptionCard>

          {/* Option 8 */}
          <OptionCard
            title="Option 8: Text Link Style"
            description="Minimal & Clean - De-emphasized Sign In, focus on Sign Up"
            isDark={isDark}
          >
            <button
              className={`text-sm font-medium transition-all duration-300
                         ${isDark ? 'text-slate-400' : 'text-slate-600'} 
                         hover:text-cyan-500 hover:underline underline-offset-4`}
            >
              Sign In
            </button>

            <Button
              size="sm"
              className="bg-cyan-500 text-white font-semibold
                         hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30
                         transition-all duration-300"
            >
              Sign Up
            </Button>
          </OptionCard>

          {/* Option 9 */}
          <OptionCard
            title="Option 9: Card Style"
            description="Elevated - Material design inspired with depth"
            isDark={isDark}
          >
            <Button
              className={`${
                isDark 
                  ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800' 
                  : 'bg-white/50 border-slate-300 hover:bg-white'
              } backdrop-blur border
                         hover:border-cyan-500/30
                         hover:shadow-lg hover:shadow-cyan-500/20
                         transition-all duration-300`}
            >
              Sign In
            </Button>

            <Button
              className="bg-gradient-to-br from-cyan-500 to-cyan-600
                         text-white font-semibold shadow-xl shadow-cyan-500/20
                         hover:shadow-2xl hover:shadow-cyan-500/40
                         hover:-translate-y-1 transition-all duration-300
                         border border-cyan-400/20"
            >
              Sign Up
            </Button>
          </OptionCard>

          {/* Option 10 */}
          <OptionCard
            title="Option 10: Two-Tone Split"
            description="Balanced - Equal weight, different theme colors"
            isDark={isDark}
          >
            <Button
              variant="outline"
              className="border-2 border-cyan-500/50 text-cyan-500
                         hover:bg-cyan-500/10 hover:border-cyan-500
                         hover:shadow-md transition-all duration-300"
            >
              Sign In
            </Button>

            <Button
              variant="outline"
              className="border-2 border-cyan-600/50 text-cyan-600
                         hover:bg-cyan-600/10 hover:border-cyan-600
                         hover:shadow-md transition-all duration-300"
            >
              Sign Up
            </Button>
          </OptionCard>
        </div>

        {/* Recommendations */}
        <div className={`mt-16 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-slate-800/50 border-slate-700/50' 
            : 'bg-white/50 border-slate-200'
        } backdrop-blur`}>
          <h2 className={`text-2xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            🎯 Recommendations by Use Case
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <RecommendationCard
              icon="🏥"
              title="Health-Tech / Professional"
              recommendation="Option 1 or 9"
              description="Clean, trustworthy, modern"
              isDark={isDark}
            />
            <RecommendationCard
              icon="🚀"
              title="Futuristic / Tech"
              recommendation="Option 5 or 7"
              description="Bold, innovative, eye-catching"
              isDark={isDark}
            />
            <RecommendationCard
              icon="💼"
              title="Enterprise / B2B"
              recommendation="Option 2 or 10"
              description="Professional, clear, direct"
              isDark={isDark}
            />
            <RecommendationCard
              icon="🎨"
              title="Consumer / Friendly"
              recommendation="Option 3 or 8"
              description="Approachable, conversion-focused"
              isDark={isDark}
            />
            <RecommendationCard
              icon="📱"
              title="Mobile-First"
              recommendation="Option 6 or 8"
              description="Space-efficient, thumb-friendly"
              isDark={isDark}
            />
            <RecommendationCard
              icon="🌟"
              title="Premium / Luxury"
              recommendation="Option 7 or 4"
              description="Sophisticated, feature-rich"
              isDark={isDark}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface OptionCardProps {
  title: string;
  description: string;
  isDark: boolean;
  children: React.ReactNode;
}

function OptionCard({ title, description, isDark, children }: OptionCardProps) {
  return (
    <div className={`p-8 rounded-2xl border backdrop-blur ${
      isDark 
        ? 'bg-slate-800/30 border-slate-700/50' 
        : 'bg-white/30 border-slate-200'
    }`}>
      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-2 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {title}
        </h3>
        <p className={`text-sm ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {description}
        </p>
      </div>
      
      <div className="flex items-center gap-4 flex-wrap">
        {children}
      </div>
    </div>
  );
}

interface RecommendationCardProps {
  icon: string;
  title: string;
  recommendation: string;
  description: string;
  isDark: boolean;
}

function RecommendationCard({ icon, title, recommendation, description, isDark }: RecommendationCardProps) {
  return (
    <div className={`p-4 rounded-xl ${
      isDark ? 'bg-slate-700/30' : 'bg-slate-50'
    }`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <h4 className={`font-semibold mb-1 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {title}
          </h4>
          <p className={`text-sm font-medium mb-1 ${
            isDark ? 'text-cyan-400' : 'text-cyan-600'
          }`}>
            {recommendation}
          </p>
          <p className={`text-xs ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}