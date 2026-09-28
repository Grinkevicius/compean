import type { Metadata } from "next";
import { AboutPageContent } from "@/components/site/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Compean Maintenance and our reliable landscaping and lawn care for Winston-Salem, Pfafftown, and Walkertown.",
};

export default function Page() {
  return <AboutPageContent />;
}
