"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";
import { useNotification } from "@/context/NotificationContext";

const ViewBlogBody = ({ blog }) => {
  const { addNotification } = useNotification();
  const [email, setEmail] = useState("");

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
    <div className="w-full h-auto flex flex-col pb-20">
      {/* --------------------- Subscribe Input Mobile Tab View ------------------ */}
      <motion.div
        className="w-full h-auto relative flex items-center justify-end pb-10 lg:hidden"
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

      {/* --------------------------- heading ------------------------ */}
      <motion.h1
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight "
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {blog.title}
      </motion.h1>
      {/* ------------------------ details ------------------------- */}
      <motion.div
        className="flex flex-wrap justify-start items-center gap-2 sm:gap-5 lg:gap-8 text-sm font-semibold text-gray-600 pt-5 "
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* time */}
        <div className="w-[45%] md:w-auto flex items-center gap-2">
          <FaRegClock />
          <p>12 August, 2024</p>
        </div>

        {/* Comment */}
        <div className="w-[45%] md:w-auto flex items-center gap-2">
          <MdOutlineComment />
          <p>6 comments</p>
        </div>

        {/* Time Read */}
        <div className="w-[45%] md:w-auto flex items-center gap-2">
          <MdOutlineEmojiEmotions />
          <p>5 min read</p>
        </div>

        {/* Time Read */}
        <div className="w-[45%] md:w-auto flex items-center gap-2">
          <HiMiniArrowUturnRight />
          <p>Share</p>
        </div>
      </motion.div>
      {/* ------------------------ image --------------------------- */}
      <motion.div
        className="w-full h-[450px] rounded-2xl overflow-hidden pt-3"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          className="w-full h-full object-cover rounded-2xl"
          src={blog.image}
          alt="blog-img"
        />
      </motion.div>

      {/* ------------------------ BLOG BODY ------------------------ */}
      <motion.div
        className="w-full flex flex-col items-start"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <p className="text-justify  text-sm pt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries. <br />
          <br />
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries.
        </p>

        {/* --- Quote ----- */}
        <div className="relative w-full h-52 bg-gray-300 rounded-3xl my-10 flex justify-center items-center">
          <FaQuoteRight className=" absolute text-7xl text-black/20 right-20 bottom-1/4" />
          <h2 className="w-[80%] font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </h2>
        </div>

        {/* H2 */}
        <div className="w-full flex flex-col items-start">
          <h3 className="text-2xl font-semibold">Heading 2</h3>
          <p className="text-justify  text-sm pt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries. <br />
            <br />
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries.Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries.
          </p>
        </div>

        {/* H3 */}
        <div className="w-full flex flex-col items-start pt-12">
          <h3 className="text-2xl font-semibold">Heading 2</h3>
          <p className="text-justify  text-sm pt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries. <br />
            <br />
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries.Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewBlogBody;
