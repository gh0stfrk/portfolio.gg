import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroCtaMerge } from "@/components/hero-cta-merge";
import { NeonEagle } from "@/components/neon-eagle";
import { SectionHeading } from "@/components/section-heading";
import { getAllBlogPosts } from "@/lib/blog";
import { projects } from "@/lib/data";

export default async function HomePage() {
  const posts = (await getAllBlogPosts()).slice(0, 2);

  return (
    <div>
      <section className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[1920px] flex-col justify-between px-5 pb-8 pt-10 sm:px-8 sm:pt-14">
        <p className="max-w-[36ch] text-lg leading-relaxed text-text-primary sm:text-xl">
          Backend engineer in Mumbai, building services and data workflows for
          financial systems.
        </p>

        <h1 className="scroll-name self-center whitespace-nowrap py-12 font-display text-[clamp(2rem,11.3vw,11rem)] font-bold leading-[0.84] tracking-[-0.075em] text-text-primary">
          Salman Sayyed
        </h1>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-base text-text-secondary">Mumbai, India</p>
          <HeroCtaMerge
            blogHref="/blog"
            projectsHref="/projects"
            className="w-full sm:max-w-sm"
          />
        </div>
      </section>

      <section className="taste-reveal mx-auto w-full max-w-[1920px] px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          description="Financial platforms, cloud deployments, and data workflows."
            split
          title="Selected work"
        />
        <div className="mt-10 sm:mt-14">
          {projects.map((project) => (
            <article
              className="grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10"
              key={project.title}
            >
              <div className="md:col-span-5">
                <p className="text-base text-text-secondary">{project.category}</p>
                <h3 className="mt-2 max-w-[18ch] font-display text-2xl font-semibold leading-tight tracking-tight text-text-primary sm:text-3xl">
                  {project.title}
                </h3>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="max-w-[62ch] text-base leading-relaxed text-text-primary sm:text-lg">
                  {project.description}
                </p>
                <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-text-secondary sm:text-base">
                  {project.tech.join(", ")}
                </p>
              </div>
            </article>
          ))}
        </div>
        <Link
          className="mt-3 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-primary hover:gap-3"
          href="/projects"
        >
          Browse all projects <ArrowRight className="size-4" />
        </Link>
      </section>

      <section
        aria-label="Portfolio artwork"
        className="mx-auto w-full max-w-[1920px] px-5 sm:px-8"
      >
        <div className="mx-auto aspect-square w-full max-w-[880px]">
          <NeonEagle />
        </div>
      </section>

      <section className="taste-reveal mx-auto w-full max-w-[1920px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            description="Notes on readable software, frontend craft, and data systems."
            split
            title="Recent writing"
          />
          <Link
            className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-primary hover:gap-3"
            href="/blog"
          >
            All articles <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16">
          {posts.map((post) => (
            <article className="max-w-2xl" key={post.slug}>
              <p className="text-sm text-text-secondary">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </time>
              </p>
              <p className="mt-1 text-sm text-text-secondary">{post.readingTime}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
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
    </div>
  );
}
