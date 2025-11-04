"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
} from "react-icons/io5";

const Hero = () => {
  const texts: string[] = ["Customer Focused", "Result Driven"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Loop the text animation infinitely
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" />

        {/* Animated Text */}
        <div className="relative z-[2] flex flex-col justify-center h-full w-full lg:ml-20 ml-6 overflow-hidden">
          <h1
            key={currentIndex}
            className="text-white text-4xl lg:text-6xl font-minion uppercase tracking-wide transition-all duration-1000 ease-out opacity-0 animate-fadeInOut"
            dangerouslySetInnerHTML={{ __html: texts[currentIndex] }}
          />
        </div>

        {/* Social icons - bottom left */}
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

export default Hero;
