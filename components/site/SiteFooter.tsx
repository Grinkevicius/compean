import Link from "next/link";
import { company, navItems } from "@/lib/site/constants";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-links">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="shell copyright">
        Copyright © 2026 {company.name} - All Rights Reserved.
      </div>
    </footer>
  );
}
