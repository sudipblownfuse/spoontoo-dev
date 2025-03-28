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

  return (
    <div className="w-full width-container mx-auto px-10 flex justify-center items-center pt-16 pb-20">
      {packageData.map((item, index) => (
        <div
          key={index}
          className="w-1/3 h-[540px] rounded-3xl flex flex-col justify-between items-center border-[2px] border-gray-300 shadow-md"
        >
          {/* Top section */}
          <div className="w-full px-5 flex flex-col items-center">
            <h3 className="text-2xl font-semibold py-6">{item.name}</h3>
            <div className="h-[1px]  w-[80%] bg-[#464646]"></div>
            <div className="w-full flex flex-col items-center gap-3 pt-5">
              {item.offerings.map((offer, i) => (
                <h5 className="font-semibold text-gray-600">{offer}</h5>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full px-5 flex flex-col items-center pb-9">
            <h5 className="text-2xl font-semibold">${isYearly ? item.price : (item.price /12 * 1.4).toFixed()}.00</h5>
            <motion.button
              className="uppercase w-fit px-6 py-3 text-white bg-secondary rounded-md my-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              Get Started!
            </motion.button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
