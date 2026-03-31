import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="mb-8 max-w-3xl"
    >
      <span className="badge-pill mb-3">{eyebrow}</span>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  )
}
