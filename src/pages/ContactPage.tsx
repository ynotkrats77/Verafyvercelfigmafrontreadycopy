import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';

interface ContactPageProps {
  isDark: boolean;
}

export function ContactPage({ isDark }: ContactPageProps) {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'support@verafyai.com.au',
      description: 'We typically respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+61 2 9876 5432',
      description: 'Mon-Fri, 9am-5pm AEST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'Sydney, Australia',
      description: 'By appointment only',
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
            Get in
            <span
              className="block mt-2 bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent"
            >
              Touch
            </span>
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Have questions? We're here to help
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`p-6 rounded-2xl border-2 backdrop-blur-sm text-center ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800'
                  : 'bg-white/50 border-slate-200'
              }`}
            >
              <div
                className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center mx-auto"
                style={{
                  background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  boxShadow: '0 4px 12px var(--theme-glow)',
                }}
              >
                <method.icon className="h-7 w-7 text-white" />
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {method.title}
              </h3>
              <p
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--theme-primary)' }}
              >
                {method.detail}
              </p>
              <p
                className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`max-w-3xl mx-auto p-12 rounded-3xl border-2 backdrop-blur-sm ${
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
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                boxShadow: '0 4px 12px var(--theme-glow)',
              }}
            >
              <MessageSquare className="h-7 w-7 text-white" />
            </div>
            <h2
              className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Send us a message
            </h2>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  First Name
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-theme-primary'
                      : 'bg-white border-slate-200 text-slate-900 focus:border-theme-primary'
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-theme-primary'
                      : 'bg-white border-slate-200 text-slate-900 focus:border-theme-primary'
                  }`}
                />
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                Email
              </label>
              <input
                type="email"
                className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-white focus:border-theme-primary'
                    : 'bg-white border-slate-200 text-slate-900 focus:border-theme-primary'
                }`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                Subject
              </label>
              <input
                type="text"
                className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-white focus:border-theme-primary'
                    : 'bg-white border-slate-200 text-slate-900 focus:border-theme-primary'
                }`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                Message
              </label>
              <textarea
                rows={6}
                className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all resize-none ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-white focus:border-theme-primary'
                    : 'bg-white border-slate-200 text-slate-900 focus:border-theme-primary'
                }`}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              style={{
                background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                boxShadow: '0 4px 14px var(--theme-glow)',
              }}
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
