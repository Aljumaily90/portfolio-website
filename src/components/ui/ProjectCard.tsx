import { Project } from '@/types'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

const typeLabels: Record<Project['type'], string> = {
  website: 'Website',
  pwa: 'PWA',
  'ki-automation': 'KI-Automatisierung',
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isLive = project.status === 'live'

  return (
    <div className="group relative flex flex-col bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 hover:border-[#8B5CF6]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#8B5CF6]/10">
      {/* Status badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-slate-400 bg-[#1E1E2E] px-3 py-1 rounded-full">
          {typeLabels[project.type]}
        </span>
        {!isLive && (
          <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
            In Entwicklung
          </span>
        )}
        {isLive && project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[#8B5CF6] transition-colors"
            title="Live ansehen"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      {/* Content */}
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#A78BFA] transition-colors">
        {project.name}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-[#8B5CF6] bg-[#8B5CF6]/10 px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
