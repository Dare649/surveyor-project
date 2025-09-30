import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full lg:h-[120vh] ">
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Left Image */}
        <div className="relative sm:w-0 lg:w-1/2 h-full">
          <Image
            src="/header-img.webp"
            alt="Project & Co Left"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="relative w-full h-full lg:w-1/2 bg-[#D2C9BA]/20 lg:px-14 sm:px-3 flex flex-col">
          {/* Text + Button */}
          <div className="lg:pt-52 sm:pt-28 w-full">
            <h2 className="uppercase text-[13.4528px] font-brandon text-[#262626] leading-relaxed tracking-wide">
              Building Confidence Through Expertise
            </h2>
            <h2 className="my-8 font-minion">
              {/* Desktop / Large screen */}
              <span className="hidden lg:block text-[41.472px]">
                “Solutions <span className="italic">not problems</span>. is more than a tagline — it’s how we operate.”
              </span>

              {/* Mobile / Small screen */}
              <span className="block lg:hidden text-[27.952px]">
                “Solutions <span className="italic">not problems</span>.
                is more than <br />a tagline — 
                it’s how <br />we operate.”
              </span>
            </h2>

            <button
              className="lg:w-40 sm:w-32 lg:h-16 sm:h-12 sm:mb-10 lg:mb-0 bg-white text-center text-[12.816px] uppercase text-[#433f3c] font-brandon cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white/70"
            >
              who are we
            </button>
          </div>

          {/* Award Image (sticks at bottom, small gap) */}
          <div className="absolute -bottom-7 right-0 w-32 h-32">
            <Image
              src="/Best+Surveyor.webp"
              alt="Best Surveyor Award"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
