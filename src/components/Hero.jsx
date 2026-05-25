import React from "react";
import doctor from "../assets/images/doctor.png";

const WA_URL = "https://wa.me/918956596585";

const trustPills = [
  "🌿 Shifa Qudrat Mein Hai",
  "🔒 Raazdari ke saath Mashwara",
  "🌱 Qudrati Jadi Booti Ilaj",
  "⭐ 10+ Saal ka Tajurba",
];

export default function Hero() {
  return (
    <section id="home" className="hero-bg">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left — Text */}

          <div className="fade-up">
            {/* Badge */}
            <span className="inline-block bg-emerald-700 bg-opacity-60 text-emerald-100 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Trusted Unani Healthcare Since 1999
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 font-serif">
              Natural Cure <br />
              <span className="text-yellow-400">Unani Clinic at Umarkhed</span>
            </h1>

            <p className="text-emerald-100 text-lg md:text-xl mb-5 leading-relaxed">
              Infertility, Banjhpan aur Khawateen ke Masail ka
              <br />
              <strong className="text-white">
                Qudrati aur Bharosemand Ilaj
              </strong>
            </p>

            {/* Urdu line */}
            <p className="urdu text-yellow-300 text-xl mb-6">
              آپ کی صحت ہماری ذمہ داری
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {trustPills.map((pill) => (
                <span
                  key={pill}
                  className="text-xs bg-white bg-opacity-10 text-emerald-100 border border-emerald-600 px-3 py-1 rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
              >
                📱 WhatsApp Consultation
              </a>
              <a
                href="tel:+918956596585"
                className="flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold px-6 py-3 rounded-full border border-white border-opacity-30 transition-colors"
              >
                📞 Book Appointment
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 mt-8 pt-6 border-t border-emerald-700">
              {[
                { num: "5000+", label: "Happy Patients" },
                { num: "10+", label: "Years Experience" },
                { num: "95%", label: "Satisfaction" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-yellow-400 font-serif">
                    {s.num}
                  </div>
                  <div className="text-xs text-emerald-300 mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right — Image */}
          <div className="fade-up flex justify-center px-4">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Glow Background */}
              <div className="absolute -inset-3 rounded-3xl bg-yellow-400/20 blur-xl" />

              {/* Main Image */}
              <img
                src={doctor}
                alt="Experienced Hakeem"
                className="
        relative
        z-10
        w-full
        h-auto
        rounded-2xl
        object-contain
        shadow-2xl
        border-2
        border-emerald-600
        bg-white
      "
                loading="lazy"
              />

              {/* Bottom Badge */}
              <div
                className="
        absolute
        -bottom-3
        left-2
        z-20
        rounded-xl
        bg-white
        px-3
        py-2
        shadow-lg
        sm:-bottom-4
        sm:-left-4
        sm:px-4
        sm:py-2.5
      "
              >
                <div className="font-serif text-base font-bold leading-tight text-emerald-800 sm:text-lg">
                  10+
                </div>
                <div className="text-[10px] text-gray-500 sm:text-xs">
                  Years of Trust
                </div>
              </div>

              {/* Top Badge */}
              <div
                className="
        absolute
        -top-3
        right-2
        z-20
        rounded-xl
        bg-yellow-400
        px-3
        py-2
        shadow-lg
        sm:-top-4
        sm:-right-4
      "
              >
                <div className="text-[10px] font-bold text-emerald-900 sm:text-xs">
                  🌿 100% Natural
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 60"
          className="w-full"
          style={{ display: "block", marginTop: "-1px" }}
        >
          <path
            fill="#fafaf7"
            d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z"
          />
        </svg>
      </div>
    </section>
  );
}
