"use client";

import CareetTopSec from "@/components/CareerComponents.jsx/CareetTopSec";
import FourSpheres from "@/components/CareerComponents.jsx/FourSpheres";
import Productiviity from "@/components/CareerComponents.jsx/Productiviity";
import Section2 from "@/components/CareerComponents.jsx/Section2";
import React from "react";

const page = () => {
  return (
    <main className="w-full min-h-screen pt-[8vh]">
      <CareetTopSec />
      <Section2/>
      <FourSpheres/>
      <Productiviity/>
    </main>
  );
};

export default page;
