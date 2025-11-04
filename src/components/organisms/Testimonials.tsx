import { motion } from 'framer-motion';
import { Typography } from '../atoms/Typography.tsx';
import { TESTIMONIALS } from '../../constants/index.ts';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-20 md:py-28 px-4 md:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <Typography variant="h2" className="text-center mb-12">
          What people say
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.25 }}
              className="p-6 rounded-xl bg-white/8 backdrop-blur-md border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3 mb-4">
                {t.avatar && (
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                )}
                <span className="text-white font-medium">{t.name}</span>
              </div>
              <Typography variant="body">“{t.quote}”</Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
