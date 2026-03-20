export interface Project {
  id: string
  name: string
  description: string
  url?: string
  type: 'website' | 'pwa' | 'ki-automation'
  tags: string[]
  status: 'live' | 'in-development'
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  primary: boolean
  icon: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
  icon: string
}
