import Link from "next/link";

export type BlogSuggestion = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
};

type BlogSuggestionsProps = {
  posts: BlogSuggestion[];
  limit?: number;
};

export function BlogSuggestions({
  posts,
  limit = 2
}: BlogSuggestionsProps): React.JSX.Element | null {
  const suggestions = posts.slice(0, limit);

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <section className="taste-reveal mt-24">
      <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight text-text-primary">
        Keep reading
      </h2>
      <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {suggestions.map((post) => (
          <article className="max-w-2xl" key={post.slug}>
            <p className="text-sm text-text-secondary">{post.readingTime}</p>
            <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
              <Link
                className="text-text-primary transition-colors hover:text-primary"
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </Link>
            </h3>
            <p className="mt-3 text-base leading-relaxed text-text-primary">
              {post.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
