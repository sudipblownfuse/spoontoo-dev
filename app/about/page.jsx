"use client";

import AboutHero from '@/components/AboutComponents/AboutHero';
import BriefHistory from '@/components/AboutComponents/BriefHistory';
import ImageSection from '@/components/AboutComponents/ImageSection';
import JoinUs from '@/components/AboutComponents/JoinUs';
import OpenDetails from '@/components/AboutComponents/OpenDetails';
import OurTeam from '@/components/AboutComponents/OurTeam';
import OurValues from '@/components/AboutComponents/OurValues';
import React from 'react'

const page = () => {
  return (
    <main className='w-full min-h-screen pt-20 lg:pt-28 overflow-x-clip'>
        <AboutHero/>
        <OpenDetails/>
        <BriefHistory/>
        <ImageSection/>
        <OurValues/>
        <OurTeam/>
        <JoinUs/>
    </main>
  )
}

export default page
