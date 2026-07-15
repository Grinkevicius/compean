import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/services",
        destination: "/products-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
