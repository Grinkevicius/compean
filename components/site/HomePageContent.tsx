import { PageHero } from "@/components/site/PageHero";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { company } from "@/lib/site/constants";

export function HomePageContent() {
  return (
    <>
      <PageHero
        eyebrow=""
        title={`Welcome to ${company.name}`}
        description="Our Customers Are Number One"
        actions={
          <>
            <a className="button button--primary" href="/products-services">
              Our Services
            </a>
            <a className="button button--light" href="/contact">
              Contact Us
            </a>
          </>
        }
      />

      <section className="section section--intro">
        <div className="shell image-split">
          <div className="feature-photo" />
          <div className="stack">
            <h2>Providing Reliable Landscaping Services</h2>
            <p>
              Turn to Compean Landscaping and Lawn Care for your yard work
              needs. Our lawn and landscaping services help turn gardens,
              lawns, and outdoor areas into clean, welcoming spaces.
            </p>
            <a className="button button--primary" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell centered narrow">
          <h2>Create Your Dream Landscape with Compean</h2>
          <div className="stack">
            <p>
              We provide landscape design, installation, lawn care, cleanup,
              and outdoor improvements for homes and businesses. From lush
              gardens to hardscape features, our team can help bring your
              outdoor vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell">
          <div className="section__heading centered">
            <h2>Our Services</h2>
          </div>
          <ServiceGrid linked />
        </div>
      </section>
    </>
  );
}
