"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useNotification } from "@/context/NotificationContext";
import { recentBlogs } from "@/app/blog/page";
import { FaRegClock } from "react-icons/fa";
import category1Img from "@/public/blog/category1.png";
import category2Img from "@/public/blog/category2.png";
import category3Img from "@/public/blog/category3.png";
import category4Img from "@/public/blog/category4.png";
import { useRouter } from "next/navigation";

const ViewBlogSuggestionSec = ({ blog }) => {
  const { addNotification } = useNotification();
  const [email, setEmail] = useState("");

  const categoryData = [
    { name: "Technology", img: category1Img },
    { name: "Augmented Reality", img: category2Img },
    { name: "Virtual Reality", img: category3Img },
    { name: "Mixed Reality", img: category4Img },
  ];

  const router = useRouter();

  // -------------------- View Blog Navigation func ------------
  const navigate = (path) => {
    router.push(path)
  }

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
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col pb-24 lg:pb-0">
      {/* ----------------------- Subscribe Input Box ---------------------- */}
      <motion.div
        className="hidden w-full h-auto relative lg:flex items-center justify-end mt-12"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <input
          className="w-full bg-gray-300 py-3 text-base rounded-lg pl-4 pr-36  focus:ring-2 focus:ring-secondary focus:outline-none"
          placeholder="Enter your email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="uppercase absolute mr-1 px-5 py-2 text-base rounded-lg bg-secondary text-white  hover:bg-[#bb2f2f]"
        >
          SUBSCRIBE
        </button>
      </motion.div>

      {/* ------------------------ Categories ---------------------- */}
      <motion.div
        className="hidden w-full lg:flex justify-between items-center pt-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {["Popular", "Recent", "Trendy"].map((item, index) => (
          <p
            key={index}
            className="text-white px-5 py-1 bg-secondary rounded-full"
          >
            {item}
          </p>
        ))}
      </motion.div>

      {/* ---------------------------- Suggested Blogs ---------------------- */}
      <div className="w-full flex flex-col gap-7 pt-10">
      <h1 className="text-xl font-semibold lg:hidden">Most Popular</h1>

      {recentBlogs.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex items-start justify-center gap-3 cursor-pointer bg-white p-2 rounded-xl shadow-sm hover:shadow-md"
          onClick={() => navigate(`/blog/${item.id}`)}
        >
          <div className="h-32 w-[40%] rounded-2xl overflow-hidden">
            <Image
              className="h-full w-full object-cover transition-transform duration-300"
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
            />
          </div>

          <div className="w-[58%] pt-2">
            <h2 className="w-full text-sm font-semibold">{item.title}</h2>
            <div className="flex gap-2 items-center pt-2">
              <FaRegClock className="text-gray-600" />
              <p className="text-xs text-gray-600">25 May, 2025</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

      {/* ---------------------------- Category Section --------------------- */}
      <div className="w-full flex flex-col gap-4 pt-16">
        <h1 className="text-xl font-semibold">Category</h1>
        {categoryData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full h-32 rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer"
          >
            <Image
              className="absolute h-full w-full object-cover hover:scale-105 duration-300 ease-in-out"
              src={item.img}
              alt={item.name}
            />
            <h2 className="relative  text-xl font-semibold text-white">
              {item.name}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ViewBlogSuggestionSec;
