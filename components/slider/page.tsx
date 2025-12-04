"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";

interface SliderProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  autoPlay?: boolean;
  interval?: number;
}

export default function Slider<T>({
  data,
  renderItem,
  autoPlay = false,
  interval = 4000,
}: SliderProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = data.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, totalSlides]);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${totalSlides * 100}%`,
        }}
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="w-screen h-full flex-shrink-0 flex items-center justify-center"
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 z-10"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 z-10"
      >
        &#8250;
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === i ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
