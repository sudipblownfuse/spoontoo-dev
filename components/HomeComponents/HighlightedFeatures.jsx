"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import videoToAR from "@/public/HomeImages/videoToAR.svg";
import foodDetails from "@/public/HomeImages/foodDetils.svg";
import trulyUnlimited from "@/public/HomeImages/trulyUnlimited.svg";
import socialCreation from "@/public/HomeImages/socialCreation.svg";
import supportOnboarding from "@/public/HomeImages/supportOnboarding.svg";
import photoRealistic from "@/public/HomeImages/photoRealistic.svg";
import menuEffect from "@/public/HomeImages/menuEffect.svg";
import reviewRewards from "@/public/HomeImages/reviewRewards.svg";
import noDownload from "@/public/HomeImages/noDownload.svg";
import iphoneImg from "@/public/HomeImages/iphone-img.png";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const HighlightedFeatures = () => {
  const leftFeatures = [
    {
      title: "Video to AR",
      desc: "Get your dish ready for viewing in a few hours. Just upload the video of the food.",
      img: videoToAR,
    },
    {
      title: "Truly Unlimited",
      desc: "No limitation AR views or upload number of dishes. Create new dishes everyday!",
      img: trulyUnlimited,
    },
    {
      title: "Support & Onboarding",
      desc: "Whenever you struggle with anything regarding Spontoo, just hit us on support forum.",
      img: supportOnboarding,
    },
    {
      title: "Menu Effects",
      desc: "Use one of the several cool menu effects to spice up your next great dish.",
      img: menuEffect,
    },
    {
      title: "No Download Required",
      desc: "Spoontoo work across all platforms. So your customers need not download another app.",
      img: noDownload,
    },
  ];

  const rightFeatures = [
    {
      title: "Food Details",
      desc: "Allow your customer to view more about the food like ingredients , nutrition values and allergens.",
      img: foodDetails,
    },
    {
      title: "Social Creation",
      desc: "Allow your customers to share your food in new way in AR across all social media.",
      img: socialCreation,
    },
    {
      title: "Photo realistic Food",
      desc: "Our AR indistinguishable from the real food.",
      img: photoRealistic,
    },
    {
      title: "Review and Rewards",
      desc: "Show all reviews about your restaurant and food in one place.",
      img: reviewRewards,
    },
  ];

  const allFeatures = [...leftFeatures, ...rightFeatures];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === allFeatures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allFeatures.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full h-auto pb-6 lg:py-20  ">
      <div className="w-full width-container mx-auto flex flex-col items-center px-3 lg:px-14">
        {/* title & description */}
        <div className="w-full flex flex-col items-center">
          <motion.h3
            className="text-2xl lg:text-4xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Highlighted Features
          </motion.h3>
          <motion.h6
            className="w-full lg:w-[70%] text-sm lg:text-base text-center py-5 lg:py-7"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Spoontoo's AR food menu lets cafes and restaurants showcase dishes
            in 3D with no app required. <br /> <br />
            Create an interactive AR menu for cafes or a full restaurant AR food
            menu from simple videos. It's fast, immersive, and works on any
            smartphone — perfect for modern AR cafe experiences.
          </motion.h6>
        </div>

        {/* Features and image */}
        <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center px-0 sm:px-5">
          {/* image carousel slider */}
          <div className="w-[50%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src={iphoneImg} alt="Iphone-Img" />
            </motion.div>
          </div>

          {/* Features for desktop view */}
          <div className="hidden w-full lg:w-[50%] h-auto lg:flex justify-center items-start pt-8 lg:pt-0">
            {/* Left Features */}
            <div className="w-full lg:w-[50%] border-r-[2px] border-black border-dashed">
              {leftFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`h-64 flex flex-col items-start justify-center gap-3 py-10 px-4 border-black border-dashed ${
                    i !== leftFeatures.length - 1 ? "border-b-[2px]" : ""
                  }`}
                >
                  <Image alt={feature.title} src={feature.img} />
                  <h4 className="font-semibold text-xl capitalize">
                    {feature.title}
                  </h4>
                  <h6>{feature.desc}</h6>
                </motion.div>
              ))}
            </div>

            {/* right Features */}
            <div className="w-full lg:w-[50%]">
              {rightFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }} // Start from right
                  whileInView={{ opacity: 1, x: 0 }} // Animate to position
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
                  className="h-64 flex flex-col items-start justify-center gap-3 py-10 px-4 border-black border-dashed border-b-[2px]"
                >
                  <Image alt={feature.title} src={feature.img} />
                  <h4 className="font-semibold text-xl capitalize">
                    {feature.title}
                  </h4>
                  <h6>{feature.desc}</h6>
                </motion.div>
              ))}

              <motion.div
                className="h-64 w-full flex justify-center items-center"
                initial={{ opacity: 0, x: 50 }} // Start from right
                whileInView={{ opacity: 1, x: 0 }} // Animate to position
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: rightFeatures.length * 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
              >
                <Link href="/how-it-works">
                  <motion.button
                    className="uppercase w-fit px-6 py-3 text-white bg-secondary rounded-md my-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    How It's Work
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Features for Tab And Mobile view (Horizontal Scroll) */}
          <div className="w-full flex flex-col items-center overflow-x-auto scrollbar-hide lg:hidden">
            <div className="w-full flex items-center overflow-x-scroll gap-4   scrollbar-hide py-10 px-4">
              {allFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="min-w-[240px] h-52 bg-white drop-shadow-lg rounded-lg flex flex-col items-start justify-center text-center p-6 border-[1px] border-gray-200 "
                >
                  <Image
                    alt={feature.title}
                    src={feature.img}
                    className="w-9 h-9 mb-3"
                  />
                  <h4 className="font-semibold text-base">{feature.title}</h4>
                  <h6 className="text-sm text-start pt-2">{feature.desc}</h6>
                </motion.div>
              ))}
            </div>
            <div className="flex w-72 items-center justify-center pb-4">
              <Link href="/how-it-works">
                <motion.button
                  className="uppercase w-full h-fit text-nowrap px-6 py-3 text-white bg-secondary rounded-md  text-sm"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  How It's Work
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedFeatures;
