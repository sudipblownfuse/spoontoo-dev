"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutSpoontoo = () => {
  return (
    <section 
      className="w-full width-container mx-auto flex justify-center pt-16 md:pt-20"
    >
      <div className="w-full flex flex-col items-center justify-center px-5 md:px-14">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About <span className="text-secondary">Spoontoo</span>
        </motion.h2>
        <div className="w-full md:w-[68%] flex flex-col items-center gap-3 md:gap-5 py-9 text-sm md:text-base">
          <motion.h5 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type. Lorem Ipsum is simply
          </motion.h5>
          <motion.h5 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            Dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type
          </motion.h5>
          <Link href='/about'>
          <motion.button
            className="uppercase w-fit px-6 py-3 text-white bg-secondary rounded-md my-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            Know More
          </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSpoontoo;