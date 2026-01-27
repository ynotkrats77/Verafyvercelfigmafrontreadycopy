import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calendar,
  Bell,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

interface ActionCenterPageProps {
  isDark: boolean;
}

interface Alert {
  id: string;
  type: 'critical' | 'warning' | 'info' | 'success';
  title: string;
  description: string;
  action?: string;
  time: string;
  icon: any;
}

export function ActionCenterPage({ isDark }: ActionCenterPageProps) {
  const alerts: Alert[] = [
    {
      id: '1',
      type: 'critical',
      title: 'High Concentration Risk Detected',
      description: 'AAPL represents 23% of your portfolio. Consider rebalancing to reduce single-stock exposure.',
      action: 'View Details',
      time: '5 min ago',
      icon: AlertTriangle
    },
    {
      id: '2',
      type: 'warning',
      title: 'Upcoming Dividend Payments',
      description: '$2,450 in dividends expected next week from 8 holdings.',
      action: 'View Schedule',
      time: '1 hour ago',
      icon: DollarSign
    },
    {
      id: '3',
      type: 'info',
      title: 'Tax-Loss Harvesting Opportunity',
      description: 'TSLA down 12% could offset gains. Potential tax savings: $3,200.',
      action: 'Review Options',
      time: '2 hours ago',
      icon: TrendingDown
    },
    {
      id: '4',
      type: 'success',
      title: 'Portfolio Milestone Achieved',
      description: 'Your portfolio crossed $250,000! Up 18% YTD.',
      action: 'View Performance',
      time: '3 hours ago',
      icon: TrendingUp
    },
    {
      id: '5',
      type: 'warning',
      title: 'Rebalancing Recommended',
      description: 'Your target allocation has drifted by 8%. Technology sector is overweight.',
      action: 'Auto-Rebalance',
      time: '5 hours ago',
      icon: AlertTriangle
    },
    {
      id: '6',
      type: 'info',
      title: 'Earnings Season Alert',
      description: '12 of your holdings report earnings this week. View calendar.',
      action: 'View Calendar',
      time: 'Today',
      icon: Calendar
    },
    {
      id: '7',
      type: 'success',
      title: 'Contribution Received',
      description: 'Monthly auto-contribution of $5,000 processed successfully.',
      action: 'View Transaction',
      time: 'Yesterday',
      icon: CheckCircle2
    },
    {
      id: '8',
      type: 'info',
      title: 'Market Opportunity',
      description: 'AI identifies 3 stocks matching your criteria under $100.',
      action: 'View Picks',
      time: 'Yesterday',
      icon: TrendingUp
    }
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'from-red-500/20 to-red-600/20 border-red-500/30';
      case 'warning':
        return 'from-amber-500/20 to-amber-600/20 border-amber-500/30';
      case 'info':
        return 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30';
      case 'success':
        return 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30';
      default:
        return 'from-slate-500/20 to-slate-600/20 border-slate-500/30';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'text-red-400';
      case 'warning':
        return 'text-amber-400';
      case 'info':
        return 'text-cyan-400';
      case 'success':
        return 'text-emerald-400';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Action Center
        </h1>
        <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Stay on top of important portfolio events and opportunities
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          whileHover={{ y: -4 }}
          className={`p-4 rounded-xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/20' 
              : 'bg-gradient-to-br from-red-50 to-red-100 border-red-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${isDark ? 'text-red-300' : 'text-red-600'}`}>Critical</p>
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>2</p>
            </div>
            <AlertTriangle className={`w-8 h-8 ${isDark ? 'text-red-400' : 'text-red-500'}`} />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-4 rounded-xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-500/20' 
              : 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${isDark ? 'text-amber-300' : 'text-amber-600'}`}>Warnings</p>
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>3</p>
            </div>
            <Bell className={`w-8 h-8 ${isDark ? 'text-amber-400' : 'text-amber-500'}`} />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-4 rounded-xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border-cyan-500/20' 
              : 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>Info</p>
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>4</p>
            </div>
            <Clock className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-cyan-500'}`} />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className={`p-4 rounded-xl border backdrop-blur-sm ${
            isDark 
              ? 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-emerald-500/20' 
              : 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`}>Updates</p>
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>2</p>
            </div>
            <CheckCircle2 className={`w-8 h-8 ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} />
          </div>
        </motion.div>
      </div>

      {/* Alerts List */}
      <div className="space-y-3">
        {alerts.map((alert, index) => {
          const Icon = alert.icon;
          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 4 }}
              className={`p-4 rounded-xl border backdrop-blur-sm bg-gradient-to-br ${getAlertColor(alert.type)} ${
                isDark ? '' : 'shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-900/50' : 'bg-white/50'}`}>
                  <Icon className={`w-5 h-5 ${getIconColor(alert.type)}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {alert.title}
                    </h3>
                    <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {alert.time}
                    </span>
                  </div>
                  <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {alert.description}
                  </p>
                  {alert.action && (
                    <button
                      className={`text-sm font-semibold flex items-center gap-1 transition-colors ${
                        getIconColor(alert.type)
                      } hover:opacity-80`}
                    >
                      {alert.action}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className={`p-6 rounded-xl border backdrop-blur-sm ${
        isDark 
          ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
          : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all">
            Mark All as Read
          </button>
          <button className={`px-4 py-3 rounded-lg border font-semibold transition-all ${
            isDark 
              ? 'border-slate-600 text-slate-300 hover:bg-slate-800' 
              : 'border-slate-300 text-slate-700 hover:bg-slate-100'
          }`}>
            Notification Settings
          </button>
          <button className={`px-4 py-3 rounded-lg border font-semibold transition-all ${
            isDark 
              ? 'border-slate-600 text-slate-300 hover:bg-slate-800' 
              : 'border-slate-300 text-slate-700 hover:bg-slate-100'
          }`}>
            View History
          </button>
        </div>
      </div>
    </div>
  );
}
