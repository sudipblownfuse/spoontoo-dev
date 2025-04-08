"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Brandmark2 from "@/public/HomeImages/Brandmark2.png";
import webElement1 from "@/public/HomeImages/web-elements1.png";
import Pizza1 from "@/public/HomeImages/pizza1.png";
import element21 from "@/public/HomeImages/element-21.png";
import element31 from "@/public/HomeImages/element-31.png";
import ArrowDown from "@/public/HomeImages/arrow-down.svg";

const HomeHero = () => {
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
        mouseY.set(beta * 1.2);  // more up-down motion
      };
  
      window.addEventListener("deviceorientation", handleOrientation, true);
      return () => window.removeEventListener("deviceorientation", handleOrientation);
    }
  }, []);

  return (
    <section className="w-full relative h-auto bg-[#101010] pt-20 flex flex-col items-center justify-center">
      <div className="relative w-full h-[770px] md:h-[650px] width-container mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-14">
        {/* text section */}
        <div className=" w-full md:w-[60%] flex flex-col items-center md:items-start">
          <motion.h1
            className="text-white font-bold text-3xl md:4xl lg:text-6xl text-center md:text-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Experience Taste, Taste the Experience Experience It All
          </motion.h1>

          <motion.h5
            className="text-sm w-full md:w-[90%] text-white py-8 md:py-14 text-center md:text-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Spoontoo is a magic tool for restaurants. It turns a video of your
            yummy dish into a 3D model that can be seen on your phone, and
            experienced in real life using AR! 
          </motion.h5>

          <motion.button
            className="uppercase w-fit px-4 py-3 text-white bg-secondary rounded-md mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            Book a Demo
          </motion.button>
        </div>

        {/* ------------------------------- Image section ----------------------------- */}
        {/* Desktop view */}
        <div className="hidden md:flex w-full md:w-[40%] md:h-auto relative">
          <motion.div
            className="absolute left-[42%] -top-52"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={Brandmark2} alt="brandmark-2 transform" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute -top-80 -left-24"
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
              <Image src={webElement1} alt="web-element-1 transform" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute -top-40 -right-4"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={Pizza1} alt="pizza-1 transform" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute -top-28 left-20"
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
              <Image src={element21} alt="element-21 transform" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-20 -left-24"
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
              <Image src={element31} alt="element-31 transform" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Image section (Hidden for md and above) */}
        <div className="relative w-full h-[550px] mr-9 md:hidden">
          <motion.div
            className="absolute left-[59%] transform -translate-x-1/2 top-14"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className=""
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                className="w-16"
                src={Brandmark2}
                alt="brandmark-2 transform"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute left-6 right-8 -top-7"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className=""
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={webElement1} alt="web-element-1 transform" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute left-[77%] transform -translate-x-1/2 top-32"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className=""
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image className="w-20" src={Pizza1} alt="pizza-1 transform" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute -right-6 bottom-12"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className=""
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                className="w-60"
                src={element21}
                alt="element-21 transform"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute left-1/4 bottom-14"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className=""
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                className="w-32"
                src={element31}
                alt="element-31 transform"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="hidden w-full width-container absolute md:flex -bottom-7 justify-center">
        <Image src={ArrowDown} alt="arrow-down" className="" />
      </div>
    </section>
  );
};

export default HomeHero;
