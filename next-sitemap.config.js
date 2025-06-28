// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hireatutornow.com',
  generateRobotsTxt: true,
  exclude: ['/404'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  // Manually include pages
  additionalPaths: async (config) => {
    return [
      { loc: '/', lastmod: new Date().toISOString() },
      { loc: '/services', lastmod: new Date().toISOString() },
      { loc: '/about-us', lastmod: new Date().toISOString() },
      { loc: '/faq', lastmod: new Date().toISOString() },
      { loc: '/register', lastmod: new Date().toISOString() },
      { loc: '/login', lastmod: new Date().toISOString() },
    ];
  },
};

