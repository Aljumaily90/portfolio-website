'use client'

import { motion } from 'framer-motion'
import { MessageSquare, FileText, Wrench, Rocket } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Erstgespräch',
    description:
      'Kostenlos und unverbindlich. Wir klären deine Anforderungen, Ziele und den Umfang des Projekts in einem 30-minütigen Gespräch.',
    color: '#8B5CF6',
  },
  {
    number: 2,
    icon: FileText,
    title: 'Konzept & Angebot',
    description:
      'Du erhältst einen konkreten Lösungsvorschlag und ein transparentes, fixes Angebot — keine versteckten Kosten.',
    color: '#7C3AED',
  },
  {
    number: 3,
    icon: Wrench,
    title: 'Umsetzung',
    description:
      'Ich entwickle die Lösung mit regelmäßigen Updates und Feedback-Runden. Du bist immer über den Fortschritt informiert.',
    color: '#6D28D9',
  },
  {
    number: 4,
    icon: Rocket,
    title: 'Launch & Support',
    description:
      'Nach dem Deployment übergebe ich das Projekt vollständig. Auf Wunsch biete ich auch langfristigen Support und Weiterentwicklung an.',
    color: '#5B21B6',
  },
]

export default function Process() {
  const scrollToContact = () => {
    document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="prozess" className="py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Prozess"
            title="So läuft unsere "
            highlight="Zusammenarbeit"
            subtitle="Klar, transparent und ohne Überraschungen — von der ersten Idee bis zum fertigen Produkt."
          />
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#8B5CF6] via-[#6D28D9] to-[#5B21B6] opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Number & Icon */}
                  <div className="relative mb-5">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-1 border border-[#1E1E2E]"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <Icon size={28} style={{ color: step.color }} />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-14"
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B5CF6] text-white font-semibold rounded-full hover:bg-[#7C3AED] transition-all active:scale-95 shadow-lg shadow-[#8B5CF6]/20"
          >
            Jetzt Erstgespräch vereinbaren
          </button>
        </motion.div>
      </div>
    </section>
  )
}
