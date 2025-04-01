"use client";

import React from "react";
import { motion } from "framer-motion";

const MapView = () => {
  return (
    <section className="w-full h-auto py-8">
      <motion.div className="w-full width-container mx-auto px-14"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
      >
        {/* Google Map Embed */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58209.17343696263!2d88.363895!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a75935b6f7%3A0x61caa74d9765e7c4!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default MapView;
