import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  const faqItems = [
    {
      id: "item-1",
      question: "How does the house price prediction work?",
      answer:
        "Our system uses a machine learning model trained on rumah123.com data to estimate house prices based on features like location, size, number of rooms, and more.",
    },
    {
      id: "item-2",
      question: "How accurate are the predictions?",
      answer:
        "Accuracy depends on the quality of the input. However, the model has been trained and tested with real datasets to ensure reliable price estimates.",
    },
    {
      id: "item-3",
      question: "Can I upload my own dataset for prediction?",
      answer:
        "Not yet, but we are planning to support user-uploaded data in future updates.",
    },
    {
      id: "item-4",
      question: "Is my data safe?",
      answer:
        "Yes, we do not store any personal information. All predictions are done in real-time without saving user data.",
    },
    {
      id: "item-5",
      question: "Where does your training data come from?",
      answer: (
        <span>
          This model is trained on scraped data from the{" "}
          <a className="text-sky-600 underline" href="https://www.rumah123.com">
            rumah123.com
          </a>{" "}
          website.
        </span>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
              >
                <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="text-base">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
