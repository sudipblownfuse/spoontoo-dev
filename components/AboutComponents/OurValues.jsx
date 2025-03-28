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
      <div className=" w-full width-container mx-auto px-14 flex flex-col items-center">
        <motion.h3
          className="text-4xl font-semibold text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our values
        </motion.h3>

        <motion.h6
          className="w-[70%] text-center py-8"
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

        <div className="w-full h-auto flex justify-center items-center flex-wrap pt-14">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="w-[45%] h-56 flex flex-col items-start mb-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }} 
            >
              <div className="flex justify-start items-center gap-4">
                <div className="h-14 w-14 bg-secondary rounded-full flex justify-center items-center text-2xl font-semibold text-white">
                  {index + 1}
                </div>
                <h5 className="text-xl font-semibold">{item.title}</h5>
              </div>
              <h6 className="w-[85%] py-4">{item.desc}</h6>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
