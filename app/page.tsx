import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { getAllBlogPosts } from "@/lib/blog";
import { projects } from "@/lib/data";

export default async function HomePage() {
  const posts = (await getAllBlogPosts()).slice(0, 2);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Software Engineer
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Salman Sayyed
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Backend-focused engineer working with Node.js, TypeScript, AWS,
            PostgreSQL, Docker, and CI/CD.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">
            Currently on the Bliss Modernization team, helping move a legacy
            Java monolith for wholesale banknote trading toward a microservices
            architecture.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/blog">View Blogs</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              View Projects
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Blog" title="Recent writing" />
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
            href="/blog"
          >
            All posts <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4">
          {posts.map((post) => (
            <Link
              className="rounded-2xl border border-subtle bg-surface p-6 hover:border-primary/60"
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
              <h3 className="mt-3 text-xl font-bold tracking-tight">
                {post.title}
              </h3>
              <p className="mt-2 leading-relaxed text-text-secondary">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Projects" title="Selected work" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <div
              className="rounded-2xl border border-subtle bg-surface p-6"
              key={project.title}
            >
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    className="rounded-full border border-subtle px-3 py-1 text-xs text-text-secondary"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
