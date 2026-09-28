import type { Metadata } from "next";
import { ContactPageContent } from "@/components/site/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Compean Maintenance for a free estimate on lawn care, landscaping, or property maintenance.",
};

export default function Page() {
  return <ContactPageContent />;
}
