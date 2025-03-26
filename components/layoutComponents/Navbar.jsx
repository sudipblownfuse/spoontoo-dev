"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import navLogo from "@/public/navbar/nav-logo.png";
import searchImg from "@/public/navbar/search.svg";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "About US", path: "/about" },
    { name: "How It's Work", path: "/how-it-works" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#101010] h-[10vh] fixed flex justify-center items-center text-white z-20 inset-0">
      <div className="w-full width-container text-white flex justify-between items-center px-6 py-3">
        {/* LOGO */}
        <div>
          <Link href="/">
            <Image src={navLogo} alt="logo" height="80" />
          </Link>
        </div>

        <div className="flex justify-between items-center space-x-8">
          <ul className="flex space-x-6 text-white">
            {navLinks.map((link) => (
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

          <Link href="/">
            <Image src={searchImg} alt="search" height="30" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
