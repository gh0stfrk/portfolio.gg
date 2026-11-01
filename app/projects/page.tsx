import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected backend, cloud, and data integration work."
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-[1920px] px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        description="Backend services and data workflows across financial platforms."
        level={1}
        split
        title="Selected work"
      />

      <div className="mt-14 sm:mt-20">
        {projects.map((project) => (
          <article
            className="grid gap-5 py-9 md:grid-cols-12 md:gap-8 md:py-12"
            key={project.title}
          >
            <div className="md:col-span-5">
              <p className="text-base text-text-secondary">{project.category}</p>
              <h2 className="mt-2 max-w-[18ch] font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
                {project.title}
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="max-w-[62ch] text-base leading-relaxed text-text-primary sm:text-lg">
                {project.description}
              </p>
              <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-text-secondary">
                {project.tech.join(", ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
