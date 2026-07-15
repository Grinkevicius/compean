import { PageHeading } from "@/components/site/PageHeading";
import { company, hours } from "@/lib/site/constants";

export function ContactPageContent() {
  return (
    <>
      <PageHeading
        title="Contact Us"
        description="We are committed to giving excellent service to our customers. If you are interested, feel free to connect with us today."
      />

      <section className="section contact-section">
        <div className="shell">
          <div className="contact-grid">
            <form className="contact-form">
              <label>
                Name
                <input name="name" type="text" autoComplete="name" />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} />
              </label>
              <button className="button button--primary" type="submit">
                Send
              </button>
            </form>

            <aside className="contact-card">
              <h2>{company.name}</h2>
              <p>{company.phone}</p>
              <p>{company.email}</p>
              <p>
                Areas we service: {company.serviceAreas.join(", ")}
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
        </div>
      </section>
    </>
  );
}
