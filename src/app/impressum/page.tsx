import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum — Ahmad Aljumaily',
}

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Impressum</h1>

        <div className="space-y-6 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-white font-semibold mb-2">Angaben gemäß Art. 3 UWG (CH)</h2>
            <p>Ahmad Aljumaily</p>
            <p className="text-amber-400 mt-1 text-sm">
              ⚠ Adresse noch nicht definiert — bitte nachtragen
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">Kontakt</h2>
            <p>
              E-Mail:{' '}
              <a href="mailto:info@masnest.com" className="text-[#8B5CF6] hover:underline">
                info@masnest.com
              </a>
            </p>
            <p>
              WhatsApp:{' '}
              <a
                href="https://wa.me/41791016465"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B5CF6] hover:underline"
              >
                +41 79 101 64 65
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">Haftungsausschluss</h2>
            <p className="text-sm">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann keine Gewähr übernommen
              werden.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">Urheberrecht</h2>
            <p className="text-sm">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
              jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
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
