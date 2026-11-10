'use client'

import { useState } from 'react'

const SERVICE_ITEMS = [
  { num: '01', title: 'בניית אתרים',           slug: 'web-development' },
  { num: '02', title: 'בניית אפליקציות',       slug: 'app-development' },
  { num: '03', title: 'SEO וביצועים',          slug: 'seo' },
  { num: '04', title: 'קמפיינים ממומנים בגוגל', slug: 'google-ads' },
  { num: '05', title: 'סוכני AI לעסקים',       slug: 'ai-agents' },
]

export default function SiteNav({ basePath = '/he' }: { basePath?: string }) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <>
      <nav className="nav nav--scrolled">
        <div className="nav-inner">
          <a href={basePath} className="nav-brand">
            <span className="nav-brand-text">RBapp</span>
          </a>

          {/* Desktop links */}
          <div className="nav-links">
            <div
              className="nav-dropdown-wrap"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a href={`${basePath}#services`} className="nav-dropdown-trigger">
                שירותים <span className="nav-caret" aria-hidden="true">▾</span>
              </a>
              {servicesOpen && (
                <div className="nav-dropdown">
                  {SERVICE_ITEMS.map(s => (
                    <a
                      key={s.num}
                      href={`/he/services/${s.slug}`}
                      className="nav-dropdown-item"
                    >
                      <span className="nav-dropdown-num">{s.num}</span>
                      {s.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href={`${basePath}#projects`}>פרויקטים</a>
            <a href={`${basePath}#about`}>אודות</a>
            <a href="/he/blog">בלוג</a>
            <a href={`${basePath}#contact`} className="nav-cta">צור קשר ↗</a>
          </div>

          {/* Hamburger button */}
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu — outside <nav> to avoid backdrop-filter containing block */}
      <div className={`nav-mobile${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <div className={`nav-mobile-services${mobileServicesOpen ? ' open' : ''}`}>
          <div
            className="nav-mobile-services-title"
            onClick={() => setMobileServicesOpen(o => !o)}
          >
            שירותים <span className="nav-caret">▾</span>
          </div>
          <div className="nav-mobile-services-list">
            {SERVICE_ITEMS.map(s => (
              <a
                key={s.num}
                href={`/he/services/${s.slug}`}
                className="nav-mobile-service-item"
                onClick={closeMenu}
              >
                <span className="nav-dropdown-num">{s.num}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>

        <a href={`${basePath}#projects`} className="nav-mobile-link" onClick={closeMenu}>פרויקטים</a>
        <a href={`${basePath}#about`} className="nav-mobile-link" onClick={closeMenu}>אודות</a>
        <a href="/he/blog" className="nav-mobile-link" onClick={closeMenu}>בלוג</a>
        <a href={`${basePath}#contact`} className="nav-mobile-link nav-cta-mobile" onClick={closeMenu}>צור קשר ↗</a>
      </div>
    </>
  )
}
