import { motion } from 'framer-motion';
import { Typography } from '../atoms/Typography.tsx';
import { IMAGES } from '../../constants/index.ts';

export const About = () => {
  return (
    <section id="about" className="w-full py-20 md:py-28 px-4 md:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.35 }}
        >
          <Typography variant="h2" className="mb-4">
            Precision meets artistry
          </Typography>
          <Typography variant="body" className="mb-6">
            At Guile, our master barbers craft styles tailored to your character. We combine classic technique with modern design to deliver an experience that feels premium from the first consult to the final reveal.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="relative rounded-2xl overflow-hidden border border-white/10"
        >
          <img src={IMAGES.aboutImg} alt="Barber at work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-tr from-black/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
