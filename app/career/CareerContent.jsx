// app/career/CareerContent.js
"use client";

import CareerHero from "@/components/CareerComponents.jsx/CareerHero";
import CareerImgSection from "@/components/CareerComponents.jsx/CareerImgSection";
import CareetTopSec from "@/components/CareerComponents.jsx/CareetTopSec";
import ClanMembers from "@/components/CareerComponents.jsx/ClanMembers";
import FourSpheres from "@/components/CareerComponents.jsx/FourSpheres";
import LastSection from "@/components/CareerComponents.jsx/LastSection";
import Productiviity from "@/components/CareerComponents.jsx/Productiviity";
import Section2 from "@/components/CareerComponents.jsx/Section2";
import React from "react";

export default function CareerContent() {
  return (
    <main className="w-full min-h-screen pt-20 overflow-x-clip">
      <CareerHero />
      <CareetTopSec />
      <Section2 />
      <FourSpheres />
      <Productiviity />
      <CareerImgSection />
      <ClanMembers />
      <LastSection />
    </main>
  );
}
