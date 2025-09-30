import Image from "next/image";

const DefectAnalysis = () => {
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
            Defects Analysis & Maintenance
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch lg:p-10 sm:p-3 gap-8">
        {/* Left column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
                Building defects, if left unchecked, can quickly escalate into costly problems — from persistent damp and cracking walls to subsidence, roof leaks, or failing services. These issues not only impact the safety and comfort of a property but also its long-term value. 
            </p>
            <p className="leading-relaxed tracking-wider font-brandon">
                Our role is to investigate the root causes of defects, not just the symptoms. We provide clear, practical recommendations for repairs, along with planned preventive maintenance strategies that help extend the life of your building, reduce future risks, and manage costs more effectively. 
            </p>
        </div>


        {/* Right column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            When things go wrong, we dig deeper:
            </p>
            <ul className="list-disc list-inside leading-relaxed tracking-wider font-brandon space-y-2">
            <li>Moisture ingress, cracks, subsidence, leaks — we see the root cause</li>
            <li>Detailed reports with remedial options and prioritization</li>
            <li>Preventive maintenance planning to reduce future surprises</li>
            <li>Lifecycle cost advice to help you budget ahead</li>
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

export default DefectAnalysis;
