import { motion } from 'framer-motion'

function WaliaMark() {
  return (
    <svg viewBox="0 0 64 64" className="w-16 h-16 opacity-10">
      <path fill="#fff" d="M32 6c7 0 13 4 16 10l-4 2c-2-4-6-6-12-6s-10 2-12 6l-4-2c3-6 9-10 16-10z"/>
      <path fill="#fff" d="M19 26c0-4 5-6 13-6s13 2 13 6v8c0 3-2 6-5 7l-8 3-8-3c-3-1-5-4-5-7v-8z"/>
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0b0f17]">
      <div className="absolute inset-0 flex items-center justify-center">
        <WaliaMark />
      </div>

      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Let’s Build Something Incredible</h2>
        <form className="mt-10 grid grid-cols-1 gap-4">
          <input className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50" placeholder="Name" />
          <input className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50" placeholder="Email" />
          <textarea rows="5" className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50" placeholder="Tell us about your project" />
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-2">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 rounded-xl bg-white text-black font-semibold">Hire WaliaTech</motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold">Schedule a Call</motion.button>
          </div>
        </form>
      </div>
    </section>
  )
}
