"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import qrImg from "@/public/HomeImages/qrImg.png";

const ScanToExperience = () => {
  return (
    <section className="py-20">
      <div className="w-full h-auto bg-black">
        <div className="w-full width-container relative mx-auto flex flex-col-reverse md:flex-row md:justify-between items-center px-3 md:px-14">
          {/* Text Section */}
          <motion.div
            className="w-full md:w-[45%] flex flex-col items-center md:items-start md:px-5 py-24 md:py-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white pb-8 text-center md:text-start">
              See the Magic of an AR Menu on Your Phone
            </h2>
            <h6 className="text-white text-sm md:text-base text-center md:text-start">
              Scan the code and check out a real AR Cafe menu — it’s quick, fun, and works right from your phone.
            </h6>
          </motion.div>

          {/* QR Section */}
          <div className="w-full md:w-[50%] h-auto relative flex justify-center md:justify-end items-center">
            <motion.div
              className="absolute w-60 md:w-96 bg-white border border-black rounded-2xl drop-shadow-lg flex justify-center items-center p-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image alt="QR-Image" src={qrImg} />
            </motion.div>
            <div className="relative h-28 md:h-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanToExperience;
