import { motion } from 'framer-motion'
import { ArrowRight, Download, ShieldCheck, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import headshot from '../assets/images/my-image.png'
import { heroStats } from '../data/portfolioData'

const rotatingRoles = [
  'Cybersecurity Analyst in Training',
  'Web Developer',
  'Software Solutions Builder',
]

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = rotatingRoles[wordIndex]
    const pauseAtFullWord = !isDeleting && displayedText === currentWord
    const delay = pauseAtFullWord ? 1100 : isDeleting ? 55 : 90

    const timer = window.setTimeout(() => {
      if (pauseAtFullWord) {
        setIsDeleting(true)
        return
      }

      const nextText = isDeleting
        ? currentWord.slice(0, displayedText.length - 1)
        : currentWord.slice(0, displayedText.length + 1)

      setDisplayedText(nextText)

      if (isDeleting && nextText.length === 0) {
        setIsDeleting(false)
        setWordIndex((current) => (current + 1) % rotatingRoles.length)
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [displayedText, isDeleting, wordIndex])

  return (
    <section id="home" className="section-anchor relative py-10 sm:py-14 lg:py-18">
      <div className="section-shell glass-panel neon-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-transparent to-fuchsia-500/8" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="badge-pill mb-5"
            >
              <Sparkles className="h-4 w-4 text-cyan-300" /> Futuristic personal brand
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Ndifreke-Abasi Bassey
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-4 min-h-[4rem]"
            >
              <p className="text-xl font-semibold text-cyan-200 sm:text-2xl lg:text-3xl">
                {displayedText}
                <span className="ml-1 inline-block h-7 w-[2px] animate-pulse bg-cyan-300 align-middle" />
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Solving real-world problems with code, security, and innovation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
            >
              I build modern digital experiences that feel premium, perform well, and help brands, recruiters, and clients quickly understand the value I bring.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
              <a href="/Ndifreke-Abasi-Bassey-CV.pdf" download className="btn-secondary">
                <Download className="h-4 w-4" /> Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.36 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              <span className="badge-pill">Open to internships</span>
              <span className="badge-pill">Client-ready solutions</span>
              <span className="badge-pill">Security-minded builder</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="space-y-4"
          >
            <div className="glass-panel rounded-3xl p-4 sm:p-5">
              <div className="grid gap-4 sm:grid-cols-[0.88fr_1.12fr] sm:items-center">
                <div className="relative mx-auto w-full max-w-[220px] overflow-hidden rounded-[1.75rem] border border-cyan-400/25 bg-slate-950/70 p-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-fuchsia-500/10" />
                  <img
                    src={headshot}
                    alt="Ndifreke-Abasi Bassey headshot"
                    className="relative h-full w-full rounded-[1.25rem] object-cover"
                  />
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-bold text-slate-950">
                      NB
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Ndifreke-Abasi Bassey</p>
                      <p className="text-xs text-slate-400">Soaring beyond limits</p>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-slate-300">
                    Open to internships, freelance web projects, and value-driven tech collaborations.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel terminal-glow rounded-3xl p-5">
              <div className="mb-4 flex items-center gap-2 text-xs text-slate-400">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 font-mono">ndifreke@future-stack:~</span>
              </div>

              <div className="space-y-3 font-mono text-sm text-slate-300">
                <p>
                  <span className="text-cyan-300">$</span> status --mission
                </p>
                <p className="rounded-2xl bg-slate-900/70 p-3 text-slate-200">
                  Building practical solutions today while preparing for tomorrow’s cybersecurity challenges.
                </p>
                <p>
                  <span className="text-cyan-300">$</span> slogan --echo
                </p>
                <p className="text-fuchsia-200">“I am Ndifreke-Abasi Bassey, soaring beyond limits!”</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.22 + index * 0.08 }}
                  className="glass-panel float-soft rounded-2xl p-4"
                >
                  <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass-panel rounded-3xl p-4 text-sm text-slate-300">
              <div className="mb-2 flex items-center gap-2 text-cyan-200">
                <ShieldCheck className="h-4 w-4" /> Recruiter-first value signal
              </div>
              <p>
                Clean UI, strong narrative, practical projects, and service positioning designed to convert interest into opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
