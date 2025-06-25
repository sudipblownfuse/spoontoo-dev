"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import topSectionImg from "@/public/how-it-works/topSection1.png";

const CareetTopSec = () => {
  return (
    <section className="w-full h-auto pt-10 md:pt-16">
      <div className="w-full width-container mx-auto px-5 lg:px-14 flex flex-col items-center">
        {/* <motion.div
          className="w-full sm:w-[75%] lg:w-[60%] flex flex-col items-center"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-3xl lg:text-4xl font-semibold text-center">
            Explore Amazing Career Possibilities with Spoontoo
          </h1>
          <h5 className="w-[70%] sm:w-full text-center pt-4 text-sm sm:text-base">
            Join Us To Make A Difference Through Your Experience
          </h5>
        </motion.div> */}

        <div className="w-full flex flex-col-reverse sm:flex-row justify-center items-center pt-14 sm:pt-6">
          {/* image */}
          <motion.div
            className="w-full sm:w-1/2 h-auto mt-7 sm:mt-0 flex justify-center sm:justify-start"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-[90%]">
              <Image src={topSectionImg} alt="img" />
            </div>
          </motion.div>

          {/* text content */}
          <motion.div
            className="w-full sm:w-1/2 px-0 lg:px-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl lg:text-3xl font-semibold text-center sm:text-start">
              What Makes Life at Spoontoo Different and Thriving?
            </h3>
            <h6 className="pt-5 text-sm lg:text-base text-center sm:text-justify">
              At Spoontoo, we're not just building technology — we're reshaping
              how people experience food. Our team thrives on creativity,
              collaboration, and real-world impact. Whether you're a designer,
              developer, or strategist, your ideas matter here.
              <br />
              <br />
              We work fast, stay curious, and value people who take ownership.
              You'll be part of a team that's open, inclusive, and passionate
              about building something meaningful. And yes — we have fun while
              we do it. <br /> <br />
              If you’re looking for a place where your work feels exciting and
              your voice is heard, you'll feel at home at Spoontoo.
            </h6>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareetTopSec;
