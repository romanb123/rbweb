'use client'

import { useEffect, useState } from 'react'

// ─── Types & Translations ─────────────────────────────────────────────────────
type Lang = 'he' | 'en' | 'ru' | 'th'

const T = {
  en: {
    nav: {
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact ↗',
    },
    hero: {
      tag: 'Full-Stack Developer · Available for projects',
      line1: 'WEB & APP',
      line2: 'DEVELOPMENT.',
      sub: 'Building digital products that perform, convert,\nand stand the test of time.',
      cta1: 'Start a project →',
      cta2: 'See my work ↓',
      stat_num: '5+',
      stat_label: 'Years Experience',
    },
    services: {
      label: 'What I Build',
      title: 'Services',
      items: [
        {
          num: '01',
          title: 'Web Development',
          desc: 'Custom websites built from Figma or InDesign designs into high-performance products. WordPress, React, Next.js — whatever your project needs.',
          tags: ['React', 'Next.js', 'WordPress', 'PHP', 'SCSS'],
        },
        {
          num: '02',
          title: 'App Development',
          desc: 'Full-stack mobile and web applications. From REST API design to polished UI — built to scale and shipped to production.',
          tags: ['React Native', 'Node.js', 'MongoDB', 'REST API'],
        },
        {
          num: '03',
          title: 'SEO & Performance',
          desc: 'Real results: from 32 to 95 on Google Lighthouse. Deep expertise in Core Web Vitals, Google Analytics 4, and Tag Manager.',
          tags: ['Lighthouse', 'GA4', 'GTM', 'Core Web Vitals'],
        },
      ],
    },
    projects: {
      label: 'Featured Work',
      title: 'Projects',
      app_type: 'Mobile App · Android · Google Play',
      app_title: 'One Second Challenge',
      app_desc:
        'A reflex-based mobile game where players must tap at precisely the right moment. Designed, built, and published to the Google Play Store — from concept to live product.',
      app_link: 'View on Google Play ↗',
    },
    about: {
      label: 'About',
      title: 'Full-Stack\nDeveloper',
      text1: "I'm Roman Besiakov — a Full-Stack Developer with 5+ years of professional experience building production-grade websites and applications. I bring ideas from concept to live product.",
      text2: 'I specialize in transforming designs into fast, functional digital products. From WordPress news portals to mobile apps on Google Play — I build things that actually work.',
      h1_title: 'John Bryce',
      h1_sub: 'Full-Stack Web Development · Score: 100/100',
      h2_title: '5+ Years',
      h2_sub: 'Professional Development Experience',
      h3_title: 'Languages',
      h3_sub: 'Hebrew (Native) · Russian (Native) · English (Advanced)',
      linkedin: 'LinkedIn Profile ↗',
    },
    contact: {
      label: 'Get in Touch',
      line1: "Let's build",
      line2: 'something.',
      sub: "Have a project in mind? Let's talk.",
      name_ph: 'Your name',
      phone_ph: 'Your phone',
      email_ph: 'Your email (optional)',
      message_ph: 'Tell me about your project...',
      submit: 'Send message →',
      sending: 'Sending...',
      success: "Message sent! I'll get back to you soon.",
      error: 'Something went wrong. Please try again.',
    },
    footer: {
      copy: `© ${new Date().getFullYear()} Roman Besiakov. All rights reserved.`,
    },
  },

  he: {
    nav: {
      services: 'שירותים',
      projects: 'פרויקטים',
      about: 'אודות',
      contact: 'צור קשר ↗',
    },
    hero: {
      tag: 'מפתח פול-סטאק · זמין לפרויקטים',
      line1: 'פיתוח אתרים',
      line2: 'ואפליקציות.',
      sub: 'בניית מוצרים דיגיטליים שמניבים תוצאות,\nמומרים ועומדים במבחן הזמן.',
      cta1: 'התחל פרויקט ←',
      cta2: 'לעבודות שלי ↑',
      stat_num: '+5',
      stat_label: 'שנות ניסיון',
    },
    services: {
      label: 'מה אני בונה',
      title: 'שירותים',
      items: [
        {
          num: '01',
          title: 'פיתוח אתרים',
          desc: 'אתרים מותאמים אישית מעיצובי Figma או מאפס. WordPress, React, Next.js — כל מה שהפרויקט שלך צריך.',
          tags: ['React', 'Next.js', 'WordPress', 'PHP', 'SCSS'],
        },
        {
          num: '02',
          title: 'פיתוח אפליקציות',
          desc: 'אפליקציות מובייל ואינטרנט פול-סטאק. מעיצוב REST API ועד ממשק משתמש מלוטש — בנויות לצמיחה ולפרודקשן.',
          tags: ['React Native', 'Node.js', 'MongoDB', 'REST API'],
        },
        {
          num: '03',
          title: 'SEO וביצועים',
          desc: 'תוצאות אמיתיות: מ-32 ל-95 ב-Google Lighthouse. מומחיות ב-Core Web Vitals, Google Analytics 4 ו-Tag Manager.',
          tags: ['Lighthouse', 'GA4', 'GTM', 'Core Web Vitals'],
        },
      ],
    },
    projects: {
      label: 'עבודות נבחרות',
      title: 'פרויקטים',
      app_type: 'אפליקציית מובייל · Android · Google Play',
      app_title: 'One Second Challenge',
      app_desc: 'משחק מובייל מבוסס רפלקסים שבו השחקן חייב ללחוץ ברגע המדויק. עוצב, פותח ופורסם ב-Google Play Store — מרעיון למוצר חי.',
      app_link: 'צפה ב-Google Play ↗',
    },
    about: {
      label: 'אודות',
      title: 'מפתח\nפול-סטאק',
      text1: 'אני רומן בסיאקוב — מפתח פול-סטאק עם 5+ שנות ניסיון מקצועי בבניית אתרים ואפליקציות ב-production. אני מביא רעיונות ממושג למוצר חי.',
      text2: 'מתמחה בהפיכת עיצובים למוצרים דיגיטליים מהירים ופונקציונליים. מפורטלי חדשות בוורדפרס ועד אפליקציות ב-Google Play — אני בונה דברים שעובדים.',
      h1_title: 'John Bryce',
      h1_sub: 'פיתוח Full-Stack · ציון: 100/100',
      h2_title: '+5 שנות ניסיון',
      h2_sub: 'ניסיון מקצועי בפיתוח',
      h3_title: 'שפות',
      h3_sub: 'עברית (שפת אם) · רוסית (שפת אם) · אנגלית (מתקדם)',
      linkedin: 'פרופיל LinkedIn ↗',
    },
    contact: {
      label: 'צור קשר',
      line1: 'בואו נבנה',
      line2: 'משהו.',
      sub: 'יש לך פרויקט? בואו נדבר.',
      name_ph: 'השם שלך',
      phone_ph: 'הטלפון שלך',
      email_ph: 'האימייל שלך (אופציונלי)',
      message_ph: 'ספר לי על הפרויקט...',
      submit: 'שלח הודעה ←',
      sending: 'שולח...',
      success: 'ההודעה נשלחה! אחזור אליך בקרוב.',
      error: 'משהו השתבש. נסה שנית.',
    },
    footer: {
      copy: `© ${new Date().getFullYear()} Roman Besiakov. כל הזכויות שמורות.`,
    },
  },

  ru: {
    nav: {
      services: 'Услуги',
      projects: 'Проекты',
      about: 'Обо мне',
      contact: 'Связаться ↗',
    },
    hero: {
      tag: 'Full-Stack разработчик · Открыт для проектов',
      line1: 'ВЕБ И АПП',
      line2: 'РАЗРАБОТКА.',
      sub: 'Создаю цифровые продукты, которые работают,\nконвертируют и выдерживают испытание временем.',
      cta1: 'Начать проект →',
      cta2: 'Мои работы ↓',
      stat_num: '5+',
      stat_label: 'Лет опыта',
    },
    services: {
      label: 'Что я делаю',
      title: 'Услуги',
      items: [
        {
          num: '01',
          title: 'Веб-разработка',
          desc: 'Сайты под ключ из макетов Figma или с нуля. WordPress, React, Next.js — всё, что нужно вашему проекту.',
          tags: ['React', 'Next.js', 'WordPress', 'PHP', 'SCSS'],
        },
        {
          num: '02',
          title: 'Разработка приложений',
          desc: 'Полный цикл разработки мобильных и веб-приложений. От REST API до полированного UI — создаю для масштаба и продакшена.',
          tags: ['React Native', 'Node.js', 'MongoDB', 'REST API'],
        },
        {
          num: '03',
          title: 'SEO и производительность',
          desc: 'Реальные результаты: с 32 до 95 в Google Lighthouse. Экспертиза в Core Web Vitals, Google Analytics 4 и Tag Manager.',
          tags: ['Lighthouse', 'GA4', 'GTM', 'Core Web Vitals'],
        },
      ],
    },
    projects: {
      label: 'Избранные работы',
      title: 'Проекты',
      app_type: 'Мобильное приложение · Android · Google Play',
      app_title: 'One Second Challenge',
      app_desc: 'Мобильная игра на реакцию — нужно нажать в точный момент. Спроектировано, разработано и опубликовано в Google Play Store от идеи до живого продукта.',
      app_link: 'Посмотреть в Google Play ↗',
    },
    about: {
      label: 'Обо мне',
      title: 'Full-Stack\nРазработчик',
      text1: 'Я Роман Бесяков — Full-Stack разработчик с 5+ годами профессионального опыта создания сайтов и приложений production-уровня. Воплощаю идеи от концепции до живого продукта.',
      text2: 'Специализируюсь на превращении дизайнов в быстрые и функциональные цифровые продукты. От новостных порталов на WordPress до мобильных приложений в Google Play.',
      h1_title: 'John Bryce',
      h1_sub: 'Веб-разработка Full-Stack · Оценка: 100/100',
      h2_title: '5+ Лет',
      h2_sub: 'Профессионального опыта разработки',
      h3_title: 'Языки',
      h3_sub: 'Иврит (родной) · Русский (родной) · Английский (продвинутый)',
      linkedin: 'Профиль LinkedIn ↗',
    },
    contact: {
      label: 'Связаться',
      line1: 'Давайте создадим',
      line2: 'что-то.',
      sub: 'Есть проект? Давайте поговорим.',
      name_ph: 'Ваше имя',
      phone_ph: 'Ваш телефон',
      email_ph: 'Ваш email (необязательно)',
      message_ph: 'Расскажите о вашем проекте...',
      submit: 'Отправить →',
      sending: 'Отправка...',
      success: 'Сообщение отправлено! Скоро свяжусь с вами.',
      error: 'Что-то пошло не так. Попробуйте ещё раз.',
    },
    footer: {
      copy: `© ${new Date().getFullYear()} Roman Besiakov. Все права защищены.`,
    },
  },

  th: {
    nav: {
      services: 'บริการ',
      projects: 'ผลงาน',
      about: 'เกี่ยวกับ',
      contact: 'ติดต่อ ↗',
    },
    hero: {
      tag: 'นักพัฒนา Full-Stack · พร้อมรับโปรเจกต์ใหม่',
      line1: 'พัฒนาเว็บ',
      line2: 'และแอป.',
      sub: 'สร้างผลิตภัณฑ์ดิจิทัลที่ได้ผลลัพธ์จริง\nและยืนหยัดในการทดสอบของเวลา',
      cta1: 'เริ่มโปรเจกต์ →',
      cta2: 'ดูผลงาน ↓',
      stat_num: '5+',
      stat_label: 'ปีประสบการณ์',
    },
    services: {
      label: 'สิ่งที่ฉันทำ',
      title: 'บริการ',
      items: [
        {
          num: '01',
          title: 'พัฒนาเว็บไซต์',
          desc: 'เว็บไซต์แบบกำหนดเองจากดีไซน์ Figma หรือเริ่มต้นใหม่ WordPress, React, Next.js — ทุกอย่างที่โปรเจกต์ของคุณต้องการ',
          tags: ['React', 'Next.js', 'WordPress', 'PHP', 'SCSS'],
        },
        {
          num: '02',
          title: 'พัฒนาแอปพลิเคชัน',
          desc: 'แอปมือถือและเว็บแบบ Full-Stack ตั้งแต่ REST API ถึง UI ที่สวยงาม สร้างเพื่อรองรับการเติบโตและพร้อม production',
          tags: ['React Native', 'Node.js', 'MongoDB', 'REST API'],
        },
        {
          num: '03',
          title: 'SEO และประสิทธิภาพ',
          desc: 'ผลลัพธ์จริง: จาก 32 เป็น 95 ใน Google Lighthouse ความเชี่ยวชาญใน Core Web Vitals, Google Analytics 4 และ Tag Manager',
          tags: ['Lighthouse', 'GA4', 'GTM', 'Core Web Vitals'],
        },
      ],
    },
    projects: {
      label: 'ผลงานเด่น',
      title: 'ผลงาน',
      app_type: 'แอปมือถือ · Android · Google Play',
      app_title: 'One Second Challenge',
      app_desc: 'เกมมือถือทดสอบปฏิกิริยาตอบสนอง ผู้เล่นต้องแตะหน้าจอในจังหวะที่แม่นยำ ออกแบบ พัฒนา และเผยแพร่บน Google Play Store จากแนวคิดสู่ผลิตภัณฑ์จริง',
      app_link: 'ดูใน Google Play ↗',
    },
    about: {
      label: 'เกี่ยวกับฉัน',
      title: 'นักพัฒนา\nFull-Stack',
      text1: 'ผมคือ Roman Besiakov — นักพัฒนา Full-Stack ที่มีประสบการณ์มืออาชีพกว่า 5+ ปีในการสร้างเว็บไซต์และแอปพลิเคชันระดับ production ผมนำไอเดียจากแนวคิดสู่ผลิตภัณฑ์จริง',
      text2: 'เชี่ยวชาญในการแปลงดีไซน์เป็นผลิตภัณฑ์ดิจิทัลที่รวดเร็วและใช้งานได้จริง ตั้งแต่พอร์ทัลข่าว WordPress จนถึงแอปใน Google Play',
      h1_title: 'John Bryce',
      h1_sub: 'การพัฒนาเว็บ Full-Stack · คะแนน: 100/100',
      h2_title: '5+ ปี',
      h2_sub: 'ประสบการณ์การพัฒนาซอฟต์แวร์มืออาชีพ',
      h3_title: 'ภาษา',
      h3_sub: 'ฮิบรู (เจ้าของภาษา) · รัสเซีย (เจ้าของภาษา) · อังกฤษ (ขั้นสูง)',
      linkedin: 'โปรไฟล์ LinkedIn ↗',
    },
    contact: {
      label: 'ติดต่อฉัน',
      line1: 'มาสร้าง',
      line2: 'บางอย่าง.',
      sub: 'มีโปรเจกต์ในใจ? มาคุยกันเลย',
      name_ph: 'ชื่อของคุณ',
      phone_ph: 'เบอร์โทรศัพท์',
      email_ph: 'อีเมล (ไม่บังคับ)',
      message_ph: 'เล่าให้ฟังเกี่ยวกับโปรเจกต์ของคุณ...',
      submit: 'ส่งข้อความ →',
      sending: 'กำลังส่ง...',
      success: 'ส่งข้อความสำเร็จ! จะติดต่อกลับเร็วๆ นี้',
      error: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง',
    },
    footer: {
      copy: `© ${new Date().getFullYear()} Roman Besiakov. สงวนลิขสิทธิ์`,
    },
  },
} as const

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo({ size = 38 }: { size?: number }) {
  return (
    <div className="logo-mark" style={{ width: size, height: size }}>
      <span>RB</span>
    </div>
  )
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav({ lang, onChangeLang }: { lang: Lang; onChangeLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const t = T[lang].nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-brand">
          <Logo />
          <span className="nav-brand-text">RBapp</span>
        </a>
        <div className="nav-links">
          <a href="#services">{t.services}</a>
          <a href="#projects">{t.projects}</a>
          <a href="#about">{t.about}</a>
          <select
            className="lang-select"
            value={lang}
            onChange={(e) => onChangeLang(e.target.value as Lang)}
            aria-label="Select language"
          >
            <option value="he">HE</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="th">TH</option>
          </select>
          <a href="#contact" className="nav-cta">{t.contact}</a>
        </div>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ lang }: { lang: Lang }) {
  const t = T[lang].hero
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-tag">
          <span className="dot-live" />
          <span>{t.tag}</span>
        </div>
        <div className="hero-headline">
          <h1>
            <span className="hero-line">{t.line1}</span>
            <span className="hero-line">
              {t.line2.endsWith('.')
                ? <>{t.line2.slice(0, -1)}<span className="accent">.</span></>
                : t.line2}
            </span>
          </h1>
        </div>
        <p className="hero-sub">
          {t.sub.split('\n').map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">{t.cta1}</a>
          <a href="#projects" className="btn-ghost">{t.cta2}</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">{t.stat_num}</span>
            <span className="stat-label">{t.stat_label}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services({ lang }: { lang: Lang }) {
  const t = T[lang].services
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
        </div>
        <div className="services-grid">
          {t.items.map((s, i) => (
            <div key={s.num} className={`service-card reveal reveal-delay-${i + 1}`}>
              <span className="service-num">{s.num}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.547c.536.31.802.83.802 1.34 0 .51-.268 1.02-.804 1.33l-2.19 1.266-2.513-2.513 2.513-2.513 2.192 1.09zM5.864 2.658L16.8 9.149l-2.302 2.302-8.635-8.793z" />
    </svg>
  )
}

function Projects({ lang }: { lang: Lang }) {
  const t = T[lang].projects
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
        </div>
        <div className="projects-grid reveal reveal-delay-1">
          <article className="project-card project-card--featured">
            <div className="project-phone" aria-hidden="true">
              <div className="phone-screen">
                <div className="phone-app-icon"><span>1s</span></div>
                <span className="phone-app-name">One Second Challenge</span>
              </div>
            </div>
            <div className="project-info">
              <span className="project-type">{t.app_type}</span>
              <h3 className="project-title">{t.app_title}</h3>
              <p className="project-desc">{t.app_desc}</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.romanb123.onesecondchallenge"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <GooglePlayIcon />
                {t.app_link}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

// ─── Tech Stack ───────────────────────────────────────────────────────────────
const TECHS = [
  'React', 'Next.js', 'Node.js', 'PHP', 'WordPress',
  'MySQL', 'MongoDB', 'AWS', 'Git', 'SCSS',
  'jQuery', 'Angular', 'TypeScript', 'REST API',
  'Linux', 'Laravel', 'Figma', 'Google Analytics',
]

function TechStack() {
  const doubled = [...TECHS, ...TECHS]
  return (
    <section className="techstack" aria-label="Technologies">
      <div className="marquee-wrapper">
        <div className="marquee-track" aria-hidden="true">
          {doubled.map((t, i) => (
            <span key={i} className="marquee-item">
              {t}<span className="marquee-dot">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About({ lang }: { lang: Lang }) {
  const t = T[lang].about
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left reveal">
            <span className="section-label">{t.label}</span>
            <h2 className="section-title">
              {t.title.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h2>
          </div>
          <div className="about-right reveal reveal-delay-1">
            <p className="about-text">{t.text1}</p>
            <p className="about-text">{t.text2}</p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon">🎓</span>
                <div>
                  <strong>{t.h1_title}</strong>
                  <span>{t.h1_sub}</span>
                </div>
              </div>
              <div className="highlight">
                <span className="highlight-icon">💼</span>
                <div>
                  <strong>{t.h2_title}</strong>
                  <span>{t.h2_sub}</span>
                </div>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🌐</span>
                <div>
                  <strong>{t.h3_title}</strong>
                  <span>{t.h3_sub}</span>
                </div>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/roman-bessiakov54321/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              {t.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

function Contact({ lang }: { lang: Lang }) {
  const t = T[lang].contact
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <span className="section-label">{t.label}</span>
        <h2 className="contact-headline reveal">
          {t.line1}<br />
          {t.line2.endsWith('.')
            ? <>{t.line2.slice(0, -1)}<span className="accent">.</span></>
            : t.line2}
        </h2>
        <p className="contact-sub reveal">{t.sub}</p>

        {status === 'sent' ? (
          <div className="form-success reveal">
            <span className="form-success-icon">✓</span>
            <span>{t.success}</span>
          </div>
        ) : (
          <form className="contact-form reveal reveal-delay-1" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder={t.name_ph}
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder={t.phone_ph}
                  value={form.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  dir="auto"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder={t.email_ph}
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-textarea"
                placeholder={t.message_ph}
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            {status === 'error' && <p className="form-error">{t.error}</p>}
            <button
              type="submit"
              className="btn-primary form-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? t.sending : t.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Logo size={32} />
            <span>RBapp</span>
          </div>
          <span className="footer-copy">{T[lang].footer.copy}</span>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('revealed')
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [lang])

  return (
    <>
      <Nav lang={lang} onChangeLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <Projects lang={lang} />
        <TechStack />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}
