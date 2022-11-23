/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["imgbox.com", "images2.imgbox.com", "a0.muscache.com"],
  },
};

module.exports = nextConfig;
