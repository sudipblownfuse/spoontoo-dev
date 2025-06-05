"use client";

import React from "react";
import Image from "next/image";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const RecentBlogSec = ({ recentBlogs }) => {
  const highlightedBlog = recentBlogs[0];
  const otherRecentBlogs = recentBlogs.slice(1, 4);

  const router = useRouter();
  
    // -------------------- View Blog Navigation func ------------
    const navigate = (path) => {
      router.push(path)
    }

  return (
    <section className="hidden w-full h-auto pt-24 pb-10 sm:flex justify-center">
      <div className="w-full width-container relative mx-auto px-5 lg:px-14 flex flex-col items-center">
        {/* Heading */}
        <div className="absolute w-full px-5 lg:px-14">
          <motion.h2
            className="w-full relative text-2xl lg:text-4xl font-semibold text-start bottom-9 lg:bottom-0"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Recent Blogs Posts
          </motion.h2>
        </div>

        {/* ---------------------- Recent Blogs -------------------- */}
        <div className="w-full h-auto flex justify-between items-center ">
          {/* --------------- Highlighted Blog ------------ */}
          <div className="w-1/2 pr-4 flex flex-col items-start">
            <motion.div
              className="w-full h-44 lg:h-96 rounded-3xl"
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
                className="w-[75%] lg:w-[85%] text-sm lg:text-xl font-semibold py-4"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {highlightedBlog.title}
              </motion.h4>
              <motion.h6
                className="w-[95%] pt-2 lg:pt-4 text-xs lg:text-base"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {highlightedBlog.description}
              </motion.h6>
              <motion.div
                className="w-full flex justify-start gap-5 pt-3"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {highlightedBlog.categories.map((category, i) => (
                  <p
                    key={i}
                    className="text-xs lg:text-sm text-white bg-secondary px-4 py-1 rounded-full"
                  >
                    {category}
                  </p>
                ))}
              </motion.div>
              <motion.div
              className="absolute top-5 right-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              >
              <HiMiniArrowUturnRight
                
                className="w-9 lg:w-12 h-9 lg:h-12 relative p-2 lg:p-3 rounded-full text-gray-300 bg-gray-600  cursor-pointer 
                transform transition-all hover:bg-black hover:text-secondary duration-300 ease-in-out"
              />
              </motion.div>
            </div>
          </div>

          {/* ----------------- Other RECENT Blogs --------------- */}
          <div className="w-1/2 p-2 flex flex-col gap-3 items-start">
            {/* blog */}
            {otherRecentBlogs.map((blog, index) => (
              <motion.div
                key={index}
                className="w-full h-auto p-3 lg:p-4 bg-white drop-shadow-xl flex justify-between rounded-2xl cursor-pointer"
                onClick={()=> navigate(`/blog/${blog.id}`)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* image */}
                <div className="w-[36%] h-20 lg:h-44 object-cover rounded-2xl">
                  <Image
                    className="h-full w-full object-cover rounded-2xl"
                    src={blog.image}
                    alt={`recent-blog-${index + 2}`}
                  />
                </div>
                {/* Details */}
                <div className="w-[60%] h-auto flex flex-col items-start pl-2">
                  <h5 className="font-semibold text-xs lg:text-base">{blog.title}</h5>
                  <h6 className="w-full text-xs lg:text-sm py-2 truncate lg:text-pretty">{blog.description}</h6>
                  {/* categories */}
                  <div className="flex justify-start items-center gap-1 md:gap-2">
                    {blog.categories.map((category, i) => (
                      <p
                        key={i}
                        className="text-[8px] lg:text-[10px] text-white bg-secondary px-2  py-1 rounded-full"
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
