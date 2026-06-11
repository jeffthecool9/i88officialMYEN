import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function PremiumButton({ children, onClick, size = 'lg', className = '', wrapperClassName = '' }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const shimmerProgress = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-40, 40], [12, -12]), { stiffness: 220, damping: 18 })
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-14, 14]), { stiffness: 220, damping: 18 })
  const shimmerLeft = useTransform(shimmerProgress, [0, 1], ['-30%', '130%'])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
    shimmerProgress.set((e.clientX - rect.left) / rect.width)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const sizeClass = size === 'lg' ? 'px-10 py-4' : 'px-7 py-3'
  const fontSize  = size === 'lg' ? '1.2rem'     : '1.05rem'

  return (
    <motion.div
      className={`relative select-none ${wrapperClassName || 'inline-block'}`}
      style={{ perspective: '700px' }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 380, damping: 24 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D bottom-face depth layer */}
      <div
        className="absolute inset-x-0 rounded-xl"
        style={{ top: 4, bottom: -5, background: 'rgba(0,48,96,1)', zIndex: 0 }}
      />

      {/* Pulse glow ring */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ zIndex: 0 }}
        animate={{
          boxShadow: [
            '0 0 0 0px rgba(14,165,233,0)',
            '0 0 0 7px rgba(14,165,233,0.08)',
            '0 0 0 0px rgba(14,165,233,0)',
          ],
        }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />

      <motion.button
        onClick={onClick}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', position: 'relative', zIndex: 1 }}
        whileTap={{ y: 4, rotateX: 8, scale: 0.975 }}
        transition={{ type: 'spring', stiffness: 420, damping: 26 }}
        className={`btn-premium ${sizeClass} rounded-xl inline-flex items-center justify-center gap-2.5 ${className}`}
      >
        {/* Cursor-tracking shimmer */}
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <motion.div
            className="absolute top-0 bottom-0 w-16 blur-md"
            style={{
              left: shimmerLeft,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.52), transparent)',
            }}
          />
        </div>

        <span
          className="relative z-10 font-display tracking-[0.12em]"
          style={{
            fontSize,
            fontWeight: 900,
            color: '#ffffff',
            WebkitTextStroke: '2px #000',
            paintOrder: 'stroke fill',
            textShadow: '1px 1px 0 #1a1a1a, 2px 2px 0 #111, 3px 3px 0 #080808, 3px 4px 10px rgba(0,0,0,0.65)',
          }}
        >
          {children}
        </span>

        <motion.span
          className="relative z-10"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowRight />
        </motion.span>
      </motion.button>
    </motion.div>
  )
}
