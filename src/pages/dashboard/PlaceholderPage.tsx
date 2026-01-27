import { motion } from 'motion/react';
import { LucideIcon, Construction, Sparkles } from 'lucide-react';

interface PlaceholderPageProps {
  isDark: boolean;
  title: string;
  description: string;
  icon?: LucideIcon;
  badge?: {
    label: string;
    color: string;
  };
  features?: string[];
}

export function PlaceholderPage({ 
  isDark, 
  title, 
  description, 
  icon: Icon = Construction,
  badge,
  features = []
}: PlaceholderPageProps) {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h1>
          {badge && (
            <div 
              className="px-3 py-1 rounded-full flex items-center gap-1"
              style={{ backgroundColor: `${badge.color}20`, color: badge.color }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold">{badge.label}</span>
            </div>
          )}
        </div>
        <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {description}
        </p>
      </div>

      {/* Coming Soon Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`p-12 rounded-xl border backdrop-blur-sm text-center ${
          isDark 
            ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
            : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
        }`}
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="inline-block"
        >
          <Icon className={`w-24 h-24 mx-auto mb-6 ${isDark ? 'text-cyan-400' : 'text-cyan-500'}`} />
        </motion.div>
        
        <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Content Coming Soon
        </h2>
        <p className={`text-lg mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          This page is currently under development. Full functionality will be available soon.
        </p>

        {features.length > 0 && (
          <div className={`max-w-md mx-auto p-6 rounded-lg border ${
            isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <h3 className={`text-sm font-semibold mb-3 uppercase tracking-wider ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Planned Features:
            </h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-2 text-left ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8">
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all">
            Notify Me When Ready
          </button>
        </div>
      </motion.div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`p-6 rounded-xl border backdrop-blur-sm ${
          isDark 
            ? 'bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 border-cyan-500/30' 
            : 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200'
        }`}>
          <h4 className={`font-semibold mb-2 ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>
            Real-Time Data
          </h4>
          <p className={`text-sm ${isDark ? 'text-cyan-200/70' : 'text-cyan-700'}`}>
            Live market data and portfolio updates
          </p>
        </div>

        <div className={`p-6 rounded-xl border backdrop-blur-sm ${
          isDark 
            ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-500/30' 
            : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200'
        }`}>
          <h4 className={`font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
            AI-Powered Insights
          </h4>
          <p className={`text-sm ${isDark ? 'text-purple-200/70' : 'text-purple-700'}`}>
            Smart recommendations and analysis
          </p>
        </div>

        <div className={`p-6 rounded-xl border backdrop-blur-sm ${
          isDark 
            ? 'bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 border-emerald-500/30' 
            : 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200'
        }`}>
          <h4 className={`font-semibold mb-2 ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`}>
            Custom Reports
          </h4>
          <p className={`text-sm ${isDark ? 'text-emerald-200/70' : 'text-emerald-700'}`}>
            Exportable insights and analytics
          </p>
        </div>
      </div>
    </div>
  );
}
