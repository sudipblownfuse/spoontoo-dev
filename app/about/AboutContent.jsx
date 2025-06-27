// app/about-us/AboutContent.jsx
"use client";

import React from 'react';
import AboutHero from '@/components/AboutComponents/AboutHero';
import BriefHistory from '@/components/AboutComponents/BriefHistory';
import ImageSection from '@/components/AboutComponents/ImageSection';
import JoinUs from '@/components/AboutComponents/JoinUs';
import OpenDetails from '@/components/AboutComponents/OpenDetails';
import OurStory from '@/components/AboutComponents/OurStory';
import OurTeam from '@/components/AboutComponents/OurTeam';
import OurValues from '@/components/AboutComponents/OurValues';
import WhyChooseSpoontoo from '@/components/AboutComponents/WhyChooseSpoontoo';
import OurVision from '@/components/AboutComponents/OurVision';

export default function AboutContent() {
  return (
    <main className="w-full min-h-screen pt-16 lg:pt-20 overflow-x-clip">
      <AboutHero />
      <OurStory />
      <WhyChooseSpoontoo/>
      <OurVision/>
      <BriefHistory />
      <ImageSection />
      <OurValues />
      <OurTeam />
      <JoinUs />
    </main>
  );
}
