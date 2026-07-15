import type { Metadata } from "next";
import { AboutPageContent } from "@/components/site/AboutPageContent";

export const metadata: Metadata = {
  title: "About | Compean Landscaping and Lawn Care",
  description:
    "Learn about Compean's reliable lawn care and landscaping services for Winston-Salem, Pfafftown, and Walkertown.",
};

export default function Page() {
  return <AboutPageContent />;
}
