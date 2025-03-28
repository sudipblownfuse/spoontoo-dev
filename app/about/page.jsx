"use client";

import AboutHero from '@/components/AboutComponents/AboutHero';
import BriefHistory from '@/components/AboutComponents/BriefHistory';
import ImageSection from '@/components/AboutComponents/ImageSection';
import OpenDetails from '@/components/AboutComponents/OpenDetails';
import OurValues from '@/components/AboutComponents/OurValues';
import React from 'react'

const page = () => {
  return (
    <main className='w-full min-h-screen pt-[8vh]'>
        <AboutHero/>
        <OpenDetails/>
        <BriefHistory/>
        <ImageSection/>
        <OurValues/>
    </main>
  )
}

export default page
