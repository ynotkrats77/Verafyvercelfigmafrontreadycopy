import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

interface GenericPageProps {
  isDark: boolean;
  title: string;
  subtitle?: string;
  content: string;
}

export function GenericPage({ isDark, title, subtitle, content }: GenericPageProps) {
  return (
    <div className="min-h-screen py-20">
      <section className="max-w-5xl mx-auto px-6">
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
            {title}
          </h1>
          {subtitle && (
            <p
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                boxShadow: '0 4px 12px var(--theme-glow)',
              }}
            >
              <FileText className="h-7 w-7 text-white" />
            </div>
            <h2
              className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {title}
            </h2>
          </div>

          <div
            className={`prose prose-lg max-w-none ${
              isDark ? 'prose-invert' : ''
            }`}
          >
            <div
              className={`leading-relaxed whitespace-pre-line ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {content}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
