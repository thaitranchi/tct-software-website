import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ["http://localhost:3000"],
  },
  // Enables gzip compression for performance
  compress: true,
  
  // Deployment optimization
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
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

  // Runtime environment variables (optional)
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  serverRuntimeConfig: {
    SECRET_KEY: process.env.SECRET_KEY,
  },
};

export default nextConfig;
