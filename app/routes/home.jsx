import React from "react";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Features from "@/components/home/features";
import Team from "@/components/home/team";
import FAQs from "@/components/home/faqs";

export function meta() {
  return [
    { title: "Rego Omah" },
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
      <Features />
      <Team />
      <FAQs />
    </main>
  );
}
