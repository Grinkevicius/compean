import Image from "next/image";
import { images } from "@/lib/site/constants";

const panels = [
  { label: "Before", src: images.before, alt: "Front yard with patchy, dried-out lawn before service" },
  { label: "After", src: images.after, alt: "The same front yard with a green lawn and refreshed flower bed" },
];

export function BeforeAfter() {
  return (
    <div className="before-after">
      {panels.map((panel) => (
        <figure className="before-after__panel" key={panel.label}>
          <Image
            src={panel.src}
            alt={panel.alt}
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
          />
          <figcaption
            className={`before-after__tag before-after__tag--${panel.label.toLowerCase()}`}
          >
            {panel.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
