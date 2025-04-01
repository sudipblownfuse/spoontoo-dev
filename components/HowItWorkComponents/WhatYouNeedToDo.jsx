"use client";

import React from "react";
import { motion } from "framer-motion";

const WhatYouNeedToDo = () => {
  return (
    <section className="w-full h-auto pt-10">
      <div className="w-full width-container mx-auto px-14 flex flex-col items-center">
        <motion.h2
        className="text-center text-3xl font-semibold"
        initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          What you Need to do
        </motion.h2>
        <motion.h6 className="w-[65%] text-center py-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type. Lorem Ipsum is simply
          <br /><br />
           dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type
        </motion.h6>
      </div>
    </section>
  );
};

export default WhatYouNeedToDo;
