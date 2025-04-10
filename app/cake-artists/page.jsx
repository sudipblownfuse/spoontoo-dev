"use client";

import CakeArtistHero from "@/components/CakeArtistComponents/CakeArtistHero";
import CakeArtistsGameChanger from "@/components/CakeArtistComponents/CakeArtistsGameChanger";
import CakeHighlightedFeature from "@/components/CakeArtistComponents/CakeHighlightedFeature";
import CakeScanToExperience from "@/components/CakeArtistComponents/CakeScanToExperience";
import React from "react";

const page = () => {
  return (
    <main className="w-full min-h-screen pt-20 overflow-x-clip">
      <CakeArtistHero />
      <CakeArtistsGameChanger />
      <CakeHighlightedFeature/>
      <CakeScanToExperience/>
    </main>
  );
};

export default page;
