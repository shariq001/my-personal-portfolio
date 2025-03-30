"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="xl1:px-[100px] sm1:px-[16px] sm3:px-[25px] md2:px-[30px] lg2:px-[50px] py-[25px] flex justify-between items-center border-b-[1px] border-[#2c2c2c] right-0">
      {/* Logo */}
      <Image
        src="/personal-logo.png"
        width={100}
        height={100}
        alt="My Logo"
        className="xl1:w-[100px] xl1:h-[100px] sm1:w-[60px] sm3:w-[70px] md1:w-[80px] lg1:w-[85px] lg2:w-[90px]"
      />

      {/* Desktop Navbar (Hidden on sm1:) */}
      <nav className="md2:flex hidden justify-center items-center md2:gap-[20px] xl:gap-[30px] border-[#434343] border-[2px] rounded-full py-[5px] px-[15px] lg2:text-[18px]">
        <Link
          href="/"
          className="bg-[#292929] hover:bg-[#474747] duration-300 hover:duration-300 text-white py-[8px] lg2:px-[15px] md2:px-[10px] rounded-full"
        >
          <FontAwesomeIcon icon={faHouse} className="lg2:size-[20px] md2:size-[18px] text-white" />
        </Link>
        <Link href="" className="hover:underline">
          About
        </Link>
        <Link href="" className="hover:underline">
          Projects
        </Link>
        <Link href="" className="hover:underline">
          Contact
        </Link>
      </nav>

      {/* Right Side: Hire Me & Menu Icon */}
      <div className="flex items-center gap-4">
        {/* Hire Me Button */}
        <Link
          href="https://www.fiverr.com/s/gDXNyeb" target="_blank"
          className="bg-gradient-to-r from-[#3B1C32] to-[#6A1E55] xl1:px-[25px] xl1:hover:px-[40px] duration-500 hover:duration-500 xl1:py-[15px] sm1:py-[7px] rounded-full font-medium sm1:px-[15px] sm1:text-[12px] sm3:text-[14px] md1:text-[16px] md1:px-[20px] md1:py-[10px] lg2:text-[18px] lg2:px-[23px] lg2:py-[13px]"
        >
          Hire Me
        </Link>

        {/* Mobile Menu Icon (Hidden on lg1:) */}
        <button onClick={toggleMenu} className="md2:hidden text-white">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Navbar (sm1:) */}
      {isOpen && (
        <div className="absolute right-0 top-0 w-fit h-fit bg-[#1a1a1a] p-5 flex flex-col gap-5 sm1:flex sm1:items-start z-50 shadow-lg">
          {/* Close Button */}
          <button onClick={toggleMenu} className="self-end text-white">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>

          {/* Links (Each link closes the menu) */}
          <Link href="/" onClick={toggleMenu} className="text-white">
            Home
          </Link>
          <Link href="" onClick={toggleMenu} className="text-white">
            About
          </Link>
          <Link href="" onClick={toggleMenu} className="text-white">
            Projects
          </Link>
          <Link href="" onClick={toggleMenu} className="text-white">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
