import { navLinks } from '../data/portfolioData'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
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
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn-secondary text-sm">
          Hire / Collaborate
        </a>
      </nav>
    </header>
  )
}
