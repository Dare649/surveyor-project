"use client";

import { nav, subNav } from "@/data/dummy";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowDown,
} from "react-icons/io";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // detect scroll position for background + text color change
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 1.0; // 100vh
      setIsScrolled(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    setMobileSub(null);
  };

  const toggleSub = (title: string) => {
    setOpenSub((prev) => (prev === title ? null : title));
  };

  const toggleMobileSub = (title: string) => {
    setMobileSub((prev) => (prev === title ? null : title));
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-[9999] transition-colors duration-500 ${
        isScrolled ? "bg-white text-[#262626] shadow-md" : "lg:bg-transparent bg-white lg:text-white text-[#262626]"
      }`}
      style={{ isolation: "isolate" }}
    >
      {/* Desktop view */}
      <div className="hidden lg:flex justify-between w-full h-20 font-brandon px-12 items-center">
        {/* Logo (centered) */}
        <div className="">
          <Link href="/">
            <div className="w-60 h-20 relative">
              <Image
                src="/Project&Co-Logo.webp"
                alt="Project & Co Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-x-20">
          {/* Left nav links */}
          <div className="flex items-center gap-x-8">
            {nav.map((item, id) => (
              <div key={id} className="relative">
                {item.gap ? (
                  <button
                    onClick={() => toggleSub(item.title)}
                    className={`flex items-center gap-1 cursor-pointer uppercase text-sm transition-colors duration-300 ${
                      isScrolled ? "text-[#262626] hover:text-gray-600" : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item.title}
                    <IoIosArrowDown
                      className={`transform transition-transform duration-300 ${
                        openSub === item.title ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className={`uppercase text-sm cursor-pointer transition-colors duration-300 ${
                      isScrolled ? "text-[#262626] hover:text-gray-600" : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}

                {/* Submenu dropdown */}
                {item.gap && openSub === item.title && (
                  <div className="absolute left-0 mt-7.5 w-60 uppercase font-brandon bg-white shadow-lg py-2">
                    {subNav?.map((sub, subId) => (
                      <Link
                        key={subId}
                        href={sub.path}
                        onClick={() => setOpenSub(null)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right button */}
          <Link
            href={"/get-in-touch"}
            className={`w-36 h-10 border-[1.5px] flex items-center justify-center uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out ${
              isScrolled
                ? "border-[#262626] text-[#262626] hover:bg-[#262626] hover:text-white"
                : "border-white text-white hover:bg-white hover:text-[#262626]"
            }`}
          >
            get in touch
          </Link>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex lg:hidden w-full h-20 px-5 py-3 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="w-40 h-16 relative">
            <Image
              src="/Project&Co-Logo.webp"
              alt="Project & Co Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Hamburger / Close Icon */}
        <button
          onClick={handleMenu}
          className="flex flex-col justify-center items-center space-y-1 w-10 h-10"
        >
          <span
            className={`block h-[2px] w-8 transition-transform duration-300 ${
              isScrolled ? "bg-[#262626]" : "bg-white"
            } ${open ? "rotate-45 translate-y-[6px]" : ""}`}
          ></span>
          <span
            className={`block h-[2px] w-8 transition-opacity duration-300 ${
              isScrolled ? "bg-[#262626]" : "bg-white"
            } ${open ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block h-[2px] w-8 transition-transform duration-300 ${
              isScrolled ? "bg-[#262626]" : "bg-white"
            } ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-20 left-0 w-full h-screen bg-gray-50 shadow-md flex flex-col px-5 py-5 transition-all duration-300">
          {!mobileSub &&
            nav.map((item, id) => (
              <div key={id} className="mb-5">
                {item.gap ? (
                  <button
                    onClick={() => toggleMobileSub(item.title)}
                    className="flex items-center justify-between w-full uppercase text-[20px] text-[#262626]"
                  >
                    {item.title}
                    <IoIosArrowForward />
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="uppercase text-[20px] text-[#262626]"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

          {mobileSub && (
            <div className="absolute top-0 left-0 w-full h-screen bg-white px-5 animate-slideIn overflow-y-auto">
              <button
                onClick={() => setMobileSub(null)}
                className="flex items-center ml-5 text-[18px] uppercase gap-2 mb-5 text-[#262626]/50"
              >
                <IoIosArrowBack /> Back
              </button>
              <div className="pb-20">
                {subNav.map((sub, subId) => (
                  <Link
                    key={subId}
                    href={sub.path}
                    onClick={() => setOpen(false)}
                    className="block mb-4 uppercase font-brandon text-[18px] text-gray-700"
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {!mobileSub && (
            <Link
              href={"/get-in-touch"}
              className="w-52 h-14 bottom-5 fixed border-[1.5px] border-[#262626] flex items-center justify-center uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#262626] hover:text-white"
            >
              get in touch
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
