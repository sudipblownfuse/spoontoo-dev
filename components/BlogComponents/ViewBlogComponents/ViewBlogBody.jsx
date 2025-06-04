"use client";

import React from "react";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const ViewBlogBody = ({ blog }) => {
  return (
    <div className="w-full h-auto flex flex-col pb-20">
      {/* --------------------------- heading ------------------------ */}
      <h1 className="text-4xl font-semibold leading-tight ">{blog.title}</h1>
      {/* ------------------------ details ------------------------- */}
      <div className="flex justify-start items-center gap-7 text-sm font-semibold text-gray-600 pt-5">
        {/* time */}
        <div className="flex items-center gap-2">
          <FaRegClock />
          <p>12 August, 2024</p>
        </div>

        {/* Comment */}
        <div className="flex items-center gap-2">
          <MdOutlineComment />
          <p>6 comments</p>
        </div>

        {/* Time Read */}
        <div className="flex items-center gap-2">
          <MdOutlineEmojiEmotions />
          <p>5 min read</p>
        </div>

        {/* Time Read */}
        <div className="flex items-center gap-2">
          <HiMiniArrowUturnRight />
          <p>Share</p>
        </div>
      </div>
      {/* ------------------------ image --------------------------- */}
      <div className="w-full h-[450px] rounded-2xl overflow-hidden pt-3">
        <Image
          className="w-full h-full object-cover rounded-2xl"
          src={blog.image}
          alt="blog-img"
        />
      </div>

      {/* ------------------------ BLOG BODY ------------------------ */}
      <div className="w-full flex flex-col items-start">
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
            specimen book. It has survived not only five centuries.Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
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
            specimen book. It has survived not only five centuries.Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogBody;
