"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import navLogo from "@/public/navbar/nav-logo.png";
import searchImg from "@/public/navbar/search.svg";
import menuIcon from "@/public/navbar/menu-icon.png";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "About US", path: "/about" },
    { name: "How It's Work", path: "/how-it-works" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "Career", path: "/career" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-[#101010] h-20 md:h-24 fixed flex justify-center items-center text-white z-30 inset-0 right-0">
        <div className="w-full width-container mx-auto flex justify-between items-center px-5 md:px-14 py-3">
          {/* LOGO */}
          <div className="flex items-center">
            <Link href="/">
              <Image className="w-32 md:w-40 py-1" src={navLogo} alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex justify-between items-center space-x-8">
            <ul className="hidden lg:flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={toggleMenu}
                    className={`block font-normal text-white text-sm uppercase hover:text-secondary ${
                      pathname === link.path || pathname.startsWith(link.path)
                        ? "text-secondary"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="/">
              <Image className="h-12 lg:h-14" src={searchImg} alt="search" />
            </Link>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              {isOpen ? (
                <IoCloseSharp
                  onClick={toggleMenu}
                  className="text-white cursor-pointer"
                  size={39}
                />
              ) : (
                <Image
                  onClick={toggleMenu}
                  alt="menu-icon"
                  src={menuIcon}
                  className="cursor-pointer w-8 md:10"
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed left-0 top-20 h-screen w-[70%] bg-[#101010] text-white z-20 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden shadow-lg`}
      >
        <ul className="flex flex-col items-start space-y-6 px-6 py-10">
          {navLinks.map((link) => (
            <li key={link.path}
             className=""
            >
              <Link
                href={link.path}
                onClick={toggleMenu} // Close menu on click
                className={` block w-full font-normal py-2-1 text-base border-b-[1px] uppercase hover:text-secondary hover:border-secondary ${
                  pathname === link.path ? "text-secondary border-secondary" : "text-white "
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
