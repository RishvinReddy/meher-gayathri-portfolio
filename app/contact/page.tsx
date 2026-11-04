import type { Metadata } from "next";
import { generateRouteMetadata } from "@/config/seo";
import ContactClient from "./ContactClient";

export const metadata: Metadata = generateRouteMetadata("/contact");

export default function ContactPage() {
  return <ContactClient />;
}
