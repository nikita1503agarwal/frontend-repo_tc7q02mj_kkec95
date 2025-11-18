import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function WaliaLogo({ className = 'w-16 h-16' }) {
  // Minimal geometric Walia ibex head logo (white, glowing)
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
        <defs>
          <radialGradient id="g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </radialGradient>
        </defs>
        <path fill="url(#g)" d="M32 6c7 0 13 4 16 10l-4 2c-2-4-6-6-12-6s-10 2-12 6l-4-2c3-6 9-10 16-10z"/>
        <path fill="#ffffff" d="M19 26c0-4 5-6 13-6s13 2 13 6v8c0 3-2 6-5 7l-8 3-8-3c-3-1-5-4-5-7v-8z"/>
        <circle cx="24" cy="33" r="1.5" fill="#0ea5e9"/>
        <circle cx="40" cy="33" r="1.5" fill="#0ea5e9"/>
        <path d="M24 40c2 2 5 3 8 3s6-1 8-3" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M16 22c-4-2-7-6-7-10 0-3 2-6 5-6 4 0 7 4 10 8" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M48 22c4-2 7-6 7-10 0-3-2-6-5-6-4 0-7 4-10 8" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMouse({ x, y })
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[100dvh] overflow-hidden bg-[#0a0f1a]">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ambient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute -inset-24 opacity-60" style={{
        background: 'radial-gradient(1200px 600px at 50% 10%, rgba(59,130,246,0.15), transparent 60%)'
      }} />

      {/* Floating particles/parallax layers */}
      <motion.div
        className="absolute inset-0"
        animate={{
          transform: `translate3d(${mouse.x * 10}px, ${mouse.y * 10}px, 0)`
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      >
        <div className="absolute top-10 w-full flex justify-center">
          <WaliaLogo className="w-16 h-16" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
              WaliaTech Digital Agency
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-300">
              Web Design • SEO • Social Media • AI Automation
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              A team of young professionals building modern digital experiences.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 rounded-xl bg-white/90 text-black font-semibold shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition"
              >
                Explore Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.35)] hover:shadow-[0_10px_50px_rgba(99,102,241,0.45)] transition"
              >
                Start Your Project
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Magnetic cursor */}
      <motion.div
        className="pointer-events-none fixed w-12 h-12 rounded-full border border-white/30 backdrop-blur-sm bg-white/5"
        style={{ left: '0px', top: '0px' }}
        animate={{
          x: `calc(${mouse.x * 20}px + 50vw)`,
          y: `calc(${mouse.y * 20}px + 50vh)`
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      />
    </section>
  )
}
