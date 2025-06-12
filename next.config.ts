import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,
      path: false,
      buffer: false,
      process: false
    };
    
    // Add GLB/GLTF loader support if needed
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    });

    return config;
  },
  // Enable React Strict Mode
  reactStrictMode: true,
  // Add images domain if loading textures from external sources
  images: {
    domains: ['images.unsplash.com'], // add your domains here if needed
  },
};

export default nextConfig;