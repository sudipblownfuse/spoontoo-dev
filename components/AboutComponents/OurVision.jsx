"use client";

import React from "react";
import Image from "next/image";
import visionImg from "@/public/aboutImages/vision-img.webp";
import { motion } from "framer-motion";

const OurVision = () => {
  return (
    <section className="w-full h-full">
      {/* Our Story */}
      <div className="w-full h-auto width-container mx-auto flex  flex-col sm:flex-row-reverse justify-center sm:justify-between items-center px-8 sm:px-10 lg:px-14 py-10 sm:py-28 mt-4 sm:mt-14 -mb-2 sm:-mb-10">
        <motion.div
          className="w-full sm:w-[45%] rounded-tl-[150px] rounded-br-[50px] overflow-hidden drop-shadow-xl"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            className="w-full h-full object-cover"
            src={visionImg}
            alt="story-img"
          />
        </motion.div>

        <motion.div
          className="w-full sm:w-[45%] flex flex-col items-center sm:items-start sm:pl-4 lg:pl-20 pt-8 sm:pt-0"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold pb-3 lg:pb-5 text-center sm:text-start">
            Our Vision For AR Menus
          </h2>
          <h6 className="text-sm lg:text-base text-center sm:text-start">
            Our vision is to eliminate the guesswork and disappointment from
            ordering. We envision a future where customers can explore every
            detail of a dish – its size, texture, and presentation – right at
            their table.
            <br />
            <br /> For restaurants, this means more confident customers, a significant reduction in order errors, and a powerful new way to showcase the artistry of your chefs. 

            <br /> <br />
            We are not just creating 3D menus; we are building a more transparent, engaging, and profitable dining experience for everyone.
          </h6>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
