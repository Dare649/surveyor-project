"use client";

import { useState, useEffect } from 'react';
import Image from "next/image"
type Country = {
  id: number;
  name: string;
  iso2: string;
  iso3: string;
  phonecode: string;
  capital: string;
  currency: string;
  emoji: string;
};

const GetInTouch = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
  async function fetchCountries() {
    try {
      const res = await fetch("https://api.first.org/data/v1/countries");
      const json = await res.json();

      // ✅ Convert object into array
      const countriesArray = Object.entries(json.data).map(([code, info], idx) => {
        const countryInfo = info as {
          country: string;
          region: string;
          iso2?: string;
          iso3?: string;
          phone?: string;
          capital?: string;
          currency?: string;
          emoji?: string;
        };
        return {
          id: idx,
          name: countryInfo.country,
          iso2: code,
          iso3: countryInfo.iso3 || "",
          phonecode: countryInfo.phone || "",
          capital: countryInfo.capital || "",
          currency: countryInfo.currency || "",
          emoji: countryInfo.emoji || "",
        };
      });

      setCountries(countriesArray);
    } catch (err) {
      console.error("Failed to fetch countries", err);
    } finally {
      setLoading(false);
    }
  }
  fetchCountries();
}, []);

  return (
    <div className='w-full'>
        <div className="relative w-full h-[80vh]">
            {/* Background Image */}
            <Image
                src="/header-img.webp"
                alt="Project & Co Left"
                fill
                className="object-cover"
                priority
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text pinned to bottom */}
            <div className="absolute bottom-10 left-0 w-full text-center px-4">
                <h2 className="text-white font-minion lg:text-[41.472px] sm:text-[27.952px] capitalize">
                Our team are ready to assist you
                </h2>
            </div>
        </div>
        <div className="w-full bg-[#262626] ">
            <div className="w-full flex items-center pt-10 pb-5">
                {/* Left shorter line */}
                <div className="w-[15%]">
                    <hr className="border-t-[1.5px] border-white" />
                </div>

                {/* Center text */}
                <h2 className="px-4 lg:text-[35.2px] sm:text-[21.8px] font-minion text-white text-center whitespace-nowrap">
                    Get in touch <span className="italic">with us</span>
                </h2>

                {/* Right full line */}
                <div className="flex-grow">
                    <hr className="border-t-[1.5px] border-white" />
                </div>
            </div>

            <div className="w-full flex lg:items-stretch lg:flex-row sm:flex-col gap-5 lg:p-10 sm:p-3">
                <div className="lg:w-[60%] sm:w-full">
                    <h2 className="text-white font-brandon text-[13.0624px] uppercase">address</h2>
                    <div className="my-5">
                        <div className="w-full mt-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">country</h2>
                            <select className="w-full h-12 outline-none lg:p-2 sm:p-1 border-0 bg-white cursor-pointer">
                                {countries.map((c) => (
                                    <option key={c.iso2} value={c.iso2}>
                                    {c.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full my-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">address line 1</h2>
                            <input 
                                className="w-full h-12 outline-none lg:p-2 sm:p-1 border-0 bg-white"
                                type="text" 
                            />
                        </div>
                        <div className="w-full my-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">address line 2</h2>
                            <input 
                                className="w-full h-12 outline-none lg:p-2 sm:p-1 border-0 bg-white"
                                type="text" 
                            />
                        </div>
                        <div className="w-full my-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">city/town</h2>
                            <input 
                                className="w-full h-12 outline-none lg:p-2 sm:p-1 border-0 bg-white"
                                type="text" 
                            />
                        </div>
                        <div className="w-full my-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">post code</h2>
                            <input 
                                className="w-full h-12 outline-none lg:p-2 sm:p-1 border-0 bg-white"
                                type="text" 
                            />
                        </div>
                    </div>
                    <h2 className="text-white font-brandon text-[13.0624px] uppercase">name</h2>
                    <div className="my-3">
                        <div className='flex lg:flex-row items-center gap-5 sm:flex-col'>
                            <div className="w-full my-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">first name</h2>
                            <input 
                                className="w-full h-12 outline-none lg:p-2 sm:p-1 border-0 bg-white"
                                type="text" 
                            />
                        </div>
                        <div className="w-full my-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">last name</h2>
                            <input 
                                className="w-full h-12 outline-none lg:p-2 sm:p-1 border-0 bg-white"
                                type="text" 
                            />
                        </div>
                        </div>
                        <div className="w-full my-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">email</h2>
                            <input 
                                className="w-full h-12 outline-none lg:p-2 sm:p-1 border-0 bg-white"
                                type="email" 
                            />
                        </div>
                        <div className="w-full my-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">phone number</h2>
                            <input 
                                className="w-full h-12 outline-none lg:p-2 sm:p-1 border-0 bg-white"
                                type="number" 
                            />
                        </div>
                        <div className="w-full my-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">is the enquiry regarding a new instruction or an exsiting one?</h2>
                            <select
                                className="w-full h-12 outline-none lg:p-2 sm:p-1 border-0 bg-white uppercase cursor-pointer text-[#262626]"
                            >
                                <option value="">select an option</option>
                            </select>
                        </div>
                        <div className="w-full my-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">which services is required?</h2>
                            <select
                                className="w-full h-12 outline-none lg:p-2 sm:p-1 cursor-pointer border-0 bg-white uppercase text-[#262626]"
                            >
                                <option value="">select an option</option>
                            </select>
                        </div>
                        <div className="w-full my-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">how did you know about project & co?</h2>
                            <select
                                className="w-full h-12 outline-none lg:p-2 sm:p-1 cursor-pointer border-0 bg-white uppercase text-[#262626]"
                            >
                                <option value="">select an option</option>
                                <option value="">referral</option>
                                <option value="">linkedin</option>
                                <option value="">instagram</option>
                                <option value="">google ads</option>
                            </select>
                        </div>
                        <div className="w-full my-3">
                            <h2 className="text-white font-brandon text-[11.5936px] uppercase mb-2">message</h2>
                            <textarea
                                className="w-full outline-none lg:p-2 sm:p-1 border-0 bg-white"
                                cols={30}
                                rows={5}
                            ></textarea>
                        </div>
                        <div className='flex justify-start'>
                            <button
                                className="hidden lg:flex w-40 h-14 border-[1.5px] hover:border-white uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-white bg-white text-[#262626] justify-center items-center"
                            >
                                send
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[40%] sm:w-full lg:px-5 sm:px-3 text-white font-brandon">
                    <div className='w-full my-5'>
                        <h2 className="text-white font-brandon uppercase mb-2 mt-8 font-bold text-[13.0624px]">office:</h2>
                        <h2 className="text-white font-brandon text-[11.5936px] uppercase my-4">manchester street, england</h2>
                    </div>
                    <div className='w-full my-5'>
                        <h2 className="text-white font-brandon uppercase mb-2 mt-8 font-bold text-[13.0624px]">hours:</h2>
                        <h2 className="text-white font-brandon text-[11.5936px] uppercase my-4">monday-friday,9am-6pm </h2>
                    </div>
                    <div className='w-full my-5'>
                        <h2 className="text-white font-brandon uppercase mb-2 mt-8 font-bold text-[13.0624px]">reach out:</h2>
                        <h2 className="text-white font-brandon text-[11.5936px] uppercase my-4">valuation - 090068493 </h2>
                        <h2 className="text-white font-brandon text-[11.5936px] uppercase my-4">building surveying - 090068493 </h2>
                        <h2 className="text-white font-brandon text-[11.5936px] uppercase my-4 underline">email@gmail.com</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch