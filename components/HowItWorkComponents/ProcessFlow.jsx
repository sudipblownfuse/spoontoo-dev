"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import demoIcon1 from "@/public/how-it-works/demoIcon.png";

const ProcessFlow = () => {
  const data = [
    {
      title: "Photographing an Object",
      description:
        "Capture clear images or a short video of the dish from multiple angles to highlight its details, texture, and shape.",
      img: demoIcon1,
      bg: "#FFC6C6",
    },
    {
      title: "Photo Processing",
      description:
        "The photos or video frames are reviewed and enhanced to ensure proper lighting, clarity, and consistency for accurate 3D modeling.",
      img: demoIcon1,
      bg: "#FFD4D4",
    },
    {
      title: "Convert Photos to 3D Model",
      description:
        "The processed visuals are converted into a detailed 3D model that allows viewers to explore the dish from all sides.",
      img: demoIcon1,
      bg: "#FFE1E1",
    },
    {
      title: "Model Processing in 3D Program",
      description:
        "The 3D model is refined and polished using professional tools to match the real dish as closely as possible.",
      img: demoIcon1,
      bg: "#FFEBEB",
    },
    {
      title: "Optimization and Preparation for AR",
      description:
        "The final model is optimized for fast performance and prepared for seamless use in an AR food menu on any device.",
      img: demoIcon1,
      bg: "#FFF2F2",
    },
  ];

  return (
    <section className="w-full h-auto pt-16 lg:pt-28 pb-12">
      <div className="w-full width-container mx-auto px-3 lg:px-8">
        {/* Section Heading */}
        <motion.h3
          className="text-3xl font-semibold text-center py-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Process Flow
        </motion.h3>

        {/* Cards */}
        <div className="w-full overflow-x-auto scrollbar-hide ">
          <div className="flex flex-nowrap gap-4 px-3 lg:px-8">
            {data.map((item, index) => (
              <motion.div
              key={index}
              style={{ backgroundColor: `${item.bg}` }}
              className="min-w-[220px] h-[350px] p-6 rounded-2xl flex flex-col gap-5 items-center"
              
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src={item.img} alt="icon-img" />
              <h5 className="text-center font-semibold">{item.title}</h5>
              <h6 className="font-normal text-center text-sm w-[220px] px-4">
                {item.description}
              </h6>
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
