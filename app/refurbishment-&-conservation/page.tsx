import Image from "next/image";

const Refurbishment = () => {
  return (
    <div className="w-full sm:mt-10 lg:mt-20">
      <div className="relative w-full h-[70vh]">
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
        <div className="absolute bottom-10 left-0 w-full text-center px-4">
          <h2 className="text-white font-minion lg:text-[41.472px] sm:text-[27.952px] capitalize">
            Refurbishment & Conservation
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch lg:p-10 sm:p-3 gap-8">
        {/* Left column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Renovation and conservation projects demand a balance between preserving the character of a building and adapting it for modern use. Whether it’s a listed property, heritage asset, or a home in need of transformation, careful planning and specialist knowledge are essential to achieving the right outcome.
            </p>
            <p className="leading-relaxed tracking-wider font-brandon">
            We provide expert guidance on refurbishment, extension, and conservation, with a strong focus on sustainability and long-term performance. From heritage advice to energy-efficiency upgrades, we help you enhance your property’s value while respecting its history and meeting today’s environmental standards.
            </p>
        </div>

        
        {/* Right column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Upgrade with sensitivity and performance:
            </p>
            <ul className="list-disc list-inside leading-relaxed tracking-wider font-brandon space-y-2">
            <li>Feasibility and design for renovations, extensions, conversions</li>
            <li>Heritage and listed building consents and advice</li>
            <li>Retrofit strategies — insulation, energy upgrades, decarbonisation</li>
            <li>Balancing modern comfort with historic character</li>
            </ul>

            <div className="flex justify-end">
                <button className="w-36 h-10 border-[1.5px] hover:border-[#262626] text-center uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out bg-[#262626] hover:bg-transparent hover:text-[#262626] text-white">
                    get in touch
                </button>
            </div>
        </div>
    </div>

    </div>
  );
};

export default Refurbishment;
