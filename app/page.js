import HomeHero from '@/components/HomeComponents/HomeHero'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen">
      <HomeHero/>
      <h1 className="font-title text-4xl text-pink-600">Let’s Bake Muffins</h1>
      <p className="font-montserrat text-lg text-gray-700">
        This is Montserrat font for the body text.
      </p>
    </main>
  )
}

export default page
