import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/site/ServicesPageContent";

export const metadata: Metadata = {
  title: "Products/Services | Compean Landscaping and Lawn Care",
  description:
    "Grass cutting, masonry work, yard cleanup, pressure washing, aeration, and fertilizing from Compean.",
};

export default function Page() {
  return <ServicesPageContent />;
}
