import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Shield, Wrench } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { skillGroups } from '../data/portfolioData'

const icons = [Shield, Code2, BrainCircuit, Wrench]

export default function Skills() {
  return (
    <section id="skills" className="section-anchor py-6 sm:py-8">
      <div className="section-shell glass-panel">
        <SectionTitle
          eyebrow="Skills"
          title="A balanced stack across development, security, and innovation"
          description="This portfolio is designed to show technical range, growth potential, and the ability to ship useful work with a modern professional finish."
        />

        <div className="glass-panel terminal-glow mb-6 rounded-3xl p-5 font-mono text-sm text-slate-300">
          <p><span className="text-cyan-300">$</span> skills.scan --focus recruiter-ready</p>
          <p className="mt-2 text-slate-400">Assessing delivery strength across cybersecurity, web development, AI-assisted workflows, and software engineering.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((skill, index) => {
            const Icon = icons[index] ?? Wrench
            return (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                title={`Examples: ${skill.examples.join(' • ')}`}
                className="tilt-card glass-panel rounded-3xl p-5"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{skill.title}</h3>
                      <p className="text-sm text-slate-400">{skill.level}% confidence</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 leading-7">{skill.summary}</p>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800/80">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.examples.map((example) => (
                    <span key={example} className="badge-pill">
                      {example}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
