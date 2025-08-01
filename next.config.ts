import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // 🚫 Skips ESLint build errors
  },
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Skips TS errors (if any)
  },
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "sdmntprwestus.oaiusercontent.com" },
      { hostname: "media1.popsugar-assets.com" },
      { hostname: "images.squarespace-cdn.com" },
    ],
  },
};

export default nextConfig;