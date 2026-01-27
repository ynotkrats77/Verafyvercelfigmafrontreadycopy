import { motion } from 'framer-motion';
import { Book, Code, Zap, Search } from 'lucide-react';
import { Button } from '../components/ui/button';

interface DocumentationPageProps {
  isDark: boolean;
}

export function DocumentationPage({ isDark }: DocumentationPageProps) {
  const docCategories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Quick start guides and tutorials',
      topics: ['Account Setup', 'First Steps', 'Portfolio Import', 'Dashboard Overview'],
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation',
      topics: ['Authentication', 'Endpoints', 'Webhooks', 'Rate Limits'],
    },
    {
      icon: Zap,
      title: 'Features',
      description: 'Detailed feature documentation',
      topics: ['AI Insights', 'Analytics', 'Reporting', 'Alerts'],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Documentation
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Everything you need to know about using Verafy AI
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search
              className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            />
            <input
              type="text"
              placeholder="Search documentation..."
              className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none transition-all ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800 text-white focus:border-theme-primary'
                  : 'bg-white border-slate-200 text-slate-900 focus:border-theme-primary'
              }`}
            />
          </div>
        </motion.div>

        {/* Documentation Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {docCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`p-6 rounded-2xl border-2 backdrop-blur-sm ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800'
                  : 'bg-white/50 border-slate-200'
              }`}
            >
              <div
                className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  boxShadow: '0 4px 12px var(--theme-glow)',
                }}
              >
                <category.icon className="h-7 w-7 text-white" />
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {category.title}
              </h3>
              <p
                className={`text-sm mb-4 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.topics.map((topic) => (
                  <li key={topic}>
                    <a
                      href="#"
                      className={`text-sm transition-colors hover:text-theme-primary ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      • {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
