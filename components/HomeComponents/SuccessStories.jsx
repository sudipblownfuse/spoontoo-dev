"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const successStories = [
  { id: 1, name: "John Doe", story: "Spoontoo transformed our menu experience!" },
  { id: 2, name: "Emily Smith", story: "Customers love the AR-powered dishes!" },
  { id: 3, name: "Michael Lee", story: "Easy to use and fantastic for branding!" },
  { id: 4, name: "Sophia Brown", story: "Our restaurant saw a 30% increase in engagement!" },
  { id: 5, name: "Daniel Wilson", story: "A must-have for modern restaurants!" },
  { id: 6, name: "Olivia Davis", story: "Game-changer in digital dining!" },
];

const SuccessStories = () => {
  return (
    <section className="w-full h-auto bg-black flex flex-col justify-start items-center my-6">
      <h3 className="text-4xl font-semibold text-white py-10">Success Stories</h3>

      <div className="w-full width-container px-5 mx-auto py-10 relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          navigation={{
            clickable: true,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Custom pagination container
            renderBullet: (index, className) =>
              `<span class="${className} w-2 h-2 mx-1 rounded-full"></span>`,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="w-full px-10"
        >
          {successStories.map((story, index) => (
            <SwiperSlide key={story.id}>
              <motion.div
                className="p-4 bg-gray-800 rounded-lg shadow-lg hover:cursor-pointer transition-all my-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={(e) => e.target.closest(".swiper").swiper.autoplay.stop()}
                onMouseLeave={(e) => e.target.closest(".swiper").swiper.autoplay.start()}
              >
                <div className="">
                  <h4 className="text-xl font-semibold text-white">{story.name}</h4>
                  <p className="text-gray-300 mt-3">{story.story}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination container (centered) */}
        <div className="custom-pagination flex justify-center mt-4 bg-black"></div>

        {/* Custom Navigation Buttons */}
      </div>
    </section>
  );
};

export default SuccessStories;
