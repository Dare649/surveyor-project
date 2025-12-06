'use client';

import DynamicTrafficLight from "@/components/traffic-light/page";
import Link from "next/link";
import InfoTabs from "@/components/level-info/page";

const Level3 = () => {
    const tabsData = [
        {
            id: "who",
            label: "Who Should Get a Level 3 Survey?",
            title: "Who Should Get a Level 3 Survey?",
            intro: "This survey is ideal for properties that are:",
            content: [
            "Pre-1900 or listed",
            "Heavily extended or structurally complex",
            "In poor condition or in need of refurbishment",
            "Large in size with multiple levels or unusual layouts",
            ],
            buttonLabel: "Contact Us",
            buttonLink: "/get-in-touch",
        },
        {
            id: "help",
            label: "Who Should Get a Level 3 Survey?",
            title: "Who Should Get a Level 3 Survey?",
            intro:
            "Buying a home is a major investment—especially if it’s not a typical build. A Level 3 survey ensures:",
            content: [
            "You’re fully informed about the condition of every aspect of the property",
            "You know the cost of potential repairs before you commit",
            "You’re able to negotiate based on clear, expert-backed evidence",
            "You avoid any nasty surprises post-purchase",
            ],
            buttonLabel: "Talk to a Surveyor",
            buttonLink: "/get-in-touch",
        },
        {
            id: "expect",
            label: "What to Expect",
            title: "What to Expect",
            content: [
            "A thorough inspection—typically 3+ hours on-site",
            "Use of advanced tools including drones, damp meters, ladders, and more",
            "Your detailed report delivered within 4 working days of the inspection",
            "Clear recommendations, repair advice, and plenty of photos",
            "A follow-up call to guide you through the findings",
            ],
            buttonLabel: "Book a Survey",
            buttonLink: "/book-survey",
        },
    ];
  return (
    <div className="w-full mt-28">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full bg-[#C9E256] text-white pt-24 pb-60 overflow-hidden">
        
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C9E256] font-semibold text-lg mb-2">
            Level 3 (Homebuyer Survey)
          </p>

          <h1 className="text-4xl md:text-5xl font-bold font-minion leading-tight max-w-2xl mb-6">
            For Complete Peace of Mind on Complex or Older Properties
          </h1>

          <p className="max-w-2xl text-[17px] text-white font-brandon font-bold leading-relaxed mb-8">
            When you need a deep dive into a property’s condition—especially one that’s older, larger, or  extensively altered—our Level 3 (Building Survey) delivers the full picture. Designed for buyers  who need more detail, it covers everything from structure to services, with tailored insights and professional advice.
          </p>

            <Link href={'/book-survey'}>
                <button className="bg-white cursor-pointer text-[#C9E256] border-2 border-[#C9E256] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
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
              fill="#ffffff"
              d="M0,192L80,170.7C160,149,320,107,480,90.7C640,75,800,85,960,96C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* ---------------- DYNAMIC TRAFFIC LIGHT ---------------- */}
      <div className="bg-white pt-10 pb-20">
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


      {/* ---------------- WHAT'S INCLUDED SECTION ---------------- */}
    <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

            {/* TEXT SIDE */}
            <div className="flex-1">
            <h2 className="text-3xl font-minion mb-8 text-[#0A0A33]">
                What’s Included?
            </h2>

            <div className="flex flex-wrap gap-6 text-[#0A0A33]">

                {/* Each item */}
                <div className="flex items-center gap-3 w-full">
                    <span className="text-[#C9E256] text-2xl">✔</span>
                    <p className="text-lg font-brandon">
                        Full internal and external inspection
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full">
                    <span className="text-[#C9E256] text-2xl">✔</span>
                    <p className="text-lg font-brandon">
                        Diagnosis of any defects and suggested remedial action
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full">
                    <span className="text-[#C9E256] text-2xl">✔</span>
                    <p className="text-lg font-brandon">
                        Traffic light condition ratings
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full">
                    <span className="text-[#C9E256] text-2xl">✔</span>
                    <p className="text-lg font-brandon">
                        Assessment of structural movement, damp, dated services, and more
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full">
                    <span className="text-[#C9E256] text-2xl">✔</span>
                    <p className="text-lg font-brandon">
                        Optional valuation (unlike most Level 3 surveys)
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full">
                    <span className="text-[#C9E256] text-2xl">✔</span>
                    <p className="text-lg font-brandon">
                        Post-survey call to discuss findings with your surveyor
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full">
                    <span className="text-[#C9E256] text-2xl">✔</span>
                    <p className="text-lg font-brandon">
                        Supporting images and clear, jargon-free language
                    </p>
                </div>
            </div>
            </div>

            {/* IMAGE SIDE */}
            <div className="flex-1 flex justify-center">
            <img
                src="/Defect.jpg"
                alt="Survey illustration"
                className="w-full max-w-md rounded-lg"
            />
            </div>

        </div>
    </div>

    <div>
        <InfoTabs tabs={tabsData} />
    </div>

    </div>
  );
};

export default Level3;
