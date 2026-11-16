import type { NextConfig } from "next";

// Old placeholder posts that Google may have indexed; send them to the blog index.
const retiredPostSlugs = [
  "designing-readable-systems",
  "frontend-polish-that-scales",
  "static-content-with-nextjs"
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return retiredPostSlugs.map((slug) => ({
      source: `/blog/${slug}`,
      destination: "/blog",
      permanent: true
    }));
  }
};

export default nextConfig;
