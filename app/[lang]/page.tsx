import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import HomePage from '../_components/HomePage'

type Lang = 'he' | 'en' | 'ru' | 'th'

const LANGS: Lang[] = ['he', 'en', 'ru', 'th']

const META: Record<Lang, { title: string; description: string }> = {
  he: {
    title: 'RBapp — מפתח Full-Stack | פיתוח אתרים ואפליקציות',
    description: 'בונה אתרים מהירים ואפליקציות מובייל — מהרעיון ועד המוצר הסופי. React, Next.js, WordPress, React Native.',
  },
  en: {
    title: 'RBapp — Full-Stack Developer | Web & App Development',
    description: 'Building fast websites and mobile apps — from idea to live product. React, Next.js, WordPress, React Native.',
  },
  ru: {
    title: 'RBapp — Full-Stack Разработчик | Веб и Мобильные Приложения',
    description: 'Создаю быстрые сайты и мобильные приложения — от идеи до готового продукта. React, Next.js, WordPress, React Native.',
  },
  th: {
    title: 'RBapp — นักพัฒนา Full-Stack | พัฒนาเว็บและแอป',
    description: 'สร้างเว็บไซต์และแอปมือถือ — จากไอเดียสู่ผลิตภัณฑ์จริง React, Next.js, WordPress, React Native.',
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
