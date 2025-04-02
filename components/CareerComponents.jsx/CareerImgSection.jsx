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
    <section className="w-full h-auto flex flex-col justify-start items-center mt-24 px-14">
      <h3 className="w-full width-container px-14 text-4xl font-semibold text-black pt-10 pb-6 text-start">
        We Work Hard, Party Harder
      </h3>

      <div className="w-full width-container mx-auto relative px-10">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: false }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
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
                  delay: index * 0.1,
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
        <div className="absolute -top-16 right-14 flex gap-2">
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
