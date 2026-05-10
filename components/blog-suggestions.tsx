"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

function pickRandomPosts(posts: BlogSuggestion[], limit: number): BlogSuggestion[] {
  const shuffled = [...posts];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const current = shuffled[index];
    shuffled[index] = shuffled[randomIndex];
    shuffled[randomIndex] = current;
  }

  return shuffled.slice(0, limit);
}

export function BlogSuggestions({
  posts,
  limit = 2
}: BlogSuggestionsProps): React.JSX.Element | null {
  const [suggestions, setSuggestions] = useState<BlogSuggestion[]>([]);

  useEffect(() => {
    setSuggestions(pickRandomPosts(posts, limit));
  }, [posts, limit]);

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-subtle pt-10">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          More To Read
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Keep reading
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {suggestions.map((post) => (
          <Link
            className="rounded-2xl border border-subtle bg-surface p-6 transition-colors hover:border-primary/60"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <p className="text-sm text-text-secondary">
              {new Date(post.date).toLocaleDateString("en", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}{" "}
              / {post.readingTime}
            </p>
            <h3 className="mt-3 text-xl font-bold tracking-tight text-text-primary">
              {post.title}
            </h3>
            <p className="mt-2 leading-relaxed text-text-secondary">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}