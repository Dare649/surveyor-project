"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { id: 1, value: 500, suffix: "+", label: "Surveys & Valuations" },
    { id: 2, value: 10, suffix: "+", label: "Team Members" },
    { id: 3, value: 1, prefix: "£", suffix: "B+", label: "Worth of Properties" },
  ];

  return (
    <div
      ref={ref}
      className="w-full bg-white py-20 flex flex-col items-center justify-center"
    >
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            className="flex flex-col items-center justify-center py-10"
          >
            <h2 className="text-6xl font-bold text-black mb-2">
              {stat.prefix && stat.prefix}
              {isInView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                />
              ) : (
                0
              )}
              {stat.suffix && stat.suffix}
            </h2>
            <p className="text-lg font-brandon uppercase text-[#262626] tracking-wider leading-relaxed">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
