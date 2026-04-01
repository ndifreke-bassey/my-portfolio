import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircleMore, SendHorizonal } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { socialLinks } from '../data/portfolioData'

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
  WhatsApp: MessageCircleMore,
  Email: Mail,
}

export default function Contact() {
  return (
    <section id="contact" className="section-anchor py-6 sm:py-8">
      <div className="section-shell glass-panel">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something useful, polished, and future-ready"
          description="Use the form below for recruiter inquiries, collaborations, freelance work, or tech consulting conversations."
        />

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.form
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            name="contact"
            method="POST"
            action="/thank-you.html"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="glass-panel rounded-3xl p-5 sm:p-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div style={{ display: 'none' }}>
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </div>
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm text-slate-200">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm text-slate-200">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm text-slate-200">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about the role, project, or collaboration you have in mind..."
                  className="rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  required
                />
              </label>
            </div>

            <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
              <SendHorizonal className="h-4 w-4" /> Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            <div className="glass-panel rounded-3xl p-5 sm:p-6">
              <p className="font-display text-xl font-semibold text-white">Connect directly</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Replace the placeholder links below with your real channels to activate the full recruiter/client funnel.
              </p>

              <div className="mt-4 grid gap-3">
                {socialLinks.map((item) => {
                  const Icon = iconMap[item.label] ?? Mail
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-slate-900/45 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-900/75"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-cyan-300" />
                        {item.label}
                      </span>
                      <span className="text-xs text-slate-400">{item.value}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-5 text-sm leading-7 text-slate-300">
              <p className="font-semibold text-cyan-200">Quick update note</p>
              <p className="mt-2">
                Your real contact channels and updated CV are now connected. You can drop in testimonials, project demos, and extra content snippets whenever you’re ready.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
