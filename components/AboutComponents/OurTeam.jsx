"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import team1 from "@/public/aboutImages/ourTeam/team1.png";
import team2 from "@/public/aboutImages/ourTeam/team2.png";
import team3 from "@/public/aboutImages/ourTeam/team3.png";

const successStories = [
  {
    id: 1,
    name: "Debayan Mukhopadhyay",
    story: [
      "ISM at Adobe, Ex-HDFC Bank, 5+ years Co-Founder Rhodotion (Agri Supply chain) with 13+ years of experience across sectors",
      "Experience of working with Management, Sales and Marketing, Branding, Strategy and Finance with MNCs and Startups",
      "Winner Spikes Digital Asia Award 2014",
    ],
    img: team1,
    designation: "COO",
  },
  {
    id: 2,
    name: "Indrajit Adhikary",
    story: [
      "Ex-Tcs and Technology Consultant with experience of 9+ years",
      "System Architect, Software Engineer, Full Stack Development, Game Development and Management",
      "Experience of working with MNCs and building solutions for multiple startups for growth and scalability.",
    ],
    img: team2,
    designation: "CTO",
  },
  {
    id: 3,
    name: "Projesh Mehta",
    story: [
      "Co Founder Wedding Bliss with 9+ years of experience across Technology & Design",
      "Unity Development, UI/UX Design and Development, Front-end Development, IOT Application and Hardware Prototyping",
      "Experience of consulting multiple startups with development, Award winning Documentary FilmMaker and game consultant",
    ],
    img: team3,
    designation: "ceo",
  },
  {
    id: 4,
    name: "Debayan Mukhopadhyay",
    story: [
      "ISM at Adobe, Ex-HDFC Bank, 5+ years Co-Founder Rhodotion (Agri Supply chain) with 13+ years of experience across sectors",
      "Experience of working with Management, Sales and Marketing, Branding, Strategy and Finance with MNCs and Startups",
      "Winner Spikes Digital Asia Award 2014",
    ],
    img: team1,
    designation: "COO",
  },
  {
    id: 5,
    name: "Indrajit Adhikary",
    story: [
      "Ex-Tcs and Technology Consultant with experience of 9+ years",
      "System Architect, Software Engineer, Full Stack Development, Game Development and Management",
      "Experience of working with MNCs and building solutions for multiple startups for growth and scalability.",
    ],
    img: team2,
    designation: "CTO",
  },
  {
    id: 6,
    name: "Projesh Mehta",
    story: [
      "Co Founder Wedding Bliss with 9+ years of experience across Technology & Design",
      "Unity Development, UI/UX Design and Development, Front-end Development, IOT Application and Hardware Prototyping",
      "Experience of consulting multiple startups with development, Award winning Documentary FilmMaker and game consultant",
    ],
    img: team3,
    designation: "ceo",
  },
];

const OurTeam = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full h-auto bg-black flex flex-col justify-start items-center my-10 px-5 md:px-14">
      <h3 className="text-3xl sm:text-4xl font-semibold text-white pt-10">Our Team</h3>
      <h6 className="w-[90%] sm:w-[60%] text-white text-center pt-4 pb-10 text-sm lg:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since.
      </h6>

      <div className="w-full width-container mx-auto relative px-5 md:px-20">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }} // ✅ FIXED: Removed `el: ".custom-pagination"`
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
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
                <div className="flex flex-col items-center justify-center gap-5">
                  <Image
                    className=" h-48 w-48 rounded-full object-cover p-3 border-2 border-white border-dashed"
                    src={story.img}
                    alt="client-img"
                  />
                  <div className="flex flex-col justify-center items-center gap-3">
                    <h4 className="text-xl font-semibold text-white">
                      {story.name}
                    </h4>
                    <h5 className="uppercase font-semibold text-sm text-gray-300 pl-3">
                      .{story.designation}
                    </h5>
                    {story.story.map((sec, i) => (
                      <p key={i} className="text-gray-300 mt-2 text-center text-sm md:text-base">
                        {sec}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* ✅ Fixed: Placed the pagination inside Swiper */}
          <div className="swiper-pagination custom-pagination"></div>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="absolute -left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-10 text-secondary  rounded-full shadow-lg"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaAngleLeft size={24} />
        </button>
        <button
          className="absolute -right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-10 text-secondary rounded-full shadow-lg"
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
          background-color: #d62828 !important;
        }
      `}</style>
    </section>
  );
};

export default OurTeam;
