"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const AllBlogsSec = ({ allBlogs }) => {
  const blogsPerPage = 6;
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

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

  // --------- view Blog Func -------
  const navigate = (path) => {
    router.push(path);
  };

  return (
    <section className="w-full h-auto pt-8 lg:pt-12">
      <div className="w-full width-container mx-auto px-2 lg:px-12 flex flex-col justify-start">
        {/* --------------- heading (Desktop & Tablet) --------------- */}
        <h2 className="hidden sm:flex w-full px-6 text-start text-2xl lg:text-3xl font-bold py-6">
          All Blogs
        </h2>
        {/* Heading for Mobile View */}
        <h2 className="flex w-full px-6 text-start text-2xl font-bold py-6 sm:hidden">
          Recent Blog Post
        </h2>

        {/* ------------------------ Blog Card Section (Desktop & Tablet) --------------------- */}
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
              <div
                key={index}
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="w-[92%] sm:w-[48%] lg:w-[31%] px-4 pb-8 pt-3 bg-white drop-shadow-md rounded-3xl flex flex-col items-center
  transition-transform duration-100 ease-out hover:scale-105 hover:shadow-xl mb-5 cursor-pointer"
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
                  <h6 className="w-full text-sm text-pretty">
                    {blog.description}
                  </h6>
                  <div className="w-full flex justify-start gap-2 pt-3">
                    {blog.categories.map((category, i) => (
                      <p
                        key={i}
                        className="text-[10px] text-white bg-secondary px-3 py-1 rounded-full"
                      >
                        {category}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ------------------------ Pagination Controls ---------------------- */}
        <div className="w-[90%] flex justify-between gap-3 py-10 mx-auto">
          <button
            className="px-1 sm:px-4 py-2 border-[2px] border-black text-black rounded-md disabled:opacity-50 flex justify-start items-center gap-2"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
            <span className="hidden sm:flex">Previous</span>
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
            className="px-1 sm:px-4 py-2 border-[2px] border-black text-black rounded-md disabled:opacity-50 flex justify-end items-center gap-2"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <span className="hidden sm:flex">Next</span>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllBlogsSec;
