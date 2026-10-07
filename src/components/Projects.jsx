import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { projects } from '../data/portfolioData'

function ProjectPreview({ project }) {
  const [previewFailed, setPreviewFailed] = useState(false)
  const fallbackMessage = project.previewFallbackMessage ||
    'This site cannot be displayed here. Use Live Preview to open it in a new tab.'

  return (
    <div className="mt-5 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
      {project.previewFallbackMessage || previewFailed ? (
        <div role="status" className="flex h-full items-center justify-center p-6 text-center text-sm leading-6 text-slate-300">
          {fallbackMessage}
        </div>
      ) : (
        <iframe
          src={project.liveUrl}
          title={`${project.title} live preview`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setPreviewFailed(true)}
          className="h-full w-full border-0 bg-white"
        />
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-anchor py-6 sm:py-8">
      <div className="section-shell glass-panel">
        <SectionTitle
          eyebrow="Projects"
          title="Selected Projects"
          description="Explore a selection of projects from my GitHub portfolio."
        />

        <div className="grid gap-5 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="tilt-card glass-panel rounded-3xl p-5 sm:p-6"
            >
              <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  Live Preview <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  GitHub Code <Github className="h-4 w-4" />
                </a>
              </div>

              <ProjectPreview project={project} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
