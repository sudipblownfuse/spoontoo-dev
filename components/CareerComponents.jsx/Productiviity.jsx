"use clients";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import colleagues from "@/public/career/colleagues.png";

const Productiviity = () => {
  return (
    <section className="w-full h-auto pt-8">
      <div className="w-full width-container mx-auto px-5 lg:px-14 flex flex-col lg:flex-row justify-between items-center">
        {/* Test area */}
        <motion.div
          className="w-full sm:w-[80%] lg:w-1/2 h-auto flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-2xl lg:text-3xl w-[80%] text-center lg:text-start">
            Best Quality And Productivity Comes from Happy Minds
          </h3>
          <h6 className="pt-5 text-xs sm:text-sm lg:text-base text-center lg:text-start px-3 sm:px-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printertook. <br />
            <br />
            .Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took..Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took.
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
