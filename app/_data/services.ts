export type Lang = 'he' | 'en' | 'ru' | 'th'
export type ServiceSlug = 'web-development' | 'app-development' | 'seo' | 'google-ads' | 'ai-agents'

export interface ServiceInclude {
  icon: string
  title: string
  desc: string
}

export interface ServiceStep {
  num: string
  title: string
  desc: string
}

export interface ServiceProject {
  title: string
  url: string
  tag: string
}

export interface ServiceFaq {
  q: string
  a: string
}

export interface ServiceLangData {
  title: string
  tagline: string
  desc: string
  includes: ServiceInclude[]
  tech: string[]
  process: ServiceStep[]
  projects: ServiceProject[]
  faq: ServiceFaq[]
  cta_title: string
  cta_sub: string
}

export interface Service {
  slug: ServiceSlug
  num: string
  icon: string
  langs: Record<Lang, ServiceLangData>
}

export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    num: '01',
    icon: '🌐',
    langs: {
      he: {
        title: 'בניית אתרים',
        tagline: 'אתרים שבונים עסקים.',
        desc: 'בונה אתרים מותאמים אישית שנראים מקצועיים, נטענים מהר ומביאים לקוחות. מעיצוב Figma ועד פרודקשן חי — כל תהליך הפיתוח תחת קורת גג אחת.',
        includes: [
          { icon: '🎨', title: 'עיצוב → קוד', desc: 'ממירים פיגמה, אינדיזיין או כל מקאפ לאתר חי ופעיל עם פיקסל-פרפקט מדויק.' },
          { icon: '📱', title: 'ריספונסיב מלא', desc: 'האתר נראה מושלם בכל מסך — מובייל, טאבלט ודסקטופ — ללא פשרות.' },
          { icon: '⚡', title: 'ביצועים 90+', desc: 'ציון Lighthouse של 90 ומעלה. טעינה מהירה = יותר לקוחות שנשארים.' },
          { icon: '🔍', title: 'SEO מובנה', desc: 'מבנה סמנטי נכון, מטא-תגיות, sitemap ו-schema markup מהיום הראשון.' },
          { icon: '📝', title: 'מערכת ניהול תוכן', desc: 'WordPress, Sanity או CMS מותאם — תוכלו לעדכן תוכן בעצמכם בקלות.' },
          { icon: '🔒', title: 'אבטחה וגיבוי', desc: 'SSL, הגנה מפני פרצות, גיבויים אוטומטיים ועדכונים שוטפים.' },
        ],
        tech: ['React', 'Next.js', 'WordPress', 'PHP', 'TypeScript', 'SCSS', 'Cloudflare'],
        process: [
          { num: '01', title: 'פגישת גילוי', desc: 'מבינים את הצרכים, המטרות והתקציב. שואל את השאלות הנכונות כדי שלא יהיו הפתעות בדרך.' },
          { num: '02', title: 'עיצוב ואב-טיפוס', desc: 'פרוטוטייפ HTML כדי שתוכלו לראות ולחוש את האתר לפני שנכתבת שורת קוד אחת.' },
          { num: '03', title: 'פיתוח', desc: 'קוד נקי, בנייה איטרטיבית ועדכונים שוטפים. ניתן לסקור ולשנות כיוון בכל שלב.' },
          { num: '04', title: 'השקה', desc: 'פריסה לפרודקשן, בדיקות ביצועים והעברה מלאה — הכל מוכן לאוויר.' },
        ],
        projects: [
          { title: 'Knockout GYM', url: 'https://knockoutgym.co.il', tag: 'Next.js · חדר כושר' },
          { title: 'SAHARA', url: 'https://sahara-il.co.il', tag: 'WooCommerce · יופי וטיפוח' },
          { title: 'Sofia Terapia', url: 'https://sofia-terapia.com', tag: 'Next.js · קליניקה' },
          { title: 'Maslul Nadir', url: 'https://maslul-nadir.co.il', tag: 'Next.js · תיירות' },
        ],
        faq: [
          { q: 'כמה זמן לוקח לבנות אתר?', a: 'אתר תדמית פשוט — 2-3 שבועות. אתר מורכב עם CMS ואינטגרציות — 4-8 שבועות. נקבע לוח זמנים מדויק בתחילת הפרויקט.' },
          { q: 'האם אוכל לעדכן את האתר בעצמי?', a: 'כן. כל אתר מגיע עם CMS נוח ו-30 דקות הדרכה. תוכלו להוסיף פוסטים, לשנות תמונות ולעדכן מחירים ללא צורך בעזרה טכנית.' },
          { q: 'מה כלול במחיר?', a: 'עיצוב, פיתוח, SEO בסיסי, אופטימיזציית ביצועים, פריסה ו-30 יום תמיכה לאחר ההשקה. אחסון ודומיין הם עלות נפרדת.' },
          { q: 'האם אתם גם מנהלים אתרים קיימים?', a: 'כן, מציע חבילות תחזוקה חודשיות שכוללות עדכונים, גיבויים, אבטחה ושינויים קטנים.' },
        ],
        cta_title: 'מוכנים לאתר שעובד בשבילכם?',
        cta_sub: 'בואו נדבר על הפרויקט שלכם. ייעוץ ראשוני ללא עלות.',
      },
      en: {
        title: 'Web Development',
        tagline: 'Websites that build businesses.',
        desc: 'Custom websites that look professional, load fast and bring customers. From Figma design to live production — the entire development process under one roof.',
        includes: [
          { icon: '🎨', title: 'Design → Code', desc: 'Converting Figma, InDesign, or any mockup into a live pixel-perfect website.' },
          { icon: '📱', title: 'Fully Responsive', desc: 'Your site looks perfect on every screen — mobile, tablet and desktop — no compromises.' },
          { icon: '⚡', title: 'Performance 90+', desc: 'Lighthouse score of 90+. Fast loading means more customers who stay.' },
          { icon: '🔍', title: 'SEO-ready', desc: 'Semantic structure, meta tags, sitemap, and schema markup from day one.' },
          { icon: '📝', title: 'CMS Integration', desc: 'WordPress, Sanity, or a custom CMS — update your content yourself, easily.' },
          { icon: '🔒', title: 'Security & Backups', desc: 'SSL, vulnerability protection, automatic backups, and ongoing updates.' },
        ],
        tech: ['React', 'Next.js', 'WordPress', 'PHP', 'TypeScript', 'SCSS', 'Cloudflare'],
        process: [
          { num: '01', title: 'Discovery', desc: 'We define scope, goals, and budget. I ask the right questions so nothing surprises us later.' },
          { num: '02', title: 'Design & Prototype', desc: 'An HTML prototype so you can see and feel the site before a single line of production code is written.' },
          { num: '03', title: 'Development', desc: 'Clean code, iterative builds, regular updates. You can review and redirect at every step.' },
          { num: '04', title: 'Launch', desc: 'Production deployment, performance testing, and a full handoff — everything ready to go live.' },
        ],
        projects: [
          { title: 'Knockout GYM', url: 'https://knockoutgym.co.il', tag: 'Next.js · Muay Thai Gym' },
          { title: 'SAHARA', url: 'https://sahara-il.co.il', tag: 'WooCommerce · Beauty & Care' },
          { title: 'Sofia Terapia', url: 'https://sofia-terapia.com', tag: 'Next.js · Therapy Clinic' },
          { title: 'Maslul Nadir', url: 'https://maslul-nadir.co.il', tag: 'Next.js · Travel Agency' },
        ],
        faq: [
          { q: 'How long does it take to build a website?', a: 'A simple brochure site takes 2-3 weeks. A complex site with CMS and integrations takes 4-8 weeks. We set an exact timeline at the start of the project.' },
          { q: 'Can I update the website myself?', a: 'Yes. Every site comes with a user-friendly CMS and 30 minutes of training. You can add posts, change images, and update prices without technical help.' },
          { q: 'What is included in the price?', a: 'Design, development, basic SEO, performance optimization, deployment, and 30 days post-launch support. Hosting and domain are a separate cost.' },
          { q: 'Do you also manage existing websites?', a: 'Yes, I offer monthly maintenance packages including updates, backups, security monitoring, and minor changes.' },
        ],
        cta_title: 'Ready for a website that works for you?',
        cta_sub: "Let's talk about your project. First consultation is free.",
      },
      ru: {
        title: 'Веб-разработка',
        tagline: 'Сайты, которые строят бизнес.',
        desc: 'Сайты под ключ — профессиональный вид, быстрая загрузка и реальные клиенты. От макета Figma до боевого продакшена — весь цикл разработки в одних руках.',
        includes: [
          { icon: '🎨', title: 'Дизайн → Код', desc: 'Конвертируем Figma, InDesign или любой макет в живой сайт с точностью до пикселя.' },
          { icon: '📱', title: 'Полная адаптивность', desc: 'Сайт отлично выглядит на любом экране — мобильный, планшет, десктоп — без компромиссов.' },
          { icon: '⚡', title: 'Производительность 90+', desc: 'Lighthouse 90+. Быстрая загрузка = больше клиентов, которые остаются.' },
          { icon: '🔍', title: 'SEO с первого дня', desc: 'Семантическая структура, мета-теги, sitemap и schema markup с самого начала.' },
          { icon: '📝', title: 'CMS под ключ', desc: 'WordPress, Sanity или кастомная CMS — обновляйте контент самостоятельно.' },
          { icon: '🔒', title: 'Безопасность и бэкапы', desc: 'SSL, защита от уязвимостей, автоматические резервные копии и регулярные обновления.' },
        ],
        tech: ['React', 'Next.js', 'WordPress', 'PHP', 'TypeScript', 'SCSS', 'Cloudflare'],
        process: [
          { num: '01', title: 'Знакомство', desc: 'Обсуждаем цели, объём и бюджет. Правильные вопросы в начале — отсутствие сюрпризов в конце.' },
          { num: '02', title: 'Дизайн и прототип', desc: 'HTML-прототип, чтобы вы увидели и почувствовали сайт до написания продакшен-кода.' },
          { num: '03', title: 'Разработка', desc: 'Чистый код, итеративная сборка, регулярные обновления. Вы можете корректировать на каждом этапе.' },
          { num: '04', title: 'Запуск', desc: 'Деплой на продакшен, тестирование производительности и полная передача — всё готово к запуску.' },
        ],
        projects: [
          { title: 'Knockout GYM', url: 'https://knockoutgym.co.il', tag: 'Next.js · Зал Муай Тай' },
          { title: 'SAHARA', url: 'https://sahara-il.co.il', tag: 'WooCommerce · Красота и уход' },
          { title: 'Sofia Terapia', url: 'https://sofia-terapia.com', tag: 'Next.js · Терапевтическая клиника' },
          { title: 'Maslul Nadir', url: 'https://maslul-nadir.co.il', tag: 'Next.js · Туристическое агентство' },
        ],
        faq: [
          { q: 'Сколько времени занимает разработка сайта?', a: 'Простой сайт-визитка — 2-3 недели. Сложный сайт с CMS и интеграциями — 4-8 недель. Точные сроки фиксируем в начале проекта.' },
          { q: 'Смогу ли я обновлять сайт самостоятельно?', a: 'Да. Каждый сайт поставляется с удобной CMS и 30-минутным обучением. Добавляйте посты, меняйте фото и обновляйте цены без технической помощи.' },
          { q: 'Что входит в стоимость?', a: 'Дизайн, разработка, базовое SEO, оптимизация производительности, деплой и 30 дней поддержки после запуска. Хостинг и домен — отдельная статья расходов.' },
          { q: 'Вы также обслуживаете существующие сайты?', a: 'Да, предлагаю ежемесячные пакеты технического обслуживания: обновления, бэкапы, мониторинг безопасности и небольшие правки.' },
        ],
        cta_title: 'Готовы к сайту, который работает на вас?',
        cta_sub: 'Расскажите о своём проекте. Первая консультация бесплатно.',
      },
      th: {
        title: 'พัฒนาเว็บไซต์',
        tagline: 'เว็บไซต์ที่สร้างธุรกิจ.',
        desc: 'เว็บไซต์แบบกำหนดเองที่ดูเป็นมืออาชีพ โหลดเร็ว และดึงลูกค้า จากดีไซน์ Figma สู่ production จริง ครบวงจรในที่เดียว',
        includes: [
          { icon: '🎨', title: 'ดีไซน์ → โค้ด', desc: 'แปลง Figma, InDesign หรือ mockup ใดๆ เป็นเว็บไซต์จริงที่ pixel-perfect' },
          { icon: '📱', title: 'รองรับทุกหน้าจอ', desc: 'เว็บไซต์ดูสวยงามบนทุกอุปกรณ์ — มือถือ แท็บเล็ต และเดสก์ท็อป' },
          { icon: '⚡', title: 'ประสิทธิภาพ 90+', desc: 'คะแนน Lighthouse 90+ โหลดเร็ว = ลูกค้าอยู่นานขึ้น' },
          { icon: '🔍', title: 'พร้อม SEO', desc: 'โครงสร้าง semantic ที่ถูกต้อง meta tags, sitemap และ schema markup ตั้งแต่วันแรก' },
          { icon: '📝', title: 'ระบบจัดการเนื้อหา', desc: 'WordPress, Sanity หรือ CMS แบบกำหนดเอง อัปเดตเนื้อหาเองได้ง่ายๆ' },
          { icon: '🔒', title: 'ความปลอดภัยและ Backup', desc: 'SSL ป้องกันช่องโหว่ สำรองข้อมูลอัตโนมัติ และอัปเดตสม่ำเสมอ' },
        ],
        tech: ['React', 'Next.js', 'WordPress', 'PHP', 'TypeScript', 'SCSS', 'Cloudflare'],
        process: [
          { num: '01', title: 'ค้นหาความต้องการ', desc: 'เราพูดคุยเรื่องเป้าหมาย ขอบเขต และงบประมาณ ถามคำถามที่ถูกต้องตั้งแต่ต้น' },
          { num: '02', title: 'ออกแบบและต้นแบบ', desc: 'สร้าง HTML prototype เพื่อให้คุณเห็นและสัมผัสเว็บไซต์ก่อนเริ่มเขียนโค้ดจริง' },
          { num: '03', title: 'พัฒนา', desc: 'โค้ดที่สะอาด พัฒนาแบบ iterative และอัปเดตสม่ำเสมอ คุณสามารถแก้ไขทิศทางได้ตลอด' },
          { num: '04', title: 'เปิดตัว', desc: 'deploy สู่ production ทดสอบประสิทธิภาพ และส่งมอบครบถ้วน พร้อม go live' },
        ],
        projects: [
          { title: 'Knockout GYM', url: 'https://knockoutgym.co.il', tag: 'Next.js · ยิมมวยไทย' },
          { title: 'SAHARA', url: 'https://sahara-il.co.il', tag: 'WooCommerce · ความงาม' },
          { title: 'Sofia Terapia', url: 'https://sofia-terapia.com', tag: 'Next.js · คลินิกบำบัด' },
          { title: 'Maslul Nadir', url: 'https://maslul-nadir.co.il', tag: 'Next.js · ท่องเที่ยว' },
        ],
        faq: [
          { q: 'ใช้เวลานานแค่ไหนในการสร้างเว็บไซต์?', a: 'เว็บไซต์ทั่วไปใช้เวลา 2-3 สัปดาห์ เว็บซับซ้อนที่มี CMS และการเชื่อมต่อระบบใช้เวลา 4-8 สัปดาห์ กำหนดไทม์ไลน์ชัดเจนตั้งแต่ต้นโปรเจกต์' },
          { q: 'ฉันอัปเดตเว็บไซต์เองได้ไหม?', a: 'ได้ ทุกเว็บไซต์มาพร้อม CMS ที่ใช้งานง่ายและการฝึกอบรม 30 นาที คุณสามารถเพิ่มบทความ เปลี่ยนรูปภาพ และอัปเดตราคาได้เองโดยไม่ต้องพึ่งพาผู้เชี่ยวชาญ' },
          { q: 'ราคารวมอะไรบ้าง?', a: 'ออกแบบ พัฒนา SEO เบื้องต้น ปรับปรุงประสิทธิภาพ deploy และสนับสนุน 30 วันหลังเปิดตัว ค่า hosting และ domain คำนวณแยกต่างหาก' },
          { q: 'รับดูแลเว็บไซต์ที่มีอยู่แล้วด้วยไหม?', a: 'ใช่ มีแพ็คเกจบำรุงรักษารายเดือน รวมถึงอัปเดต backup ตรวจสอบความปลอดภัย และแก้ไขเล็กน้อย' },
        ],
        cta_title: 'พร้อมสำหรับเว็บไซต์ที่ทำงานเพื่อคุณ?',
        cta_sub: 'มาพูดคุยเรื่องโปรเจกต์ของคุณ ปรึกษาครั้งแรกฟรี',
      },
    },
  },
  {
    slug: 'app-development',
    num: '02',
    icon: '📱',
    langs: {
      he: {
        title: 'בניית אפליקציות',
        tagline: 'אפליקציות שמשתמשים אוהבים.',
        desc: 'אפליקציות מובייל וווב full-stack שנבנות לביצועים ומגיעות לפרודקשן. מתכנון ה-API ועד ממשק המשתמש המלוטש — הכל תחת קורת גג אחת.',
        includes: [
          { icon: '📲', title: 'iOS ו-Android', desc: 'אפליקציה אחת עובדת בשני הפלטפורמות עם React Native — פחות עלות, יותר טווח הגעה.' },
          { icon: '🔗', title: 'עיצוב REST API', desc: 'ארכיטקטורת API נקייה, מתועדת ומאובטחת שמתאימה לכל צורך.' },
          { icon: '🔐', title: 'Auth והתראות Push', desc: 'אימות מאובטח, login חברתי והתראות פוש — כל מה שמשתמשים מצפים לו.' },
          { icon: '📤', title: 'הגשה לחנויות', desc: 'מדריך ומטפל בתהליך ההגשה ל-Google Play ו-App Store.' },
          { icon: '📊', title: 'לוח בקרה לניהול', desc: 'פאנל אדמין שבו אפשר לנהל משתמשים, תוכן ונתונים בקלות.' },
          { icon: '🔄', title: 'עדכונים שוטפים', desc: 'פיתוח אג\'ילי עם עדכונים תכופים ותמיכה לאחר ההשקה.' },
        ],
        tech: ['React Native', 'Node.js', 'MongoDB', 'Express', 'REST API', 'Firebase'],
        process: [
          { num: '01', title: 'הגדרת דרישות', desc: 'ממפים את הפיצ\'רים, ה-user flows ודרישות הטכניות לפני שמתחילים.' },
          { num: '02', title: 'עיצוב ו-UX', desc: 'מסכים ו-user flows ב-Figma — לראות ולאשר לפני שמתחילים לקודד.' },
          { num: '03', title: 'פיתוח ובדיקות', desc: 'פיתוח ספרינטים, בדיקות על מכשירים אמיתיים ו-CI/CD pipeline.' },
          { num: '04', title: 'פרסום ותמיכה', desc: 'הגשה לחנויות, ניטור קראשים ותמיכה לאחר ההשקה.' },
        ],
        projects: [
          { title: 'One Second Challenge', url: 'https://play.google.com/store/apps/details?id=com.onesecondchallenge', tag: 'React Native · משחק רפלקסים' },
          { title: 'Mouse Maze', url: 'https://play.google.com/store/apps/details?id=com.mousemaze', tag: 'React Native · משחק פאזל' },
        ],
        faq: [
          { q: 'כמה עולה לפתח אפליקציה?', a: 'אפליקציה פשוטה מתחילה מ-15,000 ₪. פרויקטים מורכבים יותר עם API, בסיס נתונים וממשק אדמין עולים יותר. נקבע יחד לאחר הגדרת הדרישות.' },
          { q: 'כמה זמן לוקח לפתח אפליקציה?', a: 'MVP בסיסי — 6-10 שבועות. אפליקציה מלאה עם כל הפיצ\'רים — 3-5 חודשים. תלוי בגודל ומורכבות הפרויקט.' },
          { q: 'האם האפליקציה עובדת גם ב-iPhone וגם ב-Android?', a: 'כן. עם React Native בונים פעם אחת ופורסים לשני הפלטפורמות — חוסכת זמן ועלויות.' },
          { q: 'מה קורה אחרי ההשקה?', a: 'מציע חבילות תמיכה שכוללות תיקוני באגים, עדכונים לגרסאות חדשות של iOS/Android ופיתוח פיצ\'רים נוספים.' },
        ],
        cta_title: 'יש לכם רעיון לאפליקציה?',
        cta_sub: 'בואו נהפוך אותו למוצר אמיתי. נשמח לשמוע.',
      },
      en: {
        title: 'App Development',
        tagline: 'Apps users actually love.',
        desc: 'Full-stack mobile and web applications built for performance and shipped to production. From REST API design to polished UI — everything under one roof.',
        includes: [
          { icon: '📲', title: 'Cross-platform iOS & Android', desc: 'One app works on both platforms with React Native — lower cost, wider reach.' },
          { icon: '🔗', title: 'REST API Design', desc: 'Clean, documented, and secure API architecture that fits any need.' },
          { icon: '🔐', title: 'Auth & Push Notifications', desc: 'Secure authentication, social login, and push notifications — everything users expect.' },
          { icon: '📤', title: 'App Store Submission', desc: 'I guide and handle the submission process for Google Play and App Store.' },
          { icon: '📊', title: 'Admin Dashboard', desc: 'An admin panel to easily manage users, content, and data.' },
          { icon: '🔄', title: 'Ongoing Updates', desc: 'Agile development with frequent updates and post-launch support.' },
        ],
        tech: ['React Native', 'Node.js', 'MongoDB', 'Express', 'REST API', 'Firebase'],
        process: [
          { num: '01', title: 'Requirements', desc: 'We map features, user flows, and technical requirements before starting.' },
          { num: '02', title: 'Design & UX', desc: 'Screens and user flows in Figma — see and approve before we start coding.' },
          { num: '03', title: 'Development & Testing', desc: 'Sprint development, testing on real devices, and a CI/CD pipeline.' },
          { num: '04', title: 'Publish & Support', desc: 'Store submission, crash monitoring, and post-launch support.' },
        ],
        projects: [
          { title: 'One Second Challenge', url: 'https://play.google.com/store/apps/details?id=com.onesecondchallenge', tag: 'React Native · Reflex Game' },
          { title: 'Mouse Maze', url: 'https://play.google.com/store/apps/details?id=com.mousemaze', tag: 'React Native · Puzzle Game' },
        ],
        faq: [
          { q: 'How much does it cost to develop an app?', a: 'A simple app starts from $4,000. More complex projects with API, database, and admin panel cost more. We set a price together after defining requirements.' },
          { q: 'How long does it take to develop an app?', a: 'A basic MVP takes 6-10 weeks. A full-featured app takes 3-5 months. Depends on project size and complexity.' },
          { q: 'Does the app work on both iPhone and Android?', a: 'Yes. With React Native, we build once and deploy to both platforms — saving time and cost.' },
          { q: 'What happens after launch?', a: 'I offer support packages including bug fixes, updates for new iOS/Android versions, and new feature development.' },
        ],
        cta_title: 'Have an app idea?',
        cta_sub: "Let's turn it into a real product. I'd love to hear about it.",
      },
      ru: {
        title: 'Разработка приложений',
        tagline: 'Приложения, которые любят пользователи.',
        desc: 'Full-stack мобильные и веб-приложения, созданные для производительности и выпущенные в продакшен. От проектирования REST API до отполированного UI — всё в одних руках.',
        includes: [
          { icon: '📲', title: 'iOS и Android', desc: 'Одно приложение работает на обеих платформах с React Native — ниже стоимость, шире охват.' },
          { icon: '🔗', title: 'Проектирование REST API', desc: 'Чистая, документированная и безопасная архитектура API под любые нужды.' },
          { icon: '🔐', title: 'Авторизация и push-уведомления', desc: 'Безопасная аутентификация, социальный вход и push-уведомления — всё, что ожидают пользователи.' },
          { icon: '📤', title: 'Публикация в магазины', desc: 'Сопровождение и подготовка процесса публикации в Google Play и App Store.' },
          { icon: '📊', title: 'Панель администратора', desc: 'Удобная админ-панель для управления пользователями, контентом и данными.' },
          { icon: '🔄', title: 'Регулярные обновления', desc: 'Agile-разработка с частыми обновлениями и поддержкой после запуска.' },
        ],
        tech: ['React Native', 'Node.js', 'MongoDB', 'Express', 'REST API', 'Firebase'],
        process: [
          { num: '01', title: 'Требования', desc: 'Составляем список фич, пользовательских сценариев и технических требований до начала работ.' },
          { num: '02', title: 'Дизайн и UX', desc: 'Экраны и пользовательские сценарии в Figma — смотрите и утверждайте до старта разработки.' },
          { num: '03', title: 'Разработка и тестирование', desc: 'Спринты, тестирование на реальных устройствах и CI/CD pipeline.' },
          { num: '04', title: 'Публикация и поддержка', desc: 'Публикация в магазины, мониторинг крашей и поддержка после запуска.' },
        ],
        projects: [
          { title: 'One Second Challenge', url: 'https://play.google.com/store/apps/details?id=com.onesecondchallenge', tag: 'React Native · Игра на реакцию' },
          { title: 'Mouse Maze', url: 'https://play.google.com/store/apps/details?id=com.mousemaze', tag: 'React Native · Головоломка' },
        ],
        faq: [
          { q: 'Сколько стоит разработка приложения?', a: 'Простое приложение — от $4000. Более сложные проекты с API, базой данных и панелью администратора стоят дороже. Цену определяем вместе после формулировки требований.' },
          { q: 'Сколько времени занимает разработка?', a: 'Базовый MVP — 6-10 недель. Полнофункциональное приложение — 3-5 месяцев. Зависит от размера и сложности проекта.' },
          { q: 'Приложение работает и на iPhone, и на Android?', a: 'Да. С React Native разрабатываем один раз и публикуем на обеих платформах — экономия времени и затрат.' },
          { q: 'Что происходит после запуска?', a: 'Предлагаю пакеты поддержки: исправление багов, обновления под новые версии iOS/Android и разработка новых функций.' },
        ],
        cta_title: 'Есть идея для приложения?',
        cta_sub: 'Давайте превратим её в реальный продукт. Расскажите мне.',
      },
      th: {
        title: 'พัฒนาแอปพลิเคชัน',
        tagline: 'แอปที่ผู้ใช้ชื่นชอบจริงๆ',
        desc: 'แอปพลิเคชันมือถือและเว็บ full-stack ที่สร้างขึ้นเพื่อประสิทธิภาพและนำสู่ production จากการออกแบบ REST API ถึง UI ที่ขัดเกลาแล้ว ครบในที่เดียว',
        includes: [
          { icon: '📲', title: 'iOS และ Android', desc: 'แอปเดียวทำงานบนทั้งสองแพลตฟอร์มด้วย React Native ประหยัดค่าใช้จ่าย เข้าถึงได้กว้างขึ้น' },
          { icon: '🔗', title: 'ออกแบบ REST API', desc: 'สถาปัตยกรรม API ที่สะอาด มีเอกสาร และปลอดภัย เหมาะกับทุกความต้องการ' },
          { icon: '🔐', title: 'Auth และ Push Notifications', desc: 'การยืนยันตัวตนที่ปลอดภัย social login และ push notifications ทุกอย่างที่ผู้ใช้คาดหวัง' },
          { icon: '📤', title: 'ส่งขึ้น App Store', desc: 'แนะนำและดูแลกระบวนการส่งขึ้น Google Play และ App Store' },
          { icon: '📊', title: 'แดชบอร์ดผู้ดูแล', desc: 'แผงควบคุมสำหรับจัดการผู้ใช้ เนื้อหา และข้อมูลได้ง่ายๆ' },
          { icon: '🔄', title: 'อัปเดตต่อเนื่อง', desc: 'พัฒนาแบบ agile อัปเดตบ่อยครั้ง และสนับสนุนหลังเปิดตัว' },
        ],
        tech: ['React Native', 'Node.js', 'MongoDB', 'Express', 'REST API', 'Firebase'],
        process: [
          { num: '01', title: 'กำหนดความต้องการ', desc: 'วางแผน features, user flows และข้อกำหนดทางเทคนิคก่อนเริ่มต้น' },
          { num: '02', title: 'ออกแบบและ UX', desc: 'หน้าจอและ user flows ใน Figma ดูและอนุมัติก่อนเริ่มเขียนโค้ด' },
          { num: '03', title: 'พัฒนาและทดสอบ', desc: 'พัฒนาแบบ sprint ทดสอบบนอุปกรณ์จริง และ CI/CD pipeline' },
          { num: '04', title: 'เผยแพร่และสนับสนุน', desc: 'ส่งขึ้น store ตรวจสอบ crash และสนับสนุนหลังเปิดตัว' },
        ],
        projects: [
          { title: 'One Second Challenge', url: 'https://play.google.com/store/apps/details?id=com.onesecondchallenge', tag: 'React Native · เกมรีเฟล็กซ์' },
          { title: 'Mouse Maze', url: 'https://play.google.com/store/apps/details?id=com.mousemaze', tag: 'React Native · เกมปริศนา' },
        ],
        faq: [
          { q: 'ค่าใช้จ่ายในการพัฒนาแอปเท่าไหร่?', a: 'แอปง่ายๆ เริ่มต้นที่ $4,000 โปรเจกต์ซับซ้อนที่มี API ฐานข้อมูล และแผงผู้ดูแลจะมีค่าใช้จ่ายมากขึ้น กำหนดราคาร่วมกันหลังจากระบุความต้องการ' },
          { q: 'ใช้เวลานานแค่ไหนในการพัฒนาแอป?', a: 'MVP พื้นฐานใช้เวลา 6-10 สัปดาห์ แอปที่มีฟีเจอร์ครบครันใช้เวลา 3-5 เดือน ขึ้นอยู่กับขนาดและความซับซ้อนของโปรเจกต์' },
          { q: 'แอปทำงานบนทั้ง iPhone และ Android ไหม?', a: 'ใช่ ด้วย React Native พัฒนาครั้งเดียวและ deploy บนทั้งสองแพลตฟอร์ม ประหยัดเวลาและค่าใช้จ่าย' },
          { q: 'หลังเปิดตัวแล้วเป็นอย่างไร?', a: 'มีแพ็คเกจสนับสนุนรวมถึงแก้ไขบัก อัปเดตสำหรับ iOS/Android เวอร์ชันใหม่ และพัฒนา feature ใหม่' },
        ],
        cta_title: 'มีไอเดียสำหรับแอป?',
        cta_sub: 'มาแปลงไอเดียเป็นผลิตภัณฑ์จริง ยินดีรับฟัง',
      },
    },
  },
  {
    slug: 'seo',
    num: '03',
    icon: '🔍',
    langs: {
      he: {
        title: 'SEO וביצועים',
        tagline: 'מהירות שמייצרת מכירות.',
        desc: 'אופטימיזציה טכנית ו-SEO שמביאים תוצאות מדידות — מ-32 ל-95 ב-Lighthouse, יותר ביקורים אורגניים ויותר המרות. נתוחי נתונים, לא ניחושים.',
        includes: [
          { icon: '🔦', title: 'ביקורת Lighthouse', desc: 'ניתוח מעמיק של ביצועים, נגישות, SEO ו-Best Practices עם דוח ממצאים מפורט.' },
          { icon: '📊', title: 'Core Web Vitals', desc: 'שיפור LCP, CLS ו-INP — המדדים שגוגל משתמש בהם לדירוג.' },
          { icon: '🔑', title: 'מחקר מילות מפתח', desc: 'מציאת הביטויים שהלקוחות שלכם מחפשים ובניית אסטרטגיה מנצחת.' },
          { icon: '📄', title: 'אופטימיזציה On-Page', desc: 'כותרות, מטא-תיאורים, תוכן, קישורים פנימיים ו-schema markup.' },
          { icon: '⚙️', title: 'SEO טכני', desc: 'ארכיטקטורת URL, sitemap, robots.txt, canonical tags ונגישות לסורקים.' },
          { icon: '📈', title: 'דוחות חודשיים', desc: 'דוח חודשי עם נתוני דירוג, תנועה וביצועים עם המלצות לשיפור.' },
        ],
        tech: ['Google Search Console', 'GA4', 'GTM', 'Lighthouse', 'Semrush', 'Screaming Frog'],
        process: [
          { num: '01', title: 'ביקורת מקיפה', desc: 'ניתוח מלא של מצב ה-SEO הנוכחי, מתחרים ופוטנציאל.' },
          { num: '02', title: 'תכנון אסטרטגיה', desc: 'מפת דרכים מאורגנת בעדיפויות — מה צריך לתקן ראשון ולמה.' },
          { num: '03', title: 'יישום שינויים', desc: 'שיפורים טכניים, אופטימיזציה של תוכן ובניית קישורים.' },
          { num: '04', title: 'מעקב ודוחות', desc: 'ניטור תוצאות, התאמת אסטרטגיה ודיווח חודשי מפורט.' },
        ],
        projects: [
          { title: 'Knockout GYM', url: 'https://knockoutgym.co.il', tag: 'Next.js · חדר כושר' },
          { title: 'SAHARA', url: 'https://sahara-il.co.il', tag: 'WooCommerce · יופי וטיפוח' },
          { title: 'Sofia Terapia', url: 'https://sofia-terapia.com', tag: 'Next.js · קליניקה' },
          { title: 'Maslul Nadir', url: 'https://maslul-nadir.co.il', tag: 'Next.js · תיירות' },
        ],
        faq: [
          { q: 'כמה זמן לוקח לראות תוצאות SEO?', a: 'שיפורים טכניים נראים תוך 2-4 שבועות. תוצאות SEO אורגניות מלאות מתגלות תוך 3-6 חודשים. SEO הוא השקעה לטווח ארוך.' },
          { q: 'מה ההבדל בין SEO טכני לתוכן?', a: 'SEO טכני הוא מבנה האתר, מהירות הטעינה וכיצד הסורקים קוראים אותו. SEO תוכן הוא אופטימיזציה של הטקסט, הכותרות ומילות המפתח. אני עוסק בשניהם.' },
          { q: 'האם אתם מבטיחים דירוג ראשון בגוגל?', a: 'לא. אף אחד לא יכול להבטיח דירוג מסוים. מה שכן מבטיח הוא שיפור מדיד בביצועים, יותר תנועה ויותר המרות על בסיס עבודה שיטתית.' },
          { q: 'כמה עולה שירות SEO?', a: 'ביקורת חד-פעמית — מ-1,500 ₪. ניהול SEO חודשי — מ-2,000 ₪ לחודש. תלוי בגודל האתר ותחרותיות התחום.' },
        ],
        cta_title: 'רוצים יותר ביקורים מגוגל?',
        cta_sub: 'נעשה ביקורת SEO ונגלה מה עוצר אתכם.',
      },
      en: {
        title: 'SEO & Performance',
        tagline: 'Speed that generates sales.',
        desc: 'Technical optimization and SEO that deliver measurable results — from 32 to 95 on Lighthouse, more organic visits, and more conversions. Data analysis, not guessing.',
        includes: [
          { icon: '🔦', title: 'Lighthouse Audit', desc: 'In-depth analysis of performance, accessibility, SEO and Best Practices with a detailed findings report.' },
          { icon: '📊', title: 'Core Web Vitals', desc: 'Improving LCP, CLS and INP — the metrics Google uses for ranking.' },
          { icon: '🔑', title: 'Keyword Research', desc: 'Finding the phrases your customers are searching for and building a winning strategy.' },
          { icon: '📄', title: 'On-page Optimization', desc: 'Headings, meta descriptions, content, internal links, and schema markup.' },
          { icon: '⚙️', title: 'Technical SEO', desc: 'URL architecture, sitemap, robots.txt, canonical tags, and crawler accessibility.' },
          { icon: '📈', title: 'Monthly Reports', desc: 'Monthly report with ranking data, traffic, and performance with improvement recommendations.' },
        ],
        tech: ['Google Search Console', 'GA4', 'GTM', 'Lighthouse', 'Semrush', 'Screaming Frog'],
        process: [
          { num: '01', title: 'Comprehensive Audit', desc: 'Full analysis of current SEO status, competitors, and potential.' },
          { num: '02', title: 'Strategy Planning', desc: 'A prioritized roadmap — what to fix first and why.' },
          { num: '03', title: 'Implementation', desc: 'Technical improvements, content optimization, and link building.' },
          { num: '04', title: 'Tracking & Reports', desc: 'Results monitoring, strategy adjustment, and detailed monthly reporting.' },
        ],
        projects: [
          { title: 'Knockout GYM', url: 'https://knockoutgym.co.il', tag: 'Next.js · Muay Thai Gym' },
          { title: 'SAHARA', url: 'https://sahara-il.co.il', tag: 'WooCommerce · Beauty & Care' },
          { title: 'Sofia Terapia', url: 'https://sofia-terapia.com', tag: 'Next.js · Therapy Clinic' },
          { title: 'Maslul Nadir', url: 'https://maslul-nadir.co.il', tag: 'Next.js · Travel Agency' },
        ],
        faq: [
          { q: 'How long does it take to see SEO results?', a: 'Technical improvements are visible within 2-4 weeks. Full organic SEO results appear within 3-6 months. SEO is a long-term investment.' },
          { q: 'What is the difference between technical SEO and content SEO?', a: 'Technical SEO is site structure, loading speed, and how crawlers read it. Content SEO is optimizing text, headings, and keywords. I handle both.' },
          { q: 'Do you guarantee first place on Google?', a: 'No. No one can guarantee a specific ranking. What I do guarantee is measurable improvement in performance, more traffic, and more conversions based on systematic work.' },
          { q: 'How much does SEO service cost?', a: 'A one-time audit starts from $400. Monthly SEO management starts from $500/month. Depends on site size and industry competitiveness.' },
        ],
        cta_title: 'Want more visits from Google?',
        cta_sub: "Let's do an SEO audit and find what's holding you back.",
      },
      ru: {
        title: 'SEO и производительность',
        tagline: 'Скорость, которая продаёт.',
        desc: 'Техническая оптимизация и SEO с измеримыми результатами — от 32 до 95 в Lighthouse, больше органического трафика и конверсий. Анализ данных, не догадки.',
        includes: [
          { icon: '🔦', title: 'Аудит Lighthouse', desc: 'Глубокий анализ производительности, доступности, SEO и Best Practices с подробным отчётом.' },
          { icon: '📊', title: 'Core Web Vitals', desc: 'Улучшение LCP, CLS и INP — показатели, которые Google использует для ранжирования.' },
          { icon: '🔑', title: 'Исследование ключевых слов', desc: 'Поиск запросов, которые ищут ваши клиенты, и построение выигрышной стратегии.' },
          { icon: '📄', title: 'On-page оптимизация', desc: 'Заголовки, мета-описания, контент, внутренние ссылки и schema markup.' },
          { icon: '⚙️', title: 'Техническое SEO', desc: 'Архитектура URL, sitemap, robots.txt, canonical-теги и доступность для краулеров.' },
          { icon: '📈', title: 'Ежемесячные отчёты', desc: 'Ежемесячный отчёт с данными о ранжировании, трафике и производительности с рекомендациями.' },
        ],
        tech: ['Google Search Console', 'GA4', 'GTM', 'Lighthouse', 'Semrush', 'Screaming Frog'],
        process: [
          { num: '01', title: 'Комплексный аудит', desc: 'Полный анализ текущего SEO-статуса, конкурентов и потенциала.' },
          { num: '02', title: 'Планирование стратегии', desc: 'Приоритизированная дорожная карта — что исправить первым и почему.' },
          { num: '03', title: 'Внедрение изменений', desc: 'Технические улучшения, оптимизация контента и построение ссылок.' },
          { num: '04', title: 'Отслеживание и отчёты', desc: 'Мониторинг результатов, корректировка стратегии и подробная ежемесячная отчётность.' },
        ],
        projects: [
          { title: 'Knockout GYM', url: 'https://knockoutgym.co.il', tag: 'Next.js · Зал Муай Тай' },
          { title: 'SAHARA', url: 'https://sahara-il.co.il', tag: 'WooCommerce · Красота и уход' },
          { title: 'Sofia Terapia', url: 'https://sofia-terapia.com', tag: 'Next.js · Терапевтическая клиника' },
          { title: 'Maslul Nadir', url: 'https://maslul-nadir.co.il', tag: 'Next.js · Туристическое агентство' },
        ],
        faq: [
          { q: 'Сколько времени нужно, чтобы увидеть результаты SEO?', a: 'Технические улучшения заметны через 2-4 недели. Полные результаты органического SEO появляются через 3-6 месяцев. SEO — долгосрочная инвестиция.' },
          { q: 'В чём разница между техническим SEO и контентным?', a: 'Техническое SEO — это структура сайта, скорость загрузки и читаемость для краулеров. Контентное SEO — оптимизация текстов, заголовков и ключевых слов. Работаю с обоими.' },
          { q: 'Гарантируете первое место в Google?', a: 'Нет. Никто не может гарантировать конкретную позицию. Что гарантирую — измеримое улучшение производительности, рост трафика и конверсий на основе системной работы.' },
          { q: 'Сколько стоит SEO-услуга?', a: 'Разовый аудит — от $400. Ежемесячное SEO-сопровождение — от $500/месяц. Зависит от размера сайта и конкурентности ниши.' },
        ],
        cta_title: 'Хотите больше посетителей из Google?',
        cta_sub: 'Проведём SEO-аудит и найдём, что вас тормозит.',
      },
      th: {
        title: 'SEO และประสิทธิภาพ',
        tagline: 'ความเร็วที่สร้างยอดขาย',
        desc: 'การปรับแต่งเทคนิคและ SEO ที่ให้ผลลัพธ์ที่วัดได้ จาก 32 ถึง 95 บน Lighthouse เพิ่มการเข้าชมแบบ organic และเพิ่ม conversion วิเคราะห์ข้อมูล ไม่ใช่การเดา',
        includes: [
          { icon: '🔦', title: 'ตรวจสอบ Lighthouse', desc: 'วิเคราะห์เชิงลึกด้านประสิทธิภาพ การเข้าถึง SEO และ Best Practices พร้อมรายงานผลโดยละเอียด' },
          { icon: '📊', title: 'Core Web Vitals', desc: 'ปรับปรุง LCP, CLS และ INP ซึ่งเป็นตัวชี้วัดที่ Google ใช้ในการจัดอันดับ' },
          { icon: '🔑', title: 'วิจัยคีย์เวิร์ด', desc: 'ค้นหาคำที่ลูกค้าของคุณค้นหา และสร้างกลยุทธ์ที่ชนะ' },
          { icon: '📄', title: 'การปรับแต่ง On-page', desc: 'หัวข้อ meta description เนื้อหา ลิงก์ภายใน และ schema markup' },
          { icon: '⚙️', title: 'Technical SEO', desc: 'สถาปัตยกรรม URL, sitemap, robots.txt, canonical tags และการเข้าถึงของ crawler' },
          { icon: '📈', title: 'รายงานรายเดือน', desc: 'รายงานรายเดือนพร้อมข้อมูลอันดับ traffic และประสิทธิภาพ พร้อมคำแนะนำการปรับปรุง' },
        ],
        tech: ['Google Search Console', 'GA4', 'GTM', 'Lighthouse', 'Semrush', 'Screaming Frog'],
        process: [
          { num: '01', title: 'ตรวจสอบครบถ้วน', desc: 'วิเคราะห์สถานะ SEO ปัจจุบัน คู่แข่ง และศักยภาพอย่างครบถ้วน' },
          { num: '02', title: 'วางแผนกลยุทธ์', desc: 'แผนงานที่จัดลำดับความสำคัญ สิ่งที่ต้องแก้ไขก่อนและเหตุใด' },
          { num: '03', title: 'ดำเนินการ', desc: 'ปรับปรุงเทคนิค เพิ่มประสิทธิภาพเนื้อหา และสร้างลิงก์' },
          { num: '04', title: 'ติดตามและรายงาน', desc: 'ตรวจสอบผลลัพธ์ ปรับกลยุทธ์ และรายงานรายเดือนโดยละเอียด' },
        ],
        projects: [
          { title: 'Knockout GYM', url: 'https://knockoutgym.co.il', tag: 'Next.js · ยิมมวยไทย' },
          { title: 'SAHARA', url: 'https://sahara-il.co.il', tag: 'WooCommerce · ความงาม' },
          { title: 'Sofia Terapia', url: 'https://sofia-terapia.com', tag: 'Next.js · คลินิกบำบัด' },
          { title: 'Maslul Nadir', url: 'https://maslul-nadir.co.il', tag: 'Next.js · ท่องเที่ยว' },
        ],
        faq: [
          { q: 'ใช้เวลานานแค่ไหนในการเห็นผล SEO?', a: 'การปรับปรุงเทคนิคเห็นผลภายใน 2-4 สัปดาห์ ผล SEO แบบ organic เต็มรูปแบบปรากฏภายใน 3-6 เดือน SEO เป็นการลงทุนระยะยาว' },
          { q: 'ความแตกต่างระหว่าง Technical SEO และ Content SEO คืออะไร?', a: 'Technical SEO คือโครงสร้างเว็บไซต์ ความเร็วในการโหลด และวิธีที่ crawler อ่าน Content SEO คือการปรับแต่งข้อความ หัวข้อ และคีย์เวิร์ด ฉันดูแลทั้งสองอย่าง' },
          { q: 'รับประกันอันดับหนึ่งบน Google ไหม?', a: 'ไม่ ไม่มีใครรับประกันอันดับที่เฉพาะเจาะจง สิ่งที่รับประกันคือการปรับปรุงประสิทธิภาพที่วัดได้ traffic มากขึ้น และ conversion มากขึ้นจากการทำงานอย่างเป็นระบบ' },
          { q: 'ค่าบริการ SEO เท่าไหร่?', a: 'การตรวจสอบครั้งเดียวเริ่มต้นที่ $400 การจัดการ SEO รายเดือนเริ่มต้นที่ $500/เดือน ขึ้นอยู่กับขนาดเว็บไซต์และการแข่งขันในอุตสาหกรรม' },
        ],
        cta_title: 'ต้องการผู้เข้าชมมากขึ้นจาก Google?',
        cta_sub: 'มาทำ SEO audit และค้นหาสิ่งที่ขัดขวางคุณอยู่',
      },
    },
  },
  {
    slug: 'google-ads',
    num: '04',
    icon: '📣',
    langs: {
      he: {
        title: 'קמפיינים ממומנים',
        tagline: 'פרסום שמביא לידים אמיתיים.',
        desc: 'קמפיינים ממומנים ב-Google שמביאים לידים אמיתיים — לא קליקים רנדומליים. מחקר מילות מפתח, כתיבת מודעות, ניהול תקציב ומעקב המרות — הכל תחת ניהול מקצועי.',
        includes: [
          { icon: '🔑', title: 'מחקר מילות מפתח', desc: 'מציאת המילים הנכונות שהלקוחות שלכם מחפשים — ברמת הכוונה הנכונה.' },
          { icon: '✍️', title: 'כתיבת מודעות', desc: 'קופי שמשכנע, extensions שמרחיבים ו-A/B testing שמשפר.' },
          { icon: '💰', title: 'ניהול תקציב', desc: 'מקסום ROI עם ניהול הצעות מחיר חכם, bid strategies ואופטימיזציה שוטפת.' },
          { icon: '📊', title: 'מעקב המרות', desc: 'הגדרת events, conversion tracking ו-GA4 — יודעים בדיוק מה מביא לידים.' },
          { icon: '🧪', title: 'A/B Testing', desc: 'בדיקת גרסאות מודעות שונות ודפי נחיתה — נשאר עם מה שעובד.' },
          { icon: '📈', title: 'דוחות חודשיים', desc: 'דוח ברור עם KPIs, עלות לליד, CTR ו-recommendations לחודש הבא.' },
        ],
        tech: ['Google Ads', 'Google Analytics', 'Tag Manager', 'Search Console', 'Keyword Planner'],
        process: [
          { num: '01', title: 'הגדרת מטרות', desc: 'מבינים מה ה-KPIs, מי הקהל ומה תקציב הפרסום לפני שמתחילים.' },
          { num: '02', title: 'בניית קמפיין', desc: 'מבנה קמפיין, ad groups, מילות מפתח ומודעות ראשוניות.' },
          { num: '03', title: 'הפעלה ואופטימיזציה', desc: 'מפעילים, עוקבים ומשפרים כל יום — לא "set and forget".' },
          { num: '04', title: 'ניתוח ודיווח', desc: 'ניתוח ביצועים, שיפור מתמיד ודוח חודשי מפורט.' },
        ],
        projects: [
          { title: 'Knockout GYM', url: 'https://knockoutgym.co.il', tag: 'Google Ads · חדר כושר' },
          { title: 'SAHARA', url: 'https://sahara-il.co.il', tag: 'Google Ads · יופי וטיפוח' },
        ],
        faq: [
          { q: 'מה ההבדל בין Google Ads ל-SEO?', a: 'Google Ads הם תוצאות ממומנות שנותנות תנועה מיידית. SEO הוא תנועה אורגנית שלוקחת זמן לבנות אבל לא עולה לקליק. הכי טוב להשתמש בשניהם.' },
          { q: 'כמה צריך להשקיע בתקציב פרסום?', a: 'תלוי בתחרותיות התחום ובמטרות. ממליץ על מינימום 2,000-3,000 ₪ לחודש לפרסום + דמי ניהול. יחד נגדיר תקציב שהגיוני לעסק שלכם.' },
          { q: 'כמה זמן לוקח לראות תוצאות?', a: 'הקמפיין עולה לאוויר תוך שבוע. תוצאות ראשוניות — 2-4 שבועות. ביצועים מיטביים — 2-3 חודשים של אופטימיזציה מתמשכת.' },
          { q: 'האם יש תקופת מינימום?', a: 'כן, 3 חודשים לפחות. פחות מזה לא מספיק זמן לאסוף נתונים ולבצע אופטימיזציה אמיתית.' },
        ],
        cta_title: 'רוצים יותר לידים מגוגל?',
        cta_sub: 'נעשה ניתוח ראשוני של הפוטנציאל שלכם ב-Google Ads.',
      },
      en: {
        title: 'Google Ads',
        tagline: 'Ads that bring real leads.',
        desc: 'Google Ads campaigns that bring real leads — not random clicks. Keyword research, ad copywriting, budget management, and conversion tracking — all under professional management.',
        includes: [
          { icon: '🔑', title: 'Keyword Research', desc: 'Finding the right words your customers are searching for — at the right intent level.' },
          { icon: '✍️', title: 'Ad Copywriting', desc: 'Compelling copy, powerful extensions, and A/B testing that improves.' },
          { icon: '💰', title: 'Budget Management', desc: 'Maximizing ROI with smart bid management, bid strategies, and ongoing optimization.' },
          { icon: '📊', title: 'Conversion Tracking', desc: 'Setting up events, conversion tracking and GA4 — knowing exactly what brings leads.' },
          { icon: '🧪', title: 'A/B Testing', desc: 'Testing different ad versions and landing pages — keeping what works.' },
          { icon: '📈', title: 'Monthly Reports', desc: 'Clear report with KPIs, cost per lead, CTR, and recommendations for next month.' },
        ],
        tech: ['Google Ads', 'Google Analytics', 'Tag Manager', 'Search Console', 'Keyword Planner'],
        process: [
          { num: '01', title: 'Goal Setting', desc: 'Understanding KPIs, audience, and advertising budget before starting.' },
          { num: '02', title: 'Campaign Build', desc: 'Campaign structure, ad groups, keywords, and initial ads.' },
          { num: '03', title: 'Launch & Optimize', desc: 'Launch, track, and improve daily — not "set and forget".' },
          { num: '04', title: 'Analysis & Reporting', desc: 'Performance analysis, continuous improvement, and detailed monthly reporting.' },
        ],
        projects: [
          { title: 'Knockout GYM', url: 'https://knockoutgym.co.il', tag: 'Google Ads · Muay Thai Gym' },
          { title: 'SAHARA', url: 'https://sahara-il.co.il', tag: 'Google Ads · Beauty & Care' },
        ],
        faq: [
          { q: 'What is the difference between Google Ads and SEO?', a: 'Google Ads are paid results that give instant traffic. SEO is organic traffic that takes time to build but costs nothing per click. Best to use both.' },
          { q: 'How much budget do I need for advertising?', a: 'Depends on industry competitiveness and goals. I recommend a minimum of $500-800/month for ads + management fee. Together we will define a budget that makes sense for your business.' },
          { q: 'How long does it take to see results?', a: 'The campaign goes live within a week. Initial results — 2-4 weeks. Optimal performance — 2-3 months of continuous optimization.' },
          { q: 'Is there a minimum period?', a: 'Yes, at least 3 months. Less than that is not enough time to collect data and do real optimization.' },
        ],
        cta_title: 'Want more leads from Google?',
        cta_sub: "Let's do an initial analysis of your Google Ads potential.",
      },
      ru: {
        title: 'Реклама в Google',
        tagline: 'Реклама, которая приводит реальные заявки.',
        desc: 'Рекламные кампании в Google, которые приводят реальные заявки — не случайные клики. Исследование ключевых слов, написание объявлений, управление бюджетом и отслеживание конверсий — всё под профессиональным управлением.',
        includes: [
          { icon: '🔑', title: 'Исследование ключевых слов', desc: 'Поиск правильных запросов, которые вводят ваши клиенты — с правильным намерением.' },
          { icon: '✍️', title: 'Написание объявлений', desc: 'Убедительный копирайтинг, мощные расширения и A/B тестирование для улучшения.' },
          { icon: '💰', title: 'Управление бюджетом', desc: 'Максимизация ROI с умным управлением ставками, bid strategies и постоянной оптимизацией.' },
          { icon: '📊', title: 'Отслеживание конверсий', desc: 'Настройка events, conversion tracking и GA4 — точно знаем, что приводит заявки.' },
          { icon: '🧪', title: 'A/B тестирование', desc: 'Тестирование разных версий объявлений и лендингов — оставляем то, что работает.' },
          { icon: '📈', title: 'Ежемесячные отчёты', desc: 'Чёткий отчёт с KPI, стоимостью заявки, CTR и рекомендациями на следующий месяц.' },
        ],
        tech: ['Google Ads', 'Google Analytics', 'Tag Manager', 'Search Console', 'Keyword Planner'],
        process: [
          { num: '01', title: 'Постановка целей', desc: 'Понимаем KPI, аудиторию и рекламный бюджет до начала работ.' },
          { num: '02', title: 'Создание кампании', desc: 'Структура кампании, группы объявлений, ключевые слова и первые объявления.' },
          { num: '03', title: 'Запуск и оптимизация', desc: 'Запускаем, отслеживаем и улучшаем ежедневно — не "настроил и забыл".' },
          { num: '04', title: 'Анализ и отчётность', desc: 'Анализ эффективности, постоянное улучшение и подробная ежемесячная отчётность.' },
        ],
        projects: [
          { title: 'Knockout GYM', url: 'https://knockoutgym.co.il', tag: 'Google Ads · Зал Муай Тай' },
          { title: 'SAHARA', url: 'https://sahara-il.co.il', tag: 'Google Ads · Красота и уход' },
        ],
        faq: [
          { q: 'В чём разница между Google Ads и SEO?', a: 'Google Ads — платные результаты, которые дают мгновенный трафик. SEO — органический трафик, который строится со временем, но не стоит за клик. Лучше использовать оба.' },
          { q: 'Какой бюджет нужен для рекламы?', a: 'Зависит от конкурентности ниши и целей. Рекомендую минимум $500-800/месяц на рекламу + плата за управление. Вместе определим бюджет, который разумен для вашего бизнеса.' },
          { q: 'Сколько времени нужно, чтобы увидеть результаты?', a: 'Кампания запускается в течение недели. Первые результаты — 2-4 недели. Оптимальная эффективность — 2-3 месяца постоянной оптимизации.' },
          { q: 'Есть минимальный срок?', a: 'Да, минимум 3 месяца. Меньше — недостаточно времени для сбора данных и настоящей оптимизации.' },
        ],
        cta_title: 'Хотите больше заявок из Google?',
        cta_sub: 'Проведём первичный анализ вашего потенциала в Google Ads.',
      },
      th: {
        title: 'Google Ads',
        tagline: 'โฆษณาที่นำ leads จริงมาให้',
        desc: 'แคมเปญ Google Ads ที่นำ leads จริงมาให้ ไม่ใช่แค่คลิกสุ่ม วิจัยคีย์เวิร์ด เขียนโฆษณา จัดการงบประมาณ และติดตาม conversion ทั้งหมดภายใต้การจัดการมืออาชีพ',
        includes: [
          { icon: '🔑', title: 'วิจัยคีย์เวิร์ด', desc: 'ค้นหาคำที่ลูกค้าของคุณค้นหา ในระดับ intent ที่ถูกต้อง' },
          { icon: '✍️', title: 'เขียนโฆษณา', desc: 'ข้อความที่น่าสนใจ extensions ที่ทรงพลัง และ A/B testing ที่ช่วยปรับปรุง' },
          { icon: '💰', title: 'จัดการงบประมาณ', desc: 'เพิ่ม ROI สูงสุดด้วยการจัดการ bid อย่างชาญฉลาด bid strategies และการปรับแต่งต่อเนื่อง' },
          { icon: '📊', title: 'ติดตาม Conversion', desc: 'ตั้งค่า events, conversion tracking และ GA4 รู้ว่าอะไรนำ leads มาให้ได้อย่างแม่นยำ' },
          { icon: '🧪', title: 'A/B Testing', desc: 'ทดสอบโฆษณาและหน้า landing หลายเวอร์ชัน เก็บสิ่งที่ได้ผล' },
          { icon: '📈', title: 'รายงานรายเดือน', desc: 'รายงานที่ชัดเจนพร้อม KPIs ค่าใช้จ่ายต่อ lead, CTR และคำแนะนำสำหรับเดือนถัดไป' },
        ],
        tech: ['Google Ads', 'Google Analytics', 'Tag Manager', 'Search Console', 'Keyword Planner'],
        process: [
          { num: '01', title: 'กำหนดเป้าหมาย', desc: 'เข้าใจ KPIs กลุ่มเป้าหมาย และงบโฆษณาก่อนเริ่มต้น' },
          { num: '02', title: 'สร้างแคมเปญ', desc: 'โครงสร้างแคมเปญ ad groups คีย์เวิร์ด และโฆษณาเริ่มต้น' },
          { num: '03', title: 'เปิดตัวและปรับแต่ง', desc: 'เปิดตัว ติดตาม และปรับปรุงทุกวัน ไม่ใช่แค่ตั้งค่าแล้วลืม' },
          { num: '04', title: 'วิเคราะห์และรายงาน', desc: 'วิเคราะห์ประสิทธิภาพ ปรับปรุงต่อเนื่อง และรายงานรายเดือนโดยละเอียด' },
        ],
        projects: [
          { title: 'Knockout GYM', url: 'https://knockoutgym.co.il', tag: 'Google Ads · ยิมมวยไทย' },
          { title: 'SAHARA', url: 'https://sahara-il.co.il', tag: 'Google Ads · ความงาม' },
        ],
        faq: [
          { q: 'ความแตกต่างระหว่าง Google Ads และ SEO คืออะไร?', a: 'Google Ads คือผลลัพธ์ที่เสียเงิน ให้ traffic ทันที SEO คือ traffic แบบ organic ที่ใช้เวลาสร้าง แต่ไม่มีค่าใช้จ่ายต่อคลิก ดีที่สุดคือใช้ทั้งสองอย่าง' },
          { q: 'ต้องใช้งบโฆษณาเท่าไหร่?', a: 'ขึ้นอยู่กับการแข่งขันในอุตสาหกรรมและเป้าหมาย แนะนำขั้นต่ำ $500-800/เดือนสำหรับโฆษณา + ค่าจัดการ เราจะกำหนดงบที่เหมาะสมกับธุรกิจของคุณร่วมกัน' },
          { q: 'ใช้เวลานานแค่ไหนในการเห็นผล?', a: 'แคมเปญเปิดตัวภายในสัปดาห์ ผลลัพธ์เบื้องต้น 2-4 สัปดาห์ ประสิทธิภาพสูงสุด 2-3 เดือนของการปรับแต่งต่อเนื่อง' },
          { q: 'มีระยะเวลาขั้นต่ำไหม?', a: 'ใช่ อย่างน้อย 3 เดือน น้อยกว่านั้นไม่เพียงพอในการเก็บข้อมูลและทำการปรับแต่งอย่างแท้จริง' },
        ],
        cta_title: 'ต้องการ leads มากขึ้นจาก Google?',
        cta_sub: 'มาวิเคราะห์ศักยภาพ Google Ads ของคุณเบื้องต้น',
      },
    },
  },
  {
    slug: 'ai-agents',
    num: '05',
    icon: '🤖',
    langs: {
      he: {
        title: 'סוכני AI לעסקים',
        tagline: 'אוטומציה שחוסכת שעות כל יום.',
        desc: 'סוכני AI מותאמים שמייעלים תהליכים עסקיים אמיתיים — כישורי לידים, תמיכת לקוחות, אוטומציה פנימית ועיבוד נתונים. אינטגרציה ישירה עם המערכות הקיימות שלכם.',
        includes: [
          { icon: '🤖', title: 'בוט לכישורי לידים', desc: 'סוכן AI שמסנן ומכשיר לידים נכנסים לפני שמגיעים אליכם — עם הפרטים הנכונים.' },
          { icon: '💬', title: 'תמיכת לקוחות אוטומטית', desc: 'צ\'אטבוט חכם שעונה על שאלות נפוצות, מתזמן פגישות ומעביר לנציג כשצריך.' },
          { icon: '🔗', title: 'אינטגרציה עם CRM', desc: 'חיבור לסיילספורס, HubSpot, Monday או כל CRM — נתונים נכנסים אוטומטית.' },
          { icon: '⚙️', title: 'אוטומציה של זרימות פנימיות', desc: 'הגדרת workflows שחוסכים שעות עבודה ידנית יומיות — מדיווחים ועד עדכוני מלאי.' },
          { icon: '📊', title: 'עיבוד נתונים', desc: 'ייצוא, עיבוד וניתוח נתונים מהיר ואוטומטי — ללא עבודה ידנית.' },
          { icon: '🛠️', title: 'כלי AI מותאמים', desc: 'פיתוח כלים ייעודיים לצרכים הספציפיים של העסק שלכם.' },
        ],
        tech: ['OpenAI', 'n8n', 'Make', 'Python', 'Zapier', 'API Integration'],
        process: [
          { num: '01', title: 'ניתוח תהליכים', desc: 'ממפים אילו תהליכים עסקיים אפשר לאוטמט ומה הפוטנציאל לחסכון בזמן.' },
          { num: '02', title: 'בחירת פתרון', desc: 'בוחרים את הכלים הנכונים — n8n, Make, Zapier או פיתוח מותאם.' },
          { num: '03', title: 'בנייה ובדיקות', desc: 'בונים, בודקים על נתונים אמיתיים ומשפרים לפני פריסה.' },
          { num: '04', title: 'פריסה ותמיכה', desc: 'פורסים, מנטרים ומוודאים שהכל עובד חלק — עם תמיכה שוטפת.' },
        ],
        projects: [
          { title: 'Sofia Terapia — AI Booking', url: 'https://sofia-terapia.com', tag: 'AI Agent · תזמון פגישות' },
        ],
        faq: [
          { q: 'לאיזה עסקים מתאימה אוטומציה עם AI?', a: 'כמעט לכל עסק שיש בו תהליכים חוזרים — ניהול לידים, תמיכת לקוחות, הזמנות, דיווחים. אם תהליך לוקח לכם כמה שעות בשבוע — כנראה אפשר לאוטמט אותו.' },
          { q: 'כמה עולה לבנות סוכן AI?', a: 'אוטומציה פשוטה עם n8n/Make — מ-1,500 ₪. סוכן AI מורכב עם אינטגרציות מרובות — 5,000-15,000 ₪. תלוי במורכבות.' },
          { q: 'האם זה מחייב ידע טכני לתפעול?', a: 'לא. בונה עם ממשקים שהצוות שלכם יכול לנהל בעצמו. ואם צריך עזרה — יש תמיכה שוטפת.' },
          { q: 'כמה זמן לוקח להטמיע?', a: 'אוטומציה בסיסית — שבוע-שבועיים. מערכת מורכבת — חודש-חודשיים. תלוי בגודל הפרויקט ובמורכבות האינטגרציות.' },
        ],
        cta_title: 'רוצים לחסוך שעות כל יום?',
        cta_sub: 'נדבר על אילו תהליכים אפשר לאוטמט בעסק שלכם.',
      },
      en: {
        title: 'AI Agents for Business',
        tagline: 'Automation that saves hours every day.',
        desc: 'Custom AI agents that streamline real business processes — lead qualification, customer support, internal automation, and data processing. Integrated directly into your existing systems.',
        includes: [
          { icon: '🤖', title: 'Lead Qualification Bot', desc: 'An AI agent that filters and qualifies incoming leads before they reach you — with the right details.' },
          { icon: '💬', title: 'Customer Support Automation', desc: 'Smart chatbot that answers FAQs, schedules meetings, and escalates to a rep when needed.' },
          { icon: '🔗', title: 'CRM Integration', desc: 'Connection to Salesforce, HubSpot, Monday, or any CRM — data enters automatically.' },
          { icon: '⚙️', title: 'Internal Workflow Automation', desc: 'Setting up workflows that save hours of daily manual work — from reports to inventory updates.' },
          { icon: '📊', title: 'Data Processing', desc: 'Fast and automatic data export, processing, and analysis — no manual work.' },
          { icon: '🛠️', title: 'Custom AI Tools', desc: 'Building dedicated tools for the specific needs of your business.' },
        ],
        tech: ['OpenAI', 'n8n', 'Make', 'Python', 'Zapier', 'API Integration'],
        process: [
          { num: '01', title: 'Process Analysis', desc: 'We map which business processes can be automated and what the time-saving potential is.' },
          { num: '02', title: 'Solution Selection', desc: 'Choosing the right tools — n8n, Make, Zapier, or custom development.' },
          { num: '03', title: 'Build & Test', desc: 'Build, test on real data, and improve before deployment.' },
          { num: '04', title: 'Deploy & Support', desc: 'Deploy, monitor, and ensure everything works smoothly — with ongoing support.' },
        ],
        projects: [
          { title: 'Sofia Terapia — AI Booking', url: 'https://sofia-terapia.com', tag: 'AI Agent · Appointment Scheduling' },
        ],
        faq: [
          { q: 'What businesses are suitable for AI automation?', a: 'Almost any business with repetitive processes — lead management, customer support, orders, reports. If a process takes you a few hours a week — it can probably be automated.' },
          { q: 'How much does it cost to build an AI agent?', a: 'Simple automation with n8n/Make — from $400. Complex AI agent with multiple integrations — $1,500-4,000. Depends on complexity.' },
          { q: 'Does it require technical knowledge to operate?', a: 'No. I build with interfaces your team can manage themselves. And if help is needed — ongoing support is available.' },
          { q: 'How long does implementation take?', a: 'Basic automation — 1-2 weeks. Complex system — 1-2 months. Depends on project size and integration complexity.' },
        ],
        cta_title: 'Want to save hours every day?',
        cta_sub: "Let's talk about which processes can be automated in your business.",
      },
      ru: {
        title: 'AI-агенты для бизнеса',
        tagline: 'Автоматизация, экономящая часы каждый день.',
        desc: 'Кастомные AI-агенты, которые оптимизируют реальные бизнес-процессы — квалификация лидов, поддержка клиентов, внутренняя автоматизация и обработка данных. Прямая интеграция с вашими существующими системами.',
        includes: [
          { icon: '🤖', title: 'Бот для квалификации лидов', desc: 'AI-агент, который фильтрует и квалифицирует входящие лиды до того, как они доберутся до вас — с нужными данными.' },
          { icon: '💬', title: 'Автоматизация поддержки клиентов', desc: 'Умный чат-бот, отвечающий на частые вопросы, планирующий встречи и передающий менеджеру при необходимости.' },
          { icon: '🔗', title: 'Интеграция с CRM', desc: 'Подключение к Salesforce, HubSpot, Monday или любой CRM — данные вносятся автоматически.' },
          { icon: '⚙️', title: 'Автоматизация внутренних процессов', desc: 'Настройка workflows, экономящих часы ежедневной ручной работы — от отчётов до обновления остатков.' },
          { icon: '📊', title: 'Обработка данных', desc: 'Быстрый и автоматический экспорт, обработка и анализ данных — без ручного труда.' },
          { icon: '🛠️', title: 'Кастомные AI-инструменты', desc: 'Разработка специализированных инструментов для конкретных нужд вашего бизнеса.' },
        ],
        tech: ['OpenAI', 'n8n', 'Make', 'Python', 'Zapier', 'API Integration'],
        process: [
          { num: '01', title: 'Анализ процессов', desc: 'Составляем карту бизнес-процессов, которые можно автоматизировать, и оцениваем потенциал экономии.' },
          { num: '02', title: 'Выбор решения', desc: 'Выбираем подходящие инструменты — n8n, Make, Zapier или кастомная разработка.' },
          { num: '03', title: 'Сборка и тестирование', desc: 'Строим, тестируем на реальных данных и улучшаем до деплоя.' },
          { num: '04', title: 'Деплой и поддержка', desc: 'Деплоим, мониторим и следим за бесперебойной работой — с постоянной поддержкой.' },
        ],
        projects: [
          { title: 'Sofia Terapia — AI Booking', url: 'https://sofia-terapia.com', tag: 'AI-агент · Запись на приём' },
        ],
        faq: [
          { q: 'Какому бизнесу подходит AI-автоматизация?', a: 'Практически любому, где есть повторяющиеся процессы — управление лидами, поддержка клиентов, заказы, отчёты. Если процесс занимает несколько часов в неделю — его, скорее всего, можно автоматизировать.' },
          { q: 'Сколько стоит разработка AI-агента?', a: 'Простая автоматизация с n8n/Make — от $400. Сложный AI-агент с множеством интеграций — $1500-4000. Зависит от сложности.' },
          { q: 'Нужны ли технические знания для работы с системой?', a: 'Нет. Строю с интерфейсами, которыми ваша команда может управлять самостоятельно. При необходимости — постоянная поддержка.' },
          { q: 'Сколько времени занимает внедрение?', a: 'Базовая автоматизация — 1-2 недели. Сложная система — 1-2 месяца. Зависит от размера проекта и сложности интеграций.' },
        ],
        cta_title: 'Хотите экономить часы каждый день?',
        cta_sub: 'Поговорим о том, какие процессы в вашем бизнесе можно автоматизировать.',
      },
      th: {
        title: 'AI Agents สำหรับธุรกิจ',
        tagline: 'ระบบอัตโนมัติที่ประหยัดเวลาได้หลายชั่วโมงต่อวัน',
        desc: 'AI agents แบบกำหนดเองที่เพิ่มประสิทธิภาพกระบวนการทางธุรกิจจริง การคัดกรอง leads การสนับสนุนลูกค้า ระบบอัตโนมัติภายใน และการประมวลผลข้อมูล เชื่อมต่อโดยตรงกับระบบที่มีอยู่ของคุณ',
        includes: [
          { icon: '🤖', title: 'บอทคัดกรอง Leads', desc: 'AI agent ที่กรองและคัดกรอง leads ขาเข้าก่อนถึงคุณ พร้อมข้อมูลที่ถูกต้อง' },
          { icon: '💬', title: 'ระบบสนับสนุนลูกค้าอัตโนมัติ', desc: 'แชทบอทอัจฉริยะที่ตอบคำถามที่พบบ่อย จองนัด และส่งต่อให้ทีมเมื่อจำเป็น' },
          { icon: '🔗', title: 'เชื่อมต่อ CRM', desc: 'เชื่อมต่อกับ Salesforce, HubSpot, Monday หรือ CRM ใดก็ได้ ข้อมูลเข้าอัตโนมัติ' },
          { icon: '⚙️', title: 'ระบบอัตโนมัติ Workflow ภายใน', desc: 'ตั้งค่า workflows ที่ประหยัดงานด้วยมือหลายชั่วโมงต่อวัน จากรายงานถึงการอัปเดตสินค้าคงคลัง' },
          { icon: '📊', title: 'ประมวลผลข้อมูล', desc: 'ส่งออก ประมวลผล และวิเคราะห์ข้อมูลได้เร็วและอัตโนมัติ ไม่ต้องทำด้วยมือ' },
          { icon: '🛠️', title: 'เครื่องมือ AI แบบกำหนดเอง', desc: 'สร้างเครื่องมือเฉพาะทางสำหรับความต้องการเฉพาะของธุรกิจคุณ' },
        ],
        tech: ['OpenAI', 'n8n', 'Make', 'Python', 'Zapier', 'API Integration'],
        process: [
          { num: '01', title: 'วิเคราะห์กระบวนการ', desc: 'วางแผนว่ากระบวนการทางธุรกิจใดสามารถทำให้เป็นอัตโนมัติได้ และศักยภาพการประหยัดเวลา' },
          { num: '02', title: 'เลือกโซลูชัน', desc: 'เลือกเครื่องมือที่เหมาะสม n8n, Make, Zapier หรือการพัฒนาแบบกำหนดเอง' },
          { num: '03', title: 'สร้างและทดสอบ', desc: 'สร้าง ทดสอบกับข้อมูลจริง และปรับปรุงก่อน deploy' },
          { num: '04', title: 'Deploy และสนับสนุน', desc: 'Deploy ตรวจสอบ และให้แน่ใจว่าทุกอย่างทำงานได้ราบรื่น พร้อมสนับสนุนต่อเนื่อง' },
        ],
        projects: [
          { title: 'Sofia Terapia — AI Booking', url: 'https://sofia-terapia.com', tag: 'AI Agent · จองนัดหมาย' },
        ],
        faq: [
          { q: 'ธุรกิจแบบไหนเหมาะกับ AI automation?', a: 'เกือบทุกธุรกิจที่มีกระบวนการซ้ำๆ การจัดการ leads การสนับสนุนลูกค้า คำสั่งซื้อ รายงาน ถ้ากระบวนการใช้เวลาหลายชั่วโมงต่อสัปดาห์ น่าจะทำให้เป็นอัตโนมัติได้' },
          { q: 'ค่าใช้จ่ายในการสร้าง AI agent เท่าไหร่?', a: 'ระบบอัตโนมัติง่ายๆ ด้วย n8n/Make เริ่มต้นที่ $400 AI agent ที่ซับซ้อนพร้อม integrations หลายตัว $1,500-4,000 ขึ้นอยู่กับความซับซ้อน' },
          { q: 'ต้องมีความรู้เทคนิคในการใช้งานไหม?', a: 'ไม่ ฉันสร้างด้วย interface ที่ทีมของคุณสามารถจัดการได้เอง และถ้าต้องการความช่วยเหลือ มีการสนับสนุนต่อเนื่อง' },
          { q: 'การติดตั้งใช้เวลานานแค่ไหน?', a: 'ระบบอัตโนมัติพื้นฐาน 1-2 สัปดาห์ ระบบซับซ้อน 1-2 เดือน ขึ้นอยู่กับขนาดโปรเจกต์และความซับซ้อนของ integration' },
        ],
        cta_title: 'ต้องการประหยัดเวลาหลายชั่วโมงต่อวัน?',
        cta_sub: 'มาพูดคุยเรื่องกระบวนการไหนในธุรกิจของคุณที่ทำให้เป็นอัตโนมัติได้',
      },
    },
  },
]

export const SLUG_TO_NUM: Record<ServiceSlug, string> = {
  'web-development': '01',
  'app-development': '02',
  'seo': '03',
  'google-ads': '04',
  'ai-agents': '05',
}

export const NUM_TO_SLUG: Record<string, ServiceSlug> = {
  '01': 'web-development',
  '02': 'app-development',
  '03': 'seo',
  '04': 'google-ads',
  '05': 'ai-agents',
}
