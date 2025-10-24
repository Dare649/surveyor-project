import Image from "next/image";
import Link from "next/link";
import InfoSection from "@/components/info/page";
import defectImage from '@/public/Dilapidation.jpg'

const Dilapidation = () => {
  const paragraphs = [
    "Lease agreements often bring complex responsibilities, particularly around repair and reinstatement at the end of a term. Without clear advice, landlords risk financial loss while tenants may face unexpected liabilities.",
    "Our role is to simplify this process. We prepare and defend schedules of dilapidations, advise on repairing obligations, and negotiate fair settlements. By giving clear, strategic lease advice, we help both landlords and tenants manage risks, avoid disputes, and achieve the best possible outcomes.",
  ];
  return (
    <div className="w-full sm:my-10 lg:my-20">
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

      <InfoSection
        title="Dilapidations & Lease Advice"
        paragraphs={paragraphs}
        image={defectImage.src}
        reverse={true} // set true if you want the image on the left
      />

     <div className="flex justify-end px-4 lg:px-20">
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
