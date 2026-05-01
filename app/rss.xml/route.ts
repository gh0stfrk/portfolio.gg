import { getAllBlogPosts } from "@/lib/blog";

const siteUrl = "https://salmansyyd.com";

export async function GET() {
  const posts = await getAllBlogPosts();
  const items = posts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${siteUrl}/blog/${post.slug}</link>
          <guid>${siteUrl}/blog/${post.slug}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description><![CDATA[${post.description}]]></description>
        </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Salman Sayyed</title>
        <link>${siteUrl}</link>
        <description>Technical writing by Salman Sayyed.</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml"
    }
  });
}
