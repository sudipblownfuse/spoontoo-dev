"use client";

import AboutSpoontoo from '@/components/HomeComponents/AboutSpoontoo'
import DiningExperience from '@/components/HomeComponents/DiningExperience';
import HighlightedFeatures from '@/components/HomeComponents/HighlightedFeatures'
import HomeFormSection from '@/components/HomeComponents/HomeFormSection';
import HomeHero from '@/components/HomeComponents/HomeHero'
import OurTopClients from '@/components/HomeComponents/OurTopClients';
import ScanToExperience from '@/components/HomeComponents/ScanToExperience';
import SuccessStories from '@/components/HomeComponents/SuccessStories';
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen">
      <HomeHero/>
      <AboutSpoontoo/>
      <ScanToExperience/>
      <HighlightedFeatures/>
      <OurTopClients/>
      <DiningExperience/>
      <SuccessStories/>
      <HomeFormSection/>
    </main>
  )
}

export default page
