import Link from 'next/link'

export const runtime = 'edge'

export const metadata = {
  title: 'הצהרת נגישות | RBapp',
  description: 'הצהרת הנגישות של אתר RBapp',
}

export default function AccessibilityPage() {
  return (
    <main
      style={{
        background: '#060606',
        color: '#e5e5e5',
        minHeight: '100vh',
        fontFamily: "'IBM Plex Mono', monospace",
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <Link
          href="/"
          style={{
            color: '#c8ff00',
            textDecoration: 'none',
            fontSize: 13,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            marginBottom: 48,
          }}
        >
          ← חזור לאתר
        </Link>

        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            marginBottom: 8,
          }}
        >
          הצהרת נגישות
        </h1>
        <p style={{ color: '#555', fontSize: 13, marginBottom: 48 }}>
          עודכן לאחרונה: ספטמבר 2025
        </p>

        <Section title="1. מחויבות לנגישות">
          <p>
            RBapp מחויב לנגישות דיגיטלית עבור אנשים עם מוגבלויות. אנו שואפים לעמוד
            בדרישות תקן WCAG 2.1 ברמה AA, ולספק חוויה שווה לכלל המשתמשים.
          </p>
        </Section>

        <Section title="2. תכונות נגישות באתר">
          <ul>
            <li>תמיכה מלאה בניווט מקלדת — כל הרכיבים האינטראקטיביים נגישים ללא עכבר</li>
            <li>תמיכה בקורא מסך דרך סמנטיקת HTML ותגיות ARIA</li>
            <li>אפשרות להגדלת גודל הטקסט עד 200% ללא אובדן תוכן</li>
            <li>ניגודיות צבע עומדת בתקן WCAG AA</li>
            <li>תמיכה בעברית ובמצב RTL מלא</li>
            <li>אפשרות להפחתת תנועה עבור משתמשים רגישים (prefers-reduced-motion)</li>
            <li>פאנל נגישות מובנה עם אפשרויות: ניגוד גבוה, גווני אפור, הגדלת טקסט, הדגשת קישורים</li>
          </ul>
        </Section>

        <Section title="3. תקינות">
          <p>
            האתר נבנה בהתאם להנחיות{' '}
            <a
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#c8ff00' }}
            >
              WCAG 2.1
            </a>{' '}
            ותקן הנגישות הישראלי IS 5568. בדיקות נגישות מתבצעות בעת עדכוני האתר.
          </p>
        </Section>

        <Section title="4. מגבלות ידועות">
          <p>
            תוכן מוטמע של אתרים חיצוניים (כגון תצוגת אתרים בכרטיסי פרויקטים) עשוי
            שלא לעמוד בתקני הנגישות שלנו, כיוון שאינו בשליטתנו הישירה.
          </p>
        </Section>

        <Section title="5. משוב ויצירת קשר">
          <p>
            נתקלת בבעיית נגישות? נשמח לשמוע. אנא פנה אלינו:
          </p>
          <ul>
            <li>
              דואר אלקטרוני:{' '}
              <a href="mailto:romaflz73@gmail.com" style={{ color: '#c8ff00' }}>
                romaflz73@gmail.com
              </a>
            </li>
          </ul>
          <p>נשתדל להגיב תוך 5 ימי עסקים.</p>
        </Section>

        <Section title="6. אכיפה">
          <p>
            אם לא קיבלת מענה מספק, ניתן לפנות לנציבות שוויון זכויות לאנשים עם מוגבלות
            במשרד המשפטים.
          </p>
        </Section>

        <div
          style={{
            marginTop: 64,
            paddingTop: 32,
            borderTop: '1px solid #1a1a1a',
            color: '#444',
            fontSize: 12,
          }}
        >
          לשאלות: <a href="mailto:romaflz73@gmail.com" style={{ color: '#c8ff00' }}>romaflz73@gmail.com</a>
        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 18,
          fontWeight: 700,
          color: '#c8ff00',
          marginBottom: 12,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          color: '#aaa',
          fontSize: 14,
          lineHeight: 1.8,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {children}
      </div>
    </section>
  )
}
