import Image from "next/image";
import Link from "next/link";
import InfoSection from "@/components/info/page";
import defectImage from '@/public/Project-Management.jpg'

const ProjectManagement = () => {
  const paragraphs = [
    "Turning ideas into reality requires more than just design flair — it takes careful planning, coordination, and control at every stage of the process. From concept through to completion, our role is to guide your project with precision and confidence.",
    "We prepare detailed design drawings, technical specifications, and tender documentation, while managing contractors, costs, and compliance on your behalf. By combining creative design with structured project management, we ensure your project is delivered on time, on budget, and to the highest standards.",
  ];
  return (
    <div className="w-full sm:my-10 lg:my-20">
      <div className="relative w-full h-[70vh]">
        {/* Background Image */}
        <Image
          src="/Project-Management.jpg"
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
            Design & Project Management
          </h2>
        </div>
      </div>

      <InfoSection
        title="Design & Project Management"
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

export default ProjectManagement;
