/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://theparthjariwala.com',
  generateRobotsTxt: true,
  exclude: ['/404'], // Add any pages you want to exclude
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'monthly',
  priority: 0.7,
} 