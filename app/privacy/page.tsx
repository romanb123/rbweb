import Link from 'next/link'

export const metadata = {
  title: 'מדיניות פרטיות | RBapp',
  description: 'מדיניות הפרטיות של RBapp',
}

export default function PrivacyPage() {
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
          מדיניות פרטיות
        </h1>
        <p style={{ color: '#555', fontSize: 13, marginBottom: 48 }}>
          עודכן לאחרונה: ספטמבר 2025
        </p>

        <Section title="1. מבוא">
          <p>
            ברוכים הבאים לאתר RBapp. אנו מתייחסים לפרטיות המשתמשים ברצינות רבה.
            מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלך.
          </p>
        </Section>

        <Section title="2. מידע שנאסף">
          <p>אנו אוספים מידע שאתה מספק ישירות, לרבות:</p>
          <ul>
            <li>שם מלא</li>
            <li>כתובת דואר אלקטרוני</li>
            <li>תוכן ההודעה שנשלחת דרך טופס יצירת הקשר</li>
          </ul>
          <p>
            אנו גם אוספים נתונים אנונימיים על שימוש באתר באמצעות Google Analytics 4,
            כגון עמודים שנצפו, זמן שהייה ומדינת מוצא.
          </p>
        </Section>

        <Section title="3. שימוש במידע">
          <p>המידע שנאסף משמש אך ורק למטרות הבאות:</p>
          <ul>
            <li>מענה לפניות ובקשות שנשלחו דרך טופס יצירת הקשר</li>
            <li>שיפור חוויית המשתמש באתר</li>
            <li>ניתוח תנועה סטטיסטית לצורך שיפור האתר</li>
          </ul>
        </Section>

        <Section title="4. שיתוף מידע">
          <p>
            אנו לא מוכרים, סוחרים, או מעבירים את פרטייך לגורמים חיצוניים, למעט
            ספקי שירות הפועלים בשמנו (כגון Google Analytics) ובכפוף למדיניות
            הפרטיות שלהם.
          </p>
        </Section>

        <Section title="5. קוקיז וטכנולוגיות מעקב">
          <p>
            האתר משתמש ב-cookies אנונימיים של Google Analytics לצורך ניתוח תנועה.
            באפשרותך לנטרל cookies בהגדרות הדפדפן שלך.
          </p>
        </Section>

        <Section title="6. אבטחת מידע">
          <p>
            אנו נוקטים באמצעים סבירים להגנה על המידע שמסרת לנו. עם זאת, אין
            באפשרותנו להבטיח אבטחה מוחלטת של מידע המועבר דרך האינטרנט.
          </p>
        </Section>

        <Section title="7. זכויותיך">
          <p>
            בהתאם לחוק הגנת הפרטיות הישראלי, יש לך הזכות לבקש גישה, תיקון או מחיקה
            של המידע האישי שברשותנו. לפניות בנושא:{' '}
            <a href="mailto:romaflz73@gmail.com" style={{ color: '#c8ff00' }}>
              romaflz73@gmail.com
            </a>
          </p>
        </Section>

        <Section title="8. שינויים במדיניות">
          <p>
            אנו שומרים לעצמנו את הזכות לעדכן מדיניות זו מעת לעת. שינויים מהותיים
            יפורסמו בעמוד זה.
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
