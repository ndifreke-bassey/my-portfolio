import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { featuredProjects, supportingProjects } from '../data/portfolioData'

// Import project images
const projectImages = {
  'cgpa-calculator.png': new URL('../assets/images/cgpa-calculator.png', import.meta.url).href,
  'mood-vibez.png': new URL('../assets/images/mood-vibez.png', import.meta.url).href,
  'department-website.png': new URL('../assets/images/department-website.png', import.meta.url).href,
  'church-website.png': new URL('../assets/images/church-website.png', import.meta.url).href,
  'js-bootstrap-experiments.png': new URL('../assets/images/js-bootstrap-experiments.png', import.meta.url).href,
  'html-landing-pages.png': new URL('../assets/images/html-landing-pages.png', import.meta.url).href,
  'graphics-designer-portfolio.png': new URL('../assets/images/graphics-designer-portfolio.png', import.meta.url).href,
}

export default function Projects() {
  const allProjects = [...featuredProjects, ...supportingProjects]

  return (
    <section id="projects" className="section-anchor py-6 sm:py-8">
      <div className="section-shell glass-panel">
        <SectionTitle
          eyebrow="Projects"
          title="Selected builds that solve practical problems and deliver clear value"
          description="Each project shows the challenge, the solution, and the key technology used to create a polished, usable result."
        />

        <div className="grid gap-5 xl:grid-cols-3">
          {allProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="tilt-card glass-panel rounded-3xl p-5"
            >
              {project.image && (
                <div className="mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={projectImages[project.image]}
                    alt={`${project.title} screenshot`}
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              )}

              <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>

              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {project.problem ? (
                  <>
                    <p>
                      <span className="font-semibold text-cyan-200">Problem:</span> {project.problem}
                    </p>
                    <p>
                      <span className="font-semibold text-cyan-200">Solution:</span> {project.solution}
                    </p>
                    {project.result && (
                      <p>
                        <span className="font-semibold text-cyan-200">Result:</span> {project.result}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p>{project.summary}</p>
                    {project.result && (
                      <p>
                        <span className="font-semibold text-cyan-200">Result:</span> {project.result}
                      </p>
                    )}
                  </>
                )}
              </div>

              {project.tech?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tool) => (
                    <span key={tool} className="badge-pill">{tool}</span>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                {project.demo && (
                  <a href={project.demo} className="btn-secondary text-sm">
                    View Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} className="btn-secondary text-sm">
                    View Code <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
