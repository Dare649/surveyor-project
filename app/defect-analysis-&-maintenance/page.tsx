import Image from "next/image";
import Link from "next/link";
import InfoSection from "@/components/info/page";
import defectImage from '@/public/Defect.jpg';
import ImageSlider from "@/components/img-slider/page";

const DefectAnalysis = () => {
  const paragraphs = [
    "Building defects, if left unchecked, can quickly escalate into costly problems — from persistent damp and cracking walls to subsidence, roof leaks, or failing services. These issues not only impact the safety and comfort of a property but also its long-term value.",
    "Our role is to investigate the root causes of defects, not just the symptoms. We provide clear, practical recommendations for repairs, along with planned preventive maintenance strategies that help extend the life of your building, reduce future risks, and manage costs more effectively.",
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
          src="/Defect.jpg"
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
            Defects Analysis & Maintenance
          </h2>
        </div>
      </div>

      <InfoSection
        title="Defects Analysis & Maintenance"
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

export default DefectAnalysis;
