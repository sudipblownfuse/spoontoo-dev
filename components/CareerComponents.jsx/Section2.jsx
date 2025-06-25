"use client";

import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <section className="w-full h-auto flex justify-center ">
      <div className="w-full width-container h-auto px-2 lg:px-14 pt-28">
      <motion.div
        className="w-full   flex flex-col sm:flex-row justify-between items-center bg-[#FFE1E1] rounded-2xl "
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* text */}
        <div className="w-full sm:w-1/2 px-10 py-7 sm:py-10">
          <h3 className="w-full sm:w-[90%] text-2xl font-semibold text-center sm:text-start">
            What Makes Life At Spoontoo Different And Thriving?
          </h3>
          <h6 className="w-full sm:w-[90%] pt-2 text-center sm:text-start text-sm sm:text-base">
            Challenge the ordinary. Embrace innovation. Discover the right
            career track. Take a look at our job openings.
          </h6>
        </div>

        {/* Button */}
        <div className="w-[1/2] flex justify-end pr-0 md:pr-16 py-5 sm:py-0">
          <button className="uppercase px-5 py-3  rounded-lg bg-secondary text-white transform transition-all hover:scale-105 duration-200 ease-in-out text-sm md:text-base">
            View all open position
          </button>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Section2;
