'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'

const WA_URL =
  'https://wa.me/41791016465?text=Hallo%20Ahmad%2C%20ich%20interessiere%20mich%20f%C3%BCr%20deine%20Leistungen.'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0F]">
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/12 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3B82F6]/8 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(to right, #8B5CF6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Available badge */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 text-sm text-slate-300 bg-[#111118] border border-[#1E1E2E] px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Verfügbar für neue Projekte
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
        >
          KI-Automatisierungen,{' '}
          <span className="text-[#8B5CF6]">die wirklich</span>
          <br />
          funktionieren.
        </motion.h1>

        {/* Subline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Ich helfe Unternehmen, Prozesse mit KI zu automatisieren und spare
          ihnen damit Zeit und Kosten. Dazu entwickle ich moderne Websites und
          Progressive Web Apps.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B5CF6] text-white font-semibold rounded-full hover:bg-[#7C3AED] transition-all active:scale-95 shadow-lg shadow-[#8B5CF6]/25"
          >
            Projekt besprechen
            <ArrowRight size={18} />
          </button>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#25D366]/50 text-[#25D366] font-semibold rounded-full hover:bg-[#25D366]/10 transition-all active:scale-95"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto"
        >
          {[
            { value: '4+', label: 'Live-Projekte' },
            { value: 'n8n', label: 'Automatisierung' },
            { value: '24h', label: 'Reaktionszeit' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-slate-700 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#8B5CF6] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
