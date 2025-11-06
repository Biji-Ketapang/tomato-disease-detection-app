export default function About() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-4xl font-medium mb-8">
              The Rego Omah brings together our models and data exploration.
            </h2>
            <img
              className="text-foreground h-16 w-auto"
              src="/logo/logo2_removed.png"
              alt="Logo Rego Omah"
            />
          </div>
          <div className="space-y-6 text-justify">
            <p>
              Rego Omah is more than just a price prediction tool. It offers an
              integrated platform that combines interactive data exploration and
              intelligent models to help users uncover patterns, analyze housing
              trends, and estimate property values with clarity.
            </p>
            <p>
              Whether you're exploring market data or estimating home prices,
              Rego Omah equips you with the tools to make confident, data-driven
              decisions in real estate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
