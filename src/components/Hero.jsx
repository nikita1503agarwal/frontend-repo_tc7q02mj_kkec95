import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function WaliaLogo({ className = 'w-16 h-16' }) {
  // Minimalist, bold, modern goat head logomark (pure white on dark)
  // Symmetrical, sharp lines, large backward horns, confident expression
  return (
    <div className={`relative ${className}`} aria-label="WaliaTech goat head logo">
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <defs>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Horns: bold arcs sweeping backward */}
        <path d="M19 48c2-14 15-26 33-28 9-1 17 1 24 5-9-2-18-2-26 1C38 31 30 38 27 47c-1 3 2 6 5 4 8-5 18-7 32-7s24 2 32 7c3 2 6-1 5-4-3-9-11-16-23-21 8 2 15 6 20 11 8 8 11 18 9 29-1 4-4 8-9 8-2 0-4-1-6-2-8-5-18-8-28-8s-20 3-28 8c-2 1-4 2-6 2-5 0-8-4-9-8-1-5-1-10 1-15z" fill="#ffffff" opacity="1" />
        {/* Head shield: sleek mask */}
        <path d="M40 56c0-8 10.5-14 24-14s24 6 24 14v14c0 6-4 11-10 13l-14 5-14-5c-6-2-10-7-10-13V56z" fill="#ffffff" filter="url(#softGlow)" />
        {/* Eye slits: confident, focused */}
        <path d="M48 70c4-2 8-3 16-3s12 1 16 3" stroke="#000000" strokeOpacity="0.9" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Nose ridge */}
        <path d="M64 63v14" stroke="#000000" strokeOpacity="0.9" strokeWidth="2.5" strokeLinecap="round" />
        {/* Angular beard: flowing chevrons */}
        <path d="M58 86l6 8 6-8" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M54 92l10 12 10-12" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Jawline highlight: crisp symmetry */}
        <path d="M46 82c5 5 11 7 18 7s13-2 18-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
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
