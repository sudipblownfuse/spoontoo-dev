"use client";

import React, { useState } from "react";
import PricingCards from "./PricingCards";
import { motion } from "framer-motion";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="w-full h-auto pt-6">
      <div className="w-full width-container mx-auto px-14 flex flex-col items-center">
        {/* Toggler Button */}
        <motion.div 
        className=" relative flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          >
          <h5 className={`px-4 py-2 text-xl font-semibold`}>Monthly</h5>
          <div
            className={`relative w-12 h-6 flex items-center rounded-full mx-2 cursor-pointer drop-shadow-2xlshadow-4xl ${
              isYearly ? "bg-secondary" : "bg-gray-300"
            }`}
            onClick={() => setIsYearly(!isYearly)}
          >
            <div
              className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isYearly ? "translate-x-6" : "translate-x-1"
              }`}
            ></div>
          </div>
          <h5 className={`px-4 py-2 text-xl font-semibold`}>Yearly</h5>
          {/* Yearly Offer */}
          <div className="absolute flex justify-center -right-[60%]">
            <h6 className="relative text-sm px-4 py-1 bg-yellow-300 rounded-full drop-shadow-md">
              Save 40% yearly
            </h6>
          </div>
        </motion.div>
      </div>

      <PricingCards isYearly={isYearly}/>
    </section>
  );
};

export default PricingSection;
