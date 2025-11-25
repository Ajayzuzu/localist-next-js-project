import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.localists.com",
        pathname: "/admin/storage/app/public/images/**",
      },
    ],
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
