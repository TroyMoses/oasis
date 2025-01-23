import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often should I get a Dental Clean?",
    answer:
      "It is recommended to get a professional dental cleaning every 6 months to maintain optimal oral health.",
  },
  {
    question: "How much does a checkup cost? Are checkups important?",
    answer:
      "Regular checkups are crucial for preventing dental issues. Contact us for current pricing as it may vary based on specific needs.",
  },
  {
    question: "Why do I Need Dental X-Rays?",
    answer:
      "Dental X-rays help detect issues that aren't visible during a regular dental exam, such as decay between teeth, problems below the gum line, and bone loss.",
  },
  {
    question: "Should you rinse your mouth after brushing?",
    answer:
      "It's recommended not to rinse immediately after brushing, as this washes away the concentrated fluoride in the remaining toothpaste.",
  },
  {
    question: "Why does my mouth feel dry?",
    answer:
      "Dry mouth can be caused by medications, certain medical conditions, dehydration, or lifestyle factors. It's important to identify the cause as it can lead to dental problems.",
  },
  {
    question: "I Have Sensitive Teeth. How Do I Fix This?",
    answer:
      "Sensitive teeth can be treated with special toothpaste, fluoride treatments, or dental procedures depending on the cause. Consult our dentists for the best solution.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex items-start gap-12 max-w-4xl mx-auto">
          <div className="hidden md:block flex-shrink-0">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-full p-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">FAQ</h2>
                <p className="text-muted-foreground">
                  Frequently Asked Question on Dental Services.
                </p>
              </div>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
