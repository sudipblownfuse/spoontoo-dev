"use client";

import AboutHero from '@/components/AboutComponents/AboutHero';
import BriefHistory from '@/components/AboutComponents/BriefHistory';
import OpenDetails from '@/components/AboutComponents/OpenDetails';
import React from 'react'

const page = () => {
  return (
    <main className='w-full min-h-screen pt-[8vh]'>
        <AboutHero/>
        <OpenDetails/>
        <BriefHistory/>
    </main>
  )
}

export default page
