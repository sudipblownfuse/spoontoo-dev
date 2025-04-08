"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import contact2 from "@/public/contact/contact2.png";

const ContactForm = () => {
  return (
    <section className="w-fulll h-auto pt-4 lg:pt-20 pb-14">
      <div className="w-full width-container mx-auto px-5 sm:px-14 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        
        {/* Text-section */}
        <div className="w-full lg:w-[40%] h-auto flex flex-col items-center lg:items-start gap-4">
          {/* Heading */}
          <motion.h3
            className="text-3xl font-semibold"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Lets Talk
          </motion.h3>

          {/* Subtext */}
          <motion.h6
          className="text-sm sm:text-base text-center lg:text-start"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            We will respond to you within 24 hours. <br />
            We’ll sign an NDA if requested. <br />
            Access to dedicated product specialists.
          </motion.h6>

          {/* image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Image className="w-80" src={contact2} alt="contact-img" />
          </motion.div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[60%] h-auto mx-5 bg-white shadow-lg drop-shadow-lg rounded-2xl">
          <form
            className="w-full h-auto px-5 py-12 space-y-5 relative"
            action=""
          >
            <div className="w-full flex flex-col lg:flex-row gap-5">
              {/* First Name */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 font-semibold mb-1">
                  First Name<span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-[#F2F1F1] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </motion.div>

              {/* Last Name */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 font-semibold mb-1">
                  Last Name<span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-[#F2F1F1] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </motion.div>
            </div>

            {/* Email ID */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 font-semibold mb-1">
                Email ID<span className="text-secondary">*</span>
              </label>
              <input
                type="email"
                className="w-full p-3 bg-[#F2F1F1] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 font-semibold mb-1">
                Message<span className="text-secondary">*</span>
              </label>
              <textarea
                className="w-full p-3 bg-[#F2F1F1] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4"
                required
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <div className="absolute w-full md:w-auto left-1/2 bottom-[-85px] md:bottom-[-36px] transform -translate-x-1/2">
              <motion.button
                className="uppercase w-full md:w-fit px-6 py-3 text-white bg-secondary rounded-md my-3 drop-shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
