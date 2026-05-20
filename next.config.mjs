import { withContentCollections } from "@content-collections/next";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "react-markdown"],
    webVitalsAttribution: ["CLS", "LCP", "FID"],
  },
  allowedDevOrigins: ["*"],
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: "standalone",
  distDir: ".next",
  trailingSlash: true,
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; media-src 'self' blob:; sandbox allow-same-origin;",
  },
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "video/mp4",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withContentCollections(nextConfig);