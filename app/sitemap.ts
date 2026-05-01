import type { MetadataRoute } from "next";
import { getBlogSlugs } from "@/lib/blog";

const siteUrl = "https://salmansyyd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/blog", "/projects", "/about", "/contact"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date()
    })
  );

  const posts = getBlogSlugs().map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date()
  }));

  return [...routes, ...posts];
}
