"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
import ArrowDown from "@/public/HomeImages/arrow-down.svg";
import bigCircle from "@/public/cakeArtists/bigCircle.png";
import smallCircle from "@/public/cakeArtists/smallCircle.png";
import spoontoo from "@/public/cakeArtists/spoontoo.png";
import heroCake from "@/public/cakeArtists/heroCake.png";

const CakeArtistHero = () => {
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
    <section className="w-full relative h-auto bg-[#101010] pt-8 flex flex-col items-center justify-center">
      <div className="relative w-full h-[700px] md:h-[600px] width-container mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-14">
        {/* text section */}
        <div className=" w-full md:w-[50%] flex flex-col items-center md:items-start ">
          <motion.h1
            className="text-white font-semibold text-3xl md:4xl lg:text-6xl text-center md:text-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Get a Taste of Tomorrow's Cakes, Today.
          </motion.h1>

          <motion.h5
            className="text-sm w-full md:w-[90%] text-white py-8 md:py-14 text-center md:text-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Experience Cakes Like Never Before: Augmented Reality Delight.
          </motion.h5>

          <motion.button
            className="uppercase w-fit px-4 py-3 text-white bg-secondary rounded-md mb-12 text-sm lg:text-base"
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
        <div className="hidden md:flex w-full md:w-[50%] md:h-auto relative">
          {/* Circle */}
          <div className="absolute w-full flex justify-center items-center">
            <Image className="absolute" src={bigCircle} alt="bigcircle" />
            <Image
              className="absolute w-[75%]"
              src={smallCircle}
              alt="bigcircle"
            />
          </div>

          <motion.div
            className="absolute -top-28 lg:-top-20 left-7 lg:left-4"
            style={{ x: mouseX, y: mouseY }}
          >
            <motion.div
              className="relative w-[70%] lg:w-full"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={spoontoo} alt="web-element-1 transform" />
            </motion.div>
          </motion.div>

          {/* Cake */}
          <motion.div
            className="absolute -top-56 left-20"
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
              <Image src={heroCake} alt="element-21 transform" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Image section (Hidden for md and above) */}
        <div className="relative w-full h-[550px] mr-9 md:hidden">
{/* circle */}
        <div className="absolute w-full flex justify-center items-center bottom-[60%] left-[6%]">
            <Image className="absolute" src={bigCircle} alt="bigcircle" />
            <Image
              className="absolute w-[75%]"
              src={smallCircle}
              alt="bigcircle"
            />
          </div>

          

          <motion.div
            className="absolute left-12 bottom-32"
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
              <Image className="w-20" src={spoontoo} alt="web-element-1 transform" />
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
                className="w-64"
                src={heroCake}
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

export default CakeArtistHero;
