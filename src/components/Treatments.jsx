import React from "react";

const treatments = [
  {
    icon: "🧬",
    title: "Male Fertility Care",
    desc: "Mardana quwwat-e-tawleed ke masail ka mujarrab Unani ilaj. Sperm health ke liye qudrati nuskhe.",
    tag: "Mujarrab Ilaj",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: "🌸",
    title: "Female Fertility Care",
    desc: "Khawateen ke hamal, PCOS aur hormonal masail ka safe aur natural Unani treatment.",
    tag: "Qudrati Nuskhe",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    icon: "🦴",
    title: "Body Pain Relief",
    desc: "Jodon ka dard, kamar dard aur jism ki takleefon ka herbal Unani ilaj — bina side effects.",
    tag: "Mujarrab Ilaj",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: "⚖️",
    title: "Hormonal Weakness",
    desc: "Hormonal imbalance ka qudrati ilaj — mard o khawateen dono ke liye personalized guidance.",
    tag: "Bharosemand Mashwara",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: "💪",
    title: "General Weakness",
    desc: "Thakaan, kamzori aur energy ki kami ka effective Unani treatment. Tawanai ki wapsi.",
    tag: "Qudrati Nuskhe",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    icon: "🌱",
    title: "Digestive Problems",
    desc: "Pet ke masail, acidity, qabz aur hazm ki kharabi ka safe aur natural herbal ilaj.",
    tag: "Mujarrab Ilaj",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3">
            Hamare Specializations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-3 font-serif">
            Qudrati Ilaj ke Masail
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Har masle ka mujarrab aur bharosemand Unani ilaj — bilkul qudrati tareeqe se,
            puri raazdari ke saath.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <div
              key={t.title}
              className="card-hover bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-emerald-200"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-2xl mb-4">
                {t.icon}
              </div>
              <h3 className="font-bold text-emerald-900 text-lg mb-2 font-serif">{t.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{t.desc}</p>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${t.tagColor}`}>
                {t.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            📅 Consultation Book Karein
          </a>
        </div>
      </div>
    </section>
  );
}
