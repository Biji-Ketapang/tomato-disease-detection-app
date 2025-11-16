import { useState } from "react";
import Intro from "@/components/predict/intro";
import Uploader from "@/components/predict/uploader";
import Result from "@/components/predict/result";

export default function Classification() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageSelected = (file) => {
    setSelectedImage(file);
    setPreviewURL(URL.createObjectURL(file));
    setResult(null);
  };

  const handlePredict = async () => {
    if (!selectedImage) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", selectedImage);

      // ---- CALL BACKEND API HERE ----
      // ganti URL di bawah sesuai endpoint server prediction kalian
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      // Expected response:
      // { label: "...", confidence: 0.92, description: "..." }

      setResult(data);
    } catch (err) {
      console.error("Prediction failed:", err);
      setResult({
        label: "Error",
        confidence: 0,
        description: "Failed to get prediction from server.",
      });
    }

    setLoading(false);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setPreviewURL(null);
    setResult(null);
  };

  return (
    <main className="relative overflow-x-hidden pb-20 min-h-screen">

      {/* Background full-page */}
      <div
        className="
          absolute inset-0
          bg-[url('/daun-tomat.png')]
          bg-cover
          bg-no-repeat
          bg-right
          opacity-65
          pointer-events-none
        "
      />

      {/* Overlay ringan seperti Hero */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-white/5
          via-white/5
          to-white/5
        "
      />

      {/* Content */}
      <div className="relative">
        <Intro />

        {!result ? (
          <Uploader
            onImageSelected={handleImageSelected}
            onPredict={handlePredict}
            loading={loading}
          />
        ) : (
          <Result result={result} image={previewURL} reset={handleReset} />
        )}
      </div>

    </main>
  );
}