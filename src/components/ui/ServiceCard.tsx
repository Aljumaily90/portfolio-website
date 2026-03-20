import { Service } from '@/types'
import { Bot, Globe, Check } from 'lucide-react'

interface ServiceCardProps {
  service: Service
}

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  bot: Bot,
  globe: Globe,
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = icons[service.icon] || Bot

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
        service.primary
          ? 'bg-gradient-to-br from-[#8B5CF6]/10 to-[#3B82F6]/5 border-[#8B5CF6]/30 hover:border-[#8B5CF6]/60 hover:shadow-xl hover:shadow-[#8B5CF6]/10'
          : 'bg-[#111118] border-[#1E1E2E] hover:border-[#8B5CF6]/30'
      }`}
    >
      {service.primary && (
        <div className="absolute top-4 right-4 text-xs font-semibold text-[#8B5CF6] bg-[#8B5CF6]/10 px-3 py-1 rounded-full">
          Schwerpunkt
        </div>
      )}

      {/* Icon */}
      <div
        className={`inline-flex p-3 rounded-xl mb-5 w-fit ${
          service.primary ? 'bg-[#8B5CF6]/20' : 'bg-[#1E1E2E]'
        }`}
      >
        <Icon
          size={24}
          className={service.primary ? 'text-[#8B5CF6]' : 'text-slate-400'}
        />
      </div>

      {/* Content */}
      <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
      <p className="text-slate-400 leading-relaxed mb-6 flex-1">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
            <Check size={15} className="text-[#8B5CF6] shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
