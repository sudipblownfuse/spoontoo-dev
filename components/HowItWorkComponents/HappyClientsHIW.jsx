"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Jessica from "@/public/how-it-works/clients/Jessica.jpg"
import Caffe from "@/public/how-it-works/clients/Caffe.webp"
import RachelSimmons from "@/public/how-it-works/clients/Rachel-Simmons.jpg"

const clientData = [
  {
    id: 1,
    name: "Jessica Morgan",
    comment:
      "Spoontoo completely transformed how our guests interact with our menu. It’s innovative, easy to use, and helped increase our dessert sales by 30%.",
    img: Jessica,
    designation: "Sweet Cravings Bakery",
  },
  {
    id: 2,
    name: "",
    comment:
      "We wanted something unique that could enhance our dine-in experience. Spoontoo’s AR technology did just that and our customers love it.",
    img: Caffe,
    designation: "Cafe By The Lane, Kolkata",
  },
  {
    id: 3,
    name: "Rachel Simmons",
    comment:
      "From custom branding to seamless integration, Spoontoo delivered beyond expectations. Their platform brought our food visuals to life.",
    img: RachelSimmons,
    designation: "Bella Bites Café",
  },
];

const HappyClientsHIW = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full h-auto flex flex-col justify-start items-center my-4 sm:my-10 px-5 md:px-14">
      <h3 className=" text-3xl lg:text-4xl font-semibold text-black pt-0 sm:pt-10 pb-6 text-center md:text-start">
        Our Happy Clients
      </h3>

      <div className="w-full width-container mx-auto relative px-5 lg:px-20">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full px-10 flex justify-center"
        >
          {clientData.map((story, index) => (
            <SwiperSlide key={story.id}>
              <motion.div
                className="h-72 flex flex-col items-start p-7 border-[2px] border-gray-600 rounded-2xl rounded-tr-[100px] hover:cursor-pointer transition-all my-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-5">
                  <Image
                    className=" h-20 w-20 rounded-full object-cover"
                    src={story.img}
                    alt="client-img"
                  />
                  <div className="flex flex-col justify-center items-start gap-1">
                    <h4 className="text-base font-semibold text-black">
                      {story.name}
                    </h4>
                    <h5 className="uppercase font-semibold text-sm text-gray-600 ">
                      .{story.designation}
                    </h5>
                  </div>
                </div>
                <h6 className="py-5 text-sm sm:text-base">{story.comment}</h6>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* ✅ Fixed: Placed the pagination inside Swiper */}
          <div className="swiper-pagination custom-pagination"></div>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="absolute -left-5 md:left-6 top-1/2 transform -translate-y-1/2 z-10 text-gray-500"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaAngleLeft size={24} />
        </button>
        <button
          className="absolute -right-5 md:right-6 top-1/2 transform -translate-y-1/2 z-10 text-gray-500"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <FaAngleRight size={24} />
        </button>

        <div className="w-full relative width-container mx-auto pt-12 flex justify-center">
          <div className="custom-pagination flex justify-center absolute mx-6"></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #6B7280 !important;
        }
      `}</style>
    </section>
  );
};

export default HappyClientsHIW;
