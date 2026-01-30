/**
 * SectionDivider Component
 *
 * A decorative horizontal divider with a centered dot.
 * Used across investor pages to separate sections.
 */
export function SectionDivider() {
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      </div>
    </div>
  );
}
