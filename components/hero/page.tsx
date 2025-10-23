"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const texts = ["Customer <br/> Focused,", "Result Driven"];
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  // Trigger fade-up animation once on mount
  useEffect(() => {
    texts.forEach((_, i) => {
      setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, i]);
      }, i * 1000); // delay each text by 1s
    });
  }, []);

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

        {/* Left-aligned fade-up text */}
        <div className="relative z-[2] flex flex-col justify-center h-full w-full lg:ml-20 ml-6 space-y-4 overflow-hidden">
          {texts.map((line, i) => (
            <h1
              key={i}
              className={`text-white text-4xl lg:text-6xl font-minion uppercase tracking-wide 
                transform opacity-0 translate-y-10 transition-all duration-1000 ease-out
                ${
                  visibleIndexes.includes(i)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              style={{
                transitionDelay: `${i * 0.5}s`,
              }}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>
      </div>

      {/* Lower section */}
      <div className="w-full lg:h-[40vh] sm:h-[20vh] bg-[#262626] flex flex-col items-center justify-center lg:p-10 sm:p-5">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-40 lg:h-40">
          <Image
            src="/RICS-1.png"
            alt="RICS Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h2 className="text-white text-center text-[20px] sm:text-[24px] font-brandon tracking-wide mt-4">
          We are regulated by the Royal Institute of Chartered Surveyors
        </h2>
      </div>
    </div>
  );
};

export default Hero;
