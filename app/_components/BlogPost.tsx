import Link from 'next/link'
import SiteNav from './SiteNav'
import type { PostMeta } from '../../content/blog/registry'

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })
}

interface Props {
  meta: PostMeta
  children: React.ReactNode
}

export default function BlogPost({ meta, children }: Props) {
  return (
    <div className="blog-post-page">
      <SiteNav />
      <div className="blog-post-back-wrap">
        <Link href="/he/blog" className="blog-nav-back">&#8592; חזרה לבלוג</Link>
      </div>

      <header className="blog-post-header">
        <div className="blog-post-tags">
          {meta.tags.map(tag => (
            <span key={tag} className="blog-post-tag">{tag}</span>
          ))}
        </div>
        <h1 className="blog-post-title">{meta.title}</h1>
        <div className="blog-post-meta">
          <span>{formatDate(meta.date)}</span>
          <span>{meta.readTime} קריאה</span>
        </div>
      </header>

      <article className="blog-post-body">
        {children}
      </article>

      <div className="blog-cta" style={{ margin: '0 2rem 4rem', maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2>מוכן לבנות את האתר שלך?</h2>
        <p>צור קשר עכשיו לקבלת ייעוץ חינם והצעת מחיר מותאמת אישית.</p>
        <a href="/#contact" className="blog-cta-btn">דבר איתי עכשיו</a>
      </div>
    </div>
  )
}
