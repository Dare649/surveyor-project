import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/2348012345678" // 👉 Replace with your WhatsApp number (no + or spaces)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 z-50 animate-bounce"
    >
      <span className="px-4 py-2 text-gray-800 text-sm font-medium">
        Need Help? <span className="font-semibold">Chat with us</span>
      </span>
      <div className="bg-[#25D366] p-3 flex items-center justify-center">
        <FaWhatsapp className="text-white text-2xl" />
      </div>
    </a>
  )
}

export default WhatsApp