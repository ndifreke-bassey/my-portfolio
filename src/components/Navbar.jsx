import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/portfolioData'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#about')
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setHasScrolled(scrollPosition > 20)

      const sectionOffset = scrollPosition + 120
      let currentSection = '#about'

      navLinks.forEach((item) => {
        const section = document.querySelector(item.href)
        if (section) {
          const sectionTop = section.offsetTop
          if (sectionOffset >= sectionTop) {
            currentSection = item.href
          }
        }
      })

      setActiveSection(currentSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b border-white/10 backdrop-blur-xl transition duration-300 ${
      hasScrolled ? 'bg-slate-950/95 shadow-black/20 shadow-xl' : 'bg-slate-950/80'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-bold text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.18)]">
            NB
          </span>
          <div>
            <p className="font-display text-sm font-bold text-white sm:text-base">Ndifreke-Abasi Bassey</p>
            <p className="text-xs text-cyan-200">Cybersecurity • Web • Solutions</p>
          </div>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition ${
                activeSection === item.href
                  ? 'text-cyan-300 font-semibold'
                  : 'text-slate-300 hover:text-cyan-300'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-secondary hidden text-sm md:inline-flex">
            Hire / Collaborate
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-300 md:hidden"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 sm:px-6 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-100"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/15"
              onClick={() => setMenuOpen(false)}
            >
              Hire / Collaborate
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
