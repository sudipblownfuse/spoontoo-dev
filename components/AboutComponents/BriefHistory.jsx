"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const historyData2 = [
  {
    id: 1,
    Year: 2018,
    month: "November",
    description: "Spoontoo was created as part of a Startup Sprint",
  },
  {
    id: 2,
    Year: 2019,
    month: "December",
    description:
      "Spoontoo was accepted into AngelPad startup accelerator, with initial $120,000 investment",
  },
  {
    id: 3,
    Year: 2020,
    month: "December",
    description:
      "Spoontoo was accepted into AngelPad startup accelerator, with initial $120,000 investment",
  },
  {
    id: 4,
    Year: 2021,
    month: "March",
    description:
      "Spoontoo was accepted into AngelPad startup accelerator, with initial $120,000 investment",
  },
  {
    id: 5,
    Year: 2021,
    month: "December",
    description:
      "Spoontoo was accepted into AngelPad startup accelerator, with initial $120,000 investment",
  },
  {
    id: 6,
    Year: 2022,
    month: "December",
    description:
      "Spoontoo was accepted into AngelPad startup accelerator, with initial $120,000 investment",
  },
  {
    id: 7,
    Year: 2023,
    month: "December",
    description:
      "Spoontoo was accepted into AngelPad startup accelerator, with initial $120,000 investment",
  },
  {
    id: 8,
    Year: 2024,
    month: "December",
    description:
      "Spoontoo was accepted into AngelPad startup accelerator, with initial $120,000 investment",
  },
  {
    id: 9,
    Year: 2025,
    month: "February",
    description:
      "Spoontoo was accepted into AngelPad startup accelerator, with initial $120,000 investment",
  },
];

const BriefHistory = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full h-auto bg-black flex flex-col justify-start items-center my-10 px-5 relative">
      <div className="w-full width-container px-5 md:px-14">
        <h2 className=" text-3xl md:text-4xl font-semibold text-white pt-10 md:pb-10 text-center md:text-start">
          A Brief History
        </h2>
      </div>

      <div className="w-full width-container mx-auto relative px-5 md:px-20 py-6">
        <div className="mx-5 md:mx-20 absolute h-[1px] bg-white top-32 inset-0"></div>
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            350: {slidesPerView: 2},
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full px-10 my-14"
          onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
          onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
        >
          {historyData2.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-56 text-white flex flex-col items-start gap-4">
                <h4 className="text-base sm:text-xl font-semibold">{item.Year}</h4>
                <div className="h-3 w-3 rounded-full bg-secondary mt-1 sm:mt-0"></div>
                <h6 className="inline-block text-black font-light text-xs sm:text-sm md:text-base px-3 py-1 bg-white rounded-full">
                  {item.month}
                </h6>
                <h6 className="w-[70%] sm:w-[80%] lg:w-full text-gray-300 text-sm lg:text-base">{item.description}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="absolute  -left-4 sm:left-0 top-1/2 transform -translate-y-1/2 z-10 text-red-500 rounded-full shadow-lg"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaAngleLeft size={24} />
        </button>
        <button
          className="absolute -right-4 sm:right-0 top-1/2 transform -translate-y-1/2 z-10 text-red-500 rounded-full shadow-lg"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <FaAngleRight size={24} />
        </button>

        <div className="w-full relative width-container mx-auto pt-6 flex justify-center my-6">
          <div className="custom-pagination flex justify-center absolute mx-3"></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: red !important;
        }
      `}</style>
    </section>
  );
};

export default BriefHistory;
