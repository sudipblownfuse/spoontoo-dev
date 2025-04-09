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
    { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } },  // Bottom to Top
    { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } },  // Right to Left
  ];

  return (
    <div className="w-full width-container mx-auto px-5 sm:px-10 flex flex-col lg:flex-row justify-center items-center pt-16 pb-24">
      {packageData.map((item, index) => (
        <motion.div
          key={index}
          className={`w-full sm:w-[60%] lg:w-1/3 h-[490px] sm:h-[540px] mt-7 bg-white ${
            index === 1 && "h-[590px]"
          } rounded-3xl flex flex-col justify-between items-center border-[2px] border-gray-300 ${
            index === 1 && "z-10 border-[3px] border-secondary"
          } shadow-md`}
          initial={animations[index].initial}
          animate={animations[index].animate}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          viewport={{once: true, amount:0.4}}
          whileHover={{ scale: 1.05 }}
        >
          {/* Top section */}
          <div className="w-full px-4 sm:px-5 flex flex-col items-center">
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

          {/* Bottom Section */}
          <div className="w-full px-5 flex flex-col items-center pb-9">
            <h5 className="text-2xl font-extrabold">
              ${isYearly ? item.price : ((item.price / 12) * 1.4).toFixed()}.00
            </h5>
            <button
              className={`uppercase w-fit px-6 py-3 rounded-md my-3 text-sm sm:text-base ${
                index === 1
                  ? "text-white bg-secondary transform transition-all hover:scale-110 duration-300 ease-in-out"
                  : "text-secondary border-[2px] border-secondary transform transition-all hover:bg-secondary hover:text-white duration-300 ease-linear"
              } `}
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
