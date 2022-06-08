/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.business2community.com",
      "media.istockphoto.com",
      "burst.shopifycdn.com",
    ],
  },
};

module.exports = nextConfig;
