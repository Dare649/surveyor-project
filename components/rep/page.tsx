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



const Rep = () => {
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
            <div className="relative z-10 flex flex-col items-center justify-start h-full lg:pt-40 sm:pt-16 lg:px-10 sm:px-3 pb-16 lg:pb-24">
                <h2 className="text-center lg:text-[27.4624px] sm:text-[21.3784px] italic underline text-white capitalize font-minion">
                case studies
                </h2>
                {/* <h2 className='font-brandon lg:text-[13.4528px] sm:text-[14.8048px] uppercase lg:my-10 sm:my-5 font-semibold leading-relaxed tracking-wider'>primary blogHighlights</h2> */}
                <div className="my-20 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10 ">
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
                <h2 className='lg:text-[27.4624px] sm:text-[21.3784px] font-minion text-[#262626] italic'>Our Services</h2>
                <div className='lg:my-10 sm:my-5 w-full flex items-start lg:items-center justify-between lg:flex-row sm:flex-col'>
                    <h2 className='font-brandon text-[#262626] uppercase leading-relaxed tracking-wider'>
                        <span className='text-[13.4528px] hidden lg:block'>
                            we offer a vast array of professional service, <br /> provided to our clients across london & the <br /> south east of england.
                        </span>
                        <span className='text-[14.8048] block lg:hidden'>
                            we offer a vast array of <br /> professional service,<br /> provided to our clients <br /> across london & the  south <br /> east of england.
                        </span>
                    </h2>
                    {/* Divider (hidden on small screens) */}
                    {/* <div className="hidden lg:flex flex-1 mx-6">
                        <hr className="w-full h-[1.5px] bg-[#262626]" />
                    </div> */}
                    <Link
                        href={"/get-in-touch"}
                        className="hidden lg:flex w-40 h-14 border-[1.5px] hover:border-[#C9E265] uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-[#C9E265] bg-[#C9E265] text-white justify-center items-center"
                    >
                        get in touch
                    </Link>

                </div>
            </div>
        </div>


        <div className="w-full mt-10">
            <div className="mb-20 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-2 lg:px-10 sm:px-3">
                {services.map((item, id) => (
                <FadeCard key={id} item={item} index={id}  />
                ))}
            </div>
        </div>

        <div className='w-full lg:p-10 sm:p-5'>
            <div className='w-full flex items-center lg:gap-x-5'>
                <h2 className='text-[33.8304px] text-[#262626] font-minion italic'>
                    <span className='text-[33.8304px] lg:block hidden'>
                        “Our ethos here is simple, <br />it’s solutions not problems”.
                    </span>
                    <span className='text-[24.3664px] block lg:hidden'>
                        “Our ethos here is simple, <br />it’s solutions not<br /> problems”.
                    </span>
                </h2>
                {/* Divider (hidden on small screens) */}
                <div className="hidden lg:flex flex-1 mx-6">
                    <hr className="w-full h-[1.5px] bg-[#262626]" />
                </div>
            </div>
            <p className="font-brandon uppercase text-[13.4528px] text-[#262626] tracking-wider leading-relaxed mb-5 sm:mt-3 lg:mt-0">
                Our business has been built on <br /> ensuring our proactive approach <br /> means that we get results in an <br /> EFFICIENT and expert manner.
            </p>
            <p className="font-brandon uppercase text-[13.4528px] text-[#262626] tracking-wider leading-relaxed">
                ARRAN ANDERSON, CO-FOUNDER
            </p>
        </div>

        <div className="relative w-full h-auto bg-[#EEEBE6] lg:p-10 sm:p-5">
            {/* Content wrapper with bottom padding */}
            <div className="w-full pb-8 relative z-10">
                <h2 className="lg:text-[41.472px] sm:text-[27.952px] font-minion">
                Do you have a <span className="italic">project</span>
                <br /> we can support with?
                </h2>
                <p className="font-brandon uppercase text-[#262626] tracking-wider leading-relaxed mt-5 mb-3">
                    <span className='text-[13.4528px] hidden lg:block'>Our service is rated 4.9 across over 50 google <br /> reviews.</span>
                    <span className='text-[14.8048px] lg:hidden block'>Our service is rated 4.9 across <br /> over 50 google reviews.</span>
                </p>
                <Link 
                    href={"/get-in-touch"}
                    className="lg:w-48 sm:w-full lg:h-10 sm:h-14 border-[1.5px] border-[#C9E265] flex items-center justify-center uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#C9E265] hover:text-white"
                >
                    get in touch
                </Link>
            </div>

            {/* Small screens → background image */}
            <div
                className="absolute inset-0 bg-no-repeat bg-right-bottom bg-contain lg:hidden"
                style={{ backgroundImage: "url('/&-sign.webp')" }}
            ></div>

            {/* Large screens → positioned image */}
            <div className="hidden lg:block absolute bottom-4 right-4">
                <Image
                src="/&-sign.webp"
                alt="& sign"
                width={275}
                height={275}
                className="object-contain"
                priority
                />
            </div>
        </div>

        <div>

        </div>

        <div>
            <FAQ/>
        </div>

    </div>
  );
};

export default Rep;
