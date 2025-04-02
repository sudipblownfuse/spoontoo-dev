"use client";

import React from "react";
import { motion } from "framer-motion";

const BlogTopSec = () => {
  return (
    <section className="w-full h-auto pt-20">
      <div className="w-full h-auto width-container mx-auto px-14 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-semibold text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our latest Stories and Interviews
        </motion.h1>
        <motion.h6
          className="text-center w-[70%] pt-2"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Subscribe to learn about new product and features, the latest in
          technology, and updates.
        </motion.h6>

        <motion.div
          className="w-[65%] h-auto relative flex items-center justify-end mt-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <input
            className="w-full bg-gray-300 py-4 text-lg rounded-lg pl-4 pr-56"
            placeholder="Enter your email"
            type="email"
          />
          <button className="uppercase absolute mr-1 px-5 py-3 text-lg rounded-lg bg-secondary text-white  hover:bg-[#bb2f2f]">
            SUBSCRIBE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogTopSec;
