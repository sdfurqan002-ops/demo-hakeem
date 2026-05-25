import React from "react";

const WA_URL = "https://wa.me/918956596585";

export default function FloatWA() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noreferrer"
      className="float-wa w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center text-white text-2xl shadow-lg transition-colors"
      aria-label="WhatsApp Consultation"
    >
      📱
    </a>
  );
}
