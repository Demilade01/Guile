import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '../atoms/Typography.tsx';
import { FAQ_ITEMS, type FAQItem } from '../../constants/index.ts';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-transparent">
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
            className="text-center mb-12"
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
          {FAQ_ITEMS.map((faq: FAQItem, index: number) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-sm hover:shadow-lg hover:border-white/40 transition-all duration-300 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/10 transition-colors"
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
              >
                <Typography variant="h4" className="font-medium">
                  {faq.question}
                </Typography>
                <motion.span
                  className="text-2xl text-gray-500 ml-4"
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
                      <Typography variant="body" className="">
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

