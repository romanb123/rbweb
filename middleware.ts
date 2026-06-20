import { NextRequest, NextResponse } from 'next/server'

const LANGS = ['he', 'en', 'ru', 'th'] as const
type Lang = typeof LANGS[number]

function detectLang(request: NextRequest): Lang {
  const header = request.headers.get('accept-language') ?? ''
  const preferred = header.split(',').map((s) => s.split(';')[0].trim().toLowerCase())

  for (const locale of preferred) {
    if (locale.startsWith('he')) return 'he'
    if (locale.startsWith('ru')) return 'ru'
    if (locale.startsWith('th')) return 'th'
  }
  return 'en'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip if already on a language route or API
  if (
    LANGS.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next')
  ) {
    return NextResponse.next()
  }

  // Only redirect root
  if (pathname === '/') {
    const lang = detectLang(request)
    return NextResponse.redirect(new URL(`/${lang}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/(he|en|ru|th)/:path*'],
}
