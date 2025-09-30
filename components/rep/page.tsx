"use client";

import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { projects, services } from '@/data/dummy';
import Image from 'next/image';
import FadeCard from '../fade-card/page';


function AnimatedCard({ item, index }: { item: { img: string; title: string }; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting); // update on enter & leave
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const fromLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms`, willChange: "transform, opacity" }}
      className={`w-full group transform transition-all duration-700 ease-out
        ${visible
          ? "translate-x-0 opacity-100"
          : fromLeft
          ? "-translate-x-20 opacity-0"
          : "translate-x-20 opacity-0"
        }`}
    >
      <div className="relative w-full cursor-pointer overflow-hidden">
        <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>
      <h2 className="text-[13.4528px] font-brandon mt-3 uppercase">{item.title}</h2>
    </div>
  );
}


const Rep = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center mt-10 lg:mt-20 px-4">
        <h2 className="font-minion text-[#262626] leading-relaxed text-center max-w-4xl">
          <span className="hidden lg:block text-[27.4624px]">
            “We are a team of professional building surveyors. Our role is to<br /> and property consultants{' '}
            <span className="italic">give you absolute clarity about your property.</span> <br />
            — whether you’re buying, leasing, investing, refurbishing, or <br />managing ongoing maintenance.”
          </span>

          <span className="block lg:hidden text-[21.3784px]">
            “We are a team <br />of professional building surveyors. Our role is to and property consultants{' '}
            <span className="italic">give you  absolute clarity <br />about your property.</span>
            — whether you’re buying, leasing, investing, refurbishing, or managing ongoing maintenance.”
        </span>
        </h2>
      </div>
      <h2 className='flex items-center justify-center mt-[16px] text-[#D2C9BA] uppercase text-[13.4528px] font-brandon'>russel beck - future group</h2>
        <div className="relative w-full mt-5 overflow-hidden">
            {/* Background layer with slant */}
            <div className="absolute inset-0 bg-[#D2C9BA]/20 z-0 clip-slant"></div>

            {/* Content layer */}
            <div className="relative z-10 flex flex-col items-center justify-start h-full lg:pt-56 sm:pt-16 lg:px-10 sm:px-3">
                <h2 className="text-center lg:text-[27.4624px] sm:text-[21.3784px] italic underline text-black capitalize font-minion">
                june newsletter
                </h2>
                <h2 className='font-brandon lg:text-[13.4528px] sm:text-[14.8048px] uppercase lg:my-10 sm:my-5 font-semibold leading-relaxed tracking-wider'>primary projects</h2>
                <div className="mb-20 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10 ">
                    {projects.map((item, id) => (
                        <AnimatedCard key={id} item={item} index={id} />
                    ))}
                </div>
                <button
                    className="lg:w-40 sm:w-full h-16 bg-white text-center lg:text-[12.816px] sm:text-[14.506px] uppercase text-[#433f3c] font-brandon cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#D2C9BA]/10"
                >
                    view more
                </button>
            </div>

            <div className="mt-5 lg:px-10 sm:px-3">
                <h2 className="uppercase font-brandon lg:text-[13.4528px] sm:text-[14.8048px]">rics regulated</h2>
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-x-6">
                {/* Left Text */}
                <h2 className="font-minion text-left lg:text-[27.4624px] sm:text-[21.3784px] sm:mt-8 lg:mt-0">
                    So you know the <br /> <span className="italic">standard</span>{" "}
                    to expect.
                </h2>

                {/* Divider + Logo */}
                <div className="flex flex-row w-full lg:flex-1 lg:mx-6 items-center gap-6">
                    {/* Divider */}
                    <div className="flex flex-1">
                    <hr className="w-full h-[1.5px] bg-[#262626]" />
                    </div>

                    {/* Logo */}
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60">
                    <Image
                        src="/RICS-logo.webp"
                        alt="RICS Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className="relative w-full lg:h-[80vh] sm:h-[60vh] overflow-hidden">
            {/* Background layer with slant */}
            <div className="absolute inset-0 bg-[#433F3C] z-0"></div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center justify-start h-full lg:pt-20 sm:pt-10 px-4">
                <h2 className="text-white uppercase lg:text-[13.4528px] sm:text-[14.8048px] font-brandon text-center">
                a reputation built on repeat business & recommendations.
                </h2>

                <div className="lg:my-10 sm:my-3 w-full max-w-6xl relative lg:h-[200px] sm:h-[100px]">
                    <Image
                        src="/partner-img.webp"
                        alt="Partner image"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <h2 className='text-white font-minion'>
                    <span className='text-[27.4624px] lg:block hidden'>
                        We're proud to work with some <span className='italic underline'>excellent</span>, like-minded clients.
                    </span>

                    <span className='text-[21.3784px] text-center block lg:hidden'>
                        We're proud to work with some <br /> <span className='italic underline'>excellent</span>, like-minded clients.
                    </span>
                </h2>
            </div>
        </div>


        <div className='w-full lg:px-10 sm:px-3'>
            <div className='w-full lg:mt-20 sm:mt-10'>
                <h2 className='lg:text-[27.4624px] sm:text-[21.3784px] font-minion text-[#262626]'>How we'll help <span className='italic'>you</span></h2>
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
                    <div className="hidden lg:flex flex-1 mx-6">
                        <hr className="w-full h-[1.5px] bg-[#262626]" />
                    </div>
                    <button
                        className="hidden lg:flex w-40 h-14 border-[1.5px] border-[#262626] uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#262626] hover:text-white justify-center items-center"
                    >
                        case studies
                    </button>

                </div>
            </div>
        </div>


        <div className="w-full mt-10">
            <div className="mb-20 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 lg:px-10 sm:px-3">
                {services.map((item, id) => (
                <FadeCard key={id} item={item} index={id} />
                ))}
            </div>
        </div>

        <div className="w-full lg:px-10 sm:px-3 mt-20 flex lg:flex-row sm:flex-col items-stretch">
            {/* Left div */}
            <div className="relative lg:w-1/2 sm:w-full sm:h-[300px] lg:h-auto">
                <Image
                src="/3-men.webp"
                alt="3 men"
                fill
                className="object-cover"
                priority
                />
            </div>

            {/* Right div */}
            <div className="relative lg:w-1/2 sm:w-full lg:px-14 sm:px-4 flex flex-col justify-center bg-white">
                <h2 className="font-minion text-[#262626] leading-snug">
                    <span className='lg:text-[33.8304px] lg:block hidden'>
                        “We believe property decisions should be backed by knowledge. That’s why
                        we combine technical rigour with clear communication{" "}
                        <span className="italic">— anticipating issues before they become problems, and guiding you toward the best outcomes.</span>.”
                    </span>
                    <span className='sm:text-[24.3664px] block lg:hidden mt-10'>
                        “We believe property decisions should be backed by knowledge. That’s why
                        we combine technical rigour with clear communication{" "}
                        <span className="italic">— anticipating issues before they become problems, and guiding you toward the best outcomes.</span>.”
                    </span>
                </h2>

                <p className="font-brandon uppercase text-[13.4528px] text-[#262626] tracking-wider leading-relaxed my-10">
                "For us, surveying is more than just expert advice; it’s become a
                professional partner for our clients, where we solve problems before they
                happen, de-risk our clients' investments, and identify opportunities for
                our clients to maximize the value of their assets.
                </p>

                <p className="font-brandon uppercase text-[13.4528px] text-[#262626] tracking-wider leading-relaxed mb-10">
                It’s all about communication, there is simply nothing more important to us
                as a firm. We will be the go-to surveying firm in the UK within 5 years.
                </p>

                <p className="font-brandon uppercase text-[13.4528px] text-[#262626] tracking-wider leading-relaxed">
                colin horton <br />
                co-founder of project &amp; co.
                </p>
            </div>
        </div>


        <div className="w-full h-[80vh] mt-10 lg:px-10 sm:px-3">
            <div className="relative w-full h-full">
                <Image
                src="/team-img.webp"
                alt="3 men"
                fill
                className="object-cover"
                priority
                />
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
                <button className="lg:w-48 sm:w-full lg:h-10 sm:h-14 border-[1.5px] border-[#262626] text-center uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#262626] hover:text-white">
                get in touch
                </button>
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

    </div>
  );
};

export default Rep;
