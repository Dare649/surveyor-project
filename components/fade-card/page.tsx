"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function FadeCard({
  item,
  index,
}: {
  item: { icon: React.ElementType; title: string; subtitle: string; path?: string };
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

  const Icon = item.icon;

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
      {/* Card container */}
      <div
        className="group relative flex flex-col justify-start w-full h-full 
        bg-white shadow-md rounded-xl p-6 transform transition-transform 
        duration-500 hover:-rotate-3 hover:bg-[#262626]"
      >
        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-4">
          <Icon className="text-3xl text-gray-700 group-hover:text-white" />
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
            {item.title}
          </h3>
        </div>

        {/* Small text about title */}
        <p className="text-sm text-gray-600 group-hover:text-white mb-4">
          We provide expert services in {item.subtitle.toLowerCase()} ensuring top quality and reliability.
        </p>

        {/* View link */}
        <Link
          href={item.path || "#"}
          className="text-blue-600 group-hover:text-white text-sm font-medium underline-offset-2 group-hover:underline"
        >
          View →
        </Link>
      </div>
    </div>
  );
}
