'use client';

import DynamicTrafficLight from "@/components/traffic-light/page";
import Link from "next/link";

const Level3 = () => {
  return (
    <div className="w-full mt-28">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full bg-[#161B46] text-white pt-24 pb-60 overflow-hidden">
        
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#E6FF4F] font-semibold text-lg mb-2">
            Level 3 (Homebuyer Survey)
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl mb-6">
            For Complete Peace of Mind on Complex or Older Properties
          </h1>

          <p className="max-w-2xl text-[17px] text-gray-200 leading-relaxed mb-8">
            When you need a deep dive into a property’s condition—especially one that’s older, larger, or  extensively altered—our Level 3 (Building Survey) delivers the full picture. Designed for buyers  who need more detail, it covers everything from structure to services, with tailored insights and professional advice.
          </p>

            <Link href={'/book-survey'}>
                <button className="bg-[#E6FF4F] cursor-pointer text-[#0A0A0A] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
                    Book a Survey →
                </button>
            </Link>
          
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <svg
            viewBox="0 0 1440 240"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              fill="#F9F9F4"
              d="M0,192L80,170.7C160,149,320,107,480,90.7C640,75,800,85,960,96C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* ---------------- DYNAMIC TRAFFIC LIGHT ---------------- */}
      <div className="bg-[#F9F9F4] pt-10 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <DynamicTrafficLight
            interval={2000}
            autoCycle={true}
            title="What Is a Level 3 (Building Survey)?"
            description={[
            "A Level 3 survey is the most detailed inspection we offer. It includes a full internal and external assessment of the property, along with outbuildings, driveways, and gardens. Not only does it identify defects, but it also provides a diagnosis and recommends any necessary remedial work.",

            "Like our Level 2 survey, it uses a clear traffic light system:"
            ]}
            items={[
              {
                id: "red",
                label: "Red",
                rating: "Condition Rating 3",
                description: "Urgent or serious issues",
                color: "#ff4d4d",
              },
              {
                id: "amber",
                label: "Amber",
                rating: "Condition Rating 2",
                description: "Minor defects",
                color: "#ffb400",
              },
              {
                id: "green",
                label: "Green",
                rating: "Condition Rating 1",
                description: "No repairs needed",
                color: "#3bb143",
              },
            ]}
          />
        </div>
      </div>

    </div>
  );
};

export default Level3;
