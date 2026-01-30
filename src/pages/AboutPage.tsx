import { motion } from 'framer-motion';
import { Target, Users, Award, Rocket, Heart, GraduationCap, Briefcase, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/button';

interface AboutPageProps {
  isDark: boolean;
}

export function AboutPage({ isDark }: AboutPageProps) {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To democratize institutional-grade investment intelligence, making it accessible to individual investors worldwide.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description:
        'Pushing the boundaries of AI and financial technology to deliver cutting-edge solutions.',
    },
    {
      icon: Users,
      title: 'Community',
      description:
        'Building a thriving community of informed investors who make better decisions together.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'Committed to the highest standards of accuracy, security, and customer service.',
    },
  ];

  const solvingFor = [
    {
      icon: GraduationCap,
      text: 'The 26-year-old spending a decade financially illiterate because no one taught them',
    },
    {
      icon: Heart,
      text: 'Divorcées trapped in bad splits because they never learned to negotiate',
    },
    {
      icon: AlertTriangle,
      text: 'Young traders losing $8.4B/year to preventable tax mistakes',
    },
    {
      icon: Briefcase,
      text: 'Anyone locked out of wealth-building by advisor minimums they can\'t meet',
    },
  ];

  const founders = [
    {
      name: 'Amit Vohra',
      role: 'Co-Founder & CEO',
      credentials: 'PhD Health Workforce | MBA (Distinction) | GAICD',
      highlights: [
        'CEO GPRA: $2M → $12M revenue (500% growth)',
        'Raised $10M from health funds & PHNs for integrated care models',
        'Built national risk algorithm predicting hospitalization (98% accuracy) – still used by Sonic Healthcare and government',
        'COO, AMA WA: led policy and commercial strategy for 3,000 doctors',
        'Board advisor on healthcare workforce and AI transformation',
      ],
      extra: '25 years transforming complex systems across healthcare, finance, and government. Former First Officer, commercial shipping. NLP Master Practitioner – systems thinking, transformational leadership.',
    },
    {
      name: 'Nupur Agarwal',
      role: 'Co-Founder & CTO',
      credentials: '40% equity stake – deeply aligned for the long term',
      highlights: [
        'Senior Software Engineer at GBST (xplan platform) – the system advisors use to manage billions in client wealth',
        'Led platform development at AMA Finance – regulatory-compliant wealth solutions',
        'Engineering roles at JP Morgan and enterprise fintech',
        'Built VerafyAI\'s entire beta product solo before raising a dollar',
      ],
      extra: '10+ years building enterprise fintech infrastructure at scale. Deep expertise: Python, React, AWS (Aurora, ECS/EKS, Bedrock), financial APIs, compliance architecture.',
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
            About
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
            We're building what we needed at 26 – the financial intelligence that was locked behind $500K advisor minimums.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
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
          <h2
            className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Our Story: Why We're Building This
          </h2>
          <div
            className={`space-y-4 text-lg leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            <p className="text-xl font-semibold" style={{ color: 'var(--theme-primary)' }}>
              We both learned about money at 40 – after wasting 15 years making preventable mistakes.
            </p>
            <p>
              The problem wasn't intelligence. It was silence.
            </p>
            <p>
              No one talks about money. Schools don't teach it. Parents avoid it. Friends fumble through it. Financial advisors won't touch you without $500K minimums.
            </p>
            <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              The system extracts value from people, not builds wealth for them.
            </p>
            <p className="text-xl font-semibold" style={{ color: 'var(--theme-primary)' }}>
              So we're building what we needed at 26.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What We're Solving For */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-3xl font-bold text-center mb-10 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          What We're Solving For
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solvingFor.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`p-6 rounded-2xl border-2 backdrop-blur-sm flex items-start gap-4 ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800'
                  : 'bg-white/50 border-slate-200'
              }`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                  boxShadow: '0 4px 12px var(--theme-glow)',
                }}
              >
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <p
                className={`text-lg ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Now. Why Us. */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`p-12 rounded-3xl border-2 backdrop-blur-sm ${
            isDark
              ? 'bg-slate-900/50 border-cyan-500/30'
              : 'bg-white/50 border-cyan-500/30'
          }`}
          style={{
            boxShadow: isDark
              ? '0 8px 32px rgba(34, 211, 238, 0.2)'
              : '0 8px 32px rgba(34, 211, 238, 0.15)',
          }}
        >
          <h2
            className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Why Now. Why Us.
          </h2>
          <div
            className={`space-y-4 text-lg leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            <p>
              Both our houses are on market (Q1 2026 settlement). We've spent our $150K pre-seed. We're launching in 15 days whether we raise or not.
            </p>
            <p>
              We're raising to move faster. Compress 3 years into 18 months. Reach millions, not thousands.
            </p>
            <p className={`font-semibold text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
              This is personal. We're building her either way.
            </p>
            <p style={{ color: 'var(--theme-primary)' }} className="font-semibold text-xl">
              But we'd rather build with the right partners in the room.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`text-4xl font-bold text-center mb-12 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
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
                <value.icon className="h-7 w-7 text-white" />
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {value.title}
              </h3>
              <p
                className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founders Section */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`text-4xl font-bold text-center mb-12 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          The Founders
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.15 }}
              className={`p-8 rounded-3xl border-2 backdrop-blur-sm ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800'
                  : 'bg-white/50 border-slate-200'
              }`}
              style={{
                boxShadow: isDark
                  ? '0 8px 32px rgba(34, 211, 238, 0.1)'
                  : '0 8px 32px rgba(34, 211, 238, 0.08)',
              }}
            >
              <div className="flex items-start gap-5 mb-6">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 ${
                    isDark
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-600'
                      : 'bg-gradient-to-br from-cyan-400 to-blue-500'
                  }`}
                  style={{
                    boxShadow: '0 4px 12px var(--theme-glow)',
                  }}
                >
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {founder.name}
                  </h3>
                  <div
                    className="text-lg font-semibold mb-1"
                    style={{ color: 'var(--theme-primary)' }}
                  >
                    {founder.role}
                  </div>
                  <p
                    className={`text-sm ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {founder.credentials}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {founder.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-sm ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: 'var(--theme-primary)' }}
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <p
                className={`text-sm leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {founder.extra}
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
          transition={{ duration: 0.6, delay: 1.1 }}
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
            Join Us on Our Journey
          </h2>
          <p
            className={`text-lg mb-8 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            We're always looking for talented individuals to join our team
          </p>
          <Button
            size="lg"
            className="text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            style={{
              background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
              boxShadow: '0 4px 14px var(--theme-glow)',
            }}
          >
            View Careers
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
