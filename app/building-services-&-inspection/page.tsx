import Image from "next/image";

const BuildingServiceInspection = () => {
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
            building services & inspection
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch lg:p-10 sm:p-3 gap-8">
        {/* Left column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Making property decisions without the right knowledge can be costly — not just financially, but also in terms of time, stress, and long-term liability. Buildings often hide issues that are invisible at first glance: structural weaknesses, outdated systems, or maintenance backlogs that can escalate into major expenses. 
            </p>
            <p className="leading-relaxed tracking-wider font-brandon">
            Our role is to uncover those risks and give you certainty, clarity, and confidence before you commit. We go beyond ticking boxes — every survey we deliver provides a full picture of the property’s condition, future liabilities, and opportunities. 
            </p>
        </div>

        {/* Right column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Gain certainty before you commit. Our surveys cover:
            </p>
            <ul className="list-disc list-inside leading-relaxed tracking-wider font-brandon space-y-2">
            <li>Pre-acquisition condition assessments</li>
            <li>Full structural diagnosis</li>
            <li>Dilapidations evaluations</li>
            <li>Measured building surveys, floorplans, and elevations. We deliver clarity — so you know what you’re walking into.</li>
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

export default BuildingServiceInspection;
