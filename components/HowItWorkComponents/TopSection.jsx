"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import topSectionImg from "@/public/how-it-works/topSection1.png";

const TopSection = () => {
  return (
    <section className="w-full h-auto pt-24">
      <div className="w-full width-container mx-auto px-14 flex flex-col items-center">
        {/* Augmented Reality */}
        <div className="w-full flex flex-col items-center">
          <motion.h1 className="text-4xl font-semibold text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          >
            Augmented Reality
          </motion.h1>
          <motion.h6 className="w-[60%] text-center pt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type. Lorem Ipsum is simply
            <br />
            <br />
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type
          </motion.h6>
        </div>

        {/* ----------------- How AR Can Help ----------------- */}
        <div className="w-full flex justify-center items-center pt-24">
          {/* image */}
          <motion.div className="w-1/2 h-auto"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          >
            <div className="w-[90%]">
              <Image src={topSectionImg} alt="img" />
            </div>
          </motion.div>

          {/* text content */}
          <motion.div className="w-1/2  px-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold">
              How AR can help to create a<br /> successful food business ?
            </h3>
            <h6 className="pt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printertook.
              <br />
              <br />
              .Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took..Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took.
            </h6>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
