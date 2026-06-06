import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "intikicourier.com" }],
        destination: "https://www.intikicourier.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
