'use client'

import { useState, useEffect, useRef } from 'react'
import { SERVICES, type Lang, type ServiceSlug } from '../_data/services'

const NAV_LABELS: Record<Lang, { services: string; projects: string; about: string; contact: string }> = {
  he: { services: 'שירותים', projects: 'פרויקטים', about: 'אודות', contact: 'צור קשר ↗' },
  en: { services: 'Services', projects: 'Projects', about: 'About', contact: 'Contact ↗' },
  ru: { services: 'Услуги', projects: 'Проекты', about: 'О нас', contact: 'Связаться ↗' },
  th: { services: 'บริการ', projects: 'ผลงาน', about: 'เกี่ยวกับ', contact: 'ติดต่อ ↗' },
}

const SERVICE_NAV_ITEMS: Record<Lang, { slug: string; num: string; title: string }[]> = {
  he: [
    { slug: 'websites', num: '01', title: 'בניית אתרים' },
    { slug: 'apps', num: '02', title: 'בניית אפליקציות' },
    { slug: 'seo', num: '03', title: 'SEO וביצועים' },
    { slug: 'google-ads', num: '04', title: 'קמפיינים ממומנים' },
    { slug: 'ai-agents', num: '05', title: 'סוכני AI' },
  ],
  en: [
    { slug: 'websites', num: '01', title: 'Web Development' },
    { slug: 'apps', num: '02', title: 'App Development' },
    { slug: 'seo', num: '03', title: 'SEO & Performance' },
    { slug: 'google-ads', num: '04', title: 'Google Ads' },
    { slug: 'ai-agents', num: '05', title: 'AI Agents' },
  ],
  ru: [
    { slug: 'websites', num: '01', title: 'Создание сайтов' },
    { slug: 'apps', num: '02', title: 'Разработка приложений' },
    { slug: 'seo', num: '03', title: 'SEO и производительность' },
    { slug: 'google-ads', num: '04', title: 'Google Ads' },
    { slug: 'ai-agents', num: '05', title: 'AI агенты' },
  ],
  th: [
    { slug: 'websites', num: '01', title: 'สร้างเว็บไซต์' },
    { slug: 'apps', num: '02', title: 'พัฒนาแอป' },
    { slug: 'seo', num: '03', title: 'SEO & ประสิทธิภาพ' },
    { slug: 'google-ads', num: '04', title: 'Google Ads' },
    { slug: 'ai-agents', num: '05', title: 'AI Agents' },
  ],
}

const CTA_LABEL: Record<Lang, string> = {
  he: 'צור קשר',
  en: 'Contact',
  ru: 'Контакт',
  th: 'ติดต่อ',
}

const BACK_LABEL: Record<Lang, string> = {
  he: '← חזרה',
  en: '← Back',
  ru: '← Назад',
  th: '← กลับ',
}

const START_LABEL: Record<Lang, string> = {
  he: 'התחל פרויקט',
  en: 'Start a project',
  ru: 'Начать проект',
  th: 'เริ่มโปรเจกต์',
}

const INCLUDES_TITLE: Record<Lang, string> = {
  he: 'מה כלול',
  en: "What's Included",
  ru: 'Что входит',
  th: 'สิ่งที่รวมอยู่',
}

const TECH_LABEL: Record<Lang, string> = {
  he: 'טכנולוגיות',
  en: 'Tech Stack',
  ru: 'Технологии',
  th: 'เทคโนโลยี',
}

const PROCESS_TITLE: Record<Lang, string> = {
  he: 'תהליך העבודה',
  en: 'The Process',
  ru: 'Процесс работы',
  th: 'กระบวนการทำงาน',
}

const PROJECTS_TITLE: Record<Lang, string> = {
  he: 'פרויקטים',
  en: 'Projects',
  ru: 'Проекты',
  th: 'โปรเจกต์',
}

const FAQ_TITLE: Record<Lang, string> = {
  he: 'שאלות נפוצות',
  en: 'FAQ',
  ru: 'Частые вопросы',
  th: 'คำถามที่พบบ่อย',
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

function RevealSection({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default function ServicePage({ lang, slug }: { lang: Lang; slug: ServiceSlug }) {
  const service = SERVICES.find(s => s.slug === slug)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isRTL = lang === 'he'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!service) return null
  const data = service.langs[lang]

  const bodyFont = lang === 'he'
    ? "'Rubik', sans-serif"
    : lang === 'th'
    ? "'Sarabun', sans-serif"
    : "'IBM Plex Mono', monospace"

  const styles = {
    page: {
      background: '#060606',
      color: '#f0f0f0',
      minHeight: '100vh',
      fontFamily: bodyFont,
      direction: isRTL ? 'rtl' as const : 'ltr' as const,
    },
    nav: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(6,6,6,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(200,255,0,0.08)',
      padding: '0 2rem',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    navBrand: {
      color: '#c8ff00',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: '1.1rem',
      textDecoration: 'none',
      letterSpacing: '0.05em',
    },
    navTitle: {
      fontFamily: "'Syne', sans-serif",
      fontSize: '0.85rem',
      color: '#888',
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
    },
    navCta: {
      background: '#c8ff00',
      color: '#060606',
      padding: '0.5rem 1.2rem',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: '0.8rem',
      textDecoration: 'none',
      letterSpacing: '0.05em',
      transition: 'opacity 0.2s',
    },
    hero: {
      minHeight: 'calc(100vh - 64px)',
      marginTop: '64px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative' as const,
      overflow: 'hidden',
      padding: '4rem 2rem',
    },
    heroWatermark: {
      position: 'absolute' as const,
      top: '50%',
      right: isRTL ? 'auto' : '-2vw',
      left: isRTL ? '-2vw' : 'auto',
      transform: 'translateY(-50%)',
      fontSize: '22vw',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 900,
      color: 'rgba(200,255,0,0.04)',
      lineHeight: 1,
      userSelect: 'none' as const,
      pointerEvents: 'none' as const,
      zIndex: 0,
    },
    heroContent: {
      position: 'relative' as const,
      zIndex: 1,
      maxWidth: '900px',
      margin: '0 auto',
      width: '100%',
    },
    heroIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      display: 'block',
    },
    heroNum: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.85rem',
      color: '#c8ff00',
      letterSpacing: '0.2em',
      marginBottom: '1rem',
      display: 'block',
    },
    heroTitle: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 900,
      fontSize: 'clamp(2.5rem, 7vw, 5rem)',
      lineHeight: 1.05,
      color: '#f0f0f0',
      marginBottom: '1rem',
    },
    heroTagline: {
      fontFamily: "'Syne', sans-serif",
      fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
      color: '#c8ff00',
      marginBottom: '1.5rem',
      fontWeight: 600,
    },
    heroDesc: {
      fontSize: '1.05rem',
      lineHeight: 1.8,
      color: '#888',
      maxWidth: '600px',
      marginBottom: '2.5rem',
    },
    heroBtns: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap' as const,
    },
    btnPrimary: {
      background: '#c8ff00',
      color: '#060606',
      padding: '0.85rem 2rem',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: '0.9rem',
      textDecoration: 'none',
      letterSpacing: '0.05em',
      display: 'inline-block',
      transition: 'opacity 0.2s',
    },
    btnSecondary: {
      background: 'transparent',
      color: '#f0f0f0',
      padding: '0.85rem 2rem',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 600,
      fontSize: '0.9rem',
      textDecoration: 'none',
      letterSpacing: '0.05em',
      border: '1px solid rgba(240,240,240,0.2)',
      display: 'inline-block',
      transition: 'border-color 0.2s, color 0.2s',
    },
    section: {
      padding: '5rem 2rem',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
    sectionLabel: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.7rem',
      color: '#c8ff00',
      letterSpacing: '0.2em',
      textTransform: 'uppercase' as const,
      display: 'block',
      marginBottom: '0.75rem',
    },
    sectionTitle: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 900,
      fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
      marginBottom: '3rem',
      color: '#f0f0f0',
    },
    includesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '1px',
      background: 'rgba(200,255,0,0.06)',
    },
    includeCard: {
      background: '#0d0d0d',
      padding: '2rem',
      transition: 'background 0.2s',
    },
    includeIcon: {
      fontSize: '1.8rem',
      marginBottom: '0.75rem',
      display: 'block',
    },
    includeTitle: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: '1rem',
      marginBottom: '0.5rem',
      color: '#f0f0f0',
    },
    includeDesc: {
      fontSize: '0.9rem',
      color: '#888',
      lineHeight: 1.7,
    },
    techSection: {
      padding: '3rem 2rem',
      background: '#080808',
      borderTop: '1px solid rgba(200,255,0,0.08)',
      borderBottom: '1px solid rgba(200,255,0,0.08)',
    },
    techInner: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      flexWrap: 'wrap' as const,
    },
    techLabel: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.7rem',
      color: '#c8ff00',
      letterSpacing: '0.2em',
      textTransform: 'uppercase' as const,
      whiteSpace: 'nowrap' as const,
      minWidth: '80px',
    },
    techTags: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap' as const,
    },
    techTag: {
      background: 'rgba(200,255,0,0.08)',
      border: '1px solid rgba(200,255,0,0.15)',
      color: '#c8ff00',
      padding: '0.3rem 0.8rem',
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.75rem',
      letterSpacing: '0.05em',
    },
    processGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '1px',
      background: 'rgba(200,255,0,0.06)',
    },
    processCard: {
      background: '#0d0d0d',
      padding: '2rem',
    },
    processNum: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.7rem',
      color: '#c8ff00',
      letterSpacing: '0.15em',
      marginBottom: '1rem',
      display: 'block',
    },
    processTitle: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: '1rem',
      marginBottom: '0.5rem',
      color: '#f0f0f0',
    },
    processDesc: {
      fontSize: '0.88rem',
      color: '#888',
      lineHeight: 1.7,
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: '1px',
      background: 'rgba(200,255,0,0.06)',
    },
    projectCard: {
      background: '#0d0d0d',
      padding: '1.75rem',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-between',
      gap: '0.75rem',
      textDecoration: 'none',
      transition: 'background 0.2s',
    },
    projectTitle: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: '1.05rem',
      color: '#f0f0f0',
    },
    projectTag: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.7rem',
      color: '#888',
      letterSpacing: '0.08em',
    },
    projectArrow: {
      color: '#c8ff00',
      fontSize: '1.1rem',
      alignSelf: 'flex-end',
    },
    faqItem: {
      borderBottom: '1px solid rgba(200,255,0,0.08)',
    },
    faqQ: {
      width: '100%',
      background: 'none',
      border: 'none',
      color: '#f0f0f0',
      padding: '1.5rem 0',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      textAlign: isRTL ? 'right' as const : 'left' as const,
    },
    faqA: {
      color: '#888',
      fontSize: '0.95rem',
      lineHeight: 1.8,
      paddingBottom: '1.5rem',
    },
    ctaSection: {
      padding: '6rem 2rem',
      background: '#080808',
      borderTop: '1px solid rgba(200,255,0,0.08)',
      textAlign: 'center' as const,
    },
    ctaTitle: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 900,
      fontSize: 'clamp(1.8rem, 4vw, 3rem)',
      marginBottom: '1rem',
      color: '#f0f0f0',
    },
    ctaSub: {
      color: '#888',
      fontSize: '1.05rem',
      marginBottom: '2.5rem',
    },
    footer: {
      padding: '2rem',
      textAlign: 'center' as const,
      borderTop: '1px solid rgba(200,255,0,0.08)',
      color: '#444',
      fontSize: '0.85rem',
      fontFamily: "'IBM Plex Mono', monospace",
    },
  }

  return (
    <div style={styles.page}>
      {/* NAV */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav-inner">
          <a href={`/${lang}`} className="nav-brand">
            <div className="logo-mark" style={{ width: 38, height: 38 }}><span>RB</span></div>
            <span className="nav-brand-text">RBapp</span>
          </a>
          <div className="nav-links">
            <div
              className="nav-dropdown-wrap"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a href={`/${lang}#services`} className="nav-dropdown-trigger">
                {NAV_LABELS[lang].services} <span className="nav-caret" aria-hidden="true">▾</span>
              </a>
              {servicesOpen && (
                <div className="nav-dropdown">
                  {SERVICE_NAV_ITEMS[lang].map(s => (
                    <a
                      key={s.slug}
                      href={`/${lang}/services/${s.slug}`}
                      className="nav-dropdown-item"
                    >
                      <span className="nav-dropdown-num">{s.num}</span>
                      {s.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href={`/${lang}#projects`}>{NAV_LABELS[lang].projects}</a>
            <a href={`/${lang}#about`}>{NAV_LABELS[lang].about}</a>
            {lang === 'he' && <a href="/he/blog">בלוג</a>}
            <a href={`/${lang}#contact`} className="nav-cta">{NAV_LABELS[lang].contact}</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroWatermark} aria-hidden="true">{service.num}</div>
        <div style={styles.heroContent}>
          <span style={styles.heroIcon} aria-hidden="true">{service.icon}</span>
          <span style={styles.heroNum}>/ {service.num}</span>
          <h1 style={styles.heroTitle}>{data.title}</h1>
          <p style={styles.heroTagline}>{data.tagline}</p>
          <p style={styles.heroDesc}>{data.desc}</p>
          <div style={styles.heroBtns}>
            <a href={`/${lang}#contact`} style={styles.btnPrimary}>{START_LABEL[lang]} →</a>
            <a href={`/${lang}#services`} style={styles.btnSecondary}>{BACK_LABEL[lang]}</a>
          </div>
        </div>
      </section>

      {/* INCLUDES */}
      <RevealSection>
        <section style={styles.section}>
          <div style={styles.container}>
            <span style={styles.sectionLabel}>/ {service.num}</span>
            <h2 style={styles.sectionTitle}>{INCLUDES_TITLE[lang]}</h2>
            <div style={styles.includesGrid}>
              {data.includes.map((item, i) => (
                <div key={i} style={styles.includeCard}>
                  <span style={styles.includeIcon}>{item.icon}</span>
                  <div style={styles.includeTitle}>{item.title}</div>
                  <p style={styles.includeDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* TECH STACK */}
      <RevealSection>
        <div style={styles.techSection}>
          <div style={styles.techInner}>
            <span style={styles.techLabel}>{TECH_LABEL[lang]}</span>
            <div style={styles.techTags}>
              {data.tech.map(t => (
                <span key={t} style={styles.techTag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* PROCESS */}
      <RevealSection>
        <section style={styles.section}>
          <div style={styles.container}>
            <span style={styles.sectionLabel}>/ Process</span>
            <h2 style={styles.sectionTitle}>{PROCESS_TITLE[lang]}</h2>
            <div style={styles.processGrid}>
              {data.process.map((step) => (
                <div key={step.num} style={styles.processCard}>
                  <span style={styles.processNum}>{step.num}</span>
                  <div style={styles.processTitle}>{step.title}</div>
                  <p style={styles.processDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* PROJECTS — only for websites and apps */}
      {(slug === 'websites' || slug === 'apps') && (
        <RevealSection>
          <section style={{ ...styles.section, background: '#080808' }}>
            <div style={styles.container}>
              <span style={styles.sectionLabel}>/ Work</span>
              <h2 style={styles.sectionTitle}>{PROJECTS_TITLE[lang]}</h2>
              <div style={styles.projectsGrid}>
                {data.projects.map((p, i) => (
                  <a
                    key={i}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.projectCard}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#111' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#0d0d0d' }}
                  >
                    <div>
                      <div style={styles.projectTitle}>{p.title}</div>
                      <div style={styles.projectTag}>{p.tag}</div>
                    </div>
                    <span style={styles.projectArrow}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>
      )}

      {/* FAQ */}
      <RevealSection>
        <section style={styles.section}>
          <div style={styles.container}>
            <span style={styles.sectionLabel}>/ FAQ</span>
            <h2 style={styles.sectionTitle}>{FAQ_TITLE[lang]}</h2>
            <div>
              {data.faq.map((item, i) => (
                <div key={i} style={styles.faqItem}>
                  <button
                    style={styles.faqQ}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{item.q}</span>
                    <span style={{ color: '#c8ff00', flexShrink: 0, fontSize: '1.2rem' }}>
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <p style={styles.faqA}>{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA */}
      <RevealSection>
        <section style={styles.ctaSection}>
          <div style={styles.container}>
            <h2 style={styles.ctaTitle}>{data.cta_title}</h2>
            <p style={styles.ctaSub}>{data.cta_sub}</p>
            <a href={`/${lang}#contact`} style={styles.btnPrimary}>{START_LABEL[lang]} →</a>
          </div>
        </section>
      </RevealSection>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span>© 2026 Roman Besiakov · </span>
        <a href={`/${lang}`} style={{ color: '#c8ff00', textDecoration: 'none' }}>rb-app.com</a>
      </footer>
    </div>
  )
}
