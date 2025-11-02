import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" className="text-center mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            variant="body"
            className="text-center text-gray-600 mb-12"
          >
            Got questions? We've got answers.
          </Typography>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="border-2 border-gray-200 rounded-lg overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                whileHover={{ backgroundColor: '#f9fafb' }}
              >
                <Typography variant="h4" className="font-medium">
                  {faq.question}
                </Typography>
                <motion.span
                  className="text-2xl text-gray-400 ml-4"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <Typography variant="body" className="text-gray-600">
                        {faq.answer}
                      </Typography>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

