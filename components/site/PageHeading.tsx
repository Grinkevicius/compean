type PageHeadingProps = {
  title: string;
  description?: string;
};

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <section className="page-heading">
      <div className="shell section__heading centered">
        <h1>{title}</h1>
        <hr />
        {description ? <p>{description}</p> : null}
      </div>
    </section>
  );
}
