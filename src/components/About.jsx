import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 leaf-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-emerald-100 rounded-3xl transform rotate-2 scale-95" />
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80"
              alt="Unani Herbal Treatment"
              className="relative rounded-2xl w-full max-w-md object-cover shadow-lg"
              style={{ aspectRatio: "4/3", objectFit: "cover" }}
              loading="lazy"
            />
            {/* Floating card */}
            <div className="absolute -bottom-5 -right-3 bg-white rounded-xl shadow-md px-4 py-3 border-l-4 border-emerald-500">
              <p className="text-emerald-800 font-bold text-sm">🌿 100% Herbal</p>
              <p className="text-gray-400 text-xs">No Harmful Chemicals</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-4">
              Hamare Baare Mein
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4 font-serif leading-tight">
              Qudrati Shifa Ka<br />
              <span className="gradient-text">Bharosemand Markaz</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Natural Cure Unani Clinic ek bharosemand markaz hai jahan qudrati jadi booti
              ilaaj aur Unani tareeqon se sehat behtar banayi jati hai. Hamara Hakeem-e-Azam
              10+ saal se hazaron patients ki zindagian behtar bana raha hai.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              Hum har patient ki zaroorat ko samajh kar personalized treatment plan tayyar
              karte hain — bilkul qudrati tareeqe se, kisi bhi harmful chemical ke bina.
            </p>

            {/* Urdu quote */}
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl px-4 py-3 mb-6">
              <p className="urdu text-emerald-800 text-lg">
                ہمارا مقصد بہتر صحت اور پُر سکون زندگی ہے۔
              </p>
              <p className="text-emerald-600 text-sm mt-1">
                "Humara Maqsad Behtar Sehat aur Pur-Sukoon Zindagi hai."
              </p>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-2 gap-3">
              {[
                "✅ 10+ Years Experience",
                "✅ 5000+ Happy Patients",
                "✅ 100% Natural Herbs",
                "✅ Private Consultation",
              ].map((point) => (
                <div key={point} className="text-sm text-gray-600 font-medium">
                  {point}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
