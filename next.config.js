/** @type {import('next').NextConfig} */
// const nextConfig = {}
const withNextIntl = require('next-intl/plugin')("./i18.ts");
 
module.exports = withNextIntl({
  // Other Next.js configuration ...
});