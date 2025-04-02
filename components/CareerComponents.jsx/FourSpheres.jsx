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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      img: demoIcon1,
      bg: "#FFC6C6",
    },
    {
      title: "Peers",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      img: demoIcon1,
      bg: "#FFD4D4",
    },
    {
      title: "Family & Self",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      img: demoIcon1,
      bg: "#FFE1E1",
    },
    {
      title: "Society",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      img: demoIcon1,
      bg: "#FFEBEB",
    },
  ];

  return (
    <section className="w-full h-auto py-10">
      <div className="w-full width-container mx-auto px-14 flex flex-col items-center">
        {/* Heading section */}
        <div className="w-[60%] flex flex-col items-center">
          <motion.h3
            className="text-4xl font-semibold text-center"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Spoontoo’s Four Spheres <br /> Of Influence
          </motion.h3>
          <motion.h6
            className="text-center py-4"
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
        <div className="w-full flex flex-row justify-between flex-wrap gap-3 py-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              style={{ backgroundColor: `${item.bg}` }}
              className="h-[350px] w-[270px] p-6 rounded-2xl flex flex-col gap-5 items-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src={item.img} alt="icon-img" />
              <h5 className="text-center text-lg font-bold">{item.title}</h5>
              <h6 className="font-normal text-center text-sm">
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
