'use client'

import { useEffect, useState } from 'react'

const SERVICE_ITEMS = [
  { num: '01', title: 'בניית אתרים',           slug: 'web-development' },
  { num: '02', title: 'בניית אפליקציות',       slug: 'app-development' },
  { num: '03', title: 'SEO וביצועים',          slug: 'seo' },
  { num: '04', title: 'קמפיינים ממומנים בגוגל', slug: 'google-ads' },
  { num: '05', title: 'סוכני AI לעסקים',       slug: 'ai-agents' },
]

export default function SiteNav({ basePath = '/he' }: { basePath?: string }) {
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="nav nav--scrolled">
      <div className="nav-inner">
        <a href={basePath} className="nav-brand">
          <span className="nav-brand-text">RBapp</span>
        </a>
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
      </div>
    </nav>
  )
}
