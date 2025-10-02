import Link from "next/link";
import Image from "next/image";

const DesignAndProjects = () => {
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
            Design & Project Management
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch lg:p-10 sm:p-3 gap-8">
        {/* Left column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Turning ideas into reality requires more than just design flair — it takes careful planning, coordination, and control at every stage of the process. From concept through to completion, our role is to guide your project with precision and confidence.
            </p>
            <p className="leading-relaxed tracking-wider font-brandon">
            We prepare detailed design drawings, technical specifications, and tender documentation, while managing contractors, costs, and compliance on your behalf. By combining creative design with structured project management, we ensure your project is delivered on time, on budget, and to the highest standards.
            </p>
        </div>
        
        {/* Right column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            From vision to reality:
            </p>
            <ul className="list-disc list-inside leading-relaxed tracking-wider font-brandon space-y-2">
            <li>Architectural & technical design, plus specs</li>
            <li>Tendering, contractor selection & oversight</li>
            <li>Contract administration, cost control & quality assurance</li>
            <li>Permitting, compliance, and stakeholder engagement</li>
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

    </div>
  );
};

export default DesignAndProjects;
