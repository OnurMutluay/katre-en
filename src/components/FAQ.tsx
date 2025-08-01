import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is first meeting and proposal paid?",
    answer:
      "No — our first meeting and proposal are completely free of charge.",
    value: "item-1",
  },
  {
    question: "Do you only provide the services listed on your website?",
    answer:
      "No — thanks to our in-house technical team and extensive outsourcing network, we can develop custom consultancy services tailored to your specific needs.",
    value: "item-2",
  },
  {
    question: "Do you offer services outside the UK??",
    answer:
      "Yes — however, clients outside the UK can only access our services online.",
    value: "item-3",
  },
  {
    question:
      "Do you work on a one-time project basis or offer long-term contracts?",
    answer:
      "We do both — providing flexible options for single projects as well as long-term partnerships.",
    value: "item-4",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
