import { motion } from 'framer-motion'
import { LayoutDashboard, Cpu, Sparkles, Rocket, Layers, Code2 } from 'lucide-react'

export default function About() {
  const skills = [
    { icon: LayoutDashboard, label: 'Web Design', color: 'from-sky-500 to-cyan-400' },
    { icon: Code2, label: 'Front-End', color: 'from-indigo-500 to-violet-500' },
    { icon: Sparkles, label: 'SEO', color: 'from-emerald-500 to-lime-400' },
    { icon: Layers, label: 'Social Media', color: 'from-fuchsia-500 to-pink-500' },
    { icon: Rocket, label: 'Marketing', color: 'from-orange-500 to-amber-400' },
    { icon: Cpu, label: 'AI Automation', color: 'from-blue-500 to-purple-500' },
  ]

  return (
    <section id="about" className="relative py-24 bg-[#0b0f17]">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(600px 400px at 10% 10%, rgba(59,130,246,0.12), transparent 60%), radial-gradient(600px 400px at 90% 90%, rgba(147,51,234,0.12), transparent 60%)'
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left blueprint visuals */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative h-80 md:h-[28rem] rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <motion.div
              className="absolute inset-6 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-10 left-10 w-24 h-16 rounded-xl border border-cyan-300/40"
              animate={{ x: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-40 h-24 rounded-xl border border-violet-300/40"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
          </motion.div>

          {/* Right text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">About WaliaTech</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              WaliaTech is a modern digital agency led by <span className="text-white font-semibold">Girum Fiseha</span>. Our young, talented team blends design, development, automation, and growth strategies to build beautiful, fast, high-performing digital experiences.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative rounded-2xl p-4 bg-white/5 border border-white/10 backdrop-blur-xl"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="mt-3 text-sm font-medium text-white">{label}</div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-sky-400/40 transition" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
