import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950/85 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.2)] backdrop-blur-md transition hover:-translate-y-1 hover:text-white"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
