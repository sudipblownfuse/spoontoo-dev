"use client";

import { motion } from "framer-motion";

const OurValues = () => {
  const data = [
    {
      title: "Default to Transparency",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    },
    {
      title: "Improve Consistently",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    },
    {
      title: "Be a No-Ego Doer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    },
    {
      title: "Choose Optimism",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    },
  ];

  return (
    <section className="w-full h-auto">
      <div className=" w-full width-container mx-auto px-5  lg:px-14 flex flex-col items-center">
        <motion.h3
          className="text-3xl sm:text-4xl font-semibold text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our values
        </motion.h3>

        <motion.h6
          className="w-[90%] sm:w-[70%] text-center py-2 sm:py-8 text-sm sm:text-base"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Since 2013, we’ve been open with Buffer’s finances and our team’s
          salaries, among many other metrics. We share openly because we believe
          in the power of transparency to build trust, hold us accountable to a
          high standard, and push our industry forward.
        </motion.h6>

        <div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center flex-wrap pt-6 sm:pt-14">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[45%] h-56 flex flex-col items-center sm:items-start mb-2 sm:mb-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-end items-start gap-4">
                <div className="h-12 lg:h-14 w-12 lg:w-14 bg-secondary rounded-full flex justify-center items-center text-2xl font-semibold text-white">
                  {index + 1}
                </div>
                <div className="w-[80%] flex flex-col items-start">
                  <h5 className="text-lg lg:text-xl font-semibold">
                    {item.title}
                  </h5>
                  <h6 className="w-[85%] py-2 sm:py-4 text-sm lg:text-base ">
                    {item.desc}
                  </h6>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
