import { useEffect, useRef } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'

const testimonials = [
  { name: 'Selamawit A.', role: 'Founder, Bloom Beauty', quote: 'WaliaTech delivered a stunning site with performance to match. Our conversions jumped immediately.' },
  { name: 'Abel T.', role: 'CEO, Addis Retail', quote: 'The team combined smart design and automation to save us hours weekly.' },
  { name: 'Hanna G.', role: 'Marketing Lead, Nova Labs', quote: 'Smooth process, premium visuals, and a true partner for growth.' },
]

export default function Testimonials() {
  const ref = useRef(null)
  useAnimationFrame((t) => {
    const el = ref.current
    if (!el) return
    el.scrollLeft = (t / 20) % (el.scrollWidth)
  })

  return (
    <section className="relative py-24 bg-[#0a0f1a]">
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Testimonials</h2>
        <div ref={ref} className="mt-10 overflow-x-auto no-scrollbar">
          <div className="flex gap-6 min-w-max">
            {testimonials.concat(testimonials).map((t, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="w-[340px] shrink-0 p-6 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                <div className="text-slate-300 text-sm">“{t.quote}”</div>
                <div className="mt-4 text-white font-semibold">{t.name}</div>
                <div className="text-slate-400 text-xs">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
