import { motion } from 'framer-motion'
import { trackEvent } from '../utils/tracking'
import PremiumButton from './PremiumButton'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } },
}

const rise = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

const stats = [
  { value: '3X',   label: 'Top Up RM100 · Get RM300' },
  { value: '20%',  label: 'Daily · Max RM288/Day'    },
  { value: 'RM5K', label: 'Weekly Pass Prize'         },
]

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">

      {/* Video */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/worldcup-bg.mp4"
        aria-hidden="true"
      />
      <div className="video-overlay absolute inset-0 pointer-events-none" />

      {/* Amber-tinted stadium beams — desktop only via CSS */}
      <div className="stadium-beam left-[28%] animate-beam-left" />
      <div className="stadium-beam right-[28%] animate-beam-right" />

      {/* Ambient brand atmosphere — radial glow behind text, not a shadow */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(ellipse 70% 45% at 20% 82%, rgba(14,165,233,0.16) 0%, transparent 70%)' }}
      />

      {/* Main content — pinned to bottom so players and VS are fully visible above */}
      <div className="relative z-10 flex flex-1 items-end pb-20">
        <motion.div
          className="w-full px-6 md:px-12 lg:px-20 md:max-w-[58%] text-center md:text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.h1 variants={rise} className="font-display tracking-wide mb-3">
            <span
              className="text-gold-outline block leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 6.5vw, 3.2rem)', letterSpacing: '0.06em' }}
            >FIFA WORLD CUP 2026</span>
            <span
              className="block text-white/75 uppercase"
              style={{ fontSize: 'clamp(0.7rem, 3vw, 1.25rem)', letterSpacing: '0.28em', margin: '0.25em 0 0.1em' }}
            >— Win Up To —</span>
            <span
              className="text-gold-3d block"
              style={{ fontSize: 'clamp(2.6rem, 11vw, 5.5rem)', lineHeight: 0.88 }}
            >MYR 100,000</span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={rise} className="font-body text-body-premium text-sm leading-relaxed mb-4 md:max-w-md">
            35,306 players already joined — play Golden Boot Showdown today.
          </motion.p>

          {/* CTA */}
          <motion.div variants={rise} className="flex md:justify-start justify-center mb-4">
            <PremiumButton
              size="lg"
              onClick={() => { trackEvent('hero_cta_click', { section: 'hero' }); window.open('https://www.palacehub8.com/t2zaT9uZ', '_blank') }}
              className="w-full sm:w-auto"
            >
              Join Now
            </PremiumButton>
          </motion.div>

          {/* Stat bar */}
          <motion.div
            variants={rise}
            className="inline-grid grid-cols-3 w-full sm:w-auto border border-white/8 bg-white/[0.04] rounded-xl overflow-hidden"
          >
            {stats.map((s, i) => (
              <div
                key={s.value}
                className={`stat-cell text-center py-2.5 px-4 ${i < stats.length - 1 ? 'border-r border-white/8' : ''}`}
              >
                <p className="font-display text-stat-value text-xl leading-none tracking-wide">{s.value}</p>
                <p className="font-body text-stat-label text-[10px] tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
