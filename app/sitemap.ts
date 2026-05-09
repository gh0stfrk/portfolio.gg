import type { MetadataRoute } from "next";
import { getBlogPostMeta } from "@/lib/blog";

const siteUrl = "https://salmansyyd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/blog", "/projects", "/about", "/contact"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date()
    })
  );

  const posts = getBlogPostMeta().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...routes, ...posts];
}
