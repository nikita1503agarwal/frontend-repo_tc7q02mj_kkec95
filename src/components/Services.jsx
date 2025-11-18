import { motion } from 'framer-motion'
import { MonitorSmartphone, Gauge, Megaphone, Bot } from 'lucide-react'

const services = [
  { icon: MonitorSmartphone, title: 'Web Design & Front-End', desc: 'Modern UI/UX, responsive builds, animations', color: 'from-sky-500 to-indigo-500' },
  { icon: Gauge, title: 'SEO Optimization', desc: 'Technical SEO, speed enhancement, ranking strategy', color: 'from-emerald-500 to-lime-500' },
  { icon: Megaphone, title: 'Social Media + Marketing', desc: 'Growth strategy, content systems, paid ads', color: 'from-fuchsia-500 to-pink-500' },
  { icon: Bot, title: 'AI Automation', desc: 'Chatbots, automation workflows, backend efficiency', color: 'from-amber-500 to-orange-500' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#0b0f17]">
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Services</h2>
        <p className="text-slate-400 text-center mt-2">Premium solutions crafted with motion and performance</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              className="relative p-6 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="mt-4 text-white font-semibold">{title}</div>
              <div className="text-slate-300 text-sm mt-1 leading-relaxed">{desc}</div>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 hover:ring-sky-400/40 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
