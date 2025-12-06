'use client';

import DynamicTrafficLight from "@/components/traffic-light/page";
import Link from "next/link";
import InfoTabs from "@/components/level-info/page";

const Level2 = () => {


    const tabsData = [
        {
            id: "who",
            label: "Who is it For?",
            title: "Who is it For?",
            intro: "Level 2 surveys are best suited to:",
            content: [
            "Modern or traditionally built houses and flats",
            "Properties in reasonable condition",
            "Homes that haven’t been significantly extended, altered, or neglected",
            ],
            buttonLabel: "Contact Us",
            buttonLink: "/get-in-touch",
        },
        {
            id: "help",
            label: "How Does it Help?",
            title: "How Does it Help?",
            intro:
            "Knowledge is power—especially when it comes to one of the biggest purchases of your life. A Level 2 (Homebuyer Survey) empowers you to:",
            content: [
            "Understand the true condition of the property",
            "Budget for future repairs",
            "Renegotiate the asking price based on identified defects",
            "Move forward with confidence and peace of mind",
            ],
            buttonLabel: "Talk to a Surveyor",
            buttonLink: "/get-in-touch",
        },
        {
            id: "expect",
            label: "What to Expect",
            title: "What to Expect",
            intro:
            "Here’s what you can expect from a Level 2 (Homebuyer Survey):",
            content: [
            "A thorough internal and external inspection",
            "Clear condition ratings using a traffic-light system",
            "Insightful, easy-to-understand survey findings",
            "A post-survey call to review everything with you",
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
            Level 2 (Homebuyer Survey)
          </p>

          <h1 className="text-4xl md:text-5xl font-bold font-minion leading-tight max-w-2xl mb-6">
            Clarity, Confidence and Peace<br />
            of Mind — All in One Report
          </h1>

          <p className="max-w-2xl text-[17px] font-brandon font-bold text-white leading-relaxed mb-8">
            Whether you’re buying your first home or adding to your property portfolio, our Level 2 
            (Homebuyer Survey) gives you a clear, accurate picture of the property’s condition—before 
            you commit. With expert insight and actionable advice, we help you make smart, informed 
            decisions without the guesswork.
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
            footerText="The report can also include a professional valuation, giving you added confidence during the buying process."
            title="What Is a Level 2 (Homebuyer Survey)?"
            description={[
            "A Level 2 survey is a comprehensive internal and external inspection of the entire property—including outbuildings, gardens, and driveways. Every element is assessed using a clear traffic light rating system:",
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
                        Internal and external inspection of the building
                    </p>
                    </div>

                    <div className="flex items-center gap-3 w-full">
                    <span className="text-[#C9E256] text-2xl">✔</span>
                    <p className="text-lg font-brandon">
                        Assessment of construction, condition, and any visible defects
                    </p>
                    </div>

                    <div className="flex items-center gap-3 w-full">
                    <span className="text-[#C9E256] text-2xl">✔</span>
                    <p className="text-lg font-brandon">
                        Identification of issues such as damp, structural movement, and outdated services
                    </p>
                    </div>

                    <div className="flex items-center gap-3 w-full">
                    <span className="text-[#C9E256] text-2xl">✔</span>
                    <p className="text-lg font-brandon">
                        Condition ratings on all key elements
                    </p>
                    </div>

                    <div className="flex items-center gap-3 w-full">
                    <span className="text-[#C9E256] text-2xl">✔</span>
                    <p className="text-lg font-brandon">
                        Optional property valuation
                    </p>
                    </div>

                    <div className="flex items-center gap-3 w-full">
                    <span className="text-[#C9E256] text-2xl">✔</span>
                    <p className="text-lg font-brandon">
                        Post-survey call with the inspecting surveyor to walk you through the findings
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

export default Level2;
