"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import img1 from "@/public/career/work-hard/img1.png";
import img2 from "@/public/career/work-hard/img2.png";
import img3 from "@/public/career/work-hard/img3.png";
import img4 from "@/public/career/work-hard/img4.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CareerImgSection = () => {
  const images = [img1, img2, img3, img4, img1, img2, img3, img4];
  const swiperRef = useRef(null);

  return (
    <section className="w-full h-auto flex flex-col justify-start items-center mt-8 md:mt-16 px-6 md:px-14">
      <h3 className="w-full width-container px-0  text-xl sm:text-2xl lg:text-4xl font-semibold text-black pt-10 pb-6 text-center sm:text-start">
        We Work Hard, Party Harder
      </h3>

      {/* Mobile View - Horizontal Scroll */}
      <div className="w-full md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-2">
          {images.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[220px] h-56 flex-shrink-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Image
                src={item}
                alt={`image${index + 1}`}
                width={220}
                height={220}
                className="h-full w-full object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop View - Swiper */}
      <div className="hidden md:block w-full width-container mx-auto relative px-0 ">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
          onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
          onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="h-80 flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={item}
                  alt={`image${index + 1}`}
                  width={300}
                  height={300}
                  className="h-66 object-cover rounded-2xl"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute -top-16 right-14 gap-2 hidden lg:flex">
          <button
            className="p-3 bg-secondary text-white rounded-full hover:bg-[#bd3131]"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <AiOutlineLeft size={24} />
          </button>
          <button
            className="p-3 bg-secondary text-white rounded-full hover:bg-[#bd3131]"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <AiOutlineRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerImgSection;
