"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cupCake1 from "@/public/cakeArtists/cupCake1.png"
import chocolateCake from "@/public/cakeArtists/chocolateCake.png"


const CakeBusinessDetailedInfo = () => {
  const data = [
    {
      id: 1,
      heading: "Enhanced Portfolio Presentation",
      details: [
        {
          subHeading: "Dynamic 3D Showcase: ",
          description:
            "Instead of static photos, AR allows potential customers to view cakes as interactive 3D models on their smartphones or tablets. They can rotate, zoom in on intricate details, and get a true sense of the cake's size and design from all angles, overcoming the limitations of 2D images.",
        },
        {
          subHeading: "Bringing Designs to Life: ",
          description:
            "AR can showcase design variations, different frosting textures, and even subtle animations (e.g., virtual sprinkles falling, candles flickering) to make the cakes more appealing and memorable.",
        },
      ],
    },
    {
      id: 2,
      heading: "Improved Customer Engagement & Sales",
      details: [
        {
          subHeading: "'Try Before You Buy' Experience: ",
          description:
            "Customers can use AR to visualize how a cake would look at their specific event. Imagine pointing their phone at their dining table to see a virtual cake in place, helping them choose the right size and design.",
        },
        {
          subHeading: "Personalized Customization: ",
          description:
            "AR can enable real-time customization. Clients could potentially change frosting colors, add virtual decorations, or see different flavor combinations rendered visually before placing an order, leading to higher satisfaction and fewer misunderstandings.",
        },
        {
          subHeading: "Interactive Menus & Marketing: ",
          description:
            "AR-enabled menus or brochures can display 3D cake models with embedded information like flavor profiles, ingredients, and pricing, making the selection process more engaging and informative. Social media filters featuring the designer's cakes can also generate buzz and wider reach.",
        },
      ],
    },
    {
      id: 3,
      heading: "Streamlined Consultation & Design Process",
      details: [
        {
          subHeading: "Collaborative Visualization: ",
          description:
            "During client consultations (virtual or in-person), AR can be used to project cake designs onto a real surface, allowing for better collaboration and clearer communication of the artist's vision and the client's preferences.",
        },
        {
          subHeading: "Efficient Prototyping (Virtual): ",
          description:
            "While not a physical prototype, AR can serve as a quick and cost-effective way to present design concepts and get client feedback before investing time and resources in baking a sample.",
        },
      ],
    },
    {
      id: 4,
      heading: "Unique Branding & Competitive Advantage",
      details: [
        {
          subHeading: "Innovation Showcase: ",
          description:
            "Embracing AR positions the cake designer as modern, innovative, and forward-thinking, helping them stand out in a competitive market.",
        },
        {
          subHeading: "Memorable Brand Experience: ",
          description:
            "Interacting with a cake through AR creates a unique and memorable experience for the customer, fostering a stronger connection with the brand.",
        },
      ],
    },
    {
      id: 5,
      heading: "Marketing & Promotion",
      details: [
        {
          subHeading: "Social Media Buzz: ",
          description:
            "AR experiences are highly shareable on social media, encouraging organic marketing and word-of-mouth referrals.",
        },
        {
          subHeading: "Events & Workshops: ",
          description:
            "AR can enhance displays at wedding fairs, exhibitions, and cake decorating workshops, attracting more attention and providing an interactive element.",
        },
        {
          subHeading: "Storytelling & Brand Narrative: ",
          description:
            "AR can be used to tell the story behind a cake's design, the inspiration, or the ingredients, adding an emotional connection for the customer.",
        },
      ],
    },
  ];

  return (
    <section className="w-full h-auto relative">
        {/* -----Top Circle---- */}
        <div className="absolute w-[680px] h-[680px] flex items-center justify-center top-[4%] left-[2%]">
            <div className="absolute w-full h-full rounded-full border-[2px] border-[#FFBABA]"></div>
            <div className="relative w-[75%] h-[75%] rounded-full border-[2px] border-[#FFBABA]"></div>
        </div>
        {/* -----bottom Circle---- */}
        <div className="absolute w-[680px] h-[680px] flex items-center justify-center bottom-0 right-[3%]">
            <div className="absolute w-full h-full rounded-full border-[2px] border-[#FFBABA]"></div>
            <div className="relative w-[75%] h-[75%] rounded-full border-[2px] border-[#FFBABA]"></div>
        </div>
        
      <div className="relative w-full width-container mx-auto px-5 md:px-14 flex justify-between items-center ">

        

        {/* Center Line */}
        <div className="absolute w-[3px] bg-black h-full left-1/2"></div>

        {/* --------------------------------------------------- Cards ------------------------------------------------------- */}
<div className="relative w-full h-auto flex flex-col items-center">
  {data.map((item) => (
    // ------------------- CARD -----------------
    <div
      key={item.id}
      className={`relative w-full flex flex-row ${
        item.id % 2 === 1 ? "flex-row-reverse" : "flex-row"
      } items-start justify-center py-[60px]`}
    >
      {/* ------ Heading ------ */}
      <motion.h3
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className={`w-[41%] text-3xl font-bold px-4 ${
          item.id % 2 === 1 ? "text-start" : "text-end"
        }`}
      >
        {item.heading}
      </motion.h3>

      {/* ------ Numbering ------ */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-[18%] h-10 relative flex justify-center items-center"
      >
        <span className="h-[2px] bg-black w-full"></span>
        <div className="absolute h-12 w-12 bg-secondary rounded-full flex items-center justify-center">
          <span className="relative text-white font-semibold text-2xl">
            {item.id}
          </span>
        </div>
      </motion.div>

      {/* ------ Description ------ */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-[41%] pt-6 pb-8 px-5 border-[3px] rounded-xl border-black bg-white"
      >
        {item.details.map((desc, i) => (
          <h5 key={i} className="text-sm text-justify pb-2">
            <span className="font-bold">{desc.subHeading}</span>
            {desc.description}
          </h5>
        ))}
      </motion.div>

      {/* Cup cake image */}
      {item.id === 2 && (
        <motion.div
          className="absolute left-[10%] bottom-[14%]"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image src={cupCake1} alt="cup-cake" />
        </motion.div>
      )}
    </div>
  ))}

  {/* ----- Bottom Cake ----- */}
  <motion.div
    className="absolute right-[10%] -bottom-12"
    animate={{ y: [0, 10, 0] }}
    transition={{
      duration: 3.2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image className="w-72" src={chocolateCake} alt="cup-cake" />
  </motion.div>
</div>

      </div>
    </section>
  );
};

export default CakeBusinessDetailedInfo;
