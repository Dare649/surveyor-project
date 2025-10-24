"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f9f9f9] text-black py-16 px-8 lg:px-24 grid md:grid-cols-3 gap-12 items-center">
      {/* Left Section - Work Enquiries */}
      <div className="flex flex-col space-y-6">
        <h2 className="text-2xl font-semibold font-brandon">Work Enquiries</h2>
        <Link
          href={"/get-in-touch"}
          className="hidden lg:flex w-40 h-14 border-[1.5px] hover:border-[#C9E265] uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-[#C9E265] bg-[#C9E265] text-white justify-center items-center"
        >
          get in touch
        </Link>
      </div>

      {/* Middle Section - Social Links */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-gray-500 font-medium font-brandon">Social</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="hover:underline font-brandon">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline font-brandon">
              Instagram
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline font-brandon">
              Twitter
            </Link>
          </li>
        </ul>
        <p className="text-sm mt-4 text-gray-700 font-brandon">
          75 Heron Court, Bromley BR2 9LR
        </p>
      </div>

      {/* Right Section - Logos */}
      <div className="flex flex-col items-start md:items-end gap-6">
        <Image
          src="/RICS-logo.webp" // 👈 replace with your actual file path
          alt="RICS Logo"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src="/REGULATED-BY-RICS-LOGO-BLACK-1-1.png" // 👈 replace with your actual file path
          alt="The Property Ombudsman"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Bottom Section - Copyright */}
      <div className="col-span-full border-t font-brandon border-gray-200 mt-12 pt-6 text-center text-sm text-gray-600">
        © Copyright Spectrum Services. All Rights Reserved.
      </div>
    </footer>
  );
}
