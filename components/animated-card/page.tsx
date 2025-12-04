"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedCardProps {
  item: {
    img?: string;
    video?: string;
    title: string;
  };
  index: number;
}

export default function AnimatedCard({ item, index }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const fromLeft = index % 2 === 0;

  // Extract YouTube video ID
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^"&?/ ]{11})/);
    return match ? match[1] : null;
  };

  const videoId = item.video ? getYouTubeId(item.video) : null;

  return (
    <>
      <div
        ref={ref}
        style={{ transitionDelay: `${index * 120}ms`, willChange: "transform, opacity" }}
        className={`w-full group transform transition-all duration-700 ease-out
          ${
            visible
              ? "translate-x-0 opacity-100"
              : fromLeft
              ? "-translate-x-20 opacity-0"
              : "translate-x-20 opacity-0"
          }`}
      >
        {/* Card container with fixed aspect ratio for uniform height */}
        <div
          className="relative w-full aspect-[16/16] cursor-pointer overflow-hidden rounded-2xl shadow-md bg-gray-100"
          onClick={() => videoId && setShowVideo(true)}
        >
          {item.video ? (
            <>
              {/* YouTube thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-white/80 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="none"
                    className="w-8 h-8 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Card title */}
        <h2 className="text-[13.5px] font-brandon mt-3 uppercase text-gray-800 text-center">
          {item.title}
        </h2>
      </div>

      {/* 🔹 Video Popup */}
      <AnimatePresence>
        {showVideo && videoId && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={item.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>

              {/* Close button */}
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-3 right-3 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
