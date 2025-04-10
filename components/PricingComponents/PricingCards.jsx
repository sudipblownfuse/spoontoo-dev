"use client";

import React from "react";
import { motion } from "framer-motion";

const PricingCards = ({ isYearly }) => {
  const packageData = [
    {
      name: "Starter",
      offerings: [
        "Digital Food Menu",
        "AR food viewing",
        "Unlimited Dish Upload & Iteration",
      ],
      price: 69,
    },
    {
      name: "Individual Stores",
      offerings: [
        "Digital Food Menu",
        "AR food viewing",
        "FeedBack Form",
        "Food Animations",
        "Branding",
        "Brand URL",
        "Unlimited Dish Upload & Iteration",
      ],
      price: 100,
    },
    {
      name: "Chains",
      offerings: [
        "Digital Food Menu",
        "AR food viewing",
        "FeedBack Form",
        "Food Animations",
        "Branding",
        "Brand URL",
        "Unlimited Dish Upload & Iteration",
      ],
      price: 400,
    },
  ];

  const animations = [
    { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } }, // Left to Right
    { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }, // Bottom to Top
    { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } }, // Right to Left
  ];

  return (
    <div className="w-full width-container mx-auto px-5 sm:px-10 flex flex-col lg:flex-row justify-around items-center pt-16 pb-24">
      {packageData.map((item, index) => (
        <motion.div
        key={index}
        className="group relative overflow-hidden w-full sm:w-[50%] lg:w-[30%] h-[490px] sm:h-[580px] mt-7 bg-white
        rounded-3xl flex flex-col justify-between items-center border-[2px] border-transparent
        drop-shadow-md hover:drop-shadow-2xl transition-all duration-300 ease-in-out"
        initial={animations[index].initial}
        animate={animations[index].animate}
        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:rounded-3xl before:border-[2px] before:border-secondary before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-500 before:ease-in-out" />
      
        {/* Content stays above border effect */}
        <div className="relative z-10 w-full px-4 sm:px-5 flex flex-col items-center">
          <h3 className="text-2xl font-semibold py-6">{item.name}</h3>
          <div className="h-[1px] w-[80%] bg-[#464646]"></div>
          <div className="w-full flex flex-col items-center gap-3 pt-5">
            {item.offerings.map((offer, i) => (
              <h5 key={i} className="font-semibold text-gray-600 text-sm sm:text-base">
                {offer}
              </h5>
            ))}
          </div>
        </div>
      
        <div className="relative z-10 w-full px-5 flex flex-col items-center pb-9">
          <h5 className="text-2xl font-extrabold">
            ${isYearly ? item.price : ((item.price / 12) * 1.4).toFixed()}.00
          </h5>
          <button
            className={`uppercase w-fit px-6 py-3 rounded-md my-3 text-sm sm:text-base text-secondary border-[2px] border-secondary transform transition-all duration-300 ease-linear
            group-hover:bg-secondary group-hover:text-white`}
          >
            Get Started!
          </button>
        </div>
      </motion.div>
      
      ))}
    </div>
  );
};

export default PricingCards;
