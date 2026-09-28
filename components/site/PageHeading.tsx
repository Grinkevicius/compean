import Image from "next/image";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

type PageHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  large?: boolean;
};

export function PageHeading({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  actions,
  large = false,
}: PageHeadingProps) {
  return (
    <section className={`page-hero${large ? " page-hero--large" : ""}`}>
      <div className="page-hero__copy">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1>{title}</h1>
        {description ? <p className="page-hero__lead">{description}</p> : null}
        {actions ? <div className="actions">{actions}</div> : null}
      </div>
      {image ? (
        <div className="page-hero__media">
          <Image src={image} alt={imageAlt} fill preload sizes="(max-width: 860px) 100vw, 58vw" />
        </div>
      ) : null}
    </section>
  );
}
