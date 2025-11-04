import { motion } from 'framer-motion';
import { Typography } from '../atoms/Typography.tsx';
import { CityBadge } from '../molecules/CityBadge.tsx';
import { Button } from '../atoms/Button.tsx';
import { IMAGES } from '../../constants/index.ts';

export const Hero = () => {
  const scrollToWaitlist = () => {
    const form = document.getElementById('waitlist-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-20 md:py-28 px-4 md:px-8 bg-transparent overflow-hidden">
      {/* Full-bleed photo background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      />
      {/* Dark overlay to keep readability */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="flex justify-center gap-3 mb-6"
        >
          <CityBadge city="Boston" />
          <CityBadge city="NYC" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.06 }}
        >
          <Typography variant="h1" className="mb-6 tracking-tight">
            A better booking app.
            <br />
            Just for barbers.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.12 }}
        >
          <Typography variant="body" className="mb-10 max-w-2xl mx-auto">
            Join our waitlist now! We're launching in Boston and NYC to start. Get
            early access to the booking platform designed specifically for barbers.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.18 }}
          whileHover={{ y: -2, scale: 1.02 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToWaitlist}
          >
            Join Waitlist
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

