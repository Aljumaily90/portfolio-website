import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'weeklymeals',
    name: 'WeeklyMeals',
    description: 'KI-gestützte Meal-Planning SaaS App. Generiert personalisierte Wochenpläne, Rezepte, Einkaufslisten und Zero-Waste-Empfehlungen. Verfügbar als PWA auf Web, iOS und Android.',
    url: 'https://www.weeklymeals.io/',
    type: 'pwa',
    tags: ['Next.js', 'PWA', 'KI', 'SaaS'],
    status: 'live',
  },
  {
    id: 'techvs',
    name: 'Techvs',
    description: 'Interaktive Produktvergleichs-Plattform für Tech-Geräte. Nutzer setzen Prioritäten in 6 Kategorien und erhalten passende Empfehlungen für Smartphones, Notebooks, Tablets und mehr.',
    url: 'https://www.techvs.ch/',
    type: 'website',
    tags: ['Next.js', 'React', 'Produktvergleich'],
    status: 'live',
  },
  {
    id: 'dostour',
    name: 'Dostour',
    description: 'Moderne Website für ein Reisebüro, das Gruppenreisen, Individualreisen und Abenteuertouren in der Schweiz, der Türkei und Europa anbietet. Mit Buchungsformularen und Reisekatalogen.',
    url: 'https://www.dostour.ch/',
    type: 'website',
    tags: ['Next.js', 'React', 'Reise', 'Business'],
    status: 'live',
  },
  {
    id: 'eman-bestattungen',
    name: 'Eman Bestattungen',
    description: 'Professionelle Website für einen Bestattungsdienstleister, spezialisiert auf islamische Bestattungen in der Region Luzern und der ganzen Schweiz. Mehrsprachig (DE/EN/TR).',
    url: 'https://www.eman-bestattungen.ch/',
    type: 'website',
    tags: ['Responsive', 'Mehrsprachig', 'Business'],
    status: 'live',
  },
  {
    id: 'projekt-5',
    name: 'Neues Projekt',
    description: 'Ein weiteres Projekt ist aktuell in der Entwicklung. Stay tuned.',
    url: undefined,
    type: 'website',
    tags: ['In Entwicklung'],
    status: 'in-development',
  },
]
