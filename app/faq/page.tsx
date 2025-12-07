"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What are your store hours?",
    answer: (
      <ul className="text-green-800 space-y-1">
        <li><strong>Sunday:</strong> 11 AM – 6 PM</li>
        <li><strong>Monday:</strong> 10 AM – 8 PM</li>
        <li><strong>Tuesday:</strong> 10 AM – 8 PM</li>
        <li><strong>Wednesday:</strong> 10 AM – 8 PM</li>
        <li><strong>Thursday:</strong> 10 AM – 8 PM</li>
        <li><strong>Friday:</strong> 10 AM – 9 PM</li>
        <li><strong>Saturday:</strong> 10 AM – 9 PM</li>
      </ul>
    ),
  },
  {
    question: "Where is Escos located?",
    answer: "We are located at 2700 John Williams Blvd, Bedford, IN.",
  },
  {
    question: "Do you offer CBD for pets?",
    answer: "Yes! We carry a selection of pet-friendly CBD products for dogs and cats.",
  },
  {
    question: "Are your products lab-tested?",
    answer: "All of our CBD and wellness products are third-party lab tested for quality and safety.",
  },
  {
    question: "Do you host community events?",
    answer: "Yes! We regularly host live shows, educational events, and community gatherings.",
  },
  {
    question: "Can I buy products online?",
    answer: "Currently, our products are available in-store only. Visit us to see our full selection.",
  },
  {
    question: "Do you offer discounts or promotions?",
    answer: "We offer weekly specials and occasional community discounts. Check our Events page for updates.",
  },
  {
    question: "Is Escos Green compliant with local laws?",
    answer: "Yes, we fully comply with all state and federal CBD regulations.",
  },
  {
    question: "Do you offer consultations?",
    answer: "Our knowledgeable staff can answer questions about wellness and product use while you shop.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, debit cards, and major credit cards.",
  },
];

const FAQPage = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 text-green-700 text-center">
        Frequently Asked Questions
      </h1>
      <div className="w-full max-w-3xl">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-green-200 rounded-lg overflow-hidden mb-4"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-green-50 hover:bg-green-100 transition"
              onClick={() => toggleFAQ(idx)}
            >
              <span className="font-semibold text-green-900">{faq.question}</span>
              <span className="text-green-700">
                {openIndexes.includes(idx) ? "−" : "+"}
              </span>
            </button>
            <div
  className={`px-6 overflow-hidden transition-max-h duration-500 ease-in-out ${
    openIndexes.includes(idx) ? "max-h-96 py-4" : "max-h-0"
  }`}
>
  <div className="text-green-800">
    {faq.answer}
  </div>
</div>

          </div>
        ))}
      </div>
    </main>
  );
};

export default FAQPage;
