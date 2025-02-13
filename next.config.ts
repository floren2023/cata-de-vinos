import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  
   // Configure `pageExtensions` to include markdown and MDX files
   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
   // Optionally, add any other Next.js config below
   images: {  
          remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
           pathname: '/**'
        },
      ],

      formats: ['image/avif', 'image/webp',],
      minimumCacheTTL: 60, // 1 minute cache for images
    },
};


 
// Merge MDX config with Next.js config
export default nextConfig;

