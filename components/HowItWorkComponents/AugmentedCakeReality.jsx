"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import augmentedCakeReality from "@/public/how-it-works/augmentedCakeReality.png";
import cake1 from "@/public/how-it-works/cake1.png";

const AugmentedCakeReality = () => {
  return (
    <section className="w-full h-auto py-10 lg:py-36  overflow-x-hidden">
      <div className="relative w-full h-auto bg-[#2F2F2F]">
        <div className="w-full relative width-container mx-auto px-5 lg:px-14 flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <motion.div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start py-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className=" w-full lg:w-[80%] text-3xl text-white font-semibold text-center lg:text-start">
              Augmented Reality in Cake Business
            </h3>
            <h6 className="text-white  pt-6 text-center lg:text-start text-sm lg:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printertook.
              <br />
              <br />
              .Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took..Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took.
            </h6>
          </motion.div>

          {/* Image section */}
          <div className="w-full lg:w-1/2 h-auto relative flex justify-end items-center">
            <motion.div className="w-full lg:w-[90%] h-[115%] relative pb-32 lg:pb-0"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3}}
            >
              <Image
                className="object-cover relative drop-shadow-lg"
                src={augmentedCakeReality}
                alt="cake-reality-img"
              />
              {/* 3D cake positioned at the bottom */}
              <motion.div className="absolute bottom-12 md:-bottom-24 left-1/2  "
              animate={{ y: [0, -12, 0] }}
              viewport={{amount: 0.4}}
              transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src={cake1} alt="cake-img" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AugmentedCakeReality;
