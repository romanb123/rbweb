import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import HomePage from '../_components/HomePage'

export const runtime = 'edge'

type Lang = 'he' | 'en' | 'ru' | 'th'

const LANGS: Lang[] = ['he', 'en', 'ru', 'th']

const META: Record<Lang, { title: string; description: string }> = {
  he: {
    title: 'RBapp — בניית אתרים, אפליקציות, פתרונות AI ואוטומציות',
    description: 'בניית אתרים מהירים, אפליקציות מובייל, פתרונות AI ואוטומציות לעסקים. מהרעיון ועד המוצר הסופי — Next.js, React Native, WordPress.',
  },
  en: {
    title: 'RBapp — Websites, Apps, AI Solutions & Automation',
    description: 'Building fast websites, mobile apps, AI solutions and business automation — from idea to live product. Next.js, React Native, WordPress.',
  },
  ru: {
    title: 'RBapp — Сайты, Приложения, AI-решения и Автоматизация',
    description: 'Создаю быстрые сайты, мобильные приложения, AI-решения и автоматизацию для бизнеса. Next.js, React Native, WordPress.',
  },
  th: {
    title: 'RBapp — เว็บไซต์, แอป, โซลูชัน AI และระบบอัตโนมัติ',
    description: 'สร้างเว็บไซต์เร็ว, แอปมือถือ, โซลูชัน AI และระบบอัตโนมัติสำหรับธุรกิจ — Next.js, React Native, WordPress.',
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
