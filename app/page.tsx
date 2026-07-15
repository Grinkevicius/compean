import type { Metadata } from "next";
import { HomePageContent } from "@/components/site/HomePageContent";

export const metadata: Metadata = {
  title: "Compean Landscaping and Lawn Care",
  description:
    "Lawn care, landscaping, yard cleanup, masonry, pressure washing, aeration, and fertilizing in the Winston-Salem area.",
};

export default function Page() {
  return <HomePageContent />;
}
