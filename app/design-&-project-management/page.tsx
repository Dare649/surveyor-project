"use client";

import Image from "next/image";
import Link from "next/link";
import defectImage from "@/public/Project-Management.jpg";
import ProjectSlider from "@/components/project-slider/page";
import { caseStudies } from "@/data/dummy";

const ProjectManagement = () => {
  return (
    <div className="w-full sm:my-10 lg:my-20">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={defectImage}
          alt="Project Management"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-10 left-0 w-full text-center px-4">
          <h2 className="text-white font-minion lg:text-[41.472px] sm:text-[27.952px] capitalize">
            Contract Administration & Project Management
          </h2>
        </div>
      </div>

      {/* Text Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-32 mt-20">
        {/* Left Text */}
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            We provide an efficient and high quality contract administration &
            project management from initial briefing and feasibility right through
            to contract completion. It is our belief that one of the key factors of
            our success is our ability and endeavour to really understand our
            clients’ needs and priorities.
          </p>
          <p>
            This belief, along with our ethos of adding value at every opportunity,
            sets us apart from other consultancies and helps us to exceed
            expectations time and time again. Our services include:
          </p>
        </div>

        {/* Right List */}
        <div className="text-gray-700">
          <ul className="list-disc list-inside space-y-3">
            <li>Feasibility studies including preliminary cost and programme advice</li>
            <li>Early implementation of risk management strategies</li>
            <li>Advice regarding procurement routes and contract types</li>
            <li>Preparation of detailed specifications, drawings and tender documentation</li>
            <li>Preparation of contract documents</li>
            <li>Implementation of value management and cost control measures</li>
            <li>Contract administration and contractual advice</li>
            <li>Regular cost reporting and forecasting throughout the contract period</li>
            <li>Overseeing delivery to ensure a high standard of works</li>
            <li>Manage defects through the rectification period to completion</li>
          </ul>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-[#F9F9F9] mt-24 py-16 px-6 lg:px-20">
        <h2 className="text-center text-[#C9E256] font-semibold text-3xl mb-12">
          Case Studies
        </h2>
        <ProjectSlider projects={caseStudies} />
      </div>

      {/* Get in Touch */}
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

export default ProjectManagement;
