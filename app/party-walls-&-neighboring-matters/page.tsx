import Image from "next/image";
import Link from "next/link";
import InfoSection from "@/components/info/page";
import defectImage from '@/public/Part-wall.jpg'

const PartyWalls = () => {
  const paragraphs = [
    "Building work that affects shared walls, boundaries, or neighbouring properties can easily create disputes if not handled correctly. The Party Wall etc. Act 1996 sets clear procedures to protect the rights of both property owners — but navigating it can be complex without expert guidance.",
    "We act as impartial Party Wall Surveyors, preparing awards, resolving disputes, and advising on boundary and neighbourly matters. Our goal is to maintain good relationships between parties while ensuring full legal compliance, so projects can move forward without unnecessary conflict or delay.",
  ];
  return (
    <div className="w-full sm:my-10 lg:my-20">
      <div className="relative w-full h-[70vh]">
        {/* Background Image */}
        <Image
          src="/Part-wall.jpg"
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

      <InfoSection
        title="Party Wall & Neighbouring Matters"
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

export default PartyWalls;
