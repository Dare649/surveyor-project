"use client";

import { useRef, useState, useEffect } from "react";

export default function FadeCard({
  item,
  index,
}: {
  item: { img: string; title: string; subtitle: string };
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
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 150}ms`,
        willChange: "opacity, transform",
      }}
      className={`w-full h-full flex flex-col transform transition-all duration-700 ease-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
    >
      {/* Image + Text in same container */}
      <div className="relative flex flex-col justify-between w-full h-full bg-[#EEEBE6]">
        {/* Image */}
        <div className="relative w-full aspect-[4/3]">
          <img
            src={item.img}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Text pinned at bottom */}
        <div className="px-6 py-8">
          <h3 className="lg:text-[13.4528px] sm:text-[14.8048px] text-[#433F3C] font-brandon uppercase tracking-wide mb-4">
            {item.title}
          </h3>
          <h2 className="lg:text-[41.472px] sm:text-[27.952px] capitalize text-[#433F3C] font-minion relative inline-block">
            {item.subtitle}
            <span className="block w-40 -mt-2 h-[2px] bg-white"></span>
          </h2>
        </div>
      </div>
    </div>
  );
}
