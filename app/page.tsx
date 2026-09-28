import type { Metadata } from "next";
import { HomePageContent } from "@/components/site/HomePageContent";

export const metadata: Metadata = {
  title: {
    absolute: "Compean Maintenance | Landscaping & Property Care",
  },
  description:
    "Lawn care, landscaping, and property maintenance in the Winston-Salem area. Get a free estimate from Compean Maintenance.",
};

export default function Page() {
  return <HomePageContent />;
}
