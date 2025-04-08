"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import demoIcon1 from "@/public/how-it-works/demoIcon.png";

const ProcessFlow = () => {
  const data = [
    {
      title: "Photographing an object",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      img: demoIcon1,
      bg: "#FFC6C6",
    },
    {
      title: "Photo Processing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      img: demoIcon1,
      bg: "#FFD4D4",
    },
    {
      title: "Convert photos to 3D model",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      img: demoIcon1,
      bg: "#FFE1E1",
    },
    {
      title: "Model processing in 3D program",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      img: demoIcon1,
      bg: "#FFEBEB",
    },
    {
      title: "Optimization and preparation for AR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
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
