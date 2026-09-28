import { PageHeading } from "@/components/site/PageHeading";
import { company, hours, services } from "@/lib/site/constants";

export function ContactPageContent() {
  return (
    <>
      <PageHeading
        eyebrow="Contact"
        title="Let’s talk about your yard."
        description="Tell us a little about your property and we’ll get back to you with a free estimate."
      />

      <section className="section section--tight">
        <div className="shell contact-grid">
          <form className="contact-form">
            <div className="contact-form__row">
              <label>
                Name
                <input name="name" type="text" autoComplete="name" />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
            </div>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Service
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows={5} />
            </label>
            <button className="button button--red" type="submit">
              Request Free Estimate
            </button>
          </form>

          <aside className="contact-card">
            <h2>{company.name}</h2>
            <p>
              <a href={`tel:${company.phone.replace(/\D/g, "")}`}>{company.phone}</a>
            </p>
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p className="contact-card__areas">
              Serving {company.serviceAreas.join(", ")}
            </p>

            <h3>Hours</h3>
            <dl className="hours">
              {hours.map(([day, time]) => (
                <div key={day}>
                  <dt>{day}</dt>
                  <dd>{time}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
