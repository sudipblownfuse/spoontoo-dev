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
        "Unlimited Product Upload & Iteration",
      ],
      price: 69,
    },
    {
      name: "Individual Shops",
      offerings: [
        "Digital Food Menu",
        "AR food viewing",
        "FeedBack Form",
        "Food Animations",
        "Remove Spoontoo Branding",
        "Branding",
        "Brand URL",
        "Unlimited Product Upload & Iteration",
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
        "Remove Spoontoo Branding",
        "Brand URL",
        "Unlimited Product Upload & Iteration",
      ],
      price: 400,
    },
    {
      name: "Enterprise",
      offerings: [
        "Digital Food Menu",
        "AR food viewing",
        "FeedBack Form",
        "Food Animations",
        "Remove Spoontoo Branding",
        "App Integrations",
        "Brand URL",
        "Marketing Integrations",
        "Report & Analysis",
        "Access to Added Benifits",
        "Enterprise Grade 24*7 Support",
      ],
      price: 400,
    },
  ];

  return (
    <div className="w-full width-container mx-auto px-5  flex flex-col lg:flex-row justify-around items-center pt-16 pb-24">
      {packageData.map((item, index) => (
        <motion.div
          key={index}
          className={`group w-full sm:w-[50%] lg:w-[24%] h-[560px] sm:h-[580px] mt-7 bg-white
rounded-3xl flex flex-col justify-between items-center border-[2px] border-gray-300
drop-shadow-md hover:drop-shadow-2xl transition-all duration-100 ease-in-out
hover:border-secondary`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Top section */}
          <div className="w-full px-4 sm:px-5 flex flex-col items-center">
            <h3 className="text-2xl font-semibold py-4">{item.name}</h3>
            <div className="h-[1px] w-[80%] bg-[#464646]"></div>
            <div className="w-full flex flex-col items-center gap-3 pt-5">
              {item.offerings.map((offer, i) => (
                <h5
                  key={i}
                  className={`font-semibold text-gray-600 text-sm text-center ${
                    offer === "Remove Spoontoo Branding" ? "line-through" : ""
                  }`}
                >
                  {offer}
                </h5>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full px-5 flex flex-col items-center pb-5">
            <h5 className="text-2xl font-extrabold">
              ${isYearly ? item.price : ((item.price / 12) * 1.4).toFixed()}.00
            </h5>
            <button
              className={`uppercase w-fit px-6 py-3 rounded-md my-3 text-sm sm:text-base text-secondary border-[2px] border-secondary transform transition-all duration-300 ease-linear
      group-hover:bg-secondary group-hover:text-white hover:scale-105 `}
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
