"use client";

import { useRef, useState, useEffect } from "react";
import ImageHero from "@/components/image-hero/page";
import Link from "next/link";
import SurveyCard from "@/components/survey-card/page";
import { homeOwner } from "@/data/dummy";


// -----------------------------------------
// ⭐ useInView Hook (inside this file)
// -----------------------------------------
function useInView(threshold: number = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);  // Trigger animation
        } else {
          setInView(false); // Reset so it can trigger again
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}




// -----------------------------------------
// ⭐ Main Component
// -----------------------------------------
const HomeBuyers = () => {
  const { ref: titleRef, inView: titleInView } = useInView();
  const { ref: sectionRef, inView: cardsInView } = useInView();

  return (
    <div>
      <ImageHero />

      {/* INTRO SECTION */}
      <div className="my-10 lg:my-20 flex justify-center">
        <div className="max-w-4xl text-center px-4">
          <h2 className="mb-10 lg:text-6xl text-4xl capitalize font-minion">
            Raising the Standard in <br /> Residential Surveying
          </h2>

          <p className="text-gray-700 tracking-wider font-brandon leading-relaxed">
            At London & Kent Surveyors, we’re redefining how residential surveys are
            conducted. Combining cutting-edge drone technology, a personalised
            customer-first approach, and RICS-accredited expertise, we deliver
            detailed, accurate, and professional services tailored to your needs. <br />
            Whether it’s inspecting hard-to-reach roofs or guiding you through a
            comprehensive survey report, we go the extra mile to ensure you feel
            confident and informed at every step. With us, it’s more than a
            survey—it’s peace of mind.
          </p>

          <div className="flex justify-center mt-16">
            <Link
              href="/book-survey"
              className="hidden lg:flex w-40 h-14 border-[1.5px] hover:border-[#C9E256] uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-[#C9E256] bg-[#C9E256] text-white justify-center items-center"
            >
              book a survey
            </Link>
          </div>
        </div>
      </div>


      {/* HOMEOWNER SECTION */}
      <div ref={sectionRef} className="flex justify-center px-4 lg:mb-20 mb-10">
        <div className="w-full max-w-6xl">

          {/* TITLE WITH ANIMATION */}
          <h2
            ref={titleRef}
            className={`
              mb-10 lg:text-4xl text-2xl capitalize font-minion text-center
              transition-all duration-700 ease-out
              ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            Our Homeowner <br /> Services
          </h2>

          {/* GRID WITH ANIMATIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {homeOwner.map((item, id) => {
              const isLeft = id % 2 === 0;

              return (
                <Link
                  href={item.path}
                  key={id}
                  className={`
                    transition-all duration-700 ease-out delay-200
                    ${cardsInView
                      ? "opacity-100 translate-x-0"
                      : isLeft
                      ? "-translate-x-32 opacity-0"
                      : "translate-x-32 opacity-0"
                    }
                  `}
                >
                  <SurveyCard
                    description={item.description}
                    title={item.title}
                    image={item.img}
                  />
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};



export default HomeBuyers;
