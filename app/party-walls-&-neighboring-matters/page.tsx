import Image from "next/image";

const PartWall = () => {
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
            Party Wall & Neighbouring Matters
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch lg:p-10 sm:p-3 gap-8">
        {/* Left column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Building work that affects shared walls, boundaries, or neighbouring properties can easily create disputes if not handled correctly. The Party Wall etc. Act 1996 sets clear procedures to protect the rights of both property owners — but navigating it can be complex without expert guidance.
            </p>
            <p className="leading-relaxed tracking-wider font-brandon">
            We act as impartial Party Wall Surveyors, preparing awards, resolving disputes, and advising on boundary and neighbourly matters. Our goal is to maintain good relationships between parties while ensuring full legal compliance, so projects can move forward without unnecessary conflict or delay.
            </p>
        </div>

        
        {/* Right column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Protect your project from boundary disputes:
            </p>
            <ul className="list-disc list-inside leading-relaxed tracking-wider font-brandon space-y-2">
            <li>Serve or receive Party Wall notices; act as Party Wall surveyor</li>
            <li>Draft Party Wall Awards and agreements</li>
            <li>Advice on rights of light, easements, and boundary ownership</li>
            <li>Mitigation strategies to reduce neighbourly conflict</li>
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

export default PartWall;
