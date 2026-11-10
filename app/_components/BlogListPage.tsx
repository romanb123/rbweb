import Link from 'next/link'
import { HE_POSTS } from '../../content/blog/registry'

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogListPage() {
  return (
    <div className="blog-list-page">
      <nav className="blog-nav">
        <Link href="/he" className="blog-logo">RB</Link>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.8rem', color: '#555' }}>עברית</span>
      </nav>

      <section className="blog-list-hero">
        <h1 className="blog-list-title">בלוג <span>RBapp</span></h1>
        <p className="blog-list-subtitle">טיפים מעשיים לפיתוח אתרים, SEO ועולם הדיגיטל — מאת מפתח Full-Stack עם ניסיון בישראל</p>
      </section>

      <div className="blog-list-grid">
        {HE_POSTS.map(post => (
          <Link key={post.slug} href={`/he/blog/${post.slug}`} className="blog-card">
            <div className="blog-card-tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-card-tag">{tag}</span>
              ))}
            </div>
            <h2 className="blog-card-title">{post.title}</h2>
            <p className="blog-card-desc">{post.description}</p>
            <div className="blog-card-meta">
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime} קריאה</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
