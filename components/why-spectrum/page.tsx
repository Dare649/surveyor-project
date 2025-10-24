"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const WhySpectrum = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  // Accordion toggle
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "RICS certified",
      content:
        "At Spectrum, we have undergone the rigorous process of achieving RICS certification to provide our clients with the highest level of expertise they deserve.",
    },
    {
      title: "Customer first",
      content:
        "Our top priority at Spectrum is always the customer. We keep your best interests in mind when making decisions and carrying out actions.",
    },
    {
      title: "Detailed report auditing",
      content:
        "Spectrum ensures that a comprehensive and detailed report containing all necessary information is provided before, during, and after each job.",
    },
    {
      title: "Over 10 years experience",
      content:
        "With more than a decade of industry experience, Spectrum guarantees professionalism and expertise, eliminating the risk of rookie mistakes.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full lg:flex items-stretch justify-between lg:px-40 sm:px-6 py-20"
    >
      {/* LEFT: IMAGE */}
      <div className="relative lg:w-1/2 w-full">
        <Image
          src="/Dilapidation.jpg" // replace with your image path
          alt="Building"
          width={800}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>

      {/* RIGHT: CONTENT CARD */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute lg:static top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:ml-[-5rem] bg-white shadow-xl p-10 w-[90%] lg:w-[45%]"
      >
        <h2 className="text-3xl font-minion font-semibold mb-6">Why Spectrum</h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full cursor-pointer flex justify-between items-center text-left font-brandon leading-relaxed tracking-wide text-lg border-b border-gray-200 pb-3"
              >
                {item.title}
                <span className="text-xl font-brandon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-gray-600 text-sm leading-relaxed tracking-wide"
                >
                  {item.content}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-[#C9E265] text-white px-8 py-3 hover:text-[#C9E265] font-semibold hover:bg-white hover:border-2 hover:border-[#C9E265] transition">
            Read More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default WhySpectrum;
