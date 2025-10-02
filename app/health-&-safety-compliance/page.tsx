import Image from "next/image";
import Link from "next/link";

const HealthSafety = () => {
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
            Health & Safety / Compliance
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch lg:p-10 sm:p-3 gap-8">
        {/* Left column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Ensuring buildings are safe, accessible, and fully compliant with regulations is essential for protecting both people and investments. From construction projects to occupied properties, health and safety obligations carry serious responsibilities that require expert oversight.
            </p>
            <p className="leading-relaxed tracking-wider font-brandon">
            We provide practical compliance advice covering CDM regulations, fire safety, accessibility, and equality requirements. Our focus is on reducing risks, avoiding legal pitfalls, and creating safe, inclusive environments — giving you confidence that your property meets the highest standards of safety and accountability.
            </p>
        </div>

        
        {/* Right column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Ensure your project is safe, legal, and future-proof:
            </p>
            <ul className="list-disc list-inside leading-relaxed tracking-wider font-brandon space-y-2">
            <li>CDM (Construction Design & Management) oversight and principal designer roles</li>
            <li>Fire safety audits, compliance reviews, and advice</li>
            <li>Accessibility audits under Equality/ADA standards</li>
            <li>Statutory compliance consulting and documentation</li>
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

export default HealthSafety;
