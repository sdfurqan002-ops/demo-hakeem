import React from "react";

const points = [
  { icon: "🏅", title: "10+ Years Experience",     desc: "Decade of trusted Unani practice" },
  { icon: "😊", title: "5000+ Happy Patients",     desc: "Thousands of satisfied families" },
  { icon: "🌿", title: "Natural Herbal Treatment", desc: "Pure jadi booti, no chemicals" },
  { icon: "🔒", title: "Private Consultation",      desc: "Complete confidentiality guaranteed" },
  { icon: "📜", title: "Trusted Unani Methods",    desc: "Centuries-old proven remedies" },
  { icon: "📋", title: "Personalized Guidance",    desc: "Custom plan for every patient" },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-20 bg-emerald-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-yellow-400 bg-yellow-400 bg-opacity-10 px-3 py-1 rounded-full mb-3">
            Hamein Kyun Chunein
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-serif">
            Why Choose <span className="text-yellow-400">Natural Cure?</span>
          </h2>
          <p className="text-emerald-300 max-w-lg mx-auto text-sm">
            Hazaron patients ka bharosa — qudrati ilaj aur raazdari ki bunyaad par.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p) => (
            <div
              key={p.title}
              className="card-hover bg-white bg-opacity-5 border border-emerald-700 rounded-2xl p-6 hover:border-yellow-400 hover:bg-opacity-10 transition-colors"
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-bold text-white mb-1 font-serif">{p.title}</h3>
              <p className="text-emerald-300 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "5000+", label: "Happy Patients" },
            { num: "10+",   label: "Years Experience" },
            { num: "95%",   label: "Success Rate" },
            { num: "6+",    label: "Specializations" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-yellow-400 font-serif">{s.num}</div>
              <div className="text-emerald-400 text-xs mt-1 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
