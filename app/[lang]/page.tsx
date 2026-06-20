import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import HomePage from '../_components/HomePage'

type Lang = 'he' | 'en' | 'ru' | 'th'

const LANGS: Lang[] = ['he', 'en', 'ru', 'th']

const META: Record<Lang, { title: string; description: string }> = {
  he: {
    title: 'RBapp — מפתח Full-Stack | פיתוח אתרים ואפליקציות',
    description: 'מפתח Full-Stack עם 5+ שנות ניסיון. בניית אתרים מהירים, אפליקציות מובייל ופתרונות SEO. WordPress, React, Next.js, React Native.',
  },
  en: {
    title: 'RBapp — Full-Stack Developer | Web & App Development',
    description: 'Full-Stack Developer with 5+ years of experience. Building high-performance websites, mobile apps & SEO-optimized solutions. React, Next.js, WordPress.',
  },
  ru: {
    title: 'RBapp — Full-Stack Разработчик | Веб и Мобильные Приложения',
    description: 'Full-Stack разработчик с 5+ годами опыта. Создание быстрых сайтов, мобильных приложений и SEO-решений. React, Next.js, WordPress, React Native.',
  },
  th: {
    title: 'RBapp — นักพัฒนา Full-Stack | พัฒนาเว็บและแอป',
    description: 'นักพัฒนา Full-Stack ที่มีประสบการณ์ 5+ ปี สร้างเว็บไซต์ประสิทธิภาพสูง แอปมือถือ และโซลูชัน SEO React, Next.js, WordPress',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!LANGS.includes(lang as Lang)) return {}
  return META[lang as Lang]
}

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!LANGS.includes(lang as Lang)) notFound()
  return <HomePage initialLang={lang as Lang} />
}
