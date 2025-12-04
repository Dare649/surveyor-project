"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import ImageSlider from "../../components/img-slider/page";
import ImageHero from "@/components/image-hero/page";

/* -------------------- SURVEY OPTIONS -------------------- */
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
  const formRef = useRef<HTMLFormElement | null>(null);

  /* -------------------- STATE -------------------- */
  const [selectedLevel, setSelectedLevel] = useState(levelOptions[0]);
  const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]);

  const [postcode, setPostcode] = useState("");
  const [addresses, setAddresses] = useState<any[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});

  /* -------------------- FORM VALIDATION -------------------- */
  const validateForm = (form: HTMLFormElement) => {
    const newErrors: Record<string, string> = {};
    const requiredFields = ["firstName", "lastName", "email", "phone"];

    requiredFields.forEach((name) => {
      if (!form[name]?.value?.trim()) {
        newErrors[name] = "This field is required";
      }
    });

    const emailValue = form.email?.value?.trim();
    if (emailValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* -------------------- GETADDRESS.IO POSTCODE LOOKUP -------------------- */
  const lookupPostcode = async () => {
    if (!postcode) {
      setLookupError("Enter a postcode");
      return;
    }

    setLookupLoading(true);
    setLookupError("");
    setAddresses([]);
    setSelectedAddress(null);

    try {
      const res = await fetch(
        `https://api.getaddress.io/find/${encodeURIComponent(postcode)}?api-key=${process.env.NEXT_PUBLIC_GETADDRESS_IO_API_KEY}`
      );
      const data = await res.json();

      if (!data || !data.addresses || data.addresses.length === 0) {
        setLookupError("No addresses found for this postcode");
        return;
      }

      // data.addresses is an array of strings like "Flat 1, 10 Downing Street, London, SW1A 2AA"
      const parsedAddresses = data.addresses.map((addr: string) => {
        const parts = addr.split(",").map(p => p.trim());
        return {
          flat: parts.length > 0 ? parts[0] : "",
          building_number: parts.length > 1 ? parts[1] : "",
          street: parts.length > 2 ? parts[2] : "",
          town: parts.length > 3 ? parts[3] : "",
          postcode: postcode.toUpperCase(),
          formatted_address: addr,
        };
      });

      setAddresses(parsedAddresses);
    } catch (err) {
      console.error(err);
      setLookupError("Something went wrong");
    } finally {
      setLookupLoading(false);
    }
  };

  /* -------------------- SEND EMAIL -------------------- */
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!validateForm(formRef.current)) {
      setStatus("❌ Fix the errors before submitting.");
      return;
    }

    if (!selectedAddress) {
      setStatus("❌ Please select an address from the list.");
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
      setPostcode("");
      setAddresses([]);
      setSelectedAddress(null);
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  /* -------------------- IMAGES -------------------- */
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
      <ImageHero />

      <div className="lg:my-20 sm:my-10">
        <div className="relative w-full flex-col px-6 gap-y-20">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold font-minion mb-6 text-black">
                RICS HomeBuyers Survey
              </h1>
              <p className="font-brandon tracking-wider text-lg text-[#777]">
                You should choose a RICS HomeBuyers Report if you need more information when buying a conventional house, flat or bungalow.
              </p>
              <br />
              <p className="font-brandon tracking-wider text-lg text-[#777]">
                An <strong>RICS</strong> HomeBuyers Report provides a more detailed assessment.
              </p>
            </div>
            <div className="flex justify-start my-20">
              <Link href="/get-in-touch" className="hidden lg:flex w-40 h-14 border bg-[#C9E256] text-white hover:bg-transparent hover:text-[#C9E256] justify-center items-center">
                Get in touch
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <form ref={formRef} onSubmit={sendEmail} className="w-full">

              {/* SERVICE LEVEL */}
              <div className="mb-4">
                <label className="font-brandon uppercase text-sm">Choose a service</label>
                <select
                  name="surveyLevel"
                  value={selectedLevel.label}
                  onChange={(e) => setSelectedLevel(levelOptions.find(o => o.label === e.target.value)!)}
                  className="w-full p-3 bg-white border"
                >
                  {levelOptions.map(opt => <option key={opt.label} value={opt.label}>{opt.label}</option>)}
                </select>
              </div>

              {/* PRICE RANGE */}
              <div className="mb-4">
                <label className="font-brandon uppercase text-sm">Purchase price</label>
                <select
                  name="purchasePrice"
                  value={selectedPrice.label}
                  onChange={(e) => setSelectedPrice(priceOptions.find(o => o.label === e.target.value)!)}
                  className="w-full p-3 bg-white border"
                >
                  {priceOptions.map(opt => <option key={opt.label} value={opt.label}>{opt.label}</option>)}
                </select>
              </div>

              <input type="hidden" name="calculatedPrice" value={`£${selectedPrice.price}.00`} />

              <p className="text-3xl font-semibold text-[#C9E256] mb-8">
                £{selectedPrice.price}.00 inc VAT.
              </p>

              {/* ------------------------ CURRENT ADDRESS ------------------------ */}
              <h2 className="font-brandon text-sm uppercase mt-8 mb-3 text-black">
                Current Address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="uppercase text-[11px]">Address</label>
                  <input type="text" name="currentAddress" className="w-full p-3 border bg-white" />
                </div>
                <div>
                  <label className="uppercase text-[11px]">Town</label>
                  <input type="text" name="currentTown" className="w-full p-3 border bg-white" />
                </div>
                <div>
                  <label className="uppercase text-[11px]">County</label>
                  <input type="text" name="currentCounty" className="w-full p-3 border bg-white" />
                </div>
                <div>
                  <label className="uppercase text-[11px]">Post Code</label>
                  <input type="text" name="currentPostcode" className="w-full p-3 border bg-white" />
                </div>
              </div>

              {/* ------------------------ PROPERTY ADDRESS ------------------------ */}
              <h2 className="font-brandon text-sm uppercase mt-10 mb-3 text-black">
                Property Address (the one being surveyed)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="uppercase text-[11px]">Address</label>
                  <input type="text" name="propertyAddress" className="w-full p-3 border bg-white" />
                </div>
                <div>
                  <label className="uppercase text-[11px]">Town</label>
                  <input type="text" name="propertyTown" className="w-full p-3 border bg-white" />
                </div>
                <div>
                  <label className="uppercase text-[11px]">County</label>
                  <input type="text" name="propertyCounty" className="w-full p-3 border bg-white" />
                </div>
                <div>
                  <label className="uppercase text-[11px]">Post Code</label>
                  <input type="text" name="propertyPostcode" className="w-full p-3 border bg-white" />
                </div>
              </div>

              {/* ------------------------ POSTCODE LOOKUP (ALREADY IN YOUR CODE) ------------------------ */}
              {/* KEEP your existing postcode lookup section here */}

              {/* ------------------------ PERSONAL DETAILS ------------------------ */}
              <h2 className="font-brandon text-sm uppercase mt-10 mb-3 text-black">
                Your Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "firstName", label: "First Name" },
                  { name: "lastName", label: "Last Name" },
                  { name: "email", label: "Email Address" },
                  { name: "phone", label: "Mobile Number" },
                ].map(field => (
                  <div key={field.name}>
                    <h2 className="font-brandon text-[11px] uppercase mb-2">{field.label}</h2>
                    <input type="text" name={field.name} className="w-full p-3 bg-white border" />
                    {errors[field.name] && <p className="text-red-500 text-xs">{errors[field.name]}</p>}
                  </div>
                ))}
              </div>

              {/* ------------------------ ACCESS DETAILS ------------------------ */}
              <h2 className="font-brandon text-sm uppercase mt-10 mb-3 text-black">
                How can we access the property?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="uppercase text-[11px]">Contact Name *</label>
                  <input type="text" name="accessContactName" className="w-full p-3 border bg-white" />
                </div>
                <div>
                  <label className="uppercase text-[11px]">Contact Telephone Number *</label>
                  <input type="text" name="accessContactTelephone" className="w-full p-3 border bg-white" />
                </div>
              </div>

              <div className="mt-4">
                <label className="uppercase text-[11px]">Agreed Purchase Price</label>
                <input type="text" name="agreedPurchasePrice" className="w-full p-3 border bg-white" />
              </div>

              {/* OPTIONAL MESSAGE */}
              <div className="mt-6">
                <label className="uppercase text-[11px]">Message (optional)</label>
                <textarea name="message" rows={4} className="w-full p-3 border bg-white" />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full mt-8 h-14 border bg-[#C9E256] text-white hover:bg-transparent hover:text-[#C9E256] uppercase"
              >
                {isSending ? "Sending..." : `Lock quote at £${selectedPrice.price}.00 and email me`}
              </button>

              {status && <p className="mt-3 text-sm">{status}</p>}
            </form>

          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="mt-10">
        <h2 className="lg:text-[27px] text-center font-minion text-[#262626] italic">Gallery</h2>
        <ImageSlider images={images} />
      </div>
    </div>
  );
}
