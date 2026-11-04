import type { Metadata } from "next";
import { generateRouteMetadata } from "@/config/seo";
import AchievementsClient from "./AchievementsClient";

export const metadata: Metadata = generateRouteMetadata("/achievements");

export default function AchievementsPage() {
  return <AchievementsClient />;
}
