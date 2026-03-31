import { motion } from 'framer-motion'
import { Rocket, Target } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { timeline } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="section-anchor py-6 sm:py-8">
      <div className="section-shell glass-panel">
        <SectionTitle
          eyebrow="About me"
          title="Building practical value with a future-facing mindset"
          description="I am a growth-driven tech builder combining web development, software problem-solving, and a strong interest in cybersecurity to create work that feels useful, polished, and forward-looking."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-3xl p-5 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-2 text-cyan-200">
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-semibold">Career direction</span>
            </div>
            <p className="text-slate-300 leading-8">
              My journey is rooted in curiosity, practical experimentation, and a desire to solve real problems with technology. I enjoy turning ideas into clean digital products while steadily preparing for the deeper security challenges shaping the future of software.
            </p>
            <p className="mt-4 text-slate-300 leading-8">
              I build practical solutions today while preparing for tomorrow’s cybersecurity challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-3xl p-5 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-2 text-fuchsia-200">
              <Target className="h-4 w-4" />
              <span className="text-sm font-semibold">Tech philosophy</span>
            </div>
            <p className="text-slate-300 leading-8">
              I value clarity, usability, and innovation. Every project should be functional, visually refined, and aligned with the people it is meant to serve.
            </p>
          </motion.div>
        </div>

        <div className="mt-7 grid gap-4">
          {timeline.map((item, index) => (
            <motion.article
              key={item.period}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="tilt-card glass-panel relative rounded-3xl border border-cyan-500/10 p-5 sm:p-6"
            >
              <div className="absolute left-4 top-6 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
              <div className="pl-6">
                <p className="text-sm font-semibold text-cyan-200">{item.period}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-300 leading-7">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
