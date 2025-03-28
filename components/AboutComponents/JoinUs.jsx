"use client";

import React from "react";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <section className="w-full h-auto pt-10 pb-28">
      <div className="w-full width-container mx-auto px-14 flex flex-col items-center justify-center">
        <motion.h2
          className="text-3xl font-semibold text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Want to join us?
        </motion.h2>

        <motion.h6
          className="text-center pt-8 pb-7"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Working at Spoontoo is more than just a job.
          <br />
          Want to come along for the ride?
        </motion.h6>

        <motion.button
          className="uppercase w-fit px-6 py-3 text-white bg-secondary rounded-md my-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          Browse Job Openings
        </motion.button>
      </div>
    </section>
  );
};

export default JoinUs;
