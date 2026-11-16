import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { TumbleweedScene } from "@/components/tumbleweed-scene";
import { getAllBlogPosts } from "@/lib/blog";

const description =
  "Writing by Salman Sayyed on full stack engineering, TypeScript, AWS, and building with AI and Claude.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Writing | Salman Sayyed",
    description,
    url: "/blog",
    type: "website"
  }
};

export default async function BlogPage(): Promise<React.JSX.Element> {
  const posts = await getAllBlogPosts();

  return (
    <section className="taste-reveal mx-auto w-full max-w-[1920px] px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        description={
          posts.length > 0
            ? "Technical notes and project writeups."
            : "Nothing out here yet. Real posts are on the way."
        }
        level={1}
        split
        title="Writing"
      />

      {posts.length === 0 ? (
        <div className="mt-12 sm:mt-20">
          <TumbleweedScene />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[48ch] text-base leading-relaxed text-text-secondary">
              I&apos;m writing about full stack engineering, financial systems, and
              building with AI. Until then, the work speaks for itself.
            </p>
            <Link
              className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-primary hover:gap-3"
              href="/projects"
            >
              See projects <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-10 sm:mt-20">
          {posts.map((post) => (
            <article
              className="grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10"
              key={post.slug}
            >
              <div className="text-base text-text-secondary md:col-span-5">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </time>
                <p className="mt-1">{post.readingTime}</p>
              </div>
              <div className="md:col-span-6 md:col-start-7">
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
      )}
    </section>
  );
}
