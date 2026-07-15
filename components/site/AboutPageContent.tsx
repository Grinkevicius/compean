import { company } from "@/lib/site/constants";

export function AboutPageContent() {
  return (
    <>
      <section className="section page-title">
        <div className="shell centered narrow">
          <h1>ABOUT</h1>
          <hr />
        </div>
      </section>

      <section className="section section--compact">
        <div className="shell centered narrow">
          <h2>Turning Gardens Around</h2>
          <div className="stack">
            <p>
              Compean Landscaping and Lawn Care transforms yards with honest,
              reliable service. We care for the beauty of outdoor spaces,
              gardens, and homes with practical lawn care, cleanup, and
              landscaping work.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--compact">
        <div className="shell centered narrow">
          <h3>The Areas We Service Are</h3>
          <h2>{company.serviceAreas.join(", ")}</h2>
          <a className="button button--primary" href="/contact">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
