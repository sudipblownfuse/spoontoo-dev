"use client";

import Image from "next/image";
import React from "react";
import chef from "@/public/how-it-works/chef.png"
import { motion } from "framer-motion";

const HIWhero = () => {
  return (
    <section className="w-full h-auto  bg-black">
      <div className="w-full width-container mx-auto flex flex-col md:flex-row items-center justify-between px-5 lg:px-14 pt-16">
        {/* ------------------------ Text ----------------------- */}
        <div className="w-[90%] md:w-[40%] flex flex-col items-center md:items-start justify-center pb-12 md:pb-0">
          <motion.h1 className="text-white font-bold text-4xl sm-4xl lg:text-5xl text-center md:text-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          >
            How Spoontoo AR Menu Works
          </motion.h1>
          <motion.h4 className="w-[85%] text-white text-sm lg:text-base py-3 text-center md:text-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          >
            Spoontoo makes it easy for anyone to create and experience an AR food menu. Just take a short video of your dish, and Spoontoo turns it into a 3D model that you can explore in real life.

          </motion.h4>
        </div>

        {/* ------------------------Image ------------------------ */}
        <div className="w-[95%] md:w-[60%] h-auto flex justify-center items-center">
            <Image src={chef} alt="chef"/>
        </div>
      </div>
    </section>
  );
};

export default HIWhero;
