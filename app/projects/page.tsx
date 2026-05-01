import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and technical areas."
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        description="Current work and engineering areas."
        eyebrow="Projects"
        title="Projects"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            className="flex min-h-72 flex-col rounded-2xl border border-subtle bg-surface p-6"
            key={project.title}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-bold tracking-tight">
                {project.title}
              </h2>
              <Link
                aria-label={`Open ${project.title}`}
                className="rounded-full border border-subtle p-2 text-text-secondary hover:border-primary/60 hover:text-primary"
                href={project.href}
              >
                <ExternalLink className="size-4" />
              </Link>
            </div>
            <p className="mt-4 flex-1 leading-relaxed text-text-secondary">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  className="rounded-full border border-subtle px-3 py-1 text-xs font-medium text-text-secondary"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
