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

  // const handlePredict = async () => {
  //   if (!selectedImage) return;
  //   setLoading(true);

  //   try {
  //     const formData = new FormData();
  //     formData.append("file", selectedImage);

  //     const res = await fetch(`${import.meta.env.VITE_API_URL}/predict`, {
  //       method: "POST",
  //       headers: {
  //         "ngrok-skip-browser-warning": "true",
  //       },
  //       body: formData,
  //     });

  //     if (!res.ok) {
  //       setResult({
  //         label: "Error",
  //         confidence: 0,
  //         description: "There was a problem with your request.",
  //       });
  //       return;
  //     }

  //     const data = await res.json();
  //     setResult(data);
  //   } catch (err) {
  //     console.error("Prediction failed:", err);
  //     setResult({
  //       label: "Error",
  //       confidence: 0,
  //       description: "Failed to reach the server.",
  //     });
  //   }

  //   setLoading(false);
  // };

  const handlePredict = async () => {
    if (!selectedImage) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", selectedImage);

      // 🔥 Tambahkan log untuk melihat isi FormData
      console.log("=== FormData content ===");
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": ", pair[1]);
      }

      const res = await fetch(`${import.meta.env.VITE_API_URL}/predict`, {
        method: "POST",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
        body: formData,
      });

      if (!res.ok) {
        setResult({
          label: "Error",
          confidence: 0,
          description: "There was a problem with your request.",
        });
        return;
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Prediction failed:", err);
      setResult({
        label: "Error",
        confidence: 0,
        description: "Failed to reach the server.",
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
      {/* Background hijau muda → putih */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#cfeac7]
          to-white

          dark:bg-gradient-to-b
          dark:from-[#1a1f1a]
          dark:to-[#1c1c1c]
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
