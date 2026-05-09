import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { experiences, skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "About Salman Sayyed, skills, and engineering experience."
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        description="Software engineer based in Mumbai, India. I work mainly on backend APIs, cloud services, and data workflows."
        eyebrow="About"
        title="Salman Sayyed"
      />

      <section className="mt-10 max-w-3xl space-y-4 leading-relaxed text-text-secondary">
        <p>
          I currently work as a Junior Software Developer at Travelex,
          contributing to backend modernization initiatives for financial
          systems and integration workflows across business-critical services.
        </p>
        <p>
          I started as a TRP Software Developer, where I built and maintained
          ETL jobs that processed transaction and financial data. My work today
          includes API development, AWS-based integrations, and reliable data
          delivery pipelines using Node.js, TypeScript, and cloud tooling.
        </p>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            className="rounded-2xl border border-subtle bg-surface p-6"
            key={group.title}
          >
            <h2 className="text-lg font-bold">{group.title}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  className="rounded-full border border-subtle px-3 py-1 text-sm text-text-secondary"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        <div className="mt-8 grid gap-6 border-l border-subtle pl-6">
          {experiences.map((item) => (
            <div className="relative" key={item.period}>
              <div className="absolute -left-[31px] top-1 size-3 rounded-full border border-primary bg-background" />
              <p className="text-sm font-semibold text-primary">{item.period}</p>
              <h3 className="mt-2 text-xl font-bold">{item.role}</h3>
              <p className="mt-2 max-w-3xl leading-relaxed text-text-secondary">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
