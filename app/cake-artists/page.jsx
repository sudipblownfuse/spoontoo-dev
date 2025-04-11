"use client";

import CakeArtistForm from "@/components/CakeArtistComponents/CakeArtistForm";
import CakeArtistHero from "@/components/CakeArtistComponents/CakeArtistHero";
import CakeArtistInfo from "@/components/CakeArtistComponents/CakeArtistInfo";
import CakeArtistsGameChanger from "@/components/CakeArtistComponents/CakeArtistsGameChanger";
import CakeBusinessDetailedInfo from "@/components/CakeArtistComponents/CakeBusinessDetailedInfo";
import CakeCustomerTestimonials from "@/components/CakeArtistComponents/CakeCustomerTestimonials";
import CakeHighlightedFeature from "@/components/CakeArtistComponents/CakeHighlightedFeature";
import CakeScanToExperience from "@/components/CakeArtistComponents/CakeScanToExperience";
import NewsletterSIgnUp from "@/components/ContactComponents/NewsletterSIgnUp";
import PricingMAIN from "@/components/PricingComponents/PricingMAIN";
import React from "react";

const page = () => {
  return (
    <main className="w-full min-h-screen pt-20 overflow-x-clip">
      <CakeArtistHero />
      <CakeArtistsGameChanger />
      <CakeHighlightedFeature/>
      <CakeScanToExperience/>
      <CakeBusinessDetailedInfo/>
      <CakeArtistInfo/>
      <PricingMAIN/>
      <CakeCustomerTestimonials/>
      <CakeArtistForm/>
      <NewsletterSIgnUp/>
    </main>
  );
};

export default page;
