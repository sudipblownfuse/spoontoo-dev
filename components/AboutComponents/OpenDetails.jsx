"use client";

import { motion } from "framer-motion";

const OpenDetails = () => {
  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
    }),
  };

  return (
    <section className="w-full h-auto py-14 sm:py-20">
      <div className="w-full width-container mx-auto flex flex-col items-center px-0 sm:px-14">
        <motion.h2
          className="w-[70%] sm:w-[100%] text-3xl font-semibold text-center sm:text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We are an Open Company
        </motion.h2>

        <motion.h6
          className="w-[80%] sm:w-[70%] text-center py-6 sm:py-8 text-sm sm:text-base"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Since 2013, we’ve been open with Buffer’s finances and our team’s
          salaries, among many other metrics. We share openly because we believe
          in the power of transparency to build trust, hold us accountable to a
          high standard, and push our industry forward.
        </motion.h6>

        {/* Breif Details */}
        <div className="w-full flex justify-between gap-1 flex-shrink-0 items-center overflow-x-auto scrollbar-hide">
          {[
            {
              value: "$1.73M",
              title: "MRR",
              desc: "Monthly Recurring Revenue",
              bg: "#FFCECE",
            },
            {
              value: "175,514",
              title: "MAU",
              desc: "Monthly Active Users",
              bg: "#FFDEDE",
            },
            {
              value: "$20.78M",
              title: "ARR",
              desc: "Annual Recurring Revenue",
              bg: "#FFF0F0",
            },
            {
              value: "$27.81M",
              title: "ARPU",
              desc: "Average revenue per user",
              bg: "#FFF5F5",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="w-60 h-56 sm:h-60  rounded-2xl flex flex-col items-center justify-center px-5 md:px-0 m-3"
              style={{ backgroundColor: item.bg }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <h4 className="w-full text-center pb-5 md:pb-10 font-semibold text-base sm:text-xl">
                {item.value}
              </h4>
              <div className="w-full px-5 flex flex-col gap-1 items-start justify-center text-sm sm:text-base ">
                <h5 className="w-full font-semibold">{item.title}</h5>
                <h6 className="w-20 md:w-full font-light inline-block ">{item.desc}</h6>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenDetails;
