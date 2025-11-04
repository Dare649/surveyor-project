"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Project {
  id: number;
  title: string;
  img: string;
}

interface ProjectSliderProps {
  projects: Project[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects }) => {
  return (
    <div className="relative w-full mt-16"> {/* added margin-top for spacing */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Link href={`/case-studies/${project.id}`}>
              <div className="rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:shadow-xl">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={
                      project.img.startsWith("/")
                        ? project.img
                        : `/${project.img}`
                    }
                    alt={project.title}
                    width={500}
                    height={350}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>

                <div className="p-4 text-center bg-white">
                  <h3 className="text-gray-800 font-semibold text-lg">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🎨 Custom styles */}
      <style jsx global>{`
        /* Gray arrow buttons */
        .swiper-button-prev,
        .swiper-button-next {
          color: #6b7280; /* gray-500 */
          transition: color 0.3s ease;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #374151; /* gray-700 */
        }

        /* Pagination dots */
        .swiper-pagination-bullet {
          background: #9ca3af; /* gray-400 */
          opacity: 0.7;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #4b5563; /* gray-600 */
          opacity: 1;
        }

        /* Add more space between the slider and dots */
        .swiper-pagination {
          margin-top: 2rem !important;
        }
      `}</style>
    </div>
  );
};

export default ProjectSlider;
