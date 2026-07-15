import type { Metadata } from "next";
import { ContactPageContent } from "@/components/site/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Compean Landscaping and Lawn Care",
  description:
    "Contact Compean Landscaping and Lawn Care to schedule lawn care or landscaping services.",
};

export default function Page() {
  return <ContactPageContent />;
}
