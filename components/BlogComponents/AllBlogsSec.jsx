"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const AllBlogsSec = ({ allBlogs }) => {
  const blogsPerPage = 6;
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <section className="w-full h-auto pt-16">
      <div className="w-full width-container mx-auto px-12 flex flex-col justify-start">
        {/* --------------- heading --------------- */}
        <h2 className="w-full px-6 text-start text-3xl font-bold py-6">
          All Blogs
        </h2>

        {/* ------------------------ Blog Card Section --------------------- */}
        <motion.div
          key={currentPage}
          className="w-full h-auto flex justify-center flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {currentBlogs.map((blog, index) => (
              <motion.div
              key={index}
              className="w-[30%] px-4 pb-8 pt-3 bg-white drop-shadow-md rounded-3xl flex flex-col items-start 
              transform transition-all ease-in-out"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="w-full h-52 rounded-3xl">
                <Image
                  className="w-full h-full rounded-3xl object-cover"
                  src={blog.image}
                  alt="blog-img"
                />
              </div>
              <div className="flex flex-col justify-start relative ">
                <h4 className="w-full text-lg font-semibold py-3">
                  {blog.title}
                </h4>
                <h6 className="w-full text-sm">{blog.description}</h6>
                <div className="w-full flex justify-start gap-3 pt-3">
                  {blog.categories.map((category, i) => (
                    <p
                      key={i}
                      className="text-xs text-white bg-secondary px-3 py-1 rounded-full"
                    >
                      {category}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ------------------------ Pagination Controls ---------------------- */}
        <div className="w-[90%] flex justify-between gap-3 py-10 mx-auto">
          <button
            className="px-4 py-2 border-[2px] border-black text-black rounded-md disabled:opacity-50 flex justify-start items-center gap-2"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FaChevronLeft/>
            <span>Previous</span>
          </button>

          <div className="">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-2 py-2 rounded-md font-semibold ${
                  currentPage === index + 1 ? " text-secondary" : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            className="px-4 py-2 border-[2px] border-black text-black rounded-md disabled:opacity-50 flex justify-end items-center gap-2"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <span>Next</span>
            <FaChevronRight/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllBlogsSec;
