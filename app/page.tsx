import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ResearchSummary from "@/components/sections/ResearchSummary";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import PublicationsShowcase from "@/components/sections/PublicationsShowcase";
import TeachingOverview from "@/components/sections/TeachingOverview";
import AchievementsSection from "@/components/sections/AchievementsSection";
import VerificationDisclosure from "@/components/sections/VerificationDisclosure";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ResearchSummary />
      <FeaturedProjects />
      <ExperienceTimeline />
      <PublicationsShowcase />
      <TeachingOverview />
      <AchievementsSection />
      <VerificationDisclosure />
      <ContactSection />
    </>
  );
}
