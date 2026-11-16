import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogSuggestions } from "@/components/blog-suggestions";
import { getAllBlogPosts, getBlogPost, getBlogSlugs } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
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

export default async function BlogPostPage({
  params
}: BlogPostPageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const slugs = getBlogSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const post = await getBlogPost(slug);
  const suggestedPosts = (await getAllBlogPosts())
    .filter((candidate) => candidate.slug !== slug)
    .map(({ slug: postSlug, title, description, date, readingTime }) => ({
      slug: postSlug,
      title,
      description,
      date,
      readingTime
    }));

  return (
    <article className="mx-auto w-full max-w-[1920px] px-5 py-16 sm:px-8 sm:py-24">
      <header className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="text-base text-text-secondary lg:col-span-3">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </time>
          <p className="mt-1">{post.readingTime}</p>
        </div>
        <div className="lg:col-span-8 lg:col-start-5">
          <h1 className="max-w-[16ch] text-balance font-display text-[clamp(2.75rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-text-primary">
            {post.title}
          </h1>
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-text-primary sm:text-xl">
            {post.description}
          </p>
          {post.tags.length > 0 ? (
            <p className="mt-5 text-base text-text-secondary">
              {post.tags.join(", ")}
            </p>
          ) : null}
        </div>
      </header>

      <div
        className="prose prose-lg mt-16 max-w-[68ch] prose-headings:tracking-tight prose-headings:text-text-primary prose-p:leading-relaxed prose-p:text-text-primary prose-strong:text-text-primary prose-li:text-text-primary prose-code:text-text-primary prose-pre:rounded-none prose-pre:p-5 dark:prose-invert lg:ml-[41.666667%]"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="lg:ml-[41.666667%]">
        <BlogSuggestions posts={suggestedPosts} />
      </div>
    </article>
  );
}
