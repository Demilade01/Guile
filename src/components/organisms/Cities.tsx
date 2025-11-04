import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Typography } from '../atoms/Typography.tsx';
import { CityBadge } from '../molecules/CityBadge.tsx';
import { IMAGES } from '../../constants/index.ts';

export const Cities = () => {
  return (
    <section id="cities" className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-transparent overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.citiesBg})` }}
      />
      <div className="absolute inset-0 -z-10 bg-black/75" />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" className="mb-4">
            Launching soon
          </Typography>
          <Typography
            variant="body"
            className="mb-8 max-w-2xl mx-auto"
          >
            We're starting with Boston and NYC to ensure we build the best
            platform for barbers. More cities coming soon.
          </Typography>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CityBadge city="Boston" size="md" />
          <CityBadge city="NYC" size="md" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
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
          <motion.div
            className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-sm hover:shadow-lg hover:border-white/40 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-gray-400" />
              <CityBadge city="Boston" size="sm" />
            </div>
            <Typography variant="body" className="">
              Launching in Boston Q1 2025. Join the waitlist to be among the
              first barbers to experience Guile.
            </Typography>
          </motion.div>
          <motion.div
            className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-sm hover:shadow-lg hover:border-white/40 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-gray-400" />
              <CityBadge city="NYC" size="sm" />
            </div>
            <Typography variant="body" className="">
              Launching in NYC Q1 2025. Get early access and help shape the
              future of barbershop management.
            </Typography>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

