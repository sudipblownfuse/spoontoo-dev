"use client";

import { motion } from "framer-motion";

const OurValues = () => {
  const data = [
    {
      title: "Effortless 3D Creation",
      desc: "Forget complex photoshoots and expensive equipment. If you can take a video of your dish, you can create a stunning 3D model with Spoontoo.",
    },
    {
      title: "No App, No Barrier",
      desc: "Your customers can access your 3D menu instantly through a QR code or a link. By removing the need to download an app, we ensure a seamless and inclusive experience for everyone.",
    },
    {
      title: "Drive Sales and Engagement",
      desc: "An interactive menu isn't just a novelty; it's a powerful sales tool. By giving customers a true-to-life preview, you empower them to order more adventurously and with greater confidence, directly impacting your bottom line.",
    },
    {
      title: "Amplify Your Brand",
      desc: "Our shareable 3D models turn your customers into your best marketers. Imagine your signature dish going viral on social media in stunning augmented reality.",
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
          Why Choose Spoontoo For <br />Your AR Cafe Makeover?
        </motion.h3>

        <motion.h6
          className="w-[90%] sm:w-[70%] text-center py-2 sm:py-8 text-sm sm:text-base"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
         In a fast-paced industry, you need solutions that are both impactful and easy to implement. That's the core of Spoontoo's design.
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
