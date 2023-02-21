/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
}

module.exports = {
  nextConfig,
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
        hostname: '**.bitmat.it',
      },
    ],
  },
}
