"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import topSectionImg from "@/public/how-it-works/topSection1.png";

const TopSection = () => {
  return (
    <section className="w-full h-auto pt-16">
      <div className="w-full width-container mx-auto px-5 lg:px-14 flex flex-col items-center">
        {/* Augmented Reality */}
        <div className="w-full flex flex-col items-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-semibold text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            What are AR Food Menus?
          </motion.h2>
          <motion.h6
            className="w-full sm:w-[85%]  lg:w-[60%] text-center text-sm lg:text0base pt-5 sm:pt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            With an AR food menu, you let people see your dishes in 3D before
            they order. They can view portions, ingredients, and plating from
            every angle—right on their phone, with no app.
            <br />
            <br />
            Whether you run a small AR cafe or a busy restaurant, using an AR
            menu for cafes or a restaurant AR food menu helps you grab
            attention, build trust, and increase sales. It makes your menu
            easier to understand and more fun to explore. type
          </motion.h6>
        </div>

        {/* ----------------- How AR Can Help ----------------- */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center pt-16 lg:pt-24">
          {/* image */}
          <motion.div
            className="w-full sm:w-1/2 h-auto"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full sm:w-[90%]">
              <Image src={topSectionImg} alt="img" />
            </div>
          </motion.div>

          {/* text content */}
          <motion.div
            className="w-full sm:w-1/2 px-2 lg:px-4 pt-7"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl  lg:text-3xl font-semibold text-center sm:text-start">
              How AR Menus Help Grow Your Food Business
            </h2>
            <h6 className="pt-2 lg:pt-5 text-sm lg:text-base text-center sm:text-start">
              An AR food menu helps people see your dishes in 3D before they
              order. They can view the size, ingredients, and presentation right
              on their phone — no guessing, no surprises.
              <br />
              This builds trust, speeds up decision-making, and makes the
              experience more fun. Whether you run a small shop or need an AR
              menu for cafes, it's a great way to stand out and bring in more
              customers.
            </h6>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
