"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const texts = [
    "Building with Excellence",
    "Designing with Purpose",
    "Delivering with Precision",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    if (subIndex === currentText.length + 1 && !deleting) {
      // pause before deleting
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      // move to next text
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  useEffect(() => {
    setText(texts[index].substring(0, subIndex));
  }, [subIndex, index, texts]);

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

        {/* Overlay for opacity */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" />

        {/* Centered self-writing text */}
        <div className="relative z-[2] flex items-center justify-center w-full h-full">
          <h1 className="text-white text-4xl lg:text-6xl font-minion text-center uppercase tracking-wide">
            {text}
            <span className="border-r-4 border-white ml-1 animate-pulse"></span>
          </h1>
        </div>
      </div>

      {/* Lower part (centered text) */}
      <div className="w-full lg:h-[40vh] sm:h-[20vh] bg-[#262626] flex items-center flex-col justify-center lg:p-10 sm:p-5">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-40 lg:h-40">
          <Image
              src="/RICS-1.png"
              alt="RICS Logo"
              fill
              className="object-contain"
              priority
          />
        </div>
        <h2 className="text-white text-center text-[24px] font-brandon tracking-wide">
          We are regulated by the Royal Institute of Chartered Surveyors
        </h2>
      </div>
    </div>
  );
};

export default Hero;
