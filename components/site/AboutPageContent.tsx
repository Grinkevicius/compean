import Link from "next/link";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeading } from "@/components/site/PageHeading";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { company, images } from "@/lib/site/constants";

const values = [
  {
    title: "Dependable",
    description: "We show up when we say we will and leave every property cleaner than we found it.",
  },
  {
    title: "Detail-minded",
    description: "Crisp edges, clean beds, and finished work you notice the moment you pull in.",
  },
  {
    title: "Local",
    description: `Proudly serving ${company.serviceAreas.join(", ")} and the neighborhoods around them.`,
  },
];

export function AboutPageContent() {
  return (
    <>
      <PageHeading
        eyebrow="About Compean"
        title="Turning yards around, one property at a time."
        description="Honest, reliable service built around people’s homes and the outdoor spaces they love."
        image={images.about}
        imageAlt="Freshly striped lawn in front of a white house"
      />

      <section className="section">
        <div className="shell about-grid">
          <div>
            <SectionEyebrow>Who We Are</SectionEyebrow>
            <h2 className="section-title">Care you can count on.</h2>
          </div>
          <div className="prose">
            <p>
              {company.name} transforms yards with honest, dependable work. From
              weekly mowing to full landscape refreshes, our focus is simple:
              make your property look its best and keep it that way.
            </p>
            <p>
              We treat every lawn like it&apos;s our own, communicate clearly,
              and stand behind the results.
            </p>
            <Link className="button button--red" href="/contact">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell">
          <SectionEyebrow>Why Compean</SectionEyebrow>
          <h2 className="section-title">What sets us apart.</h2>
          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
