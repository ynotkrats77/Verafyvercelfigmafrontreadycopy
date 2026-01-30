interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  isDark: boolean;
}

/**
 * SectionHeader Component
 *
 * A reusable section header with title and optional subtitle.
 * Used across investor pages for consistent section styling.
 *
 * @param title - Main section heading
 * @param subtitle - Optional descriptive text
 * @param isDark - Dark/light mode state
 */
export function SectionHeader({ title, subtitle, isDark }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
