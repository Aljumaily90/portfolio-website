import { Mail } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1E1E2E] bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Logo size="sm" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              KI-Automatisierungen & moderne Webentwicklung für Unternehmen, die wachsen wollen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#8B5CF6] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@masnest.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-[#8B5CF6] text-sm transition-colors"
                >
                  <Mail size={14} />
                  info@masnest.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/41791016465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-[#25D366] text-sm transition-colors"
                >
                  <span className="w-3.5 h-3.5 bg-[#25D366] rounded-full flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E1E2E] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {currentYear} MasNest. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <a href="/impressum" className="hover:text-slate-300 transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-slate-300 transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
