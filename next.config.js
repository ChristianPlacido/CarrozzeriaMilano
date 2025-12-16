/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Richiesto per static export
  },
  trailingSlash: true, // Migliora compatibilità con GitHub Pages
}

module.exports = nextConfig
