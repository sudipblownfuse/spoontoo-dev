"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutSpoontoo = () => {
  return (
    <section className="w-full width-container mx-auto flex justify-center pt-16 md:pt-20">
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
            Spoontoo helps restaurants and cafes turn food videos into 3D AR
            food menus.
          </motion.h5>
          <motion.h5
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our platform lets you create an AR menu for cafes or a full
            restaurant AR food menu in minutes — no special apps, no 3D team,
            and no coding needed. You will be able to experience your dishes in
            3D on your phones before ordering. <br /> <br />
            It's easy to use, works on any device, and helps you stand out.
            Whether you're a small AR cafe or a restaurant or just a foodie,
            Spoontoo makes your menu more exciting, more visual, and more
            effective.
          </motion.h5>
          <Link href="/about">
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
