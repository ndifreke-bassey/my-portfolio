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
          title="Building secure, polished web experiences for real users"
          description="I combine web development, software engineering, and a security mindset to deliver solutions that are easy to use, reliable, and ready for growth."
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
              I focus on turning ideas into clean, dependable digital products. My work is grounded in clarity, performance, and a practical approach to solving real user needs.
            </p>
            <p className="mt-4 text-slate-300 leading-8">
              I deliver polished websites and tools that look professional, work smoothly, and make it easy for clients to move forward.
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
              I value clean interfaces, secure foundations, and code that can be improved over time. Good software should be easy for people to use and built to earn trust.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 glass-panel rounded-3xl p-5 sm:p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Why choose me</p>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-300 sm:grid-cols-2">
            <li className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              Reliable delivery with strong attention to detail.
            </li>
            <li className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              Security-aware development from concept to launch.
            </li>
            <li className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              Modern responsive interfaces designed for real users.
            </li>
            <li className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              Clear communication and practical results every step of the way.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-8 glass-panel rounded-3xl p-5 sm:p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Trusted delivery</p>
          <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-300 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="font-semibold text-white">Academic and community clients</p>
              <p className="mt-2">Worked with academic advisors and community leaders to deliver useful web solutions.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="font-semibold text-white">Proven project outcomes</p>
              <p className="mt-2">Each project includes a clear result and practical impact, not just visual polish.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="font-semibold text-white">Responsive, ready-to-use builds</p>
              <p className="mt-2">Delivered websites and apps that look great on mobile, tablet, and desktop.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="font-semibold text-white">Recommendations included</p>
              <p className="mt-2">Testimonials show real feedback from collaborators and academic stakeholders.</p>
            </div>
          </div>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="glass-panel rounded-3xl p-5 text-center">
            <div className="text-2xl font-bold text-cyan-200">50+</div>
            <div className="text-sm text-slate-400">Projects Completed</div>
          </div>
          <div className="glass-panel rounded-3xl p-5 text-center">
            <div className="text-2xl font-bold text-cyan-200">24/7</div>
            <div className="text-sm text-slate-400">Learning Mindset</div>
          </div>
          <div className="glass-panel rounded-3xl p-5 text-center">
            <div className="text-2xl font-bold text-cyan-200">100%</div>
            <div className="text-sm text-slate-400">Problem-Solving Focus</div>
          </div>
          <div className="glass-panel rounded-3xl p-5 text-center">
            <div className="text-2xl font-bold text-cyan-200">4+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
