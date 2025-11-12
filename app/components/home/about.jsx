export default function About() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-4xl font-medium mb-8"> </h2>
            <img
              className="text-foreground h-20 w-auto"
              src="/logo/detomato-h.png"
              alt="Logo Detomato"
            />
          </div>
          <div className="space-y-6 text-justify">
            <p>
              Detomato is an AI-powered tool that detects tomato leaf diseases
              from photos. Using deep learning, it delivers quick and accurate
              diagnoses.
            </p>
            <p>
              With Detomato, you can instantly understand the health condition
              of your tomato plants and take the right steps to manage potential
              diseases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
