"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import clientImg1 from "@/public/HomeImages/clientImg1.png";
import clientImg2 from "@/public/HomeImages/clientImg2.png";
import clientImg3 from "@/public/HomeImages/clientImg3.png";
import clientImg4 from "@/public/HomeImages/clientImg4.png";
import clientImg5 from "@/public/HomeImages/clientImg5.png";

const images = [clientImg1, clientImg2, clientImg3, clientImg4, clientImg5];

const OurTopClients = () => {
  return (
    <section className="w-full h-72 bg-black flex flex-col justify-start items-center overflow-hidden my-6">
      <h3 className="text-4xl font-semibold text-white py-10">Our Top Clients</h3>
      <div className="w-full relative flex overflow-hidden">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }} // Moves halfway, ensuring seamless loop
          transition={{
            repeat: Infinity, // Infinite loop
            duration: 25, // Adjust speed (lower = faster)
            ease: "linear",
          }}
        >
          {/* Duplicate images for seamless transition */}
          {[...images, ...images,...images, ...images].map((img, index) => (
            <Image key={index} src={img} alt={`Client-${index}`} className="h-24 mx-4" />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurTopClients;
