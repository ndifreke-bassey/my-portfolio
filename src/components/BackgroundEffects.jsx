import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

const particles = [
  { top: 10, left: 8, size: 6 },
  { top: 16, left: 24, size: 5 },
  { top: 26, left: 72, size: 4 },
  { top: 32, left: 48, size: 7 },
  { top: 40, left: 14, size: 5 },
  { top: 46, left: 62, size: 6 },
  { top: 54, left: 84, size: 4 },
  { top: 60, left: 36, size: 5 },
  { top: 68, left: 12, size: 7 },
  { top: 76, left: 56, size: 5 },
  { top: 82, left: 28, size: 6 },
  { top: 88, left: 78, size: 4 },
]

export default function BackgroundEffects() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const smoothX = useSpring(x, { stiffness: 70, damping: 18 })
  const smoothY = useSpring(y, { stiffness: 70, damping: 18 })

  useEffect(() => {
    const handleMove = (event) => {
      x.set(event.clientX - 190)
      y.set(event.clientY - 190)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute h-96 w-96 rounded-full bg-cyan-400/12 blur-[130px]"
      />

      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <motion.span
            key={`${particle.top}-${particle.left}`}
            className="absolute rounded-full bg-cyan-300/60"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -18, 0],
              x: [0, index % 2 === 0 ? 12 : -10, 0],
              opacity: [0.35, 0.9, 0.35],
            }}
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-fuchsia-500/12 blur-[110px]" />
      <div className="absolute bottom-[-8rem] right-[-5rem] h-80 w-80 rounded-full bg-indigo-500/12 blur-[120px]" />
    </div>
  )
}
