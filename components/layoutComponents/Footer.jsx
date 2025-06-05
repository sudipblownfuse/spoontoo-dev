"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import footerBgImg from "@/public/footer/footer-bg.png";
import BrandMark from "@/public/footer/Brandmark1.png";
import LetterMark from "@/public/footer/Lettermark2.png";
import phoneIcon from "@/public/footer/phone.svg";
import locationIcon from "@/public/footer/location.svg";
import mailIcon from "@/public/footer/mail.svg";
import clockIcon from "@/public/footer/clock.svg";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();

  const sitemapList1 = [
    { name: "HOME", path: "/" },
    { name: "About US", path: "/about" },
    { name: "How It's Work", path: "/how-it-works" },
    {name: "Blogs", path: "/blog"},
    { name: "Pricing", path: "/pricing" },
  ];

  const sitemapList2 = [
    { name: "Career", path: "/career" },
    {name: "Contact", path: "contact"},
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Schedule A Demo", path: "/schedule-demo" },
  ];
  return (
    <footer className="relative w-full h-auto ">
      <Image
        src={footerBgImg}
        className="absolute w-full h-full object-cover"
        alt="footer-bg"
      />
      <div className="relative bg-black w-full h-full opacity-95 py-8">
        <div className="w-full width-container h-auto mx-auto flex flex-col items-center lg:flex-row lg:justify-between lg:items-center pt-6 md:pt-14 px-5 lg:px-14">
          {/* Logo & Description */}
          <div className="w-full lg:w-1/3 pr-0  md:pr-5">
            <div className="flex justify-center gap-5 lg:gap-10 md:justify-start">
              <Image className="h-16 md:h-24 w-auto" src={BrandMark} alt="brandmark" />
              <Image className="h-16 md:h-24 w-auto" src={LetterMark} alt="lettermark" />
            </div>
            <h4 className="text-white text-xs pt-6 md:pt-5 text-justify sm:text-justify">
              Spoontoo is a food platform that allows Video to Augmented Reality
              creation for with the help of AI.
              <br />
              This makes AR content creation easy by allowing anyone with a
              phone to create their own Augmented Reality food Content from
              videos and share it with their friends.
              <br />
              We understand the value of taking one step and a time while
              focusing on the bigger picture of a Augmented Reality social
              community for food a with its own creator economy.
              <br />
              Currently we are working on establishing the right business model
              while choosing to move with B2B first as a QR based no-app menu
              solution for Restaurants.
              <br />
              We would love to hear your feedback and are always open to new
              possibilities.
            </h4>
          </div>

          {/* Sitemaps */}
          <div className="w-full lg:w-[65%] h-auto flex items-start lg:items-center justify-start flex-wrap pt-14 lg:pt-0">
            {/* /list 1 */}
            <div className="w-36 lg:w-1/3 flex justify-start lg:justify-center text-sm md:text-base">
              <ul className="flex flex-col items-start space-y-4 sm:space-y-6 text-white">
                {sitemapList1.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`font-normal text-sm uppercase hover:text-secondary ${
                        pathname === link.path || (pathname.startsWith(link.path) && link.path !== "/") ? "text-secondary" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* list 2 */}
            <div className="w-36 lg:w-1/3 flex justify-start lg:justify-center text-sm md:text-base">
              <ul className="flex flex-col items-start space-y-4 sm:space-y-6 text-white">
                {sitemapList2.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`font-normal text-sm uppercase hover:text-secondary ${
                        pathname === link.path || (pathname.startsWith(link.path) && link.path !== "/") ? "text-secondary" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* info */}
            <div className="w-full max-w-xs lg:w-1/3 flex justify-start lg:justify-center sm:pl-8 lg:pl-0">
              <ul className="flex flex-col items-start space-y-4 sm:space-y-5 text-[#FFFFFF] text-sm md:text-base pt-14 scroll-m-5 sm:pt-0">
                <li className="flex items-start justify-center gap-4">
                  <Image src={locationIcon} alt="location-icon" />
                  <h6 className="font-normal">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=1314+E+LAS+OLAS+BLVD+%232342,+FORT+LAUDERDALE,+33301"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      1314 E LAS OLAS BLVD #2342, FORT LAUDERDALE, 33301
                    </a>
                  </h6>
                </li>

                <li className="flex items-start justify-center gap-4">
                  <Image src={mailIcon} alt="mail-icon" />
                  <h6>
                    <a
                      href="mailto:sales@spoontoo.com"
                      className="hover:underline"
                    >
                      sales@spoontoo.com
                    </a>
                  </h6>
                </li>

                <li className="flex items-start justify-center gap-4">
                  <Image src={phoneIcon} alt="phone-icon" />
                  <h6>+19546077460</h6>
                </li>

                <li className="flex items-start justify-center gap-4">
                  <Image src={clockIcon} alt="clock-icon" />
                  <h6>Mon. - Fri. 8AM - 6PM</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* division line */}
        <div className="w-full width-container mx-auto h-[1px] bg-[#AAAAAA] mt-14"></div>

        {/* Copyright */}
        <h4 className="w-full width-container mx-auto text-center text-white py-8 text-xs md:text-sm">
          Copyright © <span className="text-secondary">Spoontoo</span> 2025 |
          All Rights Reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
