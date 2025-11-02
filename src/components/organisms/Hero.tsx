import { motion } from 'framer-motion';
import { Typography } from '../atoms/Typography.tsx';
import { CityBadge } from '../molecules/CityBadge.tsx';
import { Button } from '../atoms/Button.tsx';

export const Hero = () => {
  const scrollToWaitlist = () => {
    const form = document.getElementById('waitlist-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-3 mb-6"
        >
          <CityBadge city="Boston" />
          <CityBadge city="NYC" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Typography variant="h1" className="mb-6">
            A better booking app.
            <br />
            Just for barbers.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="body" className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our waitlist now! We're launching in Boston and NYC to start. Get
            early access to the booking platform designed specifically for barbers.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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

