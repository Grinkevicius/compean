import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/site/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Lawn care, landscaping, and property maintenance from Compean Maintenance: grass cutting, masonry, cleanup, pressure washing, aeration, and fertilizing.",
};

export default function Page() {
  return <ServicesPageContent />;
}
