"use client";

import React from "react";
import { motion } from "framer-motion";

const LastSection = () => {
  return (
    <section className="w-full h-auto bg-[#FFE1E1]">
      <div className="w-full width-container mx-auto px-5 lg:px-14 flex flex-col md:flex-row justify-between items-center">
        {/* text */}
        <motion.div
          className="w-full md:w-1/2 px-10 py-10 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="w-full md:w-[90%] text-[22px] font-semibold text-center md:text-start">
            What Makes Life At Spoontoo Different And Thriving?
          </h3>
          <h6 className="w-full md:w-[90%] pt-2 text-center md:text-start text-sm lg:text-base">
            Challenge the ordinary. Embrace innovation. Discover the right
            career track. Take a look at our job openings.
          </h6>
        </motion.div>

        {/* Button */}
        <motion.div
          className="w-[1/2] flex justify-end pr-0 md:pr-4 lg:pr-16 py-5 md:py-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <button className="uppercase px-5 py-3 text-sm lg:text-base rounded-lg bg-secondary text-white transform transition-all hover:scale-105 duration-200 ease-in-out">
            View all open position
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LastSection;
