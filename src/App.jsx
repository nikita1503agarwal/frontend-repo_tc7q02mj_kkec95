import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Process from './components/Process'
import Metrics from './components/Metrics'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="relative py-12 bg-[#0a0f1a] text-center">
      <div className="text-white font-semibold">WaliaTech</div>
      <div className="text-slate-400 text-sm mt-1">Girum Fiseha — Founder</div>
      <div className="mt-3 flex items-center justify-center gap-4 text-slate-400 text-sm">
        <a href="#" className="hover:text-white transition">Twitter</a>
        <a href="#" className="hover:text-white transition">Instagram</a>
        <a href="#" className="hover:text-white transition">LinkedIn</a>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Process />
      <Metrics />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
