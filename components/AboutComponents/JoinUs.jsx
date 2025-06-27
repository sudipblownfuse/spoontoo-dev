"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const JoinUs = () => {
  return (
    <section className="w-full h-auto pt-10 pb-28">
      <div className="w-full width-container mx-auto px-5 sm:px-14 flex flex-col items-center justify-center">
        <motion.h2
          className="text-3xl font-semibold text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Are You Ready For Your <br />Restaurant AR Food Menu?
        </motion.h2>

        <motion.h6
          className="text-center pt-8 pb-7 w-full sm:w-[80%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Don't let your best dishes go unnoticed. With Spoontoo's AR food menu, you're not just serving meals — you're serving unforgettable experiences. <br /><br />
          Ready to turn your menu into a masterpiece? Get started with Spoontoo today.

        </motion.h6>

<Link href="/contact">
        <motion.button
          className="uppercase w-fit px-6 py-3 text-white bg-secondary rounded-md my-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          Contact Us
        </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
