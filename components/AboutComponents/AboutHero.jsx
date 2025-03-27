"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImg1 from "@/public/aboutImages/heroImg1.png";
import ourStory1 from "@/public/aboutImages/ourStory1.png";

const AboutHero = () => {
  return (
    <section className="w-full h-auto">
      <div className="w-full width-container mx-auto flex flex-col items-center px-14">
        {/* Hero Image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={heroImg1} alt="hero-img" />
        </motion.div>

        {/* Hey! */}
        <motion.h1
          className="text-5xl font-light pb-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hey!
        </motion.h1>

        {/* We're Spoontoo */}
        <motion.h1
          className="text-4xl font-bold"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          We're <span className="text-secondary">Spoontoo</span>!
        </motion.h1>

        {/* Description */}
        <motion.h6
          className="w-[70%] text-center py-10"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took. Industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when
          an unknown printer took.
        </motion.h6>
      </div>

      {/* Our Story */}
      <div className="w-full h-auto width-container mx-auto flex justify-center items-center px-14 py-28">
  <motion.div
    className="w-1/2"
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <Image src={ourStory1} alt="story-img" />
  </motion.div>

  <motion.div
    className="w-1/2 flex flex-col items-start pl-20"
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold pb-5">Our Story</h2>
    <h6>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took.
      <br />
      <br /> Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took.
    </h6>
  </motion.div>
</div>
    </section>
  );
};

export default AboutHero;
