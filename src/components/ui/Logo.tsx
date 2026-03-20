interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

const sizes = {
  sm: { icon: 28, text: 'text-base' },
  md: { icon: 36, text: 'text-lg' },
  lg: { icon: 48, text: 'text-2xl' },
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const { icon, text } = sizes[size]

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon Mark */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle cx="20" cy="20" r="19" fill="url(#logoGrad)" />

        {/* Network nodes — top, bottom-left, bottom-right */}
        <circle cx="20" cy="11" r="2.8" fill="white" />
        <circle cx="11.5" cy="27" r="2.8" fill="white" />
        <circle cx="28.5" cy="27" r="2.8" fill="white" />

        {/* Connecting lines */}
        <line x1="20" y1="11" x2="11.5" y2="27" stroke="white" strokeWidth="1.6" strokeOpacity="0.55" strokeLinecap="round" />
        <line x1="20" y1="11" x2="28.5" y2="27" stroke="white" strokeWidth="1.6" strokeOpacity="0.55" strokeLinecap="round" />
        <line x1="11.5" y1="27" x2="28.5" y2="27" stroke="white" strokeWidth="1.6" strokeOpacity="0.55" strokeLinecap="round" />

        {/* Center dot — hub */}
        <circle cx="20" cy="20" r="2" fill="white" fillOpacity="0.4" />
        <line x1="20" y1="11" x2="20" y2="20" stroke="white" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
        <line x1="11.5" y1="27" x2="20" y2="20" stroke="white" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
        <line x1="28.5" y1="27" x2="20" y2="20" stroke="white" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
      </svg>

      {/* Wordmark */}
      {showText && (
        <span className={`font-bold tracking-tight text-white ${text}`}>
          Mas<span className="text-[#8B5CF6]">Nest</span>
        </span>
      )}
    </div>
  )
}
