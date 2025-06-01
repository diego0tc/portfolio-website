import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true // Required for static export
  },
  // We'll add MDX support later once dependency issues are resolved
};

export default nextConfig;
