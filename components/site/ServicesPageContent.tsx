import { ServiceGrid } from "@/components/site/ServiceGrid";
import { company } from "@/lib/site/constants";

export function ServicesPageContent() {
  return (
    <>
      <section className="section services-intro">
        <div className="shell services-intro__grid">
          <div className="services-intro__photo" aria-label="Front yard garden" />
          <div className="services-intro__copy">
            <h1>For a Beautiful Yard</h1>
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
            <h2>PRODUCTS/SERVICES</h2>
            <hr />
          </div>
          <ServiceGrid variant="circle" />
        </div>
      </section>
    </>
  );
}
