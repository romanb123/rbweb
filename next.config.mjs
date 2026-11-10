import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'
import createMDX from '@next/mdx'

const withMDX = createMDX({})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

export default withMDX(nextConfig)
