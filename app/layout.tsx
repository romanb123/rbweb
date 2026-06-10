import type { Metadata } from 'next'
import { Syne, IBM_Plex_Mono, Rubik, Sarabun } from 'next/font/google'
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
  title: 'RBweb — מפתח Full-Stack | Web & App Developer',
  description:
    'Roman Besiakov — מפתח Full-Stack. בניית אתרים ואפליקציות מובייל. Full-Stack Developer building high-performance websites and apps.',
  keywords: ['web developer', 'app developer', 'full-stack', 'React', 'Next.js', 'WordPress', 'Israel', 'מפתח אתרים'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${syne.variable} ${ibmPlexMono.variable} ${rubik.variable} ${sarabun.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
