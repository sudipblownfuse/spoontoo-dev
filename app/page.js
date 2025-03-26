"use client";

import AboutSpoontoo from '@/components/HomeComponents/AboutSpoontoo'
import DiningExperience from '@/components/HomeComponents/DiningExperience';
import HighlightedFeatures from '@/components/HomeComponents/HighlightedFeatures'
import HomeHero from '@/components/HomeComponents/HomeHero'
import OurTopClients from '@/components/HomeComponents/OurTopClients';
import SuccessStories from '@/components/HomeComponents/SuccessStories';
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen">
      <HomeHero/>
      <AboutSpoontoo/>
      <HighlightedFeatures/>
      <OurTopClients/>
      <DiningExperience/>
      <SuccessStories/>
    </main>
  )
}

export default page
