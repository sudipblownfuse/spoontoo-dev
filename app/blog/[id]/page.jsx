"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { allBlogs } from "../page";
import ViewBlogBody from "@/components/BlogComponents/ViewBlogComponents/ViewBlogBody";
import ViewBlogSuggestionSec from "@/components/BlogComponents/ViewBlogComponents/ViewBlogSuggestionSec";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const { id } = useParams();
  const router = useRouter();

  const blogToView = allBlogs.find((item) => item.id === Number(id));

  // --------------------- If the BLOG is not found --------------
  if (!blogToView) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <p className="p-10">Blog not found.</p>
        <button
          onClick={() => router.back()}
          className="group pb-1 relative uppercase text-sm text-secondary flex items-center gap-3 border-none transition-all duration-300"
        >
          <FaAngleLeft className="text-base transform transition-transform duration-300 group-hover:-translate-x-1 z-10" />
          <span className="relative z-10">Go Back</span>

          {/* Bottom border animation */}
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    );
  }
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top scroll bar */}
      <motion.div
        className="fixed top-20 md:top-24 left-0 right-0 h-1 bg-secondary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Scrollable content */}
      <main className="w-full min-h-screen pt-32 overflow-x-clip">
        <div className="w-full h-auto width-container mx-auto px-5 md:px-14 flex justify-between">
          {/* --------------------------------- BLOG BODY --------------------------- */}
          <div className="w-[64%] h-auto">
            <ViewBlogBody blog={blogToView}/>
          </div>

          {/* ---------------------------- Suggestions and Categories ----------------------------- */}
          <div className="w-[30%] h-auto">
            <ViewBlogSuggestionSec blog={blogToView} />
          </div>
        </div>
      </main>
    </>
  );
}
