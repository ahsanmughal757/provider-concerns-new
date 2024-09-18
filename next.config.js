/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap.xml",
      },
    ];
  },
  swcMinify: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimizeFonts: false,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  // transpilePackages: ['swiper'] 
};

module.exports = nextConfig;
