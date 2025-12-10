import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dogsapi.origamid.dev",
      },
    ],
  },
};

export default nextConfig;
