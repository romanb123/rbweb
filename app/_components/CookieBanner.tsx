'use client'

import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
    if (consent === 'accepted') loadGA()
  }, [])

  function loadGA() {
    if (typeof window === 'undefined') return
    if ((window as any).__ga_loaded) return
    ;(window as any).__ga_loaded = true
    const s = document.createElement('script')
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-4RD1EM3RS7'
    s.async = true
    document.head.appendChild(s)
    s.onload = () => {
      ;(window as any).dataLayer = (window as any).dataLayer || []
      function gtag(...args: any[]) { (window as any).dataLayer.push(args) }
      gtag('js', new Date())
      gtag('config', 'G-4RD1EM3RS7')
    }
  }

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    loadGA()
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
