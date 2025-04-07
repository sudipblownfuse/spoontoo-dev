"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import beef1 from "@/public/how-it-works/beef1.png";

const HAveAnIdea = () => {
  return (
    <section className="w-full h-auto bg-[#2F2F2F]">
      <div className="relative h-auto w-full width-container mx-auto px-14 ">
        <motion.div
          className="h-auto w-full relative flex flex-col lg:flex-row justify-center items-center py-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-white text-center sm:text-start">
            Have an Idea on your mind?
          </h2>
          <button className="ml-0 lg:ml-10 px-4 py-2 my-10 lg:my-0 bg-secondary rounded-lg text-white uppercase transform transition-all hover:scale-105 duration-300 ease-in-out">
            Let's Talk
          </button>
        </motion.div>

        {/* Floating Image */}
        <motion.div
          className="absolute w-40 lg:w-auto top-48 sm:top-36 lg:-top-20 -right-0 lg:right-0 z-10"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="relative drop-shadow-lg "
            src={beef1}
            alt="beef-1-floating"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HAveAnIdea;
