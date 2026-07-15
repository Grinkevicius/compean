type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageClass?: string;
  actions?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageClass = "hero--home",
  actions,
}: PageHeroProps) {
  return (
    <section className={`hero ${imageClass}`}>
      <div className="shell hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {actions ? <div className="actions">{actions}</div> : null}
      </div>
    </section>
  );
}
