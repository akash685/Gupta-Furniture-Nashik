/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
