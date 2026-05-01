import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  date: string;
  tags: string[];
  description: string;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  readingTime: string;
  content: string;
};

function assertFrontmatter(data: Record<string, unknown>): BlogFrontmatter {
  return {
    title: String(data.title ?? "Untitled"),
    date: String(data.date ?? new Date().toISOString()),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    description: String(data.description ?? "")
  };
}

export function getBlogSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(file);
  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  return {
    ...assertFrontmatter(data),
    slug,
    readingTime: readingTime(content).text,
    content: processed.toString()
  };
}

export async function getAllBlogPosts() {
  const posts = await Promise.all(getBlogSlugs().map((slug) => getBlogPost(slug)));

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
