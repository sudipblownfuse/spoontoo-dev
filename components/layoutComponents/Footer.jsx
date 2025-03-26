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
    { name: "Blog", path: "/blog" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const sitemapList2 = [
    { name: "Pricing", path: "/pricing" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Schedule A Demo", path: "/schedule-demo" },
    { name: "Support", path: "/support" },
  ];
  return (
    <footer className="relative w-full h-auto">
      <Image
        src={footerBgImg}
        className="absolute w-full h-full object-cover"
        alt="footer-bg"
      />
      <div className="relative bg-black w-full h-full opacity-95 p-5">
        <div className="w-full width-container h-auto mx-auto flex justify-between items-center pt-14">
          {/* Logo & Description */}
          <div className="w-1/3 pr-5">
            <div className="flex gap-10 justify-start">
              <Image src={BrandMark} alt="brandmark" />
              <Image src={LetterMark} alt="lettermark" />
            </div>
            <h4 className="text-white text-sm pt-12">
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
          <div className="w-[65%] flex items-center">
            {/* /list 1 */}
            <div className="w-1/3 flex justify-center">
              <ul className="flex flex-col items-start space-y-6 text-white">
                {sitemapList1.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`font-normal text-sm uppercase hover:text-secondary ${
                        pathname === link.path ? "text-secondary" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* list 2 */}
            <div className="w-1/3 flex justify-center">
              <ul className="flex flex-col items-start space-y-6 text-white">
                {sitemapList2.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`font-normal text-sm uppercase hover:text-secondary ${
                        pathname === link.path ? "text-secondary" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* info */}
            <div className="w-1/3 flex justify-center">
              <ul className="flex flex-col items-start space-y-5 text-white">
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
        <h4 className="w-full width-container mx-auto text-center text-white py-8">
          Copyright © <span className="text-secondary">Spoontoo</span> 2025 |
          All Rights Reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
