"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import team1 from "@/public/aboutImages/ourTeam/team1.png";
import team2 from "@/public/aboutImages/ourTeam/team2.png";
import team3 from "@/public/aboutImages/ourTeam/team3.png";

const data = [
  {
    id: 1,
    name: "Debayan Mukhopadhyay",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    img: team1,
  },
  {
    id: 2,
    name: "Indrajit Adhikary",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    img: team2,
  },
  {
    id: 3,
    name: "Projesh Mehta",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    img: team3,
  },
  {
    id: 4,
    name: "Debayan Mukhopadhyay",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    img: team1,
  },
  {
    id: 5,
    name: "Indrajit Adhikary",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    img: team2,
  },
  {
    id: 6,
    name: "Projesh Mehta",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    img: team3,
  },
];

const ClanMembers = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center bg-[#2F2F2F] mt-10 px-0 lg:px-14">
      <h3 className=" w-[80%] width-container mx-auto lg:w-full text-3xl lg:text-4xl font-semibold text-white pt-10 pb-6 text-center">
        From our clan members
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
            1024: { slidesPerView: 1 },
          }}
          className="w-full px-10 flex justify-center"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index+1}>
              <motion.div
                className="flex flex-col items-center  p-7  "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                {/* quote / comment */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative p-5">
                  <h6 className=" text-center text-gray-300 text-xs sm:text-sm md:text-base">{item.comment}</h6>
                  <ImQuotesLeft className="text-secondary absolute -left-3 lg:-left-8 -top-3 text-3xl lg:text-5xl" />
                  <ImQuotesRight className="text-secondary absolute -right-3 lg:-right-6 bottom-0 text-3xl lg:text-5xl" />
                </div>

                {/* Name & Image */}
                <div className="flex flex-col items-center py-6">
                    <div className="w-20 h-20 rounded-full">
                        <Image alt={item.name} src={item.img}/>
                    </div>
                    <h4 className="font-semibold text-white pt-3">{item.name}</h4>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* ✅ Fixed: Placed the pagination inside Swiper */}
          <div className="swiper-pagination custom-pagination"></div>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="hidden lg:flex absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-secondary "
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaAngleLeft size={24} />
        </button>
        <button
          className="hidden lg:flex absolute right-6 top-1/2 transform -translate-y-1/2 z-10 text-secondary"
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
          background-color: #d62928 !important;
        }
      `}</style>
    </section>
  );
};

export default ClanMembers;
