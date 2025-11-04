import { motion } from 'framer-motion';
import { Typography } from '../atoms/Typography.tsx';
import { IMAGES } from '../../constants/index.ts';

export const Gallery = () => {
  return (
    <section id="gallery" className="w-full py-20 md:py-28 px-4 md:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <Typography variant="h2" className="text-center mb-12">
          Gallery
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {IMAGES.gallery.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-xl border border-white/10"
            >
              <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
