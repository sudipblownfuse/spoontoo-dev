"use client";

import React from "react";
import Image from "next/image";
import clockImg from "@/public/cakeArtists/clock.png";
import cupImg from "@/public/cakeArtists/cup.png";
import supportImg from "@/public/cakeArtists/support.png";
import signupImg from "@/public/cakeArtists/signup.png";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const CakeArtistInfo = () => {
  const data = [
    {
      heading: "Development",
      num: 750,
      img: clockImg,
    },
    {
      heading: "Cups of Coffee",
      num: 230,
      img: cupImg,
    },
    {
      heading: "Support Issues Solved",
      num: 50,
      img: supportImg,
    },
    {
      heading: "Sign Up",
      num: 200,
      img: signupImg,
    },
  ];

  return (
    <section className="w-full h-auto bg-black">
      <div className="w-full width-container mx-auto px-5 sm:px-14 flex justify-between flex-wrap py-16 lg:py-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[44%] lg:w-[24%] flex flex-col items-center justify-center mb-8 lg:mb-0"
          >
            <Image className="w-10 sm:w-auto" src={item.img} alt={item.heading} />
            {(() => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true });
              const [count, setCount] = useState(0);

              useEffect(() => {
                if (!isInView) return;

                let start = 0;
                const end = item.num;
                const duration = 5000; // in ms
                const frameDuration = 1000 / 60; // ~60fps
                const totalFrames = Math.round(duration / frameDuration);
                let frame = 0;

                const counter = setInterval(() => {
                  frame++;
                  const progress = frame / totalFrames;
                  const currentCount = Math.round(end * progress);

                  setCount(currentCount);

                  if (frame === totalFrames) {
                    clearInterval(counter);
                  }
                }, frameDuration);
              }, [isInView]);

              return (
                <h4 ref={ref} className="text-white font-bold text-xl sm:text-2xl lg:text-3xl py-2">
                  {index === 0 ? `${count} Hours` : `${count} +`}
                </h4>
              );
            })()}

            <h6 className=" text-gray-300 text-xs sm:text-sm md:text-base">
              {item.heading}
            </h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CakeArtistInfo;
