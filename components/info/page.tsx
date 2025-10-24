import React from "react";

interface InfoSectionProps {
  title: string;
  paragraphs?: string[];
  image?: string;
  reverse?: boolean; // if true, image goes on the left
  imageHeight?: string; // allows optional custom height (e.g. "400px" or "500px")
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  paragraphs = [],
  image,
  reverse = false,
  imageHeight = "450px", // default consistent height
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-6 md:px-20 py-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 text-[#777777]">
        <h2 className="text-4xl md:text-5xl font-semibold capitalize font-minion text-[#C9E256]">
          {title}
        </h2>
        <div className="space-y-4 font-brandon tracking-wider text-lg leading-relaxed">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div
        className="md:w-1/2 overflow-hidden shadow-md rounded-2xl flex items-center justify-center"
        style={{ height: imageHeight }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default InfoSection;
