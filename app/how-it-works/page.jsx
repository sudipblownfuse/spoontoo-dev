"use client";

import AugmentedCakeReality from '@/components/HowItWorkComponents/AugmentedCakeReality';
import HappyClientsHIW from '@/components/HowItWorkComponents/HappyClientsHIW';
import HAveAnIdea from '@/components/HowItWorkComponents/HaveAnIdea';
import ProcessFlow from '@/components/HowItWorkComponents/ProcessFlow';
import TopSection from '@/components/HowItWorkComponents/TopSection'
import WhatYouNeedToDo from '@/components/HowItWorkComponents/WhatYouNeedToDo';
import React from 'react'

const page = () => {
  return (
    <main className='w-full min-h-screen pt-28 overflow-x-clip'>
      <TopSection/>
      <ProcessFlow/>
      <WhatYouNeedToDo/>
      <AugmentedCakeReality/>
      <HappyClientsHIW/>
      <HAveAnIdea/>
    </main>
  )
}

export default page
