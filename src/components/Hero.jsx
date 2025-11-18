import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function WaliaLogo({ className = 'w-16 h-16' }) {
  // Stylized goat head (Walia ibex) mark: glowing white with subtle cyan accents
  return (
    <div className={`relative ${className}`} aria-label="WaliaTech goat head logo">
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="hornGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cfe9ff" />
          </linearGradient>
        </defs>
        {/* Horns */}
        <path d="M36 30c-10 4-16 13-16 23 0 7 3 13 8 18 1.6 1.7 4.6 0.1 3.9-2.2-2.1-6.9-0.6-13.1 3.1-17.7 4.4-5.5 11.8-9.2 21-9.2 1.3 0 2.6.1 3.9.2 0 0-2.8-8.7-14.3-12.2-2.8-.8-6-.8-9.6-.1z" fill="url(#hornGrad)" opacity="0.9" filter="url(#glow)" />
        <path d="M92 30c10 4 16 13 16 23 0 7-3 13-8 18-1.6 1.7-4.6 0.1-3.9-2.2 2.1-6.9.6-13.1-3.1-17.7-4.4-5.5-11.8-9.2-21-9.2-1.3 0-2.6.1-3.9.2 0 0 2.8-8.7 14.3-12.2 2.8-.8 6-.8 9.6-.1z" fill="url(#hornGrad)" opacity="0.9" filter="url(#glow)" />
        {/* Head base */}
        <path d="M40 58c0-10 11.2-16 24-16s24 6 24 16v14c0 6.4-4.1 12.1-10.2 14.2l-13.8 4.8-13.8-4.8C44.1 84.1 40 78.4 40 72V58z" fill="#ffffff" filter="url(#glow)" />
        {/* Eyes */}
        <circle cx="56" cy="70" r="2.2" fill="#7dd3fc" />
        <circle cx="72" cy="70" r="2.2" fill="#7dd3fc" />
        {/* Nose + beard */}
        <path d="M64 78c4 0 8-1.5 11-4.2" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M64 92c-3 0-5-2.4-5-5.3v-6.2c0-.8.7-1.5 1.5-1.5h7c.8 0 1.5.7 1.5 1.5v6.2c0 2.9-2 5.3-5 5.3z" fill="#e6f1ff" opacity="0.9" />
        {/* Jaw highlight */}
        <path d="M50 80c4 4 8.9 6 14 6s10-2 14-6" stroke="#e2e8f0" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        {/* Subtle cheek lines */}
        <path d="M48 66c-2.5-1.3-4.5-3.3-5.8-5.8" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M80 66c2.5-1.3 4.5-3.3 5.8-5.8" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.6" fill="none" strokeLinecap="round" />
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
