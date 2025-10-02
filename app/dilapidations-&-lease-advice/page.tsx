import Image from "next/image";
import Link from "next/link";

const DilapidationsAndLease = () => {
  return (
    <div className="w-full sm:mt-10 lg:mt-20">
      <div className="relative w-full h-[70vh]">
        {/* Background Image */}
        <Image
          src="/Dilapidation.jpg"
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
            Dilapidations & Lease Advice
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch lg:p-10 sm:p-3 gap-8">
        {/* Left column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Lease agreements often bring complex responsibilities, particularly around repair and reinstatement at the end of a term. Without clear advice, landlords risk financial loss while tenants may face unexpected liabilities.  
            </p>
            <p className="leading-relaxed tracking-wider font-brandon">
            Our role is to simplify this process. We prepare and defend schedules of dilapidations, advise on repairing obligations, and negotiate fair settlements. By giving clear, strategic lease advice, we help both landlords and tenants manage risks, avoid disputes, and achieve the best possible outcomes.
            </p>
        </div>

        
        {/* Right column */}
        <div className="lg:w-1/2 w-full space-y-5">
            <p className="leading-relaxed tracking-wider font-brandon">
            Make lease end smooth — not contentious:
            </p>
            <ul className="list-disc list-inside leading-relaxed tracking-wider font-brandon space-y-2">
            <li>Draft or defend Schedules of Dilapidations</li>
            <li>Advise landlords & tenants on liabilities, reinstatement, and alterations</li>
            <li>Negotiate settlements and manage dispute resolution</li>
            <li>Strategic lease advice and review</li>
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

export default DilapidationsAndLease;
