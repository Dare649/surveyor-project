"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageSliderProps {
  images: string[]; // array of image URLs
}

export default function ImageSlider({ images }: ImageSliderProps) {
  return (
    <div className="relative w-full py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5} // 5 images visible on desktop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },   // mobile
          640: { slidesPerView: 2 },   // small tablets
          768: { slidesPerView: 3 },   // tablets
          1024: { slidesPerView: 4 },  // small desktop
          1280: { slidesPerView: 5 },  // large desktop
        }}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={img.startsWith("/") ? img : `/${img}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #6b7280;
          transition: color 0.3s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #374151;
        }
        .swiper-pagination-bullet {
          background: #9ca3af;
          opacity: 0.7;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #4b5563;
          opacity: 1;
        }
        .swiper-pagination {
          margin-top: 2rem !important;
        }
      `}</style>
    </div>
  );
}
