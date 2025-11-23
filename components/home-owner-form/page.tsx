"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import ImageSlider from "../img-slider/page";

const levelOptions = [
  { label: "level 2 HomeBuyer Report" },
  { label: "level 3 HomeBuyer Report" },
  { label: "Help To Buy/Shared Ownership Valuation" },
];

const priceOptions = [
  { label: "£100,001 – £200,000", price: 349 },
  { label: "£200,001 – £300,000", price: 399 },
  { label: "£300,001 – £400,000", price: 449 },
];

export default function HomeBuyerSurvey() {
  const [selectedLevel, setSelectedLevel] = useState(levelOptions[0]);
  const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formRef = useRef<HTMLFormElement | null>(null);

  const validateForm = (form: HTMLFormElement) => {
    const newErrors: Record<string, string> = {};
    const required = ["firstName", "lastName", "email", "phone"];

    required.forEach((f) => {
      const value = form[f as keyof typeof form]?.value?.trim();
      if (!value) newErrors[f] = "This field is required";
    });

    const emailValue = form.email?.value?.trim();
    if (emailValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      newErrors.email = "Enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!validateForm(formRef.current)) {
      setStatus("❌ Fix the errors before submitting.");
      return;
    }

    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
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

  const images = [
    "/Defect.jpg",
    "/Part-wall.jpg",
    "/Dilapidation.jpg",
    "/Expert.jpg",
    "/Project-Management.jpg",
    "/Refurbishment.jpg",
  ];

  return (
    <div className="w-full">
      <div className="lg:my-20 sm:my-10 lg:mx-50">
        <div className="relative w-full lg:flex items-stretch justify-between px-6 gap-x-20">

          {/* ---------- LEFT CONTENT ---------- */}
          <div className="lg:w-1/2 flex flex-col justify-between flex-1 min-h-full">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold capitalize font-minion text-black mb-6">
                RICS HomeBuyers Survey
              </h1>

              <p className="space-y-4 font-brandon tracking-wider text-lg leading-relaxed text-[#777777]">
                You should choose a RICS HomeBuyers Report if you need more information when
                buying a conventional house, flat or bungalow.
              </p>

              <br /><br />

              <p className="space-y-4 font-brandon tracking-wider text-lg leading-relaxed text-[#777777]">
                An <strong>RICS</strong> HomeBuyers Report provides a more detailed assessment
                of the property's condition.
              </p>
            </div>

            <div className="flex justify-start">
              <Link
                href={"/get-in-touch"}
                className="hidden lg:flex w-40 h-14 border-[1.5px] hover:border-[#C9E256] uppercase text-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-[#C9E256] bg-[#C9E256] text-white justify-center items-center"
              >
                get in touch
              </Link>
            </div>
          </div>

          {/* ---------- RIGHT FORM ---------- */}
          <div className="lg:w-1/2 flex flex-col justify-between flex-1 min-h-full mt-10 lg:mt-0">

            <form ref={formRef} onSubmit={sendEmail} className="w-full">

              {/* Level */}
              <div className="mb-4">
                <label className="font-brandon uppercase text-sm">Choose one of our HomeBuyer Services</label>

                <select
                  name="surveyLevel"
                  value={selectedLevel.label}
                  onChange={(e) => {
                    const found = levelOptions.find((opt) => opt.label === e.target.value);
                    if (found) setSelectedLevel(found);
                  }}
                  className="w-full p-3 bg-white border border-[#e6e6e6]"
                >
                  {levelOptions.map((option) => (
                    <option key={option.label} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div className="mb-4">
                <label className="font-brandon uppercase text-sm">Choose your purchase price</label>

                <select
                  name="purchasePrice"
                  value={selectedPrice.label}
                  onChange={(e) => {
                    const found = priceOptions.find((opt) => opt.label === e.target.value);
                    if (found) setSelectedPrice(found);
                  }}
                  className="w-full p-3 bg-white border border-[#e6e6e6]"
                >
                  {priceOptions.map((option) => (
                    <option key={option.label} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hidden price value for EmailJS */}
              <input type="hidden" name="calculatedPrice" value={`£${selectedPrice.price}.00`} />

              <p className="text-3xl font-semibold text-[#C9E256] mb-8">
                £{selectedPrice.price}.00 inc VAT.
              </p>

              {/* INPUT FIELDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {[
                  { name: "firstName", label: "First Name" },
                  { name: "lastName", label: "Last Name" },
                  { name: "email", label: "Email Address" },
                  { name: "phone", label: "Mobile Number" },
                ].map((field) => (
                  <div key={field.name} className="w-full my-3">
                    <h2 className="font-brandon text-[11px] uppercase mb-2">{field.label}</h2>

                    <input
                      type="text"
                      name={field.name}
                      className="w-full p-3 bg-white border border-[#e6e6e6]"
                    />

                    {errors[field.name] && (
                      <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
                    )}
                  </div>
                ))}

                {/* Message */}
                <div className="md:col-span-2">
                  <h2 className="font-brandon text-[11px] uppercase mb-2">Message (optional)</h2>

                  <textarea
                    name="message"
                    rows={4}
                    className="w-full p-3 bg-white border border-[#e6e6e6]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full mt-8 h-14 border-[1.5px] hover:border-[#C9E256] uppercase text-sm transition-colors duration-300 hover:bg-transparent hover:text-[#C9E256] bg-[#C9E256] text-white flex justify-center items-center"
              >
                {isSending ? "Sending..." : `Lock quote at £${selectedPrice.price}.00 and email me`}
              </button>

              {status && <p className="mt-3 text-sm">{status}</p>}
            </form>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-10">
        <h2 className="lg:text-[27px] text-center sm:text-[21px] font-minion text-[#262626] italic">
          Gallery
        </h2>
        <ImageSlider images={images} />
      </div>
    </div>
  );
}
