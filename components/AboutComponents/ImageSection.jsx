"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "@/public/aboutImages/imageSection/img1.png";
import img2 from "@/public/aboutImages/imageSection/img2.png";
import img3 from "@/public/aboutImages/imageSection/img3.png";
import img4 from "@/public/aboutImages/imageSection/img4.png";
import img5 from "@/public/aboutImages/imageSection/img5.png";

const images = [img1, img2, img3, img4, img5];

const ImageSection = () => {
  return (
    <section className="w-full h-auto py-14">
      <div className="px-6 lg:px-0 width-container mx-auto">
        {/* Horizontal scroll for mobile & tablet, grid for large screens */}
        <div className="flex lg:grid lg:grid-cols-5 gap-x-4 lg:gap-x-6 overflow-x-auto scrollbar-hide pr-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`
                relative flex-shrink-0 min-w-[13rem] sm:min-w-[15rem] overflow-hidden rounded-xl shadow-lg
                ${index === 2 ? "lg:mt-8" : index % 3 === 0 ? "lg:mt-6" : "lg:mt-0"} 
                h-40 md:h-52 lg:h-auto
              `}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
