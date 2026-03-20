import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutz — Ahmad Aljumaily',
}

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-2">Datenschutzerklärung</h1>
        <p className="text-slate-500 text-sm mb-8">Stand: März 2026</p>

        <div className="space-y-8 text-slate-400 leading-relaxed text-sm">
          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Verantwortlicher</h2>
            <p>
              Ahmad Aljumaily<br />
              E-Mail: info@masnest.com<br />
              WhatsApp: +41 79 101 64 65
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Leistungen
              erforderlich ist. Beim Besuch dieser Website werden automatisch technische Daten (IP-Adresse,
              Browser, Betriebssystem, Referrer-URL) durch den Hosting-Anbieter erfasst.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Kontaktformular</h2>
            <p>
              Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen eingegebenen Daten
              (Name, E-Mail-Adresse, Betreff, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet und
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-2">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. Hosting — Vercel</h2>
            <p>
              Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet.
              Bei jedem Zugriff werden Server-Logfiles erfasst. Vercel verarbeitet Daten gemäß den
              EU-Standardvertragsklauseln (SCCs). Weitere Informationen:{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B5CF6] hover:underline"
              >
                Vercel Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. E-Mail-Versand — Resend</h2>
            <p>
              Das Kontaktformular verwendet den Dienst Resend (Resend Inc., USA) zum Versand von
              E-Mail-Benachrichtigungen. Die übermittelten Daten (Name, E-Mail, Nachricht) werden nur
              zur Zustellung der E-Mail verwendet.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Ihre Rechte</h2>
            <p>Sie haben das Recht auf:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Auskunft über die gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen die Verarbeitung</li>
            </ul>
            <p className="mt-3">
              Für Anfragen: info@masnest.com
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">7. Cookies</h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies oder Analytics-Tools. Es werden
              ausschließlich technisch notwendige Daten verarbeitet.
            </p>
          </section>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-[#8B5CF6] hover:underline text-sm">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  )
}
