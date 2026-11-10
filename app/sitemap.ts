import { MetadataRoute } from 'next'

export const runtime = 'edge'

const BASE = 'https://rb-app.com'
const LANGS = ['he', 'en', 'ru', 'th']
const SERVICES = ['web-development', 'app-development', 'seo', 'google-ads', 'ai-agents']
const BLOG_POSTS = [
  'website-cost-2026',
  'wordpress-vs-nextjs',
  'website-timeline',
  'slow-website-fixes',
  'business-website-essentials',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const urls: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
  ]

  for (const lang of LANGS) {
    urls.push({ url: `${BASE}/${lang}`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 })
    for (const slug of SERVICES) {
      urls.push({ url: `${BASE}/${lang}/services/${slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 })
    }
  }

  urls.push({ url: `${BASE}/he/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 })
  for (const slug of BLOG_POSTS) {
    urls.push({ url: `${BASE}/he/blog/${slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })
  }

  return urls
}
