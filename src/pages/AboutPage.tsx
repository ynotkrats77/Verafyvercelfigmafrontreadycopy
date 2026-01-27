import { motion } from 'motion/react';
import { Target, Users, Award, Rocket } from 'lucide-react';
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

  const team = [
    {
      name: 'Dr. Amit Vohra',
      role: 'Co-Founder & CEO',
      bio: '20+ years C-suite experience in CEO, COO, and EGM roles. Board director and chair with expertise in mergers and acquisitions, commercial and startup ventures with successful exits. Direct industry expertise in healthcare and financial services.',
    },
    {
      name: 'Ms. Nupur Agarwal',
      role: 'Co-Founder & CTO',
      bio: 'Direct industry experience with a combined tech and business focus. Financial sector expertise leading large enterprise platform transformations and digital innovation initiatives.',
    },
    {
      name: 'Mr. Subodh Ramugade',
      role: 'Head of AI & Engineering',
      bio: 'Leading AI and engineering innovation at VerafyAI, driving the development of intelligent portfolio management solutions.',
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
            We're on a mission to transform how investors understand and manage their
            portfolios through the power of artificial intelligence.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
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
            Our Story
          </h2>
          <div
            className={`space-y-4 text-lg leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            <p>
              Verafy AI was founded in 2023 by a team of financial analysts and AI
              researchers who recognized a critical gap in the investment technology
              landscape. While institutional investors had access to sophisticated
              portfolio intelligence tools, individual investors were left with basic
              dashboards and generic advice.
            </p>
            <p>
              We set out to change that. By combining cutting-edge natural language
              processing with deep financial expertise, we created Vera – an AI
              assistant that delivers institutional-grade insights in plain English.
            </p>
            <p>
              Today, Verafy AI serves thousands of investors across Australia and
              beyond, helping them make more informed decisions about their financial
              futures.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
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

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`text-4xl font-bold text-center mb-12 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Leadership Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className={`p-6 rounded-2xl border-2 backdrop-blur-sm ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800'
                  : 'bg-white/50 border-slate-200'
              }`}
            >
              <div
                className={`w-20 h-20 rounded-full mb-4 flex items-center justify-center text-2xl font-bold ${
                  isDark
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-600'
                    : 'bg-gradient-to-br from-cyan-400 to-blue-500'
                }`}
                style={{
                  boxShadow: '0 4px 12px var(--theme-glow)',
                }}
              >
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3
                className={`text-lg font-bold mb-1 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {member.name}
              </h3>
              <div
                className="text-sm font-semibold mb-3"
                style={{ color: 'var(--theme-primary)' }}
              >
                {member.role}
              </div>
              <p
                className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {member.bio}
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
          transition={{ duration: 0.6, delay: 1.2 }}
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