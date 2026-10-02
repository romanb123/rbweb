import type { Metadata } from 'next'

export const runtime = 'edge'
import Script from 'next/script'
import Accessibility from './_components/Accessibility'
import CookieBanner from './_components/CookieBanner'
import './globals.css'

export const metadata: Metadata = {
  title: 'RBapp — מפתח Full-Stack | Web & App Developer',
  description:
    'Full-Stack Developer with 5+ years of experience. Building high-performance websites, mobile apps & SEO-optimized solutions. מפתח אתרים ואפליקציות מובייל.',
  keywords: ['web developer', 'app developer', 'full-stack', 'React', 'Next.js', 'WordPress', 'Israel', 'מפתח אתרים'],
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Rubik:ital,wght@0,400;0,500;0,700;0,800&family=Sarabun:wght@400;500;700;800&display=swap" rel="stylesheet" />
        {/* Google Consent Mode v2 — initializes denied before user chooses */}
        <Script id="gcm-init" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            wait_for_update: 500
          });
        `}</Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4RD1EM3RS7" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4RD1EM3RS7');
        `}</Script>
      </head>
      <body>
        {children}
        <Accessibility />
        <CookieBanner />
      </body>
    </html>
  )
}
