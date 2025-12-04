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
          src="/Project-Management.jpg"
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

        <div className="w-full lg:h-[30vh] sm:h-[20vh] bg-gray-200 flex items-center flex-col justify-center lg:p-10 sm:p-5">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-40">
                <Image
                src="/RICS-logo.webp"
                alt="RICS Logo"
                fill
                className="object-contain"
                priority
                />
            </div>
            <h2 className="text-[#262626] text-center text-[24px] font-brandon tracking-wide">
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
                At Spectrum, we are surveyors, consultants and project managers, proud of all we do and
                ready to support you from one end of the spectrum to the other..
                </p>

                {/* Middle paragraph – narrower (creates the V shape) */}
                <p className="max-w-4xl text-[18px] lg:text-[20px] font-minion text-[#777777] tracking-wider leading-relaxed">
                We are a forward-thinking building surveying practice committed to providing clear advice,
                expert technical guidance and high-quality project delivery. With experience across
                residential, commercial and industrial sectors, our team brings together deep industry
                knowledge, modern technology and a client-focused approach.
                </p>

                {/* Bottom paragraph – narrowest (point of the V) */}
                <p className="max-w-3xl text-[18px] lg:text-[20px] font-minion text-[#777777] tracking-wider leading-relaxed">
                Whether you are a homeowner, developer, investor, landlord, tenant, or managing agent,
                Spectrum offers tailored solutions that protect your assets, reduce risks and unlock long-term
                value. Our mission is simple: <span className="font-bold">to make property decisions easier, safer and more cost-effective for every client.</span>
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
                <h2 className='lg:text-[27.4624px] sm:text-[21.3784px] text-center font-minion text-[#262626] italic'>Our Services</h2>
                
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
