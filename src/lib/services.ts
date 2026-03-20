import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'ki-automatisierung',
    title: 'KI-Automatisierungen & Agenten',
    description: 'Ich automatisiere wiederkehrende Geschäftsprozesse mit KI — damit dein Team Zeit für das Wesentliche hat. Von einfachen Workflows bis hin zu intelligenten KI-Agenten, die eigenständig Aufgaben übernehmen.',
    features: [
      'Automatisierte Workflows mit n8n',
      'KI-Agenten für Geschäftsprozesse',
      'API-Integrationen & Datenflüsse',
      'E-Mail & Kommunikations-Automatisierung',
      'Datenverarbeitung & Reporting',
      'Chatbots & KI-Assistenten',
    ],
    primary: true,
    icon: 'bot',
  },
  {
    id: 'webentwicklung',
    title: 'Websites & Progressive Web Apps',
    description: 'Moderne, schnelle und benutzerfreundliche Websites und PWAs — optimiert für Conversion und Nutzererlebnis. Mit Next.js gebaut für maximale Performance und SEO.',
    features: [
      'Next.js & React Websites',
      'Progressive Web Apps (PWA)',
      'Mobile-first Entwicklung',
      'SEO-Optimierung',
      'Kontaktformulare & Integrationen',
      'Performance & Core Web Vitals',
    ],
    primary: false,
    icon: 'globe',
  },
]
