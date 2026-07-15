import { services } from "@/lib/site/constants";

type ServiceGridProps = {
  linked?: boolean;
  variant?: "default" | "circle";
};

export function ServiceGrid({ linked = false, variant = "default" }: ServiceGridProps) {
  return (
    <div className={`service-grid service-grid--${variant}`}>
      {services.map((service, index) => {
        const content = (
          <>
            <div className={`service-image service-image--${index + 1}`} />
            <span>{service.title}</span>
            <p>{service.description}</p>
          </>
        );

        if (linked) {
          return (
            <a className="service-tile" href="/products-services" key={service.title}>
              {content}
            </a>
          );
        }

        return (
          <article className="service-tile" key={service.title}>
            {content}
          </article>
        );
      })}
    </div>
  );
}
