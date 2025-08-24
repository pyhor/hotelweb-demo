/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/assets/:path*',
      },
    ];
  },
};

module.exports = nextConfig;