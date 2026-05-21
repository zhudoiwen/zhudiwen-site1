import { withContentCollections } from "@content-collections/next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Initialize OpenNext for Cloudflare in dev mode
initOpenNextCloudflareForDev();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "react-markdown"],
    webVitalsAttribution: ["CLS", "LCP", "FID"],
  },
  allowedDevOrigins: ["*"],
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: "standalone",
  distDir: ".next",
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; media-src 'self' blob:; sandbox allow-same-origin;",
  },
};

export default withContentCollections(nextConfig);
