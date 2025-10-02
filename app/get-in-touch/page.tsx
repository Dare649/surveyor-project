"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

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
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch("https://api.first.org/data/v1/countries");
        const json = await res.json();

        const countriesArray = Object.entries(json.data).map(([code, info], idx) => {
          const countryInfo = info as {
            country: string;
            region: string;
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

  const validateForm = (form: HTMLFormElement) => {
    const newErrors: Record<string, string> = {};
    const requiredFields = [
      "country",
      "address1",
      "city",
      "postcode",
      "firstName",
      "lastName",
      "email",
      "phone",
      "enquiryType",
      "serviceRequired",
      "referralSource",
      "message",
    ];

    requiredFields.forEach((field) => {
      const value = (form[field as keyof typeof form] as HTMLInputElement | undefined)?.value?.trim();
      if (!value) {
        newErrors[field] = "This field is required";
      }
    });

    const emailValue = form.email?.value?.trim();
    if (emailValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      newErrors.email = "Enter a valid email";
    }

    const phoneValue = form.phone?.value?.trim();
    if (phoneValue && phoneValue.length < 7) {
      newErrors.phone = "Enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!validateForm(formRef.current)) {
      setStatus("❌ Please fix the errors before submitting.");
      return;
    }

    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );

      setStatus("✅ Message sent successfully!");
      formRef.current.reset();
      setErrors({});
    } catch (err) {
      console.error("Email failed", err);
      setStatus("❌ Failed to send. Try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full">
      {/* Top image + overlay + text (unchanged) */}
      <div className="relative w-full h-[80vh]">
        <Image src="/header-img.webp" alt="Project & Co Left" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-10 left-0 w-full text-center px-4">
          <h2 className="text-white font-minion lg:text-[41.472px] sm:text-[27.952px] capitalize">
            Our team are ready to assist you
          </h2>
        </div>
      </div>

      <div className="w-full bg-[#262626] ">
        {/* Title with lines */}
        <div className="w-full flex items-center pt-10 pb-5">
          <div className="w-[15%]">
            <hr className="border-t-[1.5px] border-white" />
          </div>
          <h2 className="px-4 lg:text-[35.2px] sm:text-[21.8px] font-minion text-white text-center whitespace-nowrap">
            Get in touch <span className="italic">with us</span>
          </h2>
          <div className="flex-grow">
            <hr className="border-t-[1.5px] border-white" />
          </div>
        </div>

        <div className="w-full flex lg:items-stretch lg:flex-row sm:flex-col gap-5 lg:p-10 sm:p-3">
          {/* ---------- LEFT FORM WITH VALIDATION ---------- */}
          <form ref={formRef} onSubmit={sendEmail} className="lg:w-[60%] sm:w-full text-white">
            {/* COUNTRY */}
            <h2 className="font-brandon text-[13.0624px] uppercase">address</h2>
            <div className="my-5">
              <div className="w-full mt-3">
                <h2 className="font-brandon text-[11.5936px] uppercase mb-2">country</h2>
                <select name="country" className="w-full h-12 bg-white text-[#262626] outline-none">
                  <option value="">Select a country</option>
                  {countries.map((c) => (
                    <option key={c.iso2 || c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
                {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
              </div>

              {/* Address fields */}
              {[
                { name: "address1", label: "address line 1" },
                { name: "address2", label: "address line 2", optional: true },
                { name: "city", label: "city/town" },
                { name: "postcode", label: "post code" },
              ].map((field) => (
                <div key={field.name} className="w-full my-3">
                  <h2 className="font-brandon text-[11.5936px] uppercase mb-2">{field.label}</h2>
                  <input
                    name={field.name}
                    type="text"
                    className="w-full h-12 bg-white text-[#262626] outline-none"
                  />
                  {errors[field.name] && <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>}
                </div>
              ))}
            </div>

            {/* NAME */}
            <h2 className="font-brandon text-[13.0624px] uppercase">name</h2>
            <div className="flex lg:flex-row sm:flex-col gap-5">
              {[
                { name: "firstName", label: "first name" },
                { name: "lastName", label: "last name" },
              ].map((field) => (
                <div key={field.name} className="w-full my-3">
                  <h2 className="font-brandon text-[11.5936px] uppercase mb-2">{field.label}</h2>
                  <input
                    name={field.name}
                    type="text"
                    className="w-full h-12 bg-white text-[#262626] outline-none"
                  />
                  {errors[field.name] && <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>}
                </div>
              ))}
            </div>

            {/* Email + Phone */}
            {[
              { name: "email", label: "email", type: "email" },
              { name: "phone", label: "phone number", type: "tel" },
            ].map((field) => (
              <div key={field.name} className="w-full my-3">
                <h2 className="font-brandon text-[11.5936px] uppercase mb-2">{field.label}</h2>
                <input
                  name={field.name}
                  type={field.type}
                  className="w-full h-12 bg-white text-[#262626] outline-none"
                />
                {errors[field.name] && <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>}
              </div>
            ))}

            {/* Dropdowns */}
            {[
              { name: "enquiryType", label: "is the enquiry regarding a new instruction or an exsiting one?", options: ["new", "existing"] },
              {
                name: "serviceRequired",
                label: "which services is required?",
                options: ["Building Surveys", "Defects Analysis", "Design & Project Management", "Dilapidations", "Party Wall", "Refurbishment", "Compliance", "Insurance"],
              },
              {
                name: "referralSource",
                label: "how did you know about project & co?",
                options: ["referral", "linkedin", "instagram", "google ads"],
              },
            ].map((field) => (
              <div key={field.name} className="w-full my-3">
                <h2 className="font-brandon text-[11.5936px] uppercase mb-2">{field.label}</h2>
                <select name={field.name} className="w-full h-12 bg-white text-[#262626] outline-none uppercase">
                  <option value="">select an option</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors[field.name] && <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>}
              </div>
            ))}

            {/* Message */}
            <div className="w-full my-3">
              <h2 className="font-brandon text-[11.5936px] uppercase mb-2">message</h2>
              <textarea name="message" rows={5} className="w-full bg-white text-[#262626] outline-none"></textarea>
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                disabled={isSending}
                className="hidden lg:flex w-40 h-14 border-[1.5px] hover:border-white uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-white bg-white text-[#262626] justify-center items-center"
              >
                {isSending ? "Sending..." : "send"}
              </button>
            </div>

            {status && <p className="mt-3 text-sm">{status}</p>}
          </form>

          {/* ---------- RIGHT SIDE (unchanged) ---------- */}
          <div className="lg:w-[40%] sm:w-full lg:px-5 sm:px-3 text-white font-brandon">
            <div className="w-full my-5">
              <h2 className="uppercase mb-2 mt-8 font-bold text-[13.0624px]">office:</h2>
              <h2 className="text-[11.5936px] uppercase my-4">manchester street, england</h2>
            </div>
            <div className="w-full my-5">
              <h2 className="uppercase mb-2 mt-8 font-bold text-[13.0624px]">hours:</h2>
              <h2 className="text-[11.5936px] uppercase my-4">monday-friday,9am-6pm </h2>
            </div>
            <div className="w-full my-5">
              <h2 className="uppercase mb-2 mt-8 font-bold text-[13.0624px]">reach out:</h2>
              <h2 className="text-[11.5936px] uppercase my-4">valuation - 090068493 </h2>
              <h2 className="text-[11.5936px] uppercase my-4">building surveying - 090068493 </h2>
              <h2 className="text-[11.5936px] uppercase my-4 underline">email@gmail.com</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
