import Image from "next/image";
import Link from "next/link";
import ImageSlider from "@/components/img-slider/page";

const ExpertWitness = () => {
  const images = [
    '/Defect.jpg',
    '/Part-wall.jpg',
    '/Dilapidation.jpg',
    '/Expert.jpg',
    '/Project-Management.jpg',
    '/Refurbishment.jpg',
  ];
  return (
    <div className="w-full sm:mt-10 lg:mt-20">
      <div className="relative w-full h-[70vh]">
        {/* Background Image */}
        <Image
          src="/Expert.jpg"
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
            Expert Witness
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch lg:p-10 sm:p-3 gap-8">
        {/* Left column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
                When legal or regulatory matters require specialized knowledge, having a trusted expert witness can make all the difference. Our team combines technical expertise with clear, concise communication to provide reliable testimony in court, tribunals, or dispute resolutions.
            </p>
            <p className="leading-relaxed tracking-wider font-brandon">
            We guide clients through complex cases, offering impartial opinions grounded in evidence and professional experience. From property disputes to construction claims, our approach ensures that all findings are robust, defensible, and tailored to the specific requirements of your case.
            </p>
        </div>

        
        {/* Right column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Support your case with credible and authoritative insights:
            </p>
            <ul className="list-disc list-inside leading-relaxed tracking-wider font-brandon space-y-2">
            <li>Independent technical reports and analysis</li>
            <li>Expert testimony in court or mediation settings</li>
            <li>Professional assessments of construction, engineering, or heritage matters</li>
            <li>Detailed review of contracts, plans, and project documentation</li>
            <li>Clear explanations of complex technical issues for non-specialist audiences</li>
            </ul>

            <div className="flex justify-end">
                <Link 
                    href={"/get-in-touch"}
                    className="lg:w-48 sm:w-full lg:h-10 sm:h-14 border-[1.5px] border-[#262626] flex items-center justify-center uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#262626] hover:text-white"
                >
                    get in touch
                </Link>
            </div>
        </div>
    </div>

    <div>
        <h2 className='lg:text-[27.4624px] text-center sm:text-[21.3784px] font-minion text-[#262626] italic'>Our Services</h2>
      <ImageSlider images={images} />
    </div>
    </div>
  );
};

export default ExpertWitness;
