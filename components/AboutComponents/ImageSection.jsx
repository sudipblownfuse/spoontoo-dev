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
      <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
  {images.map((img, index) => (
    <motion.div
      key={index}
      className={`relative w-full overflow-hidden rounded-xl shadow-lg 
        ${index === 2 ? "mt-8" : index % 3 === 0 ? "mt-6" : "mt-0"} 
        ${index % 2 === 0 ? "h-40 md:h-52" : "h-52 md:h-64"}`}
      initial={{ opacity: 0, scale: 0.5 }} // Starts small in the center
      whileInView={{ opacity: 1, scale: 1 }} // Expands smoothly to normal size
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true }} // Triggers once per scroll
    >
      <Image
        src={img}
        alt={`Image ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </motion.div>
  ))}
</div>
    </section>
  );
};

export default ImageSection;
