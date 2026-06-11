import { motion } from 'framer-motion'

const payments = [
  { name: 'TruePay',        color: 'text-blue-400' },
  { name: "Touch 'n Go",    color: 'text-green-400' },
  { name: 'FPX',            color: 'text-red-400' },
  { name: 'GrabPay',        color: 'text-green-300' },
  { name: 'Crypto',         color: 'text-yellow-400' },
]

const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
)
const IconBolt = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
)
const IconShield = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
const IconSupport = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.12 1.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.17a16 16 0 0 0 5.94 5.94l1.03-1.23a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)

const trust = [
  { Icon: IconLock,    label: 'SSL Encrypted' },
  { Icon: IconBolt,    label: 'Fast Withdrawals' },
  { Icon: IconShield,  label: 'Play Responsibly' },
  { Icon: IconSupport, label: '24/7 Support' },
]

export default function TrustSection() {
  return (
    <section className="py-12 px-6">
      <div className="section-divider mb-10" />
      <div className="max-w-md mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-3xl text-ice tracking-widest">TRUSTED · SAFE · SECURE</h2>
          <p className="font-body text-ice/40 text-sm mt-1">Licensed &amp; Regulated · Malaysia</p>
        </motion.div>

        {/* Payment methods */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {payments.map((p) => (
            <div key={p.name} className="payment-badge px-4 py-2 rounded-lg">
              <span className={`font-condensed font-semibold text-sm tracking-wide ${p.color}`}>
                {p.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Trust badges grid */}
        <motion.div
          className="grid grid-cols-2 gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {trust.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 bg-surface/50 border border-white/8 rounded-lg px-4 py-3"
            >
              <span className="text-brand/70"><b.Icon /></span>
              <span className="font-condensed text-ice/60 text-sm tracking-wide">{b.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Responsible gambling disclaimer */}
        <motion.p
          className="font-body text-ice/25 text-xs text-center leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          18+ only. Play responsibly. i88 supports safe play in Malaysia.
          MY <span className="text-brand/40">1-800-88-3151</span>
        </motion.p>
      </div>
    </section>
  )
}
