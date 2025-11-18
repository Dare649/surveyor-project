import Image from "next/image";
import Link from "next/link";
import InfoSection from "@/components/info/page";
import defectImage from '@/public/header-img.webp'
import ImageSlider from "@/components/img-slider/page";

const BuildingServiceInspection = () => {
  const paragraphs = [
    "Making property decisions without the right knowledge can be costly — not just financially, but also in terms of time, stress, and long-term liability. Buildings often hide issues that are invisible at first glance: structural weaknesses, outdated systems, or maintenance backlogs that can escalate into major expenses. ",
    "Our role is to uncover those risks and give you certainty, clarity, and confidence before you commit. We go beyond ticking boxes — every survey we deliver provides a full picture of the property’s condition, future liabilities, and opportunities. ",
  ];

  const images = [
    '/Defect.jpg',
    '/Part-wall.jpg',
    '/Dilapidation.jpg',
    '/Expert.jpg',
    '/Project-Management.jpg',
    '/Refurbishment.jpg',
  ];
  return (
    <div className="w-full sm:my-10 lg:my-20">
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
            building services & inspection
          </h2>
        </div>
      </div>

      <InfoSection
        title="building services & inspection"
        paragraphs={paragraphs}
        image={defectImage.src}
        reverse={false} // set true if you want the image on the left
      />

     <div className="flex justify-end px-4 lg:px-20">
        <Link
          href={"/get-in-touch"}
          className="hidden lg:flex w-40 h-14 border-[1.5px] hover:border-[#C9E256] uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-[#C9E256] bg-[#C9E256] text-white justify-center items-center"
        >
          get in touch
        </Link>
      </div>

    <div>
        <h2 className='lg:text-[27.4624px] text-center sm:text-[21.3784px] font-minion text-[#262626] italic'>Our Services</h2>
      <ImageSlider images={images} />
    </div>
    </div>
  );
};

export default BuildingServiceInspection;
