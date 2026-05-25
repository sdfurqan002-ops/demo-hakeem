# 🌿 Natural Cure Unani Clinic

A clean, lightweight React + Tailwind CSS SPA website for Natural Cure Unani Clinic.

## 🚀 Quick Start

### Install dependencies
```bash
npm install
```

### Add Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Run locally
```bash
npm start
```

### Build for production
```bash
npm run build
```

---

## ☁️ Deploy on Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Create React App — click **Deploy**
5. Done! Your site is live 🎉

---

## 📁 Project Structure

```
src/
├── App.js                  ← Main app
├── index.js                ← Entry point
├── index.css               ← Global styles + Tailwind
└── components/
    ├── Navbar.jsx           ← Sticky navbar + mobile menu
    ├── Hero.jsx             ← Hero section
    ├── Treatments.jsx       ← Treatment cards
    ├── About.jsx            ← About section
    ├── WhyUs.jsx            ← Why choose us
    ├── Reviews.jsx          ← Patient reviews
    ├── Contact.jsx          ← Contact form
    ├── Footer.jsx           ← Footer
    └── FloatWA.jsx          ← Floating WhatsApp button
```

---

## ✏️ Easy Edits

- **Phone / WhatsApp**: Search `918956596585` — replace with real number
- **Address**: Find in `Contact.jsx` and `Footer.jsx`
- **Images**: Replace Unsplash URLs in `Hero.jsx` and `About.jsx`
- **Reviews**: Edit `reviews` array in `Reviews.jsx`
- **Services**: Edit `treatments` array in `Treatments.jsx`
- **Colors**: All green/gold theme via Tailwind `emerald-*` and `yellow-*` classes

---

## 📦 Dependencies (Minimal)

- `react` + `react-dom` — UI framework
- `react-scripts` — Build tooling (CRA)
- `tailwindcss` — Utility CSS (dev)

No Framer Motion. No heavy libraries. Fast + simple.
