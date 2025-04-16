"use client";

import Image from "next/image";
import React from "react";
import chef from "@/public/how-it-works/chef.png"
import { motion } from "framer-motion";
import heroImg from "@/public/career/heroImg.png"

const CareerHero = () => {
  return (
    <section className="w-full h-auto  bg-black">
      <div className="w-full width-container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 lg:px-14 py-16">
        {/* ------------------------ Text ----------------------- */}
        <div className="w-[100%] sm:w-[70%] lg:w-[40%] flex flex-col items-center lg:items-start justify-center pb-12 lg:pb-0">
          <motion.h1 className="w-[80%]  text-white font-bold text-3xl md:text-3xl text-center lg:text-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          >
            Explore Amazing Career Possibilities with Spoontoo
          </motion.h1>
          <motion.h4 className="w-[83%] text-white text-sm lg:text-base py-4 text-center lg:text-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          >
            Join Us To Make A Difference Through Your Experience
          </motion.h4>
        </div>

        {/* ------------------------Image ------------------------ */}
        <div className="w-[95%] md:w-[60%] h-auto flex justify-center items-center">
            <Image src={heroImg} alt="chef"/>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
