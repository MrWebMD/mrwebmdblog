/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['strapi.mrwebmd.com']
  },
  env: {
    STRAPI_API_URL: "strapi.mrwebmd.com",
    STRAPI_API_URL_INTERNAL: "https://strapi.mrwebmd.com"
  }
}

module.exports = nextConfig
