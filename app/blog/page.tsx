import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Technical notes about web engineering, backend systems, and cloud work."
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        description="Technical notes and project writeups."
        eyebrow="Blog"
        title="Writing"
      />
      <div className="mt-10 grid gap-4">
        {posts.map((post) => (
          <Link
            className="group rounded-2xl border border-subtle bg-surface p-6 hover:border-primary/60"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight group-hover:text-primary">
              {post.title}
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-text-secondary">
              {post.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  className="rounded-full border border-subtle px-3 py-1 text-xs font-medium text-text-secondary"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
