"use client";

import React from 'react';
import Image from 'next/image';
import ourStory1 from "@/public/aboutImages/ourStory1.png";
import { motion } from 'framer-motion';


const OurStory = () => {
  return (
    <section className='w-full h-full'>
        {/* Our Story */}
      <div className="w-full h-auto width-container mx-auto flex  flex-col sm:flex-row justify-center items-center px-8 sm:px-10 lg:px-14 py-9 sm:py-28">
        <motion.div
          className="w-full sm:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={ourStory1} alt="story-img" />
        </motion.div>

        <motion.div
          className="w-full sm:w-1/2 flex flex-col items-center sm:items-start sm:pl-4 lg:pl-20 pt-8 sm:pt-0"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold pb-3 lg:pb-5 text-center sm:text-start">Our Story</h2>
          <h6 className="text-sm lg:text-base text-center sm:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
            <br />
            <br /> Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took.
          </h6>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory
