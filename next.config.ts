import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  env:{
    GITHUB_ID:"Ov23lioETLOSppXTXw5j",
    GITHUB_SECRET:"59c8157e25f2914e5831be335a12c56976d98056"
  },
  
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

