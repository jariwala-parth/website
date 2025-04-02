/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://theparthjariwala.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  generateIndexSitemap: false,
} 