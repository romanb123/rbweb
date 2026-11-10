import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import BlogListPage from '../../_components/BlogListPage'

export const runtime = 'edge'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (lang !== 'he') return {}
  return {
    title: 'בלוג | RBapp — טיפים לפיתוח אתרים ו-SEO',
    description: 'כתבות ומדריכים על פיתוח אתרים, SEO, מהירות אתרים ועוד — מאת מפתח Full-Stack עם ניסיון בישראל.',
  }
}

export function generateStaticParams() {
  return [{ lang: 'he' }]
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (lang !== 'he') notFound()
  return <BlogListPage />
}
