import { useState } from 'react';
import { Typography } from '../atoms/Typography.tsx';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How much does Guile cost?',
    answer:
      'Pricing details will be announced closer to launch. Join the waitlist to be notified first and get early access pricing.',
  },
  {
    question: 'When will Guile launch?',
    answer:
      'We\'re launching in Boston and NYC in Q1 2025. More cities will follow based on demand.',
  },
  {
    question: 'What makes Guile different from other booking apps?',
    answer:
      'Guile is built specifically for barbers with features tailored to barbershop operations, client management, and the unique needs of the barbering industry.',
  },
  {
    question: 'Do I need any technical knowledge to use Guile?',
    answer:
      'Not at all! Guile is designed to be intuitive and easy to use. If you can use a smartphone, you can use Guile.',
  },
  {
    question: 'Can I use Guile if I\'m not in Boston or NYC?',
    answer:
      'Initially, Guile will launch in Boston and NYC. However, you can join the waitlist from anywhere, and we\'ll notify you when we expand to your city.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <Typography variant="h2" className="text-center mb-4">
          Frequently asked questions
        </Typography>
        <Typography
          variant="body"
          className="text-center text-gray-600 mb-12"
        >
          Got questions? We've got answers.
        </Typography>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <Typography variant="h4" className="font-medium">
                  {faq.question}
                </Typography>
                <span className="text-2xl text-gray-400 ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <Typography variant="body" className="text-gray-600">
                    {faq.answer}
                  </Typography>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

