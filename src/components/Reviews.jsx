import React from "react";

const reviews = [
  {
    name: "Arshad Farooqi",
    location: "Hyderabad",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Allah ka shukar hai bohot faida hua. 3 saal baad hamare ghar mein khushiyan aayi. Hakeem sahab ka bohot bohot shukriya.",
    stars: 5,
  },
  {
    name: "Sana Begum",
    location: "Lucknow",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Mashwara aur ilaj bohot accha tha. Unani dawa ne kuch hi hafton mein farq dikhaya. Bilkul safe aur natural treatment.",
    stars: 5,
  },
  {
    name: "Zahid Ansari",
    location: "Mumbai",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    text: "Natural treatment se confidence wapas aaya. Hakeem sahab ki guidance se ab zindagi mein sukoon hai. Highly recommended!",
    stars: 5,
  },
  {
    name: "Fatima Iqbal",
    location: "Pune",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Raazdari aur achhe rawaiye ne dil jeet liya. Hormonal masail ka treatment bilkul effective raha. Staff bhi bohot helpful.",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3">
            Patient Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-3 font-serif">
            Hamare Patients Kehte Hain
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Unke alfaz, humari sabse badi kamyabi hain.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="card-hover bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                "{r.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-emerald-100"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-emerald-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">📍 {r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
