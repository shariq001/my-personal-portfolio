"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[16px] flex justify-between items-center right-0 max-w-[1600px]">
      
      {/* Name */}
      <h1 className="xl:text-[24px] md1:text-[18px] font-semibold">
        MUHAMMAD SHARIQ
      </h1>

      {/* Desktop Navbar (Hidden on sm1:) */}
      <nav className="md2:flex hidden justify-end items-center lg2:gap-[30px] md2:gap-[15px] lg2:text-[18px] md2:text-[14px] lg1:text-[16px]">
        <Link href="/Home" className="hover:bg-white hover:text-black duration-700 hover:duration-700 p-[7px] rounded-[5px] ">
          Home
        </Link>
        <Link href="/Projects" className="hover:bg-white hover:text-black duration-700 hover:duration-700 p-[7px] rounded-[5px] ">
          Projects
        </Link>
        <Link href="/About" className="hover:bg-white hover:text-black duration-700 hover:duration-700 p-[7px] rounded-[5px] ">
          About
        </Link>
        <Link href="/Contact" className="hover:bg-white hover:text-black duration-700 hover:duration-700 p-[7px] rounded-[5px] ">
          Contact
        </Link>
        <p>|</p>
        <Link href="https://www.linkedin.com/in/muhammad---shariq" target="_blank" className="hover:animate-pulse">
          <FontAwesomeIcon icon={faLinkedinIn} className="text-white size-[20px] hover:bg-white hover:text-black duration-700 hover:duration-700 p-[7px] rounded-full" />
        </Link>
        <Link href="https://github.com/shariq001" target="_blank" className="hover:animate-pulse">
          <FontAwesomeIcon icon={faGithub} className="text-white size-[20px] hover:bg-white hover:text-black duration-700 hover:duration-700 p-[7px] rounded-full" />
        </Link>
      </nav>

      {/* Mobile Menu Icon (Visible on sm1:) */}
      <button onClick={toggleMenu} className="md2:hidden text-white">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      {/* Mobile Navbar (sm1:) */}
      {isOpen && (
        <div className="absolute right-0 top-0 w-fit h-fit bg-[#1a1a1a] p-5 flex flex-col gap-5 sm1:flex sm1:items-start z-50 shadow-lg">
          {/* Close Button */}
          <button onClick={toggleMenu} className="self-end text-white">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>

          {/* Links (Each link closes the menu) */}
          <Link href="" onClick={toggleMenu} className="text-white">
            Home
          </Link>
          <Link href="" onClick={toggleMenu} className="text-white">
            Projects
          </Link>
          <Link href="" onClick={toggleMenu} className="text-white">
            About
          </Link>
          <Link href="" onClick={toggleMenu} className="text-white">
            Contact
          </Link>
          <div className="flex gap-4">
            <Link href="" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faLinkedinIn} className="text-white size-[20px]" />
            </Link>
            <Link href="" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faGithub} className="text-white size-[20px]" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
