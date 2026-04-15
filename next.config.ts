import type { NextConfig } from "next";
import withSerwist from "@serwist/next";

const withSerwistConfig = withSerwist({
  // Your PWA configuration
  swDest: "public/sw.js", // Path where the compiled service worker will be output
  swSrc: "app/sw.ts", // Path to your custom service worker source file
  disable: process.env.NODE_ENV === "production", // Disable PWA in development
});
const nextConfig: NextConfig = withSerwistConfig({
  turbopack: {},

  // Enables gzip compression for performance
  compress: true,
  
  // Deployment optimization
  output: "standalone",
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
      // If your PROJECTS_DATA contains images from other domains, 
      // you should add them here as well.
    ],
  },

  // Next.js 15 removed publicRuntimeConfig, serverRuntimeConfig, and allowedDevOrigins.
  // Use environment variables directly (e.g., process.env.NEXT_PUBLIC_API_URL) for runtime configuration.
});

export default nextConfig; // Export the wrapped config
