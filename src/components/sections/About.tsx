'use client'

import { motion } from 'framer-motion'
import { Bot, Globe, Workflow, Code2 } from 'lucide-react'
import Image from 'next/image'

const skills = [
  { icon: Bot, label: 'KI-Automatisierung' },
  { icon: Workflow, label: 'n8n Workflows' },
  { icon: Globe, label: 'Next.js / React' },
  { icon: Code2, label: 'TypeScript' },
]

const tags = ['Next.js', 'React', 'TypeScript', 'n8n', 'KI-Agenten', 'PWA', 'Tailwind CSS', 'REST APIs']

export default function About() {
  const scrollToContact = () => {
    document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="ueber-mich" className="py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Gradient border */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl p-0.5 bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6]">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/ahmad.png"
                    alt="Ahmad Aljumaily"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating skill badges */}
              <div className="absolute -right-4 top-6 bg-[#111118] border border-[#1E1E2E] rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Bot size={16} className="text-[#8B5CF6]" />
                  <span className="text-xs text-white font-medium">KI-Spezialist</span>
                </div>
              </div>
              <div className="absolute -left-4 bottom-6 bg-[#111118] border border-[#1E1E2E] rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-[#3B82F6]" />
                  <span className="text-xs text-white font-medium">Web-Entwickler</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-[#8B5CF6] uppercase tracking-widest mb-3 block">
              Über mich
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Entwickler &{' '}
              <span className="text-[#8B5CF6]">KI-Automatisierungs-</span>
              <br />
              Spezialist
            </h2>

            {/* TODO: Ersetze diesen Text mit deinem eigenen */}
            <p className="text-slate-400 leading-relaxed mb-4">
              Ich bin Ahmad Aljumaily — Entwickler mit Fokus auf KI-Automatisierungen und moderne Webentwicklung. Ich helfe Unternehmen dabei, manuelle Prozesse zu automatisieren und eine starke digitale Präsenz aufzubauen.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Als Solopreneur arbeite ich direkt mit meinen Kunden zusammen — ohne Umwege, mit klarer Kommunikation und einem echten Interesse daran, dass ihre Projekte erfolgreich werden.
            </p>

            {/* Skill icons */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {skills.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-[#111118] border border-[#1E1E2E] rounded-xl p-3"
                >
                  <Icon size={18} className="text-[#8B5CF6]" />
                  <span className="text-sm text-slate-300">{label}</span>
                </div>
              ))}
            </div>

            {/* Tag cloud */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-400 bg-[#1E1E2E] px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white font-medium rounded-full hover:bg-[#7C3AED] transition-all active:scale-95"
            >
              Kontakt aufnehmen
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
