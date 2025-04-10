"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cake2 from "@/public/cakeArtists/cake2.png";

const CakeArtistsGameChanger = () => {
  return (
    <section className="w-full h-full">
      {/* Our Story */}
      <div className="w-full h-auto width-container mx-auto flex  flex-col sm:flex-row justify-center items-center px-8 sm:px-10 lg:px-14 py-10 sm:py-28 mt-4 sm:mt-14 -mb-2 sm:-mb-10">
        <motion.div
          className="w-full sm:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={cake2} alt="story-img" />
        </motion.div>

        <motion.div
          className="w-full sm:w-1/2 flex flex-col items-center sm:items-start sm:pl-4 lg:pl-20 pt-8 sm:pt-0"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold pb-3 lg:pb-5 text-center sm:text-start">
          A game-changer for Cake Designer
          </h2>
          <h6 className="text-sm lg:text-base text-center sm:text-justify">
            Imagine effortlessly sharing your culinary discoveries with your
            audience by showcasing restaurant menus in augmented reality. With
            Spoontoo, you can bring the dining experience to life, allowing
            viewers to see dishes true to scale, right there in your vlog.
            <br />
            <br /> No more static menu shots or guessing sizes – your audience
            gets a clear, dynamic preview, making your recommendations more
            engaging and impactful. Spoontoo empowers food vloggers to create
            immersive content, boosting viewer engagement and solidifying their
            role as trusted culinary guides.
          </h6>
          <motion.button
            className="uppercase w-fit px-4 py-3 text-white bg-secondary rounded-md mb-12 text-sm lg:text-base my-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            Know More
          </motion.button>

        </motion.div>

        
      </div>
    </section>
  );
};

export default CakeArtistsGameChanger;
