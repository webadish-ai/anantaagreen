import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Technology moved under the CBG service it actually describes.
        source: "/technology",
        destination: "/services/cbg-plant/technology",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
