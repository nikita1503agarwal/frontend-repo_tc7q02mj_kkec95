import { motion } from 'framer-motion'

const projects = [
  { title: 'High-end Landing Pages', tag: 'Design + Motion', color: 'from-indigo-500/30 to-sky-500/30' },
  { title: 'E-commerce Builds', tag: 'Next.js • Shopify', color: 'from-fuchsia-500/30 to-pink-500/30' },
  { title: 'Social Media Dashboards', tag: 'Analytics • Growth', color: 'from-emerald-500/30 to-teal-500/30' },
  { title: 'AI Automation Workflows', tag: 'Bots • Integrations', color: 'from-amber-500/30 to-orange-500/30' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 bg-[#0a0f1a]">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(600px 400px at 50% 0%, rgba(59,130,246,0.12), transparent 60%)'
      }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="text-slate-400 hidden sm:block">Cinematic case studies with motion-first design</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: idx % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_40%)]" />
              <div className="relative p-8">
                <div className="text-white text-xl font-semibold">{p.title}</div>
                <div className="text-slate-300 text-sm mt-2">{p.tag}</div>
                <motion.div
                  className="mt-6 h-56 rounded-2xl bg-black/40 border border-white/10"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                >
                  <div className="h-full w-full bg-[radial-gradient(600px_200px_at_50%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
                </motion.div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 group-hover:ring-sky-400/40 rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
