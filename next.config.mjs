/** @type {import('next').NextConfig} */

// "www.notion.so",
// "notion.so",
// "images.unsplash.com",
// "pbs.twimg.com",
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
      },
      {
        protocol: "https",
        hostname: "notion.so",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
