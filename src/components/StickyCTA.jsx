import { motion } from 'framer-motion'
import { trackEvent } from '../utils/tracking'
import PremiumButton from './PremiumButton'

const DESTINATION_URL = 'https://www.palacehub8.com/uZieoLoC'

export default function StickyCTA() {
  const handleStickyCTAClick = () => {
    if (typeof window === 'undefined') return

    // Meta Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'English Sticky Bar CTA',
        content_category: 'landing_page_cta',
        section: 'sticky_bar',
        button_text: 'Join Now',
      })

      window.fbq('trackCustom', 'EnglishStickyCTAClick', {
        section: 'sticky_bar',
        button_text: 'Join Now',
        destination_url: DESTINATION_URL,
      })
    }

    // GA4
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'join_now_click', {
        event_category: 'cta',
        event_label: 'English Sticky Bar CTA',
        section: 'sticky_bar',
        button_text: 'Join Now',
        destination_url: DESTINATION_URL,
        page_location: window.location.href,
      })
    }

    // Existing internal tracking
    trackEvent('english_sticky_cta_click', {
      section: 'sticky_bar',
      button_text: 'Join Now',
      destination_url: DESTINATION_URL,
    })

    // Open immediately to avoid popup blocking
    window.open(DESTINATION_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      className="sticky-glass fixed bottom-0 left-0 right-0 z-50 px-4 py-3"
      initial={{ y: 72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.6,
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="w-full flex items-center gap-3">
        {/* Left label — sm+ only */}
        <div className="hidden sm:block flex-1 min-w-0">
          <p className="font-body font-semibold text-ice text-sm tracking-wide leading-tight truncate">
            World Cup 2026
          </p>

          <p className="font-body text-ice/35 text-xs truncate">
            Deposit RM100 · receive 188 FS
          </p>
        </div>

        <PremiumButton
          size="sm"
          onClick={handleStickyCTAClick}
          wrapperClassName="flex-1 sm:flex-none"
          className="w-full"
        >
          Join Now
        </PremiumButton>
      </div>
    </motion.div>
  )
}
