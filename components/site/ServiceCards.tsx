import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site/constants";

export function ServiceCards() {
  return (
    <div className="service-cards">
      {services.map((service) => (
        <article className="service-card" key={service.slug}>
          <div className="service-card__image">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 860px) 100vw, 33vw"
            />
          </div>
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
          <Link className="text-link" href={`/services#${service.slug}`}>
            Learn More <span aria-hidden="true">→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
