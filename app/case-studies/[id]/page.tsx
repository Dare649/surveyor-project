import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/dummy";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id.toString(),
  }));
}

export default function CaseStudyPage({ params }: Props) {
  const id = Number(params.id);
  const projectIndex = caseStudies.findIndex((p) => p.id === id);
  const project = caseStudies[projectIndex];

  if (!project) return notFound();

  const prevProject = caseStudies[projectIndex - 1];
  const nextProject = caseStudies[projectIndex + 1];

  return (
    <div className="w-full sm:my-10 lg:my-20">
      {/* 🖼️ HERO SECTION */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-10 left-0 w-full text-center px-4">
          <h2 className="text-white font-minion lg:text-[41.472px] sm:text-[27.952px] capitalize">
            {project.title}
          </h2>
        </div>
      </div>

      {/* 🧾 PROJECT INFO */}
      <div className="max-w-6xl mx-auto lg:px-20 px-6 mt-24 space-y-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Description + Details */}
          <div className="space-y-6">
            <h3 className="text-[#C9E256] text-2xl mb-4 font-semibold capitalize">
              {project.subtitle || "Project Overview"}
            </h3>

            {project.paragraphs?.map((text, index) => (
              <p
                key={index}
                className="text-gray-700 text-lg leading-relaxed font-light"
              >
                {text}
              </p>
            ))}

            {/* 🧱 Project Meta Info */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              <div>
                <p className="font-semibold text-gray-800">Client:</p>
                <p className="text-gray-600">{project.client || "Confidential"}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Contract Value:</p>
                <p className="text-gray-600">{project.contractValue || "N/A"}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Location:</p>
                <p className="text-gray-600">{project.location || "Not specified"}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Duration:</p>
                <p className="text-gray-600">{project.duration || "Ongoing"}</p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          {project.extraImage && (
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.extraImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* 🔗 NAVIGATION (Prev / Next) */}
        <div className="flex justify-between items-center mt-20 border-t pt-10">
          {prevProject ? (
            <Link
              href={`/case-studies/${prevProject.id}`}
              className="text-gray-700 hover:text-[#C9E256] font-medium transition"
            >
              ← Previous
            </Link>
          ) : (
            <span></span>
          )}

          {nextProject ? (
            <Link
              href={`/case-studies/${nextProject.id}`}
              className="text-gray-700 hover:text-[#C9E256] font-medium transition"
            >
              Next →
            </Link>
          ) : (
            <span></span>
          )}
        </div>

        {/* 📨 CTA BUTTON */}
        <div className="flex justify-end mt-12">
          <Link
            href="/get-in-touch"
            className="hidden lg:flex w-40 h-14 border-[1.5px] hover:border-[#C9E256] uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-[#C9E256] bg-[#C9E256] text-white justify-center items-center"
          >
            get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
