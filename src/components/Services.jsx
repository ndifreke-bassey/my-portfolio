import { motion } from 'framer-motion'
import { Globe, Settings, BriefcaseBusiness } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { services } from '../data/portfolioData'

const icons = [Globe, Settings, BriefcaseBusiness]

export default function Services() {
  return (
    <section id="services" className="section-anchor py-6 sm:py-8">
      <div className="section-shell glass-panel">
        <SectionTitle
          eyebrow="Services / Eagletech"
          title="Services designed to convert attention into real client work"
          description="This section positions the portfolio as both a personal brand and a professional funnel for paying clients who need practical tech support."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Globe
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="tilt-card glass-panel rounded-3xl p-5"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                <a href="#contact" className="mt-5 inline-flex text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">
                  Let’s discuss this service →
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
