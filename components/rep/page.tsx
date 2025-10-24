"use client";

import React from 'react';
import { blogHighlights, services } from '@/data/dummy';
import Image from 'next/image';
import FadeCard from '../fade-card/page';
import Link from 'next/link';
import WhyChooseUs from '../why-choose-us/page';
import WhySpectrum from '../why-spectrum/page';
import FAQ from '../faq/page';
import AnimatedCard from '../animated-card/page';


// function AnimatedCard({ item, index }: { item: { img: string; title: string }; index: number }) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [visible, setVisible] = useState(false);


//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setVisible(entry.isIntersecting); // update on enter & leave
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   const fromLeft = index % 2 === 0;

//   return (
//     <div
//       ref={ref}
//       style={{ transitionDelay: `${index * 120}ms`, willChange: "transform, opacity" }}
//       className={`w-full group transform transition-all duration-700 ease-out
//         ${visible
//           ? "translate-x-0 opacity-100"
//           : fromLeft
//           ? "-translate-x-20 opacity-0"
//           : "translate-x-20 opacity-0"
//         }`}
//     >
//       <div className="relative w-full cursor-pointer overflow-hidden">
//         <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
//         <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
//       </div>
//       <h2 className="text-[13.4528px] font-brandon mt-3 uppercase">{item.title}</h2>
//     </div>
//   );
// }


const Rep = () => {
  return (
    <div className="w-full">
        <div>
            <WhyChooseUs/>
        </div>

        <div>
            <WhySpectrum/>
        </div>
        <div className="relative w-full lg:mt-20 mt-5 overflow-hidden">
            {/* Background layer with slant */}
            <div className="absolute inset-0 bg-[#C9E265]/20 z-0 clip-slant"></div>

            {/* Content layer */}
            <div className="relative z-10 flex flex-col items-center justify-start h-full lg:pt-56 sm:pt-16 lg:px-10 sm:px-3 pb-16 lg:pb-24">
                <h2 className="text-center lg:text-[27.4624px] sm:text-[21.3784px] italic underline text-black capitalize font-minion">
                blog post
                </h2>
                {/* <h2 className='font-brandon lg:text-[13.4528px] sm:text-[14.8048px] uppercase lg:my-10 sm:my-5 font-semibold leading-relaxed tracking-wider'>primary blogHighlights</h2> */}
                <div className="my-20 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10 ">
                    {blogHighlights.map((item, id) => (
                        <AnimatedCard key={id} item={item} index={id} />
                    ))}
                </div>
                <Link
                    href={'/blog'}
                    className="lg:w-40 sm:w-full h-16 bg-white lg:text-[12.816px] sm:text-[14.506px] uppercase text-[#433f3c] font-brandon cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white hover:border-2 hover:border-[#c9e256] hover:text-[#c9e256] flex justify-center items-center"
                >
                    view more
                </Link>
            </div>
        </div>

       <div className="relative w-full lg:h-[80vh] sm:h-[60vh] h-[50vh] overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-[#433F3C] z-0" />

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-start h-full lg:pt-20 sm:pt-10 px-4 text-center">
            <h2 className="text-white uppercase lg:text-[13.45px] sm:text-[14.8px] font-brandon tracking-[2px]">
            a reputation built on repeat business & recommendations.
            </h2>

            {/* Scrolling Logos */}
            <div className="my-16 w-full overflow-hidden">
            <div className="relative w-full md:py-10 sm:py-5">
                <div className="flex items-center w-max animate-scroll-x space-x-10">
                {Array(4)
                    .fill([
                    "/img-2.png",
                    "/img-7.png",
                    "/img-8.png",
                    ])
                    .flat()
                    .map((src, index) => (
                    <div
                        key={index}
                        className="md:w-32 md:h-20 sm:w-20 sm:h-12 relative flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-300"
                    >
                        <Image
                        src={src}
                        alt={`Partner logo ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100px, 200px"
                        className="object-contain"
                        onError={(e) => (e.currentTarget.src = "/fallback.png")}
                        />
                    </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Text Below Scroller */}
        <h2 className="text-white font-minion leading-snug">
        <span className="text-[27.46px] hidden lg:block">
            We're proud to work with some{" "}
            <span className="italic underline decoration-white/70">excellent</span>, like-minded clients.
        </span>

        <span className="text-[21.38px] block lg:hidden">
            We're proud to work with some <br />
            <span className="italic underline decoration-white/70">excellent</span>, like-minded clients.
        </span>
        </h2>
    </div>

        {/* Custom Scroll Animation */}
        <style jsx>{`
            @keyframes scroll-x {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
            }
            .animate-scroll-x {
            animation: scroll-x 25s linear infinite;
            }
        `}</style>
    </div>


        <div className='w-full lg:px-10 sm:px-3'>
            <div className='w-full lg:mt-20 sm:mt-10'>
                <h2 className='lg:text-[27.4624px] sm:text-[21.3784px] font-minion text-[#262626] italic'>Our Services</h2>
                <div className='lg:my-10 sm:my-5 w-full flex items-start lg:items-center justify-between lg:flex-row sm:flex-col'>
                    <h2 className='font-brandon text-[#262626] uppercase leading-relaxed tracking-wider'>
                        <span className='text-[13.4528px] hidden lg:block'>
                            we offer a vast array of professional service, <br /> provided to our clients across london & the <br /> south east of england.
                        </span>
                        <span className='text-[14.8048] block lg:hidden'>
                            we offer a vast array of <br /> professional service,<br /> provided to our clients <br /> across london & the  south <br /> east of england.
                        </span>
                    </h2>
                    {/* Divider (hidden on small screens) */}
                    {/* <div className="hidden lg:flex flex-1 mx-6">
                        <hr className="w-full h-[1.5px] bg-[#262626]" />
                    </div> */}
                    <Link
                        href={"/get-in-touch"}
                        className="hidden lg:flex w-40 h-14 border-[1.5px] hover:border-[#C9E265] uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-[#C9E265] bg-[#C9E265] text-white justify-center items-center"
                    >
                        get in touch
                    </Link>

                </div>
            </div>
        </div>


        <div className="w-full mt-10">
            <div className="mb-20 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-2 lg:px-10 sm:px-3">
                {services.map((item, id) => (
                <FadeCard key={id} item={item} index={id}  />
                ))}
            </div>
        </div>

       <div className="w-full lg:p-10 p-5 bg-[#262626]">
            <h2 className="capitalize font-minion text-2xl lg:text-6xl text-white">case studies</h2>

            <div className="flex items-center lg:flex-row sm:flex-col lg:mt-10 mt-5 gap-5">
                {/* Video 1 */}
                <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg">
                <video
                    src="/hero-video.mp4"
                    controls
                    playsInline
                    className="w-full h-[300px] lg:h-[400px] object-cover rounded-2xl"
                />
                </div>

                {/* Video 2 */}
                <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg">
                <video
                    src="/hero-video.mp4"
                    controls
                    playsInline
                    className="w-full h-[300px] lg:h-[400px] object-cover rounded-2xl"
                />
                </div>
            </div>
        </div>



        {/* <div className="w-full lg:px-10 sm:px-3 mt-20 flex lg:flex-row sm:flex-col items-stretch">
            
            <div className="relative lg:w-1/2 sm:w-full sm:h-[300px] lg:h-auto">
                <Image
                src="/3-men.webp"
                alt="3 men"
                fill
                className="object-cover"
                priority
                />
            </div>


            <div className="relative lg:w-1/2 sm:w-full lg:px-14 sm:px-4 flex flex-col justify-center bg-white">
                <h2 className="font-minion text-[#262626] leading-snug">
                    <span className='lg:text-[33.8304px] lg:block hidden'>
                        “We believe property decisions should be backed by knowledge. That’s why
                        we combine technical rigour with clear communication{" "}
                        <span className="italic">— anticipating issues before they become problems, and guiding you toward the best outcomes.</span>.”
                    </span>
                    <span className='sm:text-[24.3664px] block lg:hidden mt-10'>
                        “We believe property decisions should be backed by knowledge. That’s why
                        we combine technical rigour with clear communication{" "}
                        <span className="italic">— anticipating issues before they become problems, and guiding you toward the best outcomes.</span>.”
                    </span>
                </h2>

                <p className="font-brandon uppercase text-[13.4528px] text-[#262626] tracking-wider leading-relaxed my-10">
                "For us, surveying is more than just expert advice; it’s become a
                professional partner for our clients, where we solve problems before they
                happen, de-risk our clients' investments, and identify opportunities for
                our clients to maximize the value of their assets.
                </p>

                <p className="font-brandon uppercase text-[13.4528px] text-[#262626] tracking-wider leading-relaxed mb-10">
                It’s all about communication, there is simply nothing more important to us
                as a firm. We will be the go-to surveying firm in the UK within 5 years.
                </p>

                <p className="font-brandon uppercase text-[13.4528px] text-[#262626] tracking-wider leading-relaxed">
                colin horton <br />
                co-founder of project &amp; co.
                </p>
            </div>
        </div>


        <div className="w-full h-[80vh] mt-10 lg:px-10 sm:px-3">
            <div className="relative w-full h-full">
                <Image
                src="/team-img.webp"
                alt="3 men"
                fill
                className="object-cover"
                priority
                />
            </div>
        </div> */}

        <div className='w-full lg:p-10 sm:p-5'>
            <div className='w-full flex items-center lg:gap-x-5'>
                <h2 className='text-[33.8304px] text-[#262626] font-minion italic'>
                    <span className='text-[33.8304px] lg:block hidden'>
                        “Our ethos here is simple, <br />it’s solutions not problems”.
                    </span>
                    <span className='text-[24.3664px] block lg:hidden'>
                        “Our ethos here is simple, <br />it’s solutions not<br /> problems”.
                    </span>
                </h2>
                {/* Divider (hidden on small screens) */}
                <div className="hidden lg:flex flex-1 mx-6">
                    <hr className="w-full h-[1.5px] bg-[#262626]" />
                </div>
            </div>
            <p className="font-brandon uppercase text-[13.4528px] text-[#262626] tracking-wider leading-relaxed mb-5 sm:mt-3 lg:mt-0">
                Our business has been built on <br /> ensuring our proactive approach <br /> means that we get results in an <br /> EFFICIENT and expert manner.
            </p>
            <p className="font-brandon uppercase text-[13.4528px] text-[#262626] tracking-wider leading-relaxed">
                ARRAN ANDERSON, CO-FOUNDER
            </p>
        </div>

        <div className="relative w-full h-auto bg-[#EEEBE6] lg:p-10 sm:p-5">
            {/* Content wrapper with bottom padding */}
            <div className="w-full pb-8 relative z-10">
                <h2 className="lg:text-[41.472px] sm:text-[27.952px] font-minion">
                Do you have a <span className="italic">project</span>
                <br /> we can support with?
                </h2>
                <p className="font-brandon uppercase text-[#262626] tracking-wider leading-relaxed mt-5 mb-3">
                    <span className='text-[13.4528px] hidden lg:block'>Our service is rated 4.9 across over 50 google <br /> reviews.</span>
                    <span className='text-[14.8048px] lg:hidden block'>Our service is rated 4.9 across <br /> over 50 google reviews.</span>
                </p>
                <Link 
                    href={"/get-in-touch"}
                    className="lg:w-48 sm:w-full lg:h-10 sm:h-14 border-[1.5px] border-[#C9E265] flex items-center justify-center uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#C9E265] hover:text-white"
                >
                    get in touch
                </Link>
            </div>

            {/* Small screens → background image */}
            <div
                className="absolute inset-0 bg-no-repeat bg-right-bottom bg-contain lg:hidden"
                style={{ backgroundImage: "url('/&-sign.webp')" }}
            ></div>

            {/* Large screens → positioned image */}
            <div className="hidden lg:block absolute bottom-4 right-4">
                <Image
                src="/&-sign.webp"
                alt="& sign"
                width={275}
                height={275}
                className="object-contain"
                priority
                />
            </div>
        </div>

        <div>
            <FAQ/>
        </div>

    </div>
  );
};

export default Rep;
