"use client";

import React, { useState } from "react";
import projeshMehta from "@/public/contact/projeshMehta.png";
import linkedinIcon from "@/public/contact/linkedin.png";
import Image from "next/image";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer digital food menu solutions with AR food viewing, branding, and more for restaurants and food businesses.",
    },
    {
      question: "How does AR food viewing work?",
      answer:
        "Our AR food viewing feature allows customers to see realistic 3D models of dishes before ordering, enhancing their dining experience.",
    },
    {
      question: "Can I customize my digital food menu?",
      answer:
        "Yes, you can fully customize your digital menu, add unlimited dishes, and update it anytime as per your requirements.",
    },
    {
      question: "Is there a trial period available?",
      answer:
        "Yes, we offer a trial period for our services. Contact us for more details on how to get started.",
    },
    {
      question: "How do I get support if I face issues?",
      answer:
        "You can reach out to our support team via email or LinkedIn, and we'll be happy to assist you.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, ease: "easeOut", duration: 0.5 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full h-auto bg-[#101010] py-16 mt-20">
      <div className="w-full width-container mx-auto px-5 lg:px-14 flex justify-center items-start">
        {/* CEO */}
        <div className="w-[40%] hidden lg:flex">
          <motion.div
            className="w-[80%] border-[2px] rounded-xl rounded-tr-[80px] border-gray-400 p-10 flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div className="flex items-center" variants={itemVariants}>
              <Image className="h-24 w-24" src={projeshMehta} alt="CEO-img" />
              <div className="pl-6">
                <h4 className="text-xl text-white font-semibold">
                  Projesh Mehta
                </h4>
                <h6 className="text-gray-400">CEO</h6>
              </div>
            </motion.div>
            <motion.h6 className="text-gray-200 pt-5" variants={itemVariants}>
              "Have more questions or just curious about future possibilities?
              Feel free to connect with me on LinkedIn."
            </motion.h6>
            <motion.div
              className="bg-white w-full rounded-full h-14 flex justify-between items-center mt-5"
              variants={itemVariants}
            >
              <a
                href="https://www.linkedin.com/in/projesh/"
                className="ml-6 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
              <Image
                className="h-12 w-12 rounded-full mr-2"
                src={linkedinIcon}
                alt="linkedin-icon"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="w-full lg:w-[60%] text-white">
          <motion.h3
            className="text-3xl font-semibold mb-6 text-center lg:text-start"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            FAQ
          </motion.h3>
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-b border-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "bg-white text-black p-4 rounded-md"
                    : "py-2"
                }`}
              >
                <button
                  className="w-full text-left font-semibold text-sm lg:text-lg flex justify-between items-center py-2 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="text-secondary pr-4">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="mt-2 text-sm lg:text-base">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
