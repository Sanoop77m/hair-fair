/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable Next.js Image Optimization at runtime (Netlify without plugin)
    // so local and remote images render without the /_next/image loader.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
