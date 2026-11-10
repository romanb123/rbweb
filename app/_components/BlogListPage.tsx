import Link from 'next/link'
import { HE_POSTS } from '../../content/blog/registry'

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogListPage() {
  return (
    <div className="blog-list-page">
      <nav className="nav nav--scrolled">
        <div className="nav-inner">
          <Link href="/he" className="logo-mark">RB</Link>
          <div className="nav-links">
            <Link href="/he" className="blog-nav-back">← דף הבית</Link>
          </div>
        </div>
      </nav>

      <div className="blog-hero">
        <div className="blog-hero-label">BLOG</div>
        <h1 className="blog-hero-title">
          מאמרים ו<span>טיפים</span>
        </h1>
        <p className="blog-hero-sub">
          פיתוח אתרים, SEO ועולם הדיגיטל — מאת מפתח Full-Stack עם ניסיון בישראל
        </p>
      </div>

      <div className="blog-posts-list">
        {HE_POSTS.map((post, i) => (
          <Link key={post.slug} href={`/he/blog/${post.slug}`} className="blog-post-row">
            <div className="blog-post-row-num">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="blog-post-row-body">
              <div className="blog-post-row-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
              <h2 className="blog-post-row-title">{post.title}</h2>
              <p className="blog-post-row-desc">{post.description}</p>
              <div className="blog-post-row-meta">
                <span>{formatDate(post.date)}</span>
                <span className="meta-dot">·</span>
                <span>{post.readTime} קריאה</span>
              </div>
            </div>
            <div className="blog-post-row-arrow">←</div>
          </Link>
        ))}
      </div>

      <div className="blog-cta-strip">
        <p>רוצה אתר מקצועי?</p>
        <Link href="/he#contact" className="blog-cta-btn">דבר איתי</Link>
      </div>
    </div>
  )
}
