'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#1E1E2E]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <Logo size="sm" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#kontakt')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#8B5CF6] text-white rounded-full hover:bg-[#7C3AED] transition-all active:scale-95"
            >
              Kontakt aufnehmen
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Menü"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-md border-b border-[#1E1E2E]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#kontakt')}
              className="mt-2 w-full px-4 py-3 text-center font-medium bg-[#8B5CF6] text-white rounded-full hover:bg-[#7C3AED] transition-all"
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
