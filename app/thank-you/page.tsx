'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export const runtime = 'edge'

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'conversion', { send_to: 'AW-16917889561/581UCN7By4wdEJmEioM_' })
    }
  }, [])

  return (
    <main style={{ background: '#060606', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', padding: '24px', textAlign: 'center', direction: 'rtl' }}>
      <div>
        <div style={{ width: 72, height: 72, background: '#c8ff00', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', fontSize: 36 }}>
          ✓
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 16 }}>
          תודה!
        </h1>
        <p style={{ color: '#888', fontSize: 16, lineHeight: 1.7, maxWidth: 420, margin: '0 auto 40px' }}>
          קיבלתי את פנייתך ואחזור אליך בהקדם, בדרך כלל תוך 24 שעות.
        </p>
        <Link href="/he" style={{ display: 'inline-block', background: '#c8ff00', color: '#000', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: '4px', textDecoration: 'none' }}>
          חזרה לאתר
        </Link>
      </div>
    </main>
  )
}
