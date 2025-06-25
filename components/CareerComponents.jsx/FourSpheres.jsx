"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import demoIcon1 from "@/public/career/icon1.png";

const FourSpheres = () => {
  const data = [
    {
      title: "Customers",
      description:
        "We put our users first — always. Every product we build and every update we release is focused on making their experience better, easier, and more memorable.",
      img: demoIcon1,
      bg: "#FFC6C6",
    },
    {
      title: "Peers",
      description:
        "We support each other. Collaboration, respect, and shared wins are what keep us moving forward as a team — not just as individuals.",
      img: demoIcon1,
      bg: "#FFD4D4",
    },
    {
      title: "Family & Self",
      description:
        "We believe great work starts with well-being. That means making space for personal time, mental health, and the people that matter most.",
      img: demoIcon1,
      bg: "#FFE1E1",
    },
    {
      title: "Society",
      description:
        "We’re part of something bigger. Whether through tech, storytelling, or sustainability, we aim to contribute meaningfully to the world around us.",
      img: demoIcon1,
      bg: "#FFEBEB",
    },
  ];

  return (
    <section className="w-full h-auto py-5 sm:py-10 pt-24">
      <div className="w-full width-container mx-auto px-3 md:px-14 flex flex-col items-center">
        {/* Heading section */}
        <div className="w-[90%] lg:w-[60%] flex flex-col items-center">
          <motion.h3
            className="text-2xl lg:text-4xl font-semibold text-center"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Spoontoo’s Four Spheres <br /> Of Influence
          </motion.h3>
          <motion.h6
            className="text-center py-4 text-sm sm:text-base"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            We believe in the four spheres of influence that drive our growth.
            This is ingrained in everything we do.
          </motion.h6>
        </div>

        {/* ---------------------- CARDS section ---------------------- */}
        <div className="w-full flex flex-row justify-between gap-3 py-8 overflow-x-auto scrollbar-hide">
          {data.map((item, index) => (
            <motion.div
              key={index}
              style={{ backgroundColor: `${item.bg}` }}
              className="h-[350px] w-[270px] p-6 rounded-2xl flex flex-col gap-5 items-center"
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.2}}
            >
              <Image src={item.img} alt="icon-img" />
              <h5 className="text-center text-lg font-bold">{item.title}</h5>
              <h6 className="w-[270px] p-6 font-normal text-center text-sm">
                {item.description}
              </h6>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourSpheres;
