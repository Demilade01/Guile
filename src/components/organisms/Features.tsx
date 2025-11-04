import { motion } from 'framer-motion';
import { Calendar, Users, Bell, BarChart } from 'lucide-react';
import { Typography } from '../atoms/Typography.tsx';
import { FEATURES, type FeatureItem } from '../../constants/index.ts';
import { IMAGES } from '../../constants/index.ts';

const iconMap: Record<FeatureItem['icon'], React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  users: Users,
  bell: Bell,
  barChart: BarChart,
};

export const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.28,
      },
    },
  };

  return (
    <section id="features" className="relative w-full py-20 md:py-28 px-4 md:px-8 bg-transparent overflow-hidden">
      {/* Photo background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.featuresBg})` }}
      />
      <div className="absolute inset-0 -z-10 bg-black/75" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.28 }}
        >
          <Typography variant="h2" className="text-center mb-4">
            Built for barbers, by barbers
          </Typography>
          <Typography
            variant="body"
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            Everything you need to run your barbershop efficiently, all in one
            platform.
          </Typography>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                className="p-6 md:p-7 bg-white/8 backdrop-blur-md border border-white/15 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)] hover:border-white/30 transition-all duration-200"
              >
                <div className="mb-4 text-white"><Icon className="w-8 h-8" /></div>
                <Typography variant="h4" className="mb-2">
                  {feature.title}
                </Typography>
                <Typography variant="body" className="">
                  {feature.description}
                </Typography>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

