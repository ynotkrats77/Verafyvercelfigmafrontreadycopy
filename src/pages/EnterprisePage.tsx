import { motion } from 'motion/react';
import { Building2, Users, Shield, Headphones, BarChart, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';

interface EnterprisePageProps {
  isDark: boolean;
}

export function EnterprisePage({ isDark }: EnterprisePageProps) {
  const enterpriseFeatures = [
    {
      icon: Building2,
      title: 'White Label Solutions',
      description: 'Fully customizable platform with your branding and domain.',
    },
    {
      icon: Users,
      title: 'Unlimited Team Members',
      description: 'Add unlimited users with role-based access controls.',
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'SSO, 2FA, and enterprise-grade encryption included.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: '24/7 priority support with dedicated account manager.',
    },
    {
      icon: BarChart,
      title: 'Custom Analytics',
      description: 'Tailored dashboards and reporting for your needs.',
    },
    {
      icon: Globe,
      title: 'Multi-Region Deployment',
      description: 'Data residency options across multiple regions.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Enterprise
              <span
                className="block mt-2 bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent"
              >
                Solutions
              </span>
            </h1>
            <p
              className={`text-xl mb-8 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Powerful portfolio intelligence for organizations of all sizes.
              Custom solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                style={{
                  background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                  boxShadow: '0 4px 14px var(--theme-glow)',
                }}
              >
                Contact Sales
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`border-2 transition-all ${
                  isDark
                    ? 'bg-transparent border-theme-primary/30 text-white hover:bg-theme-primary/10 hover:border-theme-primary'
                    : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-theme-primary'
                }`}
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-8 rounded-3xl border-2 backdrop-blur-sm ${
              isDark
                ? 'bg-slate-900/50 border-slate-800'
                : 'bg-white/50 border-slate-200'
            }`}
            style={{
              boxShadow: isDark
                ? '0 8px 32px rgba(34, 211, 238, 0.15)'
                : '0 8px 32px rgba(34, 211, 238, 0.1)',
            }}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Trusted by leading organizations
            </h3>
            <div className="space-y-4">
              {['10,000+', '99.99%', '$50B+', '24/7'].map((stat, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border ${
                    isDark
                      ? 'bg-slate-800/50 border-slate-700'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    {stat}
                  </div>
                  <div
                    className={`text-sm ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {
                      ['Active Users', 'Uptime SLA', 'Assets Under Management', 'Support'][i]
                    }
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold text-center mb-12 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Enterprise-Grade Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enterpriseFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-6 rounded-2xl border-2 backdrop-blur-sm group transition-all ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800 hover:border-theme-primary/50'
                  : 'bg-white/50 border-slate-200 hover:border-theme-primary/50'
              }`}
            >
              <div
                className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{
                  background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  boxShadow: '0 4px 12px var(--theme-glow)',
                }}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`p-12 rounded-3xl border-2 backdrop-blur-sm text-center ${
            isDark
              ? 'bg-slate-900/50 border-slate-800'
              : 'bg-white/50 border-slate-200'
          }`}
          style={{
            boxShadow: isDark
              ? '0 8px 32px rgba(34, 211, 238, 0.15)'
              : '0 8px 32px rgba(34, 211, 238, 0.1)',
          }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let's discuss your needs
          </h2>
          <p
            className={`text-lg mb-8 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Our enterprise team is ready to help you build a custom solution
          </p>
          <Button
            size="lg"
            className="text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            style={{
              background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
              boxShadow: '0 4px 14px var(--theme-glow)',
            }}
          >
            Get in Touch
          </Button>
        </motion.div>
      </section>
    </div>
  );
}