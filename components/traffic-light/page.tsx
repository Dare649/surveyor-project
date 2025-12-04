"use client";

import React, { useEffect, useState } from "react";

export interface TrafficLightItem {
  id: string;
  label: string;
  rating?: string;
  description?: string;
  color: string;
  border?: string;
  aspects?: string[];
  reportLink?: { text: string; href: string };
}

interface TrafficLightProps {
  items: TrafficLightItem[];
  interval?: number;
  autoCycle?: boolean;
  title?: string;
  description?: string[];
  footerText?: string | string[];
  className?: string;
}

export default function DynamicTrafficLight({
  items,
  interval = 2000,
  autoCycle = true,
  title,
  description,
  footerText,
  className = "",
}: TrafficLightProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoCycle) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, autoCycle]);

  return (
    <section className={`w-full flex justify-center ${className}`}>
      <div className="w-full max-w-6xl px-4">

        {/* Title + Description */}
        {(title || description) && (
          <div className="max-w-3xl mb-10">
            {title && (
              <h2 className="text-[32px] md:text-[40px] font-minion text-[#0a1b49] mb-4">
                {title}
              </h2>
            )}

            {description?.map((p, i) => (
              <p
                key={i}
                className="max-w-3xl text-[#444] font-brandon leading-relaxed mb-6"
              >
                {p}
              </p>
            ))}
          </div>
        )}

        {/* Traffic Light Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={item.id}
                onClick={() => !autoCycle && setActiveIndex(index)}
                className="p-6 rounded-3xl border bg-white transition-all cursor-pointer h-full flex flex-col"
                style={{
                  borderColor: isActive
                    ? item.color
                    : item.border || "#e5e5e5",
                  boxShadow: isActive ? `0 0 18px ${item.color}` : "none",
                }}
              >
                {/* Light + Label */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-6 h-6 rounded-full transition-all"
                    style={{
                      backgroundColor: isActive ? item.color : "#e5e5e5",
                      boxShadow: isActive ? `0 0 12px ${item.color}` : "none",
                    }}
                  ></div>

                  <h3
                    className="text-xl font-minion"
                    style={{ color: isActive ? item.color : "#1b1b1b" }}
                  >
                    {item.label}
                  </h3>
                </div>

                {item.rating && (
                  <p className="text-sm text-[#666]">{item.rating}</p>
                )}

                {item.description && (
                  <p className="mt-1 ffont-brandon text-[#444]">
                    {item.description}
                  </p>
                )}

                {/* Aspects List */}
                {item.aspects && (
                  <ul className="mt-4 ml-1 space-y-1 text-sm text-[#555] list-inside">
                    {item.aspects.map((aspect, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span
                          className="w-2 h-2 rounded-full mt-1"
                          style={{ backgroundColor: item.color }}
                        />
                        <span>{aspect}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Optional link */}
                {item.reportLink && (
                  <a
                    href={item.reportLink.href}
                    className="mt-4 text-sm underline font-semibold"
                  >
                    {item.reportLink.text}
                  </a>
                )}
              </article>
            );
          })}
        </div>

        {/* Footer Text (after traffic-light system) */}
        {footerText && (
          <div className="max-w-3xl">
            {Array.isArray(footerText) ? (
              footerText.map((text, i) => (
                <p key={i} className="text-[#444] font-brandon leading-relaxed mb-4">
                  {text}
                </p>
              ))
            ) : (
              <p className="text-[#444] font-brandon leading-relaxed mb-4">{footerText}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
