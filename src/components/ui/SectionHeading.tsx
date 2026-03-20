interface SectionHeadingProps {
  label?: string
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''} mb-12`}>
      {label && (
        <span className="inline-block text-sm font-semibold text-[#8B5CF6] uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-[#8B5CF6]">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
