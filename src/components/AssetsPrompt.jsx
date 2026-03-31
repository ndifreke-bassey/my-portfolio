import { motion } from 'framer-motion'
import { ImagePlus, FileText, Link2 } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { personalizationChecklist } from '../data/portfolioData'

export default function AssetsPrompt() {
  return (
    <section id="assets-needed" className="section-anchor py-6 sm:py-8">
      <div className="section-shell glass-panel">
        <SectionTitle
          eyebrow="Personalization prompts"
          title="Before final launch, send these assets to make the portfolio fully yours"
          description="The structure is ready. To complete the final branded version, add your real media, links, and supporting content snippets below."
        />

        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-3xl p-5"
          >
            <div className="mb-4 flex items-center gap-2 text-cyan-200">
              <ImagePlus className="h-4 w-4" />
              <span className="text-sm font-semibold">What to send next</span>
            </div>

            <ul className="space-y-3 text-sm text-slate-300">
              {personalizationChecklist.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/8 bg-slate-900/45 p-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-3xl p-5"
          >
            <div className="space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-cyan-500/15 bg-cyan-500/8 p-4">
                <div className="mb-2 flex items-center gap-2 text-cyan-200">
                  <FileText className="h-4 w-4" />
                  <span className="font-semibold">Suggested content snippets</span>
                </div>
                <p>
                  Send a short bio, one-line achievements, your preferred job title, and any awards, internships, or leadership roles you want highlighted.
                </p>
              </div>

              <div className="rounded-2xl border border-fuchsia-500/15 bg-fuchsia-500/8 p-4">
                <div className="mb-2 flex items-center gap-2 text-fuchsia-200">
                  <Link2 className="h-4 w-4" />
                  <span className="font-semibold">Best assets to prepare</span>
                </div>
                <p>
                  A square headshot, CV PDF, project screenshots, and real contact links will immediately make the site feel fully polished and recruiter-ready.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
