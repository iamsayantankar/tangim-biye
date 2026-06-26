/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Linting is not part of this invitation build; skip during production builds.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
