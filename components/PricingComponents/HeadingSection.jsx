"use client";

import { motion } from "framer-motion";

const HeadingSection = () => {
  return (
    <section className="w-full h-auto pt-10 sm:pt-16">
      <div className="w-full width-container mx-auto px-5 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-semibold text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Pricing Table
        </motion.h1>

        <motion.h6
          className="w-full sm:w-[70%] py-6 text-center text-sm sm:text-base"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </motion.h6>
      </div>
    </section>
  );
};

export default HeadingSection;
