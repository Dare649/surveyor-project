import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[120vh]">
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 h-full">
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
          <div className="pt-52">
            <h2 className="uppercase text-[13.4528px] font-brandon text-[#262626] leading-relaxed tracking-wide">
              award winning consultants
            </h2>
            <h2 className="text-[41.472px] my-8 font-minion">
              Surveying with <span className="italic">personality</span>. <br />
              We are a forward thinking <br />
              multi-disciplinary firm.
            </h2>
            <button
              className="w-40 h-16 bg-white text-center text-[12.816px] uppercase text-[#433f3c] font-brandon cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white/70"
            >
              who are we
            </button>
          </div>

          {/* Award Image (sticks at bottom, small gap) */}
          <div className="absolute bottom-4 right-4 w-44 h-44">
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
