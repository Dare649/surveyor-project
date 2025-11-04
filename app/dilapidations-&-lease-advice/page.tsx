import Image from "next/image";
import Link from "next/link";
import defectImage from "@/public/Dilapidation.jpg";

const Dilapidation = () => {
  return (
    <div className="w-full sm:my-10 lg:my-20">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={defectImage}
          alt="Dilapidations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-10 left-0 w-full text-center px-4">
          <h2 className="text-white font-minion lg:text-[41.472px] sm:text-[27.952px] capitalize">
            Dilapidations
          </h2>
        </div>
      </div>

      {/* Intro Text */}
      <div className="text-center mt-12 px-6 lg:px-40">
        <p className="space-y-4 font-brandon tracking-wider text-lg leading-relaxed">
          When a tenancy/lease is coming to an end, the dilapidations negotiation
          between the landlord and tenant will commence. It is a process where
          the costs for making good the premises and removing any tenant
          alterations in accordance with the terms of the lease are discussed.
        </p>
        <p className="space-y-4 font-brandon tracking-wider text-lg leading-relaxed mt-4">
          There are a number of ways Archway can assist with the process whether
          acting on behalf of the landlord or tenant.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex items-stretch flex-col lg:flex-row gap-10 mt-16 px-6 lg:px-20">
        {/* Landlord Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-[#C9E265] font-brandon text-2xl mb-6">
            Landlord
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="space-y-4 font-brandon tracking-wider text-lg leading-relaxed">Dilapidations Liability –</span>{" "}
              Archway can provide early advice on the dilapidations liability of
              a tenant by reviewing lease documentation and the condition of the
              premises, and ensure the landlord is making the best decisions for
              their business.
            </li>
            <li>
              <span className="space-y-4 font-brandon tracking-wider text-lg leading-relaxed">Interim/ Terminal Schedule –</span>{" "}
              Archway can produce an interim or terminal schedule of
              dilapidations on behalf of the landlord. We use our expertise to
              ensure the property is vacated in the desired state, or the costs
              of bringing it into repair are recovered from the tenant.
            </li>
            <li>
              <span className="space-y-4 font-brandon tracking-wider text-lg leading-relaxed">Contract Administration –</span>{" "}
              Following tenant vacation, Archway can Project Manage refurbishment
              works to bring the premises up to market standard.
            </li>
          </ul>
        </div>

        {/* Tenant Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-[#C9E265] font-brandon text-2xl mb-6">Tenant</h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="space-y-4 font-brandon tracking-wider text-lg leading-relaxed">Exit Strategy –</span> Archway can
              provide early advice on the dilapidations liability by reviewing
              lease documentation and the condition of the premises, and ensure
              the tenant is making the best decisions for their business.
            </li>
            <li>
              <span className="space-y-4 font-brandon tracking-wider text-lg leading-relaxed">Contract Administration –</span>{" "}
              We can arrange to Project Manage refurbishment works that they
              would be liable for, thus reducing the potential liability under a
              claim from the landlord.
            </li>
            <li>
              <span className="space-y-4 font-brandon tracking-wider text-lg leading-relaxed">Negotiation –</span> If a claim has
              been served by the landlord, Archway can use expertise to negotiate
              the claim on behalf of the tenant.
            </li>
            <li>
              <span className="space-y-4 font-brandon tracking-wider text-lg leading-relaxed">Schedule of Condition –</span>{" "}
              Should the property be in disrepair at lease commencement, Archway
              can produce schedules of condition to be appended to the lease to
              ensure the tenant is protected.
            </li>
          </ul>
        </div>
      </div>

      {/* Get in Touch Button */}
      <div className="flex justify-end px-4 lg:px-20 mt-12">
        <Link
          href={"/get-in-touch"}
          className="hidden lg:flex w-40 h-14 border-[1.5px] hover:border-[#C9E256] uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-[#C9E256] bg-[#C9E256] text-white justify-center items-center"
        >
          get in touch
        </Link>
      </div>
    </div>
  );
};

export default Dilapidation;
