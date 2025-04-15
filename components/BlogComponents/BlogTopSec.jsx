"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNotification } from "@/context/NotificationContext";

const BlogTopSec = () => {
const {addNotification} = useNotification();
  const [email, setEmail] = useState("")

  // -------------------- handle Submit ---------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        return addNotification("error", "Please enter a valid email address.");
      }

      // If everything is valid
      addNotification("success", "Form submitted successfully!");
      setEmail("")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="w-full h-auto pt-5 lg:pt-20">
      <div className="w-full h-auto width-container mx-auto px-5 md:px-14 flex flex-col items-center">
        <motion.h1
          className="w-[80%] sm:w-full text-3xl lg:text-4xl font-semibold text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our latest Stories and Interviews
        </motion.h1>
        <motion.h6
          className="text-center w-[80%] sm:w-[70%] pt-2 text-sm sm:text-base"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Subscribe to learn about new product and features, the latest in
          technology, and updates.
        </motion.h6>

        <motion.div
          className="w-full  md:w-[65%] h-auto relative flex items-center justify-end mt-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <input
            className="w-full bg-gray-300 py-4 text-sm sm:text-base lg:text-lg rounded-lg pl-4 pr-36 sm:pr-44 lg:pr-56 focus:ring-2 focus:ring-secondary focus:outline-none"
            placeholder="Enter your email"
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <button onClick={handleSubmit} className="uppercase absolute mr-1 px-5 py-3 text-sm sm:text-base lg:text-lg rounded-lg bg-secondary text-white  hover:bg-[#bb2f2f]">
            SUBSCRIBE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogTopSec;
