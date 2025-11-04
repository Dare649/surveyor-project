"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f9f9f9] text-black py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10">
        {/* Contact Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold font-brandon capitalize">
            Contact
          </h2>
          <div>
            <h3 className="text-gray-500 font-medium font-brandon">Email:</h3>
            <p>info@spectrumservice.co.uk</p>
            <p>
              Tel: <span>+449 000 111 222</span>
            </p>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold font-brandon capitalize">
            Address
          </h2>
          <div>
            <p>
              Buckingham Palace, by Prince Charles
              <br />
              Castle
            </p>
          </div>
        </div>

        {/* Socials Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold font-brandon capitalize">
            Socials
          </h2>
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
        </div>

        {/* RICS Logo */}
        <div className="flex items-center justify-center">
          <Image
            src="/RICS-logo.webp"
            alt="RICS Logo"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-600 font-brandon">
        © {new Date().getFullYear()} Spectrum Services. All Rights Reserved.
      </div>
    </footer>
  );
}
