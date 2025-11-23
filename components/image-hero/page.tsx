"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
} from "react-icons/io5";

const ImageHero = () => {
  const texts: string[] = ["Customer Focused", "Result Driven"];
  const images: string[] = [
    "/Project-Management.jpg",
    "/Part-wall.jpg",
    "/Refurbishment.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full">
      <div className="relative w-full h-[75vh] overflow-hidden">
        {/* Image Slider */}
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Hero ${index}`}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        ))}

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[1]" />

        {/* Animated Text */}
        <div className="relative z-[2] flex flex-col justify-center h-full w-full overflow-hidden">
          <h1
            key={currentIndex}
            className="text-white text-4xl text-center lg:text-6xl font-minion uppercase tracking-wide transition-all duration-1000 ease-out"
            dangerouslySetInnerHTML={{ __html: texts[currentIndex] }}
          />
        </div>

        {/* Social icons */}
        <div className="absolute bottom-6 left-6 z-[3] flex flex-row items-center space-x-6">
          <IoLogoInstagram className="text-white text-3xl hover:text-gray-300 cursor-pointer transition-colors duration-300" />
          <IoLogoLinkedin className="text-white text-3xl hover:text-gray-300 cursor-pointer transition-colors duration-300" />
          <IoLogoFacebook className="text-white text-3xl hover:text-gray-300 cursor-pointer transition-colors duration-300" />
        </div>
      </div>

      {/* Lower section */}
      <div className="w-full lg:h-[30vh] sm:h-[15vh] bg-gray-200 flex flex-col items-center justify-center lg:p-10 sm:p-5">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-40">
          <Image
            src="/RICS-logo.webp"
            alt="RICS Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h2 className="text-[#262626] text-center text-[20px] sm:text-[24px] font-brandon tracking-wide mt-4">
          We are regulated by the Royal Institute of Chartered Surveyors
        </h2>
      </div>
    </div>
  );
};

export default ImageHero;
