import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: 'Ahmad Aljumaily — KI-Automatisierungen & Webentwicklung',
  description:
    'Ich automatisiere Geschäftsprozesse mit KI und entwickle moderne Websites. Jetzt Kontakt aufnehmen.',
  keywords: [
    'KI-Automatisierung',
    'n8n',
    'KI-Agenten',
    'Next.js',
    'Webentwicklung',
    'PWA',
    'Ahmad Aljumaily',
    'Schweiz',
  ],
  authors: [{ name: 'Ahmad Aljumaily' }],
  openGraph: {
    title: 'Ahmad Aljumaily — KI-Automatisierungen & Webentwicklung',
    description:
      'Ich automatisiere Geschäftsprozesse mit KI und entwickle moderne Websites. Jetzt Kontakt aufnehmen.',
    type: 'website',
    locale: 'de_CH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmad Aljumaily — KI-Automatisierungen & Webentwicklung',
    description:
      'Ich automatisiere Geschäftsprozesse mit KI und entwickle moderne Websites.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${geist.variable} scroll-smooth`}>
      <body className="bg-[#0A0A0F] text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
