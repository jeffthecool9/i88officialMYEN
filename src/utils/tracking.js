/**
 * Pluggable event tracking — wires to GTM dataLayer + Meta Pixel.
 * Add your GTM container ID to index.html to activate.
 * Dev mode logs to console.
 */
export function trackEvent(eventName, params = {}) {
  try {
    // Google Tag Manager / GA4
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: eventName, ...params })
    }
    // Meta Pixel (Facebook Ads)
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, params)
    }
  } catch (_) {
    // fail silently in production
  }

  if (import.meta.env.DEV) {
    console.log('[i88 Track]', eventName, params)
  }
}
