'use client'

import { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  target?: string
  rel?: string
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  primary:
    'bg-[#8B5CF6] text-white hover:bg-[#7C3AED] active:scale-95 shadow-lg shadow-[#8B5CF6]/20',
  secondary:
    'border border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 active:scale-95',
  ghost:
    'text-slate-400 hover:text-white hover:bg-white/5 active:scale-95',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
