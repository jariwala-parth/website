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
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: '/',
      },
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
      }
    ],
    additionalSitemaps: [],
  },
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  generateIndexSitemap: false,
} 