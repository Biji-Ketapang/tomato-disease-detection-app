import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Uploader({ onImageSelected, onPredict, loading }) {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    onImageSelected(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    onImageSelected(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 pt-6">
      <div className="mx-auto max-w-xl px-6">
        {/* Upload Area */}
        <div
          onClick={() => fileInputRef.current.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="
            border-2 border-dashed border-gray-300 
            rounded-2xl p-10 text-center cursor-pointer
            hover:border-gray-400 transition
          "
        >
          <p className="text-lg font-medium">Upload or Drag & Drop Image</p>
          <p className="text-lg mt-2">
            Supported: JPG, PNG (Clear leaf photo recommended)
          </p>

          {/* Preview */}
          {preview && (
            <div className="mt-6">
              <img
                src={preview}
                alt="Preview"
                className="w-full rounded-xl shadow-md"
              />
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Predict Button */}
        <div className="flex justify-center mt-10">
          <Button
            size="lg"
            className="px-6 text-base"
            onClick={onPredict}
            disabled={loading || !preview}
          >
            {loading ? "Analyzing..." : "Predict"}
          </Button>
        </div>
      </div>
    </section>
  );
}
