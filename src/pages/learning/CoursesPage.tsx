import { GlassCard } from '../../components/GlassCard';
import { BookOpen } from 'lucide-react';

interface CoursesPageProps {
  isDark: boolean;
}

export function CoursesPage({ isDark }: CoursesPageProps) {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Courses
        </h1>
        <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
          Browse all available investment courses
        </p>
      </div>

      <GlassCard isDark={isDark} className="text-center py-16">
        <BookOpen className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--theme-primary)' }} />
        <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Coming Soon
        </h2>
        <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
          Detailed course catalog and filtering coming in the next update
        </p>
      </GlassCard>
    </div>
  );
}
