import Link from "next/link";

type CtaBandProps = {
  title?: string;
};

export function CtaBand({ title = "Ready to refresh your outdoor space?" }: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="shell cta-band__inner">
        <h2>{title}</h2>
        <Link className="button button--red button--lg" href="/contact">
          Get a Free Estimate
        </Link>
      </div>
    </section>
  );
}
