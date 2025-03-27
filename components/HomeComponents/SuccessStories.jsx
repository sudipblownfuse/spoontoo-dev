"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import team1 from "@/public/HomeImages/successStory/team1.png";
import team2 from "@/public/HomeImages/successStory/team2.png";

const successStories = [
  {
    id: 1,
    name: "John Doe",
    story: "Spoontoo transformed our menu experience!",
    img: team1,
    designation: "ceo"
  },
  {
    id: 2,
    name: "Emily Smith",
    story: "Customers love the AR-powered dishes!",
    img: team2,
    designation: "ceo"
  },
  {
    id: 3,
    name: "Michael Lee",
    story: "Easy to use and fantastic for branding!",
    img: team1,
    designation: "ceo"
  },
  {
    id: 4,
    name: "Sophia Brown",
    story: "Our restaurant saw a 30% increase in engagement!",
    img: team2,
    designation: "ceo"
  },
  {
    id: 5,
    name: "Daniel Wilson",
    story: "A must-have for modern restaurants!",
    img: team1,
    designation: "ceo"
  },
  { id: 6, name: "Olivia Davis", story: "Game-changer in digital dining!", img: team2, designation: "ceo" },
];

const SuccessStories = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full h-auto bg-black flex flex-col justify-start items-center my-10 px-5">
      <h3 className="text-4xl font-semibold text-white py-10">
        Success Stories
      </h3>

      <div className="w-full width-container mx-auto relative px-20">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="w-full px-10 flex justify-center"
        >
          {successStories.map((story, index) => (
            <SwiperSlide key={story.id}>
              <motion.div
                className="p-4 rounded-lg shadow-lg hover:cursor-pointer transition-all my-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className="flex justify-start items-start gap-5">
                  <Image className=" h-32 w-32 rounded-full object-cover" src={story.img} alt="client-img" />
                  <div>
                  <h4 className="text-xl font-semibold text-white">
                    {story.name}
                    <span className="uppercase font-semibold text-sm text-gray-300 pl-3">.{story.designation}</span>
                  </h4>
                  <p className="text-gray-300 mt-3">{story.story}</p>
                </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-secondary  rounded-full shadow-lg"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaAngleLeft size={24} />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-secondary rounded-full shadow-lg"
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
          background-color: #D62828 !important;
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;
