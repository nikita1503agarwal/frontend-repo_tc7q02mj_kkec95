import { motion } from 'framer-motion'

const steps = [
  'Discovery & Strategy',
  'Wireframing',
  'High-Fidelity Design',
  'Motion & Animation',
  'Development',
  'SEO + Optimization',
  'Launch & Scale',
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-[#0a0f1a]">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(600px_400px_at_50%_100%,rgba(59,130,246,0.12),transparent_60%)'
      }} />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">The Process</h2>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-white/40 to-violet-500" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={`relative grid md:grid-cols-2 gap-6 ${i % 2 ? 'md:text-left' : 'md:text-right'}`}
              >
                <div className={`md:col-start-${i % 2 ? 2 : 1}`}>
                  <div className="inline-flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-black font-semibold flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.35)]">{i + 1}</div>
                    <div className="text-white text-lg font-semibold">{s}</div>
                  </div>
                  <div className="mt-3 text-slate-400 text-sm">We craft, iterate, and polish with motion-first thinking.</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
