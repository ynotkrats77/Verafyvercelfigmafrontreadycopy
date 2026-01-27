import { motion } from "motion/react";
import { AnimatedCounter } from "./AnimatedCounter";
import { TrendingUp, Users, Zap } from "lucide-react";

interface StatsSectionProps {
  isDark: boolean;
}

export function StatsSection({ isDark }: StatsSectionProps) {
  const stats = [
    {
      icon: Users,
      value: 10000,
      suffix: "+",
      label: "Active Users",
      color: "text-cyan-400",
      bgColor: isDark ? "bg-cyan-500/10" : "bg-cyan-100",
    },
    {
      icon: TrendingUp,
      value: 95,
      suffix: "%",
      label: "Customer Satisfaction",
      color: "text-blue-400",
      bgColor: isDark ? "bg-blue-500/10" : "bg-blue-100",
    },
    {
      icon: Zap,
      value: 1000000,
      suffix: "+",
      label: "Insights Generated",
      color: "text-cyan-400",
      bgColor: isDark ? "bg-cyan-500/10" : "bg-cyan-100",
    },
  ];

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-r from-cyan-950/20 via-blue-950/20 to-cyan-950/20"
            : "bg-gradient-to-r from-cyan-50 via-blue-50 to-cyan-50"
        }`}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 100%" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className={`text-3xl md:text-4xl mb-3 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Trusted by{" "}
            <span style={{
              background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Thousands
            </span>
          </h3>
          <p className={`${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Join our growing community of smart investors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`backdrop-blur-sm border-2 rounded-2xl p-8 text-center group transition-all duration-300 ${
                isDark
                  ? "bg-slate-900/50 border-cyan-500/20 hover:border-cyan-500/50 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-cyan-500/20"
                  : "bg-white/80 border-slate-200 hover:border-cyan-400 hover:bg-white hover:shadow-2xl hover:shadow-cyan-400/20"
              }`}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${stat.bgColor}`}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </motion.div>
              <div className={`text-5xl mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              <div className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}