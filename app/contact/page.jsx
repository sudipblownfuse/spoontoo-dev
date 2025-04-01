"use client";

import ContactForm from '@/components/ContactComponents/ContactForm';
import FAQ from '@/components/ContactComponents/FAQ';
import MapView from '@/components/ContactComponents/MapView';
import NewsletterSIgnUp from '@/components/ContactComponents/NewsletterSIgnUp';
import React from 'react'

const page = () => {
  return (
    <main className='w-full min-h-screen pt-[8vh]'>
        <ContactForm/>
        <MapView/>
        <FAQ/>
        <NewsletterSIgnUp/>
    </main>
  )
}

export default page
