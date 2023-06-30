/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache")
const isProduction = process.env.NODE_ENV === "production"

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: !isProduction,
  runtimeCaching,
  publicExcludes: ["!robots.txt", "!sitemap.xml.gz"],
})

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.multiavatar.com",
        pathname: "/**",
      },
    ],
  },
})

module.exports = nextConfig
