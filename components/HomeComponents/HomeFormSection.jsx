"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import phoneIcon from "@/public/footer/phone.svg";
import locationIcon from "@/public/footer/location.svg";
import mailIcon from "@/public/footer/mail.svg";
import clockIcon from "@/public/footer/clock.svg";
import { useNotification } from "@/context/NotificationContext";

const HomeFormSection = () => {

  const { addNotification } = useNotification();
  
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  
    // -------------- Handle Change Input Values -----------------
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    //--------------------- handle dSubmit function ------------------
    const handleSubmit = (e) => {
      e.preventDefault();
      try {
        const { firstName, lastName, email, message } = formData;
  
        if (!firstName || !lastName || !email || !message) {
          return addNotification(
            "error",
            "Please fill all the fields before submitting."
          );
        }
  
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return addNotification("error", "Please enter a valid email address.");
        }
  
        // If everything is valid
        addNotification("success", "Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
  
        // Optionally clear form or send data here
      } catch (error) {
        console.log(error);
        addNotification(
          "error",
          "Internal server error. Please try again later."
        );
      }
    };

  return (
    <section className="w-fulll h-auto pt-12 md:pt-20 pb-20 lg:pb-40">
      <div className="w-full width-container mx-auto px-5 lg:px-14 flex flex-col lg:flex-row justify-between items-center">
        {/* Text-section */}
        <div className="w-[90%] lg:w-[40%] h-auto flex flex-col items-center lg:items-start gap-4 lg:gap-10">
          {/* Heading */}
          <motion.h3
            className="font-semibold text-center lg:text-start text-2xl sm:text-3xl"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Ready to discuss
            <br />
            your project with us?
          </motion.h3>

          {/* Subtext */}
          <motion.h6
          className="text-center lg:text-start text-sm sm:text-base"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Let’s talk about how we can craft a user experience that not only
            looks great but drives real growth for your product.
          </motion.h6>

          <div className="hidden lg:flex justify-start w-full">
            <ul className="w-[80%] flex flex-col items-start space-y-2 lg:space-y-5 text-black text-sm sm:text-base">
              {[
                {
                  icon: locationIcon,
                  text: (
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=1314+E+LAS+OLAS+BLVD+%232342,+FORT+LAUDERDALE,+33301"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      1314 E LAS OLAS BLVD #2342, FORT LAUDERDALE, 33301
                    </a>
                  ),
                  delay: 0.3,
                },
                {
                  icon: mailIcon,
                  text: (
                    <a
                      href="mailto:sales@spoontoo.com"
                      className="hover:underline"
                    >
                      sales@spoontoo.com
                    </a>
                  ),
                  delay: 0.4,
                },
                {
                  icon: phoneIcon,
                  text: "+19546077460",
                  delay: 0.5,
                },
                {
                  icon: clockIcon,
                  text: "Mon. - Fri. 8AM - 6PM",
                  delay: 0.6,
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start justify-center gap-4"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: item.delay,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <Image src={item.icon} alt="icon" />
                  <motion.h6 className="font-normal">{item.text}</motion.h6>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[60%] h-auto mx-5 bg-white shadow-lg drop-shadow-lg rounded-2xl mt-10 lg:mt-0">
          <form
            className="w-full h-auto px-5 py-12 space-y-5 relative text-sm lg:text-base"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex flex-col lg:flex-row gap-5">
              {/* First Name */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 font-semibold mb-1">
                    
                  First Name<span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#F2F1F1] focus:ring-2 focus:ring-secondary focus:outline-none"
                />
              </motion.div>

              {/* Last Name */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 font-semibold mb-1">
                  Last Name<span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#F2F1F1] focus:ring-2 focus:ring-secondary focus:outline-none"
                />
              </motion.div>
            </div>

            {/* Email ID */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 font-semibold mb-1">
                Email ID<span className="text-secondary">*</span>
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-[#F2F1F1] focus:ring-2 focus:ring-secondary focus:outline-none"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 font-semibold mb-1">
                Message<span className="text-secondary">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-[#F2F1F1] focus:ring-2 focus:ring-secondary focus:outline-none"
                rows="5"
              />
            </motion.div>

            {/* Submit Button */}
            <div className="absolute left-1/2 bottom-[-34px] transform -translate-x-1/2">
              <motion.button
              type="submit"
                className="uppercase w-fit px-6 py-3 text-white bg-secondary rounded-md my-3 drop-shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                Book A Demo
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeFormSection;
