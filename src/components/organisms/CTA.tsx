import { motion } from 'framer-motion';
import { Typography } from '../atoms/Typography.tsx';
import { Button } from '../atoms/Button.tsx';
import { IMAGES } from '../../constants/index.ts';

export const CTA = () => {
  const scrollToWaitlist = () => {
    const form = document.getElementById('waitlist-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta" className="relative w-full py-24 px-4 md:px-8 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.3 }}
        >
          <Typography variant="h2" className="mb-4">
            Experience the Art of Grooming
          </Typography>
          <Typography variant="body" className="mb-8">
            Book your session now and step into a refined grooming experience.
          </Typography>
          <Button variant="primary" size="lg" onClick={scrollToWaitlist}>
            Book Your Session Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
