"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";

export function FAQSection() {
  return (
    <section id="faqs" className="py-12 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-intiki-navy mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">Everything you need to know</p>
        </div>

        <Accordion type="single" collapsible className="bg-white rounded-2xl px-5 shadow-sm">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
