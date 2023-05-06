/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },
};

module.exports = nextConfig;
