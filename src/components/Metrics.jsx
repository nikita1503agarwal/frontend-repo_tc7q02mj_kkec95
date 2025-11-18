import { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const metrics = [
  { label: 'Projects', value: 50, suffix: '+' },
  { label: 'Partners', value: 20, suffix: '+' },
  { label: 'AI Powered Solutions', value: 1, suffix: '' },
  { label: 'Young Professional Team', value: 1, suffix: '' },
]

function Counter({ target, suffix }) {
  const [val, setVal] = useState(0)
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start({ n: target, transition: { duration: 1.6, ease: 'easeOut' } })
  }, [target])

  useEffect(() => {
    const unsub = controls.subscribe((latest) => {
      if (latest.n !== undefined) setVal(Math.round(latest.n))
    })
    return () => unsub()
  }, [])

  return <span>{val}{suffix}</span>
}

export default function Metrics() {
  return (
    <section className="relative py-24 bg-[#0b0f17]">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center">
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="text-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">
              <div className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                <Counter target={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-slate-400 text-sm">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
