import { motion } from 'framer-motion';
import { Play, Calendar, Video, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useState } from 'react';

interface DemoPageProps {
  isDark: boolean;
}

export function DemoPage({ isDark }: DemoPageProps) {
  const [selectedDemo, setSelectedDemo] = useState<'video' | 'live' | 'interactive'>('video');

  const demoOptions = [
    {
      id: 'video' as const,
      icon: Video,
      title: 'Video Demo',
      description: 'Watch a pre-recorded tour of Verafy AI',
      duration: '5 minutes',
    },
    {
      id: 'live' as const,
      icon: Calendar,
      title: 'Live Demo',
      description: 'Schedule a personalized walkthrough',
      duration: '30 minutes',
    },
    {
      id: 'interactive' as const,
      icon: Play,
      title: 'Interactive Demo',
      description: 'Try Verafy AI with sample data',
      duration: 'Self-paced',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Experience
            <span
              className="block mt-2 bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent"
            >
              Verafy AI
            </span>
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto mb-8 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            See how Verafy AI can transform your investment strategy. Choose the demo
            format that works best for you.
          </p>
        </motion.div>
      </section>

      {/* Demo Options */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {demoOptions.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedDemo(option.id)}
              className={`p-6 rounded-2xl border-2 backdrop-blur-sm text-left transition-all ${
                selectedDemo === option.id
                  ? isDark
                    ? 'bg-theme-primary/10 border-theme-primary shadow-lg'
                    : 'bg-theme-primary/10 border-theme-primary shadow-lg'
                  : isDark
                  ? 'bg-slate-900/50 border-slate-800 hover:border-theme-primary/50'
                  : 'bg-white/50 border-slate-200 hover:border-theme-primary/50'
              }`}
              style={{
                boxShadow:
                  selectedDemo === option.id
                    ? '0 8px 24px var(--theme-glow)'
                    : undefined,
              }}
            >
              <div
                className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center transition-transform ${
                  selectedDemo === option.id ? 'scale-110' : ''
                }`}
                style={{
                  background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  boxShadow: '0 4px 12px var(--theme-glow)',
                }}
              >
                <option.icon className="h-7 w-7 text-white" />
              </div>

              <h3
                className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {option.title}
              </h3>

              <p
                className={`text-sm mb-3 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {option.description}
              </p>

              <div
                className={`text-xs font-semibold ${
                  selectedDemo === option.id
                    ? 'text-theme-primary'
                    : isDark
                    ? 'text-slate-500'
                    : 'text-slate-400'
                }`}
              >
                {option.duration}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Demo Content Area */}
        <motion.div
          key={selectedDemo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`p-12 rounded-3xl border-2 backdrop-blur-sm ${
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
          {selectedDemo === 'video' && (
            <div className="text-center">
              <div
                className={`aspect-video rounded-xl mb-6 flex items-center justify-center ${
                  isDark ? 'bg-slate-800' : 'bg-slate-100'
                }`}
              >
                <Play
                  className="h-20 w-20"
                  style={{ color: 'var(--theme-primary)' }}
                />
              </div>
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Product Overview Video
              </h3>
              <p
                className={`mb-6 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                A comprehensive 5-minute walkthrough of Verafy AI's key features and
                capabilities.
              </p>
              <Button
                size="lg"
                className="text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                style={{
                  background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                  boxShadow: '0 4px 14px var(--theme-glow)',
                }}
              >
                Watch Now
              </Button>
            </div>
          )}

          {selectedDemo === 'live' && (
            <div className="text-center">
              <Calendar
                className="h-20 w-20 mx-auto mb-6"
                style={{ color: 'var(--theme-primary)' }}
              />
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Schedule Your Live Demo
              </h3>
              <p
                className={`mb-8 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Get a personalized walkthrough with one of our product specialists.
                We'll tailor the demo to your specific needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-theme-primary'
                      : 'bg-white border-slate-200 text-slate-900 focus:border-theme-primary'
                  }`}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-theme-primary'
                      : 'bg-white border-slate-200 text-slate-900 focus:border-theme-primary'
                  }`}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={`px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-theme-primary'
                      : 'bg-white border-slate-200 text-slate-900 focus:border-theme-primary'
                  }`}
                />
                <input
                  type="text"
                  placeholder="Company"
                  className={`px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-theme-primary'
                      : 'bg-white border-slate-200 text-slate-900 focus:border-theme-primary'
                  }`}
                />
              </div>
              <Button
                size="lg"
                className="mt-6 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                style={{
                  background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                  boxShadow: '0 4px 14px var(--theme-glow)',
                }}
              >
                Book Demo
              </Button>
            </div>
          )}

          {selectedDemo === 'interactive' && (
            <div className="text-center">
              <MessageSquare
                className="h-20 w-20 mx-auto mb-6"
                style={{ color: 'var(--theme-primary)' }}
              />
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Try the Interactive Demo
              </h3>
              <p
                className={`mb-8 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Explore Verafy AI at your own pace with our interactive sandbox
                environment using sample portfolio data.
              </p>
              <div
                className={`p-6 rounded-xl border-2 mb-6 ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'AI Chat Assistant',
                    'Portfolio Analytics',
                    'Risk Assessment',
                    'Performance Reports',
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg ${
                        isDark ? 'bg-slate-900' : 'bg-slate-50'
                      }`}
                    >
                      <div
                        className={`text-sm font-medium ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                size="lg"
                className="text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                style={{
                  background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                  boxShadow: '0 4px 14px var(--theme-glow)',
                }}
              >
                Launch Demo
              </Button>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}