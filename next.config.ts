import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,
      path: false,
      buffer: false,
      process: false
    };
    
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    });

    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'placehold.co',
      'iframe.mediadelivery.net',
      'assets.calendly.com', // Add Calendly assets domain
      'calendly.com' // Add Calendly main domain
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://assets.calendly.com https://calendly.com",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
              "img-src 'self' data: https: placehold.co iframe.mediadelivery.net assets.calendly.com calendly.com",
              "media-src 'self' blob: data: iframe.mediadelivery.net",
              "connect-src 'self' https://calendly.com https://assets.calendly.com iframe.mediadelivery.net",
              "frame-src https://calendly.com https://assets.calendly.com"
            ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://calendly.com'
          }
        ],
      },
    ];
  },
};

export default nextConfig;