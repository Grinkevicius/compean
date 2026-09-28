import Link from "next/link";
import { BrandLogo } from "@/components/site/BrandLogo";
import { SiteNav } from "@/components/site/SiteNav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <BrandLogo preload />

        <div className="site-header__desktop">
          <SiteNav label="Main navigation" />
          <Link className="button button--red" href="/contact">
            Get a Free Estimate
          </Link>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Open menu">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-menu__panel">
            <SiteNav className="mobile-nav" label="Mobile navigation" />
            <Link className="button button--red" href="/contact">
              Get a Free Estimate
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
