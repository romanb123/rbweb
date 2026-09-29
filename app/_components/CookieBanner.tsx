'use client'

import { useEffect, useState } from 'react'

function grantConsent() {
  if (typeof window === 'undefined') return
  ;(window as any).dataLayer = (window as any).dataLayer || []
  function gtag(...args: any[]) { (window as any).dataLayer.push(args) }
  gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted' })
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
    if (consent === 'accepted') grantConsent()
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    grantConsent()
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="הסכמה לעוגיות">
      <p className="cookie-text">
        האתר משתמש ב-Google Analytics לניתוח תנועה.{' '}
        <a href="/privacy" className="cookie-link">מדיניות פרטיות</a>
      </p>
      <div className="cookie-actions">
        <button className="cookie-btn cookie-btn--accept" onClick={accept}>אישור</button>
        <button className="cookie-btn cookie-btn--decline" onClick={decline}>דחייה</button>
      </div>
    </div>
  )
}
