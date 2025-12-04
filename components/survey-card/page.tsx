"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


interface SurveyCardProps {
  image: string;
  title: string | React.ReactNode;
  description: string;
}

export default function SurveyCard({
  image,
  title,
  description,
}: SurveyCardProps) {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden">

      {/* IMAGE */}
      <div className="relative h-[420px] w-full">
        <Image
          src={image}
          alt="Survey Image"
          fill
          className="object-cover rounded-3xl"
        />
      </div>

      {/* YELLOW SHAPE */}
      <div
        className="
          absolute bottom-0 left-0 
          w-[85%]        /* Reduced width so it's not full width */
          p-10 
          bg-[#C9E256]
          text-[#151A3C]
          rounded-tr-4xl
          clip-custom-shape 

          
        "
      >
        <h2 className="text-xl font-extrabold leading-tight text-white">
          {title}
        </h2>

        <p className="mt-4 text-sm leading-snug text-white">
          {description}
        </p>
      </div>
    </div>
  );
}
