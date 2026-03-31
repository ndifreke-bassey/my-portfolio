export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Ndifreke-Abasi Bassey. Built for opportunity and impact.</p>
        <p>React • Tailwind CSS • Framer Motion • Deployment-ready</p>
      </div>
    </footer>
  )
}
