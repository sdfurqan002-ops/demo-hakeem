import React from "react";
import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import Treatments from "./components/Treatments";
import About      from "./components/About";
import WhyUs      from "./components/WhyUs";
import Reviews    from "./components/Reviews";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import FloatWA    from "./components/FloatWA";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Treatments />
        <About />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatWA />
    </>
  );
}
