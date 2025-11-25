export default function ContentSection() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Deep learning applied to real-world tomato leaf disease detection.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Left image */}
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-gradient-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              {/* Dark */}
              <img
                src="data/daun-tomat.jpg"
                className="hidden rounded-[15px] dark:block"
                alt="Detection model illustration dark"
                width={1207}
                height={929}
              />

              {/* Light */}
              <img
                src="data/daun-tomat.jpg"
                className="rounded-[15px] shadow dark:hidden"
                alt="Detection model illustration light"
                width={1207}
                height={929}
              />
            </div>
          </div>

          {/* Right section */}
          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Detomato is developed using a real-world case study involving the
              detection of tomato leaf diseases through image-based analysis.
              Tomato plants are highly vulnerable to fungal, bacterial, and
              viral infections, which can significantly reduce crop quality and
              yield.
            </p>

            <p className="text-muted-foreground">
              The system utilizes a deep learning model specifically a
              Convolutional Neural Network (CNN) trained on thousands of
              annotated tomato leaf images. Each image represents different
              disease classes such as Bacterial Spot, Early Blight, Healthy,
              Late Blight, Leaf Mold.
            </p>

            <p className="text-muted-foreground">
              Through automated feature extraction and pattern recognition,
              Detomato can classify diseases with high accuracy. This empowers
              farmers, researchers, and agricultural practitioners to quickly
              diagnose leaf conditions and take preventive action before the
              disease spreads further.
            </p>

            {/* <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  “Detomato demonstrates how AI can transform agricultural
                  practices. By analyzing leaf images instantly, it supports
                  faster and more accurate decision-making in crop protection.“
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">
                    John Doe, Agritech Researcher
                  </cite>
                </div>
              </blockquote>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
