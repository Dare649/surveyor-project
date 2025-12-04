import Image from "next/image";
import Link from "next/link";
import InfoSection from "@/components/info/page";
import defectImage from '@/public/Insurance.jpg'
import ImageSlider from "@/components/img-slider/page";

const Health = () => {
  const paragraphs = [
    "When disputes, claims, or insurance matters arise, having accurate and authoritative reporting is essential. Whether you’re establishing reinstatement values, resolving a conflict, or supporting a legal case, expert advice can make all the difference in achieving a fair outcome.",
    "We carry out reinstatement cost assessments, prepare expert witness reports, and provide independent valuations for insurance and legal purposes. Our detailed, evidence-based approach ensures that our findings carry weight, giving you clarity, credibility, and confidence when it matters most.",
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
          src="/Insurance.jpg"
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
            Insurance
          </h2>
        </div>
      </div>

      <InfoSection
        title="Insurance"
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
