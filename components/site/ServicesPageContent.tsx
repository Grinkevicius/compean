import { PageHero } from "@/components/site/PageHero";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { company } from "@/lib/site/constants";

export function ServicesPageContent() {
  return (
    <>
      <PageHero
        eyebrow="For a beautiful yard"
        title="Lawn and landscape services for every season."
        description={`Trust Compean in taking care of your garden. We specialize in landscaping services of many kinds, from basic lawn care to masonry work. The areas we service are ${company.serviceAreas.join(", ")}.`}
        imageClass="hero--services"
        actions={
          <a className="button button--primary" href="/contact">
            Schedule Now
          </a>
        }
      />

      <section className="section">
        <div className="shell">
          <div className="section__heading centered">
            <h2>PRODUCTS/SERVICES</h2>
            <hr />
          </div>
          <ServiceGrid />
        </div>
      </section>
    </>
  );
}
