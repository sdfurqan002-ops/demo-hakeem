import React from "react";

const WA_URL = "https://wa.me/918956596585";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <div>
                <p className="font-bold text-lg font-serif text-white">Natural Cure Unani Clinic</p>
                <p className="text-emerald-400 text-xs">Qudrati Ilaj • Bharosemand Mashwara</p>
              </div>
            </div>
            <p className="text-emerald-300 text-sm leading-relaxed mb-4 max-w-xs">
              10+ saal se qudrati Unani ilaj ke zariye hazaron logon ki sehat behtar bana rahe hain.
            </p>
            <div className="flex gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                📱 WhatsApp
              </a>
              <a
                href="tel:+918956596585"
                className="flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold text-white text-sm uppercase tracking-widest mb-4">Quick Links</p>
            <ul className="space-y-2">
              {[
                ["Home", "#home"],
                ["Treatments", "#treatments"],
                ["About", "#about"],
                ["Reviews", "#reviews"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-emerald-400 hover:text-yellow-400 text-sm transition-colors"
                  >
                    → {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic info */}
          <div>
            <p className="font-semibold text-white text-sm uppercase tracking-widest mb-4">Clinic Info</p>
            <div className="space-y-3 text-sm text-emerald-400">
              <p>📍 Shop No. 12, Herbal Market Rd, Hyderabad</p>
              <p>📞 +91 8956 596585</p>
              <p>📧 naturalcureclinic@gmail.com</p>
              <div className="bg-emerald-900 rounded-lg p-3 mt-2">
                <p className="text-emerald-300 font-medium text-xs uppercase tracking-wide mb-1">Timings</p>
                <p>Mon – Sat: 10 AM – 8 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-emerald-900">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-emerald-500 text-xs text-center sm:text-left">
            © {year} Natural Cure Unani Clinic — Qudrati Shifa ka Bharosemand Markaz
          </p>
          <p className="text-emerald-600 text-xs">
            🔒 Patient Privacy Guaranteed
          </p>
        </div>
      </div>
    </footer>
  );
}
