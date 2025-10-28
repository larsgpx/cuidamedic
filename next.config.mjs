/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'refined-candy-35961bcadd.strapiapp.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
