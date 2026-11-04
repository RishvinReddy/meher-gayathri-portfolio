import type { Metadata } from "next";
import { generateRouteMetadata } from "@/config/seo";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = generateRouteMetadata("/projects");

export default function ProjectsPage() {
  return <ProjectsClient />;
}
