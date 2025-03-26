import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
  },
  // Enables gzip compression for performance
  compress: true,
  
  // Deployment optimization
  output: "standalone",

  // Runtime environment variables (optional)
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  serverRuntimeConfig: {
    SECRET_KEY: process.env.SECRET_KEY,
  },
};

export default nextConfig;
