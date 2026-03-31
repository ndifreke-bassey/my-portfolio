import { AnimatePresence, motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import { testimonials } from '../data/portfolioData'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="section-anchor py-6 sm:py-8">
      <div className="section-shell glass-panel">
        <SectionTitle
          eyebrow="Testimonials"
          title="Social proof carousel ready for real feedback"
          description="These animated placeholder testimonials can be swapped with client reviews, lecturer feedback, or recruiter comments as soon as they are available."
        />

        <div className="glass-panel rounded-3xl p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-2 text-cyan-200">
            <Quote className="h-5 w-5" />
            <span className="text-sm font-semibold">Animated testimonial spotlight</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-lg leading-8 text-slate-200">“{activeTestimonial.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold text-white">{activeTestimonial.name}</p>
                <p className="text-sm text-slate-400">{activeTestimonial.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition ${index === activeIndex ? 'w-8 bg-cyan-300' : 'w-2.5 bg-slate-600'}`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
