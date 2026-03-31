import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Layers3 } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { featuredProjects, supportingProjects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="section-anchor py-6 sm:py-8">
      <div className="section-shell glass-panel">
        <SectionTitle
          eyebrow="Projects"
          title="Featured builds that demonstrate practical problem-solving"
          description="Each project highlights a real need, the solution approach, and the technologies used. Replace the placeholder links with your live demos and repositories when ready."
        />

        <div className="grid gap-5 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="tilt-card glass-panel rounded-3xl p-5"
            >
              <span className="badge-pill mb-3">Featured / Tier 1</span>
              <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>

              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <p>
                  <span className="font-semibold text-cyan-200">Problem:</span> {project.problem}
                </p>
                <p>
                  <span className="font-semibold text-cyan-200">Solution:</span> {project.solution}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tool) => (
                  <span key={tool} className="badge-pill">{tool}</span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a href={project.demo} className="btn-secondary text-sm">
                  Demo Link <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={project.github} className="btn-secondary text-sm">
                  GitHub <Github className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8">
          <div className="mb-4 flex items-center gap-2 text-cyan-200">
            <Layers3 className="h-4 w-4" />
            <p className="text-sm font-semibold">Supporting projects / Tier 2</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {supportingProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="tilt-card glass-panel rounded-3xl p-5"
              >
                <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
                <a href={project.demo} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100">
                  Demo placeholder <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
