import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion>
      {items.map((item, index) => (
        <AccordionItem key={index} value={index}>
          <AccordionTrigger className="text-left text-base font-medium text-[#14331A]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm leading-relaxed text-gray-600">
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
