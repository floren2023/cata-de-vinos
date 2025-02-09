import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  
   // Configure `pageExtensions` to include markdown and MDX files
   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
   // Optionally, add any other Next.js config below
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'https://vercel.com/florens-projects-c4c4328b/~/stores/blob/store_dA5W64QcE4N0SaWK',
          port: '',
        },
      ],
    },
};


 
// Merge MDX config with Next.js config
export default nextConfig;

