"use client";

import React from "react";
import { motion } from "framer-motion";

const NewsletterSIgnUp = () => {
  return (
    <section className="w-full h-auto bg-[#2F2F2F]">
      <div className="w-full width-container mx-auto px-5 sm:px-14 py-8 flex flex-col lg:flex-row justify-center items-center">
        {/* text */}
        <div className="w-full sm:w-[80%] lg:w-1/2 px-0 sm:px-5">
          <motion.h4
            className="text-3xl text-white font-semibold text-center md:text-start"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Sign up to our Newsletter
          </motion.h4>
          <motion.h6
            className="text-gray-200 pt-2 text-center md:text-start text-sm ms:text-base"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Subscribe to learn about new product and features, the latest in
            technology, and updates.
          </motion.h6>
        </div>

        {/* Sign Up */}
        <motion.div
          className="w-full sm:w-[80%] lg:w-1/2 flex flex-col sm:flex-row justify-end items-center gap-2 sm:gap-8 py-10 lg:py-0"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <input
            className="w-full sm:w-[80%] lg:w-[55%]  px-4 py-3 rounded-lg text-sm md:teaxt-base lg:text-lg"
            placeholder="Enter your email"
            required={true}
          />
          <button className="uppercase w-full sm:w-fit px-5 py-3 mt-4 sm:mt-0 text-sm md:teaxt-base lg:text-lg rounded-lg bg-secondary text-white transform transition-all hover:scale-105 duration-200 ease-in-out">
            SUBSCRIBE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSIgnUp;
