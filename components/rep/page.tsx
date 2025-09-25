import React from 'react';
import { projects } from '@/data/dummy';
import Image from 'next/image';

const Rep = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center mt-10 lg:mt-20 px-4">
        <h2 className="font-minion text-[#262626] text-xl lg:text-[27.4624px] leading-relaxed text-center max-w-4xl">
          “We have worked with Projects for the last five <br /> months and{' '}
          <span className="italic">love their modern approach to surveying.</span> <br />
          The work they produce is always of excellent <br /> quality, and nothing is ever too much for Jon <br />and his team, 
          who always go the extra mile.
          I would <br />highly recommend their services, especially to <br />anyone in the property management sector.”
        </h2>
      </div>
      <h2 className='flex items-center justify-center mt-[16px] text-[#D2C9BA] uppercase text-[13.4528px] font-brandon'>russel beck - future group</h2>
        <div className="relative w-full h-full mt-5">
            {/* Background layer with slant */}
            <div className="absolute inset-0 bg-[#D2C9BA]/20 clip-slant"></div>

            {/* Content layer */}
            <div className="relative z-10 flex flex-col items-center justify-start h-full pt-60">
                <h2 className="text-center text-[27.4624px] italic underline text-black capitalize font-minion">
                june newsletter
                </h2>
                <h2 className='font-brandon text-[13.4528px] uppercase my-10 font-semibold'>primary projects</h2>
                <div className='mb-20 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-3 lg:px-10 sm:px-3'>
                    {
                        projects.map((item, id) => (
                            <div key={id} className="group">
                                <div className="relative h-full w-full cursor-pointer">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-full w-full object-cover"
                                    />
                                    {/* Dark overlay on hover */}
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                                </div>
                                <h2 className="text-[13.4528px] font-brandon mt-3 uppercase">
                                    {item.title}
                                </h2>
                            </div>

                        ))
                    }
                </div>
                <button
                    className="w-40 h-16 bg-white text-center text-[12.816px] uppercase text-[#433f3c] font-brandon cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#D2C9BA]/10"
                >
                    view more
                </button>
            </div>
            <div className="mt-5 mb-20 lg:px-10 sm:px-3">
                <h2 className="uppercase font-brandon text-[13.4528px]">rics regulated</h2>
                <div className="flex items-center justify-between lg:flex-row sm:flex-col gap-6">
                    {/* Left Text */}
                    <h2 className="font-minion text-[27.4624px]">
                    So you know the <br /> <span className="italic">standard</span>{" "}
                    to expect.
                    </h2>

                    {/* Divider (hidden on small screens) */}
                    <div className="hidden lg:flex flex-1 mx-6">
                        <hr className="w-full h-[1.5px] bg-[#262626]" />
                    </div>

                    {/* Logo */}
                    <div className="relative w-60 h-60">
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
  );
};

export default Rep;
