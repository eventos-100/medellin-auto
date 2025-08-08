import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app",
  assetPrefix: "/app",
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.webflow.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uploads-ssl.webflow.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

// Initialize OpenNext for Cloudflare
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
