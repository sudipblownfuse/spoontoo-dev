"use clients";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import colleagues from "@/public/career/colleagues.png";

const Productiviity = () => {
  return (
    <section className="w-full h-auto pt-6 sm:pt-8">
      <div className="w-full width-container mx-auto px-5 lg:px-14 flex flex-col lg:flex-row justify-between items-center">
        {/* Test area */}
        <motion.div
          className="w-full sm:w-[80%] lg:w-1/2 h-auto flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-[22px] lg:text-3xl w-full lg:w-[80%] text-center lg:text-start">
            We Believe in Equal Opportunity — And That Best Work Comes from
            Happy Minds
          </h3>
          <h6 className="w-full lg:w-[80%] pt-5 text-sm  text-center lg:text-justify px-3 sm:px-0">
            At Spoontoo, we know that great work happens when people feel
            valued, supported, and respected. That's why we foster a workplace
            where everyone has an equal voice, and where diversity of thought
            and background is celebrated.
            <br />
            <br />
            We create space for happiness — not just productivity. Because when
            people are happy, creative, and motivated, the work speaks for
            itself. We invest in our team's growth, well-being, and balance — so
            they can do their best work every day.
          </h6>
        </motion.div>

        {/* Image Area */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end pt-10 lg:pt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={colleagues} alt="colleagues-img" />
        </motion.div>
      </div>
    </section>
  );
};

export default Productiviity;
