import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { featuredBook } from '../data/portfolioData'

export default function FeaturedBook() {
  return (
    <section id="my-book" className="section-anchor py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="section-shell glass-panel"
      >
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12">
          <div>
            <SectionTitle
              eyebrow="Featured Book"
              title={featuredBook.title}
              description={featuredBook.description}
            />
            <p className="-mt-3 text-sm font-medium text-cyan-200">
              Written by {featuredBook.author}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <BookOpen className="h-10 w-10 text-cyan-200" aria-hidden="true" />
            <a
              href={featuredBook.selarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Get the Book <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}