"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import diningMain from "@/public/HomeImages/diningMain.png";
import cupcake from "@/public/HomeImages/cupcake.png";
import sandwich from "@/public/HomeImages/sandwich.png";

const DiningExperience = () => {
  return (
    <section className="w-full h-auto py-28">
      <div className="w-full width-container mx-auto flex justify-center items-center px-14">
        {/* text Section */}
        <div className="w-1/2 flex flex-col">
          <motion.h3
            className="w-[60%] text-3xl font-semibold"
            initial={{ opacity: 0, x: -50 }} // Starts off-screen left
            whileInView={{ opacity: 1, x: 0 }} // Moves into view
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Elevate your dining experience with an AR menu that tells your story
          </motion.h3>

          <motion.h6
            className="w-[65%] py-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            Spoontoo’s Augmented Reality platform enables you to create a live
            menu by just capturing videos of your creative dishes portraying who
            you really are.
            <br /> <br /> Your creative brilliance can now be shared at the
            click of a button by people who love your art
          </motion.h6>

          <motion.button
            className="uppercase w-fit px-6 py-3 text-white bg-secondary rounded-md my-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            Book A Demo
          </motion.button>
        </div>

        {/* Image Section */}
        <div className="w-1/2 relative flex justify-start">
          <div className="relative w-[94%] h-[350px] rounded-2xl">

            {/* main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src={diningMain} alt="dining-main" />
            </motion.div>

            <motion.div
            className="absolute -left-20 -bottom-1/2"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={cupcake}
              alt="cupcake"
            />
            </motion.div>

            <motion.div
            className="absolute -right-20 -top-[36%]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={sandwich}
              alt="sandwich"
              
            />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningExperience;
