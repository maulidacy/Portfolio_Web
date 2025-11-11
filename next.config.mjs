/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizePackageImports: ["lucide-react", "framer-motion"] },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // gambar hero (Pinterest)
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "drive.google.com" },
      { protocol: "https", hostname: "**" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
