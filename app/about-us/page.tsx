"use client";

import Image from "next/image";
import Link from "next/link";
import FadeCard from "@/components/fade-card/page";
import { services } from "@/data/dummy";

const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[100vh]">
        {/* Background Image */}
        <Image
          src="/header-img.webp"
          alt="Project & Co Left"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text pinned to bottom */}
        <div className="absolute top-1/2 left-0 w-full text-center px-4">
          <h2 className="text-white font-minion lg:text-[50.472px] sm:text-[27.952px] capitalize">
            about us
          </h2>
        </div>
      </div>

        <div className="w-full lg:h-[30vh] sm:h-[20vh] bg-[#262626] flex items-center flex-col justify-center lg:p-10 sm:p-5">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-40 lg:h-40">
                <Image
                    src="/RICS-1.png"
                    alt="RICS Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <h2 className="text-white text-center text-[24px] font-brandon tracking-wide">
            We are regulated by the Royal Institute of Chartered Surveyors
            </h2>
        </div>

        <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 lg:px-20 text-center bg-white">
            <h2 className="font-minion text-xl lg:text-4xl font-bold leading-relaxed capitalize text-[#C9E256] mb-8">
                why choose spectres building consulting?
            </h2>

            <div className="w-full flex flex-col items-center space-y-8">
                {/* Top paragraph – wider */}
                <p className="max-w-5xl text-[18px] lg:text-[20px] font-minion text-[#777777] tracking-wider leading-relaxed">
                We construct the foundations to your success through successful project
                delivery – embracing a unique approach to modern working, alongside a
                commitment to innovation and investment in technology. We always go the
                extra mile for our clients and seek to add value at every opportunity. What
                really sets us apart however is one simple factor – our commitment to
                ‘only quality people’.
                </p>

                {/* Middle paragraph – narrower (creates the V shape) */}
                <p className="max-w-4xl text-[18px] lg:text-[20px] font-minion text-[#777777] tracking-wider leading-relaxed">
                Our people consist solely of highly qualified and experienced chartered
                surveyors with a wealth of industry expertise. We have a very strong team
                ethos and support each other as we aspire to achieve our shared and personal
                goals.
                </p>

                {/* Bottom paragraph – narrowest (point of the V) */}
                <p className="max-w-3xl text-[18px] lg:text-[20px] font-minion text-[#777777] tracking-wider leading-relaxed">
                Each of us has a personal commitment to the success of the business along
                with similar values, motivation and a passion for construction. These
                factors, combined with a focus on knowledge sharing and self-development,
                facilitate a level of service that is unparalleled in the industry.
                </p>
            </div>

            <Link
                href="/get-in-touch"
                className="hidden lg:flex w-40 h-14 border-[1.5px] hover:border-[#C9E265] uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-[#C9E265] bg-[#C9E265] text-white justify-center items-center mt-12"
            >
                get in touch
            </Link>
        </div>


        <div className='w-full lg:px-10 sm:px-3'>
            <div className='w-full '>
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
                        className="hidden lg:flex w-40 h-14 border-[1.5px] hover:border-[#262626] uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-[#262626] bg-[#262626] text-white justify-center items-center"
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
    </div>
  );
};

export default AboutUs;
