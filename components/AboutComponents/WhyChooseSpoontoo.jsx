"use client";

import { motion } from "framer-motion";

const WhyChooseSpoontoo = () => {
  const cardVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
    }),
  };

  return (
    <section className="w-full h-auto py-10 sm:py-16">
      <div className="w-full width-container mx-auto flex flex-col items-center px-0 sm:px-14">
        <motion.h2
          className="w-full sm:w-[100%] text-2xl lg:text-3xl font-semibold text-center sm:text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Why Choose Spoontoo For <br />
          Your AR Cafe Makeover?
        </motion.h2>

        <motion.h6
          className="w-[80%] sm:w-[70%] text-center py-6 sm:py-8 text-sm sm:text-base"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          In a fast-paced industry, you need solutions that are both impactful
          and easy to implement. That's the core of Spoontoo's design.
        </motion.h6>

        {/* Breif Details */}
        <div className="w-full flex justify-between gap-5 flex-shrink-0 items-center overflow-x-auto scrollbar-hide px-5 md:px-0">
          {[
            {
              title: "Effortless 3D Creation",
              desc: "Forget complex photoshoots and expensive equipment. If you can take a video of your dish, you can create a stunning 3D model with Spoontoo.",
              bg: "#FFCECE",
            },
            {
              title: "No App, No Barrier",
              desc: "Your customers can access your 3D menu instantly through a QR code or a link. By removing the need to download an app, we ensure a seamless and inclusive experience for everyone.",
              bg: "#FFDEDE",
            },
            {
              title: "Drive Sales and Engagement",
              desc: "An interactive menu isn't just a novelty; it's a powerful sales tool. By giving customers a true-to-life preview, you empower them to order more adventurously and with greater confidence, directly impacting your bottom line.",
              bg: "#FFF0F0",
            },
            {
              title: "Amplify Your Brand",
              desc: "Our shareable 3D models turn your customers into your best marketers. Imagine your signature dish going viral on social media in stunning augmented reality.",
              bg: "#FFF5F5",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="w-[215px] sm:w-[265px] h-64 sm:h-72  rounded-2xl flex flex-col items-center justify-start  p-5 flex-shrink-0"
              style={{ backgroundColor: item.bg }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <h4 className="h-10 text-base font-semibold text-center">{item.title}</h4>
              <p className="text-xs sm:text-sm pt-5 text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSpoontoo;
