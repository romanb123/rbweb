import type { Metadata } from 'next'
import { Syne, IBM_Plex_Mono, Rubik, Sarabun } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

const rubik = Rubik({
  subsets: ['latin', 'hebrew', 'cyrillic'],
  variable: '--font-rubik',
  weight: ['400', '500', '700', '800'],
  display: 'swap',
})

const sarabun = Sarabun({
  subsets: ['thai', 'latin'],
  variable: '--font-sarabun',
  weight: ['400', '500', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RBapp — מפתח Full-Stack | Web & App Developer',
  description:
    'Full-Stack Developer with 5+ years of experience. Building high-performance websites, mobile apps & SEO-optimized solutions. מפתח אתרים ואפליקציות מובייל.',
  keywords: ['web developer', 'app developer', 'full-stack', 'React', 'Next.js', 'WordPress', 'Israel', 'מפתח אתרים'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${syne.variable} ${ibmPlexMono.variable} ${rubik.variable} ${sarabun.variable}`}
    >
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4RD1EM3RS7" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4RD1EM3RS7');
        `}</Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
