import { Github, Linkedin, Mail, MessageCircleMore } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/ndifreke-bassey', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ndifrekebassey/', icon: Linkedin },
    { label: 'WhatsApp', href: 'https://wa.me/2349070332721', icon: MessageCircleMore },
    { label: 'Email', href: 'mailto:ndifrekebassey13@gmail.com', icon: Mail },
  ]

  return (
    <footer className="border-t border-white/10 bg-slate-950/70 relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">Ndifreke-Abasi Bassey</h3>
            <p className="mt-2 text-sm text-slate-400">
              Full-Stack Developer & Cybersecurity Enthusiast building practical solutions with modern technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <div className="mt-3 space-y-2">
              <a href="#home" className="block cursor-pointer text-sm text-slate-400 transition-all duration-200 hover:text-cyan-200 hover:translate-x-1">Home</a>
              <a href="#about" className="block cursor-pointer text-sm text-slate-400 transition-all duration-200 hover:text-cyan-200 hover:translate-x-1">About</a>
              <a href="#skills" className="block cursor-pointer text-sm text-slate-400 transition-all duration-200 hover:text-cyan-200 hover:translate-x-1">Skills</a>
              <a href="#projects" className="block cursor-pointer text-sm text-slate-400 transition-all duration-200 hover:text-cyan-200 hover:translate-x-1">Projects</a>
              <a href="#services" className="block cursor-pointer text-sm text-slate-400 transition-all duration-200 hover:text-cyan-200 hover:translate-x-1">Services</a>
              <a href="#contact" className="block cursor-pointer text-sm text-slate-400 transition-all duration-200 hover:text-cyan-200 hover:translate-x-1">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Connect</h4>
            <div className="mt-3 space-y-2">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex cursor-pointer items-center gap-2 text-sm text-slate-400 transition-all duration-200 hover:text-cyan-200 hover:translate-x-1"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Ndifreke-Abasi Bassey. Built for opportunity and impact.</p>
            <p className="text-sm text-slate-400">React • Tailwind CSS • Framer Motion • Netlify</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
