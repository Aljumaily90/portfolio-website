'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/projects'
import { Project } from '@/types'

type Filter = 'all' | 'website' | 'pwa' | 'ki-automation'

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Alle' },
  { id: 'website', label: 'Websites' },
  { id: 'pwa', label: 'PWAs' },
  { id: 'ki-automation', label: 'KI-Projekte' },
]

export default function Projects() {
  const [active, setActive] = useState<Filter>('all')

  const filtered: Project[] =
    active === 'all' ? projects : projects.filter((p) => p.type === active)

  return (
    <section id="projekte" className="py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Portfolio"
            title="Ausgewählte "
            highlight="Projekte"
            subtitle="Websites, PWAs und Webapplikationen, die ich konzipiert und umgesetzt habe."
          />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-2 mb-10 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === f.id
                  ? 'bg-[#8B5CF6] text-white'
                  : 'bg-[#111118] border border-[#1E1E2E] text-slate-400 hover:text-white hover:border-[#8B5CF6]/50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-16 text-slate-500">
                <p>Noch keine Projekte in dieser Kategorie.</p>
                <p className="text-sm mt-1">KI-Projekte kommen bald!</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
