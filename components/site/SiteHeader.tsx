import Link from "next/link";
import { company, navItems } from "@/lib/site/constants";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand" href="/" aria-label={`${company.shortName} home`}>
          <span>{company.displayName}</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
