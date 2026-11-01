import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical notes about web engineering, backend systems, and cloud work."
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <section className="taste-reveal mx-auto w-full max-w-[1920px] px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        description="Technical notes and project writeups."
        level={1}
        split
        title="Writing"
      />

      <div className="mt-14 sm:mt-20">
        {posts.map((post) => (
          <article
            className="grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10"
            key={post.slug}
          >
            <div className="text-base text-text-secondary md:col-span-3">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </time>
              <p className="mt-1">{post.readingTime}</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                <Link
                  className="text-text-primary transition-colors hover:text-primary"
                  href={`/blog/${post.slug}`}
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-text-primary">
                {post.description}
              </p>
              {post.tags.length > 0 ? (
                <p className="mt-3 text-sm text-text-secondary">
                  {post.tags.join(", ")}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
