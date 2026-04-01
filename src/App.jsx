import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-slate-100">
      <BackgroundEffects />
      <div className="grid-lines fixed inset-0 opacity-40" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App
