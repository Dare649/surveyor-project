import { nav } from "@/data/dummy";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="w-full fixed top-0 z-50">
      {/* desktop view */}
      <div className="w-full hidden lg:flex shadow-md bg-white">
        <div className="w-full h-20 font-brandon px-12 flex items-center">
          {/* Left nav links */}
          <div className="flex items-center gap-x-8">
            {nav.map((item, id) => (
              <Link
                key={id}
                href={item.path}
                className="uppercase text-sm text-[#262626]"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Logo (centered) */}
          <div className="flex-1 flex justify-center">
            <div className="w-60 h-20 relative">
              <Image
                src="/Project&Co-Logo.webp"
                alt="Project & Co Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right button */}
          <button
            className="w-36 h-10 border-[1.5px] border-[#262626] text-center uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#262626] hover:text-white"
          >
            get in touch
          </button>

        </div>
      </div>
    </div>
  );
};

export default Nav;
