/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
}
export default nextConfig
