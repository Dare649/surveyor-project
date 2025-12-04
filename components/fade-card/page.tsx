"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function FadeCard({
  item,
  index,
}: {
  item: { img: string; title: string; subtitle: string; path?: string; text: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <Link href={item.path || "#"}>
      <div
        ref={ref}
        style={{
          transitionDelay: `${index * 150}ms`,
          willChange: "opacity, transform",
        }}
        className={`group relative w-full h-[300px] flex flex-col transform transition-all duration-700 ease-out cursor-pointer
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${item.img})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500" />

        {/* Content */}
        <div className="relative z-10 p-8 flex flex-col h-full">
          {/* Title always visible */}
          <h3 className="text-2xl font-bold text-white">{item.title}</h3>

          {/* Subtitle appears on hover */}
          <p
            className="text-lg text-gray-200 opacity-0 translate-y-4 transition-all duration-500 
              group-hover:opacity-100 group-hover:translate-y-0 mt-4"
          >
            {item.text}
          </p>
        </div>
      </div>
    </Link>
  );
}
