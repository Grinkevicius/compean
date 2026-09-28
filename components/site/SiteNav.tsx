"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site/constants";

type SiteNavProps = {
  className?: string;
  label: string;
};

export function SiteNav({ className = "site-nav", label }: SiteNavProps) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label={label}>
      {navItems.map((item) => {
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            aria-current={active ? "page" : undefined}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
