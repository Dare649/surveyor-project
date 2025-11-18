import Image from "next/image";
import Link from "next/link";
import InfoSection from "@/components/info/page";
import defectImage from '@/public/header-img.webp'
import ImageSlider from "@/components/img-slider/page";

const Health = () => {
  const images = [
    '/Defect.jpg',
    '/Part-wall.jpg',
    '/Dilapidation.jpg',
    '/Expert.jpg',
    '/Project-Management.jpg',
    '/Refurbishment.jpg',
  ];
  const paragraphs = [
    "Ensuring buildings are safe, accessible, and fully compliant with regulations is essential for protecting both people and investments. From construction projects to occupied properties, health and safety obligations carry serious responsibilities that require expert oversight.",
    "We provide practical compliance advice covering CDM regulations, fire safety, accessibility, and equality requirements. Our focus is on reducing risks, avoiding legal pitfalls, and creating safe, inclusive environments — giving you confidence that your property meets the highest standards of safety and accountability.",
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
            Health & Safety / Compliance
          </h2>
        </div>
      </div>

      <InfoSection
        title="Health & Safety / Compliance"
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

    <div>
        <h2 className='lg:text-[27.4624px] text-center sm:text-[21.3784px] font-minion text-[#262626] italic'>Our Services</h2>
      <ImageSlider images={images} />
    </div>
    </div>
  );
};

export default Health;
