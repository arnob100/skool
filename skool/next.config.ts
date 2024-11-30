import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.pexels.com'],  // Add this line to allow images from pexels.com
  },
};

export default nextConfig;

