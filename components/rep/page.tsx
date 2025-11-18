"use client";

import React from 'react';
import { blogHighlights, services } from '@/data/dummy';
import Image from 'next/image';
import FadeCard from '../fade-card/page';
import Link from 'next/link';
import WhyChooseUs from '../why-choose-us/page';
import WhySpectrum from '../why-spectrum/page';
import FAQ from '../faq/page';
import AnimatedCard from '../animated-card/page';
import ImageSlider from '../img-slider/page';



const Rep = () => {
    const images = [
        '/Defect.jpg',
        '/Part-wall.jpg',
        '/Dilapidation.jpg',
        '/Expert.jpg',
        '/Project-Management.jpg',
        '/Refurbishment.jpg',
    ];
  return (
    <div className="w-full">
        <div>
            <WhyChooseUs/>
        </div>

        <div>
            <WhySpectrum/>
        </div>
        <div className="relative w-full lg:mt-10 mt-5 overflow-hidden">
            {/* Background layer with slant */}
            <div className="absolute inset-0 bg-[#C9E265] z-0 clip-slant"></div>

            {/* Content layer */}
            <div className="relative z-10 flex flex-col items-center justify-start h-full sm:py-5 lg:px-10 sm:px-3 ">
                <h2 className="text-center lg:text-[27.4624px] sm:text-[21.3784px] italic underline text-white capitalize font-minion">
                case studies
                </h2>
                {/* <h2 className='font-brandon lg:text-[13.4528px] sm:text-[14.8048px] uppercase lg:my-10 sm:my-5 font-semibold leading-relaxed tracking-wider'>primary blogHighlights</h2> */}
                <div className="my-5 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10 ">
                    {blogHighlights.map((item, id) => (
                        <AnimatedCard key={id} item={item} index={id} />
                    ))}
                </div>
                <Link
                    href={'/blog'}
                    className="lg:w-40 sm:w-full h-16 lg:text-[12.816px] sm:text-[14.506px] uppercase font-brandon cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#c9e256] text-white flex justify-center items-center"
                >
                    view more
                </Link>
            </div>
        </div>

      


        <div className='w-full lg:px-10 sm:px-3'>
            <div className='w-full lg:mt-20 sm:mt-10'>
                <h2 className='lg:text-[27.4624px] text-center sm:text-[21.3784px] font-minion text-[#262626] italic'>Our Services</h2>
                
            </div>
        </div>


        <div className="w-full mt-10">
            <div className="mb-20 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-2 lg:px-10 sm:px-3">
                {services.map((item, id) => (
                <FadeCard key={id} item={item} index={id}  />
                ))}
            </div>
        </div>

        

        <div>
            <h2 className='lg:text-[27.4624px] text-center sm:text-[21.3784px] font-minion text-[#262626] italic'>Gallery</h2>
          <ImageSlider images={images} />
        </div>

        <div>
            <FAQ/>
        </div>

    </div>
  );
};

export default Rep;
