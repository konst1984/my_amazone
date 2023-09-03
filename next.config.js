/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com"
    ]
  },
  experimental: {
    typedRoutes: false
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
