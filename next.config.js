/** @type {import('next').NextConfig} */

// const nextConfig = {
// };
//
// module.exports = nextConfig;

const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  }, // Other Next.js configuration ...
});
