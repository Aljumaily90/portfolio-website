'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
  privacy: boolean
}

const WA_URL =
  'https://wa.me/41791016465?text=Hallo%20Ahmad%2C%20ich%20interessiere%20mich%20f%C3%BCr%20deine%20Leistungen.'

export default function Contact() {
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitState('success')
      reset()
    } catch {
      setSubmitState('error')
    }
  }

  const inputClass =
    'w-full bg-[#111118] border border-[#1E1E2E] rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#8B5CF6] transition-colors text-sm'
  const errorClass = 'text-red-400 text-xs mt-1'

  return (
    <section id="kontakt" className="py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Kontakt"
            title="Lass uns "
            highlight="zusammenarbeiten"
            subtitle="Schreib mir eine Nachricht oder melde dich direkt per WhatsApp — ich antworte meist innerhalb von 24 Stunden."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info cards */}
            <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 space-y-4">
              <a
                href="mailto:info@masnest.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#8B5CF6]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">E-Mail</p>
                  <p className="text-white text-sm group-hover:text-[#8B5CF6] transition-colors">
                    info@masnest.com
                  </p>
                </div>
              </a>

              <div className="border-t border-[#1E1E2E]" />

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-[#25D366]/10 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">WhatsApp</p>
                  <p className="text-white text-sm group-hover:text-[#25D366] transition-colors">
                    +41 79 101 64 65
                  </p>
                </div>
              </a>

              <div className="border-t border-[#1E1E2E]" />

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Reaktionszeit</p>
                  <p className="text-white text-sm">Meist innerhalb von 24h</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-semibold rounded-2xl hover:bg-[#1ebe5d] transition-all active:scale-95 shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle size={20} />
              Direkt auf WhatsApp schreiben
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitState === 'success' ? (
              <div className="bg-[#111118] border border-green-500/30 rounded-2xl p-10 flex flex-col items-center text-center gap-4">
                <CheckCircle size={48} className="text-green-400" />
                <h3 className="text-white font-semibold text-xl">Nachricht gesendet!</h3>
                <p className="text-slate-400">
                  Vielen Dank! Ich melde mich so bald wie möglich bei dir.
                </p>
                <button
                  onClick={() => setSubmitState('idle')}
                  className="px-6 py-2 border border-[#1E1E2E] text-slate-400 rounded-full hover:text-white hover:border-slate-500 transition-all text-sm"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 sm:p-8 space-y-5"
              >
                {/* Error state */}
                {submitState === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <AlertCircle size={18} className="text-red-400 shrink-0" />
                    <p className="text-red-400 text-sm">
                      Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib mir direkt per E-Mail.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-slate-400 mb-1.5 block">
                      Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name ist erforderlich' })}
                      placeholder="Dein Name"
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className={errorClass}>{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 mb-1.5 block">
                      E-Mail *
                    </label>
                    <input
                      {...register('email', {
                        required: 'E-Mail ist erforderlich',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Ungültige E-Mail-Adresse',
                        },
                      })}
                      type="email"
                      placeholder="deine@email.com"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className={errorClass}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-400 mb-1.5 block">
                    Betreff
                  </label>
                  <input
                    {...register('subject')}
                    placeholder="Worum geht es?"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 mb-1.5 block">
                    Nachricht *
                  </label>
                  <textarea
                    {...register('message', {
                      required: 'Nachricht ist erforderlich',
                      minLength: { value: 10, message: 'Mindestens 10 Zeichen' },
                    })}
                    placeholder="Beschreibe dein Projekt oder deine Frage..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className={errorClass}>{errors.message.message}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      {...register('privacy', { required: 'Bitte Datenschutz bestätigen' })}
                      type="checkbox"
                      className="mt-0.5 w-4 h-4 accent-[#8B5CF6]"
                    />
                    <span className="text-xs text-slate-400 leading-relaxed">
                      Ich stimme der{' '}
                      <a
                        href="/datenschutz"
                        target="_blank"
                        className="text-[#8B5CF6] hover:underline"
                      >
                        Datenschutzerklärung
                      </a>{' '}
                      zu und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. *
                    </span>
                  </label>
                  {errors.privacy && (
                    <p className={errorClass}>{errors.privacy.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#8B5CF6] text-white font-semibold rounded-xl hover:bg-[#7C3AED] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
