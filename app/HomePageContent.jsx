// app/HomePageContent.js
"use client";

import HomeHero from "@/components/HomeComponents/HomeHero";
import AboutSpoontoo from "@/components/HomeComponents/AboutSpoontoo";
import ScanToExperience from "@/components/HomeComponents/ScanToExperience";
import HighlightedFeatures from "@/components/HomeComponents/HighlightedFeatures";
import OurTopClients from "@/components/HomeComponents/OurTopClients";
import DiningExperience from "@/components/HomeComponents/DiningExperience";
import SuccessStories from "@/components/HomeComponents/SuccessStories";
import HomeFormSection from "@/components/HomeComponents/HomeFormSection";

export default function HomePageContent() {
  return (
    <main className="min-h-screen">
      <HomeHero />
      <AboutSpoontoo />
      <ScanToExperience />
      <HighlightedFeatures />
      {/* <OurTopClients /> */}
      <DiningExperience />
      <SuccessStories />
      <HomeFormSection />
    </main>
  );
}
