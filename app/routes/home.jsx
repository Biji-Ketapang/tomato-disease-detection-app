import React from "react";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import ContentSection from "@/components/home/case-study";
import DevelopmentBusiness from "@/components/home/business";
import FAQs from "@/components/home/faqs";

export function meta() {
  return [
    { title: "Detomato" },
    {
      name: "description",
      content:
        "Aplikasi prediksi harga rumah berdasarkan lokasi, luas bangunan, dan faktor lainnya. Bantu Anda mengetahui estimasi nilai properti secara akurat. Cocok untuk pembeli, penjual, atau agen properti.",
    },
  ];
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <ContentSection />
      <DevelopmentBusiness />
      <FAQs />
    </main>
  );
}
