import { Button } from "@/components/ui/button";

export default function Result({ result, image, reset }) {
  if (!result) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div
          className="
            border rounded-2xl p-8 shadow-sm 
            bg-white
          "
        >
          <h2 className="text-2xl font-medium text-center">
            Prediction Result
          </h2>

          {/* Image Preview */}
          {image && (
            <div className="flex justify-center mt-6">
              <img
                src={image}
                alt="Uploaded Leaf"
                className="max-h-64 rounded-xl shadow"
              />
            </div>
          )}

          {/* Result Content */}
          <div className="mt-8 space-y-4">
            <div className="text-center">
              <p className="text-lg font-medium">Disease:</p>
              <p className="text-xl font-semibold mt-1">{result.label}</p>
            </div>

            <div className="text-center">
              <p className="text-lg font-medium">Confidence:</p>
              <p className="text-xl mt-1">
                {(result.confidence * 100).toFixed(2)}%
              </p>
            </div>

            {result.description && (
              <p className="text-center text-gray-700 mt-6 text-pretty">
                {result.description}
              </p>
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Button size="lg" onClick={reset} className="px-6 text-base">
              Try Another Image
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
