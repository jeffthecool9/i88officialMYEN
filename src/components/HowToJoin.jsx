import { motion } from 'framer-motion'

/* ── Icons ── */
const IconUser = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const IconCard = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <path d="M2 10h20"/>
    <path d="M7 15h2"/>
  </svg>
)

const IconSparkle = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
)

const ChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)

const steps = [
  {
    num: '01',
    label: 'CREATE ACCOUNT',
    detail: 'Free — 2 minutes flat',
    bg:     'linear-gradient(150deg, #0284C7 0%, #0EA5E9 45%, #38BDF8 100%)',
    ledge:  'rgba(2,100,164,0.85)',
    badge:  'bg-white/20 border-white/30 text-white',
    Icon: IconUser,
  },
  {
    num: '02',
    label: 'TOP UP RM100',
    detail: 'TruePay · TNG · FPX',
    bg:     'linear-gradient(150deg, #1D4ED8 0%, #3B82F6 45%, #60A5FA 100%)',
    ledge:  'rgba(29,64,175,0.85)',
    badge:  'bg-white/20 border-white/30 text-white',
    Icon: IconCard,
  },
  {
    num: '03',
    label: 'COLLECT YOUR REWARDS',
    detail: 'Win up to MYR 100,000',
    bg:     'linear-gradient(150deg, #4338CA 0%, #6366F1 45%, #818CF8 100%)',
    ledge:  'rgba(67,56,202,0.85)',
    badge:  'bg-white/20 border-white/30 text-white',
    Icon: IconSparkle,
  },
]

export default function HowToJoin() {
  return (
    <section className="py-10 px-6">
      <div className="section-divider mb-8" />

      {/* Heading */}
      <motion.div
        className="flex flex-col items-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-8%' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-display text-ice tracking-wide" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)' }}>
          STEP TO JOIN
        </h2>
      </motion.div>

      {/* Step cards */}
      <div className="max-w-md mx-auto space-y-2">
        {steps.map((step, i) => (
          <div key={step.num}>
            <motion.div
              className="relative rounded-2xl overflow-hidden p-4"
              style={{
                background: step.bg,
                boxShadow: `0 6px 0 ${step.ledge}, 0 10px 28px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.22)`,
              }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
            >
              {/* Watermark step number */}
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 font-display leading-none select-none pointer-events-none"
                style={{ fontSize: '5.5rem', color: 'rgba(255,255,255,0.12)' }}
                aria-hidden="true"
              >
                {step.num}
              </span>

              <div className="flex items-center gap-4 relative z-10">
                {/* Icon badge */}
                <div className={`w-12 h-12 flex-none rounded-xl flex items-center justify-center border ${step.badge}`}>
                  <step.Icon />
                </div>

                {/* Text */}
                <div>
                  <p className="font-display text-white tracking-wide leading-none mb-1.5" style={{ fontSize: '1.35rem' }}>
                    {step.label}
                  </p>
                  <p className="font-body text-white/80 text-xs leading-snug">{step.detail}</p>
                </div>
              </div>
            </motion.div>

            {/* Connector chevron */}
            {i < steps.length - 1 && (
              <div className="flex justify-center py-0.5 text-brand/35">
                <ChevronDown />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
