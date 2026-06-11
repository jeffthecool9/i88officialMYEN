import { motion } from 'framer-motion'

const FieldLines = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 208 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect x="8" y="8" width="192" height="194" fill="none" stroke="white" strokeWidth="1.5"/>
    <line x1="0" y1="105" x2="208" y2="105" stroke="white" strokeWidth="1"/>
    <circle cx="104" cy="105" r="36" fill="none" stroke="white" strokeWidth="1.5"/>
    <rect x="8" y="74" width="38" height="62" fill="none" stroke="white" strokeWidth="1"/>
    <rect x="162" y="74" width="38" height="62" fill="none" stroke="white" strokeWidth="1"/>
    <circle cx="104" cy="105" r="2.5" fill="white"/>
  </svg>
)

const events = [
  {
    title: 'Christmas Grand Prize',
    date:  'Dec 30, 2025 – Jan 1, 2026',
    tag:   'Holiday Special',
    img:   '/events/fb-ads-1.png',
  },
  {
    title: 'Raya Perfect Week',
    date:  '10% Bonus + 50 Tokens Daily',
    tag:   'Hari Raya 2026',
    img:   '/events/raya-ads-2.jpg',
  },
  {
    title: 'CNY Minigame Onboard',
    date:  'Win up to $38,888',
    tag:   'Chinese New Year',
    img:   '/events/ads-4.jpg',
  },
  {
    title: 'Hacksaw Super Week',
    date:  '25 – 31 May 2026',
    tag:   'Slots Event',
    img:   '/events/eng-edm-hsw.jpg',
  },
  {
    title: 'World Cup Kickoff Bonus',
    date:  'Jun 11 – Jul 19, 2026',
    tag:   'World Cup 2026',
    grad:  'from-brand/35 via-sky-600/10 to-indigo-600/25',
  },
  {
    title: 'Weekend Reload Promo',
    date:  'Every Saturday & Sunday',
    tag:   'Weekly Promo',
    grad:  'from-indigo-500/30 via-brand/10 to-sky-500/25',
  },
]

function EventCard({ title, date, tag, img, grad }) {
  return (
    <div className="glass-card flex-none w-52 h-[210px] rounded-2xl overflow-hidden relative">
      {img ? (
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
          draggable="false"
        />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${grad}`} />
          <FieldLines />
        </>
      )}

      {/* Bottom scrim for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/45 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-body text-[9px] font-semibold tracking-[0.2em] uppercase text-brand mb-1">
          {tag}
        </p>
        <h3
          className="font-display text-ice leading-tight tracking-wide mb-1"
          style={{ fontSize: '1.1rem' }}
        >
          {title}
        </h3>
        <p className="font-body text-ice/50 text-[11px] leading-snug">{date}</p>
      </div>
    </div>
  )
}

export default function EventCarousel() {
  return (
    <section className="py-10 overflow-hidden">
      <div className="section-divider mb-8" />

      <motion.div
        className="text-center px-6 mb-7"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-8%' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-display text-ice tracking-wide" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)' }}>
          EVENTS &amp; UPDATES
        </h2>
      </motion.div>

      {/* River marquee — two identical sets for seamless seam */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-ink via-ink/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-ink via-ink/80 to-transparent z-10 pointer-events-none" />
        <div className="marquee-track py-1">
          <div className="marquee-set">
            {events.map((ev, i) => <EventCard key={i} {...ev} />)}
          </div>
          <div className="marquee-set" aria-hidden="true">
            {events.map((ev, i) => <EventCard key={`b${i}`} {...ev} />)}
          </div>
          <div className="marquee-set" aria-hidden="true">
            {events.map((ev, i) => <EventCard key={`c${i}`} {...ev} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
