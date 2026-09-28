import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeading } from "@/components/site/PageHeading";
import { company, images, services } from "@/lib/site/constants";

export function ServicesPageContent() {
  return (
    <>
      <PageHeading
        eyebrow="Our Services"
        title="Everything your property needs, handled with care."
        description={`Lawn care, landscaping, and property maintenance for homes across ${company.serviceAreas.join(", ")}.`}
        image={images.servicesHero}
        imageAlt="Tropical garden path lined with palms and green lawn"
      />

      <section className="section">
        <div className="shell service-rows">
          {services.map((service, index) => (
            <article
              className={`service-row${index % 2 ? " service-row--reverse" : ""}`}
              id={service.slug}
              key={service.slug}
            >
              <div className="service-row__image">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
              </div>
              <div className="service-row__copy">
                <span className="service-row__index">0{index + 1}</span>
                <h2>{service.title}</h2>
                <p className="service-row__summary">{service.summary}</p>
                <p>{service.description}</p>
                <ul className="check-list">
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="text-link" href="/contact">
                  Request an estimate <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
