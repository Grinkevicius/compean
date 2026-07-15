import { PageHeading } from "@/components/site/PageHeading";
import { company } from "@/lib/site/constants";

export function AboutPageContent() {
  return (
    <>
      <PageHeading
        title="About"
        description="Turning gardens around with dependable landscaping and lawn care."
      />

      <section className="section about-intro">
        <div className="shell about-grid">
          <div className="about-copy">
            <h2>Turning Gardens Around</h2>
            <div className="stack">
              <p>
                Compean Landscaping and Lawn Care transforms yards with honest,
                reliable service. Our work is built around the beauty of
                outdoors, gardens, and people&apos;s homes across the local
                communities we serve.
              </p>
              <p>
                You can count on our services to be dependable, practical, and
                focused on making your outdoor spaces feel cared for.
              </p>
            </div>
          </div>
          <div className="about-photo" aria-label="Flower garden path" />
        </div>
      </section>

      <section className="section section--muted service-area-section">
        <div className="shell centered narrow">
          <h3>THE AREAS WE SERVICE ARE</h3>
          <p>{company.serviceAreas.join(", ")}</p>
          <a className="button button--primary" href="/contact">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
