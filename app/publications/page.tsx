import type { Metadata } from "next";
import { generateRouteMetadata } from "@/config/seo";
import PublicationsClient from "./PublicationsClient";

export const metadata: Metadata = generateRouteMetadata("/publications");

export default function PublicationsPage() {
  return <PublicationsClient />;
}
