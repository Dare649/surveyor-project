"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface BlogItem {
  img?: string;
  video?: string;
  title: string;
  date?: string;
  category?: string;
  slug: string;
  content?: string; // Optional full blog text
}

interface BlogHighlightProps {
  items: BlogItem[];
}

export default function BlogHighlight({ items }: BlogHighlightProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeBlog, setActiveBlog] = useState<BlogItem | null>(null);

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^"&?/ ]{11})/);
    return match ? match[1] : null;
  };

  const featured = items[0];
  const sideItems = items.slice(1);

  const handlePlay = (url: string) => {
    setActiveVideo(getYouTubeId(url));
  };

  const openBlog = (blog: BlogItem) => {
    setActiveBlog(blog);
  };

  const closeBlog = () => {
    setActiveBlog(null);
  };

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-20 py-20">
      {/* Featured Post */}
      <div
        className="relative w-full h-[450px] rounded-2xl overflow-hidden group"
        onClick={() => featured.video && handlePlay(featured.video!)}
      >
        {featured.video ? (
          <>
            <Image
              src={`https://img.youtube.com/vi/${getYouTubeId(featured.video!)}/hqdefault.jpg`}
              alt={featured.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/80 rounded-full transition group-hover:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  stroke="none"
                  className="w-8 h-8 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <Image
            src={featured.img || "/placeholder.jpg"}
            alt={featured.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
          {featured.date && <p className="text-xs mb-1 opacity-80">{featured.date}</p>}
          <h2 className="text-lg md:text-xl font-semibold mb-3">{featured.title}</h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              openBlog(featured);
            }}
            className="inline-block bg-white text-black px-4 py-2 text-sm font-medium rounded-full hover:bg-gray-200 transition w-fit"
          >
            View
          </button>
        </div>
      </div>

      {/* Side Posts */}
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
        {sideItems.map((item, idx) => (
          <div
            key={idx}
            className="relative w-full h-[450px] rounded-2xl overflow-hidden group"
            onClick={() => item.video && handlePlay(item.video!)}
          >
            {item.video ? (
              <>
                <Image
                  src={`https://img.youtube.com/vi/${getYouTubeId(item.video!)}/hqdefault.jpg`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/80 rounded-full transition group-hover:bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      viewBox="0 0 24 24"
                      stroke="none"
                      className="w-6 h-6 ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <Image
                src={item.img || "/placeholder.jpg"}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-5 text-white">
              {item.date && <p className="text-xs mb-1 opacity-80">{item.date}</p>}
              <h3 className="text-base md:text-lg font-semibold leading-snug mb-3">
                {item.title}
              </h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openBlog(item);
                }}
                className="inline-block bg-white text-black px-3 py-1 text-xs font-medium rounded-full hover:bg-gray-200 transition w-fit"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🎬 Video Popup */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
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
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video Player"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>

              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 📰 Blog Content Modal */}
      <AnimatePresence>
        {activeBlog && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBlog}
          >
            <motion.div
              className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeBlog}
                className="absolute top-3 right-3 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition"
              >
                ✕
              </button>
              <h2 className="text-2xl font-semibold mb-3">{activeBlog.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {activeBlog.date} • {activeBlog.category}
              </p>

              {activeBlog.video ? (
                <div className="aspect-video rounded-xl overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${getYouTubeId(activeBlog.video)}?autoplay=0`}
                    title="Video Player"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="relative w-full h-64 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={activeBlog.img || "/placeholder.jpg"}
                    alt={activeBlog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <p className="text-gray-700 leading-relaxed">
                {activeBlog.content ||
                  "This is a placeholder for the blog content. You can dynamically load full article text from your CMS or API here."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
