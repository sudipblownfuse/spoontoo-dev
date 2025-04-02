"use client";

import React from "react";
import { motion } from "framer-motion";

const LastSection = () => {
  return (
    <section className="w-full h-auto bg-[#FFE1E1]">
      <div className="w-full width-container mx-auto px-14 flex justify-between items-center">
        {/* text */}
        <motion.div
          className="w-1/2 px-10 py-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="w-[90%] text-2xl font-semibold">
            What Makes Life At Spoontoo Different And Thriving?
          </h3>
          <h6 className="w-[90%] pt-2">
            Challenge the ordinary. Embrace innovation. Discover the right
            career track. Take a look at our job openings.
          </h6>
        </motion.div>

        {/* Button */}
        <motion.div
          className="w-[1/2] flex justify-end pr-16"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <button className="uppercase px-5 py-3  rounded-lg bg-secondary text-white transform transition-all hover:scale-105 duration-200 ease-in-out">
            View all open position
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LastSection;
