"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Brandmark2 from "@/public/HomeImages/Brandmark2.png";
import webElement1 from "@/public/HomeImages/web-elements1.png";
import Pizza1 from "@/public/HomeImages/pizza1.png";
import element21 from "@/public/HomeImages/element-21.png";
import element31 from "@/public/HomeImages/element-31.png";
import vectorBG from "@/public/aboutImages/hero/vectorBG.png"
import dahiPuri from "@/public/aboutImages/hero/dahiPuri.png"
import paniPuri from "@/public/aboutImages/hero/paniPuri.png"
import phoneHold from "@/public/aboutImages/hero/phoneHold.png"

const AboutHero = () => {
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // motion and orientation setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x / 30);
      mouseY.set(y / 30);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.DeviceOrientationEvent) {
      const handleOrientation = (event) => {
        const gamma = event.gamma || 0;
        const beta = event.beta || 0;

        // Increased sensitivity
        mouseX.set(gamma * 1.5); // more left-right motion
        mouseY.set(beta * 1.2); // more up-down motion
      };

      window.addEventListener("deviceorientation", handleOrientation, true);
      return () =>
        window.removeEventListener("deviceorientation", handleOrientation);
    }
  }, []);

  return (
    <section className="w-full relative h-auto bg-[#101010] pt-10 flex flex-col items-center justify-center">
      <div className="relative w-full h-[600px] md:h-[450px] width-container mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-14">
        {/* text section */}
        <div className=" w-full md:w-[60%] flex flex-col items-center md:items-start mb-12 sm:mb-0">
          <motion.h1
            className="text-white font-bold text-4xl sm:5xl lg:text-6xl text-center md:text-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Us
          </motion.h1>

          <motion.h5
            className="text-sm w-[90%] md:w-[55%] text-white py-5 sm:py-8 md:py-10 text-center md:text-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Spoontoo is a magic tool for restaurants. It turns a video of your
            yummy dish into a 3D model that can be seen on your phone, and
            experienced in real life using AR! 
          </motion.h5>

        </div>

        {/* ------------------------------- Image section ----------------------------- */}
        {/* Desktop view */}
        <div className="hidden md:flex w-full md:w-[40%] md:h-auto relative bg-center" >
          <div className="w-full absolute -bottom-52">
            <Image className="relative" src={vectorBG} alt="vector-bg" />
          </div>

          <motion.div
            className="absolute -top-48 -left-24"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={dahiPuri} alt="web-element-1 transform" />
            </motion.div>
          </motion.div>


          <motion.div
            className="absolute -top-28 left-24"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={phoneHold} alt="element-21 transform" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-28 -left-32"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={paniPuri} alt="element-31 transform" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Image section (Hidden for md and above) */}
        <div className="relative w-full h-[450px] mr-9 md:hidden flex justify-center">
        <div className="w-64 absolute left-20 top-16">
            <Image className="relative" src={vectorBG} alt="vector-bg" />
          </div>
          <motion.div
            className="w-32 absolute top-14 left-16"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={dahiPuri} alt="web-element-1 transform" />
            </motion.div>
          </motion.div>


          <motion.div
            className="w-48 absolute top-28 right-2"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={phoneHold} alt="element-21 transform" />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-28 absolute bottom-24 left-6"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={paniPuri} alt="element-31 transform" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
