"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      title: "What services does Spectrum provide?",
      content:
        "Spectrum offers professional property management, valuation, and real estate consulting services regulated by RICS.",
    },
    {
      title: "How can I contact Spectrum?",
      content:
        "You can reach us through our website’s contact form or by emailing info@spectrum.com. Our team typically responds within 24 hours.",
    },
    {
      title: "Do you offer property valuation?",
      content:
        "Yes. Our RICS-certified valuers provide comprehensive and accurate property valuation services for both residential and commercial assets.",
    },
    {
      title: "Where is Spectrum located?",
      content:
        "We operate from multiple branches across Nigeria. Visit our contact page to find the office closest to you.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="w-full py-16 px-4 md:px-10 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-minion mb-8 text-gray-900 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-3">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left font-medium text-lg text-gray-800 focus:outline-none"
              >
                <span className="font-minion">{item.title}</span>
                <span className="text-2xl font-bold font-brandon tracking-wider leading-relaxed cursor-pointer text-primary-500">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-3 text-gray-600 text-sm leading-relaxed"
                  >
                    {item.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
