/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true.valueOf,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
