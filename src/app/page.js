"use client";

import CardSection from "./components/cardSection/CardSection";
import FooterSection from "./components/footerSection/FooterSection";
import HeroSection from "./components/heroSection/HeroSection";
import Premium from "./components/premium/Premium";
import Testimonial from "./components/testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CardSection />
      <Premium />
      <Testimonial />
      <FooterSection />
    </div>
  );
}
