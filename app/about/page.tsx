import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { experiences, skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "About Salman Sayyed, his engineering experience, and skills."
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[1920px] px-5 py-16 sm:px-8 sm:py-24">
      <section className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            description="Software engineer based in Mumbai, India."
            level={1}
            title="About"
          />
        </div>
        <div className="max-w-[66ch] space-y-5 text-base leading-relaxed text-text-primary lg:col-span-7 lg:col-start-6 lg:pt-3 sm:text-lg">
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
        </div>
      </section>

      <section className="taste-reveal mt-24 grid gap-8 lg:mt-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading title="Skills" />
        </div>
        <div className="space-y-10 lg:col-span-6 lg:col-start-7">
          {skillGroups.map((group) => (
            <div className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-6" key={group.title}>
              <h3 className="font-display text-xl font-semibold text-text-primary">
                {group.title}
              </h3>
              <p className="text-base leading-relaxed text-text-primary sm:text-lg">
                {group.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="taste-reveal mt-24 grid gap-8 lg:mt-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading title="Experience" />
        </div>
        <div className="space-y-12 lg:col-span-6 lg:col-start-7">
          {experiences.map((item) => (
            <article className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-6" key={item.period}>
              <p className="text-base text-text-secondary">{item.period}</p>
              <div>
                <h3 className="font-display text-xl font-semibold leading-tight text-text-primary sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-primary">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
