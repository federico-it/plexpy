/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.itashare.com',
      },
      {
        protocol: 'https',
        hostname: 'viatesting.files.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: 'plexpy.com',
      },
    ],
  },
}
