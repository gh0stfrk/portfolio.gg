import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPost, getBlogSlugs } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getBlogPost(slug);

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
        tags: post.tags
      }
    };
  } catch {
    return {
      title: "Post not found"
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const slugs = getBlogSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const post = await getBlogPost(slug);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
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
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-text-secondary">
          {post.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              className="rounded-full border border-subtle bg-surface px-3 py-1 text-xs font-medium text-text-secondary"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:text-text-primary prose-p:leading-relaxed prose-p:text-text-secondary prose-strong:text-text-primary prose-li:text-text-secondary prose-code:text-text-primary prose-pre:rounded-2xl prose-pre:p-5 dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
