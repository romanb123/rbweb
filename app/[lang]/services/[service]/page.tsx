export const runtime = 'edge'

import { notFound } from 'next/navigation'
import ServicePage from '../../../_components/ServicePage'
import { SERVICES, type Lang, type ServiceSlug } from '../../../_data/services'

const LANGS = ['he', 'en', 'ru', 'th']
const SLUGS = ['web-development', 'app-development', 'seo', 'google-ads', 'ai-agents']

export async function generateMetadata({ params }: { params: Promise<{ lang: string; service: string }> }) {
  const { lang, service } = await params
  const svc = SERVICES.find(s => s.slug === service)
  if (!svc || !LANGS.includes(lang)) return {}
  const data = svc.langs[lang as Lang]
  return {
    title: `${data.title} — Roman Besiakov`,
    description: data.desc,
    alternates: {
      canonical: `https://rb-app.com/${lang}/services/${service}`,
    },
    openGraph: {
      title: `${data.title} — Roman Besiakov`,
      description: data.tagline,
      url: `https://rb-app.com/${lang}/services/${service}`,
    },
  }
}

export function generateStaticParams() {
  return LANGS.flatMap(lang => SLUGS.map(service => ({ lang, service })))
}

export default async function Page({ params }: { params: Promise<{ lang: string; service: string }> }) {
  const { lang, service } = await params
  if (!LANGS.includes(lang) || !SLUGS.includes(service)) notFound()
  return <ServicePage lang={lang as Lang} slug={service as ServiceSlug} />
}
