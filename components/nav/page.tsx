"use client";

import { nav, subNav } from "@/data/dummy";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenSub(null);
        setMobileSub(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-[9999] bg-white text-[#c9e265] shadow-md" style={{ isolation: "isolate" }}>
      {/* Desktop view */}
      <div className="hidden lg:flex justify-between w-full h-28 font-brandon px-16 items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <div className="w-60 h-20 relative">
              <Image src="/spectrum_logo_high.png" alt="Spectrum" fill className="object-contain" priority />
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-x-20">
          {/* Navigation links */}
          <div className="flex items-center gap-x-8" ref={dropdownRef}>
            {nav.map((item, id) => {
              const isActive =
                pathname === item.path || subNav.some((sub) => sub.path === pathname && item.gap);

              return (
                <div key={id} className="relative group">
                  {item.gap ? (
                    <button
                      onClick={() => toggleSub(item.title)}
                      className={`flex items-center gap-1 cursor-pointer uppercase text-sm relative transition-all duration-300 ${
                        isActive ? "text-[#c9e256] border-b-2 border-[#c9e256]" : "text-black/50"
                      } hover:text-[#c9e256]`}
                    >
                      {item.title}
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          openSub === item.title ? "rotate-180" : "rotate-0"
                        }`}
                      />
                      {!isActive && (
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c9e265] transition-all duration-300 group-hover:w-full"></span>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className={`uppercase text-sm cursor-pointer relative transition-all duration-300 ${
                        isActive ? "text-[#c9e256] border-b-2 border-[#c9e256]" : "text-black/50"
                      } hover:text-[#c9e256]`}
                    >
                      {item.title}
                      {!isActive && (
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c9e265] transition-all duration-300 group-hover:w-full"></span>
                      )}
                    </Link>
                  )}

                  {/* Submenu dropdown */}
                  {item.gap && openSub === item.title && (
                    <div className="absolute left-0 mt-7.5 w-60 uppercase font-brandon bg-white shadow-lg py-2 z-10">
                      {subNav?.map((sub, subId) => {
                        const isSubActive = pathname === sub.path;
                        return (
                          <Link
                            key={subId}
                            href={sub.path}
                            onClick={() => setOpenSub(null)}
                            className={`block px-4 py-2 text-sm transition-all ${
                              isSubActive
                                ? "bg-[#C9E256]/70 text-white"
                                : "text-gray-700 hover:bg-[#C9E256]/50 hover:text-white"
                            }`}
                          >
                            {sub.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right button */}
          <Link
            href="/get-in-touch"
            className="w-36 h-10 border-[1.5px] border-[#c9e265] flex items-center justify-center uppercase text-sm cursor-pointer transition-all duration-300 ease-in-out text-[#c9e265] hover:bg-[#c9e265] hover:text-white"
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
            <Image src="/spectrum_logo_high.png" alt="Spectrum" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Hamburger / Close Icon */}
        <button onClick={handleMenu} className="flex flex-col justify-center items-center space-y-1 w-10 h-10">
          <span
            className={`block h-[2px] w-8 bg-[#c9e265] transition-transform duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`}
          ></span>
          <span className={`block h-[2px] w-8 bg-[#c9e265] transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}></span>
          <span
            className={`block h-[2px] w-8 bg-[#c9e265] transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-20 left-0 w-full h-screen bg-white shadow-md flex flex-col px-5 py-5 transition-all duration-300">
          {!mobileSub &&
            nav.map((item, id) => {
              const isActive =
                pathname === item.path || subNav.some((sub) => sub.path === pathname && item.gap);

              return (
                <div key={id} className="mb-5">
                  {item.gap ? (
                    <button
                      onClick={() => toggleMobileSub(item.title)}
                      className={`flex items-center justify-between w-full uppercase text-[20px] transition-all ${
                        isActive ? "text-[#9ab14d]" : "text-[#c9e265]"
                      }`}
                    >
                      {item.title}
                      <IoIosArrowForward />
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className={`uppercase text-[20px] transition-all ${
                        isActive ? "text-[#9ab14d]" : "text-[#c9e265]"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            })}

          {mobileSub && (
            <div className="absolute top-0 left-0 w-full h-screen bg-white px-5 animate-slideIn overflow-y-auto">
              <button
                onClick={() => setMobileSub(null)}
                className="flex items-center ml-5 text-[18px] uppercase gap-2 mb-5 text-[#c9e265]/70"
              >
                <IoIosArrowBack /> Back
              </button>
              <div className="pb-20">
                {subNav.map((sub, subId) => {
                  const isSubActive = pathname === sub.path;
                  return (
                    <Link
                      key={subId}
                      href={sub.path}
                      onClick={() => setOpen(false)}
                      className={`block mb-4 uppercase font-brandon text-[18px] transition-all ${
                        isSubActive ? "text-[#9ab14d]" : "text-[#c9e265]"
                      }`}
                    >
                      {sub.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {!mobileSub && (
            <Link
              href="/get-in-touch"
              className="w-52 h-14 bottom-5 fixed border-[1.5px] border-[#c9e265] flex items-center justify-center uppercase text-sm cursor-pointer transition-all duration-300 ease-in-out text-[#c9e265] hover:bg-[#c9e265] hover:text-white"
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
