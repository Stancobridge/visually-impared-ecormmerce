/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com", "images.unsplash.com", "ng.jumia.is"],
  },
};

module.exports = nextConfig;
