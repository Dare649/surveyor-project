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
            Insurance & Expert Witness
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch lg:p-10 sm:p-3 gap-8">
        {/* Left column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            When disputes, claims, or insurance matters arise, having accurate and authoritative reporting is essential. Whether you’re establishing reinstatement values, resolving a conflict, or supporting a legal case, expert advice can make all the difference in achieving a fair outcome.
            </p>
            <p className="leading-relaxed tracking-wider font-brandon">
            We carry out reinstatement cost assessments, prepare expert witness reports, and provide independent valuations for insurance and legal purposes. Our detailed, evidence-based approach ensures that our findings carry weight, giving you clarity, credibility, and confidence when it matters most.
            </p>
        </div>

        
        {/* Right column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Ensure your project is safe, legal, and future-proof:
            </p>
            <ul className="list-disc list-inside leading-relaxed tracking-wider font-brandon space-y-2">
            <li>Reinstatement cost assessments for insurance</li>
            <li>Expert witness reports for litigation or claims</li>
            <li>Valuation advice for insurance or reinvestment</li>
            <li>Independent technical opinions rooted in best practice</li>
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
