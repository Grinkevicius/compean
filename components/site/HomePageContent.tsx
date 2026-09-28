import Link from "next/link";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeading } from "@/components/site/PageHeading";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { ServiceCards } from "@/components/site/ServiceCards";
import { images } from "@/lib/site/constants";

export function HomePageContent() {
  return (
    <>
      <PageHeading
        large
        eyebrow="Landscaping & Property Care"
        title="A property you’re proud to come home to."
        description="Thoughtful landscaping. Reliable maintenance. Beautiful outdoor spaces."
        image={images.hero}
        imageAlt="Landscaped home with palm trees, trimmed hedges, and a green lawn"
        actions={
          <>
            <Link className="button button--red" href="/contact">
              Get a Free Estimate
            </Link>
            <Link className="text-link" href="/services">
              Explore Our Services <span aria-hidden="true">→</span>
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="shell">
          <SectionEyebrow>Our Services</SectionEyebrow>
          <h2 className="section-title">Your yard. Our attention to detail.</h2>
          <ServiceCards />
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell">
          <div className="section-split-heading">
            <div>
              <SectionEyebrow>Recent Work</SectionEyebrow>
              <h2 className="section-title">See the difference.</h2>
            </div>
            <p>
              Thoughtful care. Lasting results.
              <br />
              The same home. A whole new look.
            </p>
          </div>
          <BeforeAfter />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
