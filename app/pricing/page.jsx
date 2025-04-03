"use client";

import HeadingSection from '@/components/PricingComponents/HeadingSection';
import PricingSection from '@/components/PricingComponents/PricingSection';
import React from 'react'

const page = () => {
  return (
    <main className='w-full min-h-screen pt-28'>
      <HeadingSection/>
      <PricingSection/>
    </main>
  )
}

export default page
