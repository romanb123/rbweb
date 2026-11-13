import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import BlogPost from '../../../_components/BlogPost'
import { HE_POSTS } from '../../../../content/blog/registry'

export const runtime = 'edge'

async function getPost(slug: string) {
  const meta = HE_POSTS.find(p => p.slug === slug)
  if (!meta) return null

  let Content: React.ComponentType
  switch (slug) {
    case 'website-cost-2026':
      Content = (await import('../../../../content/blog/he/website-cost-2026.mdx')).default
      break
    case 'wordpress-vs-nextjs':
      Content = (await import('../../../../content/blog/he/wordpress-vs-nextjs.mdx')).default
      break
    case 'website-timeline':
      Content = (await import('../../../../content/blog/he/website-timeline.mdx')).default
      break
    case 'slow-website-fixes':
      Content = (await import('../../../../content/blog/he/slow-website-fixes.mdx')).default
      break
    case 'business-website-essentials':
      Content = (await import('../../../../content/blog/he/business-website-essentials.mdx')).default
      break
    case 'website-accessibility':
      Content = (await import('../../../../content/blog/he/website-accessibility.mdx')).default
      break
    case 'privacy-policy-cookies':
      Content = (await import('../../../../content/blog/he/privacy-policy-cookies.mdx')).default
      break
    default:
      return null
  }

  return { meta, Content }
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: `${post.meta.title} | RBapp`,
    description: post.meta.description,
  }
}

export function generateStaticParams() {
  return HE_POSTS.map(p => ({ lang: 'he', slug: p.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  if (lang !== 'he') notFound()

  const post = await getPost(slug)
  if (!post) notFound()

  const { meta, Content } = post

  return (
    <BlogPost meta={meta}>
      <Content />
    </BlogPost>
  )
}
