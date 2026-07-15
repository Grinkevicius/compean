import { company } from "@/lib/site/constants";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-social" aria-label="Facebook">
        f
      </div>
      <div className="shell copyright">
        Copyright © 2026 {company.name} - All Rights Reserved.
      </div>
      <div className="footer-powered">Powered by Compean</div>
    </footer>
  );
}
