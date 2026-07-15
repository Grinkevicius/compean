import { PageHeading } from "@/components/site/PageHeading";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { company } from "@/lib/site/constants";

export function ServicesPageContent() {
  return (
    <>
      <PageHeading
        title="Products/Services"
        description="Lawn care, landscaping, cleanup, masonry, pressure washing, aeration, and fertilizing."
      />

      <section className="section services-intro">
        <div className="shell services-intro__grid">
          <div className="services-intro__photo" aria-label="Front yard garden" />
          <div className="services-intro__copy">
            <h2>For a Beautiful Yard</h2>
            <p>
              Trust Compean Landscaping and Lawn Care in taking care of your
              garden. We specialize in landscaping services of many kinds, from
              basic lawn care to masonry work.
            </p>
            <p>
              THE AREAS WE SERVICE ARE {company.serviceAreas.join(", ")}
            </p>
            <a className="button button--primary" href="/contact">
              Schedule Now
            </a>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell">
          <div className="section__heading centered">
            <h2>Services</h2>
            <hr />
          </div>
          <ServiceGrid variant="circle" />
        </div>
      </section>
    </>
  );
}
