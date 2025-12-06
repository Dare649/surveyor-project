'use client';

import { useState } from "react";
import Link from "next/link";

export interface TabItem {
  id: string;
  label: string;
  title: string;
  intro?: string;
  content: string[];
  buttonLabel: string;
  buttonLink: string;
}

export default function InfoTabs({ tabs }: { tabs: TabItem[] }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);

  // Guaranteed fallback (fixes TS “possibly undefined”)
  const activeTab =
    tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10">

        {/* LEFT SIDE TABS */}
        <div className="md:w-1/3 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`w-full text-left px-6 py-4 rounded-md cursor-pointer font-minion text-xl flex items-center justify-between
                ${activeId === tab.id
                  ? "bg-[#C9E256] text-white"
                  : "text-[#656565]"
                }`}
            >
              {tab.label}
              {activeId === tab.id && (
                <span className="text-white text-lg">➜</span>
              )}
            </button>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block w-px bg-gray-300" />

        {/* RIGHT SIDE CONTENT */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-minion text-black mb-4">
            {activeTab.title}
          </h2>

          {activeTab.intro && (
            <p className="text-black font-brandon text-lg mb-8">
              {activeTab.intro}
            </p>
          )}

          <div className="space-y-4">
            {activeTab.content.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-black text-2xl">✔</span>
                <p className="text-black text-lg font-brandon">{item}</p>
              </div>
            ))}
          </div>

          <Link href={activeTab.buttonLink}>
            <button className="mt-10 bg-[#C9E256] px-8 py-3 cursor-pointer rounded-full text-white font-semibold shadow-md hover:opacity-90">
              {activeTab.buttonLabel} →
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
