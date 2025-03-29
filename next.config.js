/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    DEFAULT_THEME: (['dark', 'light'].includes(process.env.DEFAULT_THEME)) ? process.env.DEFAULT_THEME : 'dark'
  }
};

module.exports = nextConfig; 