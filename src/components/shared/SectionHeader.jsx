export default function SectionHeader({ overline, title, description, centered = true, light = false }) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}>
      {overline && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${light ? 'text-accent' : 'text-accent'}`}>
          {overline}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-foreground'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-white/80' : 'text-muted-foreground'}`}>
          {description}
        </p>
      )}
    </div>
  );
}