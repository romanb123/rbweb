'use client'

import { useEffect, useState, useCallback } from 'react'

type Settings = {
  fontSize: number
  highContrast: boolean
  grayscale: boolean
  underlineLinks: boolean
  bigCursor: boolean
}

const DEFAULT: Settings = {
  fontSize: 0,
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  bigCursor: false,
}

function applySettings(s: Settings) {
  const html = document.documentElement
  html.style.setProperty(
    '--a11y-font-scale',
    s.fontSize === 0 ? '1' : s.fontSize === 1 ? '1.18' : '1.38'
  )
  html.classList.toggle('a11y-high-contrast', s.highContrast)
  html.classList.toggle('a11y-grayscale', s.grayscale)
  html.classList.toggle('a11y-underline-links', s.underlineLinks)
  html.classList.toggle('a11y-big-cursor', s.bigCursor)
}

export default function Accessibility() {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState<Settings>(DEFAULT)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('a11y-settings')
      if (stored) {
        const parsed = JSON.parse(stored) as Settings
        setSettings(parsed)
        applySettings(parsed)
      }
    } catch {}
  }, [])

  const save = useCallback((next: Settings) => {
    setSettings(next)
    applySettings(next)
    try { localStorage.setItem('a11y-settings', JSON.stringify(next)) } catch {}
  }, [])

  const toggle = (key: keyof Settings) =>
    save({ ...settings, [key]: !settings[key] })

  const changeFontSize = (delta: number) =>
    save({ ...settings, fontSize: Math.max(0, Math.min(2, settings.fontSize + delta)) })

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'F10') { e.preventDefault(); setOpen(v => !v) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const fontLabel = ['רגיל', 'גדול', 'גדול מאוד'][settings.fontSize]

  return (
    <>
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="פתח תפריט נגישות"
        aria-expanded={open}
        title="נגישות (F10)"
        style={{
          position: 'fixed',
          bottom: '1.8rem',
          left: '1.8rem',
          zIndex: 9999,
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: '#c8ff00',
          color: '#060606',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 0 1px rgba(200,255,0,0.3), 0 4px 24px rgba(200,255,0,0.2)',
          transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 1px rgba(200,255,0,0.5), 0 6px 32px rgba(200,255,0,0.35)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 1px rgba(200,255,0,0.3), 0 4px 24px rgba(200,255,0,0.2)'
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="4" r="2" />
          <path d="M12 7C9 7 7 8.5 7 8.5l1.2 3.5 3.8-1 3.8 1L17 8.5S15 7 12 7z" />
          <path d="M10 11.5L8.5 18.5l3.5-1.8 3.5 1.8-1.5-7" />
        </svg>
      </button>

      {open && (
        <div
          className="a11y-panel"
          role="dialog"
          aria-label="הגדרות נגישות"
          dir="rtl"
        >
          <div className="a11y-panel-header">
            <span>הגדרות נגישות</span>
            <button className="a11y-close" onClick={() => setOpen(false)} aria-label="סגור">✕</button>
          </div>

          <div className="a11y-group">
            <div className="a11y-group-label">גודל טקסט</div>
            <div className="a11y-row">
              <button className="a11y-btn-icon" onClick={() => changeFontSize(-1)} disabled={settings.fontSize === 0} aria-label="הקטן טקסט">A −</button>
              <span className="a11y-value">{fontLabel}</span>
              <button className="a11y-btn-icon" onClick={() => changeFontSize(1)} disabled={settings.fontSize === 2} aria-label="הגדל טקסט">A +</button>
            </div>
          </div>

          <div className="a11y-divider" />

          <div className="a11y-group">
            <div className="a11y-group-label">תצוגה</div>
            <div className="a11y-toggles">
              {[
                { key: 'highContrast',   label: 'ניגודיות גבוהה', icon: '◑' },
                { key: 'grayscale',      label: 'גווני אפור',      icon: '◻' },
                { key: 'underlineLinks', label: 'הדגשת קישורים',  icon: '🔗' },
                { key: 'bigCursor',      label: 'סמן גדול',        icon: '▲' },
              ].map(({ key, label, icon }) => (
                <button
                  key={key}
                  className={`a11y-toggle${settings[key as keyof Settings] ? ' a11y-toggle--on' : ''}`}
                  onClick={() => toggle(key as keyof Settings)}
                  aria-pressed={!!settings[key as keyof Settings]}
                >
                  <span aria-hidden="true">{icon}</span>
                  <span className="a11y-toggle-label">{label}</span>
                  <span className="a11y-toggle-pill">
                    {settings[key as keyof Settings] ? 'פעיל' : 'כבוי'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="a11y-divider" />

          <div className="a11y-panel-footer">
            <button className="a11y-reset" onClick={() => save(DEFAULT)}>
              איפוס הגדרות
            </button>
            <span className="a11y-shortcut">F10</span>
          </div>
        </div>
      )}

      {open && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 9998 }}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
