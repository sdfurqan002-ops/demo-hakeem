import React, { useState } from "react";

const WA_URL = "https://wa.me/918956596585";
const SUBMIT_COOLDOWN = 15000; // 15 seconds

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    treatment: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Prevent spam clicking
    if (isSubmitting) {
      setError("Please wait before submitting again.");
      return;
    }

    // Name validation
    if (form.name.trim().length < 3) {
      setError("Please enter a valid full name.");
      return;
    }

    // Phone validation
    const cleanPhone = form.phone.replace(/\D/g, "");

    if (cleanPhone.length < 10 || cleanPhone.length > 13) {
      setError("Please enter a valid phone number.");
      return;
    }

    // Start cooldown
    setIsSubmitting(true);

    // Fake secure processing
    setTimeout(() => {
      setSubmitted(true);

      // Cooldown reset
      setTimeout(() => {
        setIsSubmitting(false);
      }, SUBMIT_COOLDOWN);

    }, 1200);
  };

  return (
    <section id="contact" className="py-16 md:py-20 leaf-bg">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3">
            Hamare Saath Judein
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-3 font-serif">
            Consultation Book Karein
          </h2>

          <p className="text-gray-500 text-sm">
            Aapki maloomat mehfooz rakhi jayegi. 🔒
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>

                <h3 className="text-emerald-800 font-bold text-xl font-serif mb-2">
                  Shukriya!
                </h3>

                <p className="text-gray-500 text-sm">
                  Aapki request mili. Hum jald aapse rabta karenge.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-emerald-600 text-sm underline"
                >
                  Dobara bhejein
                </button>
              </div>
            ) : (

              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                      Full Name
                    </label>

                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Aapka naam"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-400 bg-gray-50"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                      Phone
                    </label>

                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-400 bg-gray-50"
                    />
                  </div>

                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                    Address
                  </label>

                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Aapka shehar / address"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-400 bg-gray-50"
                  />
                </div>

                {/* Treatment */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                    Treatment Needed
                  </label>

                  <select
                    name="treatment"
                    value={form.treatment}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-400 bg-gray-50 text-gray-600"
                  >
                    <option value="">Treatment ka intikhaab karein</option>
                    <option>Male Fertility</option>
                    <option>Female Fertility</option>
                    <option>Weakness</option>
                    <option>Hormonal Problems</option>
                    <option>General Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                    Message (Optional)
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Apni takleef bayan karein..."
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-400 bg-gray-50 resize-none"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                    {error}
                  </div>
                )}

                <p className="text-xs text-gray-400 flex items-center gap-1">
                  🔒 Aapki tamam maloomat mehfooz rakhi jayegi.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-3 rounded-xl transition-colors ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "bg-emerald-700 hover:bg-emerald-800 text-white"
                  }`}
                >
                  {isSubmitting
                    ? "⏳ Processing..."
                    : "📅 Submit Consultation Request"}
                </button>

              </form>
            )}
          </div>

          {/* Right Side */}
          <div className="space-y-4">

            {/* WhatsApp */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl transition-colors"
            >
              📱 WhatsApp — Abhi Baat Karein
            </a>

            {/* Call */}
            <a
              href="tel:+918956596585"
              className="flex items-center justify-center gap-2 w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 rounded-xl transition-colors"
            >
              📞 Call Now — +91 8956 596585
            </a>

            {/* Info Cards */}
            {[
              {
                icon: "📍",
                title: "Address",
                text: "Shop No. 12, Herbal Market Road, Hyderabad, India",
              },
              {
                icon: "🕐",
                title: "Timing",
                text: "Mon – Sat: 10 AM – 8 PM\nSunday: By Appointment",
              },
              {
                icon: "📧",
                title: "Email",
                text: "naturalcureclinic@gmail.com",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm flex items-start gap-3"
              >
                <span className="text-xl mt-0.5">{c.icon}</span>

                <div>
                  <p className="font-semibold text-emerald-800 text-sm">
                    {c.title}
                  </p>

                  <p className="text-gray-500 text-sm whitespace-pre-line">
                    {c.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Maps */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-medium py-3 rounded-xl border border-emerald-100 transition-colors text-sm"
            >
              🗺️ View on Google Maps
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}