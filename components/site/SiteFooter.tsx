import { BrandLogo } from "@/components/site/BrandLogo";
import { SiteNav } from "@/components/site/SiteNav";
import { company } from "@/lib/site/constants";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <BrandLogo size={72} />
        <SiteNav className="footer-nav" label="Footer navigation" />
      </div>
      <div className="shell site-footer__meta">
        <p>
          <a href={`tel:${company.phone.replace(/\D/g, "")}`}>{company.phone}</a>
          <span aria-hidden="true"> · </span>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
        <p>
          © 2026 {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
