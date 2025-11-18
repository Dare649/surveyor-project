"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" }); // 👈 re-trigger when in view
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTriggerAnimation(true); // Start animation when in view
    } else {
      setTriggerAnimation(false); // Reset when out of view
    }
  }, [isInView]);

  const progressData = [
    { title: "building services & inspection", percent: 98 },
    { title: "defect analysis & maintenance", percent: 98 },
    { title: "design & project management", percent: 98 },
    { title: "dilapidations & lease advice", percent: 98 },
    { title: "party walls & neighboring matters", percent: 98 },
    { title: "refurbishment & conservation", percent: 98 },
    { title: "health & safety / compliance", percent: 98 },
    { title: "insurance", percent: 98 },
  ];

  return (
    <div className="w-full flex lg:flex-row flex-col items-center gap-10 lg:mt-20 mt-10 px-4 lg:px-40">
      {/* Left Text Section */}
      <div className="lg:w-1/2 w-full space-y-4 font-brandon">
        <h2 className="lg:text-6xl text-4xl capitalize font-minion text-[#C9E265]">
          About us
        </h2>
        <p className="text-gray-700 tracking-wider font-brandon leading-relaxed">
          
          At Spectrum, we are surveyors, consultants and project managers, proud of all we do and
          ready to support you from one end of the spectrum to the other. <br /><br />
          We are a forward-thinking building surveying practice committed to providing clear advice,
          expert technical guidance and high-quality project delivery. With experience across
          residential, commercial and industrial sectors, our team brings together deep industry
          knowledge, modern technology and a client-focused approach.<br /><br />
          Whether you are a homeowner, developer, investor, landlord, tenant, or managing agent,
          Spectrum offers tailored solutions that protect your assets, reduce risks and unlock long-term
          value. Our mission is simple: <span className="font-bold">to make property decisions easier, safer and more cost-effective for every client.</span>
        </p>
      </div>

      {/* Right Progress Bar Section */}
      <div ref={ref} className="lg:w-1/2 w-full flex flex-col gap-6">
        {progressData.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm uppercase font-semibold tracking-wider text-black">
                {item.title}
              </h3>
              <span className="text-sm font-semibold text-black">
                {item.percent}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-[2px] bg-gray-200 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={
                  triggerAnimation
                    ? { width: `${item.percent}%` }
                    : { width: 0 } // Reset when not in view
                }
                transition={{ duration: 1.5, delay: index * 0.2 }}
                className="h-[2px] bg-black"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
