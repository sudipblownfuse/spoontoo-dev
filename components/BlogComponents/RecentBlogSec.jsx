"use client";

import React from "react";
import Image from "next/image";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const RecentBlogSec = ({ recentBlogs }) => {
  const highlightedBlog = recentBlogs[0];
  const otherRecentBlogs = recentBlogs.slice(1, 4);

  return (
    <section className="w-full h-auto pt-20 pb-10">
      <div className="w-full width-container mx-auto px-14 flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          className="w-full text-3xl font-semibold text-start"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Recent Blogs Post
        </motion.h2>

        {/* ---------------------- Recent Blogs -------------------- */}
        <div className="w-full h-auto flex justify-between pt-5 ">
          {/* --------------- Highlighted Blog ------------ */}
          <div className="w-1/2 pr-4 flex flex-col items-start">
            <motion.div
              className="w-full h-96 rounded-3xl"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                className="w-full h-full rounded-3xl object-cover"
                src={highlightedBlog.image}
                alt="highlighted-blog-img"
              />
            </motion.div>

            <div className="flex flex-col justify-start relative ">
              <motion.h4
                className="w-[85%] text-xl font-semibold py-4"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {highlightedBlog.title}
              </motion.h4>
              <motion.h6
                className="w-[95%]"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {highlightedBlog.description}
              </motion.h6>
              <HiMiniArrowUturnRight className="absolute text-3xl text-gray-500 top-5 right-8" />
            </div>
          </div>

          {/* ----------------- Other RECENT Blogs --------------- */}
          <div className="w-1/2 pl-2 flex flex-col gap-5 items-start">
            {/* blog */}
            {otherRecentBlogs.map((blog, index) => (
              <motion.div
                key={index}
                className="w-full h-44 flex justify-between"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.2, // Each div appears one after another
                }}
                viewport={{ once: true }}
              >
                {/* image */}
                <div className="w-[36%] h-full object-cover rounded-2xl">
                  <Image
                    className="h-full w-full object-cover rounded-2xl"
                    src={blog.image}
                    alt={`recent-blog-${index + 2}`}
                  />
                </div>
                {/* Details */}
                <div className="w-[60%] flex flex-col items-start pl-2">
                  <h5 className="font-semibold">{blog.title}</h5>
                  <h6 className="text-sm py-2">{blog.description}</h6>
                  {/* categories */}
                  <div className="flex justify-start items-center gap-4">
                    {blog.categories.map((category, i) => (
                      <p
                        key={i}
                        className="text-xs text-white bg-secondary px-4 py-1 rounded-full"
                      >
                        {category}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogSec;
